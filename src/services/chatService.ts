import { GoogleGenAI } from '@google/genai';
import { crafts } from '../data/crafts';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

// Construct context from crafts data
const contextData = crafts.map(c => `- ${c.nameAR} (${c.nameEN || c.nameFR}): ${c.shortDescription}`).join('\n');

const systemInstruction = `اسمك "حرفة"، المساعد الذكي لمنصة "حرفتي" الجزائرية المتخصصة في التكوين المهني واكتشاف الميولات الحرفية. 
أنت خبير في كل ما يتعلق بالحرف اليدوية والرقمية والخدماتية في الجزائر. 
مهمتك: مساعدة الشباب الجزائري في اكتشاف ميولاتهم المهنية، والإجابة عن أسئلتهم حول الحرف المتاحة، والتكوين، والتمهين. 

تعليمات الشخصية والأسلوب:
- أجب بالفصحى المبسطة الواضحة، مع لمسة احترام وتشجيع. 
- إذا سُئلت بالإنجليزية، أجب بالإنجليزية المهنية الدافئة. 
- استخدم قاعدة المعرفة المقدمة لك، ولا تخترع معلومات غير موجودة فيها. 
- إذا كان السؤال خارج نطاق المنصة (سياسة، دين، رياضة...)، قل بلطف: "معذرة، هذا السؤال خارج نطاق تخصصي في الحرف والتكوين المهني. هل يمكنني مساعدتك في موضوع يتعلق بالحرف؟" 
- كن جاداً، دافئاً، موجزاً، ولا تستخدم ألفاظاً طفولية.
- يمكنك اقتراح إجراء اختبار سريع من 3 أسئلة لاكتشاف الميول إذا كان المستخدم محتاراً.

معلومات عن الحرف المتوفرة حالياً في المنصة:
${contextData}

دليل المنصة:
- صفحة "الحرف" تحتوي على الدليل الشامل.
- صفحة "الاختبار" تساعد في تقييم المهارات.
- صفحة "التعلم" للبدء في مسارات تعليمية تفاعلية.
`;

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export async function sendChatMessage(messages: ChatMessage[], newMessage: string): Promise<string> {
  const startTime = Date.now();
  console.log(`[ChatService] New request at ${new Date(startTime).toISOString()}`);
  console.log(`[ChatService] User Message: ${newMessage}`);

  if (!apiKey) {
    console.error("[ChatService] API Key is missing");
    throw new Error("API Key is missing. Please configure GEMINI_API_KEY in the settings.");
  }

  const history: any[] = messages.slice(-5).map(m => ({ // Context limited to last 5 messages as requested
    role: m.role,
    parts: [{ text: m.content }]
  }));
  
  const formattedMessages = [
      ...history,
      { role: 'user', parts: [{ text: newMessage }] }
  ];

  async function attempt(retryCount = 0): Promise<string> {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: formattedMessages,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      if (!response.text) {
        throw new Error("Received empty response from the AI model.");
      }

      const duration = Date.now() - startTime;
      console.log(`[ChatService] Response received in ${duration}ms`);
      return response.text;
    } catch (error: any) {
      console.error(`[ChatService] Attempt ${retryCount + 1} failed:`, error);
      
      if (retryCount < 1) { // 1 retry as requested
        console.log("[ChatService] Retrying...");
        return attempt(retryCount + 1);
      }
      
      const errorMessage = error?.message || 'An unexpected error occurred during chat.';
      // Map common errors for frontend
      if (errorMessage.includes('429') || errorMessage.includes('quota')) throw new Error('rate_limited');
      if (errorMessage.includes('timeout') || errorMessage.includes('deadline')) throw new Error('timeout');
      if (errorMessage.includes('network') || errorMessage.includes('fetch')) throw new Error('network_error');
      
      throw new Error(errorMessage);
    }
  }

  return attempt();
}
