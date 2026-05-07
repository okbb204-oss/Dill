export interface Question {
  id: string;
  category: 'personality' | 'environment' | 'abilities' | 'circumstances' | 'interests';
  text: string;
  type: 'single' | 'multiple' | 'scale';
  options?: { value: string; label: string; weights: Record<string, number> }[];
}

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'personality',
    text: 'ما هو أسلوب العمل المفضل لديك؟',
    type: 'single',
    options: [
      { value: 'hands_on', label: 'أحب العمل بيدي وإنتاج أشياء ملموسة', weights: { 'carpentry': 5, 'plumbing': 4, 'sewing': 4, 'welding': 5, 'construction': 5 } },
      { value: 'planning_problem_solving', label: 'أحب التخطيط وحل المشكلات المعقدة', weights: { 'electronics': 5, 'mechanics': 4, 'hvac': 4, 'it_technician': 5 } },
      { value: 'people', label: 'أحب التواصل مع الناس وخدمتهم المباشرة', weights: { 'hairdressing': 5, 'cooking': 3, 'collective_cooking': 4 } }
    ]
  },
  {
    id: 'q2',
    category: 'environment',
    text: 'أين تفضل العمل في العادة؟',
    type: 'single',
    options: [
      { value: 'workshop', label: 'في ورشة داخلية ثابتة', weights: { 'carpentry': 5, 'hairdressing': 4, 'sewing': 5, 'it_technician': 3 } },
      { value: 'outdoors', label: 'في موقع بناء / خارجي / متنقل', weights: { 'agriculture': 5, 'hvac': 4, 'plumbing': 3, 'construction': 5 } },
      { value: 'home', label: 'من المنزل', weights: { 'sewing': 5, 'traditional_crafts': 4, 'cooking': 3, 'it_technician': 4, 'collective_cooking': 2 } }
    ]
  },
  {
    id: 'q3',
    category: 'abilities',
    text: 'قيّم مدى صبرك على العمل الدقيق والمتكرر:',
    type: 'scale', // 1-5 scale handled in UI, weights mapped
    // If scale 4-5 applied, adds to these:
    options: [
      { value: 'high_patience', label: 'صبر عالي', weights: { 'electronics': 5, 'sewing': 4, 'traditional_crafts': 5, 'construction': 3, 'it_technician': 4 } }
    ]
  },
  {
    id: 'q4',
    category: 'interests',
    text: 'أي من هذه النشاطات مارستها أو تستمتع بها؟ (اختر ما ينطبق)',
    type: 'multiple',
    options: [
      { value: 'cooking', label: 'الطبخ أو تحضير الحلويات', weights: { 'cooking': 5, 'collective_cooking': 5 } },
      { value: 'fixing', label: 'إصلاح الأجهزة المعطلة أو الأسلاك أو الحواسيب', weights: { 'electronics': 5, 'mechanics': 3, 'it_technician': 5 } },
      { value: 'building', label: 'تركيب الأثاث أو النجارة البسيطة', weights: { 'carpentry': 5 } },
      { value: 'masonry', label: 'أعمال البناء البسيطة وترميم الجدران', weights: { 'construction': 5 } },
      { value: 'plants', label: 'العناية بالنباتات والزراعة', weights: { 'agriculture': 5 } },
      { value: 'drawing', label: 'الرسم، التصميم أو الأشغال اليدوية', weights: { 'traditional_crafts': 5, 'sewing': 3 } }
    ]
  }
];
