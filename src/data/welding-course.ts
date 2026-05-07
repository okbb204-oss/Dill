import { Course } from './courses';

export const weldingCourse: Course = {
  craftId: 'welding',
  title: 'لحام (تلحيم)',
  titleEN: 'Welder',
  description: 'مسار تعليمي متكامل لاحتراف فن ربط المعادن، من مبادئ القوس الكهربائي إلى تقنيات TIG و MIG الحديثة.',
  descriptionEN: 'A comprehensive educational path to mastering the art of joining metals, from electric arc principles to modern TIG and MIG techniques.',
  badges: {
    started: {
      id: 'wld_start',
      title: 'حامي الورشة',
      titleEN: 'Workshop Guardian',
      description: 'أتممت أولى خطواتك في عالم التلحيم بأمان.',
      descriptionEN: 'Completed your first steps in welding safely.',
      icon: 'shield-check'
    },
    completed: {
      id: 'wld_comp',
      title: 'لحام محترف',
      titleEN: 'Master Welder',
      description: 'أنهيت المسار بنجاح وأنت الآن تبني الهياكل المعدنية باحترافية.',
      descriptionEN: 'Successfully finished the path and now you build metal structures professionally.',
      icon: 'award'
    }
  },
  levels: [
    {
      id: 'wld_lvl_1',
      title: 'السلامة ومبادئ التلحيم الأساسية',
      titleEN: 'Safety and Basic Welding Principles',
      description: 'تجهيز الورشة، معدات الوقاية، والتعرف على المعادن والماكينات.',
      descriptionEN: 'Setting up the workshop, safety gear, and identifying metals and machines.',
      lessons: [
        {
          id: 'wld_l1',
          title: 'السلامة في التلحيم – حماية نفسك ومن حولك',
          titleEN: 'Safety in Welding - Protecting Yourself and Others',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'ورشة لحام، عامل يرتدي خوذة وقفازات ومئزر جلد. ستارة واقية حول منطقة اللحام. طفاية حريق. أيقونة تهوية. تأثير ضوئي خفيف يظهر مخاطر الشرر والغازات.',
          visualDescriptionEN: 'Welding workshop, worker wearing helmet, gloves and leather apron. Protective curtain around the welding area. Fire extinguisher. Ventilation icon. Light effect showing spark and gas hazards.',
          duration: '12 min',
          summary: [
            'ارتدِ خوذة اللحام لحماية عينيك من الأشعة فوق البنفسجية الحارقة.',
            'استخدم القفازات الجلدية الطويلة والمئزر لحماية جلدك من الشرر المتطاير.',
            'تأكد من وجود تهوية جيدة في الورشة لتجنب استنشاق الغازات السامة.',
            'ضع ستائر واقية حول مكان العمل لحماية الآخرين من وهج القوس.',
            'افحص الكابلات والتوصيلات الكهربائية قبل البدء للتأكد من سلامتها.',
            'احتفظ دائماً بطفاية حريق قريبة وجاهزة للاستخدام في حالات الطوارئ.'
          ],
          summaryEN: [
            'Wear a welding helmet to protect your eyes from burning UV rays.',
            'Use long leather gloves and an apron to protect your skin from flying sparks.',
            'Ensure good ventilation in the workshop to avoid inhaling toxic gases.',
            'Place protective curtains around the workspace to protect others from the arc flash.',
            'Inspect cables and electrical connections before starting to ensure safety.',
            'Always keep a fire extinguisher close and ready for emergencies.'
          ],
          task: {
            title: 'قائمة تدقيق السلامة',
            titleEN: 'Safety Checklist',
            description: 'جهز قائمة بتدقيق السلامة (Checklist) مكونة من 8 نقاط يجب فحصها قبل بدء أي عملية لحام.',
            descriptionEN: 'Prepare a safety checklist of 8 points that must be checked before starting any welding operation.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'wld_q1_1',
              question: 'ما هو الجزء الأهم من معدات الوقاية لحماية العين من وهج اللحام؟',
              questionEN: 'What is the most important piece of safety gear to protect eyes from welding glare?',
              options: [
                { id: 'o1', text: 'النظارات الشمسية العادية', textEN: 'Regular sunglasses', isCorrect: false },
                { id: 'o2', text: 'خوذة اللحام ذات الفلتر المناسب', textEN: 'Welding helmet with proper filter', isCorrect: true },
                { id: 'o3', text: 'قفازات الجلد', textEN: 'Leather gloves', isCorrect: false }
              ],
              explanation: 'خوذة اللحام مصممة لتصفية الأشعة الضارة ومنع تلف الشبكية.',
              explanationEN: 'Welding helmets are designed to filter harmful rays and prevent retinal damage.'
            }
          ]
        },
        {
          id: 'wld_l2',
          title: 'أنواع ماكينات اللحام وطريقة عملها',
          titleEN: 'Types of Welding Machines and How They Work',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1533038595764-672688888b6b?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'ماكينة لحام كهربائي (Inverter)، وأخرى أكسي أسيتيلين بجوارها. أسهم توضح الفرق بينهما. رسوم متحركة: قوس كهربائي ينصهر مع قضيب (Electrode).',
          visualDescriptionEN: 'Electric welding machine (Inverter) and an oxy-acetylene one next to it. Arrows showing the difference. Animation: electric arc melting with an electrode.',
          duration: '15 min',
          summary: [
            'ماكينة القوس الكهربائي (MMA) هي الأكثر شيوعاً وسهولة في النقل.',
            'تعتمد الماكينة على تحويل التيار الكهربائي إلى حرارة هائلة لصهر المعدن.',
            'تعمل الماكينات الحديثة بتقنية الـ Inverter لتوفير طاقة مستقرة وخفيفة الوزن.',
            'التيار المستمر (DC) يوفر قوساً أكثر استقراراً لبعض أنواع المعادن.',
            'ماكينة الأكسي أسيتيلين تستخدم الغاز لإنتاج لهب حراري عالي.',
            'ضبط شدة التيار (Amperage) هو المفتاح للحصول على لحام جيد.'
          ],
          summaryEN: [
            'Manual Metal Arc (MMA) welding machines are common and portable.',
            'The machine converts electricity into intense heat to melt the metal.',
            'Modern machines use Inverter technology for stable, lightweight power.',
            'Direct Current (DC) provides a more stable arc for certain metals.',
            'Oxy-acetylene welding uses gas to produce a high-temperature flame.',
            'Adjusting amperage is key to achieving a good weld.'
          ],
          task: {
            title: 'إعدادات الماكينة',
            titleEN: 'Machine Settings',
            description: 'ابحث عن صورة لماكينة لحام Inverter واكتب أهم 3 إعدادات تظهر على لوحتها.',
            descriptionEN: 'Find a picture of an Inverter welding machine and write the top 3 settings shown on its panel.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'wld_q2_1',
              question: 'ما هي الميزة الأساسية لماكينات اللحام التي تعمل بتقنية الـ Inverter؟',
              questionEN: 'What is the primary advantage of Inverter welding machines?',
              options: [
                { id: 'o1', text: 'أنها ثقيلة جداً', textEN: 'They are very heavy', isCorrect: false },
                { id: 'o2', text: 'خفة الوزن واستقرار التيار الكهربائي', textEN: 'Lightweight and electrical current stability', isCorrect: true },
                { id: 'o3', text: 'أنها لا تحتاج لكهرباء', textEN: 'They don\'t need electricity', isCorrect: false }
              ],
              explanation: 'تقنية الإنفيرتر تجعل الماكينة محمولة وتمنح تحكماً أدق في القوس.',
              explanationEN: 'Inverter technology makes the machine portable and gives finer arc control.'
            }
          ]
        },
        {
          id: 'wld_l3',
          title: 'قضبان اللحام (Electrodes) – أنواعها واختيارها',
          titleEN: 'Welding Electrodes - Types and Selection',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1504148455328-c966977a9425?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'مجموعة قضبان لحام بألوان وأرقام مختلفة (E6013، E7018). رسم توضيحي لقضيب يذوب أثناء اللحام ويشكل حوض المنصهر. يد تختار القضيب المناسب حسب سمك المعدن.',
          visualDescriptionEN: 'Collection of welding rods with names (E6013, E7018). Illustration of a rod melting and forming a molten pool. A hand picking the right rod.',
          duration: '10 min',
          summary: [
            'يتكون القضيب من قلب معدني وطبقة مساعدة (Flux) تحمي اللحام.',
            'قضيب E6013 (الروتايل) هو الأنسب للمبتدئين ولأعمال الحدادة العامة.',
            'قضيب E7018 (القاعدي) يستخدم في اللحامات التي تتطلب قوة عالية جداً.',
            'قطر القضيب يجب أن يتناسب مع سمك المعدن الذي تريد لحامه.',
            'يجب تخزين القضبان في مكان جاف لأن الرطوبة تفسد الطبقة المساعدة.',
            'وضعية اللحام (أفقي، عمودي) تحدد أحياناً نوع القضيب المستخدم.'
          ],
          summaryEN: [
            'The electrode consists of a metal core and flux coating that protects the weld.',
            'E6013 (Rutile) rods are best for beginners and general blacksmithing.',
            'E7018 (Basic) rods are used for high-strength welding requirements.',
            'Electrode diameter must match the thickness of the metal being welded.',
            'Rods must be stored in a dry place as moisture ruins the flux coating.',
            'The welding position (flat, vertical) sometimes determines the rod type.'
          ],
          task: {
            title: 'اختيار القضيب المناسب',
            titleEN: 'Choosing the Right Rod',
            description: 'تخيل أنك ستلحم صفيحة حديد سماكة 4 مم. ما هو القضيب المناسب (نوع وقطر) ولماذا؟',
            descriptionEN: 'Imagine welding a 4mm iron plate. What is the appropriate rod (type and diameter) and why?'
          },
          xpReward: 25,
          quiz: [
            {
              id: 'wld_q3_1',
              question: 'لماذا يجب حفظ قضبان اللحام (خاصة القاعدة) في مكان جاف أو أفران خاصة؟',
              questionEN: 'Why must welding rods (especially basic ones) be kept dry or in special ovens?',
              options: [
                { id: 'o1', text: 'لتغيير لونها', textEN: 'To change their color', isCorrect: false },
                { id: 'o2', text: 'لمنع الرطوبة التي تسبب عيوباً في اللحام كالمسامية', textEN: 'To prevent moisture which causes weld defects like porosity', isCorrect: true },
                { id: 'o3', text: 'لتسهيل كسرها', textEN: 'To make them easier to break', isCorrect: false }
              ],
              explanation: 'الرطوبة في الطبقة المساعدة تتحول لبخار ماء يسبب ثقوباً (مسامات) داخل اللحام.',
              explanationEN: 'Moisture in the flux turns into steam, causing holes (porosity) inside the weld.'
            }
          ]
        },
        {
          id: 'wld_l4',
          title: 'فهم المعادن الأساسية وقابلية لحامها',
          titleEN: 'Understanding Parent Metals and Weldability',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1558231061-469600122e23?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'ثلاثة قضبان معدنية: حديد أسود، فولاذ طري لامع، ستانلس ستيل. عدسة مكبرة على سطح كل منها. جدول بسيط يقارن خصائصها.',
          visualDescriptionEN: 'Three metal rods: black iron, shiny mild steel, stainless steel. Magnifying glass on each. Simple comparison table.',
          duration: '15 min',
          summary: [
            'الفولاذ الطري (Mild Steel) هو الأكثر استخداماً في الجزائر لسهولة لحامه.',
            'يجب تنظيف المعدن من الصدأ، الدهان، والشحوم لضمان انصهار سليم.',
            'الفولاذ عالي الكربون يحتاج إلى تسخين مسبق لتجنب التشرخ بعد اللحام.',
            'الستانلس ستيل يتطلب قضبان لحام خاصة وغازات حماية في بعض التقنيات.',
            'الألمنيوم يوصل الحرارة بسرعة ويحتاج لمهارة وتقنيات متقدمة (مثل TIG).',
            'قبل البدء، استخدم الجلاخة (Grinder) لصنع شِطاف (Bevel) في قطع المعادن السميكة.'
          ],
          summaryEN: [
            'Mild steel is most commonly used in Algeria due to its easy weldability.',
            'Metal must be cleaned of rust, paint, and grease to ensure proper fusion.',
            'High carbon steel requires pre-heating to avoid cracking after welding.',
            'Stainless steel requires special welding rods or shielding gases in some methods.',
            'Aluminum conducts heat quickly and needs advanced skills/techniques (like TIG).',
            'Before starting, use an angle grinder to create a bevel on thick metal pieces.'
          ],
          task: {
            title: 'تحديد المعادن',
            titleEN: 'Identifying Metals',
            description: 'ابحث في ورشة أو حول منزلك عن 3 قطع معدنية. حاول تحديد نوعها (حديد، ستانلس، إلخ) ولماذا استخدمت.',
            descriptionEN: 'Find 3 metal pieces in a workshop or your home. Identify their type (iron, stainless, etc.) and use case.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'wld_q4_1',
              question: 'ما هي الخطوة الأولى الضرورية في تحضير قطعة حديد قديمة ومصدأة للحام؟',
              questionEN: 'What is the necessary first step in preparing a rusted old iron piece for welding?',
              options: [
                { id: 'o1', text: 'صب الماء عليها', textEN: 'Pour water on it', isCorrect: false },
                { id: 'o2', text: 'تنظيف السطح بالجلاخة أو الفرشاة السلكية حتى يلمع المعدن', textEN: 'Cleaning the surface with a grinder or wire brush until the metal shines', isCorrect: true },
                { id: 'o3', text: 'بدء اللحام فوق الصدأ مباشرة', textEN: 'Start welding directly over the rust', isCorrect: false }
              ],
              explanation: 'الصدأ والشوائب تمنع التوصيل الكهربائي الجيد وتؤدي للحام ضعيف ومليء بالعيوب.',
              explanationEN: 'Rust and impurities block good electrical conductivity and lead to weak, defective welds.'
            }
          ]
        }
      ]
    },
    {
      id: 'wld_lvl_2',
      title: 'تقنيات اللحام بالقوس الكهربائي الأساسية',
      titleEN: 'Basic Arc Welding Techniques',
      description: 'بدء القوس، الحفاظ على استقراره، وتشكيل أولى خطوط اللحام.',
      descriptionEN: 'Striking the arc, maintaining stability, and forming your first weld beads.',
      lessons: [
        {
          id: 'wld_l5',
          title: 'ضبط ماكينة اللحام وبدء القوس (Striking the Arc)',
          titleEN: 'Setting the Machine and Striking the Arc',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1541810271234-9276228ef87e?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'يد تمسك حامل القضيب، تلامس الصفيحة بخفة ثم ترفع لتوليد القوس. الرسوم المتحركة تظهر القوس مستقراً، الطول الصحيح للقوس.',
          visualDescriptionEN: 'Hand holding the electrode holder, lightly touching the plate then lifting to generate the arc. Animation shows a stable arc and correct length.',
          duration: '18 min',
          summary: [
            'اضبط الأمبير بناءً على قطر القضيب (عادة 30-40 أمبير لكل 1 مم من قطر القضيب).',
            'طريقة "الخدش" (Scratcing) تشبه إشعال الكبريت وهي الأسهل للبدء.',
            'طريقة "الطبطبة" (Tapping) تعتمد على النقر برفق على المعدن والرفع بسرعة.',
            'طول القوس المثالي يجب أن يكون مساوياً تقريباً لقطر قلب القضيب.',
            'إذا كان القوس طويلاً جداً، سيتطاير الشرر بكثرة ويكون اللحام ضعيفاً.',
            'إذا التصق القضيب، حركه بسرعة يميناً ويساراً لتحريره أو افصل الماكينة.'
          ],
          summaryEN: [
            'Set amperage based on rod diameter (usually 30-40 Amps per 1mm of diameter).',
            'The "scratching" method is like striking a match and is easiest for beginners.',
            'The "tapping" method involves lightly tapping the metal and lifting quickly.',
            'Ideal arc length should be approximately equal to the core diameter of the rod.',
            'If the arc is too long, sparks will fly excessively and the weld will be weak.',
            'If the rod sticks, wiggle it quickly left and right to free it or turn off the machine.'
          ],
          task: {
            title: 'محاكاة بدء القوس',
            titleEN: 'Striking Arc Simulation',
            description: 'على لوح تدريب (أو حتى بالرسم)، تدرب على وصف حركة بدء القوس. كم يجب أن يكون طول القوس لقضيب 2.5 مم؟',
            descriptionEN: 'On a training board (or drawing), describe the arc striking motion. What should the arc length be for a 2.5mm rod?'
          },
          xpReward: 25,
          quiz: [
            {
              id: 'wld_q5_1',
              question: 'ماذا يحدث إذا كان طول القوس الكهربائي طويلاً جداً؟',
              questionEN: 'What happens if the electric arc length is too long?',
              options: [
                { id: 'o1', text: 'يصبح اللحام أقوى', textEN: 'The weld becomes stronger', isCorrect: false },
                { id: 'o2', text: 'قلة استقرار القوس، تطاير الشرر، ولحام سطحي ضعيف', textEN: 'Arc instability, excessive spatter, and weak surface weld', isCorrect: true },
                { id: 'o3', text: 'تنخفض حرارة الماكينة', textEN: 'The machine temperature drops', isCorrect: false }
              ],
              explanation: 'القوس الطويل يمنع تركيز الحرارة ويسمح للهواء بتلويث حوض المنصهر.',
              explanationEN: 'A long arc prevents focused heat and allows air to contaminate the molten pool.'
            }
          ]
        },
        {
          id: 'wld_l6',
          title: 'تقنية الخط المستقيم (Straight Bead) – أساس اللحام',
          titleEN: 'Straight Bead Technique - The Foundation of Welding',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1549490339-4d6d6786047c?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'يد تتحرك بثبات على خط مستقيم مرسوم على صفيحة. القوس يتحرك بسرعة موحدة، ويترك خطاً معدنياً ناعماً. مسطرة تقيس عرض الخط.',
          visualDescriptionEN: 'Hand moving steadily on a drawn straight line. The arc moves at uniform speed, leaving a smooth metal bead. A ruler measures the width.',
          duration: '20 min',
          summary: [
            'امسك المقبض بزاوية ميلان حوالي 15-30 درجة في اتجاه الحركة.',
            'حافظ على سرعة حركة ثابتة؛ السرعة الزائدة تجعل الخط رفيعاً وضعيفاً.',
            'البطء الشديد يراكم الكثير من المعدن ويؤدي لحرارة مفرطة قد تخرق المعدن.',
            'يجب أن يكون عرض "حبة اللحام" (Bead) حوالي مرتين إلى ثلاث مرات قطر القضيب.',
            'راقب حوض المنصهر خلف الغلاف (Slag) للتأكد من انتظام الشكل.',
            'بعد الانتهاء، استخدم مطرقة الخبث لإزالة القشرة وكشف اللحام اللامع.'
          ],
          summaryEN: [
            'Hold the handle at a 15-30 degree tilt in the direction of travel.',
            'Maintain a constant travel speed; going too fast makes the bead thin and weak.',
            'Going too slow piles up too much metal and might burn through thin sheets.',
            'The weld bead width should be about 2-3 times the electrode diameter.',
            'Watch the molten pool behind the slag to ensure shape regularity.',
            'After finishing, use a chipping hammer to remove slag and reveal the shiny weld.'
          ],
          task: {
            title: 'تدريب الحركة الثابتة',
            titleEN: 'Steady Motion Practice',
            description: 'ارسم على الورق خطاً مستقيماً، تدرب على تحريك قلم رصاص (محاكاة القضيب) بسرعة ثابتة دون توقف.',
            descriptionEN: 'Draw a straight line on paper. Practice moving a pencil (simulating the rod) at a steady speed without stopping.'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'wld_q6_1',
              question: 'ما هي الزاوية التقريبية المفضلة لإمالة قضيب اللحام أثناء التحرك للأمام؟',
              questionEN: 'What is the preferred approximate tilt angle of the welding rod while moving forward?',
              options: [
                { id: 'o1', text: '90 درجة (عمودي تماماً)', textEN: '90 degrees (vertical)', isCorrect: false },
                { id: 'o2', text: '15 إلى 30 درجة في اتجاه اللحام', textEN: '15 to 30 degrees in the direction of welding', isCorrect: true },
                { id: 'o3', text: '70 درجة للخلف', textEN: '70 degrees backward', isCorrect: false }
              ],
              explanation: 'هذه الزاوية تساعد في دفع الغلاف المحمي (Slag) للخلف بعيداً عن حوض المنصهر.',
              explanationEN: 'This angle helps push the slag back away from the molten pool.'
            }
          ]
        },
        {
          id: 'wld_l7',
          title: 'وصلات اللحام الأساسية (T، الزاوية، التناكبية)',
          titleEN: 'Basic Weld Joints (T, Corner, Butt)',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'ثلاث وصلات: وصلة تناكبية (Butt)، وصلة زاوية (Fillet)، وصلة على شكل T. كل وصلة مرسومة بمقطع عرضي يظهر شكل حبة اللحام.',
          visualDescriptionEN: 'Three joints: Butt joint, Fillet/Corner joint, T-joint. Each drawn with a cross-section showing bead shape.',
          duration: '22 min',
          summary: [
            'الوصلة التناكبية (Butt Joint) هي وضع قطعتين جنباً إلى جنب على نفس المستوى.',
            'وصلة الزاوية (Corner Joint) تستخدم لصناعة الصناديق والإطارات المعدنية.',
            'وصلة T (T-Joint) هي لحام قطعة عمودية فوق قطعة أفقية.',
            'تحتاج الوصلات السميكة إلى "شطف" (Bevel) للسماح للحام بالتغلغل للعمق.',
            'الوضع الأفقي (Flat) هو الأسهل، بينما يتطلب اللحام العمودي تحكماً عالياً.',
            'استخدم تقنية "اللحام النقطي" (Tack Welding) لتثبيت القطع قبل بدء اللحام الكامل.'
          ],
          summaryEN: [
            'Butt joints are made by placing two pieces side-by-side on the same plane.',
            'Corner joints are used for creating boxes and metal frames.',
            'T-joints involve welding a vertical piece onto a horizontal one.',
            'Thick joints need beveling to allow the weld to penetrate deep.',
            'Flat position is easiest, while vertical welding requires high control.',
            'Use "Tack Welding" to hold pieces in place before starting the full weld.'
          ],
          task: {
            title: 'محاكاة الوصلة',
            titleEN: 'Joint Simulation',
            description: 'باستخدام ورق مقوى، قص قطعتين وحاول محاكاة وصلة T. ارسم كيف ستكون حبة اللحام.',
            descriptionEN: 'Using cardboard, cut two pieces and simulate a T-joint. Draw what the weld bead would look like.'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'wld_q7_1',
              question: 'ما هي فائدة "اللحام النقطي" (Tack Welding) في بداية العمل؟',
              questionEN: 'What is the benefit of "Tack Welding" at the start of work?',
              options: [
                { id: 'o1', text: 'لإعطاء لون جميل', textEN: 'To give a nice color', isCorrect: false },
                { id: 'o2', text: 'لتثبيت القطع في مكانها ومنع تشوهها بفعل الحرارة', textEN: 'To hold pieces in place and prevent heat distortion', isCorrect: true },
                { id: 'o3', text: 'لزيادة وزن المعدن', textEN: 'To increase metal weight', isCorrect: false }
              ],
              explanation: 'الحرارة العالية تمدد المعدن، والنقاط تضمن بقاء الزاوية والمسافة صحيحة.',
              explanationEN: 'High heat expands metal; tacking ensures angles and spacing remain correct.'
            }
          ]
        },
        {
          id: 'wld_l8',
          title: 'عيوب اللحام الشائعة وكيفية تجنبها',
          titleEN: 'Common Weld Defects and How to Avoid Them',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'صورة مكبرة لعينة لحام بها: مسامات، شق، عدم انصهار، تحدب زائد. كل عيب يظهر بمؤشر. أسهم تشرح السبب.',
          visualDescriptionEN: 'Enlarged image of weld sample with: porosity, crack, lack of fusion, excessive convexity. Detailed arrows explaining causes.',
          duration: '25 min',
          summary: [
            'المسامية (Porosity) هي ثقوب صغيرة تنتج عن الرطوبة أو قلة غاز الحماية.',
            'عدم التغلغل (Lack of Penetration) يعني أن اللحام لم يصل لعمق الوصلة.',
            'التشرخ (Cracking) قد يحدث بسبب تبريد سريع جداً أو معدن غير متوافق.',
            'القطع الناقص (Undercut) هو حفر في جانب المعدن بسبب أمبير عالٍ جداً.',
            'تضمين الخبث (Slag Inclusion) هو حبس القشرة داخل اللحام بسبب حركة خاطئة.',
            'الحل الأفضل لمعظم العيوب هو: تنظيف جيد، ضبط أمبير صحيح، وسرعة ثابتة.'
          ],
          summaryEN: [
            'Porosity is small holes caused by moisture or lack of shielding gas.',
            'Lack of penetration means the weld didn\'t reach the depth of the joint.',
            'Cracking can occur due to rapid cooling or incompatible metals.',
            'Undercutting is a groove melted into the parent metal due to high Amps.',
            'Slag inclusion is trapping slag inside the weld due to incorrect motion.',
            'The best fix for most defects: thorough cleaning, correct Amps, and steady speed.'
          ],
          task: {
            title: 'تحليل عيب لحام',
            titleEN: 'Weld Defect Analysis',
            description: 'ابحث عن صورة لحام معيب على الإنترنت. حدد نوع العيب الذي تراه، واشرح كيف يمكن إصلاحه.',
            descriptionEN: 'Find an image of a defective weld online. Identify the defect type and explain how to fix it.'
          },
          xpReward: 35,
          quiz: [
            {
              id: 'wld_q8_1',
              question: 'ما هو السبب الرئيسي لحدوث عيب "القطع الناقص" (Undercut)؟',
              questionEN: 'What is the main cause of "Undercutting"?',
              options: [
                { id: 'o1', text: 'سرعة حركة بطيئة جداً', textEN: 'Too slow travel speed', isCorrect: false },
                { id: 'o2', text: 'شدة تيار (Amp) عالية جداً أو زاوية قضيب خاطئة', textEN: 'Too high amperage or incorrect rod angle', isCorrect: true },
                { id: 'o3', text: 'استخدام قضيب لحام جاف', textEN: 'Using a dry welding rod', isCorrect: false }
              ],
              explanation: 'الأمبير العالي يصهر حواف المعدن الأساسي دون تعويضها بمعدن اللحام بسرعة كافية.',
              explanationEN: 'High Amps melt away the edge of the parent metal without replacing it with filler quickly enough.'
            }
          ]
        }
      ]
    },
    {
      id: 'wld_lvl_3',
      title: 'اللحام بالغاز والتقنيات المتقدمة',
      titleEN: 'Gas Welding and Advanced Techniques',
      description: 'شعلة الأكسي أسيتيلين، اللحام بالنحاس، ومقدة عن الـ TIG والـ MIG.',
      descriptionEN: 'Oxy-acetylene flame, brazing, and introduction to TIG and MIG.',
      lessons: [
        {
          id: 'wld_l9',
          title: 'اللحام بالأكسي أسيتيلين – المبدأ والتجهيز',
          titleEN: 'Oxy-Acetylene Welding - Principle and Setup',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'أسطوانتا أوكسجين وأسيتيلين، منظمات ضغط، خراطيم، وحامل الشعلة. لهب أزرق يخرج من الفوهة. يد تضبط الصمامات.',
          visualDescriptionEN: 'Oxygen and acetylene cylinders, regulators, hoses, and torch. Blue flame emerging. A hand adjusting valves.',
          duration: '20 min',
          summary: [
            'يعتمد النظام على خلط غاز الأكسجين مع غاز الوقود (الأسيتيلين) لإنتاج حرارة.',
            'لون خرطوم الأكسجين عادة أخضر أو أزرق، وخرطوم الأسيتيلين أحمر.',
            'منظمات الضغط ضرورية للتحكم في تدفق الغاز من الأسطوانات الكبيرة.',
            'اللهب المحايد (Neutral Flame) هو المستخدم في أغلب عمليات اللحام.',
            'اللهب المؤكسد يحتوي على أكسجين زائد ويستخدم أحياناً في القطع.',
            'يجب دائماً استخدام نظارات واقية داكنة (شيد 5) للحماية من وهج اللهب.'
          ],
          summaryEN: [
            'The system mixes oxygen and fuel gas (acetylene) to produce heat.',
            'Oxygen hoses are usually green/blue; acetylene hoses are red.',
            'Pressure regulators are essential to control gas flow from cylinders.',
            'A Neutral Flame is used for most welding operations.',
            'An Oxidizing Flame has excess oxygen and is sometimes used for cutting.',
            'Always use dark safety goggles (shade 5) to protect from flame glare.'
          ],
          task: {
            title: 'مخطط التوصيلات',
            titleEN: 'Setup Diagram',
            description: 'تعرف على ألوان خراطيم الأوكسجين والأسيتيلين (أزرق وأحمر). ارسم مخططاً مبسطاً للتوصيلات.',
            descriptionEN: 'Learn the oxygen and acetylene hose colors (blue and red). Draw a simplified wiring/piping diagram.'
          },
          xpReward: 25,
          quiz: [
            {
              id: 'wld_q9_1',
              question: 'ما هو لون خرطوم الغاز المخصص للأكسجين في أغلب المعايير؟',
              questionEN: 'What is the standard color for an oxygen gas hose?',
              options: [
                { id: 'o1', text: 'أحمر', textEN: 'Red', isCorrect: false },
                { id: 'o2', text: 'أزرق أو أخضر', textEN: 'Blue or Green', isCorrect: true },
                { id: 'o3', text: 'أصفر', textEN: 'Yellow', isCorrect: false }
              ],
              explanation: 'الأكسجين بالأزرق/الأخضر والأسيتيلين بالأحمر هو المعيار العالمي للأمان والتمييز.',
              explanationEN: 'Blue/Green for oxygen and red for acetylene is the global safety standard.'
            }
          ]
        },
        {
          id: 'wld_l10',
          title: 'اللحام والنحاس بالغاز (Brazing & Welding)',
          titleEN: 'Gas Welding and Brazing',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'عامل يستخدم شعلة غاز مع سلك لحام نحاسي (Laiton) لتوصيل أنبوبين نحاسيين (في مكيف هواء). عملية تسخين ثم تغذية السلك.',
          visualDescriptionEN: 'Worker using a gas torch with a brass rod (Laiton) to connect copper pipes (in AC). Heating then feeding the rod.',
          duration: '18 min',
          summary: [
            'اللحام (Welding) يصهر المعدن الأصلي مع معدن الحشو لدمجهما.',
            'النحاس (Brazing) يصهر فقط معدن الحشو (مثل النحاس أو الفضة) دون صهر المعدن الأصلي.',
            'تستخدم هذه الطريقة بكثرة في إصلاح أجهزة التبريد وتمديدات الغاز والنحاس.',
            'يجب استخدام مادة مساعدة (Flux) لتنظيف السطح ومساعدة النحاس على التدفق.',
            'تتميز هذه الطريقة بالقدرة على ربط معادن مختلفة (مثل الحديد مع النحاس).',
            'التسخين الموزع والمستمر هو سر نجاح اللحام بالنحاس.'
          ],
          summaryEN: [
            'Welding melts the parent metal along with the filler to merge them.',
            'Brazing only melts the filler metal (like brass or silver) without melting the parent.',
            'This method is widely used in refrigeration repairs and gas/copper piping.',
            'Flux must be used to clean the surface and help the filler flow.',
            'This allows joining dissimilar metals (like iron to copper).',
            'Even, continuous heating is the secret to successful brazing.'
          ],
          task: {
            title: 'تطبيقات اللحام بالنحاس',
            titleEN: 'Brazing Applications',
            description: 'اذكر 3 استخدامات للحام بالنحاس في المنزل أو الورشة.',
            descriptionEN: 'List 3 uses for brazing in the home or workshop.'
          },
          xpReward: 25,
          quiz: [
            {
              id: 'wld_q10_1',
              question: 'ما هو الفرق الجوهري بين اللحام (Welding) واللحام بالنحاس (Brazing)؟',
              questionEN: 'What is the fundamental difference between Welding and Brazing?',
              options: [
                { id: 'o1', text: 'اللحام بالنحاس يحتاج كهرباء', textEN: 'Brazing needs electricity', isCorrect: false },
                { id: 'o2', text: 'في اللحام ينصهر المعدن الأصلي، بينما في النحاس ينصهر سلك الحشو فقط', textEN: 'In welding the parent metal melts; in brazing only the filler melts', isCorrect: true },
                { id: 'o3', text: 'اللحام بالنحاس أضعف دائماً', textEN: 'Brazing is always weaker', isCorrect: false }
              ],
              explanation: 'في النحاس، يتدفق المعدن السائل بين القطع بفعل الخاصية الشعرية دون صهرها.',
              explanationEN: 'In brazing, liquid metal flows between pieces via capillary action without melting them.'
            }
          ]
        },
        {
          id: 'wld_l11',
          title: 'اللحام بغاز التنغستن (TIG) – الدقة والجمال',
          titleEN: 'TIG Welding - Precision and Aesthetics',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'ماكينة TIG، قطب تنغستن، سلك حشو يضاف باليد الأخرى. قوس كهربائي ناعم جداً. عامل يرتدي خوذة أوتوماتيكية.',
          visualDescriptionEN: 'TIG machine, tungsten electrode, filler rod added by other hand. Smooth arc. Worker in auto-helmet.',
          duration: '22 min',
          summary: [
            'يعتبر ملك اللحامات لنظافته ودقته العالية وجمال خطوطه.',
            'يستخدم قطب تنغستن لا ينصهر (Non-consumable) لتوليد القوس.',
            'يضاف معدن الحشو يدوياً باليد الأخرى، مما يتطلب مهارة وتنسيقاً.',
            'يستخدم غاز الأرغون الخامل لحماية حوض اللحام من الهواء.',
            'هو الحل الأمثل للحام الألمنيوم والستانلس ستيل والأنابيب الرقيقة.',
            'لا ينتج عنه أي شرر أو خبث (Slag)، مما يجعله نظيفاً جداً.',
            'يتطلب خوذة لحام أوتوماتيكية سريعة الاستجابة بسبب شدة وهج القوس.'
          ],
          summaryEN: [
            'Often called the "king of welds" for its cleanliness, precision, and beauty.',
            'Uses a non-consumable tungsten electrode to generate the arc.',
            'Filler metal is hand-fed with the other hand, requiring great coordination.',
            'Uses Argon gas to protect the weld pool from the atmosphere.',
            'Ideal for aluminum, stainless steel, and thin-walled pipes.',
            'Produces no sparks or slag, making it extremely clean.',
            'Requires a fast-reacting auto-darkening helmet due to intense glare.'
          ],
          task: {
            title: 'مقارنة التقنيات',
            titleEN: 'Comparing Techniques',
            description: 'قارن بين القضيب العادي (MMA) وسلك TIG من حيث طريقة التغذية.',
            descriptionEN: 'Compare regular stick (MMA) and TIG rod in terms of feeding method.'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'wld_q11_1',
              question: 'ما هو نوع الغاز الأكثر استخداماً كغاز حماية في لحام الـ TIG؟',
              questionEN: 'What is the most commonly used shielding gas in TIG welding?',
              options: [
                { id: 'o1', text: 'الأوكسجين', textEN: 'Oxygen', isCorrect: false },
                { id: 'o2', text: 'غاز الأرغون (Argon)', textEN: 'Argon gas', isCorrect: true },
                { id: 'o3', text: 'ثنائي أكسيد الكربون', textEN: 'Carbon dioxide', isCorrect: false }
              ],
              explanation: 'الأرغون غاز خامل يحمي قطب التنغستن وحوض المنصهر من التأكسد.',
              explanationEN: 'Argon is an inert gas that shields the tungsten and pool from oxidation.'
            }
          ]
        },
        {
          id: 'wld_l12',
          title: 'اللحام بالغاز النشط (MIG/MAG) – السرعة والإنتاجية',
          titleEN: 'MIG/MAG Welding - Speed and Productivity',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'مسدس لحام MIG، بكرة سلك داخل الماكينة، غاز حماية يخرج من الفوهة. سرعة عالية، سلك يخرج تلقائياً.',
          visualDescriptionEN: 'MIG torch, wire spool inside machine, shielding gas emerging. High speed, auto-feeding wire.',
          duration: '20 min',
          summary: [
            'يسمى "لحام القوس شبه الأوتوماتيكي" لأن السلك يخرج تلقائياً من المسدس.',
            'يستخدم بكرة سلك مستمرة، مما يعني إمكانية لحام خطوط طويلة دون توقف.',
            'MIG يستخدم غازات خاملة (مثل الأرغون)، و MAG يستخدم غازات نشطة (مثل CO2).',
            'سهل التعلم للمبتدئين مقارنة بالـ TIG والـ MMA.',
            'مثالي لمصانع السيارات وورش بناء الهياكل المعدنية الكبيرة لسرعته.',
            'يسمح بلحام المعادن الرقيقة والمتوسطة بكفاءة عالية جداً.'
          ],
          summaryEN: [
            'Often called semi-automatic because wire feeds automatically from the gun.',
            'Uses a continuous wire spool, allowing long welds without stopping.',
            'MIG uses inert gases (Argon); MAG uses active gases (Carbon Dioxide CO2).',
            'Easier for beginners to learn compared to TIG or Stick (MMA).',
            'Ideal for car factories and large steel frameworks due to its speed.',
            'Enables efficient welding of thin and medium metals.'
          ],
          task: {
            title: 'مميزات الـ MIG',
            titleEN: 'MIG Advantages',
            description: 'ابحث عن فيديو قصير (أو تخيل) يوضح لحام MIG. اكتب 3 مميزات لهذه الطريقة.',
            descriptionEN: 'Imagine or watch a MIG welding clip. Write down 3 advantages of this method.'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'wld_q12_1',
              question: 'لماذا يعتبر لحام الـ MIG أسرع من لحام الـ MMA (القوس العادي)؟',
              questionEN: 'Why is MIG welding faster than MMA (Stick)?',
              options: [
                { id: 'o1', text: 'لأن الماكينة أصغر', textEN: 'Because the machine is smaller', isCorrect: false },
                { id: 'o2', text: 'بسبب التغذية التلقائية والمستمرة لسلك اللحام (لا حاجة لتبديل القضبان)', textEN: 'Due to automatic, continuous wire feeding (no need to change sticks)', isCorrect: true },
                { id: 'o3', text: 'لأنه لا يستخدم غازاً', textEN: 'Because it doesn\'t use gas', isCorrect: false }
              ],
              explanation: 'الاستمرارية في التغذية تسمح بالعمل المتواصل لفترات طويلة وزيادة الإنتاج.',
              explanationEN: 'Continuous feeding allows long periods of uninterrupted work, boosting production.'
            }
          ]
        }
      ]
    },
    {
      id: 'wld_lvl_4',
      title: 'فحص اللحام والاحتراف',
      titleEN: 'Welding Inspection and Professionalism',
      description: 'جودة اللحام، العمل في المواقع، وإدارة ورشتك الخاصة.',
      descriptionEN: 'Weld quality, on-site work, and managing your own workshop.',
      lessons: [
        {
          id: 'wld_l13',
          title: 'فحص جودة اللحام واختباراته',
          titleEN: 'Weld Quality Inspection and Testing',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'مفتش يستخدم عدسة مكبرة ومسطرة لحام، يفحص استقامة اللحام وعدم وجود تشققات. رسم متحرك لاختبار السائل المخترق (Dye Penetrant).',
          visualDescriptionEN: 'Inspector using magnifying glass and welding gauge. Animation of Dye Penetrant Testing.',
          duration: '20 min',
          summary: [
            'الفحص البصري (Visual Inspection) هو الخطوة الأولى والأهم.',
            'استخدم "مسطرة اللحام" لقياس حجم ساق اللحام وتحدبه.',
            'يجب أن يكون اللحام مستقيماً، خالياً من الثقوب والشقوق والقطع الناقص.',
            'اختبار السائل المخترق (Dye Penetrant) يكشف الشقوق الدقيقة جداً على السطح.',
            'الاختبارات غير المتلفة (NDT) تشمل الأشعة السينية والموجات فوق الصوتية.',
            'اللحام المحترف يفتخر بجودة عمله بقدر قوته وتماسك أجزائه.'
          ],
          summaryEN: [
            'Visual inspection is the first and most important step.',
            'Use a "welding gauge" to measure leg size and convexity.',
            'The weld should be straight, free of holes, cracks, and undercuts.',
            'Dye Penetrant testing reveals tiny surface cracks.',
            'Non-Destructive Testing (NDT) includes X-rays and Ultrasound.',
            'A professional welder takes pride in the aesthetics of their work as much as its strength.'
          ],
          task: {
            title: 'الفحص البصري',
            titleEN: 'Visual Inspection Task',
            description: 'تفقد أي وصلة لحام موجودة حولك (بوابة حديدية، كرسي). صف جودتها بالعين المجردة.',
            descriptionEN: 'Inspect any weld joint around you (iron gate, chair). Describe its quality by naked eye.'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'wld_q13_1',
              question: 'ماذا يسمى النوع من الاختبارات الذي يفحص اللحام دون تدمير القطعة؟',
              questionEN: 'What is the name for testing methods that inspect welds without destroying the piece?',
              options: [
                { id: 'o1', text: 'الاختبارات المتلفة', textEN: 'Destructive testing', isCorrect: false },
                { id: 'o2', text: 'الاختبارات غير المتلفة (NDT)', textEN: 'Non-Destructive Testing (NDT)', isCorrect: true },
                { id: 'o3', text: 'اختبار الكسر', textEN: 'Break test', isCorrect: false }
              ],
              explanation: 'NDT يسمح بفحص سلامة الهياكل (كالجسور) وهي قيد الخدمة.',
              explanationEN: 'NDT allows checking the integrity of structures (like bridges) while they are in service.'
            }
          ]
        },
        {
          id: 'wld_l14',
          title: 'اللحام في المواقع (On-Site) والهياكل الكبيرة',
          titleEN: 'On-Site Welding and Large Structures',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'لحام على سقالة يرتدي حزام أمان، يلحم أنبوباً في خندق. مولد كهرباء محمول. راية رياح واقية.',
          visualDescriptionEN: 'Welder on a scaffold wearing safety belt, welding a pipe in a trench. Portable generator. Wind shield.',
          duration: '22 min',
          summary: [
            'العمل في الموقع يختلف عن الورشة؛ يجب التعامل مع الرياح والرطوبة.',
            'نستخدم مولدات كهرباء (Generators) محمولة عند انعدام الكهرباء في الموقع.',
            'يجب استخدام مظلات أو حواجز واقية من الرياح عند اللحام بالغاز أو الـ MIG.',
            'أمان المرتفعات: ارتداء حزام الأمان (Harness) والعمل على سقالات مثبتة.',
            'لحام الأنابيب (6G) هو أحد أعلى مستويات الاحترافية في المواقع.',
            'إدارة المساحة والوقت في الموقع تتطلب تنظيماً وتجهيزاً مسبقاً لكل الأدوات.'
          ],
          summaryEN: [
            'Field work differs from the workshop; you must handle wind and humidity.',
            'Portable generators are used when on-site power is unavailable.',
            'Wind shields/barriers must be used when gas-shielded welding in breezy conditions.',
            'Heights safety: wearing a harness and working on secured scaffolding.',
            'Pipe welding (6G position) is one of the highest professional levels on-site.',
            'Managing on-site space and time requires pre-planning all tool logistics.'
          ],
          task: {
            title: 'احتياطات الموقع',
            titleEN: 'Site Precautions',
            description: 'تخيل أنك ستلحم أنبوب ماء في الشارع. ما هي 4 احتياطات إضافية ستتخذها مقارنة بالورشة؟',
            descriptionEN: 'Imagine welding a water pipe in the street. What are 4 extra precautions you\'d take compared to a workshop set?'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'wld_q14_1',
              question: 'لماذا تعتبر الرياح القوية مشكلة عند اللحام بتقنيات الـ MIG أو TIG في المواقع؟',
              questionEN: 'Why is strong wind a problem for MIG or TIG welding on-site?',
              options: [
                { id: 'o1', text: 'لأنها تبرد المعدن بسرعة', textEN: 'Because it cools the metal too fast', isCorrect: false },
                { id: 'o2', text: 'لأنها تشتت غاز الحماية مما يؤدي لمسامية اللحام', textEN: 'Because it disperses shielding gas, leading to weld porosity', isCorrect: true },
                { id: 'o3', text: 'لأنها تطفئ الماكينة', textEN: 'Because it turns off the machine', isCorrect: false }
              ],
              explanation: 'بدون غاز الحماية، يتفاعل المعدن المنصهر فوراً مع أكسجين الهواء ويفسد اللحام.',
              explanationEN: 'Without shielding gas, molten metal reacts instantly with atmospheric oxygen, ruining the weld.'
            }
          ]
        },
        {
          id: 'wld_l15',
          title: 'إدارة ورشة لحام وتكلفة الأعمال',
          titleEN: 'Managing a Welding Workshop and Business Costs',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'ورشة لحام مرتبة، أعمال معروضة (بوابات، درابزين). هاتف يعرض صفحة فيسبوك للورشة بتقييمات ممتازة. آلة حاسبة وفواتير.',
          visualDescriptionEN: 'Tidy workshop, displayed works (gates, railings). Phone showing workshop FB page with reviews. Calculator and invoices.',
          duration: '25 min',
          summary: [
            'تنظيم الورشة: منطقة تقطيع، منطقة تجميع ولحام، ومنطقة دهان وتشطيب.',
            'شراء المعدات الأساسية: ماكينة، جلاخة، مثقاب، ومناضد لحام حديدية.',
            'تسعير العمل يعتمد على: وزن الحديد، استهلاك الكهرباء، الغاز، والأسلاك، والوقت.',
            'التسويق: صور أعمالك باحترافية وانشرها على وسائل التواصل الاجتماعي.',
            'السمعة الطيبة تأتي من دقة المواعيد ونظافة اللحام (الجودة التشطيبية).',
            'احسب هامش الربح بعد خصم كل المصاريف لضمان استدامة ورشتك.'
          ],
          summaryEN: [
            'Workshop layout: cutting area, assembly/welding area, and painting/finishing area.',
            'Core equipment needed: machine, grinder, drill, and steel welding tables.',
            'Pricing depends on: iron weight, power/gas/wire consumption, and time/labor.',
            'Marketing: take professional photos of your work and post on social media.',
            'A good reputation comes from meeting deadlines and clean welding (finish quality).',
            'Calculate profit margins after deducting all expenses to ensure sustainability.'
          ],
          task: {
            title: 'حساب تكلفة',
            titleEN: 'Costing Task',
            description: 'احسب تكلفة بوابة حديدية بسيطة (تخيلية): 20 كغ حديد بسعر 200 دج/كغ، 10 قضبان لحام، 3 ساعات عمل بـ 800 دج/ساعة.',
            descriptionEN: 'Calculate a simple iron gate cost: 20kg iron @ 200DA/kg, 10 rods, 3 hours labor @ 800DA/hr.'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'wld_q15_1',
              question: 'ما هو العامل الذي يحدد "سمعة" ورشة اللحام في السوق الجزائري؟',
              questionEN: 'What factor determines the "reputation" of a welding workshop in the Algerian market?',
              options: [
                { id: 'o1', text: 'امتلاك أكبر ماكينة لحام', textEN: 'Having the biggest machine', isCorrect: false },
                { id: 'o2', text: 'الدقة في المواعيد وجودة التشطيب النهائي للأعمال', textEN: 'Punctuality and high-quality final finishing of works', isCorrect: true },
                { id: 'o3', text: 'أرخص سعر في الولاية دائماً', textEN: 'Always being the cheapest price in the state', isCorrect: false }
              ],
              explanation: 'الزبون يفضل الجودة والالتزام على السعر المنخفض الذي قد يصاحبه عمل رديء.',
              explanationEN: 'Clients value quality and commitment over low prices accompanied by poor workmanship.'
            }
          ]
        },
        {
          id: 'wld_l16',
          title: 'مشروع التخرج – تصنيع هيكل معدني متكامل',
          titleEN: 'Capstone Project - Fabricating a Full Metal Structure',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1549490333-e5d36e2f1704?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'رسم فني لدرابزين سلم حديدي بأبعاده. صورة للدرابزين النهائي مركب وملحوم باحترافية. شهادة تخرج ذهبية.',
          visualDescriptionEN: 'Technical drawing of a steel staircase railing with dimensions. Photo of final railing installed and welded. Gold graduation certificate.',
          duration: '60 min',
          summary: [
            'الرسم والمخطط: ابدأ برسم فني لقطعة الأثاث أو الهيكل (طاولة مثلاً).',
            'التجهيز: قص الحديد بالزوايا الصحيحة (45 درجة للإطارات).',
            'التجميع: استخدم اللحام النقطي (Tack) أولاً للتأكد من استواء الزوايا الزاوية القائمة.',
            'التنفيذ: قم باللحام الكامل للوصلات مع مراعاة تسلسل يقلل التشوه.',
            'التشطيب: صنفر اللحامات بالجلاخة، نظفها من الخبث، وادهنها بطبقة حماية.',
            'الختام: مبروك أيها اللحام المحترف! لقد صنعت شيئاً يدوم طويلاً.'
          ],
          summaryEN: [
            'Drawing: Start with a technical sketch of the piece/structure (e.g., a table).',
            'Preparation: Cut iron at correct angles (45 degrees for frames).',
            'Assembly: Use tack welding first to ensure perfectly square corners.',
            'Execution: Perform full welds while following a sequence that minimizes distortion.',
            'Finishing: Grind welds smooth, clean off slag, and apply a protective paint coat.',
            'Closing: Congratulations, Master Welder! You have created something that lasts.'
          ],
          task: {
            title: 'مشروع الطاولة',
            titleEN: 'Table Capstone',
            description: 'تخيل تصنيع إطار حديدي لطاولة (2م × 80سم × 90سم). صف خطوات التصنيع بالتفصيل وقدم عرض سعر تقديري كما لو كنت ستسلمه لرئيس ورشة.',
            descriptionEN: 'Imagine fabricating a 2m x 80cm x 90cm table frame. Describe manufacturing steps in detail and provide a dummy quote to a workshop manager.'
          },
          xpReward: 100
        }
      ]
    }
  ]
};
