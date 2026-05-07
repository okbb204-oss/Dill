import fs from 'fs';
import path from 'path';

// This script extracts `visual_description` from course data and generates ready-to-use prompts for Midjourney/Lottie.

const template = (description, type) => {
  return `
[نوع الملف: ${type === 'animation' ? 'رسم متحرك (Animation)' : 'صورة ثابتة (Static Image)'}]

أنشئ ${type === 'animation' ? 'رسماً متحركاً' : 'صورة ثابتة'} بأسلوب vector illustration بسيط ونظيف، يعرض المشهد التالي:

${description}

**الإرشادات الإلزامية:**
- استخدم لوحة الألوان: خلفية #F9F6F0، عناصر رئيسية باللون #C67B4B، وخطوط خارجية رفيعة بلون #2D2D2D.
- إضافة لمسة جزائرية خفيفة جداً: زخرفة زليج هندسية مبسطة في زاوية أو إطار، أو قوس باب جزائري في الخلفية.
- الشخصيات (إن وجدت) بالغون، وجوه بسيطة بدون تعابير طفولية.
- لا نصوص أو أحرف في الصورة (إلا أرقام أو رموز ضرورية جداً).
${type === 'animation' ? '- في حال الرسم المتحرك: حركات ناعمة وبطيئة، مدة 20-40 ثانية، قابلة للتكرار.' : ''}
- لا مؤثرات مبالغ فيها، لا ألوان نيون، لا طابع كرتوني.

--- السريعة المباشرة لمولد الصور (Midjourney) ---
A ${type === 'animation' ? 'short seamless looping vector animation sequence' : 'clean flat vector illustration'} for an Algerian vocational training platform. ${description}. Warm terracotta #C67B4B, muted olive #6B705C, sandy beige background #F9F6F0. Thin line art, subtle geometric zellige pattern in background. Professional, warm, not childish. No text. --style expressive --no photorealistic
`;
};

// In a real scenario, this would import the TS files or parse them.
// We will use a simple regex to extract visual_descriptions as a proof of concept.

function extractPrompts(directory) {
  const files = fs.readdirSync(directory);
  let outputs = [];

  for (const file of files) {
    if (!file.endsWith('-course.ts')) continue;

    const content = fs.readFileSync(path.join(directory, file), 'utf-8');
    const regex = /title:\s*['"](.*?)['"][\s\S]*?visual_description:\s*['"](.*?)['"]/g;
    
    let match;
    while ((match = regex.exec(content)) !== null) {
      const title = match[1];
      const description = match[2];
      const type = description.includes('متحرك') || description.includes('حرك') ? 'animation' : 'image';
      
      outputs.push(`### الدرس: ${title}\n` + template(description, type));
    }
  }

  return outputs.join('\n\n');
}

const dataDir = path.join(process.cwd(), 'src/data');
const result = extractPrompts(dataDir);

fs.writeFileSync(path.join(process.cwd(), 'PROMPTS_EXPORT.md'), result, 'utf-8');
console.log('تم تصدير البرومبتات بنجاح إلى ملف PROMPTS_EXPORT.md');
