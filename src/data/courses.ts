import { securityCourse } from './security-course';
import { sanitaryPlumbingCourse } from './plumbing-course';
import { accountingCourse } from './accounting-course';
import { storekeeperCourse } from './storekeeper-course';
import { autoElectricianCourse } from './autoelectrician-course';
import { weldingCourse } from './welding-course';
import { constructionCourse } from './construction-course';
import { itTechnicianCourse } from './it-technician-course';
import { collectiveCookingCourse } from './collective-cooking-course';

export interface QuizQuestion {
  id: string;
  question: string;
  questionEN?: string;
  options: { id: string; text: string; textEN?: string; isCorrect: boolean }[];
  explanation: string;
  explanationEN?: string;
}

export interface Lesson {
  id: string;
  title: string;
  titleEN?: string;
  visualType: 'animation' | 'illustration';
  visualUrls: string[];
  visualDescription?: string;
  visualDescriptionEN?: string;
  duration: string;
  summary: string[];
  summaryEN?: string[];
  tools?: { name: string; nameEN?: string; image: string }[];
  task?: { title: string; titleEN?: string; description: string; descriptionEN?: string };
  quiz?: QuizQuestion[];
  xpReward: number;
}

export interface Level {
  id: string;
  title: string;
  titleEN?: string;
  description: string;
  descriptionEN?: string;
  lessons: Lesson[];
}

export interface Course {
  craftId: string;
  title: string;
  titleEN?: string;
  description: string;
  descriptionEN?: string;
  levels: Level[];
  badges?: {
    started: { id: string; title: string; titleEN?: string; description: string; descriptionEN?: string; icon: string };
    completed: { id: string; title: string; titleEN?: string; description: string; descriptionEN?: string; icon: string };
  };
}

export const coursesData: Record<string, Course> = {
  'collective_cooking': collectiveCookingCourse,
  'it_technician': itTechnicianCourse,
  'construction': constructionCourse,
  'welding': weldingCourse,
  'storekeeper': storekeeperCourse,
  'carpentry': {
    craftId: 'carpentry',
    title: 'أساسيات النجارة المعمارية',
    description: 'مسار تعليمي متكامل ينطلق بك من فهم أنواع الخشب إلى صناعة أول قطعة أثاث لك.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: عالم الأخشاب والأدوات',
        description: 'اكتشف أنواع الخشب المختلفة وتعرف على أدواتك الأساسية وكيفية استخدامها بأمان.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'مقدمة للنجارة المعمارية',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'رسم توضيحي لورشة نجارة منظمة مع تسليط الضوء على أدوات السلامة.',
            duration: '04:30',
            summary: [
              'النجارة الجمع بين الفن والهندسة العملية.',
              'السلامة أولاً: نظارات الحماية، قفازات، ومحيط عمل نظيف.',
              'النجارة مهنة تتطلب صبراً، قياساً دقيقاً، ولمسة فنية.'
            ],
            task: {
              title: 'تجهيز مساحة العمل',
              description: 'قم بتخصيص زاوية صغيرة في منزلك لتكون مساحة عملك، تأكد من إضاءتها الجيدة وتهويتها.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي القاعدة الذهبية والأولى قبل البدء في أي عمل نجارة؟',
                options: [
                  { id: 'o1', text: 'اختيار أفضل نوع خشب', isCorrect: false },
                  { id: 'o2', text: 'ارتداء معدات السلامة الشخصية وتجهيز المكان', isCorrect: true },
                  { id: 'o3', text: 'شحذ المنشار بقوة', isCorrect: false }
                ],
                explanation: 'السلامة هي الأهم. لا شيء يسبق حماية نفسك من الشظايا أو الغبار.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_2',
            title: 'أدوات القياس ووضع العلامات',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'حركة ليد ترسم خطاً مستقيماً باستخدام زاوية قائمة وقلم رصاص على لوح خشبي.',
            duration: '06:15',
            summary: [
              'قس مرتين، واقطع مرة واحدة (القاعدة الذهبية).',
              'استخدام شريط القياس (المتر) والزاوية القائمة (L-square).',
              'كيفية وضع علامات دقيقة باستخدام قلم رصاص نجار.'
            ],
            tools: [
              { name: 'شريط قياس', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80' },
              { name: 'زاوية قائمة', image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=400&q=80' }
            ],
            task: {
              title: 'تطبيق القياس',
              description: 'أحضر أي قطعة خشب أو حتى كرتون مقوى، واستخدم شريط القياس لرسم خطوط متوازية تفصل بينها 5 سم بالضبط.'
            },
            quiz: [
              {
                id: 'q2',
                question: 'لماذا نستخدم الزاوية القائمة (L-square) في وضع العلامات؟',
                options: [
                  { id: 'o1', text: 'للتأكد من أن الطول كافٍ', isCorrect: false },
                  { id: 'o2', text: 'لضمان رسم خط عمودي مستقيم تماماً للقطع', isCorrect: true },
                  { id: 'o3', text: 'لرسم الدوائر والأقواس', isCorrect: false }
                ],
                explanation: 'الزاوية القائمة تضمن أن يكون القطع مستقيماً بزاوية 90 درجة لتسهيل تركيب القطع لاحقاً.'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: تقنيات القطع والتشكيل',
        description: 'كيفية استخدام المناشير اليدوية والكهربائية للحصول على حواف مستقيمة ونظيفة.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'المنشار اليدوي: القبضة والحركة',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم متحرك يوضح زاوية ميلان المنشار اليدوي الصحيحة (45 درجة) مع اتجاه الحركة.',
            duration: '05:40',
            summary: [
              'اختيار المنشار المناسب للعمل (قص طولي أو عرضي).',
              'وضعية الجسد: قف بثبات واجعل ذراعك كتلة واحدة مع المنشار.',
              'الاستعانة بقطعة خشبية دليلاً لضمان استقامة القطع.'
            ],
            task: {
              title: 'تصحيح القبضة',
              description: 'امسك بأي مقبض يشبه المنشار وتدرب على حركة الذراع بحيث يكون المرفق والرسغ في خط مستقيم.'
            },
            xpReward: 40
          }
        ]
      }
    ]
  },
  'data_entry': {
    craftId: 'data_entry',
    title: 'تكوين عون إدراج المعلومات',
    description: 'مسار تعليمي متكامل ينطلق بك من أساسيات التعامل مع الحاسوب حتى إتقان الإدخال السريع وبناء قواعد البيانات.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: أساسيات الحاسوب ومكان العمل',
        description: 'تجهيز مساحة العمل، التعامل مع الملفات، حماية العينين، أساسيات الأمن السيبراني.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'التجهيزات الأساسية وطريقة الجلوس الصحية',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك لشخص يجلس أمام حاسوب. يظهر خط منقط من ظهره إلى الكرسي يوضح استقامة الظهر. ذراعاه بزاوية 90°. الشاشة على مستوى العين. يد تتحرك بلطف على لوحة مفاتيح.',
            duration: '05:00',
            summary: [
              'اجلس باستقامة ظهر على كرسي مريح.',
              'الشاشة يجب أن تكون على مستوى عينيك تماماً.',
              'قدماك مسطحتان على الأرض.',
              'الذراعان يشكلان زاوية قائمة مع لوحة المفاتيح.',
              'خذ استراحة 5 دقائق كل ساعة عمل.',
              'إضاءة الغرفة يجب أن تكون متوسطة وغير منعكسة على الشاشة.'
            ],
            task: {
              title: 'تجهيز مساحة العمل الخاصة بك',
              description: 'خذ صورة لمكان عملك الحالي (أو ارسمه). حدد 3 أشياء يمكنك تحسينها لتناسب وضعية الجلوس الصحية التي تعلمتها.'
            },
            quiz: [
              {
                id: 'q111',
                question: 'ما هي الزاوية الصحيحة لذراعيك عند الكتابة على لوحة المفاتيح؟',
                options: [
                  { id: 'o1', text: '45 درجة', isCorrect: false },
                  { id: 'o2', text: '90 درجة (زاوية قائمة)', isCorrect: true },
                  { id: 'o3', text: '180 درجة (مستقيمة تماماً)', isCorrect: false }
                ],
                explanation: 'الزاوية القائمة تمنع آلام الرسغ والكتف على المدى الطويل.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_2',
            title: 'التعامل مع نظام ويندوز – الملفات والمجلدات',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=400&q=80'],
            visualDescription: 'شاشة حاسوب تظهر سطح مكتب ويندوز. يد بالفأرة تنقر على "This PC". تظهر نافذة... يد تكتب اسماً لمجلد جديد.',
            duration: '06:00',
            summary: [
              'نظام التشغيل هو عقل الحاسوب.',
              'الملفات: مستندات، صور، جداول.',
              'المجلدات: أوعية لتنظيم الملفات.',
              'لإنشاء مجلد جديد: كليك يمين > New > Folder > اكتب اسماً.',
              'استخدم أسماء واضحة: "فواتير_2025" وليس "مجلد1".',
              'النسخ (Ctrl+C) واللصق (Ctrl+V) أساسيان.'
            ],
            task: {
              title: 'هيكلة مجلداتك الأولى',
              description: 'أنشئ على سطح مكتبك مجلداً رئيسياً اسمه "تكوين_عون_إدراج". بداخله، أنشئ 3 مجلدات فرعية: "تمارين"، "مشاريع"، "ملاحظات".'
            },
            quiz: [
              {
                id: 'q121',
                question: 'ما هو الاختصار المستخدم لعملية اللصق (Paste) في نظام الويندوز؟',
                options: [
                  { id: 'o1', text: 'Ctrl+C', isCorrect: false },
                  { id: 'o2', text: 'Ctrl+P', isCorrect: false },
                  { id: 'o3', text: 'Ctrl+V', isCorrect: true }
                ],
                explanation: 'Ctrl+C للنسخ، و Ctrl+V للصق.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_3',
            title: 'أساسيات لوحة المفاتيح واختصاراتها الذهبية',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك للوحة مفاتيح كبيرة. أصابع تتحرك بنمط صحيح على مفاتيح الصف الأساسي. الاختصارات المفتاحية تضيء.',
            duration: '04:45',
            summary: [
              'صف الارتكاز: أَسَد (A S D F) لليد اليسرى، ك م ن (J K L ;) لليد اليمنى.',
              'Ctrl+C: نسخ | Ctrl+V: لصق | Ctrl+X: قص.',
              'Ctrl+Z: تراجع.',
              'Ctrl+S: حفظ (احفظ باستمرار لتفادي ضياع البيانات).',
              'Ctrl+A: تحديد الكل.'
            ],
            task: {
              title: 'تطبيق الاختصارات عملياً',
              description: 'افتح برنامج المفكرة (Notepad) واكتب فقرة من 5 أسطر. طبق كل اختصار مرة واحدة على الأقل. احفظ الملف باسم "يومي_الاختصارات.txt".'
            },
            quiz: [
              {
                id: 'q131',
                question: 'لماذا يُعتبر الاختصار (Ctrl+S) من أهم اختصارات عون الإدراج؟',
                options: [
                  { id: 'o1', text: 'لأنه يسرع التحديد', isCorrect: false },
                  { id: 'o2', text: 'لأنه يحفظ العمل باستمرار ويحميه من الضياع', isCorrect: true },
                  { id: 'o3', text: 'لأنه ينسخ النص فوراً', isCorrect: false }
                ],
                explanation: 'حفظ عملك باستمرار يجنبك فقدانه في حال انقطاع الكهرباء أو تعطل الحاسوب.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_4',
            title: 'حماية العينين والصحة خلال العمل الطويل',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي ثابت لشخص أمام شاشة مع إظهار قاعدة 20-20-20 وتمارين تمدد بسيطة.',
            duration: '03:30',
            summary: [
              'قاعدة 20-20-20: كل 20 دقيقة، انظر لمسافة 20 قدماً (6 أمتار)، لمدة 20 ثانية.',
              'أغمض عينيك بانتظام لترطيبها.',
              'استخدم قطرات العين المرطبة عند الحاجة.',
              'اضبط سطوع الشاشة ليكون مريحاً.',
              'قم بتمارين تمدد الرقبة كل ساعة.',
              'قف وتحرك لمدة دقيقتين كل ساعة.'
            ],
            task: {
              title: 'تطبيق قاعدة الـ 20',
              description: 'اضبط مؤقتاً على هاتفك لكل 20 دقيقة. في كل مرة يرن، طبق قاعدة 20-20-20. لاحظ كيف يخف الإجهاد عن عينيك.'
            },
            xpReward: 20
          },
          {
            id: 'les_1_5',
            title: 'أساسيات الأمن المعلوماتي وسرية البيانات',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: شاشة حاسوب يظهر عليها ملف بعنوان "سري". يد تضع قفلاً على الملف. في الخلفية أيقونة درع.',
            duration: '06:30',
            summary: [
              'كلمة المرور القوية: حروف كبيرة وصغيرة + أرقام + رموز، وطولها 8+.',
              'لا تشارك كلمة مرورك مع أي شخص.',
              'لا تفتح مرفقات من مرسلين مجهولين.',
              'احذر من رسائل التصيد (Phishing).',
              'أغلق جلسة الحاسوب عندما تبتعد (Windows+L).',
              'احترم سرية بيانات الزبائن والمؤسسة.'
            ],
            task: {
              title: 'تغيير كلمات المرور',
              description: 'غيّر كلمة مرور حاسوبك أو هاتفك إلى كلمة مرور قوية واكتب ملاحظة تفيد بـ 3 أشياء ستفعلها لحماية بياناتك.'
            },
            quiz: [
              {
                id: 'q151',
                question: 'ما هي مواصفات كلمة المرور القوية والموثوقة؟',
                options: [
                  { id: 'o1', text: 'تتكون من 8 أحرف وأرقام متتالية سهلة الحفظ', isCorrect: false },
                  { id: 'o2', text: 'لا تقل عن 8 خانات، وتجمع بين الحروف الكبيرة والصغيرة والأرقام والرموز', isCorrect: true },
                  { id: 'o3', text: 'أن تكون اسم تاريخ ميلادك لسهولة تذكرها', isCorrect: false }
                ],
                explanation: 'الجمع بين انواع الخانات المتعددة يصعب جدا من اختراق كلمة المرور.'
              }
            ],
            xpReward: 35
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: إتقان البرمجيات المكتبية',
        description: 'أساسيات Word و Excel، التنسيق، الجداول، والمعادلات البسيطة للبيانات.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'Microsoft Word – التنسيق الأساسي والجداول',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة تظهر واجهة Word وكيفية التنسيق الأساسي والنقر على الأيقونات المطلوبة وإدراج جدول وتخصيصه.',
            duration: '08:00',
            summary: [
              'التنسيق الأساسي: غامق (Ctrl+B)، مائل (Ctrl+I)، مسطر (Ctrl+U).',
              'المحاذاة: يمين، وسط، يسار، ضبط (مهم للوثائق الرسمية).',
              'استخدم خط Times New Roman أو Arial بحجم 12 للوثائق.',
              'إدراج جدول من قائمة Insert.',
              'يمكنك دمج الخلايا وتقسيمها وتلوينها.'
            ],
            task: {
              title: 'كتابة وتسجيل القوائم',
              description: 'أنشئ وثيقة Word جديدة وأدرج فيها جدول 4x3 بمنتجات ومواد بأسعارها مع تنسيق جيد.'
            },
            xpReward: 40
          },
          {
            id: 'les_2_2',
            title: 'Microsoft Excel – الخلايا والمعادلات الأولية',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد لخليّة Excel مع إدخال معادلة فيها و تغير المجموع تلقائياً.',
            duration: '09:00',
            summary: [
              'إكسل = دفتر حسابات رقمي قوي وذكي.',
              'كل خلية لها عنوان (مثلاً A1).',
              'العمليات الأساسية: +, -, *, /',
              'المعادلة تبدأ بعلامة =',
              'يمكنك سحب المعادلة لتطبيقها برمشة عين.'
            ],
            task: {
              title: 'إعداد جدول حسابي',
              description: 'في جدول Excel مكوّن من يوم المصروفات قم بحساب مراجعة شاملة باستخدام SUM لكل العناصر.'
            },
            xpReward: 45
          },
          {
            id: 'les_2_3',
            title: 'Excel متقدم – التصفية والفرز والبحث',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة كبيرة تُجري تصفية البيانات في صفحة Excel مع توضيح أدوات الفرز.',
            duration: '07:30',
            summary: [
              'الفلترة (Filter): إظهار صفوف تحقق شرطاً معيناً فقط.',
              'الفرز (Sort): ترتيب البيانات أبجدياً أو رقمياً.',
              'البحث (Ctrl+F): العثور على القيمة المحددة.',
              'تجميد الألواح (Freeze Panes) للتركيز على العناوين.'
            ],
            task: {
              title: 'تطبيق الفلترة والتصفية',
              description: 'استخدم الجدول السابق لتطبيق التصفية بحسب المدينة واسم المصروف ليتراءى لك مدى مرونة الأداة.'
            },
            xpReward: 40
          },
          {
            id: 'les_2_4',
            title: 'Google Sheets – العمل التعاوني السحابي',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'تفاعل بين مؤشرين (لفأرتين) في وقت واحد على جدول في الإنترنت، مما يوضّح التعاون المباشر.',
            duration: '06:00',
            summary: [
              'Google Sheets مجاني ومتوفر على مدار الساعة.',
              'العمل التعاوني في نفس الوقت بين مجموعة طاقم الموظفين.',
              'حفظ آلي للتغييرات.',
              'إمكانية المشاركة بالبريد الإلكتروني.'
            ],
            task: {
              title: 'بدء العمل الجماعي',
              description: 'أنشئ ملفاً جديداً وشاركه مع صديق لك وابدآ بتغيير البيانات في نفس الوقت.'
            },
            xpReward: 35
          },
          {
            id: 'les_2_5',
            title: 'تحويل الملفات بين الصيغ المختلفة',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'تحويل أيقونة الملف من صيغة لأخرى بشكل متحرك تفاعلي يوضّح سير عمليات الحفظ التلقائي.',
            duration: '04:30',
            summary: [
              'امتدادات مثل .docx, .xlsx, .pdf, .csv',
              'استخدام الأمر (File > Save As) لتحويل نوع الملف للبيانات.',
              'أدوات OCR تساعد على استرجاع النص من الصور.',
              'الضغط ببرامج ZIP يوفر الوقت أثناء النقل.'
            ],
            task: {
              title: 'اختبار الصيغ',
              description: 'احفظ وثيقتك الأولى بصيغة .pdf ولاحظ اختلاف الطريقة حين لا يمكنك تحوير أي رقم.'
            },
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_3',
        title: 'المرحلة 3: سرعة ودقة الإدخال المهني',
        description: 'تحسين سرعتك في الكتابة، تحويل البيانات الورقية والصوتية، واكتساب منهجيات التدقيق.',
        lessons: [
          {
            id: 'les_3_1',
            title: 'تقنيات الكتابة السريعة دون أخطاء',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'لوحة التحكم ومؤشر السرعة والدقة مع أصابع متحركة تعزز مبدأ الكتابة العمياء.',
            duration: '08:45',
            summary: [
              'لا تنظر إلى لوحة المفاتيح. عيناك على الشاشة.',
              'استخدم جميع أصابعك العشرة بلمس وتدريب منتظم.',
              'التدرب عبر المنصات المتخصصة كموقع Ratatype.',
              'استهدف أولاً الدقة قبل السرعة.',
              'السرعة الممتازة لعون الإدراج لا تقل عن 30-50 WPM.'
            ],
            task: {
              title: 'اكتشاف سرعتك الأولية',
              description: 'قم بتسجيل حساب والعمل لـ 15 دقيقة على TypingClub ودوِّن معدل الكلمات الأول الخاص بك.'
            },
            quiz: [
              {
                id: 'q311',
                question: 'أيهما يحظى بالأولوية المطلقة في بداية التكوين لعون إدراج البيانات؟',
                options: [
                  { id: 'o1', text: 'سرعة الإدخال للحصول على إنتاجية أعلى', isCorrect: false },
                  { id: 'o2', text: 'الدقة العالية وتقليل أخطاء الطباعة', isCorrect: true },
                  { id: 'o3', text: 'استخدام الاختصارات فقط', isCorrect: false }
                ],
                explanation: 'الدقة توفر وقت المراجعة المضاعف، وتؤسس لمنهجية قوية في الإدخال اللاحق.'
              }
            ],
            xpReward: 50
          },
          {
            id: 'les_3_2',
            title: 'إدراج البيانات من مصادر ورقية وصوتية',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'من الورق والنص السمعي إلى الشاشة مباشرة مع ربط الأسهم بشكل منهجي مرتب.',
            duration: '06:15',
            summary: [
              'اقرأ الفقرة كاملة قبل نقلها لتفادي الأخطاء المتعلقة بالسياق.',
              'قسّم الصوت لمقاطع صغيرة لنسخه بهدوء.',
              'استفد من أدوات الإملاء الصوتي ثم راجعها.',
              'في حال عدم فهم كلمة، دوّن ملاحظة لمسؤولك.'
            ],
            task: {
              title: 'تمرين الإدخال المركب',
              description: 'حاول نقل صفحة من كتاب بسرعة وبدون أخطاء. ثم جرب الاستماع لمقطع أخبار وتحريره وتصحيح المخرجات.'
            },
            xpReward: 40
          },
          {
            id: 'les_3_3',
            title: 'قواعد التدقيق والمراجعة الذاتية',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'المرور بالعدسة المكبرة على الأخطاء التي تم تظليلها بالأحمر ليتم تصحيحها تلقائياً.',
            duration: '05:40',
            summary: [
              'لا تعتمد كلياً على المدقق الإملائي الآلي.',
              'اقرأ النص بصوت عالٍ للتعرف على كسر الجمل وبنيتها.',
              'تحقق بقوة من الأرقام: الحسابات مهمة جداً.',
              'التدقيق المزدوج بين الزملاء يرفع مستوى المنتوج.'
            ],
            task: {
              title: 'اختبار دقة الملاحظة لديك',
              description: 'راجع مقالة طويلة وأحصِ عدد الأخطاء اللغوية المطبعية في أول 3 فقرات باستخدام قائمة المراجعات التي تعلمناها.'
            },
            xpReward: 40
          },
          {
            id: 'les_3_4',
            title: 'إدارة المهام اليومية وتقدير الوقت',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مكتب فيه تقويم وعناصر مهام مؤشرة بعلامة الإنجاز الخضراء لتعزيز أهمية التخطيط.',
            duration: '04:30',
            summary: [
              'تخطيط 5-7 مهام كبرى فقط كل يوم.',
              'تقنية البومودورو 25 دقيقة/5 دقائق، مريحة ونافعة للتركيز.',
              'تقنية تقدير الأوقات ومقارنة المستعمل منها.',
              'تعلم الفرز لأولوياتك قبل البدء.'
            ],
            task: {
              title: 'بناء خطة يومك الأول المهني',
              description: 'سجّل ثلاث ساعات من وقتك القادم وحدد أين وكيف سيتم الإنجاز فيها بفعالية بناءً على الوقت.'
            },
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_4',
        title: 'المرحلة 4: الاحتراف والعمل عن بعد',
        description: 'أخلاقيات العمل، حفظ السرية، تقديم الخدمات كمستقل، وإنجاز مشروعك النهائي.',
        lessons: [
          {
            id: 'les_4_1',
            title: 'أخلاقيات العمل وسرية البيانات',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ملف عليه ختم "سري" وأيقونات ميزان العدل ومصداقية التعاقد بين الأطراف.',
            duration: '06:00',
            summary: [
              'السرية واجب أخلاقي وقانوني صارم.',
              'عدم نقل الداتا للأنظمة والأجهزة الشخصية.',
              'عدم فتح الملفات السرية في أماكن عمومية كالمقاهي.',
              'الاحتراز من الاحتيال والإبلاغ عند شبهة الاختراق.'
            ],
            task: {
              title: 'تأليف الميثاق المهني لك',
              description: 'قم بكتابة 5 نقاط كـ "ميثاق العون المحترف" التي ينبغي أن تطبقها بحذافيرها.'
            },
            xpReward: 40
          },
          {
            id: 'les_4_2',
            title: 'كيف تقدم خدماتك كمستقل وتجذب زبائنك الأوائل',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة متصفحة لموقعي Upwork وخمسات تبرز اختيار عروض وتأليف ردود لزبائن وبدء حوار.',
            duration: '10:30',
            summary: [
              'استخدام منصات Upwork للعالمية أو خمسات للعربية.',
              'تأليف ملف شخصي متكامل الجودة ومسجل للثقة.',
              'ارسال عروض أصلية وغير منسوخة وتقديم قيمة مضافة فورية.',
              'أهمية تسليم العمل قبل الأوان للحصول على التقييم المرتفع.'
            ],
            task: {
              title: 'إنشاء حساب وتسويق نفسك',
              description: 'افتح حسابك في خمسات. ابحث عن مشاريع إدخال داتا. تدرب على صياغة رسالة عرض تغري العميل لتجربتك.'
            },
            quiz: [
              {
                id: 'q421',
                question: 'ما هي الوسيلة الأفضل للنجاح في أولى أعمالك على منصات العمل الحر؟',
                options: [
                  { id: 'o1', text: 'إرسال مئات العروض الجاهزة للشركات دون دراستها', isCorrect: false },
                  { id: 'o2', text: 'تقديم سعر رخيص جداً بشكل مبالغ فيه', isCorrect: false },
                  { id: 'o3', text: 'تقديم عروض مخصصة، وإنجاز عالي الجودة لضمان أقصى التقييمات الإيجابية', isCorrect: true }
                ],
                explanation: 'التقييمات المرتفعة هي بوابة الدخول لمشاريع أكثر حجماً وثقةً من قبل عملاء جدد.'
              }
            ],
            xpReward: 50
          },
          {
            id: 'les_4_3',
            title: 'مشروع التخرج – قاعدة بيانات متكاملة لمؤسسة افتراضية',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة حاسوب مع قاعدة بيانات Excel من 3 أوراق منتظمة وأيقونة لشهادة احتراف.',
            duration: 'مفتوح المهلة',
            summary: [
              'المشروع الختامي لتتويج مكتسباتك.',
              'ثبت مهاراتك، وصية المعارف، والمراجعة الذاتية.',
              'انطلق في أمان نحو أولى خطواتك العملية.'
            ],
            task: {
              title: 'أطلق العنان لمهارتك وجسد مشروع المكتبة!',
              description: 'تخيل أنك عينت في مكتبة محلية لتنظيم المخزون، الزبائن والمبيعات كلها معاً في كتاب Excel شامل مزود بالمعادلات والفلاتر. صمم المشروع وضعه في محفظتك وافخر بإنجازك.'
            },
            xpReward: 100
          }
        ]
      }
    ]
  },
  'sewing': {
    craftId: 'sewing',
    title: 'تكوين الخياطة والتفصيل',
    titleEN: 'Sewing and Tailoring Course',
    description: 'مسار تعليمي شامل يأخذك من الصفر حتى الاحتراف في فن الخياطة العصرية والتقليدية.',
    descriptionEN: 'A comprehensive educational path that takes you from zero to professional in modern and traditional sewing.',
    levels: [
      {
        id: 'sew_lvl_1',
        title: 'المرحلة الأولى: أساسيات الخياطة والأدوات',
        titleEN: 'Stage 1: Sewing Basics and Tools',
        description: 'التعرف على الورشة، الأدوات، الأقمشة، وتشغيل الماكينة.',
        descriptionEN: 'Getting to know the workshop, tools, fabrics, and machine operation.',
        lessons: [
          {
            id: 'sew_1_1',
            title: 'التجهيزات الأساسية وترتيب الورشة',
            titleEN: 'Basic Equipment and Workshop Layout',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك لورشة خياطة صغيرة مرتبة. طاولة خشبية واسعة، رفوف خيوط ملونة، إضاءة نهارية دافئة.',
            duration: '05:30',
            summary: [
              'رتّب ورشتك: منطقة للقص، منطقة للخياطة، منطقة للكي.',
              'الإضاءة الجيدة ضرورية: ضوء أبيض دافئ مباشر على منطقة العمل.',
              'احتفظ بالأدوات الحادة في مكان آمن ومخصص.',
              'الخيوط ترتب حسب اللون لسهولة الوصول.',
              'كرسي مريح يحمي ظهرك في جلسات العمل الطويلة.'
            ],
            summaryEN: [
              'Organize your workshop: cutting area, sewing area, and ironing area.',
              'Good lighting is essential: direct warm white light on the workspace.',
              'Keep sharp tools in a safe, designated place.',
              'Sort threads by color for easy access.',
              'A comfortable chair protects your back during long sessions.'
            ],
            task: {
              title: 'تجهيز ركن الخياطة',
              titleEN: 'Setting up your sewing corner',
              description: 'جهز ركناً في بيتك كورشة صغيرة. ضع طاولة قرب النافذة، نظف المساحة، واجمع أدواتك.',
              descriptionEN: 'Set up a small corner at home as a workshop. Place a table near a window, clean the space, and gather your tools.'
            },
            quiz: [
              {
                id: 'sew_1_1_q1',
                question: 'لماذا نفضل ترتيب الورشة إلى مناطق (قص، خياطة، كي)؟',
                questionEN: 'Why do we prefer organizing the workshop into zones (cutting, sewing, ironing)?',
                options: [
                  { id: 'o1', text: 'لجمالية المكان فقط', textEN: 'For aesthetics only', isCorrect: false },
                  { id: 'o2', text: 'لتنظيم تدفق العمل ومنع الفوضى والحوادث', textEN: 'To organize workflow and prevent clutter and accidents', isCorrect: true },
                  { id: 'o3', text: 'لأن مساحة القماش تتطلب ذلك', textEN: 'Because fabric size requires it', isCorrect: false }
                ],
                explanation: 'التقسيم يحافظ على نظافة القماش ويسهل الانتقال بين خطوات الإنتاج.',
                explanationEN: 'Zoning keeps the fabric clean and makes transitioning between production steps easier.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'sew_1_2',
            title: 'التعرف على أدوات الخياطة واستخداماتها',
            titleEN: 'Getting to Know Sewing Tools',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي كبير على شكل طاولة عرض، كل أداة مرسومة بدقة مع تسميتها: مقص، متر، طباشير، دبابيس.',
            duration: '06:45',
            summary: [
              'مقص القماش: حاد جداً، لا يستخدم إلا على القماش.',
              'مقص الورق: مخصص لقص الباترونات فقط.',
              'متر القياس: مرن، أساسي لأخذ المقاسات.',
              'طباشير التعليم: يترك أثراً يزول بالكي.',
              'الكشتبان: يحمي الإصبع عند الخياطة اليدوية.'
            ],
            summaryEN: [
              'Fabric Scissors: Very sharp, only use on fabric.',
              'Paper Scissors: Only for cutting patterns.',
              'Measuring Tape: Flexible, essential for measurements.',
              'Tailor\'s Chalk: Leaves a mark that vanishes with ironing.',
              'Thimble: Protects the finger during hand sewing.'
            ],
            task: {
              title: 'جرد الأدوات',
              titleEN: 'Tool Inventory',
              description: 'اجمع كل أدواتك، اكتب على ورقة اسم كل أداة ووظيفتها.',
              descriptionEN: 'Gather all your tools, write the name and function of each tool on a piece of paper.'
            },
            quiz: [
              {
                id: 'sew_1_2_q1',
                question: 'هل يمكن استخدام مقص القماش لقص ورق الباترون؟',
                questionEN: 'Can you use fabric scissors to cut pattern paper?',
                options: [
                  { id: 'o1', text: 'نعم، لا مشكلة', textEN: 'Yes, no problem', isCorrect: false },
                  { id: 'o2', text: 'لا، لأن الورق يفقد المقص حدته بسرعة', textEN: 'No, because paper dulls the blades quickly', isCorrect: true }
                ],
                explanation: 'الحفاظ على حدة مقص القماش ضروري لقص نظيف وسلس للأنسجة.',
                explanationEN: 'Maintaining the sharpness of fabric scissors is essential for clean, smooth fabric cuts.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'sew_1_3',
            title: 'أنواع الأقمشة والتعرف على النسيج',
            titleEN: 'Fabric Types and Understanding Texture',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'عينة قماش تظهر مع تكبير نسيجها: قطن، حرير، جينز، صوف.',
            duration: '07:15',
            summary: [
              'الأقمشة الطبيعية: قطن، كتان، صوف، حرير. مريحة وتتنفس.',
              'الأقمشة الاصطناعية: بوليستر، نايلون، أكرليك. متينة وسهلة العناية.',
              'انظر إلى اتجاه النسيج (خيوط الطول والعرض) قبل القص.',
              'تعرف على وجه القماش والظهر.',
              'بعض الأقمشة تحتاج لغسيل مسبق لتجنب الانكماش.'
            ],
            summaryEN: [
              'Natural fabrics: cotton, linen, wool, silk. Comfortable and breathable.',
              'Synthetic fabrics: polyester, nylon, acrylic. Durable and easy to care for.',
              'Look at the grain direction (warp and weft) before cutting.',
              'Identify the right and wrong sides of the fabric.',
              'Some fabrics need pre-washing to avoid shrinkage.'
            ],
            task: {
              title: 'تصنيف الأقمشة',
              titleEN: 'Fabric Classification',
              description: 'اجمع 5 قطع قماش مختلفة من ملابس قديمة. المسها، ادرس نسيجها، واكتب نوع كل قماش.',
              descriptionEN: 'Collect 5 different fabric scraps. Touch them, study the grain, and guess each fabric type.'
            },
            xpReward: 35
          },
          {
            id: 'sew_1_4',
            title: 'تشغيل ماكينة الخياطة وضبط الغرز',
            titleEN: 'Operating the Sewing Machine and Stitch Adjustment',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1520032484190-e5ef81d87978?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'يد تضع بكرة الخيط، تمرره عبر المسارات، وتضبط الغرزة المستقيمة والزكزاك.',
            duration: '10:00',
            summary: [
              'تركيب الخيط العلوي والسفلي (المكوك) بشكل صحيح.',
              'الغرزة المستقيمة: الأكثر استخداماً، طولها المثالي 2.5 مم.',
              'الغرزة المتعرجة (زكزاك): لمنع تنسيل الأقمشة حوافها.',
              'ضبط شد الخيط (Tension) حسب نوع القماش.',
              'اختبر الغرزة دائماً على عينة قماش تجريبية.'
            ],
            summaryEN: [
              'Correctly threading the top thread and bobbin.',
              'Straight stitch: Most used, ideal length is 2.5mm.',
              'Zigzag stitch: To prevent fabric fraying at the edges.',
              'Adjusting thread tension based on fabric type.',
              'Always test the stitch on a scrap piece of fabric.'
            ],
            task: {
              title: 'التمرن على الغرز',
              titleEN: 'Practicing Stitches',
              description: 'جرب الخياطة بخط مستقيم، ثم منحني، ثم زكزاك على قطعة قماش قديمة.',
              descriptionEN: 'Try sewing a straight line, then a curve, then a zigzag on a scrap piece of fabric.'
            },
            xpReward: 40
          }
        ]
      },
      {
        id: 'sew_lvl_2',
        title: 'المرحلة الثانية: تقنيات الخياطة الأساسية',
        titleEN: 'Stage 2: Core Sewing Techniques',
        description: 'أخذ القياسات، الباترونات، القص، والدرزات الاحترافية.',
        descriptionEN: 'Taking measurements, patterns, cutting, and professional seams.',
        lessons: [
          {
            id: 'sew_2_1',
            title: 'أخذ القياسات الصحيحة',
            titleEN: 'Taking Correct Measurements',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شخصية ظلية تظهر عليها خطوط قياس الصدر، الخصر، الأرداف، والأكتاف.',
            duration: '08:00',
            summary: [
              'استخدم متراً مرناً ولا تشده كثيراً (اترك مسافة إصبع).',
              'الصدر – الخصر – الأرداف – عرض الكتفين – طول الكم.',
              'سجّل الأرقام مباشرة في دفتر خاص.',
              'القياسات تؤخذ بملابس خفيفة لضمان الدقة.',
              'أضف "زيادة الراحة" (Ease) حسب نوع التصميم.'
            ],
            summaryEN: [
              'Use a flexible tape and don\'t pull too tight (leave a finger gap).',
              'Chest - Waist - Hips - Shoulder width - Sleeve length.',
              'Record the numbers directly in a dedicated notebook.',
              'Take measurements over light clothing for accuracy.',
              'Add "ease" depending on the design type.'
            ],
            task: {
              title: 'قياساتك الشخصية',
              titleEN: 'Your Personal Measurements',
              description: 'خذ قياساتك بنفسك أمام المرآة وسجلها في دفترك.',
              descriptionEN: 'Take your own measurements in front of a mirror and record them in your notebook.'
            },
            xpReward: 35
          },
          {
            id: 'sew_2_2',
            title: 'فهم الباترونات وقراءتها',
            titleEN: 'Understanding and Reading Patterns',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ورق باترون بني تظهر عليه علامات القص، الخياطة، وسهم اتجاه النسيج.',
            duration: '07:30',
            summary: [
              'الباترون هو قالب ورقي لقص القماش بدقة.',
              'خط القص (متصل) وخط الخياطة (متقطع).',
              'سهم اتجاه النسيج: يحدد وضعية الباترون على القماش.',
              'علامات المحاذاة (Notches): لتطابق القطع عند التجميع.',
              'قارن مقاس الباترون بقياساتك قبل البدء.'
            ],
            summaryEN: [
              'A pattern is a paper template for cutting fabric accurately.',
              'Cutting line (solid) and sewing line (dashed).',
              'Grainline arrow: Determines the pattern placement on fabric.',
              'Notches: Small marks to match pieces during assembly.',
              'Compare pattern size with your measurements before starting.'
            ],
            task: {
              title: 'تحليل باترون',
              titleEN: 'Pattern Analysis',
              description: 'ابحث عن باترون بسيط، وحدد عليه خط القص وسهم النسيج.',
              descriptionEN: 'Find a simple pattern and identify the cutting line and grainline arrow on it.'
            },
            xpReward: 35
          },
          {
            id: 'sew_2_3',
            title: 'قص القماش بدقة واحترافية',
            titleEN: 'Cutting Fabric with Precision',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1560762484-813fc97650a0?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مقص كبير يتحرك بسلاسة على القماش الموشّى بعلامات الطباشير.',
            duration: '09:00',
            summary: [
              'اغسل وكوي القماش قبل القص لتجنب المفاجآت.',
              'ثبت الباترون بالدبابيس في اتجاه النسيج الصحيح.',
              'ارسم حول الباترون بالطباشير، ثم أزله.',
              'قص بحركات طويلة ومستمرة بالمقص الحاد.',
              'ابدأ بالقطع الكبيرة ثم انتقل للصغيرة.'
            ],
            summaryEN: [
              'Pre-wash and iron fabric before cutting to avoid surprises.',
              'Pin the pattern in the correct grain direction.',
              'Trace around the pattern with chalk, then remove it.',
              'Cut with long, steady strokes using sharp scissors.',
              'Start with larger pieces then move to smaller ones.'
            ],
            task: {
              title: 'تمرين القص',
              titleEN: 'Cutting Exercise',
              description: 'ارسم مربعاً 20×20 سم على قماش قديم وقصه بدقة.',
              descriptionEN: 'Draw a 20x20cm square on scrap fabric and cut it precisely.'
            },
            xpReward: 40
          },
          {
            id: 'sew_2_4',
            title: 'الخياطة المستقيمة والمنحنية والزوايا',
            titleEN: 'Straight, Curved, and Corner Sewing',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'إبرة الماكينة وهي تخيط خطاً مستقيماً، ثم تلتف حول منحنی، ثم تتوقف عند زاوية.',
            duration: '08:30',
            summary: [
              'الخطوط المنحنية: خيط ببطء وأدر القماش تدريجياً.',
              'الزوايا: توقف والإبرة لأسفل، ارفع القدم، أدر القماش 90 درجة.',
              'ثبت البداية والنهاية دائماً بغرزة عكسية (Backstitch).',
              'حافظ على سرعة ثابتة، لا تستعجل في المنعطفات.',
              'استخدم خطوط التوجيه على الماكينة للحفاظ على المسافة.'
            ],
            summaryEN: [
              'Curved lines: Sew slowly and rotate the fabric gradually.',
              'Corners: Stop with the needle down, lift the foot, rotate the fabric 90°.',
              'Always secure the start and end with a backstitch.',
              'Maintain a constant speed; don\'t rush on turns.',
              'Use the guide lines on the machine to maintain distance.'
            ],
            task: {
              title: 'متاهة الخياطة',
              titleEN: 'Sewing Maze',
              description: 'ارسم خطاً متموجاً وزوايا حادة على قماش وخط فوقها بالماكينة.',
              descriptionEN: 'Draw a wavy line and sharp corners on fabric and sew over them.'
            },
            xpReward: 40
          },
          {
             id: 'sew_2_5',
             title: 'تشطيب الحواف ومنع التنسيل',
             titleEN: 'Finishing Edges and Preventing Fraying',
             visualType: 'illustration',
             visualUrls: ['https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=1200&q=80'],
             visualDescription: 'مقارنة بين حافة مشطبة بزكزاك، حافة مطوية، وحافة أوفرلوك.',
             duration: '06:00',
             summary: [
               'الحواف الخام تتنسل مع الغسيل ويجب حمايتها.',
               'أسهل طريقة: غرزة الزكزاك على حافة القماش.',
               'الثني المزدوج: طي الحافة مرتين ثم خياطتها.',
               'كوي الحواف المطوية يجعل الخياطة أسهل وأكثر نظافة.',
               'ماكينة الأوفرلوك تعطي لمسة احترافية وتجارية.'
             ],
             summaryEN: [
               'Raw edges fray with washing and must be protected.',
               'Easiest way: Zigzag stitch along the fabric edge.',
               'Double fold: Folding the edge twice then sewing it.',
               'Ironing folded edges makes sewing easier and cleaner.',
               'An overlock machine provides a professional, commercial finish.'
             ],
             task: {
               title: 'تطبيق التشطيب',
               titleEN: 'Edge Finish Application',
               description: 'شطّب حواف قطعة قماش صغيرة بغرزة زكزاك وأخرى بثني مزدوج.',
               descriptionEN: 'Finish edges of a fabric scrap with zigzag stitch and another with double fold.'
             },
             xpReward: 35
          }
        ]
      },
      {
        id: 'sew_lvl_3',
        title: 'المرحلة الثالثة: مشاريع تطبيقية بسيطة',
        titleEN: 'Stage 3: Simple Practical Projects',
        description: 'صناعة وسادة، حقيبة تسوق، وإصلاح الملابس والكي الاحترافي.',
        descriptionEN: 'Making pillows, tote bags, garment repairs, and professional ironing.',
        lessons: [
          {
            id: 'sew_3_1',
            title: 'خياطة وسادة بسيطة (مشروع 1)',
            titleEN: 'Sewing a Simple Pillow (Project 1)',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'قطعة قماش تطوى وجهها للداخل، تخيط من 3 جوانب، ثم تقلب وتحشى.',
            duration: '12:00',
            summary: [
              'كما هو موضح في الرسم المتحرك، قم بقص القماش بأبعاد الوسادة + 2 سم للخياطة.',
              'ضع وجهي القماش على بعضهما (الوجه الجيد للداخل).',
              'خيط 3 جوانب، واترك نصف الجانب الرابع مفتوحاً لإدخال الحشو المعروض.',
              'اقلب الوسادة على وجهها، واحشُها جيداً.',
              'أغلق الفتحة بغرزة خفية (سلم) يدوياً لاستكمال المشروع بدقة.'
            ],
            summaryEN: [
              'As shown in the animation, cut fabric to pillow dimensions + 2cm for seams.',
              'Place right sides together.',
              'Sew 3 sides, leaving half of the 4th side open for the stuffing process shown.',
              'Turn right side out and stuff well.',
              'Close the opening with a hand-sewn ladder stitch to complete the project neatly.'
            ],
            task: {
              title: 'صناعة وسادتك الأولى',
              titleEN: 'Make your first pillow',
              description: 'اصنع وسادة صغيرة (30×30 سم) باستخدام قماش قديم.',
              descriptionEN: 'Create a small pillow (30x30cm) using scrap fabric.'
            },
            xpReward: 50
          },
          {
            id: 'sew_3_2',
            title: 'خياطة حقيبة تسوق قماشية (مشروع 2)',
            titleEN: 'Sewing a Canvas Tote Bag (Project 2)',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'قطع قماش خارجي وبطانة تُخاط معاً مع تركيب الحمالات الطويلة.',
            duration: '15:00',
            summary: [
              'حقيبة التسوق القماشية مشروع سهل ومفيد ويُباع جيداً.',
              'تحتاج لقماش خارجي متين (جينز، كتان) وبطانة قطنية.',
              'الحمالات: شريحتان طويلتان تثبتان في الفتحة العلوية.',
              'يمكن إضافة جيب داخلي صغير.',
              'الدرزات تكون مزدوجة في مناطق الضغط لمتانة أكبر.'
            ],
            summaryEN: [
              'Canvas tote bags are easy, useful, and sell well.',
              'Requires durable outer fabric (denim, linen) and cotton lining.',
              'Handles: Two long strips fixed at the top opening.',
              'An optional small interior pocket can be added.',
              'Double stitch stress points for greater durability.'
            ],
            task: {
              title: 'حقيبة صديقة للبيئة',
              titleEN: 'Eco-friendly Bag',
              description: 'صمم حقيبة تسوق بسيطة، ارسم شكلها، ثم قص القماش وخيط.',
              descriptionEN: 'Design a simple shopping bag, draw its shape, cut the fabric, and sew.'
            },
            xpReward: 60
          },
          {
            id: 'sew_3_3',
            title: 'إصلاحات الملابس الشائعة',
            titleEN: 'Common Garment Repairs',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم يظهر إصلاح زر مقطوع، إغلاق فتحة جانبية، وتقصير بنطال.',
            duration: '10:00',
            summary: [
              'إصلاح الملابس خدمة دخلها سريع ولا تحتاج رأس مال كبير.',
              'خياطة الزر: اصنع حلقة صغيرة تحت الزر ليتمدد الخيط.',
              'إغلاق الفتحات: غرزة خفية باليد أو زكزاك بالماكينة.',
              'تقصير البنطال: اطوِ، اكوي، خيط بطية حول الساق.',
              'استبدال السحاب يتطلب فتح الدرز القديم وتركيب الجديد بدقة.'
            ],
            summaryEN: [
              'Repair services provide quick income with little capital.',
              'Sewing buttons: Create a small shank under the button.',
              'Closing holes: Hand ladder stitch or machine zigzag.',
              'Hemming pants: Fold, iron, and stitch around the leg.',
              'Zippers require removing the old seam and careful replacement.'
            ],
            task: {
              title: 'مهمة الإنقاذ',
              titleEN: 'Rescue Mission',
              description: 'أصلح زر مقطوعاً أو فتحة في قطعة ملابس ببيتك.',
              descriptionEN: 'Repair a missing button or a hole in a garment at home.'
            },
            xpReward: 45
          },
          {
            id: 'sew_3_4',
            title: 'تقنيات الكي الاحترافي',
            titleEN: 'Professional Ironing Techniques',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'يد تكوي درزاً مفتوحاً بالإصبع ثم بالمكواة. بخار يخرج والمكواة تتحرك بهدوء.',
            duration: '06:00',
            summary: [
              'الكي نصف جمال الخياطة. لا تهمله.',
              'افتح الدرزات واكوها مسطحة بعد كل خطوة خياطة.',
              'استخدم قطعة قماش حماية للأنسجة الحساسة.',
              'اضبط درجة الحرارة حسب القماش (قطن عالي، بوليستر منخفض).',
              'لا تسحب المكواة بقوة، بل اضغط بحركات هادئة.'
            ],
            summaryEN: [
              'Ironing is half the beauty of sewing. Don\'t ignore it.',
              'Press seams open and flat after every sewing step.',
              'Use a pressing cloth for delicate fabrics.',
              'Set temperature by fabric (high for cotton, low for polyester).',
              'Don\'t drag the iron forcefully; press with calm motions.'
            ],
            task: {
              title: 'تحدي الكي',
              titleEN: 'Ironing Challenge',
              description: 'جرب كي درز مفتوح على قطعتين مخيطتين معاً ولاحظ الفرق في النتيجة.',
              descriptionEN: 'Try pressing a seam open on two sewn pieces and note the result.'
            },
            xpReward: 30
          }
        ]
      },
      {
        id: 'sew_lvl_4',
        title: 'المرحلة الرابعة: الاحتراف والمشاريع',
        titleEN: 'Stage 4: Professionalism and Projects',
        description: 'تفصيل القميص، اللمسات التقليدية، والتسويق لمشروعك.',
        descriptionEN: 'Shirt drafting, traditional touches, and marketing your project.',
        lessons: [
          {
            id: 'sew_4_1',
            title: 'تفصيل قميص أو بلوزة بسيطة (مشروع 3)',
            titleEN: 'Drafting a Simple Shirt or Blouse (Project 3)',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'تجميع أجزاء القميص من الباترون إلى المنتج النهائي على عارضة.',
            duration: '25:00',
            summary: [
              'تجميع الأجزاء: الأكتاف، ثم الأكمام، ثم الجوانب، والفتحات.',
              'استخدم باترون تجاري بمقاسك لضمان النتائج الأولى.',
              'الياقة اختيارية للمبتدئين ويمكن استبدالها بفتحة رقبة بسيطة.',
              'ثنيات الأكمام والذيل تشطب في النهاية.',
              'جرب الملابس على الجسم عدة مرات أثناء العمل للتعديل.'
            ],
            summaryEN: [
              'Assembly: Shoulders, then sleeves, then sides and openings.',
              'Use a commercial pattern in your size for best initial results.',
              'Collars are optional; beginners can start with simple necklines.',
              'Hem the sleeves and bottom at the very end.',
              'Try the garment on several times during construction for adjustments.'
            ],
            task: {
              title: 'قميصك الأول',
              titleEN: 'Your First Shirt',
              description: 'نفذ باترون قميص بسيط على قماش رخيص كتجربة أولى.',
              descriptionEN: 'Execute a simple shirt pattern on inexpensive fabric as a first try.'
            },
            xpReward: 100
          },
          {
            id: 'sew_4_2',
            title: 'لمسات تقليدية جزائرية – الكراكو والقفطان',
            titleEN: 'Algerian Traditional Touches – Karakou & Caftan',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لكراكو مطرز وقفطان جزائري أنيق مع تسميات العناصر التقليدية.',
            duration: '15:00',
            summary: [
              'الخياطة التقليدية فن مربح ومطلوب جداً في الجزائر.',
              'الكراكو: سترة مطرزة بالفتلة أو المجبود.',
              'القفطان: فستان طويل فخم يلبس بحزام مزين.',
              'التقنيات: التطريز اليدوي وتثبيت العقاش والخرز.',
              'تخصص في لمسة معينة لتمييز علامتك التجارية.'
            ],
            summaryEN: [
              'Traditional sewing is a highly profitable and in-demand art in Algeria.',
              'Karakou: A jacket embroidered with Fetla or Mejboud.',
              'Caftan: A luxurious long dress worn with a decorative belt.',
              'Techniques: Hand embroidery, beadwork, and sequin fixing.',
              'Specialize in a specific touch to distinguish your brand.'
            ],
            xpReward: 40
          },
          {
            id: 'sew_4_3',
            title: 'تسويق منتجاتك وبناء زبائنك',
            titleEN: 'Marketing Your Products and Building Clients',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'هاتف يعرض صفحة تواصل اجتماعي لعلامة خياطة مع صور احترافية لمنتجات.',
            duration: '12:00',
            summary: [
              'صور منتجاتك بتصوير جيد في ضوء النهار الطبيعي.',
              'أنشئ صفحة على إنستغرام أو فيسبوك واعرض أعمالك بانتظام.',
              'اطلب من زبائنك نشر صورهم بمنتجاتك وتقييم خدمتك.',
              'حدد مواعيد تسليم واقعية والتزم بها لبناء الثقة.',
              'قدم وصفاً واضحاً للخامات والمقاسات والأسعار.'
            ],
            summaryEN: [
              'Photograph your products well in natural daylight.',
              'Create Instagram/Facebook pages and showcase your work regularly.',
              'Ask clients to post photos of themselves in your creations and review you.',
              'Set realistic delivery dates and stick to them to build trust.',
              'Provide clear descriptions of materials, sizes, and pricing.'
            ],
            task: {
              title: 'هويتك الرقمية',
              titleEN: 'Your Digital Identity',
              description: 'أنشئ صفحة لعلامتك التجارية وانشر 3 صور لأعمالك التجريبية.',
              descriptionEN: 'Create a page for your brand and post 3 photos of your practice projects.'
            },
            xpReward: 50
          },
          {
            id: 'sew_4_4',
            title: 'مشروع التخرج – تصميم زي كامل حسب الطلب',
            titleEN: 'Final Project – Custom Design from Sketch to Finish',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'لوحة تصميم (Mood Board) تضم رسماً تخطيطياً، عينات قماش، والقطعة النهائية.',
            duration: 'مفتوح',
            summary: [
              'صمم الزي على الورق مع القياسات التقديرية.',
              'اختر نوع القماش واللون المناسب للمناسبة.',
              'ارسم الباترون الكامل للأمام والخلف والأكمام.',
              'قص وخيط القطعة مع الالتزام بتشطيب نظيف.',
              'قدم تقريراً عن رحلة العمل من الفكرة إلى التنفيذ.'
            ],
            summaryEN: [
              'Design the outfit on paper with estimated measurements.',
              'Choose appropriate fabric type and color for the occasion.',
              'Draft the full pattern for front, back, and sleeves.',
              'Cut and sew the piece, maintaining clean finishes.',
              'Submit a report on your journey from concept to creation.'
            ],
            task: {
              title: 'عرض التخرج',
              titleEN: 'Graduation Display',
              description: 'صمم ونفذ زياً كاملاً لزبون افتراضي وقدمه كعرض نهائي لموهبتك.',
              descriptionEN: 'Design and execute a full outfit for a hypothetical client as a final showcase of your talent.'
            },
            xpReward: 150
          }
        ]
      }
    ]
  },
  'ms_access': {
    craftId: 'ms_access',
    title: 'تصميم وإدارة قواعد البيانات بـ Microsoft Access',
    titleEN: 'Database Design & Management with Microsoft Access',
    description: 'مسار تعليمي متكامل ينطلق بك من فهم أساسيات البيانات إلى بناء أنظمة إدارة متكاملة للمؤسسات والشركات.',
    descriptionEN: 'A comprehensive educational path that takes you from understanding data basics to building integrated management systems for organizations and companies.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: أساسيات قواعد البيانات والجداول',
        titleEN: 'Stage 1: Database Basics & Tables',
        description: 'تعرف على بيئة Access وكيفية بناء الأساس المتين لأي قاعدة بيانات.',
        descriptionEN: 'Get to know the Access environment and how to build the solid foundation of any database.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'مقدمة في Microsoft Access والتخطيط',
            titleEN: 'Introduction to Microsoft Access & Planning',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لشخص يرسم مخططاً لقاعدة بيانات على سبورة بيضاء.',
            visualDescriptionEN: 'Illustration of a person drawing a database schematic on a whiteboard.',
            duration: '10:00',
            summary: [
              'قاعدة البيانات هي مستودع رقمي منظم للمعلومات.',
              'Access يربط البيانات، الواجهات، والتقارير في ملف واحد.',
              'التخطيط على الورق قبل فتح البرنامج يوفر الكثير من الوقت.'
            ],
            summaryEN: [
              'A database is an organized digital repository for information.',
              'Access connects data, interfaces, and reports in one file.',
              'Planning on paper before opening the software saves a lot of time.'
            ],
            task: {
              title: 'تخطيط نظام مصغر لحفظ جهات الاتصال',
              titleEN: 'Plan a mini contact management system',
              description: 'ارسم على ورقة الحقوق الأساسية (الاسم، اللقب، الهاتف، البريد) لتطبيق جهات اتصالك.',
              descriptionEN: 'Draw on paper the basic fields (Name, Last Name, Phone, Email) for your contacts app.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الخطوة الأهم قبل إنشاء قاعدة البيانات؟',
                questionEN: 'What is the most important step before creating a database?',
                options: [
                  { id: 'o1', text: 'شراء حاسوب جديد', textEN: 'Buying a new computer', isCorrect: false },
                  { id: 'o2', text: 'التخطيط الورقي للبيانات والعلاقات', textEN: 'Paper planning of data and relationships', isCorrect: true },
                  { id: 'o3', text: 'حفظ الملف', textEN: 'Saving the file', isCorrect: false }
                ],
                explanation: 'التخطيط السليم يمنع الأخطاء الهيكلية لاحقاً.',
                explanationEN: 'Proper planning prevents structural errors later.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_2',
            title: 'تشغيل Access والتعرف على الشريط والكائنات',
            titleEN: 'Opening Access & Understanding the Ribbon and Objects',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شاشة حاسوب تظهر سطح المكتب، نقرة مزدوجة على أيقونة Access. تظهر شاشة البداية. سهم يتحرك نحو "قاعدة بيانات فارغة". تظهر بعدها نافذة التنقل (Navigation Pane) ويُشار إلى الأقسام: جداول، استعلامات، نماذج، تقارير.',
            visualDescriptionEN: 'Computer screen showing desktop, double click on Access icon. Start screen appears. Arrow moves to "Blank database". Navigation Pane appears and highlights: Tables, Queries, Forms, Reports.',
            duration: '08:00',
            summary: [
              'Access جزء من حزمة Microsoft Office.',
              'عند فتحه، تختار "قاعدة بيانات فارغة" لبدء مشروع جديد.',
              'احفظ ملفك فوراً باسم واضح ومكان تعرفه.',
              'الشريط الرئيسي يحتوي على تبويبات: إنشاء، بيانات خارجية، أدوات قاعدة البيانات.',
              'الكائنات الأربعة الرئيسية: جداول (Tables)، استعلامات (Queries)، نماذج (Forms)، تقارير (Reports).'
            ],
            summaryEN: [
              'Access is part of the Microsoft Office suite.',
              'Upon opening, choose "Blank database" to start a new project.',
              'Save your file immediately with a clear name in a known location.',
              'The main ribbon contains tabs: Create, External Data, Database Tools.',
              'The four main objects: Tables, Queries, Forms, Reports.'
            ],
            task: {
              title: 'إنشاء واستكشاف ملف جديد',
              titleEN: 'Create and explore a new file',
              description: 'افتح Access على حاسوبك. أنشئ قاعدة بيانات فارغة باسم \'تجربتي_الاولى.accdb\'. تصفح التبويبات وحدد مكان كل كائن.',
              descriptionEN: 'Open Access on your computer. Create a blank database named \'My_First_Experience.accdb\'. Browse the tabs and locate each object type.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'أين تجد أدوات تصميم الجداول والنماذج لبنائها من الصفر؟',
                questionEN: 'Where do you find the tools to design tables and forms from scratch?',
                options: [
                  { id: 'o1', text: 'تبويب بيانات خارجية', textEN: 'External Data tab', isCorrect: false },
                  { id: 'o2', text: 'الصفحة الرئيسية', textEN: 'Home tab', isCorrect: false },
                  { id: 'o3', text: 'تبويب إنشاء (Create)', textEN: 'Create tab', isCorrect: true }
                ],
                explanation: 'خيارات الإنشاء تتيح بناء جميع كائنات قاعدة البيانات بأشكالها المختلفة.',
                explanationEN: 'The Create tab provides tools to build all database objects in their various forms.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_3',
            title: 'إنشاء الجدول الأول – الحقول وأنواع البيانات',
            titleEN: 'Creating the First Table - Fields and Data Types',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: نافذة فارغة لجدول. تظهر أعمدة: "اسم الحقل" و"نوع البيانات". يد تكتب "الاسم الكامل" وتختار "نص قصير"، ثم تكتب "تاريخ الميلاد" وتختار "تاريخ/وقت"، ثم "الراتب" وتختار "عملة". بعدها يتم حفظ الجدول باسم "الموظفين".',
            visualDescriptionEN: 'Animated scene: Empty table window. Columns appear: "Field Name" and "Data Type". A hand types "Full Name" and selects "Short Text", then types "Date of Birth" and selects "Date/Time", then "Salary" and selects "Currency". The table is then saved as "Employees".',
            duration: '12:00',
            summary: [
              'الجدول هو اللبنة الأساسية: صفوف (سجلات) وأعمدة (حقول).',
              'كل حقل له اسم فريد ونوع بيانات محدد.',
              'أنواع شائعة: نص قصير، نص طويل، رقم، تاريخ/وقت، عملة، نعم/لا.',
              'اختر النوع المناسب بدقة لتجنب أخطاء لاحقة.',
              'احفظ الجدول باسم واضح مباشرة.'
            ],
            summaryEN: [
              'The table is the core building block: rows (records) and columns (fields).',
              'Each field has a unique name and a specific data type.',
              'Common types: Short Text, Long Text, Number, Date/Time, Currency, Yes/No.',
              'Choose the appropriate type accurately to avoid later errors.',
              'Save the table with a clear name immediately.'
            ],
            task: {
              title: 'إنشاء جدول الزبائن',
              titleEN: 'Create the Customers table',
              description: 'أنشئ جدولاً باسم \'الزبائن\' يحتوي على الحقول: معرف_الزبون (ترقيم تلقائي)، الاسم (نص قصير)، رقم_الهاتف (نص قصير)، تاريخ_التسجيل (تاريخ/وقت).',
              descriptionEN: 'Create a table named \'Customers\' containing fields: Customer_ID (AutoNumber), Name (Short Text), Phone_Number (Short Text), Registration_Date (Date/Time).'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا نستخدم نوع "نص قصير" لرقم الهاتف بدل "رقم"؟',
                questionEN: 'Why do we use "Short Text" for a phone number instead of "Number"?',
                options: [
                  { id: 'o1', text: 'البرنامج لا يقبل الأرقام الطويلة', textEN: 'The software does not accept long numbers', isCorrect: false },
                  { id: 'o2', text: 'لأننا لن نجري عليه عمليات حسابية وقد يبدأ بالصفر', textEN: 'Because we won\'t perform calculations on it and it might start with zero', isCorrect: true },
                  { id: 'o3', text: 'لتقليل حجم الملف', textEN: 'To reduce the file size', isCorrect: false }
                ],
                explanation: 'حقول الأرقام تُخزن القيم الرياضية. رقم الهاتف لا يُجمع ولا يُطرح، لذلك نقوم بحفظه كنص ليتم عرض الصفر البدائي.',
                explanationEN: 'Number fields store mathematical values. A phone number is not added or subtracted, so we save it as text to preserve leading zeros.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_1_4',
            title: 'المفتاح الأساسي والفهرسة – منع التكرار',
            titleEN: 'Primary Key & Indexing - Preventing Duplication',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'جدول يظهر فيه عمود "المعرف" بجانبه أيقونة مفتاح صغير. عند محاولة إدخال رقم مكرر، يظهر تنبيه أحمر لطيف. ثم مشهد يوضح أن الفهرسة تُسرّع البحث مثل فهرس الكتاب.',
            visualDescriptionEN: 'A table showing an "ID" column with a small key icon next to it. Trying to enter a duplicate number prompts a gentle red alert. Then a scene shows indexing speeding up search like a book\'s index.',
            duration: '09:00',
            summary: [
              'المفتاح الأساسي (Primary Key): حقل يميز كل سجل بشكل فريد.',
              'غالباً ما يكون "ترقيم تلقائي" ويتزايد تلقائياً.',
              'يمنع Access إدخال قيم مكررة في هذا الحقل.',
              'الفهرسة (Indexing) تسرّع البحث والفرز، استخدمها للحقول التي ستُبحث كثيراً (مثل الاسم).',
              'لا تفرط في الفهرسة لأنها تبطئ الإدخال والتعديل.'
            ],
            summaryEN: [
              'Primary Key: A field that uniquely identifies each record.',
              'Often an "AutoNumber" that increments automatically.',
              'Access prevents entering duplicate values in this field.',
              'Indexing speeds up search and sorting; use it for frequently searched fields (e.g., Name).',
              'Do not over-index as it slows down data entry and modification.'
            ],
            task: {
              title: 'تأمين الجداول وتقوية الأداء',
              titleEN: 'Securing tables and boosting performance',
              description: 'في جدول \'الزبائن\'، تأكد من أن \'معرف_الزبون\' هو المفتاح الأساسي. أضف فهرسة لحقل \'الاسم\'. أدخل 5 سجلات وهمية.',
              descriptionEN: 'In the \'Customers\' table, make sure \'Customer_ID\' is the primary key. Add an index to the \'Name\' field. Enter 5 dummy records.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الخاصية الرئيسية للمفتاح الأساسي؟',
                questionEN: 'What is the main property of a primary key?',
                options: [
                  { id: 'o1', text: 'لا يمكن أن يتكرر داخل الجدول أبداً', textEN: 'It can never be duplicated within the table', isCorrect: true },
                  { id: 'o2', text: 'يجب أن يكون دائماً نصوصاً', textEN: 'It must always be text', isCorrect: false },
                  { id: 'o3', text: 'يسهل عملية طباعة الجدول', textEN: 'It makes printing the table easier', isCorrect: false }
                ],
                explanation: 'وظيفة المفتاح الأساسي هي ضمان تمييز السجلات دون خلط بينها.',
                explanationEN: 'The primary key\'s function is to ensure records are distinguished without confusion.'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: العلاقات، الاستيراد، وإدخال البيانات',
        titleEN: 'Stage 2: Relationships, Importing, and Data Entry',
        description: 'اكتشف كيف ترتبط الجداول ببعضها، وكيف تستورد البيانات وتتحقق من صحتها.',
        descriptionEN: 'Discover how tables relate to each other, and how to import and validate data.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'العلاقات بين الجداول – ربط المعلومات',
            titleEN: 'Relationships Between Tables - Linking Information',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لثلاثة جداول: "زبائن"، "طلبات"، "منتجات". خطوط بينها: بين زبائن وطلبات (واحد-إلى-متعدد)، بين طلبات ومنتجات (متعدد-إلى-متعدد عبر جدول وسيط). أسهم صغيرة تشرح.',
            visualDescriptionEN: 'Illustration of three tables: "Customers", "Orders", "Products". Lines between them: between customers and orders (one-to-many), between orders and products (many-to-many via a junction table). Small arrows explain.',
            duration: '15:00',
            summary: [
              'العلاقات تمنع تكرار البيانات وتربط الجداول ببعضها.',
              'العلاقة الأكثر شيوعاً: واحد-إلى-متعدد (زبون واحد له عدة طلبات).',
              'تحتاج إلى حقل مشترك (مفتاح خارجي) في الجدول "ابن".',
              'لإنشاء علاقة: أدوات قاعدة البيانات > علاقات > اسحب الحقل المشترك.',
              'فعّل "التأكد من التكامل المرجعي" لضمان عدم حذف سجل أب مرتبط بأبناء.'
            ],
            summaryEN: [
              'Relationships prevent data duplication and link tables together.',
              'The most common relationship: One-to-Many (one customer has many orders).',
              'Requires a common field (foreign key) in the "child" table.',
              'To create a relationship: Database Tools > Relationships > Drag the common field.',
              'Enable "Enforce Referential Integrity" to ensure a parent record linked to children is not deleted.'
            ],
            task: {
              title: 'إنشاء علاقة واحد-إلى-متعدد',
              titleEN: 'Create a One-to-Many Relationship',
              description: 'أنشئ جدولاً جديداً \'طلبات\' يحتوي على: معرف_الطلب، تاريخ_الطلب، معرف_الزبون (رقم). اربطه بجدول \'الزبائن\' بعلاقة واحد-إلى-متعدد.',
              descriptionEN: 'Create a new table \'Orders\' containing: Order_ID, Order_Date, Customer_ID (Number). Link it to the \'Customers\' table with a one-to-many relationship.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما فائدة تفعيل "التأكد من التكامل المرجعي" (Enforce Referential Integrity)؟',
                questionEN: 'What is the benefit of enabling "Enforce Referential Integrity"?',
                options: [
                  { id: 'o1', text: 'يمنع حذف زبون إذا كان لديه طلبات مسجلة لتفادي ضياع البيانات المرجعية', textEN: 'Prevents deleting a customer if they have recorded orders to avoid losing reference data', isCorrect: true },
                  { id: 'o2', text: 'يسرع من عمل قاعدة البيانات', textEN: 'Speeds up the database', isCorrect: false },
                  { id: 'o3', text: 'ينسق ألوان الجداول لتكون متطابقة', textEN: 'Formats table colors to match', isCorrect: false }
                ],
                explanation: 'التكامل المرجعي يحمي علاقات الجداول ويمنع وجود سجلات يتيمة.',
                explanationEN: 'Referential integrity protects table relationships and prevents orphan records.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_2_2',
            title: 'استيراد البيانات من Excel و CSV',
            titleEN: 'Importing Data from Excel and CSV',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد: ملف Excel مفتوح بجانب Access. في Access، تبويب "بيانات خارجية" > "استيراد من Excel". نافذة معالج تظهر، يختار الملف، ثم الورقة، ثم يحدد إذا كان الصف الأول عناوين أعمدة. البيانات تظهر في جدول Access.',
            visualDescriptionEN: 'Scene: Excel file open next to Access. In Access, tab "External Data" > "Import from Excel". Wizard window appears, path chosen, sheet selected, specifies first row has column headings. Data appears in Access table.',
            duration: '08:30',
            summary: [
              'يمكنك استيراد بيانات جاهزة من Excel أو ملفات CSV.',
              'اذهب إلى: بيانات خارجية > ملف جديد > Excel.',
              'اتبع المعالج: اختر الملف، حدد الورقة، تأكد من أنواع البيانات.',
              'إذا كانت البيانات تحتوي على أخطاء، سيُنشئ Access جدول أخطاء منفصلاً.',
              'هذه المهارة توفر ساعات من الإدخال اليدوي.'
            ],
            summaryEN: [
              'You can easily import existing data from Excel or CSV files.',
              'Go to: External Data > New Data Source > From File > Excel.',
              'Follow the wizard: choose file, select sheet, verify data types.',
              'If the data contains errors, Access creates a separate error table.',
              'This skill saves hours of manual entry.'
            ],
            task: {
              title: 'تطبيق الاستيراد',
              titleEN: 'Apply Importing',
              description: 'أنشئ ملف Excel بسيطاً بـ 10 صفوف (منتج، سعر، كمية) واستورده إلى Access. صحح أي خطأ يظهر.',
              descriptionEN: 'Create a simple Excel file with 10 rows (Product, Price, Quantity) and import it into Access. Correct any errors that arise.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'عند استيراد جدول، ماذا يحدث إذا كانت بعض الخلايا في Excel تحتوي قيماً غير مطابقة لنوع الحقل (مثال: نصوص في حقل أرقام)؟',
                questionEN: 'When importing a table, what happens if some Excel cells contain values that don\'t match the field type (e.g., text in a number field)?',
                options: [
                  { id: 'o1', text: 'يفشل الاستيراد تماماً ويمسح Access الجدول', textEN: 'Import fails completely and Access deletes the table', isCorrect: false },
                  { id: 'o2', text: 'يقوم Access بإنشاء جدول خاص يحتوي على الأخطاء ويترك الخلايا الخاطئة فارغة في الجدول الأصلي', textEN: 'Access creates a special table containing the errors and leaves the wrong cells empty in the original table', isCorrect: true },
                  { id: 'o3', text: 'يحاول Access تخمين القيم الصحيحة', textEN: 'Access attempts to guess the correct values', isCorrect: false }
                ],
                explanation: 'لضمان عدم توقف عملية الاستيراد، يقوم Access بعزل الأخطاء لكي تقوم بمراجعتها لاحقاً.',
                explanationEN: 'To ensure the import process doesn\'t halt, Access isolates errors so you can review them later.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_3',
            title: 'إدخال البيانات يدوياً والتعامل مع الأوراق الفرعية',
            titleEN: 'Manual Data Entry and Handling Subdatasheets',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'جدول "طلبات" مفتوح. صف جديد يُملأ. أسفل الصف، تظهر ورقة بيانات فرعية (Subdatasheet) تلقائياً تظهر تفاصيل الطلب المرتبطة من جدول آخر. يد تكتب تاريخاً وتختار زبوناً من قائمة منسدلة.',
            visualDescriptionEN: 'Orders table open. New row being filled. Below the row, a Subdatasheet automatically appears showing related order details from another table. Hand typing a date and selecting a customer from a dropdown.',
            duration: '09:00',
            summary: [
              'لإدخال بيانات: افتح الجدول وابدأ الكتابة في الصف الفارغ الأخير.',
              'عند وجود علاقة، يمكن لـ Access عرض بيانات الجدول المرتبط تلقائياً.',
              'استخدم قوائم البحث (Lookup) لتسهيل اختيار القيم من جدول آخر.',
              'اختصارات: Ctrl+\' لنسخ قيمة الحقل العلوي، Ctrl+; لإدخال تاريخ اليوم.',
              'احفظ السجل بالانتقال إلى سجل آخر (لا زر حفظ منفصل).'
            ],
            summaryEN: [
              'To enter data: Open the table and start typing in the last empty row.',
              'When a relationship exists, Access can automatically display related table data.',
              'Use Lookup lists to easily select values from another table.',
              'Shortcuts: Ctrl+\' to copy value from above, Ctrl+; to insert today\'s date.',
              'Save the record by moving to another record (no separate save button).'
            ],
            task: {
              title: 'التدرب على الإدخال السريع',
              titleEN: 'Practice fast entry',
              description: 'أدخل 5 طلبات في جدول الطلبات، كل طلب مرتبط بزبون مختلف. استخدم قائمة البحث لاختيار الزبون.',
              descriptionEN: 'Enter 5 orders in the Orders table, each linked to a different customer. Use the lookup list to select the customer.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي وظيفة ورقة البيانات الفرعية (Subdatasheet)؟',
                questionEN: 'What is the function of a Subdatasheet?',
                options: [
                  { id: 'o1', text: 'طباعة البيانات بسرعة', textEN: 'Print data quickly', isCorrect: false },
                  { id: 'o2', text: 'تغيير ألوان الجدول', textEN: 'Change table colors', isCorrect: false },
                  { id: 'o3', text: 'عرض سجلات الجدول المرتبط (الجدول الفرعي) داخل الجدول الأساسي مباشرة', textEN: 'Display records of the related table (child table) directly inside the main table', isCorrect: true }
                ],
                explanation: 'هي تتيح عرض والتعامل مع التفاصيل المرتبطة (كطلبات الزبون) مباشرة من واجهة الزبون.',
                explanationEN: 'It allows viewing and interacting with related details (like customer orders) directly from the customer interface.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_4',
            title: 'التحقق من صحة البيانات وتنسيق الجداول',
            titleEN: 'Data Validation and Table Formatting',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'نافذة تصميم الجدول. في حقل "العمر"، في خصائص الحقل، قاعدة التحقق: "Bين 18 و65". رسالة تحقق: "العمر يجب أن يكون بين 18 و65 سنة". عند محاولة إدخال 70، تظهر رسالة لطيفة باللون البرتقالي.',
            visualDescriptionEN: 'Table Design window. For "Age", Validation Rule: "Between 18 and 65". Validation Text: "Age must be between 18 and 65". Trying to enter 70 prompts a nice orange message.',
            duration: '11:00',
            summary: [
              'قواعد التحقق تمنع إدخال بيانات خاطئة من البداية.',
              'أمثلة: ">0" للكمية، "Is Not Null" للحقول الإجبارية.',
              'يمكن وضع قناع إدخال (Input Mask) لأرقام الهاتف: "0999-99-99-99".',
              'التنسيق: يمكن عرض التاريخ بصيغ مختلفة، أو الأرقام بمنازل عشرية محددة.',
              'البيانات النظيفة توفر وقتاً هائلاً لاحقاً.'
            ],
            summaryEN: [
              'Validation rules prevent entering bad data from the start.',
              'Examples: ">0" for quantity, "Is Not Null" for required fields.',
              'An Input Mask can be set for phone numbers: "0999-99-99-99".',
              'Formatting: dates can be shown differently, numbers with specific decimal places.',
              'Clean data saves immense time later.'
            ],
            task: {
              title: 'تطبيق قواعد التحقق',
              titleEN: 'Apply Validation Rules',
              description: 'في قاعدة بياناتك، أضف قاعدة تحقق لحقل \'الراتب\' بحيث لا يقل عن 18000 دج. أضف قناع إدخال لحقل الهاتف.',
              descriptionEN: 'In your database, add a validation rule for \'Salary\' to be not less than 18000 DZD. Add an input mask to the phone field.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما الفرق بين قاعدة التحقق (Validation Rule) وقناع الإدخال (Input Mask)؟',
                questionEN: 'What is the difference between a Validation Rule and an Input Mask?',
                options: [
                  { id: 'o1', text: 'لا يوجد أية فروق، كلاهما لنفس الغرض', textEN: 'No differences, both serve the same purpose', isCorrect: false },
                  { id: 'o2', text: 'قناع الإدخال خاص بالتواريخ فقط', textEN: 'Input Mask is only for dates', isCorrect: false },
                  { id: 'o3', text: 'قاعدة التحقق تختبر قيمة البيانات منطقياً، أما قناع الإدخال فيتحكم في طريقة وشكل إدخال الأحرف والأرقام', textEN: 'Validation rule logically tests the data value, whereas Input Mask controls the format and pattern of entered characters', isCorrect: true }
                ],
                explanation: 'قناع الإدخال يحافظ على تناسق الأشكال (مثل نمط رقم الهاتف)، وقواعد التحقق تضمن منطقية القيم (مثل مبلغ أكبر من الصفر).',
                explanationEN: 'Input mask preserves format consistency, while validation rules ensure logical values.'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_3',
        title: 'المرحلة 3: الاستعلامات – استخراج الإجابات',
        titleEN: 'Stage 3: Queries - Extracting Answers',
        description: 'اسأل قاعدة بياناتك أسئلة ذكية للحصول على التقارير والنتائج بسرعة البرق.',
        descriptionEN: 'Ask your database smart questions to get reports and results at lightning speed.',
        lessons: [
          {
            id: 'les_3_1',
            title: 'استعلام التحديد البسيط (Select Query)',
            titleEN: 'Simple Select Query',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'نافذة تصميم الاستعلام. جدول "الزبائن" مضاف. حقول مزدوج عليها: الاسم، المدينة. في صف المعايير تحت "المدينة": "وهران". عند تشغيل الاستعلام، تظهر قائمة بالزبائن من وهران فقط.',
            visualDescriptionEN: 'Query Design window. "Customers" table added. Fields clicked: Name, City. In Criteria row under "City": "Oran". Running the query displays a list of customers strictly from Oran.',
            duration: '09:00',
            summary: [
              'الاستعلام هو سؤال توجهه لقاعدة البيانات.',
              'استعلام التحديد يعرض بيانات تطابق معايير معينة.',
              'أنشئه من: إنشاء > تصميم استعلام > أضف الجداول > اسحب الحقول > ضع المعايير.',
              'يمكنك عرض حقول محددة فقط، دون كشف كل الجدول.',
              'المعايير النصية توضع بين علامتي تنصيص في SQL، لكن في واجهة Access تكتب مباشرة.'
            ],
            summaryEN: [
              'A query is a question you ask the database.',
              'Select query displays data matching certain criteria.',
              'Create via: Create > Query Design > Add Tables > Drag Fields > Set Criteria.',
              'You can show specific fields only without exposing the whole table.',
              'Text criteria are in quotes in SQL, but directly typed in Access UI.'
            ],
            task: {
              title: 'أول استعلام لك',
              titleEN: 'Your first query',
              description: 'أنشئ استعلاماً يعرض أسماء الزبائن الذين سجلوا بعد تاريخ 1/1/2024. أظهر الاسم والتاريخ فقط.',
              descriptionEN: 'Create a query showing customer names who registered after 1/1/2024. Show only Name and Date.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا نستخدم الاستعلام (Query) بدلاً من البحث في الجداول مباشرة؟',
                questionEN: 'Why do we use a Query instead of searching tables directly?',
                options: [
                  { id: 'o1', text: 'لأن الجداول لا يمكن فتحها بعد إغلاقها', textEN: 'Because tables cannot be opened after closing', isCorrect: false },
                  { id: 'o2', text: 'لقدرته على تصفية، حساب، وعرض البيانات من عدة جداول في وجهة واحدة مخصصة', textEN: 'For its ability to filter, calculate, and display data from multiple tables in one custom view', isCorrect: true },
                  { id: 'o3', text: 'الاستعلام يحذف البيانات غير المهمة', textEN: 'A query deletes unimportant data', isCorrect: false }
                ],
                explanation: 'الاستعلام هو أداة فلترة قوية تُسهل ترتيب المعلومات واستدعائها بناء على شروط.',
                explanationEN: 'A query is a powerful filtering tool that makes ordering and retrieving conditioned data easy.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_3_2',
            title: 'الاستعلام بمعايير متعددة والفرز',
            titleEN: 'Querying with Multiple Criteria and Sorting',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'نافذة التصميم، لكن صف المعايير يحتوي: "وهران" تحت المدينة، و ">20" تحت تاريخ_التسجيل. النتيجة: زبائن من وهران سجلوا بعد 2020. عمود "الاسم" مُرتب أبجدياً.',
            visualDescriptionEN: 'Design window, criteria row has: "Oran" under City, and ">20" under Registration_Date. Result: Oran customers registered after 2020. "Name" column sorted alphabetically.',
            duration: '10:00',
            summary: [
              'يمكن الجمع بين عدة معايير في نفس الصف (AND) أو في صفوف مختلفة (OR).',
              'للفرز: اختر "تصاعدي" أو "تنازلي" في صف الفرز تحت الحقل.',
              'يمكنك استخدام رموز: >, <, >=, <=, <> (لا يساوي).',
              'لعرض الزبائن من وهران أو قسنطينة: ضع "وهران" في صف المعايير و"قسنطينة" في صف "أو".'
            ],
            summaryEN: [
              'Combine multiple criteria in the same row (AND) or different rows (OR).',
              'To sort: choose "Ascending" or "Descending" in the Sort row under the field.',
              'You can use symbols: >, <, >=, <=, <> (Not equal).',
              'To show customers from Oran or Constantine: place "Oran" in Criteria row and "Constantine" in the "or" row.'
            ],
            task: {
              title: 'تصميم استعلام مركب',
              titleEN: 'Design a complex query',
              description: 'أنشئ استعلاماً يعرض الطلبات التي تزيد قيمتها عن 5000 دج، مرتبة من الأحدث إلى الأقدم.',
              descriptionEN: 'Create a query showing orders exceeding 5000 DZD, sorted newest to oldest.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا وضعت شرطين في نفس السطر بمنطقة الشروط، ما هي العلاقة المنطقية بينهما؟',
                questionEN: 'If you put two conditions on the same criteria line, what is the logical relationship between them?',
                options: [
                  { id: 'o1', text: 'أو (OR)', textEN: 'OR', isCorrect: false },
                  { id: 'o2', text: 'و (AND)', textEN: 'AND', isCorrect: true },
                  { id: 'o3', text: 'لا (NOT)', textEN: 'NOT', isCorrect: false }
                ],
                explanation: 'كتابة شرطين على نفس الصف تعني أن كليهما يجب أن يتحققا معاً (AND).',
                explanationEN: 'Writing two conditions on the same row means both must be met together (AND).'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_3_3',
            title: 'الاستعلامات الحسابية والإجمالية',
            titleEN: 'Calculated and Totals Queries',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'في تصميم الاستعلام، زر "الإجماليات" (Σ) يظهر صفاً جديداً. تحت حقل "المبلغ" نختار "Sum"، تحت "معرف_الطلب" نختار "Count". النتيجة تظهر مجموع المبيعات وعدد الطلبات.',
            visualDescriptionEN: 'In query design, the "Totals" button (Σ) reveals a new row. Under "Amount" we pick "Sum", under "Order_ID" we pick "Count". Result shows total sales and order count.',
            duration: '11:30',
            summary: [
              'استعلامات الإجماليات تلخص البيانات: مجموع، متوسط، عدد، أعلى، أدنى.',
              'فعّل صف الإجماليات من زر "Sigma" في شريط التصميم.',
              'يمكن إنشاء حقل حسابي: "الإجمالي: [السعر] * [الكمية]".',
              'هذه الاستعلامات ضرورية للتقارير الشهرية والمحاسبة.',
              'جرب Group By لتجميع النتائج حسب فئة (مثلاً: مجموع المبيعات لكل مدينة).'
            ],
            summaryEN: [
              'Totals queries summarize data: Sum, Avg, Count, Max, Min.',
              'Enable the Totals row from the "Sigma" button in the Design ribbon.',
              'You can create a calculated field: "Total: [Price] * [Quantity]".',
              'These queries are essential for monthly reports and accounting.',
              'Try "Group By" to group results by category (e.g., total sales per city).'
            ],
            task: {
              title: 'إنشاء حقل حسابي',
              titleEN: 'Create a calculated field',
              description: 'أنشئ استعلاماً يحسب إجمالي قيمة الطلبات لكل زبون. أظهر اسم الزبون والمجموع.',
              descriptionEN: 'Create a query calculating total order values per customer. Show Customer Name and Sum.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لإيجاد عدد السجلات التي توافق شرطاً معيناً، أي دالة إجمال نستعمل؟',
                questionEN: 'To find the number of records meeting a certain condition, which total function do we use?',
                options: [
                  { id: 'o1', text: 'Sum (المجموع)', textEN: 'Sum', isCorrect: false },
                  { id: 'o2', text: 'Max (الحد الأقصى)', textEN: 'Max', isCorrect: false },
                  { id: 'o3', text: 'Count (العدد)', textEN: 'Count', isCorrect: true }
                ],
                explanation: 'Count تقوم بإحصاء وحساب عدد السجلات (الصفوف)، بينما Sum تجمع القيم الرقمية بداخلها.',
                explanationEN: 'Count tallies the number of records (rows), while Sum adds numeric values within them.'
              }
            ],
            xpReward: 35
          },
          {
            id: 'les_3_4',
            title: 'استعلامات الإجراء (Action Queries) – تحديث، حذف، إلحاق',
            titleEN: 'Action Queries - Update, Delete, Append',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=400&q=80'],
            visualDescription: 'قائمة Access تظهر أنواع الاستعلامات. اختيار "استعلام تحديث" (Update Query). نافذة تصميم، صف "تحديث إلى" لحقل "السعر" بـ "[السعر]*1.1". عند التشغيل، تحذير "أنت على وشك تحديث 50 سجلاً". ثم تأكيد.',
            visualDescriptionEN: 'Access menu showing query types. Choosing "Update Query". Design window, "Update To" row for "Price" field with "[Price]*1.1". Upon running, warning "You are about to update 50 rows". Then confirmation.',
            duration: '10:00',
            summary: [
              'استعلامات الإجراء تغير البيانات فعلياً، استخدمها بحذر.',
              'تحديث: لتعديل مجموعة سجلات دفعة واحدة (مثلاً رفع الأسعار 10%).',
              'حذف: لحذف سجلات تنطبق عليها معايير.',
              'إلحاق: لإضافة سجلات من جدول لآخر.',
              'دائماً خذ نسخة احتياطية قبل تشغيلها.'
            ],
            summaryEN: [
              'Action queries permanently change data; use with caution.',
              'Update: Edit a batch of records at once (e.g., raise prices by 10%).',
              'Delete: Remove records meeting criteria.',
              'Append: Add records from one table to another.',
              'Always make a backup before running them.'
            ],
            task: {
              title: 'تنفيذ استعلام إجراء بحذر',
              titleEN: 'Execute an Action Query carefully',
              description: 'خذ نسخة من قاعدة بياناتك. أنشئ استعلام تحديث يضيف 1000 دج لراتب كل الموظفين الذين رواتبهم أقل من 25000 دج. نفذه ثم تحقق.',
              descriptionEN: 'Make a backup. Create an update query adding 1000 DZD to all employees with a salary below 25000 DZD. Run and verify.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي النصيحة الأهم دائماً قبل عمل استعلام حذف أو تحديث؟',
                questionEN: 'What is the most important advice before running a Delete or Update query?',
                options: [
                  { id: 'o1', text: 'أخذ نسخة احتياطية (Backup) قبل التنفيذ', textEN: 'Make a backup before executing', isCorrect: true },
                  { id: 'o2', text: 'التحويل إلى اللغة الإنجليزية', textEN: 'Switching to English', isCorrect: false },
                  { id: 'o3', text: 'تغيير ألوان الجدول', textEN: 'Changing table colors', isCorrect: false }
                ],
                explanation: 'لأن استعلام الإجراء يقوم بتعديلات أو حذوفات لا يمكن التراجع عنها بـ Ctrl+Z.',
                explanationEN: 'Because an Action Query makes irreversible modifications or deletions (Ctrl+Z won\'t work).'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_4',
        title: 'المرحلة 4: النماذج، التقارير، والتطبيق المتكامل',
        titleEN: 'Stage 4: Forms, Reports, and Integrated App',
        description: 'صمم واجهات إدخال جذابة وتقارير متطورة وأتمت أعمالك لتبني برنامجك الخاص.',
        descriptionEN: 'Design attractive input interfaces, sophisticated reports, and automate tasks to build your own app.',
        lessons: [
          {
            id: 'les_4_1',
            title: 'إنشاء نموذج إدخال بيانات بسيط',
            titleEN: 'Creating a Simple Data Entry Form',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: من تبويب "إنشاء" يختار "نموذج" (Form). يظهر نموذج تلقائي يعرض سجلات جدول الزبائن واحداً تلو الآخر. يد تنتقل بين السجلات بأزرار التنقل. ثم ينتقل إلى عرض التصميم ويُضبط حجم الحقول ومكانها.',
            visualDescriptionEN: 'Animated scene: From "Create" tab selects "Form". An automatic form appears showing Customers table records one by one. Hand navigates records with buttons. Then moves to Design View, adjusting field sizes and placements.',
            duration: '14:00',
            summary: [
              'النموذج واجهة سهلة لإدخال البيانات بدلاً من فتح الجدول مباشرة.',
              'لإنشائه بسرعة: حدد الجدول > إنشاء > نموذج.',
              'يمكن تخصيص التصميم: أضف شعاراً، غير ألوان الخلفية، رتب الحقول.',
              'أضف أزراراً (زر حفظ، زر سجل جديد) من خلال عرض التصميم.',
              'النموذج يقلل أخطاء الإدخال ويساعد المستخدمين غير التقنيين.'
            ],
            summaryEN: [
              'A Form is a user-friendly interface for data entry instead of opening tables directly.',
              'To build rapidly: Select table > Create > Form.',
              'Customize design: add a logo, change backgrounds, rearrange fields.',
              'Add buttons (Save, New Record) in Design View.',
              'Forms reduce entry errors and help non-technical users.'
            ],
            task: {
              title: 'تصميم أول نموذج لك',
              titleEN: 'Design your first form',
              description: 'أنشئ نموذجاً لجدول \'الطلبات\'. أضف عنواناً في الأعلى \'نموذج إدخال الطلبات\'. جرب إدخال طلب جديد باستخدامه.',
              descriptionEN: 'Create a form for the \'Orders\' table. Add a title at the top \'Order Input Form\'. Try entering a new order using it.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الهدف الأساسي من النماذج (Forms) في Access؟',
                questionEN: 'What is the main goal of Forms in Access?',
                options: [
                  { id: 'o1', text: 'بناء واجهات سهلة وآمنة للمستخدمين لإدخال وتعديل البيانات دون لمس الجداول الخام', textEN: 'Build easy and secure interfaces for users to enter and edit data without touching raw tables', isCorrect: true },
                  { id: 'o2', text: 'طباعة البيانات للمدير', textEN: 'Print data for the manager', isCorrect: false },
                  { id: 'o3', text: 'القيام بالعمليات الحسابية المعقدة', textEN: 'Perform complex calculations', isCorrect: false }
                ],
                explanation: 'النماذج هي الواجهة الأمامية التي تحمي تركيبة قاعدة البيانات وتجعل الاستخدام ممتعاً وسهلاً.',
                explanationEN: 'Forms are the frontend protecting the database structure, making usage enjoyable and easy.'
              }
            ],
            xpReward: 35
          },
          {
            id: 'les_4_2',
            title: 'إنشاء تقرير احترافي للطباعة',
            titleEN: 'Creating a Professional Report for Printing',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'من تبويب "إنشاء" > "تقرير" (Report). يظهر تقرير ببيانات الزبائن في صفوف وأعمدة، مع ترويسة وتذييل تلقائيين. ثم عرض التصميم: تُضاف مسطرة، يُنسق الخط، يُضاف شعار في الترويسة.',
            visualDescriptionEN: 'From "Create" tab > "Report". Report appears with customer data organized in columns and rows, with automatic headers and footers. Then Design View: ruler added, font formatted, logo added in header.',
            duration: '11:00',
            summary: [
              'التقارير لعرض البيانات بصيغة قابلة للطباعة أو التصدير PDF.',
              'أنشئها بسرعة من الجدول أو الاستعلام > إنشاء > تقرير.',
              'في عرض التصميم، يمكنك تجميع البيانات (مثلاً: تقرير المبيعات مجمّع حسب المدينة).',
              'أضف أرقام الصفحات، التاريخ، والشعار.',
              'صدر التقرير إلى PDF لإرساله للزبون أو الإدارة.'
            ],
            summaryEN: [
              'Reports display data in a printable format or can be exported to PDF.',
              'Create quickly from table/query via: Create > Report.',
              'In Design View, you can group data (e.g., sales report grouped by city).',
              'Add page numbers, date, and a logo.',
              'Export the report to PDF to send to the client or management.'
            ],
            task: {
              title: 'تطوير تقرير للطباعة',
              titleEN: 'Develop a printable report',
              description: 'أنشئ تقريراً من استعلام مجموع الطلبات لكل زبون. جمّعه حسب المدينة. صدره إلى PDF.',
              descriptionEN: 'Create a report from the total orders per customer query. Group by City. Export to PDF.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا أردنا إعداد ورقة لطباعة فواتير آخر الشهر، فما هو الكائن المناسب لاستخدامه؟',
                questionEN: 'If we want to prepare a page to print end-of-month invoices, which object is best to use?',
                options: [
                  { id: 'o1', text: 'الجدول (Table)', textEN: 'Table', isCorrect: false },
                  { id: 'o2', text: 'التقرير (Report)', textEN: 'Report', isCorrect: true },
                  { id: 'o3', text: 'النموذج (Form)', textEN: 'Form', isCorrect: false }
                ],
                explanation: 'التقرير متخصص في تشكيل البيانات بالشكل الأنسب للطباعة على الورق واستخراج العروض.',
                explanationEN: 'Reports specialize in formatting data properly for paper printing and exporting presentations.'
              }
            ],
            xpReward: 35
          },
          {
            id: 'les_4_3',
            title: 'أتمتة المهام باستخدام الماكرو (Macro)',
            titleEN: 'Automating Tasks using Macros',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'نافذة تصميم الماكرو. إجراء "OpenForm" لفتح نموذج الزبائن، ثم إجراء "MessageBox" لعرض رسالة ترحيب. بعدها يسند الماكرو إلى زر في النموذج الرئيسي. عند النقر، يُفتح النموذج وتظهر الرسالة.',
            visualDescriptionEN: 'Macro design window. "OpenForm" action targeting Customers form, then "MessageBox" action displaying a welcome message. Then the macro is bound to a button on the main form. On click, form opens and message shows.',
            duration: '10:45',
            summary: [
              'الماكرو يسجل سلسلة أوامر وينفذها بنقرة واحدة.',
              'استخدمه لأتمتة المهام المتكررة: فتح تقرير، تصدير بيانات، عرض رسالة.',
              'يمكن ربط الماكرو بزر في نموذج.',
              'لا يتطلب معرفة برمجية عميقة.',
              'مثالي لبناء تطبيقات Access سهلة الاستعمال للموظفين.'
            ],
            summaryEN: [
              'A Macro records a sequence of commands and executes them with a single click.',
              'Use it to automate repetitive tasks: opening reports, exporting, displaying messages.',
              'The macro can be bound to a button in a form.',
              'It does not require deep programming knowledge.',
              'Perfect for building user-friendly Access applications for employees.'
            ],
            task: {
              title: 'تشغيل الماكرو الأول',
              titleEN: 'Run your first macro',
              description: 'أنشئ ماكرو بسيطاً يفتح تقرير \'مجموع الطلبات\' ويعرض رسالة \'تم فتح التقرير\'. اربطه بزر في نموذج رئيسي.',
              descriptionEN: 'Create a simple macro that opens \'Total Orders\' report and shows message \'Report Opened\'. Bind it to a button on a main form.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي أهم فائدة لاستخدام وحدات الماكرو في تطبيقك؟',
                questionEN: 'What is the main benefit of using Macros in your application?',
                options: [
                  { id: 'o1', text: 'إنها ترسم تقارير بيانية تلقائياً', textEN: 'They draw graphic reports automatically', isCorrect: false },
                  { id: 'o2', text: 'أتمتة المهام المتكررة وتوفير الوقت بنقرات بسيطة، دون الحاجة لتعلم البرمجة المعقدة', textEN: 'Automating repetitive tasks and saving time with simple clicks, without learning complex coding', isCorrect: true },
                  { id: 'o3', text: 'الماكرو يقوم بإصلاح أخطاء ويندوز', textEN: 'A macro fixes Windows errors', isCorrect: false }
                ],
                explanation: 'الماكرو هو ببساطة مجموعة تعليمات مجهزة مسبقاً لتكون سهلة التشغيل بضغطة زر.',
                explanationEN: 'A macro is simply a pre-made set of instructions tailored for easy execution via button click.'
              }
            ],
            xpReward: 35
          },
          {
            id: 'les_4_4',
            title: 'مشروع التخرج – نظام متكامل لمكتبة صغيرة',
            titleEN: 'Capstone Project - Complete System for a Small Library',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي كبير يظهر قاعدة بيانات Access مكتملة بنماذج أنيقة وتقارير. شعار مكتبة وهمية "مكتبة النور". جداول: كتب، أعضاء، إعارات. نموذج إعارة بسيط. تقرير بالكتب المعارة حالياً.',
            visualDescriptionEN: 'Large illustration showcasing a complete Access database with elegant forms and reports. Fictional "Al-Noor Library" logo. Tables: Books, Members, Loans. Simple loan form. Report of currently loaned books.',
            duration: '35:00',
            summary: [
              'دمج كل المهارات المكتسبة لبناء نظام فعال.',
              'بناء الجداول الأساسية: الكتب، الأعضاء، الإعارات.',
              'تأمين العلاقات والتكامل المرجعي.',
              'تصميم النماذج وتسهيل البحث بالإستعلامات.',
              'تنسيق التقارير النهائية للمدير.'
            ],
            summaryEN: [
              'Integrate all acquired skills to build an effective system.',
              'Build essential tables: Books, Members, Loans.',
              'Secure relationships and referential integrity.',
              'Design forms and simplify search with queries.',
              'Format final reports for the manager.'
            ],
            task: {
              title: 'تطوير تطبيق مكتبة النور',
              titleEN: 'Develop Al-Noor Library App',
              description: 'صمم قاعدة بيانات: 1- جداول (كتب، أعضاء، إعارات)، 2- نماذج بمفاتيح منسدلة، 3- تقرير للكتب غير المرجعة مع ماكرو يفتحه.',
              descriptionEN: 'Design a DB: 1- Tables (Books, Members, Loans), 2- Forms with dropdowns, 3- Unreturned books report with an opening macro.'
            },
            xpReward: 150
          }
        ]
      }
    ],
    badges: {
      started: {
        id: 'acc_starter',
        title: 'مخطط البيانات المبتدئ',
        titleEN: 'Beginner Data Planner',
        description: 'بدأت رحلتك في تنظيم البيانات مع Access.',
        descriptionEN: 'Started your journey in organizing data with Access.',
        icon: 'database'
      },
      completed: {
        id: 'acc_pro',
        title: 'محترف Microsoft Access',
        titleEN: 'Microsoft Access Professional',
        description: 'أتممت جميع المراحل وأصبحت قادراً على بناء أنظمة قواعد البيانت.',
        descriptionEN: 'Completed all stages and are now capable of building database systems.',
        icon: 'database'
      }
    }
  },
  hair_styling: {
    craftId: 'hair_styling',
    title: 'صبغ الشعر، إزالة الصبغة، وتجعيد الشعر',
    titleEN: 'Hair Coloring, Dye Removal, and Perming',
    description: 'تحول إلى كيميائي وفنان يفهم طبيعة كل شعرة ويحول اللون والملمس إلى تناغم.',
    descriptionEN: 'Become a chemist and artist who transforms color and texture into harmony.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: السلامة والنظافة وأساسيات الشعر',
        titleEN: 'Stage 1: Safety, Hygiene, and Hair Basics',
        description: 'تعلم أساسيات التعامل الآمن مع المواد الكيميائية وفهم بنية الشعر وأنواعه.',
        descriptionEN: 'Learn the basics of safe handling of chemicals and understanding hair structure and types.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'السلامة والتعقيم في صالون الصبغ والتجعيد',
            titleEN: 'Safety and Sterilization in the Coloring and Perming Salon',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك لصالون نظيف. مصفف يرتدي قفازات وكمامة خفيفة. أدوات توضع في جهاز تعقيم بالأشعة فوق البنفسجية. تهوية جيدة بالنافذة مفتوحة. ملصق على الجدار: "السلامة أولاً". زبونة ترتدي رداء واقياً.',
            visualDescriptionEN: 'Animated scene of a clean salon. A stylist wears gloves and a light mask. Tools are placed in a UV sterilizer. Good ventilation with an open window. Poster on the wall: "Safety First". A client wears a protective cape.',
            duration: '05:00',
            summary: [
              'ارتدِ القفازات والكمامة عند التعامل مع الصبغات والمحاليل الكيميائية.',
              'عقم الأدوات المعدنية بعد كل استعمال.',
              'تأكد من التهوية الجيدة في الصالون لتجنب استنشاق الأبخرة.',
              'احفظ المواد الكيميائية في مكان بارد ومظلم بعيداً عن متناول الأطفال.',
              'اغسل يديك قبل وبعد كل زبون.',
              'لا تأكل أو تشرب في منطقة العمل.'
            ],
            summaryEN: [
              'Wear gloves and a mask when handling dyes and chemical solutions.',
              'Sterilize metal tools after each use.',
              'Ensure good ventilation in the salon to avoid inhaling fumes.',
              'Store chemicals in a cool, dark place out of reach of children.',
              'Wash your hands before and after each client.',
              'Do not eat or drink in the work area.'
            ],
            task: {
              title: 'تجهيز مساحة العمل',
              titleEN: 'Prepare Workspace',
              description: 'تفقد مكاناً تحضر فيه المواد (حتى لو كان مطبخك). اكتب قائمة بـ 5 إجراءات سلامة ستطبقها قبل أن تبدأ أي عمل بالصبغات. جهز حقيبة إسعافات أولية صغيرة.',
              descriptionEN: 'Check an area where you prepare materials (even your kitchen). Write a list of 5 safety measures you will apply before starting any coloring work. Prepare a small first aid kit.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا تعتبر التهوية الجيدة ضرورية في صالون الصبغ والتجعيد؟',
                questionEN: 'Why is good ventilation essential in a coloring and perming salon?',
                options: [
                  { id: 'o1', text: 'لتبريد المكان فقط', textEN: 'Only to cool the place', isCorrect: false },
                  { id: 'o2', text: 'لتجنب استنشاق أبخرة المواد الكيميائية الضارة', textEN: 'To avoid inhaling harmful chemical fumes', isCorrect: true },
                  { id: 'o3', text: 'لتجفيف شعر الزبائن بسرعة أكبر', textEN: 'To dry clients\' hair faster', isCorrect: false }
                ],
                explanation: 'التهوية تمنع تراكم الغازات الكيميائية وتحافظ على صحة الجهاز التنفسي.',
                explanationEN: 'Ventilation prevents the buildup of chemical gases and protects respiratory health.'
              }
            ],
            xpReward: 15
          },
          {
            id: 'les_1_2',
            title: 'بنية الشعر وأنواعه وتشخيص حالته',
            titleEN: 'Hair Structure, Types, and Condition Diagnosis',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي مكبر لشعرة: البشرة الخارجية (الكيوتيكل)، القشرة، واللب. أسهم تشرح. ثلاث صور بجانبها: شعرة رفيعة، عادية، سميكة. جدول صغير: "جاف / دهني / عادي".',
            visualDescriptionEN: 'Detailed illustration of a hair strand: the outer cuticle, cortex, and medulla. Explanatory arrows. Three pictures next to it: fine, normal, and thick hair. A small table: "Dry / Oily / Normal".',
            duration: '06:00',
            summary: [
              'الشعرة تتكون من بشرة خارجية تحمي الطبقات الداخلية.',
              'المسامية: قدرة الشعرة على امتصاص الرطوبة والمواد.',
              'أنواع الشعر: رفيع، عادي، سميك.',
              'حالات الشعر: جاف، دهني، مختلط، تالف.',
              'اختبار المسامية: ضع خصلة في كوب ماء، إن غاصت بسرعة فالمسامية عالية.',
              'التشخيص الصحيح يمنع الكوارث الكيميائية.'
            ],
            summaryEN: [
              'The hair strand consists of an outer cuticle protecting the inner layers.',
              'Porosity: the hair\'s ability to absorb moisture and chemicals.',
              'Hair types: fine, normal, thick.',
              'Hair conditions: dry, oily, mixed, damaged.',
              'Porosity test: put a strand in a glass of water; if it sinks quickly, porosity is high.',
              'Proper diagnosis prevents chemical disasters.'
            ],
            task: {
              title: 'اختبار المسامية',
              titleEN: 'Porosity Test',
              description: 'خذ خصلة صغيرة من شعرك (أو من مشطك). ضعها في كوب ماء وسجل الوقت الذي تستغرقه لتغوص. حدد نوع شعرك ومساميته. اكتب ذلك في مذكرتك.',
              descriptionEN: 'Take a small strand of your hair (or from your comb). Place it in a glass of water and record how long it takes to sink. Determine your hair type and porosity. Write it down in your notebook.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ماذا يعني إذا غاصت خصلة الشعر بسرعة في كأس الماء؟',
                questionEN: 'What does it mean if a strand of hair sinks quickly in a glass of water?',
                options: [
                  { id: 'o1', text: 'الشعر ذو مسامية منخفضة', textEN: 'Hair has low porosity', isCorrect: false },
                  { id: 'o2', text: 'الشعر دهني جداً', textEN: 'Hair is very oily', isCorrect: false },
                  { id: 'o3', text: 'الشعر ذو مسامية عالية ومفتوح المسام', textEN: 'Hair has high porosity and open cuticles', isCorrect: true }
                ],
                explanation: 'المسامية العالية تعني أن قشور الشعرة مفتوحة فتسمح للماء بالدخول بسرعة والغوص.',
                explanationEN: 'High porosity means the hair cuticles are open, allowing water to enter quickly and the hair to sink.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_3',
            title: 'الأدوات الأساسية للصبغ وإزالة اللون والتجعيد',
            titleEN: 'Basic Tools for Coloring, Removing Color, and Perming',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'طاولة تعرض فراشي صبغ بمقاسات مختلفة، أوعية خلط، بكرة تجعيد بأحجام، ميزان، قفازات. كل أداة بجانبها اسمها. يد تشير إلى كل أداة وتظهر استخدامها في مشهد صغير (فرشاة توزع لوناً، بكرة تلف خصلة).',
            visualDescriptionEN: 'A table displaying coloring brushes of different sizes, mixing bowls, perm rods of various sizes, a scale, gloves. Each tool is labeled. A hand points to each tool showing its use in a small scene (brush distributing color, rod rolling a strand).',
            duration: '07:00',
            summary: [
              'فرشاة التوزيع: لتطبيق الصبغة بدقة على الجذور والأطوال.',
              'الوعاء: يكون بلاستيكياً أو زجاجياً، لا معدنياً لأنه يتفاعل.',
              'الميزان الحساس: لوزن الصبغة والأكسجين بنسب دقيقة.',
              'بكرات التجعيد: تأتي بأقطار مختلفة تحدد حجم الموجة.',
              'المشط الرفيع: لتفريق الشعر إلى خصل متساوية.'
            ],
            summaryEN: [
              'Application brush: for precise dye application on roots and lengths.',
              'Bowl: should be plastic or glass, never metal because it reacts.',
              'Precision scale: for weighing dye and developer accurately.',
              'Perm rods: come in different diameters that determine the wave size.',
              'Fine-tooth comb: to section hair into equal parts.'
            ],
            task: {
              title: 'التعرف على الأدوات',
              titleEN: 'Identify the Tools',
              description: 'إذا توفرت أدوات مشابهة في منزلك، تعرف عليها. وإذا لم تتوفر، ارسمها في كراسك واكتب وظيفة كل منها. رتب أدواتك في علبة وكأنك ستذهب لخدمة زبون.',
              descriptionEN: 'If similar tools are available at home, familiarize yourself with them. If not, draw them in your notebook and write the function of each. Arrange your tools in a box as if you are going to serve a client.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا يجب تجنب استخدام وعاء معدني عند خلط الصبغة؟',
                questionEN: 'Why should you avoid using a metal bowl when mixing hair dye?',
                options: [
                  { id: 'o1', text: 'لأنه قد يتفاعل كيميائياً مع مكونات الصبغة والأكسجين', textEN: 'Because it can chemically react with the dye and developer components', isCorrect: true },
                  { id: 'o2', text: 'لأنه يبرد الخليط بسرعة', textEN: 'Because it cools the mixture quickly', isCorrect: false },
                  { id: 'o3', text: 'لأنه يصعب تنظيفه', textEN: 'Because it is hard to clean', isCorrect: false }
                ],
                explanation: 'المعدن يمكن أن يسبب تفاعلاً تأكسدياً غير مرغوب فيه يفسد خصائص الصبغة.',
                explanationEN: 'Metal can cause an unwanted oxidative reaction that ruins the dye\'s properties.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_4',
            title: 'نظرية الألوان ودائرة الألوان التجميلية',
            titleEN: 'Color Theory and the Cosmetic Color Wheel',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'دائرة ألوان كبيرة على الشاشة. الألوان الأساسية والثانوية. أسهم تظهر علاقة التضاد (أخضر يقابل أحمر). بجانبها خصلات شعر: شعر داكن، شعر برتقالي غير مرغوب، وسهم يشير إلى أن اللون الأزرق/الأخضر يصححه.',
            visualDescriptionEN: 'Large color wheel on screen. Primary and secondary colors. Arrows show contrasting relationships (green opposite red). Next to it, hair strands: dark hair, unwanted orange hair, and an arrow indicating blue/green corrects it.',
            duration: '08:00',
            summary: [
              'دائرة الألوان هي خريطة الصباغ.',
              'الألوان المتقابلة في الدائرة تتعادل (تحيد بعضها).',
              'البرتقالي يحيد الأزرق، والأخضر يحيد الأحمر.',
              'لفهم الصبغة، اعرف أن الصبغة تتكون من لون أساسي + أكسجين.',
              'المستويات: من 1 (أسود) إلى 10 (أشقر فاتح جداً).',
              'كلما ارتفع مستوى الأكسجين، زادت قوة فتح اللون.'
            ],
            summaryEN: [
              'The color wheel is the colorist\'s map.',
              'Opposite colors on the wheel neutralize each other.',
              'Orange neutralizes blue, and green neutralizes red.',
              'To understand dye, know that dye consists of a base color + developer.',
              'Levels: from 1 (black) to 10 (lightest blonde).',
              'The higher the developer volume, the stronger the lifting power.'
            ],
            task: {
              title: 'تطبيق نظرية الألوان',
              titleEN: 'Applying Color Theory',
              description: 'ارسم دائرة الألوان على ورقة. اختر لون صبغة تتمناه، وحاول تحديد ما هي الألوان التي قد تظهر غير مرغوبة عند تفتيح الشعر الأسود. كيف ستعادلها؟',
              descriptionEN: 'Draw a color wheel on paper. Choose a desired dye color, and try to determine which unwanted colors might appear when lightening black hair. How will you neutralize them?'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا ظهر لون برتقالي غير مرغوب فيه بعد سحب اللون، ما هو اللون المضاد الذي يعادله ويحيده؟',
                questionEN: 'If an unwanted orange color appears after bleaching, what is the contrasting color that neutralizes it?',
                options: [
                  { id: 'o1', text: 'الأحمر', textEN: 'Red', isCorrect: false },
                  { id: 'o2', text: 'الأصفر', textEN: 'Yellow', isCorrect: false },
                  { id: 'o3', text: 'الأزرق', textEN: 'Blue', isCorrect: true }
                ],
                explanation: 'الأزرق هو اللون المتقابل مع البرتقالي في دائرة الألوان، لذا يستخدم لإلغاء الانعكاس النحاسي والبرتقالي.',
                explanationEN: 'Blue is strictly opposite orange on the color wheel, so it is used to cancel brassy and orange reflections.'
              }
            ],
            xpReward: 25
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: تقنيات صبغ الشعر وإزالة اللون',
        titleEN: 'Stage 2: Hair Coloring and Color Removal Techniques',
        description: 'إتقان تطبيق الصبغات المختلفة وتقنيات تصحيح الألوان.',
        descriptionEN: 'Mastering the application of different dyes and color correction techniques.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'الصبغة الدائمة – المبدأ والتطبيق خطوة بخطوة',
            titleEN: 'Permanent Dye – Principle and Step-by-Step Application',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: زبونة جالسة، مصفف يفرق الشعر إلى 4 أقسام. يمزج الصبغة مع الأكسجين في وعاء، ثم يبدأ التطبيق من الجذور (بفرشاة دقيقة)، ثم الأطوال. ساعة توقيت تظهر 30-45 دقيقة. أخيراً يشطف الشعر ويجفف، ويظهر اللون النهائي.',
            visualDescriptionEN: 'Animated scene: client sitting, stylist partitions hair into 4 sections. Mixes dye and developer in a bowl, then applies from the roots (with a fine brush), then the lengths. A timer shows 30-45 minutes. Finally washes and dries the hair, revealing the final color.',
            duration: '08:00',
            summary: [
              'الصبغة الدائمة تخترق قشرة الشعرة وتبقى حتى ينمو الشعر الجديد.',
              'تخلط مع أكسجين بنسبة محددة (عادة 1:1 أو حسب التعليمات).',
              'يبدأ التطبيق من الجذور لأن حرارة فروة الرأس تسرع التفاعل.',
              'اترك الوقت المحدد بالضبط (لا تزيد ولا تنقص).',
              'اشطف بالماء الفاتر، ثم استخدم الشامبو والبلسم المرفقين.'
            ],
            summaryEN: [
              'Permanent dye penetrates the hair cortex and stays until new hair grows.',
              'Mix with developer at a specific ratio (usually 1:1 or as per instructions).',
              'Start applying from the roots because scalp heat speeds up the reaction.',
              'Leave for the exact specified time (no more, no less).',
              'Rinse with lukewarm water, then use the provided shampoo and conditioner.'
            ],
            task: {
              title: 'تطبيق الصبغة',
              titleEN: 'Applying the Dye',
              description: 'على رأس تمثال تدريبي (أو ارسم رأساً)، قسم الشعر إلى أربعة أقسام. تخيل تطبيق الصبغة. اكتب تسلسل الخطوات كاملاً.',
              descriptionEN: 'On a mannequin head (or draw a head), divide the hair into four sections. Imagine applying the dye. Write down the complete sequence of steps.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا يُنصح بالبدء بتطبيق الصبغة الدائمة على الجذور أولاً في بعض الحالات؟',
                questionEN: 'Why is it recommended to start applying permanent dye on the roots first in some cases?',
                options: [
                  { id: 'o1', text: 'لأن الجذور أسهل في الوصول إليها', textEN: 'Because roots are easier to reach', isCorrect: false },
                  { id: 'o2', text: 'لأن حرارة فروة الرأس تسرع من تفاعل وعمل الصبغة', textEN: 'Because the heat from the scalp speeds up the reaction and action of the dye', isCorrect: true },
                  { id: 'o3', text: 'لأن الجذور تحتاج إلى كمية أقل من الصبغة', textEN: 'Because roots need less dye', isCorrect: false }
                ],
                explanation: 'حرارة فروة الرأس المنبعثة تجعل التفاعل الكيميائي أسرع، لذا غالباً ما تحتاج ترتيباً خاصاً عند التطبيق.',
                explanationEN: 'The heat radiating from the scalp makes the chemical reaction faster, requiring special timing and sequence during application.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_2_2',
            title: 'الصبغات شبه الدائمة والمؤقتة والطبيعية (الحناء)',
            titleEN: 'Semi-permanent, Temporary, and Natural Dyes (Henna)',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ثلاث علب صبغة: علبة "شبه دائمة" مكتوب عليها "تدوم 6-8 غسلات"، علبة "مؤقتة" (رذاذ لون)، وكيس حناء طبيعي. صورة لشعر بخصل ملونة بألوان زاهية، وأخرى بشعر محنى باللون البني الطبيعي.',
            visualDescriptionEN: 'Three dye packages: a "semi-permanent" box labeled "lasts 6-8 washes", a "temporary" box (color spray), and a natural henna bag. A picture of hair with brightly colored strands, and another with natural brown hennaed hair.',
            duration: '06:00',
            summary: [
              'شبه الدائمة: تغلف الشعرة دون اختراق عميق، تتلاشى تدريجياً.',
              'المؤقتة: للاستعمال اليومي وتزال بالشامبو.',
              'الحناء: صبغة طبيعية، تعطي لوناً برتقالياً/بني/أحمر، وتقوي الشعر لكن يصعب إزالتها.',
              'الحناء لا تفتح اللون، فقط تضيف لوناً فوق اللون الأصلي.',
              'انتبه: بعض الزبونات يستعملن الحناء ثم يرغبن في صبغ كيميائي، وهذا خطر للتلف.'
            ],
            summaryEN: [
              'Semi-permanent: coats the hair without deep penetration, fades gradually.',
              'Temporary: for daily use and washes out with shampoo.',
              'Henna: a natural dye, gives orange/brown/red color, strengthens hair but is hard to remove.',
              'Henna does not lighten color; it only adds color over the original base.',
              'Careful: Some clients use henna then want a chemical dye, which is a major risk for damage.'
            ],
            task: {
              title: 'مقارنة أنواع الصبغات',
              titleEN: 'Compare Dye Types',
              description: 'اسأل في محيطك (أم، أخت، صديقة) عن تجربة مع الحناء أو صبغة شبه دائمة. دون ملاحظاتهم. قارن إيجابيات وسلبيات كل نوع.',
              descriptionEN: 'Ask around (mother, sister, friend) about an experience with henna or semi-permanent dye. Note their feedback. Compare the pros and cons of each type.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الخطر الرئيسي لتطبيق صبغة كيميائية أو سحب لون على شعر معالج بالحناء حديثاً؟',
                questionEN: 'What is the main risk of applying chemical dye or bleach over recently henna-treated hair?',
                options: [
                  { id: 'o1', text: 'لا يوجد أي خطر', textEN: 'There is no risk', isCorrect: false },
                  { id: 'o2', text: 'تفاعل كيميائي قد يؤدي إلى تلف شديد أو ذوبان الشعرة', textEN: 'A chemical reaction that can lead to severe damage or melting of the hair', isCorrect: true },
                  { id: 'o3', text: 'الصبغة ستكون ألمع وتدوم أطول', textEN: 'The dye will be shinier and last longer', isCorrect: false }
                ],
                explanation: 'الحناء (خاصة التي تحتوي أملاح معدنية) تتفاعل بقوة مع مبيضات الشعر والصبغات مما يسبب تلفاً جذرياً.',
                explanationEN: 'Henna (especially if mixed with metallic salts) reacts violently with hair bleach and dyes, causing extreme damage.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_2_3',
            title: 'سحب اللون (الديكولوراج) وتفتيح الشعر',
            titleEN: 'Bleaching (Decoloring) and Hair Lightening',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لشعرة ويتغير لونها تدريجياً من الأسود إلى الأشقر عبر 7 مراحل. مشهد جانبي: بودرة بيضاء تمزج مع أكسجين 30 فول، ثم تطبق على الشعر بفرشاة، مع وضع مسافة 1 سم عن الجذور. ساعة توقيت.',
            visualDescriptionEN: 'Illustration of a hair strand gradually changing from black to blonde through 7 stages. Side scene: white powder mixed with 30 vol developer, applied to hair with a brush, leaving a 1 cm gap from roots. A timer is shown.',
            duration: '09:00',
            summary: [
              'سحب اللون هو إزالة الصبغة الطبيعية (الميلانين) من الشعر.',
              'يستخدم بودرة ديكولورانت + أكسجين بنسب محددة.',
              'لا يوضع مباشرة على فروة الرأس؛ اترك 1 سم من الجذور.',
              'راقب الشعر كل 5-10 دقائق لتجنب التكسر.',
              'بعد الوصول للون المطلوب، اشطف فوراً.',
              'الشعر المسحوب يحتاج عناية مكثفة وترطيباً عميقاً.'
            ],
            summaryEN: [
              'Bleaching is the removal of the natural pigment (melanin) from the hair.',
              'Uses bleaching powder + developer at specific ratios.',
              'Never apply directly to the scalp; leave 1 cm from the roots.',
              'Monitor the hair every 5-10 minutes to prevent breakage.',
              'Once the desired level is reached, immediately rinse it off.',
              'Bleached hair requires intensive care and deep hydration.'
            ],
            task: {
              title: 'مستويات التفتيح',
              titleEN: 'Lightening Levels',
              description: 'خذ جدول مستويات اللون من 1 إلى 10. تخيل أنك تسحب لون شعر زبون من المستوى 3 إلى المستوى 8. ما هي الألوان الوسيطة التي سيمر بها الشعر (برتقالي، أصفر)؟ كيف تتعامل معها؟',
              descriptionEN: 'Take a color level chart from 1 to 10. Imagine you are bleaching a client\'s hair from level 3 to level 8. What intermediate colors will the hair pass through (orange, yellow)? How do you handle them?'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا يجب ترك مسافة 1 سم بعيداً عن الجذور عند بدء عملية سحب اللون؟',
                questionEN: 'Why should you leave a 1 cm gap from the roots when starting the bleaching process?',
                options: [
                  { id: 'o1', text: 'لتوفير كمية المادة المستخدمة', textEN: 'To save on the amount of product used', isCorrect: false },
                  { id: 'o2', text: 'لأن حرارة الرأس تسرع السحب في الجذور، وتجنباً لتهيج فروة الرأس', textEN: 'Because scalp heat speeds up bleaching at the roots, and to avoid scalp irritation', isCorrect: true },
                  { id: 'o3', text: 'لتبدو الجذور طبيعية داكنة دائماً', textEN: 'So the roots always look naturally dark', isCorrect: false }
                ],
                explanation: 'الجذور تفتح بشكل أسرع جداً، لذلك تطبق المادة على الأطوال أولاً وتترك الجذور للنهاية.',
                explanationEN: 'Roots lighten much faster, so bleach is applied to mid-lengths first and roots last.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_2_4',
            title: 'إزالة الصبغة (Color Remover) وتصحيح الأخطاء',
            titleEN: 'Color Remover and Mistake Correction',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد: شعر مصبوغ بلون داكن جداً غير مرغوب. مصفف يطبق منتج "مزيل الصبغة" بفرشاة. بعد الوقت المحدد، الشعر يبدو أفتح وبرتقالياً بعض الشيء. ثم يغسل جيداً. بجانبه صورة توضح جزيئات الصبغة وهي تنكمش وتغسل بعيداً.',
            visualDescriptionEN: 'Scene: Hair dyed an unwanted very dark color. The stylist applies a "color remover" product with a brush. After the targeted time, the hair looks lighter and slightly orange. It is then washed thoroughly. Alongside is a picture showing dye molecules shrinking and being washed away.',
            duration: '07:00',
            summary: [
              'مزيل الصبغة (Color Remover) لا يبيض الشعر، بل يزيل جزيئات الصبغة الاصطناعية.',
              'مناسب لتصحيح صبغة داكنة جداً أو غير متجانسة.',
              'بعد الإزالة، قد يظهر لون دافئ (برتقالي) يحتاج إلى تصحيح بلون مضاد.',
              'اغسل الشعر مرات عديدة بعد الاستخدام لإزالة كل الأثر.',
              'الانتظار 48 ساعة على الأقل قبل إعادة الصبغ.'
            ],
            summaryEN: [
              'Color Remover does not bleach the hair; it shrinks and removes artificial dye molecules.',
              'Suitable for correcting a dye job that is too dark or patchy.',
              'After removal, a warm underlying tone (orange) might appear, needing neutralization.',
              'Wash hair multiple times after use to clear away all traces.',
              'Wait at least 48 hours before re-dyeing the hair.'
            ],
            task: {
              title: 'تصحيح صبغة',
              titleEN: 'Correct a Dye Job',
              description: 'تخيل أن زبونة صبغت شعرها أسود والآن تريد العودة للبني الفاتح. صف الخطوات التي ستتخذها (أي اختبار، أي منتج، أي لون تصحيحي).',
              descriptionEN: 'Imagine a client dyed her hair black and now wants to return to light brown. Describe the steps you\'d take (which test, which product, which corrective color).'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الفرق الأساسي بين سحب اللون (الديكولوراج) ومزيل الصبغة (Color Remover)؟',
                questionEN: 'What is the main difference between hair bleaching and a color remover?',
                options: [
                  { id: 'o1', text: 'لا يوجد فرق، كلاهما يزيل الميلانين الطبيعي', textEN: 'No difference, both remove natural melanin', isCorrect: false },
                  { id: 'o2', text: 'مزيل الصبغة يؤثر فقط على جزيئات الصبغة الاصطناعية ولا يزيل اللون الطبيعي للشعر', textEN: 'Color remover only affects artificial dye molecules and does not remove the natural hair color', isCorrect: true },
                  { id: 'o3', text: 'مزيل الصبغة أقوى ويدمر بنية الشعر أكثر', textEN: 'Color remover is stronger and damages hair structure more', isCorrect: false }
                ],
                explanation: 'مزيل الصبغة يعمل فقط على تفتيت صبغة الشعر المضافة، بينما السحب يزيل اللونين الطبيعي والاصطناعي.',
                explanationEN: 'Color remover targets only added dye molecules, while bleach strips both natural and artificial pigments.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_5',
            title: 'تقنيات الصبغ الحديثة: الأومبري، البلاياج، والهايلايتس',
            titleEN: 'Modern Coloring Techniques: Ombré, Balayage, and Highlights',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ثلاث صور توضيحية لشعر: 1) أومبري: أطراف فاتحة وجذور داكنة بتدرج ناعم. 2) بلاياج: خصل ممسوحة بفرشاة حرة على السطح. 3) هايلايتس: خصل رفيعة ملفوفة بورق ألمنيوم. أيقونات الأدوات المستعملة مختلفة.',
            visualDescriptionEN: 'Three illustrated hair photos: 1) Ombré: light ends with dark roots in a smooth gradient. 2) Balayage: freehand painted sections on the surface. 3) Highlights: fine strands wrapped in aluminum foil. Different tool icons are used.',
            duration: '08:00',
            summary: [
              'الأومبري: تفتيح الأطراف فقط، ويعطي مظهراً طبيعياً متوهجاً.',
              'البلاياج: خصل مرسومة يدوياً لتعطي تأثير أشعة الشمس.',
              'الالهايلايتس: خصل دقيقة جداً ملفوفة بورق خاص لتفتيح دقيق.',
              'كل تقنية تحتاج إلى دقة يد وتوزيع متقن للمادة.',
              'هذه التقنيات تتطلب تدريباً إضافياً على تفريق الخصل.'
            ],
            summaryEN: [
              'Ombré: lightening just the ends, giving a naturally glowing look.',
              'Balayage: hand-painted sections to give a sun-kissed effect.',
              'Highlights: very fine strands wrapped in special foil for precise lightening.',
              'Each technique requires hand precision and flawless material distribution.',
              'These techniques demand additional training in hair sectioning.'
            ],
            task: {
              title: 'تخطيط التقنيات الحديثة',
              titleEN: 'Planning Modern Techniques',
              description: 'على رأس تمثال (أو صورة)، ارسم خطوطاً تبين أين ستطبق الصبغة في تقنية الأومبري. ثم ارسم خريطة لتوزيع الهايلايتس على كامل الرأس.',
              descriptionEN: 'On a mannequin head (or a picture), draw lines showing where you would apply dye for an Ombré. Then draw a map for highlight distribution across the whole head.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'أين تطبق مادة التفتيح بشكل أساسي في تقنية البلاياج (Balayage)؟',
                questionEN: 'Where is the lightener primarily applied in the Balayage technique?',
                options: [
                  { id: 'o1', text: 'على كامل الشعر من الجذور حتى الأطراف', textEN: 'All over the hair from roots to ends', isCorrect: false },
                  { id: 'o2', text: 'ترسم يدوياً بفرشاة بشكل حر على السطح لتعطي مظهراً طبيعياً متدرجاً', textEN: 'Freehand painted on the surface to give a natural gradient look', isCorrect: true },
                  { id: 'o3', text: 'في الجذور فقط لتغطية الشيب', textEN: 'Only at the roots to cover grays', isCorrect: false }
                ],
                explanation: 'البلاياج كلمة فرنسية تعني "المسح"، وتعتمد على تفتيح خصل سطحية بشكل عشوائي مدروس لتبدو وكأن الشمس فتحتها.',
                explanationEN: 'Balayage means "to sweep" in French, relying on free-hand painting to mimic natural sun-lightening.'
              }
            ],
            xpReward: 30
          }
        ]
      },
      {
        id: 'lvl_3',
        title: 'المرحلة 3: تقنيات تجعيد الشعر',
        titleEN: 'Stage 3: Hair Perming Techniques',
        description: 'الأسرار الكيميائية لتجعيد الشعر بأنواعه المختلفة والعناية به.',
        descriptionEN: 'Chemical secrets for perming different hair types and their care management.',
        lessons: [
          {
            id: 'les_3_1',
            title: 'مبادئ التجعيد الكيميائي – كيف يعمل؟',
            titleEN: 'Principles of Chemical Perming – How does it work?',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لشعرة مستقيمة، ثم جزيئات صغيرة تخترقها وتكسر روابط الكبريت. الشعرة تصبح مرنة. توضع على بكرة وتأخذ شكلها. ثم جزيئات التثبيت تعيد بناء الروابط على الشكل الجديد. العملية كاملة تظهر في 3 مراحل مرقمة.',
            visualDescriptionEN: 'Illustration of a straight hair strand, small particles penetrate it and break sulfur bonds. The hair becomes flexible. It is placed on a rod and takes its shape. Then neutralizer particles rebuild the bonds in the new shape. The whole process is shown in 3 numbered stages.',
            duration: '06:00',
            summary: [
              'التجعيد يكسر الروابط الكبريتية في الشعر ويعيد بنائها على شكل البكرة.',
              'مرحلتان: 1) وضع سائل التجعيد على الشعر الملفوف، 2) وضع سائل التثبيت بعد شطف الأول.',
              'سائل التجعيد يكون قلوياً أو حمضياً حسب نوع الشعر.',
              'الشعر المعالج كيميائياً (مصبوغ/مسحوب) يحتاج إلى مواد ألطف.',
              'اختبار خصلة قبل العملية ضروري.'
            ],
            summaryEN: [
              'Perming breaks the sulfur bonds in the hair and rebuilds them in the shape of the rod.',
              'Two stages: 1) applying perm lotion to rolled hair, 2) applying neutralizer after rinsing the first.',
              'Perm lotion is either alkaline or acid depending on hair type.',
              'Chemically treated hair (dyed/bleached) requires milder solutions.',
              'A strand test before the procedure is mandatory.'
            ],
            task: {
              title: 'مراحل التجعيد',
              titleEN: 'Perming Stages',
              description: 'ابحث عن فيديو قصير (أو تخيل) لعملية تجعيد. ارسم المخطط الثلاثي: شعر مستقيم -> ملفوف على بكرة + لوشن -> شطف + نوتراليزر -> تجعيد ثابت.',
              descriptionEN: 'Search for a short video (or imagine) a perming process. Draw the three-stage diagram: straight hair -> rolled on rod + lotion -> rinse + neutralizer -> fixed curl.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو دور سائل التثبيت (النوتراليزر) في عملية التجعيد الكيميائي؟',
                questionEN: 'What is the role of the neutralizer in the chemical perming process?',
                options: [
                  { id: 'o1', text: 'تلين الشعر قبل لفه على البكرة', textEN: 'Softening the hair before rolling it on the rod', isCorrect: false },
                  { id: 'o2', text: 'إعادة بناء الروابط الكبريتية وتثبيت الشعر على الشكل الجديد', textEN: 'Rebuilding sulfur bonds and locking the hair into the new shape', isCorrect: true },
                  { id: 'o3', text: 'منح الشعر لمعاناً ورائحة زكية', textEN: 'Giving the hair shine and a pleasant scent', isCorrect: false }
                ],
                explanation: 'النوتراليزر يوقف عمل سائل التجعيد ويعيد بناء الروابط بشكلها الجديد لتثبيت التموجات.',
                explanationEN: 'The neutralizer stops the perming lotion\'s action and rebuilds the bonds in their new shape to lock in the curls.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_3_2',
            title: 'أنواع البكرات وتأثيرها على شكل الموجة',
            titleEN: 'Rod Types and Their Impact on Wave Shape',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مجموعة بكرات بأحجام مختلفة على الطاولة: صغيرة جداً (للتجعيد الإفريقي)، متوسطة (للموجة الكلاسيكية)، كبيرة (للحجم فقط). بجانب كل بكرة صورة شعر بنتيجة التجعيد. مشط لولبي خاص بجانب البكرات الحلزونية.',
            visualDescriptionEN: 'A set of rods of different sizes on a table: very small (for African-style curls), medium (classic waves), large (for volume only). Next to each rod is a picture of the resulting hair perm. A special spiral comb next to spiral rods.',
            duration: '07:00',
            summary: [
              'البكرات الصغيرة تعطي تجعيداً ضيقاً وكثيفاً.',
              'البكرات الكبيرة تعطي حجماً وموجة ناعمة.',
              'البكرات الحلزونية تصنع خصلات ملتفة بشكل حلزوني.',
              'طريقة لف الشعر (مسطح، حلزوني، من الأطراف للجذور) تؤثر على النتيجة.',
              'اختيار حجم البكرة يعتمد على رغبة الزبون ونوع شعره.'
            ],
            summaryEN: [
              'Small rods create tight, dense curls.',
              'Large rods provide volume and soft waves.',
              'Spiral rods create spirally coiled strands.',
              'The rolling method (flat, spiral, ends to roots) affects the outcome.',
              'Choosing the rod size depends on the client\'s preference and hair type.'
            ],
            task: {
              title: 'تجربة أحجام البكرات',
              titleEN: 'Experimenting with Rod Sizes',
              description: 'اجمع عدة أقلام وعلب أسطوانية بأقطار مختلفة. استخدمها كبكرات على خصلة شعر صناعي أو حتى على شرائط قماش لتجربة أحجام مختلفة. صور النتيجة.',
              descriptionEN: 'Gather several pens and cylindrical containers of different diameters. Use them as rods on synthetic hair strands or even fabric strips to test different sizes. Take a picture of the result.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا أرادت الزبونة موجة ناعمة وحجماً أكبر بدلاً من تجعيد ضيق وكثيف، أي بكرات تختار؟',
                questionEN: 'If a client wants a soft wave and extra volume rather than a tight, dense curl, which rods do you choose?',
                options: [
                  { id: 'o1', text: 'بكرات صغيرة جداً', textEN: 'Very small rods', isCorrect: false },
                  { id: 'o2', text: 'بكرات حلزونية دقيقة', textEN: 'Fine spiral rods', isCorrect: false },
                  { id: 'o3', text: 'بكرات كبيرة', textEN: 'Large rods', isCorrect: true }
                ],
                explanation: 'قطر البكرة الكبير لا يلف الشعر لفات ضيقة، مما ينتج عنه تموج واسع يضيف حجماً فقط.',
                explanationEN: 'A large rod diameter doesn\'t curl the hair tightly, resulting in a wide wave that only adds volume.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_3_3',
            title: 'التجعيد لأنواع الشعر المختلفة (ناعم، مقاوم، مصبوغ)',
            titleEN: 'Perming Different Hair Types (Fine, Resistant, Dyed)',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ثلاثة رسوم: شعرة ناعمة جداً (سهلة التجعيد لكن قد تفقده سريعاً)، شعرة مقاومة (تحتاج لوشن أقوى)، شعرة مصبوغة (تحتاج لوشن لطيف). أيقونة ميزان يقيس قوة اللوشن.',
            visualDescriptionEN: 'Three illustrations: very fine hair (easy to perm but loses it fast), resistant hair (needs stronger lotion), dyed hair (needs gentle lotion). An icon of a scale measuring lotion strength.',
            duration: '08:00',
            summary: [
              'الشعر الناعم سهل التجعيد لكنه قد يرتخي بسرعة، استخدم لوشناً متوسطاً وبكرات أصغر.',
              'الشعر المقاوم (الآسيوي، السميك) يحتاج لوشناً أقوى ووقتاً أطول.',
              'الشعر المصبوغ أو المسحوب: استخدم لوشناً مخصصاً للشعر المعالج، وتجنب البكرات الصغيرة جداً.',
              'الشعر المجعد طبيعياً يمكن إعادة تجعيده لتصحيح النمط أو تكبيره.',
              'دائماً اختبر خصلة قبل العملية.'
            ],
            summaryEN: [
              'Fine hair perms easily but may drop quickly; use a medium lotion and smaller rods.',
              'Resistant hair (Asian, thick) requires a stronger lotion and longer time.',
              'Dyed or bleached hair: use a lotion specifically for treated hair, and avoid very small rods.',
              'Naturally curly hair can be re-permed to correct or enlarge the curl pattern.',
              'Always perform a strand test before the process.'
            ],
            task: {
              title: 'تصنيف الشعر',
              titleEN: 'Hair Categorization',
              description: 'صنف 3 أنواع شعر تعرفها (أفراد من عائلتك مثلاً). تخيل ما هو اللوشن والبكرة المناسبين لكل منهم. اكتب توصيتك.',
              descriptionEN: 'Categorize 3 hair types you know (e.g., family members). Imagine the suitable lotion and rod for each. Write your recommendation.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو النوع المناسب من سائل التجعيد (لوشن) للشعر المسحوب لونه مسبقاً؟',
                questionEN: 'What is the appropriate type of perm lotion for previously bleached hair?',
                options: [
                  { id: 'o1', text: 'لوشن قوي جداً', textEN: 'Very strong lotion', isCorrect: false },
                  { id: 'o2', text: 'لوشن خفيف لطيف مخصص للشعر المعالج', textEN: 'Gentle, mild lotion designed for treated hair', isCorrect: true },
                  { id: 'o3', text: 'لا يهم نوع اللوشن إذا زاد الوقت', textEN: 'Lotion type does not matter if time is increased', isCorrect: false }
                ],
                explanation: 'الشعر المعالج ضعيف مسامياً، لذا اللوشن القوي قد يدمر البنية تماماً.',
                explanationEN: 'Treated hair is structurally weak and highly porous; a strong lotion could completely destroy its structure.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_3_4',
            title: 'العناية بالشعر المجعد والمعالج كيميائياً',
            titleEN: 'Care for Curly and Chemically Treated Hair',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد هادئ لامرأة تغسل شعرها المجعد بشامبو خالٍ من السلفات، ثم تطبق قناعاً مرطباً. بجانبها منتجات: زيت أركان، كريم تحديد التجعيد، سيروم. مشط واسع الأسنان. شعرها في النهاية لامع وحيوي.',
            visualDescriptionEN: 'Calm scene of a woman washing her curly hair with sulfate-free shampoo, then applying a moisturizing mask. Next to her are products: argan oil, curl defining cream, serum. A wide-tooth comb. Her hair ends up shiny and lively.',
            duration: '06:00',
            summary: [
              'الشعر المعالج كيميائياً يفقد الرطوبة بسهولة.',
              'استخدم شامبو وبلسم خالياً من الكبريتات.',
              'الترطيب العميق (قناع) مرة أسبوعياً ضروري.',
              'لا تمشط الشعر الجاف المجعد، استخدم مشطاً واسع الأسنان وهو مبلل.',
              'زيوت طبيعية (أركان، جوجوبا) لتغذية الأطراف.',
              'تجنب الحرارة الزائدة (مجفف، مكواة).'
            ],
            summaryEN: [
              'Chemically treated hair loses moisture easily.',
              'Use sulfate-free shampoo and conditioner.',
              'Deep conditioning (mask) once a week is essential.',
              'Never comb dry curly hair; use a wide-tooth comb while wet.',
              'Natural oils (argan, jojoba) to nourish the ends.',
              'Avoid excessive heat (blow dryer, flat iron).'
            ],
            task: {
              title: 'منتجات العناية',
              titleEN: 'Care Products',
              description: 'ابحث عن 3 منتجات متوفرة في الجزائر للعناية بالشعر المجعد. اقرأ مكوناتها. قارن بينها واختر أفضلها من وجهة نظرك.',
              descriptionEN: 'Search for 3 curly hair care products available in Algeria. Read their ingredients. Compare them and choose the best one from your perspective.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'متى يفضل تمشيط الشعر المجعد لتجنب تلفه وهيجانه؟',
                questionEN: 'When is it best to comb curly hair to avoid damage and frizz?',
                options: [
                  { id: 'o1', text: 'عندما يكون جافاً تماماً', textEN: 'When it is completely dry', isCorrect: false },
                  { id: 'o2', text: 'باستخدام فرشاة قاسية بعد السشوار', textEN: 'Using a hard brush after blow-drying', isCorrect: false },
                  { id: 'o3', text: 'وهو مبلل باستخدام بلسم ومشط واسع الأسنان', textEN: 'While wet using conditioner and a wide-tooth comb', isCorrect: true }
                ],
                explanation: 'تمشيط التجعيد الجاف يفرق الخصلات ويسبب النفشة، بينما التمشيط المبلل يحافظ على شكل الموجة.',
                explanationEN: 'Dry combing separates the natural curl clumps and causes extreme frizz, whereas wet combing preserves the wave pattern.'
              }
            ],
            xpReward: 20
          }
        ]
      },
      {
        id: 'lvl_4',
        title: 'المرحلة 4: الاحتراف، التشخيص، ومشروع التخرج',
        titleEN: 'Stage 4: Professionalism, Diagnosis, and Final Project',
        description: 'الاستشارة المهنية، تحليل الحالات الصعبة، وتتويج مسارك بمشروع متكامل.',
        descriptionEN: 'Professional consultation, analyzing difficult cases, and crowning your journey with a complete project.',
        lessons: [
          {
            id: 'les_4_1',
            title: 'استشارة الزبون واختبار الحساسية',
            titleEN: 'Client Consultation and Allergy Test',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'صالون أنيق، مصفف يجلس مع زبونة، يستمع ويدون ملاحظات على ورقة استشارة. بجانبها كرسي تظهر عليه ورقة "اختبار الحساسية": نقطة صغيرة خلف الأذن. تقويم عليه علامة 48 ساعة.',
            visualDescriptionEN: 'Elegant salon, a stylist sits with a client, listening and taking notes on a consultation form. Next to her is a chair showing an "allergy test" paper: a small dot behind the ear. A calendar marked with 48 hours.',
            duration: '06:00',
            summary: [
              'اسأل الزبون عن تاريخ شعره: صبغات سابقة، حناء، تجعيد، أدوية.',
              'ناقش رغبته وأظهر له صوراً للنتائج المتوقعة.',
              'اختبار الحساسية إلزامي قبل أي صبغة كيميائية: ضع نقطة خلف الأذن قبل 48 ساعة.',
              'لا تطبق أي مادة إذا كان هناك احمرار أو حكة.',
              'وثق كل شيء في بطاقة الزبون.'
            ],
            summaryEN: [
              'Ask the client about their hair history: previous dyes, henna, perms, medications.',
              'Discuss their desires and show pictures of expected results.',
              'Allergy testing is mandatory before any chemical dye: place a drop behind the ear 48 hours prior.',
              'Never apply any product if there is redness or itching.',
              'Document everything in the client\'s file.'
            ],
            task: {
              title: 'تصميم الاستمارة',
              titleEN: 'Form Design',
              description: 'صمم استمارة استشارة للزبون تحتوي على: الاسم، التاريخ، التاريخ الصبغي، الحساسية، الأدوية، رغبة الزبون، وصورة ملهمة.',
              descriptionEN: 'Design a client consultation form containing: name, date, dye history, allergies, medications, client desire, and an inspiration picture.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'كم من الوقت يجب الانتظار لملاحظة نتيجة اختبار الحساسية قبل تطبيق الصبغة الكيميائية؟',
                questionEN: 'How long should you wait to observe the allergy test result before applying chemical dye?',
                options: [
                  { id: 'o1', text: '10 دقائق', textEN: '10 minutes', isCorrect: false },
                  { id: 'o2', text: 'ساعتان', textEN: '2 hours', isCorrect: false },
                  { id: 'o3', text: '48 ساعة', textEN: '48 hours', isCorrect: true }
                ],
                explanation: 'تفاعلات الحساسية الكيميائية قد تتأخر في الظهور، لذا يجب مراقبة المنطقة لمدة 48 ساعة.',
                explanationEN: 'Chemical allergic reactions may be delayed, so the area must be monitored for 48 hours.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_4_2',
            title: 'تسعير الخدمات وإدارة المواعيد',
            titleEN: 'Pricing Services and Appointment Management',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مكتب صغير بإدارة الصالون. شاشة حاسوب تظهر تطبيق حجوزات. آلة حاسبة، ورقة تسعير مكتوب فيها: "صبغة كاملة: 2000 دج، سحب لون: 2500 دج، تجعيد: 3000 دج..." يد تحسب هامش ربح وتكتب فاتورة.',
            visualDescriptionEN: 'A small salon management desk. A computer screen shows a booking app. A calculator, a pricing sheet reading: "Full dye: 2000 DZD, bleach: 2500 DZD, perm: 3000 DZD..." A hand calculates profit margin and writes an invoice.',
            duration: '07:00',
            summary: [
              'حدد أسعارك بناءً على تكلفة المواد + وقتك + إيجار الصالون.',
              'قارن أسعار الصالونات القريبة.',
              'استخدم تطبيقاً لإدارة المواعيد لتجنب التضارب.',
              'قدم عروضاً في المناسبات (أعراس، أعياد).',
              'عامل كل زبون كأفضل دعاية لصالتك.'
            ],
            summaryEN: [
              'Set prices based on material cost + your time + salon rent.',
              'Compare prices with nearby salons.',
              'Use an appointment management app to avoid overlaps.',
              'Offer promotions during occasions (weddings, holidays).',
              'Treat every client as the best advertisement for your salon.'
            ],
            task: {
              title: 'حساب التكلفة',
              titleEN: 'Cost Calculation',
              description: 'تخيل أنك افتتحت صالونك. احسب تكلفة صبغة كاملة (مادة + أكسجين + شامبو + وقتك). حدد سعراً مربحاً ومنافساً. اكتب فاتورة افتراضية لزبونة.',
              descriptionEN: 'Imagine you opened your salon. Calculate the cost of a full dye (product + developer + shampoo + your time). Determine a profitable and competitive price. Write a virtual invoice for a client.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو أهم عامل في تحديد سعر خدمة الصبغة أو التجعيد؟',
                questionEN: 'What is the most important factor in pricing a dye or perm service?',
                options: [
                  { id: 'o1', text: 'تكلفة المواد فقط', textEN: 'Cost of materials only', isCorrect: false },
                  { id: 'o2', text: 'تكلفة المواد والوقت المستغرق وخبرة المصفف والمصاريف الثابتة', textEN: 'Cost of materials, time spent, stylist experience, and fixed overheads', isCorrect: true },
                  { id: 'o3', text: 'أن يكون السعر دائماً أقل من كل المنافسين', textEN: 'Always having the lowest price among competitors', isCorrect: false }
                ],
                explanation: 'التسعير الصحيح يضمن استمرارية المشروع ولا يعتمد على كسر الأسعار فقط.',
                explanationEN: 'Proper pricing ensures business sustainability and isn\'t solely based on undercutting competitors.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_4_3',
            title: 'تصحيح الألوان الصعبة (Color Correction)',
            titleEN: 'Complex Color Correction',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'شعر زبونة يظهر بدرجات لونية غير متجانسة (جذور داكنة، أطوال برتقالية، أطراف فاتحة جداً). المصمم يدرس الشعر ويحدد مناطق مختلفة ويطبق مواد مختلفة في كل منطقة (صبغة تصحيحية على الأطوال، سحب لطيف على الجذور). النتيجة: لون موحد وجميل.',
            visualDescriptionEN: 'A client\'s hair showing uneven tones (dark roots, orange lengths, very light ends). The stylist studies the hair, identifies sections, and applies different products (corrective dye on lengths, gentle bleach on roots). Result: a beautiful, even color.',
            duration: '09:00',
            summary: [
              'تصحيح اللون يتطلب خبرة وصبراً.',
              'قسم الشعر إلى مناطق حسب المشكلة: جذور، أطوال، أطراف.',
              'استخدم دائرة الألوان لتحديد المصحح المناسب لكل منطقة.',
              'في الحالات المعقدة، قد تحتاج إلى عدة جلسات.',
              'لا تعد بنتيجة مثالية من الجلسة الأولى، كن واقعياً مع الزبون.'
            ],
            summaryEN: [
              'Color correction requires experience and patience.',
              'Divide hair into zones based on the problem: roots, mid-lengths, ends.',
              'Use the color wheel to determine the correct neutralizer for each zone.',
              'In complex cases, multiple sessions may be needed.',
              'Do not promise a perfect result in the first session; be realistic with the client.'
            ],
            task: {
              title: 'لغز التصحيح',
              titleEN: 'Correction Puzzle',
              description: 'ارسم رأساً ولونياً: جذور سوداء، أطوال برتقالية، أطراف صفراء. اكتب خطة تصحيح لكل منطقة: ماذا ستستخدم؟ كم مدة؟',
              descriptionEN: 'Draw a head with colors: black roots, orange mid-lengths, yellow ends. Write a correction plan for each zone: What will you use? For how long?'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا استقبلت زبونة بشعر يتكون من ثلاث درجات لونية مختلفة (جذور، وسط، أطراف)، ما هو التصرف الصحيح؟',
                questionEN: 'If you receive a client with three different color bands (roots, mid, ends), what is the correct action?',
                options: [
                  { id: 'o1', text: 'تطبيق الصبغة على كامل الشعر دفعة واحدة كالمعتاد', textEN: 'Apply the dye all over the hair at once as usual', isCorrect: false },
                  { id: 'o2', text: 'التعامل مع كل منطقة على حدة باستخدام معادلات ومواد مختلفة حسب حاجتها', textEN: 'Treat each zone individually using different formulas and products depending on its need', isCorrect: true },
                  { id: 'o3', text: 'قص الأطراف وصبغ الجذور فقط', textEN: 'Cut the ends and dye only the roots', isCorrect: false }
                ],
                explanation: 'التصحيح يتطلب معادلات منفصلة لكل لون، لأن تطبيق لون واحد سيعطي نتيجة غير متجانسة مجدداً.',
                explanationEN: 'Correction requires separate formulas for each color band, as applying one color over all will result in an uneven fade again.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_4_4',
            title: 'تجهيز العرائس والمناسبات – تسريحات وصبغ',
            titleEN: 'Bridal and Event Prep – Styling and Coloring',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'عروس ترتدي فستاناً، مصفف يعمل على شعرها: صبغة ناعمة مع هايلايتس، ثم تسريحة مرفوعة مع تجعيد ناعم. بجانبها علب صبغ وأدوات تجعيد. تقويم يُظهر مواعيد: "قبل شهر: اختبار اللون، قبل أسبوع: الصبغة، قبل يوم: اللمسات".',
            visualDescriptionEN: 'A bride in a dress, a stylist working on her hair: soft coloring with highlights, then an updo with soft curls. Next to her are dye boxes and perming tools. A calendar shows dates: "1 month prior: color test, 1 week: coloring, 1 day: touches".',
            duration: '08:00',
            summary: [
              'جهاز العروس يتطلب تخطيطاً مسبقاً بشهر على الأقل.',
              'اختر ألواناً تدوم وتظهر جميلة في الصور.',
              'التجعيد الناعم يعطي كثافة للتسريحة.',
              'تعاون مع الماكياج واللباس لتنسيق الإطلالة.',
              'استخدم منتجات تثبيت عالية الجودة ليوم كامل.'
            ],
            summaryEN: [
              'Bridal prep requires planning at least a month in advance.',
              'Choose colors that last and photograph beautifully.',
              'Soft perms/curls add volume and structure to the updo.',
              'Coordinate with makeup and dress styling for a unified look.',
              'Use high-quality holding products for an all-day event.'
            ],
            task: {
              title: 'جدول العروس',
              titleEN: 'Bridal Timeline',
              description: 'تخيل أنك مسؤول عن شعر عروس. صمم جدولاً زمنياً من شهر قبل الزفاف إلى يوم العرس، مع تفصيل كل جلسة.',
              descriptionEN: 'Imagine you are responsible for a bride\'s hair. Design a timeline from one month prior to the wedding day, detailing each session.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'متى يعتبر الوقت المثالي لإجراء صبغة كيميائية كاملة للعروس قبل يوم الزفاف؟',
                questionEN: 'When is the ideal time to perform a full chemical dye for a bride prior to her wedding day?',
                options: [
                  { id: 'o1', text: 'صباح يوم الزفاف', textEN: 'The morning of the wedding', isCorrect: false },
                  { id: 'o2', text: 'قبل أسبوع إلى 10 أيام من الزفاف', textEN: 'A week to 10 days before the wedding', isCorrect: true },
                  { id: 'o3', text: 'قبل سنة من الزفاف', textEN: 'A year before the wedding', isCorrect: false }
                ],
                explanation: 'القيام بها قبل أسبوع يسمح للون بالاستقرار، ويعطي وقتاً للتصحيح إن حدث خطأ.',
                explanationEN: 'Doing it a week in advance allows the color to settle and gives time for correction if an error occurs.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_4_5',
            title: 'مشروع التخرج – تحويل كامل لشعر زبونة',
            titleEN: 'Final Project – Complete Hair Transformation',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي شامل: صورة "قبل" لشعر طويل داكن، وصورة "بعد" لشعر أشقر عسلي بأطراف أومبري وتموجات ناعمة. بجانبه جميع الخطوات بالترتيب مع أيقونات الأدوات والمواد. شهادة تخرج في الأسفل.',
            visualDescriptionEN: 'Comprehensive illustration: "Before" picture of long dark hair, "After" of honey blonde with ombré ends and soft waves. Next to it are all the steps in sequence with tool and material icons. A graduation certificate at the bottom.',
            duration: '15:00',
            summary: [
              'هذا هو تتويج لكل المهارات التي تعلمتها.',
              'تحليل دقيق وتخطيط محكم هما مفتاح النجاح.',
              'تطبيق تقنيات التفتيح المتقدمة.',
              'معالجة الروابط لضمان عدم تلف الشعر.',
              'تقديم خطة عناية منزلية للزبون.'
            ],
            summaryEN: [
              'This is the culmination of all the skills you have learned.',
              'Accurate analysis and careful planning are the keys to success.',
              'Applying advanced lightening techniques.',
              'Bond building to ensure hair doesn\'t get damaged.',
              'Providing a home care plan for the client.'
            ],
            task: {
              title: 'مشروع التخرج: التحويل الكامل',
              titleEN: 'Final Project: Full Transformation',
              description: 'تخيل أنك في صالونك، تقدمت لك زبونة بشعر طويل داكن (مستوى 3)، وتريد تحويلاً كاملاً: لون أشقر عسلي بأومبري ناعم، مع تموجات دائمة يبدو معها كثيفاً. المطلوب: 1- استشارة، 2- خطة تشخيص، 3- مراحل السحب، 4- الصبغ، 5- التجعيد. اكتب الخطة كاملة كأنك تشرح لمساعدك.',
              descriptionEN: 'Imagine a client with long dark hair (level 3) wants a full transformation to honey blonde ombré with soft permanent waves. Required: 1- Consultation, 2- Diagnosis plan, 3- Bleaching phases, 4- Tinting, 5- Perming. Write the complete plan as if explaining to your assistant.'
            },
            quiz: [
              {
                id: 'q_final_hair',
                question: 'لقد أكملت الدورة! اضغط على "صحيح" لاستلام شهادتك وإتمام المسار.',
                questionEN: 'You have completed the course! Click "True" to receive your certificate and finish the track.',
                options: [
                  { id: 'o1', text: 'صحيح', textEN: 'True', isCorrect: true },
                  { id: 'o2', text: 'خاطئ', textEN: 'False', isCorrect: false }
                ],
                explanation: 'مبارك يا بطل! أنت الآن خبير صبغ وتجعيد.',
                explanationEN: 'Congratulations! You are now a Master Colorist and Perm Specialist.'
              }
            ],
            xpReward: 100
          }
        ]
      }
    ],
    badges: {
      started: {
        id: 'hair_starter',
        title: 'أساس متين',
        titleEN: 'Solid Foundation',
        description: 'بدأت رحلتك في عالم التجميل والصبغ.',
        descriptionEN: 'Started your journey in the beauty and coloring world.',
        icon: 'stars'
      },
      completed: {
        id: 'hair_master',
        title: 'خبير الصبغ والتجعيد',
        titleEN: 'Master Colorist & Perm Specialist',
        description: 'أتممت الجانب الكيميائي والفني لتصفيف الشعر بالكامل.',
        descriptionEN: 'Mastered the chemical and artistic side of hair styling.',
        icon: 'award'
      }
    }
  },
  alu_pvc_joinery: {
    craftId: 'alu_pvc_joinery',
    title: 'نجارة الألومنيوم والمواد البلاستيكية',
    titleEN: 'Aluminum and PVC Carpentry',
    description: 'تعلم فن تشكيل المقاطع وتركيب النوافذ والأبواب بعزل تام ودقة هندسية.',
    descriptionEN: 'Learn the art of profiling, assembling, and installing fully insulated doors and windows with engineering precision.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: السلامة والأدوات والتعرف على المواد',
        titleEN: 'Stage 1: Safety, Tools, and Materials',
        description: 'اكتشف ورشتك، تعلم قواعد السلامة، وتعرف على الألمنيوم والـ PVC والمعدات الأساسية.',
        descriptionEN: 'Discover your workshop, learn safety rules, and get introduced to Aluminum, PVC, and basic equipment.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'السلامة في ورشة الألمنيوم والـ PVC',
            titleEN: 'Safety in the Aluminum and PVC Workshop',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك لورشة مرتبة. نجار يرتدي نظارات واقية وقفازات. يظهر منشار قرصي، وفوقه خط أحمر متقطع يُظهر منطقة الخطر. طفاية حريق معلقة على الجدار بجانبها أيقونة. ملصق على الجدار: "السلامة أولاً". أرضية الورشة نظيفة.',
            visualDescriptionEN: 'Animated scene of an organized workshop. A joiner wearing safety goggles and gloves. A chop saw is shown with a dotted red line indicating the danger zone. A fire extinguisher hangs on the wall next to an icon. A poster reads: "Safety First". The floor is clean.',
            duration: '05:00',
            summary: [
              'ارتدِ النظارات الواقية دائماً عند القطع.',
              'القفازات تحمي يديك من الحواف الحادة للألمنيوم.',
              'حافظ على الورشة نظيفة ومنظمة لتجنب التعثر.',
              'لا تستخدم أداة كهربائية قبل التأكد من سلامة كابلها.',
              'اعرف مكان طفاية الحريق وصندوق الإسعافات.',
              'لا ترفع ألواحاً ثقيلة بمفردك.'
            ],
            summaryEN: [
              'Always wear safety goggles when cutting.',
              'Gloves protect your hands from sharp aluminum edges.',
              'Keep the workshop clean and organized to avoid tripping.',
              'Do not use an electric tool before confirming its cable is safe.',
              'Know the location of the fire extinguisher and first aid kit.',
              'Never lift heavy panels on your own.'
            ],
            task: {
              title: 'خطة السلامة الشخصية',
              titleEN: 'Personal Safety Plan',
              description: 'تفقد مكان عملك (أو غرفتك). حدد 3 مخاطر محتملة (أسلاك، حواف حادة، فوضى). كيف يمكنك معالجتها؟ اكتب خطة سلامة بسيطة من 5 نقاط.',
              descriptionEN: 'Inspect your workspace (or room). Identify 3 potential hazards (wires, sharp edges, clutter). How can you address them? Write a simple 5-point safety plan.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الأداة الأهم لحمايتك أثناء استخدام المنشار القرصي؟',
                questionEN: 'What is the most important tool to protect yourself while using a chop saw?',
                options: [
                  { id: 'o1', text: 'سماعات الأذن', textEN: 'Earplugs', isCorrect: false },
                  { id: 'o2', text: 'النظارات الواقية', textEN: 'Safety goggles', isCorrect: true },
                  { id: 'o3', text: 'شريط القياس', textEN: 'Measuring tape', isCorrect: false }
                ],
                explanation: 'النظارات الواقية تحمي عينيك من الشظايا المعدنية المتطايرة السريعة أثناء القطع.',
                explanationEN: 'Safety goggles protect your eyes from fast-flying metal shards during cutting.'
              }
            ],
            xpReward: 15
          },
          {
            id: 'les_1_2',
            title: 'التعرف على الأدوات الأساسية واستخداماتها',
            titleEN: 'Introduction to Basic Tools and Uses',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'طاولة ورشة تُعرض عليها الأدوات بشكل منظم: منشار قرصي، مثقاب، مطرقة مطاطية، متر قياس، ميزان ماء، مسدس سيليكون. كل أداة تظهر بجانبها تسميتها بخط رفيع. يد تلتقط كل أداة على حدة وتظهرها وهي تستخدم في مشهد صغير منفصل (المتر يقيس قطعة ألمنيوم، المثقاب يحدث ثقباً).',
            visualDescriptionEN: 'Workshop table displaying organized tools: chop saw, drill, rubber mallet, measuring tape, spirit level, silicone gun. Each tool is labeled with a thin font. A hand picks up each tool separately demonstrating its use in a mini-scene (tape measuring aluminum, drill making a hole).',
            duration: '06:00',
            summary: [
              'المنشار القرصي: لقطع مقاطع الألمنيوم بزوايا دقيقة.',
              'المثقاب: لعمل ثقوب البراغي في المقاطع.',
              'المطرقة المطاطية: لضبط القطع دون خدشها.',
              'متر القياس: أداة النجار الأولى، استخدمه بدقة الميليمتر.',
              'ميزان الماء: يضمن أن الشباك أو الباب ليس مائلاً.',
              'مسدس السيليكون: لعزل الماء والهواء بعد التركيب.'
            ],
            summaryEN: [
              'Chop saw: To cut aluminum profiles at precise angles.',
              'Drill: To make screw holes in profiles.',
              'Rubber mallet: To adjust pieces without scratching them.',
              'Measuring tape: The joiner\'s primary tool, use it with millimeter precision.',
              'Spirit level: Ensures the window or door isn\'t tilted.',
              'Silicone gun: For water and air sealing after installation.'
            ],
            task: {
              title: 'رسم وتحديد الأدوات',
              titleEN: 'Drawing and Identifying Tools',
              description: 'إذا لم تتوفر الأدوات الحقيقية، ارسم كل أداة في كراسك واكتب وظيفتها. إذا وجدت أدوات مشابهة في منزلك، افتحها وتعرف على أجزائها مع مراعاة السلامة.',
              descriptionEN: 'If real tools are unavailable, draw each tool in your notebook and write its function. If you find similar tools at home, inspect them safely to understand their parts.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا نستخدم مطرقة مطاطية بدلاً من المطرقة الحديدية العادية لتجميع النوافذ؟',
                questionEN: 'Why do we use a rubber mallet instead of a regular iron hammer to assemble windows?',
                options: [
                  { id: 'o1', text: 'لأن المطرقة المطاطية أخف وزناً وسهلة الحمل', textEN: 'Because a rubber mallet is lighter and easier to carry', isCorrect: false },
                  { id: 'o2', text: 'لأن المطرقة المطاطية تمنع خدش أو إتلاف مقاطع الألمنيوم وتعدل القطع بنعومة', textEN: 'Because a rubber mallet prevents scratching or damaging aluminum profiles and adjusts pieces smoothly', isCorrect: true },
                  { id: 'o3', text: 'لأنها أكثر أماناً إذا سقطت على الأرض', textEN: 'Because it is safer if dropped on the floor', isCorrect: false }
                ],
                explanation: 'المطرقة المطاطية تمتص الصدمة ولا تترك أثراً على الطلاء ولا تكسر المعدن الهش.',
                explanationEN: 'A rubber mallet absorbs the impact and leaves no mark on the paint nor breaks the brittle metal.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_3',
            title: 'التعرف على مقاطع الألمنيوم وأنواعها',
            titleEN: 'Identifying Aluminum Profiles and Types',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي أنيق لعدة مقاطع ألمنيوم (بروفيلات) بمقاطع عرضية مختلفة: مقطع لإطار النافذة، مقطع للباب المنزلق، مقطع للقاطع المكتبي. أسهم تشير إلى أجزاء المقطع: "مسار العجلة"، "مكان الزجاج"، "مكان الختم المطاطي". الألوان: فضي الألمنيوم مع تظليل خفيف.',
            visualDescriptionEN: 'Elegant illustration of various aluminum cross-section profiles: a window frame profile, a sliding door profile, an office partition profile. Arrows point to profile parts: "wheel track", "glass space", "rubber seal groove". Colors: aluminum silver with light shading.',
            duration: '07:00',
            summary: [
              'مقاطع الألمنيوم هي "عظام" النافذة أو الباب.',
              'تأتي بأشكال مختلفة حسب الوظيفة: إطار ثابت، مصراع متحرك، سكة.',
              'هناك مقاطع خاصة للنوافذ المنزلقة، وأخرى للمفصلية (بفتحة جانبية).',
              'البروفيلات تكون مجوفة أحياناً لتخفيف الوزن، وأحياناً مدعمة.',
              'الألمنيوم مادة خفيفة، لا تصدأ، وسهلة التشكيل.',
              'يُباع المقطع بالمتر الطولي في أسواق مواد البناء الجزائرية.'
            ],
            summaryEN: [
              'Aluminum profiles are the "bones" of a window or door.',
              'They come in different shapes based on function: fixed frame, moving sash, track.',
              'There are specific profiles for sliding windows, and others for casement (side-hinged) ones.',
              'Profiles are usually hollow to reduce weight, and sometimes reinforced.',
              'Aluminum is lightweight, rust-proof, and easy to shape.',
              'Profiles are sold by linear meters in Algerian building materials markets.'
            ],
            task: {
              title: 'مراقبة المقاطع في الواقع',
              titleEN: 'Observing Profiles in Reality',
              description: 'عند زيارتك لحي تجاري أو سوق، تأمل واجهات المحلات. حاول تمييز 3 أنواع مختلفة من مقاطع الألمنيوم المستعملة. التقط صورة (إن أمكن) وارسم شكلاً تقريبياً للمقطع العرضي.',
              descriptionEN: 'When visiting a commercial district or market, observe shopfronts. Try to distinguish 3 different types of used aluminum profiles. Take a picture (if possible) and draw a rough sketch of the cross-section.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الشكل الشائع لبيع مقاطع الألمنيوم في أسواق مواد البناء؟',
                questionEN: 'What is the common way aluminum profiles are sold in building material markets?',
                options: [
                  { id: 'o1', text: 'بالمتر المربع كألواح جاهزة', textEN: 'By square meter as finished panels', isCorrect: false },
                  { id: 'o2', text: 'بالمتر الطولي كعصي طويلة قابلة للقص', textEN: 'By linear meter as long sticks ready to be cut', isCorrect: true },
                  { id: 'o3', text: 'بالوزن بصرف النظر عن الشكل', textEN: 'By weight regardless of the shape', isCorrect: false }
                ],
                explanation: 'الألمنيوم يصنع على شكل أعواد طويلة تباع بالمتر الطولي، ليقوم النجار بتفصيلها.',
                explanationEN: 'Aluminum is extruded into long sticks sold by the linear meter, which the joiner then custom cuts.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_4',
            title: 'التعرف على ألواح PVC واستخداماتها',
            titleEN: 'Introduction to PVC Panels and Uses',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لمستودع صغير به ألواح PVC ملونة (أبيض، ذهبي بلوطي، رمادي). صفيحة مقربة تظهر سطحها الأملس وهيكلها الداخلي المجوف (خلايا). أيقونة باب حمام وأخرى لنافذة مطبخ ترمزان لاستخدامات الـ PVC.',
            visualDescriptionEN: 'Illustration of a small warehouse with colored PVC panels (white, golden oak, gray). A zoomed-in panel shows its smooth surface and hollow cellular internal structure. A bathroom door icon and a kitchen window icon symbolize PVC usages.',
            duration: '06:00',
            summary: [
              'PVC اختصار لـ "بولي فينيل كلورايد"، بلاستيك صلب ومتين.',
              'يستخدم بكثرة في أبواب ونوافذ الحمامات والمطابخ لأنه مقاوم للماء.',
              'لا يحتاج إلى دهن، وسهل التنظيف.',
              'ألوانه الشائعة في الجزائر: الأبيض، الذهبي، الرمادي، والخشبي.',
              'يُقطع وينجر مثل الخشب، لكن بريش خاصة.',
              'أقل تكلفة من الألمنيوم في بعض التطبيقات.'
            ],
            summaryEN: [
              'PVC stands for "Polyvinyl Chloride", a tough and durable plastic.',
              'Widely used in bathroom and kitchen doors and windows because it is waterproof.',
              'Does not need painting, and is easy to clean.',
              'Common colors in Algeria: white, golden, gray, and wood-grain.',
              'It is cut and routed like wood, but with specialized bits.',
              'Often more cost-effective than aluminum in certain applications.'
            ],
            task: {
              title: 'تحديد نوعية الأبواب المنزلية',
              titleEN: 'Identifying Home Doors Material',
              description: 'في منزلك، تفقد أبواب ونوافذ المطبخ والحمام. هل هي PVC أم ألمنيوم أم خشب؟ سجل نوعها ولونها وحالتها. لماذا برأيك اختيرت هذه المادة؟',
              descriptionEN: 'In your home, check the bathroom and kitchen doors and windows. Are they PVC, aluminum, or wood? Record their type, color, and condition. Why do you think this material was chosen?'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا يفضل الكثيرون استخدام مادة PVC في أبواب الحمامات؟',
                questionEN: 'Why do many prefer using PVC material for bathroom doors?',
                options: [
                  { id: 'o1', text: 'لأنها تمنع دخول الضوء تماماً', textEN: 'Because it blocks out light completely', isCorrect: false },
                  { id: 'o2', text: 'لأنها مقاومة للماء والرطوبة العالية ولا تتأثر بالصدأ', textEN: 'Because it is waterproof, highly moisture-resistant, and unaffected by rust', isCorrect: true },
                  { id: 'o3', text: 'لأنها أثقل وزناً وأقوى من الخشب الصلب', textEN: 'Because it is heavier and stronger than solid wood', isCorrect: false }
                ],
                explanation: 'الحمام بيئة شديدة الرطوبة، والـ PVC لا يتأثر بالماء مثل الخشب ولا يصدأ كالحديد.',
                explanationEN: 'Bathrooms are highly humid environments; PVC doesn\'t absorb water like wood nor rusts like iron.'
              }
            ],
            xpReward: 20
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: القياس والتقطيع والتجميع الأساسي',
        titleEN: 'Stage 2: Measurement, Cutting, and Basic Assembly',
        description: 'من المخطط إلى الإطار الأول. تعلم قص الزوايا، التجميع الجاف، وتركيب الزجاج والملحقات.',
        descriptionEN: 'From blueprint to the first frame. Learn angle cutting, dry assembly, and installing glass and accessories.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'قراءة مخططات النوافذ والأبواب',
            titleEN: 'Reading Window and Door Blueprints',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: يظهر مخطط بسيط لنافذة بمقاسات محددة (عرض 1200 مم × ارتفاع 1500 مم). أسهم تشير إلى العرض والارتفاع، وقياسات جانبية للإطار والضلفة. يد تتنقل على المخطط وتشير إلى كل جزء: "إطار"، "مصراع"، "سكة"، "زجاج".',
            visualDescriptionEN: 'Animated scene: a simple blueprint for a window with specific measurements (width 1200 mm x height 1500 mm). Arrows point to width and height, and side measurements for the frame and sash. A hand points to each part: "frame", "sash", "track", "glass".',
            duration: '07:00',
            summary: [
              'المخطط هو لغة التواصل بين المهندس والنجار.',
              'المقاسات تكتب بالميليمتر (مم) وليس بالسنتيمتر.',
              'العرض × الارتفاع: مثلاً 1200×1500 مم.',
              'تعلم الرموز: خط متصل = قطع، خط منقط = مخفي.',
              'تأكد من مقاس الفتحة الفعلي في المبنى قبل التصنيع.'
            ],
            summaryEN: [
              'The blueprint is the communication language between the engineer and joiner.',
              'Measurements are written in millimeters (mm), not centimeters.',
              'Width x Height: e.g., 1200x1500 mm.',
              'Learn the symbols: solid line = cut, dotted line = hidden.',
              'Verify the actual opening size in the building before manufacturing.'
            ],
            task: {
              title: 'رسم مخطط النافذة',
              titleEN: 'Drawing a Window Blueprint',
              description: 'ارسم مخططاً بسيطاً لنافذة غرفتك. خذ مقاسات الطول والعرض الفعلية. اكتب الأبعاد على الرسم بالميليمتر.',
              descriptionEN: 'Draw a simple blueprint of your room\'s window. Take the actual length and width measurements. Write the dimensions on the drawing in millimeters.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي وحدة القياس المعتمدة دائماً في مخططات نجارة الألمنيوم لضمان الدقة؟',
                questionEN: 'What is the standard unit of measurement always used in aluminum joinery blueprints to ensure precision?',
                options: [
                  { id: 'o1', text: 'المتر', textEN: 'Meter', isCorrect: false },
                  { id: 'o2', text: 'السنتيمتر', textEN: 'Centimeter', isCorrect: false },
                  { id: 'o3', text: 'الميليمتر (مم)', textEN: 'Millimeter (mm)', isCorrect: true }
                ],
                explanation: 'الألمنيوم يتطلب دقة عالية جداً، وأي خطأ بمليمترات قد يجعل النافذة لا تغلق أو تُسرب الهواء.',
                explanationEN: 'Aluminum requires extremely high precision; an error of a few millimeters can cause the window not to close or to leak air.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_2',
            title: 'تقطيع مقاطع الألمنيوم بزوايا دقيقة',
            titleEN: 'Cutting Aluminum Profiles at Precise Angles',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: نجار يضع مقطع ألمنيوم على منشار قرصي. يضبط الزاوية على 45° لقطع إطار زاوية. يُنزل شفرة المنشار ببطء وتُقطع القطعة. يظهر بعدها القطعتان متطابقتين عند الزاوية 45°، تشكلان زاوية قائمة 90° عند التجميع.',
            visualDescriptionEN: 'Animated scene: A joiner places an aluminum profile on a chop saw. Adjusts the angle to 45° to cut a corner frame. Slowly lowers the saw blade and cuts the piece. Then the two pieces are shown matching at a 45° angle, forming a 90° right angle when assembled.',
            duration: '08:00',
            summary: [
              'لصنع زاوية إطار قائمة (90°)، اقطع القطعتين بزاوية 45° لكل منهما.',
              'استخدم "كوس" (زاوية قائمة) للتأكد من دقة الزاوية.',
              'ثبت المقطع بإحكام قبل القطع، ولا تتعجل.',
              'تأكد من أن الشفرة مناسبة للمعادن غير الحديدية (ألمنيوم).',
              'قس مرتين، اقطع مرة واحدة.'
            ],
            summaryEN: [
              'To make a 90° right-angle frame, cut the two pieces at a 45° angle each.',
              'Use a "set square" to ensure angle precision.',
              'Secure the profile tightly before cutting, and do not rush.',
              'Make sure the blade is appropriate for non-ferrous metals (aluminum).',
              'Measure twice, cut once.'
            ],
            task: {
              title: 'تمرين الزوايا الورقية',
              titleEN: 'Paper Angle Exercise',
              description: 'إذا توفر لديك ورق مقوى، ارسم مستطيلاً 20×15 سم. قص زواياه بزاوية 45° كما لو كنت تقطع إطار ألمنيوم. الصق القطع لتشكيل إطار كامل.',
              descriptionEN: 'If you have cardboard, draw a 20x15 cm rectangle. Cut its corners at a 45° angle as if you were cutting an aluminum frame. Tape the pieces together to form a full frame.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لتشكيل زاوية قائمة (90 درجة) مثالية لإطار النافذة، بأي زاوية يجب قص كل مقطع للالتقاء؟',
                questionEN: 'To form a perfect right angle (90 degrees) for a window frame, at what angle should each meeting profile be cut?',
                options: [
                  { id: 'o1', text: '90 درجة للأول و 0 درجة للثاني', textEN: '90 degrees for the first and 0 for the second', isCorrect: false },
                  { id: 'o2', text: '45 درجة لكلتا القطعتين', textEN: '45 degrees for both pieces', isCorrect: true },
                  { id: 'o3', text: '60 درجة و 30 درجة', textEN: '60 degrees and 30 degrees', isCorrect: false }
                ],
                explanation: 'قطع كلا الجانبين بزاوية 45 درجة وجمعهما يعطي زاوية قائمة مثالية 90 درجة.',
                explanationEN: 'Cutting both sides at 45 degrees and assembling them produces a perfect 90-degree right angle.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_3',
            title: 'التجميع الجاف وفحص الزوايا والاستواء',
            titleEN: 'Dry Assembly, Angle & Level Checking',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد: أربع قطع ألمنيوم مشكلة إطاراً مستطيلاً موضوعاً على طاولة مستوية. يد تدخل زاوية بلاستيكية (équerre) داخل المقطع لتجميع الزوايا. ميزان ماء يوضع على الإطار، الفقاعة في المنتصف تماماً. قطرا المستطيل يُقاسان بالمتر، والقياسان متساويان.',
            visualDescriptionEN: 'Scene: Four aluminum pieces forming a rectangular frame placed on a flat table. A hand inserts a plastic corner bracket (équerre) inside the profile to assemble the corners. A spirit level is placed on the frame, the bubble is perfectly centered. The rectangle\'s diagonals are measured with a tape, and both measurements are equal.',
            duration: '06:00',
            summary: [
              'قبل التثبيت النهائي، جرب تجميع القطع جافة (بدون براغي).',
              'استخدم زوايا التجميع البلاستيكية لتثبيت القطع مؤقتاً.',
              'تأكد من أن القطرين متساويان: إذا كانا مختلفين، فالإطار منحرف.',
              'ضع ميزان الماء على الجهات الأربع.',
              'أي خطأ في هذه المرحلة سيتضاعف لاحقاً.'
            ],
            summaryEN: [
              'Before final fixing, try dry assembling the pieces (without screws).',
              'Use plastic corner brackets to temp hold the pieces together.',
              'Check that both diagonals are equal; if different, the frame is skewed.',
              'Place a spirit level on all four sides.',
              'Any error at this stage will multiply later on.'
            ],
            task: {
              title: 'قياس الأقطار للتأكد من الاستقامة',
              titleEN: 'Measuring Diagonals for Squareness',
              description: 'باستخدام الإطار الورقي الذي صنعته في الدرس السابق، قس قطريه (من الزاوية للزاوية المقابلة). هل هما متساويان؟ إن لم يكونا كذلك، حاول تعديل الزوايا.',
              descriptionEN: 'Using the cardboard frame you made in the previous lesson, measure its diagonals (from corner to opposite corner). Are they equal? If not, try adjusting the corners.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الاختبار الأسرع والأدق للتأكد من أن الإطار مستطيل غير منحرف بعد تجميعه؟',
                questionEN: 'What is the fastest and most accurate test to ensure an assembled frame is perfectly rectangular and not skewed?',
                options: [
                  { id: 'o1', text: 'النظر إليه من مسافة بعيدة', textEN: 'Looking at it from a distance', isCorrect: false },
                  { id: 'o2', text: 'قياس القطرين ومقارنتهما المعاكسين (يجب أن يكونا متطابقين)', textEN: 'Measuring the two opposing diagonals and comparing them (they must be identical)', isCorrect: true },
                  { id: 'o3', text: 'وزنه باستخدام ميزان الكتروني', textEN: 'Weighing it using an electronic scale', isCorrect: false }
                ],
                explanation: 'إذا تساوى القطريان في أي شكل متوازي أضلاع، فهذا يعني أن زواياه قوائم (مستطيل).',
                explanationEN: 'If the diagonals are equal in any parallelogram, it means its angles are perfect right angles (a rectangle).'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_2_4',
            title: 'تركيب الزجاج والعوازل المطاطية',
            titleEN: 'Installing Glass and Rubber Seals',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي مقطعي (coupe) لنافذة ألمنيوم. يُرى المقطع المعدني وبه مكان مخصص للزجاج. سهم يوضح كيف يوضع الزجاج داخل الإطار، ثم سهم آخر لكيفية إدخال ختم مطاطي أسود بين الزجاج والمعدن باستخدام أداة بلاستيكية مسطحة.',
            visualDescriptionEN: 'Cross-sectional illustration (coupe) of an aluminum window. The metal profile is seen with a dedicated space for glass. An arrow shows how the glass is placed inside the frame, then another arrow showing how a black rubber seal is inserted between the glass and metal using a flat plastic tool.',
            duration: '08:00',
            summary: [
              'الزجاج المستعمل غالباً مزدوج (Double vitrage) للعزل الحراري والصوتي.',
              'يُوضع الزجاج في المسار المخصص له في المقطع المعدني.',
              'تُركب حشوات مطاطية (Joint) بين الزجاج والمعدن لمنع تسرب الماء والهواء.',
              'استخدم أداة بلاستيكية لدفع الحشوة دون خدش.',
              'تأكد من نظافة الزجاج قبل تثبيته النهائي.'
            ],
            summaryEN: [
              'The glass used is mostly double glazing (Double vitrage) for thermal and acoustic insulation.',
              'The glass is placed in its dedicated groove in the metal profile.',
              'Rubber seals (Joints) are installed between the glass and metal to prevent water and air leaks.',
              'Use a plastic tool to push the seal in without scratching.',
              'Make sure the glass is clean before final installation.'
            ],
            task: {
              title: 'مراقبة العزل المطاطي',
              titleEN: 'Observing Rubber Seals',
              description: 'ابحث في منزلك عن نافذة ألمنيوم. تأمل مكان التقاء الزجاج بالإطار. هل ترى الختم المطاطي الأسود؟ صف شكله. حاول رسم مقطع عرضي للنافذة يوضح مكان الزجاج والمطاط.',
              descriptionEN: 'Look for an aluminum window in your house. Observe where the glass meets the frame. Can you see the black rubber seal? Describe its shape. Try to draw a cross-section of the window showing the glass and rubber placement.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الدور الأساسي للحشوات المطاطية (Joints) بين مقطع الألمنيوم والزجاج؟',
                questionEN: 'What is the primary role of the rubber seals (Joints) between the aluminum profile and the glass?',
                options: [
                  { id: 'o1', text: 'إعطاء لون جميل للنافذة', textEN: 'Giving the window a beautiful color', isCorrect: false },
                  { id: 'o2', text: 'تثبيت الزجاج بإحكام ومنع تسرب الماء والهواء والاهتزاز', textEN: 'Securing the glass tightly and preventing water, air leaks, and vibration', isCorrect: true },
                  { id: 'o3', text: 'تسهيل انزلاق الزجاج لفتحه', textEN: 'Making it easier for the glass to slide open', isCorrect: false }
                ],
                explanation: 'الزجاج بمفرده داخل المعدن سيحدث صوتاً مزعجاً ويسرب الرياح، المطاط يعمل كعازل وممتص للصدمات.',
                explanationEN: 'Glass alone inside metal rattles and leaks wind; the rubber acts as an insulator and shock absorber.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_5',
            title: 'تركيب الملحقات: العجلات، المفصلات، والمقابض',
            titleEN: 'Installing Accessories: Wheels, Hinges, and Handles',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك: مصراع نافذة منزلق يُرفع قليلاً، وتُدخل عجلتان في مساره السفلي. ثم مصراع آخر بمفصلات، يد تُثبت المفصلات بالبراغي. أخيراً، مقبض يُركب على الإطار وتظهر حركة دوران المقبض وفتح النافذة.',
            visualDescriptionEN: 'Animated scene: A sliding window sash is slightly lifted, and two wheels are inserted into its bottom track. Then another sash with hinges, a hand securing the hinges with screws. Finally, a handle is installed on the frame showing a twisting motion to open the window.',
            duration: '07:00',
            summary: [
              'النوافذ المنزلقة تحتاج عجلات في الأسفل والأعلى.',
              'النوافذ المفصلية تحتاج مفصلات قوية تتحمل وزن المصراع.',
              'المقابض تختلف حسب النوع: مقبض رفع، مقبض دوران، مقبض سحب.',
              'استخدم براغي مناسبة الحجم (لا تطول كثيراً فتخترق المقطع).',
              'بعد التركيب، اختبر الفتح والإغلاق عدة مرات.'
            ],
            summaryEN: [
              'Sliding windows require wheels at the bottom and top.',
              'Casement windows need strong hinges to bear the sash\'s weight.',
              'Handles vary by type: lift handle, twisting handle, pull handle.',
              'Use appropriate-sized screws (not too long so they don\'t pierce through the profile).',
              'After installation, test opening and closing several times.'
            ],
            task: {
              title: 'تحليل ميكانيكية النافذة',
              titleEN: 'Analyzing Window Mechanics',
              description: 'لاحظ نافذة في منزلك. كيف تفتح؟ منزلقة أم مفصلية؟ افحص العجلات أو المفصلات من الأسفل والأعلى. ارسم شكلاً مبسطاً لآلية الحركة.',
              descriptionEN: 'Observe a window in your home. How does it open? Sliding or casement? Check the wheels or hinges from bottom and top. Draw a simplified sketch of its movement mechanism.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما الذي يجب الانتباه إليه بشدة عند اختيار براغي تركيب ملحقات الألمنيوم؟',
                questionEN: 'What must be strictly paid attention to when choosing screws for installing aluminum accessories?',
                options: [
                  { id: 'o1', text: 'لون البرغي فقط', textEN: 'The color of the screw only', isCorrect: false },
                  { id: 'o2', text: 'طول البرغي، حتى لا يخترق المقطع ويمنع حركة الأجزاء الداخلية (كالزجاج)', textEN: 'The length of the screw, so it doesn\'t pierce the profile and block the internal parts (like the glass)', isCorrect: true },
                  { id: 'o3', text: 'أن يكون البرغي مصنوعاً من الخشب', textEN: 'The screw must be made of wood', isCorrect: false }
                ],
                explanation: 'البرغي الطويل يمكن أن يصل إلى الزجاج فيكسره، أو يعرقل سير العجلات.',
                explanationEN: 'A long screw can reach the glass and shatter it, or obstruct the rolling of wheels.'
              }
            ],
            xpReward: 25
          }
        ]
      },
      {
        id: 'lvl_3',
        title: 'المرحلة 3: تطبيقات متقدمة وأعمال التركيب',
        titleEN: 'Stage 3: Advanced Applications and Installation Works',
        description: 'حان وقت ربط الأجزاء بالواقع. تصنيع نوافذ منزلقة، أبواب PVC، والعزل النهائي الفعال.',
        descriptionEN: 'Time to connect parts to reality. Fabricating sliding windows, PVC doors, and effective final sealing.',
        lessons: [
          {
            id: 'les_3_1',
            title: 'تصنيع وتركيب نافذة منزلقة كاملة – الجزء الأول (الإطار الخارجي)',
            titleEN: 'Fabricating a Full Sliding Window – Part 1 (Outer Frame)',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك خطوة بخطوة: 1) قياس فتحة الجدار، 2) تقطيع مقاطع الإطار الخارجي (الكادر)، 3) تجميع الكادر على طاولة العمل، 4) تثبيت الكادر في فتحة الجدار باستخدام البراغي والمسامير، مع وضع ميزان الماء للتأكد.',
            visualDescriptionEN: 'Animated step-by-step scene: 1) Measuring the wall opening, 2) Cutting outer frame profiles, 3) Assembling the frame on the workbench, 4) Fixing the frame into the wall opening using screws and dowels, placing a spirit level to ensure straightness.',
            duration: '07:00',
            summary: [
              'الكادر هو الإطار الثابت الذي يثبت في الجدار.',
              'يجب أن يكون الكادر مستوياً تماماً في كل الاتجاهات.',
              'استخدم مسامير تثبيت مناسبة لنوع الجدار (طوب، خرسانة).',
              'اترك فراغاً بين الكادر والجدار لملئه بالرغوة العازلة لاحقاً.',
              'تأكد من أن الكادر ليس ملتوياً قبل تثبيته النهائي.'
            ],
            summaryEN: [
              'The frame is the fixed part attached to the wall.',
              'The frame must be perfectly level in all directions.',
              'Use appropriate fixings depending on the wall type (brick, concrete).',
              'Leave a gap between the frame and the wall to fill with expansive foam later.',
              'Make sure the frame is not twisted before final fixing.'
            ],
            task: {
              title: 'تخطيط مساحة الكادر',
              titleEN: 'Frame Space Planning',
              description: 'ارسم مقطعاً أفقياً لجدار ونافذة. وضح أين يثبت الكادر بالنسبة للجدار. حدد طبقات العزل التي ستوضع لاحقاً.',
              descriptionEN: 'Draw a horizontal cross-section of a wall and window. Show where the frame is fixed relative to the wall. Indicate the insulation layers that will be added later.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا نُبقي فراغاً صغيراً بين إطار النافذة (الكادر) وفتحة الجدار عند التركيب؟',
                questionEN: 'Why do we deliberately leave a small gap between the window frame and the wall opening during installation?',
                options: [
                  { id: 'o1', text: 'لأن مقاس النافذة صُنع بالخطأ', textEN: 'Because the window was made to the wrong size', isCorrect: false },
                  { id: 'o2', text: 'لإعطاء مساحة لحقن الرغوة العازلة التي تمنع دخول الهواء والصوت', textEN: 'To provide space to inject expansive insulation foam that blocks air and sound', isCorrect: true },
                  { id: 'o3', text: 'لسهولة إخراج النافذة عند الرغبة في تغييرها', textEN: 'To easily remove the window when wanting to change it', isCorrect: false }
                ],
                explanation: 'الفراغ يتيح حقن رغوة البولي يوريثان التي تتمدد لتملأ الفراغ بالكامل وتعزل النافذة وتثبتها بشكل أقوى.',
                explanationEN: 'The gap allows the injection of polyurethane foam, which expands to completely fill the space, insulating it and securing the frame tighter.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_3_2',
            title: 'تصنيع وتركيب نافذة منزلقة كاملة – الجزء الثاني (المصاريع)',
            titleEN: 'Fabricating a Full Sliding Window – Part 2 (Sashes)',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'تكملة للمشهد السابق: بعد تثبيت الكادر في الجدار، تُصنع المصاريع (الأجزاء المتحركة) وتُركب العجلات. تُرفع المصاريع وتوضع داخل سكك الكادر. حركة انزلاقية ناعمة. ثم تُركب الفرش المانعة للغبار.',
            visualDescriptionEN: 'Continuation of the previous scene: After fixing the frame, the sashes (moving parts) are fabricated and wheels installed. The sashes are lifted and placed into the frame tracks. Smooth sliding motion. Then dust-sealing brushes are installed.',
            duration: '08:00',
            summary: [
              'المصاريع هي الأجزاء التي تتحرك وتحتوي على الزجاج.',
              'يجب قص مقاسات المصاريع بدقة لتنزلق بسلاسة دون احتكاك زائد.',
              'العجلات قابلة للتعديل: أدر برغي التعديل لضبط ارتفاع المصراع.',
              'بعد التركيب، نظف السكك من بقايا قطع الألمنيوم.',
              'رش قليلاً من السيليكون على السكك لتسهيل الانزلاق.'
            ],
            summaryEN: [
              'Sashes are the moving parts that hold the glass.',
              'Sash dimensions must be cut precisely so they slide smoothly without excess friction.',
              'Wheels are adjustable: turn the adjustment screw to set sash height.',
              'After installation, clean the tracks of any aluminum debris.',
              'Spray a bit of silicone lubricant on the tracks to ease sliding.'
            ],
            task: {
              title: 'مراقبة الانزلاق',
              titleEN: 'Sliding Observation',
              description: 'شاهد فيديو قصيراً على الإنترنت (أو راقب نجاراً في حيك) يركب نافذة منزلقة. دون 5 خطوات لاحظتها. قارنها بما تعلمته.',
              descriptionEN: 'Watch a short video online (or observe a local joiner) installing a sliding window. Note down 5 steps you noticed. Compare them with what you learned.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا كان مصراع النافذة المنزلقة يميل إلى جهة واحدة ولا يغلق بشكل متوازي، كيف تعالج ذلك؟',
                questionEN: 'If a sliding sash is leaning to one side and doesn\'t close parallel to the frame, how do you fix it?',
                options: [
                  { id: 'o1', text: 'بإعادة فك كامل النافذة وقطع الألمنيوم من جديد', textEN: 'By disassembling the whole window and re-cutting the aluminum', isCorrect: false },
                  { id: 'o2', text: 'بشد البراغي لزيادة الضغط على الإطار', textEN: 'By tightening screws to increase pressure on the frame', isCorrect: false },
                  { id: 'o3', text: 'من خلال تدوير برغي التعديل في إحدى العجلات السفلية لرفع أو خفض تلك الجهة', textEN: 'By turning the adjustment screw in one of the bottom wheels to raise or lower that side', isCorrect: true }
                ],
                explanation: 'عجلات الألمنيوم مصممة بحيث يمكن تعديل ارتفاعها من الجانبین لضبط التوازي تماماً مع الإطار.',
                explanationEN: 'Aluminum wheels are designed so their height can be adjusted from the sides to ensure perfect parallelism with the frame.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_3_3',
            title: 'تصنيع باب PVC للحمام',
            titleEN: 'Fabricating a PVC Bathroom Door',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'مشهد متحرك لتصنيع باب PVC بسيط: ألواح PVC بيضاء تُقطع بمقاس الباب. تُركب مفصلات خفيفة. يُركب مقبض. يُعلق الباب في إطار خشبي أو PVC مثبت مسبقاً في الجدار. مشهد نهائي لباب حمام أنيق أبيض.',
            visualDescriptionEN: 'Animated scene fabricating a simple PVC door: White PVC panels are cut to door size. Light hinges are attached. A handle is installed. The door is hung in a pre-installed wooden or PVC frame on the wall. Final scene of an elegant white bathroom door.',
            duration: '06:00',
            summary: [
              'أبواب PVC مثالية للحمامات لمقاومتها للرطوبة.',
              'استخدم منشار يدوي ناعم الأسنان لتقطيع الـ PVC لتجنب التشظي.',
              'ثبت المفصلات ببراغي قصيرة خاصة بالبلاستيك.',
              'تأكد من وجود فراغ صغير أسفل الباب للتهوية (حوالي 1 سم).',
              'المقابض تكون عادة من الألمنيوم أو البلاستيك المقاوم للصدأ.'
            ],
            summaryEN: [
              'PVC doors are ideal for bathrooms due to their moisture resistance.',
              'Use a fine-toothed hand saw to cut PVC to avoid splintering.',
              'Attach hinges using short screws specifically for plastic.',
              'Ensure a small gap under the door for ventilation (about 1 cm).',
              'Handles are usually made of aluminum or rust-proof plastic.'
            ],
            task: {
              title: 'فحص أبواب البيئة الرطبة',
              titleEN: 'Inspecting Wet-Area Doors',
              description: 'قس باب حمامك أو مطبخك. سجل: العرض، الارتفاع، السمك، المادة، ونوع المفصلات. تخيل كيف ستصنع واحداً مثله.',
              descriptionEN: 'Measure your bathroom or kitchen door. Record: width, height, thickness, material, and hinge type. Imagine how you would fabricate one like it.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا يُنصح بترك فراغ صغير (حوالي 1 سم) أسفل باب الحمام المصنوع من PVC؟',
                questionEN: 'Why is it recommended to leave a small gap (about 1 cm) at the bottom of a PVC bathroom door?',
                options: [
                  { id: 'o1', text: 'لتوفير مادة الـ PVC', textEN: 'To save on PVC material', isCorrect: false },
                  { id: 'o2', text: 'لتسهيل تنظيف الأرضية', textEN: 'To make floor cleaning easier', isCorrect: false },
                  { id: 'o3', text: 'للسماح بالتهوية ودخول الهواء لسحب البخار بواسطة مروحة الشفط', textEN: 'To allow ventilation and let air in so the exhaust fan can pull steam out', isCorrect: true }
                ],
                explanation: 'الحمامات تحتوي مروحة شفط للبخار، وإذا كان الباب معزولاً تماماً فلن يجد تيار هواء يسحبه للخارج.',
                explanationEN: 'Bathrooms have exhaust fans; if the door seals completely, there\'s no air flow for the fan to extract the steam.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_3_4',
            title: 'العزل: الرغوة، السيليكون، والأشرطة المطاطية',
            titleEN: 'Insulation: Foam, Silicone, and Rubber Strips',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1520032484190-e5ef81d87978?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي مقطعي: فجوة بين الكادر والجدار تُملأ برغوة بولي يوريثان (تظهر كسحابة صفراء خفيفة تتوسع داخل الفجوة). سهم إلى مسدس سيليكون يضع خطاً أنيقاً على الحواف الخارجية. شريط مطاطي ذاتي اللصق يُركب بين الإطار والمصراع.',
            visualDescriptionEN: 'Cross-sectional illustration: A gap between the frame and wall is filled with polyurethane foam (appears as a light yellow expanding cloud). An arrow points to a silicone gun laying a neat bead on the outer edges. A self-adhesive rubber strip is installed between frame and sash.',
            duration: '08:00',
            summary: [
              'الرغوة العازلة (mousse expansive) تملأ الفراغ بين الكادر والجدار، تمنع مرور الهواء والصوت.',
              'لا تملأ أكثر من نصف الفجوة، لأن الرغوة تتمدد.',
              'بعد جفاف الرغوة، اقطع الزوائد وضع السيليكون على الحواف الخارجية لمنع دخول الماء.',
              'الأشرطة المطاطية بين الإطار والمصراع تمنع الصفير وتسرب الغبار.',
              'العزل الجيد يوفر الطاقة ويطيل عمر النافذة.'
            ],
            summaryEN: [
              'Expansive foam (mousse expansive) fills the gap between the frame and wall, blocking air and sound.',
              'Do not fill more than half the gap, as the foam expands.',
              'After the foam dries, trim excess and apply silicone on outer edges to prevent water entry.',
              'Rubber strips between frame and sash stop whistling sounds and dust leaks.',
              'Good insulation saves energy and prolongs the window\'s life.'
            ],
            task: {
              title: 'تحديد تسرب الهواء',
              titleEN: 'Locating Air Leaks',
              description: 'ابحث عن نافذة في منزلك بها تسرب هواء (ضع يدك قرب الحواف لتشعر بالهواء). صف أين يقع التسرب. كيف يمكن علاجه بما تعلمته؟',
              descriptionEN: 'Look for a window in your home that has an air leak (place your hand near edges to feel the draft). Describe where the leak is. How can it be fixed using what you learned?'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الطريقة الصحيحة لاستخدام رغوة البولي يوريثان (mousse expansive)؟',
                questionEN: 'What is the correct way to apply polyurethane expansive foam?',
                options: [
                  { id: 'o1', text: 'ملء الفجوة بالكامل حتى تفيض الرغوة', textEN: 'Fill the gap completely until the foam overflows', isCorrect: false },
                  { id: 'o2', text: 'ملء نصف الفجوة فقط لأنها ستتمدد لاحقاً لتغطي المساحة كلياً', textEN: 'Fill only half the gap because it will expand later to cover the entire space', isCorrect: true },
                  { id: 'o3', text: 'استخدامها كديكور خارجي فوق السيليكون', textEN: 'Use it as an exterior decoration over the silicone', isCorrect: false }
                ],
                explanation: 'الرغوة يتضاعف حجمها 2 إلى 3 مرات، فإذا ملأت الفجوة بالكامل ستشوه الإطار بدفعها القوي.',
                explanationEN: 'The foam acts exponentially, expanding 2-3 times its volume; overfilling can push and warp the frame.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_3_5',
            title: 'صيانة وإصلاح النوافذ والأبواب الشائعة',
            titleEN: 'Maintenance and Repair of Common Windows and Doors',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ثلاثة مشاهد صغيرة: 1) نافذة منزلقة يصعب فتحها، يد تنظف السكة من الأوساخ، ثم ترش السيليكون. 2) مقبض مرتخٍ، يد تشد البرغي. 3) ختم مطاطي مقطوع، يد تنزع القديم وتُدخل جديداً.',
            visualDescriptionEN: 'Three mini-scenes: 1) A sliding window that\'s hard to open, a hand cleans dirt off the track, then sprays silicone. 2) A loose handle, a hand tightens the screw. 3) A torn rubber seal, a hand pulls the old one and pushes in a new one.',
            duration: '07:00',
            summary: [
              'صعوبة الفتح تعني اتساخ السكك أو تآكل العجلات. نظف أولاً، فإن لم تنجح فاستبدل العجلات.',
              'المقابض المرتخية غالباً ما تحتاج فقط لشد البراغي.',
              'الأختام المطاطية تتلف مع الزمن، استبدلها لاستعادة العزل.',
              'شحم خفيف على المفصلات مرة سنوياً يمنع الصرير.',
              'افحص السيليكون الخارجي سنوياً، واستبدل المتشقق منه.'
            ],
            summaryEN: [
              'Difficulty opening means dirty tracks or worn wheels. Clean first, if it fails, replace the wheels.',
              'Loose handles usually just require tightening the screws.',
              'Rubber seals deteriorate over time; replace them to restore insulation.',
              'Light grease on hinges once a year prevents squeaking.',
              'Inspect exterior silicone annually, and replace any cracked spots.'
            ],
            task: {
              title: 'فحص منزلي للصيانة',
              titleEN: 'Home Maintenance Inspection',
              description: 'تفقد كل نوافذ وأبواب منزلك. ضع قائمة بالأعطال الصغيرة التي تجدها (مقبض مرتخٍ، صعوبة انزلاق...). أصلح ما تستطيع بنفسك مستخدماً ما تعلمته.',
              descriptionEN: 'Inspect all windows and doors in your home. Make a list of small faults you find (loose handle, hard to slide...). Fix what you can yourself using what you\'ve learned.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'إذا فقدت النافذة المنزلقة عزلها وأصبحت تسرب هواءً بارداً في الشتاء رغم انغلاقها، ما هو السبب الأرجح؟',
                questionEN: 'If a sliding window has lost its insulation and leaks cold draft in winter despite being closed, what is the most likely cause?',
                options: [
                  { id: 'o1', text: 'المقبض مكسور', textEN: 'The handle is broken', isCorrect: false },
                  { id: 'o2', text: 'الزجاج المزدوج ثقيل جداً', textEN: 'The double glazing is too heavy', isCorrect: false },
                  { id: 'o3', text: 'تلف الأشرطة والأختام المطاطية (الفرشاة أو الكاوتشو)', textEN: 'Deterioration of rubber seals and brush strips', isCorrect: true }
                ],
                explanation: 'المطاط والفرش هما خط الدفاع الذي يغطي الفراغ البسيط بين الضلفة والإطار. تلفهما يؤدي لتسرب فوري.',
                explanationEN: 'Rubber and brush seals are the defense line covering the slight gap between sash and frame. Their wear leads to immediate leaks.'
              }
            ],
            xpReward: 25
          }
        ]
      },
      {
        id: 'lvl_4',
        title: 'المرحلة 4: الاحتراف، إدارة الورشة، ومشروع التخرج',
        titleEN: 'Stage 4: Professionalism, Workshop Management, and Final Project',
        description: 'تحول إلى "معلم". تعلم حساب التكاليف، تصميم الواجهات الكبيرة، ونفذ مشروعك النهائي.',
        descriptionEN: 'Become a "Master". Learn cost calculation, designing large facades, and execute your final project.',
        lessons: [
          {
            id: 'les_4_1',
            title: 'حساب التكاليف وتسعير الأعمال',
            titleEN: 'Cost Calculation and Pricing',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لمفكرة مفتوحة وآلة حاسبة. في المفكرة قائمة: "ثمن مقاطع الألمنيوم + الزجاج + الملحقات + السيليكون والرغوة + هامش الربح وأجرة العمل = السعر النهائي". بجانبها أيقونة عملة معدنية.',
            visualDescriptionEN: 'Illustration of an open notebook and a calculator. The notebook lists: "Cost of aluminum profiles + glass + accessories + silicone & foam + profit margin & labor = Final Price". A coin icon is nearby.',
            duration: '06:00',
            summary: [
              'التسعير الناجح يضمن بقاء الورشة.',
              'احسب تكلفة المواد بدقة (ألمنيوم، زجاج، ملحقات صغيرة كالبراغي).',
              'لا تنس تكلفة المواد المستهلكة (سيليكون، رغوة، شفرات منشار).',
              'أضف أجرة يدك (العمل) بناءً على الوقت والجهد.',
              'أضف هامش ربح للورشة لتغطية الإيجار والكهرباء.'
            ],
            summaryEN: [
              'Successful pricing ensures the workshop\'s survival.',
              'Calculate material costs accurately (aluminum, glass, small accessories like screws).',
              'Don\'t forget consumables (silicone, foam, saw blades).',
              'Add your labor cost based on time and effort.',
              'Add a workshop profit margin to cover rent and electricity.'
            ],
            task: {
              title: 'تسعير وهمي',
              titleEN: 'Mock Pricing',
              description: 'تخيل أن تكلفة مواد نافذة هي 8000 دج، والمواد المستهلكة 1000 دج، وأجرة يدك 3000 دج. احسب السعر النهائي للزبون.',
              descriptionEN: 'Imagine window materials cost 8000 DZD, consumables 1000 DZD, and your labor is 3000 DZD. Calculate the final price for the client.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'عند تسعير نافذة ألمنيوم لزبون، ما الذي يجب ألا تتجاهل حسابه أبداً حتى لا تخسر المال؟',
                questionEN: 'When pricing an aluminum window for a client, what must you never neglect to calculate so you don\'t lose money?',
                options: [
                  { id: 'o1', text: 'تكلفة مقاطع الألمنيوم والزجاج فقط', textEN: 'The cost of aluminum profiles and glass only', isCorrect: false },
                  { id: 'o2', text: 'تكلفة النقل لمرة واحدة', textEN: 'One-time transportation cost', isCorrect: false },
                  { id: 'o3', text: 'تكلفة "المواد المستهلكة" (السيليكون، البراغي، الرغوة) وتكاليف تشغيل الورشة (كهرباء)', textEN: 'The cost of "consumables" (silicone, screws, foam) and workshop operational costs (electricity)', isCorrect: true }
                ],
                explanation: 'الكثير من المبتدئين يخسرون لأنهم يتناسون حساب الأشياء الصغيرة التي تستهلك في كل عمل، مما يأكل من أرباحهم.',
                explanationEN: 'Many beginners lose money because they forget to account for small consumables used in every job, which eats into their profit.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_4_2',
            title: 'إدارة الورشة والتسويق للأعمال',
            titleEN: 'Workshop Management and Marketing',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لواجهة ورشة مرتبة. نجار يصافح زبوناً بابتسامة. بجانب المشهد، هاتف ذكي يعرض صوراً لنوافذ وأبواب مصممة بشكل جميل على صفحة تواصل اجتماعي.',
            visualDescriptionEN: 'Illustration of a neat workshop front. A joiner shaking hands with a client with a smile. Next to it, a smartphone displaying beautifully designed windows and doors on a social media page.',
            duration: '06:00',
            summary: [
              'الصورة الانطباعية للورشة (النظافة، الترتيب) تجذب الزبائن.',
              'التزم بمواعيد التسليم؛ التأخير يفقدك ثقة الزبون.',
              'صور أعمالك المنجزة بشكل جميل وضعها في "كتالوج" أو على الهاتف.',
              'استخدم وسائل التواصل الاجتماعي (فيسبوك، إنستغرام) لعرض أعمالك في منطقتك.',
              'الكلمة الطيبة والتعامل الاحترافي هما أفضل تسويق (التسويق الشفهي).'
            ],
            summaryEN: [
              'The workshop\'s impression (cleanliness, order) attracts clients.',
              'Stick to delivery deadlines; delays lose client trust.',
              'Take beautiful photos of your finished work for a "catalog" or phone.',
              'Use social media (Facebook, Instagram) to showcase work in your area.',
              'Good manners and professional dealings are the best marketing (word-of-mouth).'
            ],
            task: {
              title: 'تصميم إعلان للورشة',
              titleEN: 'Designing a Workshop Ad',
              description: 'تخيل أنك فتحت ورشتك الخاصة. اكتب نصاً إعلانياً قصيراً (بوست فيسبوك) للترويج لخدماتك في تركيب النوافذ العازلة للصوت.',
              descriptionEN: 'Imagine you opened your own workshop. Write a short advertising text (Facebook post) promoting your soundproof window installation services.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الوسيلة الأقوى والأطول عمراً لجلب زبائن جدد لورشة الألمنيوم الخاصة بك؟',
                questionEN: 'What is the strongest, most enduring method to bring new clients to your aluminum workshop?',
                options: [
                  { id: 'o1', text: 'طباعة آلاف الملصقات الورقية وتوزيعها', textEN: 'Printing thousands of paper flyers and distributing them', isCorrect: false },
                  { id: 'o2', text: 'السمعة الطيبة (العمل المتقن واحترام المواعيد) التي ينقلها الزبائن لبعضهم', textEN: 'Good reputation (excellent work and respecting deadlines) passed via word-of-mouth', isCorrect: true },
                  { id: 'o3', text: 'تقديم أرخص سعر في السوق مهما كانت الجودة', textEN: 'Offering the cheapest price in the market regardless of quality', isCorrect: false }
                ],
                explanation: 'الزبون الراضي هو إعلان متحرك. الحرفي "المعلم" يُعرف بعمله لا بكلامه.',
                explanationEN: 'A satisfied client is a walking advertisement. A true "Master" is known by their work, not just their talk.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_4_3',
            title: 'مشاريع متقدمة: واجهات المحلات (Vitrine) والقواطع (Separation)',
            titleEN: 'Advanced Projects: Shopfronts and Partitions',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي لقاطع مكتبي (سيباراسيون) من الألمنيوم الرمادي والزجاج، يُقسم غرفة كبيرة. مقطع آخر يوضح واجهة محل تجاري (فيترين) بزجاج كبير وباب زجاجي مزدوج.',
            visualDescriptionEN: 'Illustration of a gray aluminum and glass office partition dividing a large room. Another section shows a shopfront (vitrine) with large glass panels and a double glass door.',
            duration: '07:00',
            summary: [
              'واجهات المحلات تتطلب مقاطع ألمنيوم عريضة ومدعمة لتحمل المساحات الزجاجية الكبيرة.',
              'القواطع المكتبية تستخدم لتقسيم المساحات دون حجب الضوء.',
              'السلامة أولاً: يجب استخدام زجاج مقسى (Securit) لتجنب الإصابات الخطيرة إذا انكسر.',
              'دقة القياس هنا حرجة جداً، لأن الأخطاء تكلف غالياً.',
              'يتطلب العمل فريقاً لرفع الأجزاء الثقيلة.'
            ],
            summaryEN: [
              'Shopfronts require wide, reinforced aluminum profiles to support large glass areas.',
              'Office partitions are used to divide spaces without blocking light.',
              'Safety first: Tempered glass (Securit) must be used to prevent serious injury if broken.',
              'Measurement precision here is highly critical, as mistakes are very costly.',
              'The work requires a team to lift heavy parts.'
            ],
            task: {
              title: 'تخطيط قاطع مكتبي',
              titleEN: 'Office Partition Planning',
              description: 'ارسم تصميماً لقاطع مكتبي يفصل غرفة طولها 4 أمتار. أين ستضع الباب؟ كم لوح زجاج ستحتاج لتغطية العرض؟',
              descriptionEN: 'Draw a design for an office partition dividing a 4-meter long room. Where will you put the door? How many glass panels will you need to cover the width?'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو نوع الزجاج الإجباري استخدامه في واجهات المحلات التجارية الكبيرة لضمان السلامة؟',
                questionEN: 'What type of glass is mandatory for large commercial shopfronts to ensure safety?',
                options: [
                  { id: 'o1', text: 'الزجاج العادي الرقيق', textEN: 'Thin standard glass', isCorrect: false },
                  { id: 'o2', text: 'الزجاج المقسى (Securit) الذي يتفتت لقطع صغيرة غير حادة عند الكسر', textEN: 'Tempered glass (Securit) which crumbles into small, dull pieces when broken', isCorrect: true },
                  { id: 'o3', text: 'بلاستيك شفاف خفيف', textEN: 'Light clear plastic', isCorrect: false }
                ],
                explanation: 'الزجاج العادي خطير جداً كالمقصلة إذا انكسر بحجم كبير، لذلك الزجاج المقسى (سيكوريت) هو المعيار.',
                explanationEN: 'Standard large glass acts like a guillotine if broken; therefore, tempered glass (Securit) is the standard.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_4_4',
            title: 'مشروع التخرج – تصميم وتصنيع نافذة منزلقة كاملة',
            titleEN: 'Final Project – Designing and Fabricating a Full Sliding Window',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي شامل يجمع المراحل: 1) مخطط مقاسات، 2) منشار يقطع الألمنيوم بزوايا، 3) تجميع الكادر والمصاريع، 4) وضع الزجاج والمطاط، 5) النافذة مركبة في الجدار بشكل أنيق. في الأسفل شهادة تخرج تحمل شعار الدورة.',
            visualDescriptionEN: 'Comprehensive illustration combining stages: 1) Dimensions blueprint, 2) Saw cutting angles, 3) Assembling frame and sashes, 4) Placing glass and rubber, 5) Window elegantly installed in the wall. At the bottom, a graduation certificate with the course logo.',
            duration: '15:00',
            summary: [
              'استحضر كل ما تعلمته: السلامة، القياس الدقيق، دقة القص.',
              'التجميع الجاف يسبق التثبيت النهائي للزوايا.',
              'قس وحضر المساحة للزجاج قبل إدخاله.',
              'تأكد من عمل العجلات والمقابض بسلاسة.',
              'اللمسات النهائية (السيليكون، نظافة العمل) هي ما يميز المحترف.'
            ],
            summaryEN: [
              'Recall everything you\'ve learned: safety, precise measurement, cutting accuracy.',
              'Dry assembly precedes final corner fixing.',
              'Measure and prep the space for glass before insertion.',
              'Ensure wheels and handles operate smoothly.',
              'Finishing touches (silicone, neatness) distinguish a professional.'
            ],
            task: {
              title: 'مشروع التخرج: خطة النافذة',
              titleEN: 'Final Project: Window Plan',
              description: 'تخيل أن زبوناً طلب نافذة منزلقة بطول 1.5م وعرض 1م، زجاج مزدوج عازل للصوت. اكتب الخطوات كاملة (من القياس للتركيب) موضحاً الأدوات المستخدمة في كل خطوة.',
              descriptionEN: 'Imagine a client ordered a sliding window 1.5m high and 1m wide, with soundproof double glazing. Write the full steps (from measurement to installation), specifying tools used at each step.'
            },
            quiz: [
              {
                id: 'q_final_alu',
                question: 'لقد أكملت الدورة! اضغط على "صحيح" لاستلام شهادتك وإتمام المسار.',
                questionEN: 'You have completed the course! Click "True" to receive your certificate and finish the track.',
                options: [
                  { id: 'o1', text: 'صحيح', textEN: 'True', isCorrect: true },
                  { id: 'o2', text: 'خاطئ', textEN: 'False', isCorrect: false }
                ],
                explanation: 'مبارك يا معلم! أنت الآن تملك أساسيات نجارة الألمنيوم والـ PVC.',
                explanationEN: 'Congratulations Master! You now possess the fundamentals of Aluminum and PVC carpentry.'
              }
            ],
            xpReward: 100
          }
        ]
      }
    ],
    badges: {
      started: {
        id: 'alu_starter',
        title: 'صانع واعٍ',
        titleEN: 'Safety & Tools Pro',
        description: 'أكملت أساسيات السلامة والأدوات في ورشة الألمنيوم.',
        descriptionEN: 'Completed safety and tools basics in the aluminum workshop.',
        icon: 'shield'
      },
      completed: {
        id: 'alu_master',
        title: 'نجار محترف',
        titleEN: 'Professional Joiner',
        description: 'أنهيت المسار وأصبحت قادراً على إدارة ورشتك بنجاح.',
        descriptionEN: 'Finished the path and now capable of managing your own workshop successfully.',
        icon: 'award'
      }
    }
  },

  mens_barbering: {
    craftId: 'mens_barbering',
    title: 'حلاقة الرجال',
    titleEN: 'Men\'s Barbering',
    description: 'دورة شاملة لتعلم فن حلاقة وتجميل الرجال من الأساسيات حتى الاحتراف.',
    descriptionEN: 'A comprehensive course to learn men\'s barbering from basics to professionalism.',
    levels: [
      {
        id: 'lvl_1',
        title: 'المرحلة 1: السلامة، النظافة، وأساسيات الأدوات',
        titleEN: 'Stage 1: Safety, Hygiene, and Basic Tools',
        description: 'تعلم التعقيم الأساسي، وتعرف على الأدوات وأنواع الشعر وأشكال الوجوه.',
        descriptionEN: 'Learn basic sterilization, tools, hair types and face shapes.',
        lessons: [
          {
            id: 'les_1_1',
            title: 'التعقيم والنظافة المهنية في صالون الحلاقة',
            titleEN: 'Sterilization and Professional Hygiene in the Barbershop',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'صالون حلاقة أنيق ونظيف. أدوات معدنية توضع داخل جهاز تعقيم بالأشعة البنفسجية. يد الحلاق ترش الكحول على أمشاط وتمسح كرسي الحلاقة. فوطة نظيفة لكل زبون. ملصق على المرآة: "صحتك أمانة".',
            visualDescriptionEN: 'Clean and elegant barbershop. Metal tools are placed inside a UV sterilizer. Barber\'s hand sprays alcohol on combs and wipes the chair. Clean towel for each client. Poster on mirror: "Your Health is our Duty".',
            duration: '05:00',
            summary: [
              'عقم كل أداة تلامس الزبون: أمشاط، مقص، شفرات.',
              'استخدم جهاز التعقيم بالأشعة فوق البنفسجية أو محلول مطهر.',
              'اغسل يديك قبل وبعد كل زبون.',
              'استخدم شفرة حلاقة جديدة لكل زبون، أو عقم الموس جيداً.',
              'نظف الكرسي، الأرضية، والأسطح يومياً.',
              'ارتدِ قفازات عند وجود جروح أو التهابات.'
            ],
            summaryEN: [
              'Sterilize every tool that touches the client: combs, scissors, blades.',
              'Use a UV sterilizer or disinfectant solution.',
              'Wash hands before and after each client.',
              'Use a new razor blade for each client, or properly sterilize the straight razor.',
              'Clean the chair, floor, and surfaces daily.',
              'Wear gloves when there are cuts or infections.'
            ],
            task: {
              title: 'تخطيط روتين التعقيم',
              titleEN: 'Sterilization Routine Planning',
              description: 'تخيل أنك ستفتتح صالون حلاقة. اكتب روتين تعقيم يومي من 5 خطوات. ما هي المواد التي ستشتريها للتعقيم؟',
              descriptionEN: 'Imagine you\'re opening a barbershop. Write a 5-step daily sterilization routine. What materials will you buy for it?'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا يُعد تغيير شفرة الحلاقة أو تعقيم الموس ضرورياً بعد كل زبون؟',
                questionEN: 'Why is changing the razor blade or sterilizing the straight razor essential after each client?',
                options: [
                  { id: 'o1', text: 'ليكون القص أسرع', textEN: 'To cut faster', isCorrect: false },
                  { id: 'o2', text: 'لمنع انتقال الأمراض المعدية والبكتيريا', textEN: 'To prevent the transmission of infectious diseases and bacteria', isCorrect: true },
                  { id: 'o3', text: 'للتوفير في المنتجات', textEN: 'To save on products', isCorrect: false }
                ],
                explanation: 'الموس يحتك بالبشرة وقد يسبب جروحاً دقيقة، مما يجعله ناقلاً للأمراض إن لم يعقم.',
                explanationEN: 'Razors scrape the skin and can cause micro-cuts, making them disease vectors if not sterilized.'
              }
            ],
            xpReward: 15
          },
          {
            id: 'les_1_2',
            title: 'التعرف على أدوات الحلاقة واستخداماتها الأساسية',
            titleEN: 'Identifying Barbering Tools and Their Basic Uses',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'طاولة حلاق تعرض: ماكينة (Clipper)، مقص، موس، مشط، فرشاة حلاقة. يد تمسك كل أداة وتعرض طريقة مسكها الصحيحة. الماكينة تُمسك كالقلم، المقص بإدخال الإبهام والبنصر.',
            visualDescriptionEN: 'Barber table displaying: Clipper, scissors, straight razor, comb, shaving brush. A hand holds each showing correct grip. Clipper is held like a pen, scissors using thumb and ring finger.',
            duration: '06:00',
            summary: [
              'الماكينة (Clipper): للقص الأساسي وتقليل الطول. تأتي بأمشاط متحركة بمقاسات مختلفة.',
              'المقص: يستخدم مع المشط لتسريحات دقيقة وتخفيف الشعر.',
              'الموس: للحلاقة الناعمة للذقن أو تحديد خطوط الرقبة.',
              'الفرشاة: لرغوة الصابون وتحضير البشرة قبل الحلاقة.',
              'المشط: لتوجيه الشعر أثناء القص ورفع الخصل.'
            ],
            summaryEN: [
              'Clipper: for main cutting and length reduction. Has different guard sizes.',
              'Scissors: used with comb for precise styles and texturizing.',
              'Razor: for smooth beard shaving or neck lining.',
              'Brush: for lathering soap and skin prep.',
              'Comb: to guide hair during cuts and lift sections.'
            ],
            task: {
              title: 'التعرف على الأدوات',
              titleEN: 'Tool Identification',
              description: 'إذا أتيحت لك أدوات مشابهة، امسك كل واحدة بالطريقة الصحيحة أو ارسمها واكتب وظيفتها.',
              descriptionEN: 'If you have similar tools, hold each correctly. Otherwise draw them and note their functions.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الإصبعان المستخدمان للامساك الصحيح بمقص الحلاقة؟',
                questionEN: 'Which two fingers are used to properly hold barber scissors?',
                options: [
                  { id: 'o1', text: 'السبابة والوسطى', textEN: 'Index and middle finger', isCorrect: false },
                  { id: 'o2', text: 'الإبهام والبنصر', textEN: 'Thumb and ring finger', isCorrect: true },
                  { id: 'o3', text: 'الإبهام والخنصر', textEN: 'Thumb and pinky', isCorrect: false }
                ],
                explanation: 'إدخال الإبهام والبنصر يوفر الثبات ويسمح للسبابة والوسطى بتوجيه المقص بدقة.',
                explanationEN: 'Using the thumb and ring finger provides stability while letting the index and middle fingers guide the scissors.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_3',
            title: 'تشخيص أنواع الشعر وفروة الرأس',
            titleEN: 'Diagnosing Hair Types and Scalp',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'رسوم توضيحية مبسطة: شعرة مقطعها دائري (أملس)، بيضاوي (مموج)، مسطح جداً (مجعد). صور لثلاثة رجال بشعور مختلفة الكثافة.',
            visualDescriptionEN: 'Simplified illustrations: Hair cross section circular (straight), oval (wavy), very flat (curly). Pictures of three men with different hair densities.',
            duration: '06:00',
            summary: [
              'الشعر الأملس: سهل القص لكن الأخطاء تظهر بوضوح.',
              'الشعر المموج والمجعد: يتطلب تقنيات خاصة لتجنب الانكماش.',
              'الشعر الخفيف: يحتاج إلى تسريحات تعطي كثافة بصرية.',
              'فروة الرأس الدهنية: تغسل قبل الحلاقة.',
              'فروة الرأس الجافة: تحتاج ترطيباً خفيفاً.',
              'تفحص اتجاه نمو الشعر (Grain) لأنه يحدد اتجاه القص والحلاقة.'
            ],
            summaryEN: [
              'Straight hair: easy to cut but mistakes are visible.',
              'Wavy & curly hair: require special techniques to prevent shrinkage.',
              'Thinning hair: needs styles that offer visual volume.',
              'Oily scalp: wash before cutting.',
              'Dry scalp: needs light moisturizing.',
              'Check hair growth direction (grain) as it dictates cut and shave direction.'
            ],
            task: {
              title: 'تحليل الشعر في محيطك',
              titleEN: 'Analyze Hair Around You',
              description: 'انظر لشعر 3 أشخاص مختلفين وصنف نوع شعرهم وكثافته.',
              descriptionEN: 'Look at the hair of 3 different people and classify their hair type and density.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا من المهم معرفة اتجاه نمو الشعر (Grain) قبل بدء القص أو الحلاقة؟',
                questionEN: 'Why is it important to know the hair growth direction (Grain) before cutting or shaving?',
                options: [
                  { id: 'o1', text: 'لاختيار نوع الشامبو المناسب', textEN: 'To choose the right shampoo', isCorrect: false },
                  { id: 'o2', text: 'لتجنب الجروح والالتهابات عند الحلاقة ولضمان قص متناسق', textEN: 'To avoid nicks and irritation when shaving and ensure a neat cut', isCorrect: true },
                  { id: 'o3', text: 'لزيادة سرعة الماكينة', textEN: 'To increase clipper speed', isCorrect: false }
                ],
                explanation: 'الحلاقة مع اتجاه نمو الشعر تمنع نموه تحت الجلد وتخفف التهيج.',
                explanationEN: 'Shaving with the grain prevents ingrown hairs and reduces irritation.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_1_4',
            title: 'تشريح الوجه واختيار القصة المناسبة',
            titleEN: 'Face Anatomy and Choosing the Right Cut',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'سبعة أشكال وجوه: بيضاوي، دائري، مربع، مستطيل، مثلث، قلب، ماسي. أسهم تشير لمناطق التعديل.',
            visualDescriptionEN: 'Seven face shapes: oval, round, square, rectangle, triangle, heart, diamond. Arrows point to adjustment zones.',
            duration: '07:00',
            summary: [
              'الهدف: جعل الوجه يبدو أقرب للشكل البيضاوي.',
              'الوجه الدائري: يحتاج حجم في الأعلى وجوانب قصيرة.',
              'الوجه المربع: تخفيف الزوايا لتنعيم الجبهة والفك.',
              'الوجه المستطيل: تجنب الشعر الطويل جداً بالأعلى.',
              'اسأل الزبون دائماً: ما الذي تحبه وتكرهه في تسريحتك الحالية؟'
            ],
            summaryEN: [
              'Goal: make the face look closer to the oval shape.',
              'Round face: needs volume on top and short sides.',
              'Square face: soften angles at forehead and jaw.',
              'Rectangular face: avoid overly long hair on top.',
              'Always ask the client: what do you like/dislike about your current style?'
            ],
            task: {
              title: 'تحديد شكل الوجه والقصة',
              titleEN: 'Identify Face Shape and Cut',
              description: 'ارسم شكل وجهك أو وجه صديق، وحدده ثم اقترح 3 قصات مناسبة.',
              descriptionEN: 'Draw your or a friend\'s face shape, identify it, and suggest 3 matching cuts.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الهدف الأساسي من اختيار قصة تتناسب مع شكل الوجه؟',
                questionEN: 'What is the primary goal of selecting a haircut that matches face shape?',
                options: [
                  { id: 'o1', text: 'توفير الوقت والمجهود', textEN: 'To save time and effort', isCorrect: false },
                  { id: 'o2', text: 'صنع توازن بصري ليقترب الوجه من الشكل البيضاوي المثالي', textEN: 'To create visual balance making the face appear closer to the ideal oval shape', isCorrect: true },
                  { id: 'o3', text: 'إقناع الزبون بشراء منتجات تصفيف', textEN: 'To persuade the client to buy styling products', isCorrect: false }
                ],
                explanation: 'القصة تُستخدم لإخفاء العيوب وإبراز الملامح الجيدة وصنع تناغم بصري.',
                explanationEN: 'Haircuts are used to hide flaws, highlight good features, and create visual harmony.'
              }
            ],
            xpReward: 20
          }
        ]
      },
      {
        id: 'lvl_2',
        title: 'المرحلة 2: تقنيات القص الأساسية والمتقدمة',
        titleEN: 'Stage 2: Basic and Advanced Cutting Techniques',
        description: 'تعلم التدرج (Fade)، استخدام المقص وتمشيطه، وحلاقة الذقن بالموس وتحديد اللحية.',
        descriptionEN: 'Learn Fade, Scissor-over-comb, straight razor shave, and beard lineup.',
        lessons: [
          {
            id: 'les_2_1',
            title: 'القصة المتدرجة (Fade)',
            titleEN: 'The Fade Cut',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'مشهد متحرك لرأس تظهر عليه خطوط وهمية. الماكينة بمقاس 3 أعلى، 2 بالوسط، 1 بالأسفل. حركة الدمج ناعمة تصنع تدرجاً.',
            visualDescriptionEN: 'Animated head with imaginary guidelines. Clipper with guard 3 on top, 2 in middle, 1 at bottom. Smooth blending motion creates a fade.',
            duration: '08:00',
            summary: [
              'التدرج (Fade) هو انتقال سلس من شعر قصير لطويل.',
              'استخدم حركة "الرفع عن الرأس" (Flicking) لدمج الخطوط.',
              'ابدأ من الأسفل بمقاس صغير ثم انتقل لمقاس أكبر.',
              'مرر أصابعك على الرأس لتشعر بأي زوايا غير مدمجة.',
              'الأنواع: High Fade، Mid Fade، Low Fade.'
            ],
            summaryEN: [
              'Fade is a seamless transition from short to long hair.',
              'Use the "Flicking" (C-stroke) motion to blend lines.',
              'Start from the bottom with a small guard, then move to larger ones.',
              'Run your fingers across the head to feel unblended angles.',
              'Types: High Fade, Mid Fade, Low Fade.'
            ],
            task: {
              title: 'تخيل مستويات القص',
              titleEN: 'Visualize Cutting Levels',
              description: 'على مخطط رأس، حدد خطوط الـ Fade وارسم مسار الماكينة.',
              descriptionEN: 'On a head outline, draw the Fade lines and trace the clipper path.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي حركة "Flicking" ولماذا تُستخدم في قصة الـ Fade؟',
                questionEN: 'What is the "Flicking" motion and why is it used in a Fade cut?',
                options: [
                  { id: 'o1', text: 'حركة ضغط قوية للقص السريع', textEN: 'A strong pressing motion for fast cutting', isCorrect: false },
                  { id: 'o2', text: 'حركة رفع ناعمة للماكينة بقوس للدمج بين الخطوط دون ترك علامات', textEN: 'A smooth scooping motion of the clipper in an arc to blend lines without leaving marks', isCorrect: true },
                  { id: 'o3', text: 'حركة دائرية لخلق تجعيدات', textEN: 'A circular motion to create curls', isCorrect: false }
                ],
                explanation: 'هي سر اختفاء الخط الفاصل بين درجتين من الشعر.',
                explanationEN: 'It is the secret to erasing the visible line between two hair lengths.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_2_2',
            title: 'المقص فوق المشط (Scissor Over Comb)',
            titleEN: 'Scissor Over Comb Technique',
            visualType: 'animation',
            visualUrls: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'يد الحلاق تمسك المشط بيد والمقص بالأخرى. خط متحرك يوضح زاوية المشط وتتبع المقص له.',
            visualDescriptionEN: 'Barber holds comb in one hand and scissors in another. Animated line shows comb angle and scissors following it.',
            duration: '07:00',
            summary: [
              'تمنح هذه التقنية تحكماً دقيقاً في طول وشكل الشعر.',
              'المشط يحدد الزاوية والطول والمقص يتبع سطحه.',
              'المشط المائل للخارج يبقي الشعر أطول.',
              'قارن دائماً بين الجانبين لضمان التماثل.',
              'تدرب على الثبات أولاً.'
            ],
            summaryEN: [
              'This technique provides precise control over hair length and shape.',
              'The comb establishes the angle and length, while scissors follow its surface.',
              'Comb angled outward leaves hair longer.',
              'Always compare sides for symmetry.',
              'Practice stability first.'
            ],
            task: {
              title: 'تمرين المقص والمشط',
              titleEN: 'Scissor & Comb Exercise',
              description: 'امسك مشطاً ومقصاً وتدرب على الحركة في الهواء بانسجام.',
              descriptionEN: 'Hold a comb and scissors and practice the coordinated movement in the air.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'كيف تتحكم في طول الشعر المتروك باستخدام تقنية "المقص فوق المشط"؟',
                questionEN: 'How do you control the hair length left when using the "Scissor over comb" technique?',
                options: [
                  { id: 'o1', text: 'بسرعة إغلاق المقص', textEN: 'By the speed of closing the scissors', isCorrect: false },
                  { id: 'o2', text: 'عن طريق زاوية إمالة المشط، فكلما كان أبعد عن الرأس زاد طول الشعر', textEN: 'Through the comb\'s tilt angle; further from the head leaves longer hair', isCorrect: true },
                  { id: 'o3', text: 'حسب نوع المقص المستخدم', textEN: 'Depending on the type of scissors used', isCorrect: false }
                ],
                explanation: 'المشط يعمل كمسطرة تحديد للطول والزاوية.',
                explanationEN: 'The comb acts as a ruler defining length and angle.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_2_3',
            title: 'حلاقة الذقن بالموس',
            titleEN: 'Straight Razor Shave',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80'],
            visualDescription: 'بشرة ذقن برغوة. موس مستقيم بزاوية 30 درجة يتحرك باتجاه بصيلات الشعر (نزولاً). يد تشد الجلد.',
            visualDescriptionEN: 'Lathered beard skin. Straight razor at 30 degree angle moves with hair grain (downward). A hand stretches the skin.',
            duration: '08:00',
            summary: [
              'جهز البشرة بماء دافئ ورغوة لتليين الشعر.',
              'احلق باتجاه نمو الشعر لتجنب التهيج.',
              'شد الجلد برفق لتسطيحه وتسهيل انزلاق الموس.',
              'استخدم زاوية ميل ما بين 30 إلى 45 درجة للشفرة.',
              'اشطف بالماء البارد وضع لوشن مهدئاً.'
            ],
            summaryEN: [
              'Prep skin with warm water and lather to soften hair.',
              'Shave with the hair growth direction to avoid irritation.',
              'Stretch skin gently to flatten it for razor glide.',
              'Use a blade angle between 30 and 45 degrees.',
              'Rinse with cold water and apply soothing aftershave.'
            ],
            task: {
              title: 'تجربة الزاوية الآمنة',
              titleEN: 'Safe Angle Practice',
              description: 'على بالون مدهون بالرغوة، جرب مسح الرغوة بحافة غير حادة لتعلم ضبط الزاوية دون فرقعته.',
              descriptionEN: 'On a lathered balloon, practice clearing the foam with a dull edge to master the angle without popping it.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الزاوية المثالية لإمالة الموس المستقيم (Straight Razor) على البشرة؟',
                questionEN: 'What is the ideal tilt angle for the straight razor on the skin?',
                options: [
                  { id: 'o1', text: '90 درجة', textEN: '90 degrees', isCorrect: false },
                  { id: 'o2', text: 'حوالي 30 درجة', textEN: 'Around 30 degrees', isCorrect: true },
                  { id: 'o3', text: '0 درجة (ملاصق تماماً)', textEN: '0 degrees (flat against skin)', isCorrect: false }
                ],
                explanation: 'هذه الزاوية تقطع الشعر بنعومة دون أن تخترق البشرة.',
                explanationEN: 'This angle cuts hair smoothly without digging into the skin.'
              }
            ],
            xpReward: 30
          },
          {
            id: 'les_2_4',
            title: 'تحديد وتخطيط اللحية',
            titleEN: 'Beard Line Up and Shaping',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=400&q=80'],
            visualDescription: 'رجل ذو لحية، خط أبيض لتحديد الخدين والرقبة. ماكينة تشذيب تتبع الخط. شكل U عند تفاحة آدم.',
            visualDescriptionEN: 'Bearded man, white outline on cheeks and neck. Trimmer follows the line. U-shape above Adam\'s apple.',
            duration: '06:00',
            summary: [
              'ارسم الحدود المطلوبة مسبقاً ذهنيًا أو بقلم أبيض.',
              'خط الخد: من منبت الأذن لزاوية الفم.',
              'خط الرقبة: فوق تفاحة آدم بشكل مائل ناعم (شكل U).',
              'استخدم زوايا الماكينة (Trimmer) للخطوط الدقيقة.',
              'ابتعد وتفحص التماثل من المرآة باستمرار.'
            ],
            summaryEN: [
              'Pre-draw boundaries mentally or with a white pencil.',
              'Cheek line: from top of ear base to corner of mouth.',
              'Neck line: gentle U-shape right above Adam\'s apple.',
              'Use the corners of the trimmer for fine details.',
              'Step back and constantly check symmetry in the mirror.'
            ],
            task: {
              title: 'رسم حدود اللحية',
              titleEN: 'Draw Beard Lines',
              description: 'على صورة مطبوعة لوجه، ارسم خطوط تحديد اللحية السليمة.',
              descriptionEN: 'On a printed face photo, draw proper beard contouring lines.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'أين يجب أن يقع خط تحديد لحية الرقبة السفلي ليكون الأجمل والأكثر طبيعية؟',
                questionEN: 'Where should the lower neck beard line be placed for the most aesthetic natural look?',
                options: [
                  { id: 'o1', text: 'على خط الفك بالضبط (Jawline)', textEN: 'Exactly on the jawline', isCorrect: false },
                  { id: 'o2', text: 'فوق تفاحة آدم بشكل تقويرة حرف U', textEN: "Above Adam's apple in a U curve", isCorrect: true },
                  { id: 'o3', text: 'عند منتصف الرقبة', textEN: 'At the middle of the neck', isCorrect: false }
                ],
                explanation: 'رفعه إلى خط الفك يجعل اللحية تبدو مصطنعة وغير متوازنة.',
                explanationEN: 'Bringing it up to the jawline makes the beard look artificial and unbalanced.'
              }
            ],
            xpReward: 25
          }
        ]
      },
      {
        id: 'lvl_3',
        title: 'المرحلة 3: قصات عصرية وخدمات متقدمة',
        titleEN: 'Stage 3: Modern Cuts and Advanced Services',
        description: 'قصات Pompadour و Undercut، إخفاء الصلع، ألوان الشعر، والعناية بالبشرة.',
        descriptionEN: 'Pompadour and Undercut styles, concealing balding, hair coloring, and skincare.',
        lessons: [
          {
            id: 'les_3_1',
            title: 'القصات العصرية',
            titleEN: 'Modern Haircuts',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'ثلاث صور: Pompadour (شعر طويل مرفوع للخلف)، Undercut (جوانب محلوقة مع فصل حاد)، French Crop (غرة قصيرة وأمامية).',
            visualDescriptionEN: 'Three photos: Pompadour (long hair volume swept back), Undercut (shaved sides, harsh disconnect), French Crop (short fringe forward).',
            duration: '07:00',
            summary: [
              'Pompadour: يتطلب تجفيفاً وحجماً كبيراً في الأمام بمثبت.',
              'Undercut: جوانب قصيرة جداً مفصولة تماماً عن الأعلى الطويل.',
              'French crop: قصيرة وسهلة من الأمام بلمسة خشنة.',
              'استخدم دائماً صورة من الزبون لضمان فهم مقصده بدقة.',
              'تقنيات مزج الشعر (Texturizing) ضرورية للقصات العصرية.'
            ],
            summaryEN: [
              'Pompadour: requires blow-drying and big volume at front with pomade.',
              'Undercut: heavily clipped sides fully disconnected from long top.',
              'French crop: short and easy forward fringe with texture.',
              'Always use reference photos from clients to ensure mutual understanding.',
              'Texturizing techniques are vital for modern looks.'
            ],
            task: {
              title: 'تحديد خصائص القصات',
              titleEN: 'Identify Cut Features',
              description: 'ابحث عن 3 صور لقصات دارجة واكتب اسم وتوصيف كل قصة.',
              descriptionEN: 'Find 3 trending haircuts photos and write down the name and description of each.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي الميزة الأساسية لقصة الـ Undercut؟',
                questionEN: 'What is the defining feature of the Undercut?',
                options: [
                  { id: 'o1', text: 'شعر طويل جداً من الخلف', textEN: 'Very long hair in the back', isCorrect: false },
                  { id: 'o2', text: 'عدم وجود تدرج وانفصال حاد بين الجوانب المحلوقة والشعر الطويل في الأعلى', textEN: 'No fade, with a sharp disconnect between shaved sides and long top', isCorrect: true },
                  { id: 'o3', text: 'تجعيد الشعر بشكل كامل', textEN: 'Curling all the hair entirely', isCorrect: false }
                ],
                explanation: 'الـ Undercut يعتمد على التناقض الصارخ وخط الفصل الواضح.',
                explanationEN: 'The Undercut relies on stark contrast and a prominent disconnection line.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_3_2',
            title: 'تمويه الصلع وتسريحات الشعر الخفيف',
            titleEN: 'Concealing Balding and Thinning Hair Styles',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رجل بشعر خفيف في المقدمة، مصفف يخفف الجوانب لتعزيز كثافة الأعلى. ثم شخص أصلع جزئياً بقصة Buzz cut (محلوق جداً) تبدو أنيقة.',
            visualDescriptionEN: 'Man with receding hairline; barber fades sides to boost top volume. Then a balding man with an elegant ultra-short Buzz cut.',
            duration: '06:00',
            summary: [
              'الجوانب الطويلة تجعل الصلع العلوي أكثر وضوحاً، فاحلقها قصيرة.',
              'شعر كثيف من الأعلى؟ استخدم تخفيف الطبقات لتغطي مساحة أكبر.',
              'القصات القصيرة جداً (Buzz cut) أو 0 هي الأفضل للصلع المتقدم.',
              'استخدم بودرة التكثيف لجعل الشعر الرقيق يبدو أسمك.',
              'اللباقة ضرورية جداً عند الحديث عن تساقط الشعر مع الزبون.'
            ],
            summaryEN: [
              'Long sides make top balding more obvious, keep them short.',
              'Slightly thinning top? Use layering to cover more area.',
              'Ultra-short cuts (Buzz cut) or completely shaved (0) work best for advanced balding.',
              'Use volume powders to make fine hair appear thicker.',
              'Tact is extremely necessary when discussing hair loss with clients.'
            ],
            task: {
              title: 'النصيحة اللبقة',
              titleEN: 'Tactful Advice',
              description: 'تخيل رسالة لتوصية زبون بقصة قصيرة للتعامل مع شعره الخفيف بأسلوب إيجابي.',
              descriptionEN: 'Imagine a message recommending a short cut to a client dealing with thinning hair in a positive tone.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا نقص جوانب الشعر بشكل أقصر من المعتاد لمن لديهم شعر خفيف في الأعلى؟',
                questionEN: 'Why do we cut sides shorter than usual for clients adjusting to thinning hair on top?',
                options: [
                  { id: 'o1', text: 'لتسريع وقت الحلاقة', textEN: 'To speed up the haircut time', isCorrect: false },
                  { id: 'o2', text: 'ليبرز التباين أعلى الرأس وكأنه أكثر كثافة وامتداداً', textEN: 'To create contrast making the top appear thicker and fuller', isCorrect: true },
                  { id: 'o3', text: 'لأن الشعر الخفيف ينمو بسرعة أكبر في الجوانب', textEN: 'Because thin hair grows faster on the sides', isCorrect: false }
                ],
                explanation: 'لعبة الخداع البصري: الجوانب البيضاء تبرز أي سواد في الأعلى.',
                explanationEN: 'An optical illusion: tight sides highlight whatever darkness/density remains on top.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_3_3',
            title: 'صبغ الشعر الرجالي وتغطية الشيب',
            titleEN: 'Men\'s Hair Coloring & Grey Coverage',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'تطبيق صبغة نصف دائمة على جوانب شعر رمادية بفرشاة صغيرة، النتيجة طبيعية غير مصطنعة (بقاء قليل من الشيب المموه).',
            visualDescriptionEN: 'Applying semi-permanent color on grey sides using a small brush, resulting in a natural, un-artificial look (slight camouflaged greys left).',
            duration: '06:00',
            summary: [
              'استخدم صبغات شبه دائمة للحصول على مظهر مموه (Camouflage) وطبيعي.',
              'تغطية الشيب بالكامل بلون داكن واحد قد تبدو كلون الخوذة ومصطنعة.',
              'اختر دائماً درجة أفتح بدرجة واحدة من لون الشعر الأصلي.',
              'قم باختبار حساسية صغير خلف الأذن قبل الاستخدام.',
              'استخدم فرشاة دقيقة للحية لعدم تلطيخ البشرة.'
            ],
            summaryEN: [
              'Use semi-permanent dyes for a natural camouflaged look.',
              'Total block grey coverage can look like an artificial helmet.',
              'Always choose one shade lighter than natural hair color.',
              'Perform a small allergy patch test behind the ear.',
              'Use a precision brush for beards to avoid skin staining.'
            ],
            task: {
              title: 'تخطيط لون الشيب',
              titleEN: 'Grey Color Planning',
              description: 'اشرح كيف ستقنع رجلاً خائفاً من صبغة الشعر بأن النتيجة ستكون طبيعية.',
              descriptionEN: 'Explain how you would convince a man afraid of hair coloring that the result will be natural.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الخطأ الشائع عند صبغ الشعر أو اللحية للرجال؟',
                questionEN: 'What is a common mistake when dyeing men\'s hair or beards?',
                options: [
                  { id: 'o1', text: 'اختيار لون أسود فاحم داكن جداً يزيل أي درجات وتفاصيل ويبدو مصطنعاً', textEN: 'Choosing an overly dark jet-black color that removes depth and looks artificial', isCorrect: true },
                  { id: 'o2', text: 'إبقاء الصبغة لـ 5 دقائق فقط', textEN: 'Leaving the dye on for only 5 minutes', isCorrect: false },
                  { id: 'o3', text: 'استخدام فرشاة صغيرة', textEN: 'Using a small brush', isCorrect: false }
                ],
                explanation: 'الألوان الداكنة جداً للرجال تفتقر للتدرج الطبيعي. الدرجة الأفتح بقليل هي الأمثل.',
                explanationEN: 'Extremely dark colors lack natural dimension. A slightly lighter shade is optimal.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_3_4',
            title: 'العناية بالبشرة الرجالية في الصالون',
            titleEN: 'Men\'s Skincare in the Saloon',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=400&q=80'],
            visualDescription: 'صالون: فوطة ساخنة على وجه رجل. تطبيق قناع تقشير أسود، ثم لوشن مرطب منشط. إضاءة هادئة.',
            visualDescriptionEN: 'Saloon: hot towel over a man\'s face. Applying black peel-off mask, then an energizing moisturizer. Soft lighting.',
            duration: '06:00',
            summary: [
              'العناية بالوجه تزيد من راحة الزبون ودخلك كحلاق.',
              'ابدأ بفوطة ساخنة لفتح المسام وتليين البشرة.',
              'استخدم غسولاً أو مقشراً خفيفاً لإزالة الجلد الميت والأوساخ.',
              'الأقنعة الطينية (Clay mask) مريحة وتنظف بعمق.',
              'اختم بفوطة باردة لإغلاق المسام وجل مرطب خفيف (بدون زيوت).'
            ],
            summaryEN: [
              'Facials increase client relaxation and your income as a barber.',
              'Start with a hot towel to open pores and soften skin.',
              'Use a gentle cleanser or scrub to remove dead skin and dirt.',
              'Clay masks are soothing and clean deeply.',
              'Finish with a cold towel to close pores and a light moisturizer (oil-free).'
            ],
            task: {
              title: 'تصميم باقة خدمة',
              titleEN: 'Design a Service Package',
              description: 'صمم باقة للزبائن تشمل الحلاقة، واللحية، وماسك الوجه. ضع لها اسماً مميزاً.',
              descriptionEN: 'Design a package for clients including haircut, beard, and face mask. Give it a catchy name.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هو الهدف من وضع فوطة ساخنة (Hot Towel) على وجه الزبون قبل تنظيف البشرة أو حلاقة الذقن؟',
                questionEN: 'What is the purpose of placing a hot towel on a client\'s face before skincare or shaving?',
                options: [
                  { id: 'o1', text: 'لتبريد البشرة', textEN: 'To cool the skin', isCorrect: false },
                  { id: 'o2', text: 'لفتح المسام وتليين الشعر القاسي وتسهيل التنظيف', textEN: 'To open pores, soften coarse hair, and facilitate cleaning', isCorrect: true },
                  { id: 'o3', text: 'لتعقيم الوجه من البكتيريا', textEN: 'To sterilize the face from bacteria', isCorrect: false }
                ],
                explanation: 'الحرارة والبخار يجهزان البشرة ويجعلان الحلاقة انسيابية ومريحة للغاية.',
                explanationEN: 'Heat and steam prep the skin making the shave glide and extremely comfortable.'
              }
            ],
            xpReward: 25
          }
        ]
      },
      {
        id: 'lvl_4',
        title: 'المرحلة 4: إدارة الصالون والمشروع النهائي',
        titleEN: 'Stage 4: Salon Management and Final Project',
        description: 'بناء الولاء للزبائن، تسعير الخدمات، التسويق الذكي للصالون وإثبات احترافيتك.',
        descriptionEN: 'Building customer loyalty, pricing services, smart marketing, and proving your mastery.',
        lessons: [
          {
            id: 'les_4_1',
            title: 'الاستشارة وبناء ولاء الزبون',
            titleEN: 'Consultation and Building Client Loyalty',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'حلاق يتحدث مع زبون، يدون ملاحظات في هاتفه عن القصة المفضلة، الزبون يبتسم برضى.',
            visualDescriptionEN: 'Barber chatting with client, writing notes on phone about preferred cut, client smiles with satisfaction.',
            duration: '06:00',
            summary: [
              'استقبل الزبون بابتسامة وقدم له مشروباً، أنت في مجال الضيافة.',
              'استمع جيداً: اسأل باستفاضة عن الذي يريده ولا تبدأ القص قبل التأكد.',
              'سجل في دفتر هاتفك اسم الزبون وقصته المفضلة لتذكره في زيارته القادمة.',
              'تذكر معلوماته يُشعره بأنه ضيف VIP.',
              'ولاء الزبون أهم من كسب زبون جديد.'
            ],
            summaryEN: [
              'Welcome the client with a smile and offer a drink; you are in hospitality.',
              'Listen well: ask exactly what he wants and don\'t cut until fully sure.',
              'Note down his name and preferred cut in your phone to remember next time.',
              'Remembering his details makes him feel like a VIP.',
              'Client loyalty is more important than gaining a new one.'
            ],
            task: {
              title: 'كتابة سجل الزبون',
              titleEN: 'Write a Client Log',
              description: 'صمم نموذج "بطاقة زبون" تملؤه بعد كل حلاقة، حدد الحقول المهمة (رقم، تفضيلات).',
              descriptionEN: 'Design a "client card" template to fill after each cut, identifying key fields (number, preferences).'
            },
            quiz: [
              {
                id: 'q1',
                question: 'ما هي أهم خطوة قبل لمس مقصك لشعر زبون جديد؟',
                questionEN: 'What is the most crucial step before your scissors touch a new client\'s hair?',
                options: [
                  { id: 'o1', text: 'الإسراع في القص لتوفير وقته', textEN: 'Rushing to save his time', isCorrect: false },
                  { id: 'o2', text: 'الاستشارة وسؤاله المتعمق عن طول الشعر، أسلوبه، وما يتوقعه', textEN: 'Consultation and deep questioning about hair length, style, and expectations', isCorrect: true },
                  { id: 'o3', text: 'اختيار التسريحة نيابة عنه بشكل مفاجئ', textEN: 'Picking a style on his behalf as a surprise', isCorrect: false }
                ],
                explanation: 'التواصل الواضح يمنع الكوارث وعدم الرضا ويعزز احترافيتك.',
                explanationEN: 'Clear communication prevents disasters, avoids dissatisfaction, and boosts professionalism.'
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_4_2',
            title: 'تسعير الخدمات وإدارة المحل',
            titleEN: 'Pricing Services and Shop Management',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'قائمة أسعار واضحة على الحائط. حاسبة، دفتر محاسبة لمداخيل الورشة ومصاريف الإيجار والكهرباء.',
            visualDescriptionEN: 'Clear price list on the wall. Calculator, accounting notebook for shop income, rent, and electricity.',
            duration: '06:00',
            summary: [
              'حدد سعرك بناءً على: الجودة، الموقع العادي أو الراقي، المنافسين، ومصاريفك.',
              'احسب كل مصاريفك الشهرية (إيجار، مواد، فواتير) لتعرف نقطة التعادل.',
              'قدم باقات (Combo) مثل حلاقة + ماسك + لحية لتشجيع زيادة الإنفاق.',
              'احتفظ بسجل يومي صارم للدخل والمنصرف.',
              'طور أدواتك وبيئة الصالون باستمرار لجذب شريحة أعلى.'
            ],
            summaryEN: [
              'Set pricing based on: quality, location, competitors, and your overheads.',
              'Calculate all monthly expenses (rent, materials, bills) to know your break-even point.',
              'Offer Combo packages (hair + mask + beard) to encourage up-selling.',
              'Keep a strict daily ledger for income and expenses.',
              'Constantly upgrade your tools and store environment to attract a higher tier.'
            ],
            task: {
              title: 'تسعير باقات',
              titleEN: 'Create Packages',
              description: 'اكتب قائمة أسعار مبسطة لصالونك تتضمن 3 خدمات أساسية و باقتين كومبو.',
              descriptionEN: 'Write a simplified price list for your shop including 3 basic services and 2 combos.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'كيف يمكن لباكات العروض (Combos) مساعدة إدارة الصالون ماليًا؟',
                questionEN: 'How can Combo packages financially help a salon\'s management?',
                options: [
                  { id: 'o1', text: 'لا تفيد لأنها تخفض السعر النهائي قليلاً', textEN: "They don't because they slightly lower the final price", isCorrect: false },
                  { id: 'o2', text: 'تشجع الزبون على الدفع لخدمة إضافية لم يكن يفكر بها، مما يزيد الدخل العام', textEN: "They encourage the client to pay for an extra service they hadn't planned, increasing overall revenue", isCorrect: true },
                  { id: 'o3', text: 'تقلل من استخدام ماكينة الحلاقة', textEN: 'They reduce the use of clippers', isCorrect: false }
                ],
                explanation: 'هي استراتيجية (Up-selling) بيع خدمات إضافية بطريقة تبدو مغرية للزبون.',
                explanationEN: "It's an up-selling strategy making extra services look appealing to the client."
              }
            ],
            xpReward: 20
          },
          {
            id: 'les_4_3',
            title: 'التسويق عبر وسائل التواصل الاجتماعي',
            titleEN: 'Social Media Marketing',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'هاتف ذكي يظهر صفحة إنستغرام: صور عالية الدقة لتدرج خيالي (Fade)، فيديو قبل/بعد، تعليق يحوي هاشتاغات محلية.',
            visualDescriptionEN: 'Smartphone showing an Instagram page: High-res photos of flawless fades, before/after video, captions with local hashtags.',
            duration: '06:00',
            summary: [
              'الصالون الذي لا يملك صفحة نشطة يختفي من أعين الشباب.',
              'صور "قبل وبعد" بأمانة وإضاءة جيدة لجذب الانتباه.',
              'استأذن الزبون دائماً قبل نشر صوره.',
              'استخدم هاشتاجات لمدينتك وحيك (#حلاق_وهران، #حلاقة_الجزائر).',
              'الفيديوهات القصيرة (Reels) لعملية القص تنتشر أسرع بكثير.'
            ],
            summaryEN: [
              'A shop without an active page is invisible to the youth.',
              'Take honest, well-lit "Before & After" photos to attract attention.',
              'Always ask the client\'s permission before posting.',
              'Use local hashtags for your city.',
              'Short videos (Reels) of the cutting process go viral much faster.'
            ],
            task: {
              title: 'صناعة إعلان مرئي',
              titleEN: 'Create a Visual Ad',
              description: 'اكتب الوصف (Caption) المثالي لصورة عمل متقن تضعه على حساب صالونك.',
              descriptionEN: 'Write the perfect Caption for a pristine work photo you post on your salon\'s account.'
            },
            quiz: [
              {
                id: 'q1',
                question: 'لماذا يعتبر المحتوى المرئي (كالصور والفيديوهات) أقوى تسويق لصالون الحلاقة؟',
                questionEN: 'Why is visual content (photos/videos) the strongest marketing for a barbershop?',
                options: [
                  { id: 'o1', text: 'لأنه بديل عن المهارة الفعلية للحلاق', textEN: 'Because it substitutes the barber\'s actual skill', isCorrect: false },
                  { id: 'o2', text: 'لأن العين تشتري قبل كل شيء، وصور القصات والمكان تبرهن على الكفاءة مباشرة', textEN: 'Because the eye buys first, and photos of cuts/venue directly prove competence', isCorrect: true },
                  { id: 'o3', text: 'لأن الصور تستهلك بيانات إنترنت أقل', textEN: 'Because photos use less internet data', isCorrect: false }
                ],
                explanation: 'الزبون يبحث عن الثقة، والصورة المتقنة لقصة من عملك هي خير دليل.',
                explanationEN: 'Clients look for trust, and a pristine photo of your work is the best proof.'
              }
            ],
            xpReward: 25
          },
          {
            id: 'les_4_4',
            title: 'مشروع التخرج – تنفيذ إطلالة كاملة',
            titleEN: 'Final Project – Executing a Full Look',
            visualType: 'illustration',
            visualUrls: ['https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80'],
            visualDescription: 'رسم توضيحي كبير: صورة رجل بشعر مجعد وغير مرتب. ثم صورة "بعد": قصة Fade نظيفة، لحية مستقيمة محددة، وبشرة نضرة. علامة الشارة الذهبية متوهجة بالزاوية.',
            visualDescriptionEN: 'Large illustration: man with messy curly hair. Then "After": clean Fade, sharp beard lineup, and fresh skin. Glowing gold badge in the corner.',
            duration: '15:00',
            summary: [
              'استخدم كل ما تعلمته من المرحب والتشخيص، للتشذيب، للحلاقة والعناية.',
              'قدم استشارة كاملة، واسأل عن التاريخ والتفضيلات.',
              'تعرف على شكل الوجه، واقترح القصة.',
              'اهتم بأدق التفاصيل والزوايا والألوان.',
              'النظافة والتنظيم وسحر التواصل يصنعان "الحلاق المحترف".'
            ],
            summaryEN: [
              'Use everything you learned from welcome, diagnosis, to trim, shave and care.',
              'Provide a full consultation, asking history and preferences.',
              'Identify the face shape and suggest the cut.',
              'Pay attention to the smallest details, angles, and colorings.',
              'Cleanliness, organization, and social charm make the "Master Barber".'
            ],
            task: {
              title: 'تنفيذ التحول الكامل',
              titleEN: 'Execute the Full Transformation',
              description: 'أحضر زبوناً وهمياً وصف حالته، ثم اكتب المراحل التسع التي ستتخذها لتغيير مظهره.',
              descriptionEN: 'Invent a fictional client, describe his state, then write the 9 steps you\'ll take to transform his look.'
            },
            quiz: [
              {
                id: 'q_final_barb',
                question: 'لقد أنهيت كل المراحل والدروس وأصبحت مستعداً كحلاق محترف ملم بالتقنيات العصرية وإدارة الصالون! اضغط "صحيح" لاستلام الشارة.',
                questionEN: 'You have finished all stages and are ready as a Master Barber with modern techniques and salon management! Click "True" to receive your badge.',
                options: [
                  { id: 'o1', text: 'صحيح', textEN: 'True', isCorrect: true },
                  { id: 'o2', text: 'خاطئ', textEN: 'False', isCorrect: false }
                ],
                explanation: 'ألف مبروك! مقصك جاهز لبناء الثقة ونحت الشخصيات في كل الأحياء.',
                explanationEN: 'Congratulations! Your scissors are ready to build confidence and sculpt personalities in every neighborhood.'
              }
            ],
            xpReward: 100
          }
        ]
      }
    ],
    badges: {
      started: {
        id: 'barb_starter',
        title: 'خبير النظافة',
        titleEN: 'Hygiene Expert',
        description: 'أكملت أساسيات النظافة والتعقيم وفهم الأدوات.',
        descriptionEN: 'Completed basics of hygiene, sterilization, and tools understanding.',
        icon: 'shield'
      },
      completed: {
        id: 'barb_master',
        title: 'حلاق محترف',
        titleEN: 'Master Barber',
        description: 'أنهيت المسار وأصبحت قادراً على إدارة وتحويل مظهر الزبائن ببراعة وثقة.',
        descriptionEN: 'Finished the path and can masterfully transform client looks and manage a salon.',
        icon: 'award'
      }
    }
  }
,
  sanitary_plumbing: sanitaryPlumbingCourse,
  security_agent: securityCourse,
  accounting: accountingCourse,
  autoelectrician: autoElectricianCourse
};