import { GoogleGenAI, Type } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is missing from environment variables.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || '' });

// Define the response schema matching the expected output
const schema = {
  type: Type.OBJECT,
  properties: {
    craft_id: { type: Type.STRING },
    levels: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING },
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          lessons: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                title: { type: Type.STRING },
                visualType: { type: Type.STRING, description: "animation | illustration" },
                visualDescription: { type: Type.STRING },
                summary: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                task: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    description: { type: Type.STRING },
                  },
                  required: ["title", "description"]
                },
                quiz: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      question: { type: Type.STRING },
                      options: {
                        type: Type.ARRAY,
                        items: {
                          type: Type.OBJECT,
                          properties: {
                            id: { type: Type.STRING },
                            text: { type: Type.STRING },
                            isCorrect: { type: Type.BOOLEAN }
                          },
                          required: ["id", "text", "isCorrect"]
                        }
                      },
                      explanation: { type: Type.STRING }
                    },
                    required: ["id", "question", "options", "explanation"]
                  }
                },
                xpReward: { type: Type.INTEGER }
              },
              required: ["id", "title", "visualType", "visualDescription", "summary", "task", "quiz", "xpReward"]
            }
          }
        },
        required: ["id", "title", "description", "lessons"]
      }
    }
  },
  required: ["craft_id", "levels"]
};

export class GeminiError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'GeminiError';
  }
}

const quizSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question_ar: { type: Type.STRING },
      question_en: { type: Type.STRING },
      options_ar: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      },
      options_en: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      },
      correct_index: { type: Type.INTEGER },
      explanation_ar: { type: Type.STRING },
      explanation_en: { type: Type.STRING }
    },
    required: ["question_ar", "question_en", "options_ar", "options_en", "correct_index", "explanation_ar", "explanation_en"]
  }
};

export async function generateLearningPath(craftName: string, craftDesc: string): Promise<string> {
  if (!apiKey) {
    throw new GeminiError("API Key is missing. Please configure GEMINI_API_KEY in the settings.", "MISSING_KEY");
  }

  const systemInstruction = `You are an expert vocational training curriculum designer for an Algerian audience. Generate content in simple, professional Arabic suitable for adults (not childish).
Create a complete learning path for the craft "${craftName}". The path should have 4 levels, each with 2-3 lessons.`;

  const prompt = `Craft Name: ${craftName}
Description: ${craftDesc}

Provide a JSON output conforming strictly to the requested schema.
Each lesson must contain:
1. Title
2. Visual Description for a flat vector illustration or short animation (detailed for an artist)
3. Summary (5 points)
4. A small practical task
5. A 3-question quiz with explanations.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: schema,
        temperature: 0.7,
      }
    });

    if (!response.text) {
      throw new GeminiError("Received empty response from the AI model.");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error instanceof GeminiError) {
      throw error;
    }
    
    // Convert generic errors into our typed error
    const message = error?.message || 'An unexpected error occurred during API communication';
    throw new GeminiError(message, error?.status || 'UNKNOWN_ERROR');
  }
}

export async function generateQuizFromSummary(summary: string): Promise<string> {
  if (!apiKey) {
    throw new GeminiError("API Key is missing. Please configure GEMINI_API_KEY in the settings.", "MISSING_KEY");
  }

  const systemInstruction = `أنت مساعد تعليمي يصمم اختبارات قصيرة. ستُعطى ملخصاً لدرس (7 نقاط على الأكثر) ضمن منصة "حرفتي" الجزائرية للتكوين المهني. مهمتك: توليد 3 أسئلة اختيار من متعدد (4 خيارات لكل سؤال، واحد صحيح) بناءً على المحتوى المعطى فقط.

شروط صارمة:
- الأسئلة يجب أن تقيس فهماً للمفاهيم الأساسية المذكورة في الملخص، لا حفظاً أعمى.
- لا تكرر نفس المعلومة في أكثر من سؤال.
- يجب أن تكون الخيارات الخاطئة معقولة (ليست مضحكة أو واضحة الخطأ جداً).
- قدم تفسيراً موجزاً لكل إجابة صحيحة (لماذا هي صحيحة).
- أعد المخرجات بصيغة JSON. حقل "correct_index" رقم الخيار الصحيح (من 0 إلى 3).`;

  const prompt = `ملخص الدرس:
${summary}`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: quizSchema,
        temperature: 0.7,
      }
    });

    if (!response.text) {
      throw new GeminiError("Received empty response from the AI model.");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error instanceof GeminiError) {
      throw error;
    }
    const message = error?.message || 'An unexpected error occurred during API communication';
    throw new GeminiError(message, error?.status || 'UNKNOWN_ERROR');
  }
}
