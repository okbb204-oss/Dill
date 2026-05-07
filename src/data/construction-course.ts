import { Course } from "./courses";

export const constructionCourse: Course = {
  craftId: 'construction',
  title: 'البناء',
  titleEN: 'Construction / Masonry',
  description: 'في ورشات البناء الجزائرية، حيث ترتفع الجدران وتتشكل العمارات، يقف البناء كالعمود الفقري لكل مشروع سكني أو عمراني. هو من يقرأ المخططات، يخلط المواد، ويرفع الحجر والطوب ليُخرج إلى الوجود منازل، مدارس، ومستشفيات. حرفة البناء ليست مجرد رصّ للحجارة، بل هي فن تحويل الفراغ إلى فضاءات صالحة للحياة، تتطلب قوة جسدية، ودقة متناهية في القياس، وفهماً عميقاً لمواد البناء. من الأساسات إلى الأسقف، يعمل البناء في كل الطقسات، معتمداً على مسطرينه وميزان مائه، مؤمناً بأن كل جدار يقيمه هو شهادة على إتقانه. حرفة البناء مضمونة الطلب في كل شبر من أرض الوطن، وتناسب من يحب العمل في الهواء الطلق، ولا يهاب التحديات البدنية.',
  descriptionEN: 'On Algerian construction sites, where walls rise and buildings take shape, the mason stands as the backbone of every residential or urban project. They read blueprints, mix materials, and lay stone and brick to bring into existence homes, schools, and hospitals. Masonry is not merely stacking stones; it\'s the art of transforming void into livable spaces, demanding physical strength, meticulous measurement accuracy, and deep knowledge of building materials. From foundations to roofs, the mason works in all weather, relying on their trowel and spirit level, believing every wall they erect is a testament to their craftsmanship. The masonry trade is guaranteed in demand across every inch of the country, suited for those who love working outdoors and do not shy away from physical challenges.',
  levels: [
    {
      id: 'cons_lvl_1',
      title: 'المرحلة 1: أساسيات البناء والسلامة',
      titleEN: 'Stage 1: Masonry Basics and Safety',
      description: 'تعرف على أساسيات المهنة، قواعد السلامة، المواد الأولية، والأدوات اليدوية.',
      descriptionEN: 'Learn the fundamentals of the trade, safety rules, raw materials, and hand tools.',
      lessons: [
        {
          id: 'cons_1_1',
          title: 'مدخل إلى حرفة البناء وأدوار البنّاء',
          titleEN: 'Introduction to Masonry and the Mason\'s Roles',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1541888082003-8889ee4a46a5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'بناء واثق يحمل خوذته، يقف أمام عمارة قيد الإنشاء، ممسكاً بالمسطرين. خريطة الجزائر خلفه.',
          visualDescriptionEN: 'A confident mason holding a helmet, standing in front of a building under construction, holding a trowel. Map of Algeria in the background.',
          duration: '05:00',
          summary: [
            'البناء هو العمود الفقري لأي مشروع عمراني.',
            'أهمية المهنة في تنمية المجتمع وتطوير المدن.',
            'تنويع أنواع المباني يتطلب تنوعاً في تقنيات البناء.',
            'تطور المهنة من الأدوات التقليدية إلى المعدات الحديثة.',
            'مهنة البناء تضمن أجراً مستقراً ومطلوبة بكثرة في السوق.',
            'فرص العمل تشمل الشركات الخاصة والعامة والمشاريع الحرة.'
          ],
          summaryEN: [
            'The mason is the backbone of any urban project.',
            'Importance of the profession in community and city development.',
            'Various building types require diverse masonry techniques.',
            'Evolution of the profession from traditional to modern tools.',
            'Masonry ensures stable income and high market demand.',
            'Job opportunities include private, public, and freelance projects.'
          ],
          task: {
            title: 'مراقبة المباني',
            titleEN: 'Building observation',
            description: 'تأمل مباني حيك. اكتب أنواع المواد المستخدمة في بنائها.',
            descriptionEN: 'Observe buildings in your neighborhood. Write down the materials used to build them.'
          },
          quiz: [
            {
              id: 'cons_1_1_q1',
              question: 'ما هي الأداة الأساسية التي تعتبر رمزاً لمهنة البناء؟',
              questionEN: 'What is the primary tool that is considered the symbol of masonry?',
              options: [
                { id: 'o1', text: 'المسطرين (الكريك الصغير)', textEN: 'Trowel', isCorrect: true },
                { id: 'o2', text: 'المقشة', textEN: 'Broom', isCorrect: false },
                { id: 'o3', text: 'فرشاة الطلاء', textEN: 'Paint brush', isCorrect: false }
              ],
              explanation: 'المسطرين هو الأداة الأساسية والملاصقة ليد البناء في كل أعمال الخلط والبناء.',
              explanationEN: 'The trowel is the essential tool attached to the mason\'s hand in mixing and building.'
            }
          ],
          xpReward: 30
        },
        {
          id: 'cons_1_2',
          title: 'السلامة المهنية في ورشة البناء',
          titleEN: 'Occupational Safety on the Construction Site',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'ورشة بناء، عمال بخوذات وأحذية أمان، سقالات مؤمنة، لافتات "السلامة أولاً"، طفاية حريق.',
          visualDescriptionEN: 'Construction site, workers with helmets and safety shoes, secured scaffolding, "Safety First" signs, fire extinguisher.',
          duration: '06:00',
          summary: [
            'استخدام معدات الوقاية الشخصية (PPE) إلزامي للجميع.',
            'الالتزام بقواعد العمل على السقالات لتجنب السقوط.',
            'التعامل الآمن مع الآلات الثقيلة ومعدات الرفع.',
            'معرفة إجراءات الإسعافات الأولية الأساسية في الموقع.'
          ],
          summaryEN: [
            'Using Personal Protective Equipment (PPE) is mandatory for everyone.',
            'Adhering to scaffolding safety rules to prevent falls.',
            'Safe handling of heavy machinery and lifting equipment.',
            'Knowing basic first-aid procedures on site.'
          ],
          task: {
            title: 'ملصق السلامة',
            titleEN: 'Safety poster',
            description: 'ارسم ملصقاً توعوياً عن السلامة في الورشة.',
            descriptionEN: 'Draw an awareness poster about safety in the workshop.'
          },
          quiz: [
            {
              id: 'cons_1_2_q1',
              question: 'أي من المعدات التالية ضرورية لتجنب إصابات الرأس في الورشة؟',
              questionEN: 'Which of the following equipment is essential to prevent head injuries on site?',
              options: [
                { id: 'o1', text: 'القفازات', textEN: 'Gloves', isCorrect: false },
                { id: 'o2', text: 'خوذة البناء (Casque)', textEN: 'Hard hat (Casque)', isCorrect: true },
                { id: 'o3', text: 'حذاء الأمان', textEN: 'Safety shoes', isCorrect: false }
              ],
              explanation: 'خوذة البناء مصممة لحماية الرأس من الأجسام الساقطة والاصطدامات المحتملة.',
              explanationEN: 'Hard hats are designed to protect the head from falling objects and potential impacts.'
            }
          ],
          xpReward: 30
        },
        {
          id: 'cons_1_3',
          title: 'مواد البناء الأساسية (الإسمنت، الرمل، الحصى، الماء)',
          titleEN: 'Basic Construction Materials (Cement, Sand, Gravel, Water)',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'رسوم توضيحية لأكياس إسمنت، كومة رمل، حصى، وخلاطة.',
          visualDescriptionEN: 'Illustrations of cement bags, a pile of sand, gravel, and a concrete mixer.',
          duration: '07:00',
          summary: [
            'الإسمنت هو المادة الرابطة التي تمنح القوة للمزيج.',
            'الرمل المناسب يجب أن يكون خشناً وخالياً من الشوائب الطينية.',
            'الماء النظيف الصالح للشرب هو الأفضل للاستخدام في الخلط.',
            'الحصى ضروري لإعداد الخرسانة المسلحة وتعبئة الفراغات.'
          ],
          summaryEN: [
            'Cement is the binding agent providing strength to the mix.',
            'The right sand must be coarse and free from clay impurities.',
            'Clean, drinkable water is best used for mixing.',
            'Gravel is essential for making reinforced concrete and filling voids.'
          ],
          task: {
            title: 'المواد في محيطك',
            titleEN: 'Materials in your surroundings',
            description: 'اجمع عينات من الرمل والحصى، ولاحظ الفروقات.',
            descriptionEN: 'Collect samples of sand and gravel, and observe the differences.'
          },
          quiz: [
            {
              id: 'cons_1_3_q1',
              question: 'ما هو المكون الذي يربط بين الرمل والحصى لصنع الخرسانة؟',
              questionEN: 'What component binds sand and gravel to make concrete?',
              options: [
                { id: 'o1', text: 'الإسمنت والماء', textEN: 'Cement and water', isCorrect: true },
                { id: 'o2', text: 'الرمل الناعم', textEN: 'Fine sand', isCorrect: false },
                { id: 'o3', text: 'الحديد', textEN: 'Steel', isCorrect: false }
              ],
              explanation: 'الإسمنت عند تفاعله مع الماء يكوّن عجينة لاصقة قوية تربط الحصى والرمل ببعضهما.',
              explanationEN: 'When cement reacts with water, it forms a strong adhesive paste binding gravel and sand.'
            }
          ],
          xpReward: 30
        },
        {
          id: 'cons_1_4',
          title: 'أدوات البناء اليدوية واستخدامها',
          titleEN: 'Hand Tools for Masonry and Their Uses',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'عرض منظم للمسطرين، الميزان، الخيط، المطرقة. يد تمسك بكل أداة وتظهر طريقة استخدامها.',
          visualDescriptionEN: 'Organized display of trowel, spirit level, line pin, hammer. A hand holds each tool showing how to use it.',
          duration: '06:30',
          summary: [
            'المسطرين يستخدم لوضع الملاط وتسويته.',
            'الميزان (Niveau) هام جداً لضمان استقامة الجدران أفقياً وعمودياً.',
            'خيط الزيارة يستخدم كدليل مستقيم لصف الطوب.',
            'المطرقة ضرورية لتقسيم الطوب وكسره للمقاسات المطلوبة.',
            'القدّة (مسطرة ألمنيوم) تستخدم لتسوية مساحات كبيرة كاللياسة.'
          ],
          summaryEN: [
            'The trowel is used for laying and spreading mortar.',
            'The spirit level is crucial for ensuring walls are horizontal and vertical.',
            'The mason\'s line is used as a straight guide for laying bricks.',
            'The hammer is essential for splitting and breaking bricks to size.',
            'The straight edge (aluminum ruler) is used for leveling large areas like plaster.'
          ],
          tools: [
            { name: 'المسطرين', nameEN: 'Trowel', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80' },
            { name: 'خيط البناء', nameEN: 'Mason line', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80' }
          ],
          task: {
            title: 'استخدام المسطرين',
            titleEN: 'Using a trowel',
            description: 'تدرب على الإمساك بالمسطرين (أو أي أداة مشابهة) وتخيل استخدامه.',
            descriptionEN: 'Practice holding a trowel (or a similar tool) and imagine using it.'
          },
          quiz: [
            {
              id: 'cons_1_4_q1',
              question: 'ما هو الهدف الأساسي من استخدام خيط البناء (خيط الزيارة)؟',
              questionEN: 'What is the primary purpose of using a mason\'s line?',
              options: [
                { id: 'o1', text: 'قياس المسافة بين الأبواب', textEN: 'Measuring distance between doors', isCorrect: false },
                { id: 'o2', text: 'ضمان الاستقامة الأفقية لصف الطوب', textEN: 'Ensuring horizontal straightness of the brick course', isCorrect: true },
                { id: 'o3', text: 'التأكد من عمودية الجدار', textEN: 'Ensuring verticality of the wall', isCorrect: false }
              ],
              explanation: 'خيط البناء يُمثل المسار المستقيم المرجعي الذي يجب أن يتبعه صف الطوب.',
              explanationEN: 'The mason\'s line provides a straight reference path for the brick course to follow.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'cons_lvl_2',
      title: 'المرحلة 2: الخلط والتقنيات الأساسية',
      titleEN: 'Stage 2: Mixing and Basic Techniques',
      description: 'تعلم فن الخلط الصحيح للملاط وتقنيات رص الطوب الأساسية.',
      descriptionEN: 'Learn the proper mortar mixing art and basic bricklaying techniques.',
      lessons: [
        {
          id: 'cons_2_1',
          title: 'تحضير الملاط (المونة) – نسب الخلط الصحيحة',
          titleEN: 'Preparing Mortar – Correct Mixing Ratios',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1623869680327-02058bc94d4d?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'بناء يخلط الإسمنت والرمل في عربة يدوية، ثم يضيف الماء تدريجياً ويخلط حتى يصبح القوام مناسباً.',
          visualDescriptionEN: 'A mason mixing cement and sand in a wheelbarrow, then gradually adding water until reaching the right consistency.',
          duration: '06:00',
          summary: [
            'نسب الخلط الشائعة: 1 جزء إسمنت إلى 3 أو 4 أجزاء رمل.',
            'أهمية الخلط المسبق الجاف (السيك) قبل إضافة الماء.',
            'إضافة الماء تدريجياً لاختبار القوام المناسب.',
            'القوام الجيد: يلتصق بالمسطرين ولكن لا ينسكب كالماء المنهمر.'
          ],
          summaryEN: [
            'Common mixing ratios: 1 part cement to 3 or 4 parts sand.',
            'Importance of dry mixing before adding water.',
            'Adding water gradually to test for the appropriate consistency.',
            'Good consistency: Sticks to the trowel but doesn\'t run like water.'
          ],
          task: {
            title: 'تجربة الخلط',
            titleEN: 'Mixing experiment',
            description: 'اخلط كمية صغيرة من الإسمنت والرمل في المنزل (بإشراف) وسجل النسب.',
            descriptionEN: 'Mix a small amount of cement and sand at home (under supervision) and record the ratios.'
          },
          quiz: [
            {
              id: 'cons_2_1_q1',
              question: 'ما هي القاعدة الأساسية عند إضافة الماء للملاط للحفاظ على القوام التماسك؟',
              questionEN: 'What is the basic rule when adding water to mortar to keep its cohesive consistency?',
              options: [
                { id: 'o1', text: 'الإضافة تدريجياً', textEN: 'Gradual addition', isCorrect: true },
                { id: 'o2', text: 'سكبه دفعة واحدة', textEN: 'Pouring it all at once', isCorrect: false },
                { id: 'o3', text: 'استخدام الماء الساخن', textEN: 'Using hot water', isCorrect: false }
              ],
              explanation: 'الإضافة التدريجية تمنع الفقدان المفاجئ لصلابة وتماسك الملاط وتسهل التحكم بقوامه.',
              explanationEN: 'Gradual addition prevents sudden loss of mortar stiffness and cohesion, making it easier to control.'
            }
          ],
          xpReward: 30
        },
        {
          id: 'cons_2_2',
          title: 'رصّ الطوب – تقنية البناء المستقيم',
          titleEN: 'Bricklaying – Straight Wall Technique',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1518688242080-692b2361cfaf?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'بناء يرص الطوب بجانب بعضه، مستخدماً الخيط لضمان الاستقامة، ويضبط بالميزان.',
          visualDescriptionEN: 'A mason laying bricks next to each other, using a line for straightness and leveling with a spirit level.',
          duration: '08:00',
          summary: [
            'ترتيب الطوب بشكل متوازي مع استخدام الخيط لضمان الاستقامة الأفقية.',
            'التسوية المستمرة باستخدام ميزان الماء لمنع ميلان الجدار العمودي.',
            'وضع الطبقة الأولى تعتبر الأساس الأهم لاستقامة كافة الطبقات.',
            'ملء الفواصل (جوانات) بين الطوب بدقة بالملاط لمنع التسرب الجداري.'
          ],
          summaryEN: [
            'Laying bricks parallel using the line to ensure horizontal straightness.',
            'Continuous leveling using a spirit level to prevent vertical leaning.',
            'Laying the first course is the most critical foundation for the straightness of all layers.',
            'Accurately filling the joints between bricks with mortar to prevent wall seepage.'
          ],
          task: {
            title: 'محاكاة البناء',
            titleEN: 'Building simulation',
            description: 'باستخدام مكعبات خشبية أو ورقية، تدرب على رصها بجانب خيط مستقيم.',
            descriptionEN: 'Using wooden or paper blocks, practice laying them next to a straight string.'
          },
          quiz: [
            {
              id: 'cons_2_2_q1',
              question: 'ما هي أهمية ميزان الماء عند رص الطوب في بناء الجدار؟',
              questionEN: 'What is the importance of a spirit level when laying bricks for a wall?',
              options: [
                { id: 'o1', text: 'قياس طول الجدار الإجمالي بدقة عالية', textEN: 'Measuring total wall length precisely', isCorrect: false },
                { id: 'o2', text: 'ضمان الاستقامة الأفقية والعمودية لتجنب ميلان الجدار', textEN: 'Ensuring horizontal and vertical straightness to prevent leaning', isCorrect: true },
                { id: 'o3', text: 'تحديد نوعية الملاط اللازم للرص', textEN: 'Determining the mortar quality needed for laying', isCorrect: false }
              ],
              explanation: 'الميزان وسيلة لعدم ميلان الجدار سواء عموديا أو أفقيا.',
              explanationEN: 'The spirit level prevents the wall from leaning either vertically or horizontally.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cons_2_3',
          title: 'بناء الزوايا والأعمدة',
          titleEN: 'Building Corners and Columns',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'بناء يبني زاوية 90 درجة، مستخدماً المثلث (الكوس) للتحقق، ثم يرص الطوب.',
          visualDescriptionEN: 'A mason building a 90-degree corner, using a square to check, then laying bricks.',
          duration: '06:30',
          summary: [
            'التحضير لبناء زاوية قائمة مثالية.',
            'استخدام المثلث (الكوس) لضبط درجة التلاقي بين زوايا الأسوار.',
            'أهمية الزوايا في إعطاء القوة والدعامة لكامل الهيكل.',
            'تقنيات الترابط الزاوي لتعزيز الالتصاق بين طرفي الجدارين.'
          ],
          summaryEN: [
            'Preparing to build a perfect right angle corner.',
            'Using the square to align the meeting degree between wall corners.',
            'The importance of corners in providing strength to the whole structure.',
            'Corner interlocking techniques to enhance adhesion between both wall ends.'
          ],
          task: {
            title: 'تخطيط زاوية البناء',
            titleEN: 'Planning a corner',
            description: 'ارسم مخططاً لجدار بزاوية، وحدد القياسات.',
            descriptionEN: 'Draw a plan for a wall with a corner and specify measurements.'
          },
          quiz: [
            {
              id: 'cons_2_3_q1',
              question: 'ما هي درجة الزاوية الأساسية لمعظم تقاطعات الغرف؟',
              questionEN: 'What is the standard angle degree for most room intersections?',
              options: [
                { id: 'o1', text: '45 درجة', textEN: '45 degrees', isCorrect: false },
                { id: 'o2', text: '90 درجة (قائمة)', textEN: '90 degrees (right angle)', isCorrect: true },
                { id: 'o3', text: '180 درجة (مستقيمة)', textEN: '180 degrees (straight)', isCorrect: false }
              ],
              explanation: 'القاعدة الذهبية لتشكيل المربعات والمستطيلات المعمارية هي زاوية 90 درجة لتوصيل الجدران.',
              explanationEN: 'The golden rule for forming architectural squares and rectangles is a 90-degree angle to connect walls.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cons_2_4',
          title: 'فتحات الشبابيك والأبواب – العتب والطوبار',
          titleEN: 'Window and Door Openings – Lintels and Formwork',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1541888082003-8889ee4a46a5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'جدار به فتحة باب، يظهر العتب الخرساني فوق الفتحة، والطوبار الخشبي المؤقت.',
          visualDescriptionEN: 'Wall with a door opening showing concrete lintel above it, and temporary wooden formwork.',
          duration: '07:30',
          summary: [
            'استغلال المقاسات الدقيقة لترك فتحات النوافذ والأبواب أثناء البناء.',
            'أهمية تنصيب العتب الخرساني (Linteau) للحد من اجهادات الفتحات.',
            'وظيفة الطوبار الخشبي المؤقت أثناء التجهيز والصب.',
            'مراجعة ارتفاع الشبابيك قياساً من سطح الانتهاء المعين.'
          ],
          summaryEN: [
            'Using accurate measurements to leave openings for windows and doors during construction.',
            'The importance of installing concrete lintels to reduce stress over openings.',
            'The function of temporary wooden formwork during preparation and pouring.',
            'Checking window heights relative to the designated finished floor surface.'
          ],
          task: {
            title: 'مراجعة مقاسات بابك',
            titleEN: 'Checking your door dimensions',
            description: 'قس عرض باب غرفتك وارسم كيفية وضع العتب.',
            descriptionEN: 'Measure the width of your room\'s door and draw where the lintel goes.'
          },
          quiz: [
            {
              id: 'cons_2_4_q1',
              question: 'ما هي الوظيفة الأساسية للعتب الخرساني أو الحديدي فوق الفتحات؟',
              questionEN: 'What is the primary function of the concrete or steel lintel above openings?',
              options: [
                { id: 'o1', text: 'تحمّل ضغط أوزان الجدار العلوي لعدم انهياره', textEN: 'Bearing the upper wall weight pressure to prevent collapse', isCorrect: true },
                { id: 'o2', text: 'مجرد لمسة شكلية', textEN: 'Just a decorative touch', isCorrect: false },
                { id: 'o3', text: 'إعطاء المساحة لمرور الكابلات', textEN: 'Giving space for cables', isCorrect: false }
              ],
              explanation: 'لولا العتب، لا يمكن للجدار الأعلى أن يحمل نفسه فسينهار على الفتحة.',
              explanationEN: 'Without a lintel, the unsupported upper wall would collapse into the opening.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'cons_lvl_3',
      title: 'المرحلة 3: الخرسانة، التلييس، والتشطيبات',
      titleEN: 'Stage 3: Concrete, Plastering, and Finishes',
      description: 'تعمق في أعمال الطلاء الأساسية، وتركيب الأرضيات والمواد الإسمنتية القوية.',
      descriptionEN: 'Dive into foundational finishing works, floor installation, and robust cementitious materials.',
      lessons: [
        {
          id: 'cons_3_1',
          title: 'صب الخرسانة – الأساسات والأعمدة',
          titleEN: 'Pouring Concrete – Foundations and Columns',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1541888082003-8889ee4a46a5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'عمال يصبون الخرسانة في قوالب خشبية، ويهزونها لإخراج الهواء.',
          visualDescriptionEN: 'Workers pouring concrete into wooden forms and vibrating it to release air.',
          duration: '08:00',
          summary: [
            'مكونات الخرسانة: سمنت، رمل، ماء و حصى معدني (Gravier).',
            'تحضير قوالب الصب وتدعيمها بخشب التسقيف.',
            'عملية الصب تتطلب اهتزاز الخرسانة لمنع تكوّن فراغات هوائية مقللة للمتانة.',
            'المعالجة ضرورية برش الماء على الخرسانة أثناء الأيام التابعة لضمان شدتها الكلية.'
          ],
          summaryEN: [
            'Concrete components: cement, sand, water, and gravel.',
            'Preparing formwork molds and bracing them with timber.',
            'Pouring requires concrete vibration to prevent durability-reducing air pockets.',
            'Curing is essential: spraying water on concrete in the following days to ensure full strength.'
          ],
          task: {
            title: 'رصد الخرسانة',
            titleEN: 'Observing concrete',
            description: 'راقب صب خرسانة في منطقتك (إن أمكن) واكتب الخطوات.',
            descriptionEN: 'Observe a concrete pour in your area (if possible) and note the steps.'
          },
          quiz: [
            {
              id: 'cons_3_1_q1',
              question: 'لماذا نهتز (نستخدم الفيبرار Vibrator) للخرسانة عند الصب؟',
              questionEN: 'Why do we vibrate concrete during a pour?',
              options: [
                { id: 'o1', text: 'لاخراج فقاعات الهواء ومنع الفجوات', textEN: 'To expel air bubbles and prevent voids', isCorrect: true },
                { id: 'o2', text: 'ليسرع عملية جفافها', textEN: 'To speed up drying process', isCorrect: false },
                { id: 'o3', text: 'لرش الماء', textEN: 'To spray water', isCorrect: false }
              ],
              explanation: 'إخراج الهواء يجعل المزيج كثيفا وبالتالي يكفل المتانة العليا للدعامة.',
              explanationEN: 'Expelling air makes the mix dense, ensuring maximum support durability.'
            }
          ],
          xpReward: 40
        },
        {
          id: 'cons_3_2',
          title: 'تلييس الجدران (اللياسة) – الطبقة الأولى والثانية',
          titleEN: 'Wall Plastering – First and Second Coats',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'بناء يطبق اللياسة على الجدار بالمسطرين، ثم يسويها بالقدة.',
          visualDescriptionEN: 'Mason applying plaster to a wall with a trowel, then leveling it with a straight edge.',
          duration: '06:00',
          summary: [
            'تحضير جدار نظيف وخالي من الغبار قبل الطلاء.',
            'تطبيق الطبقة الخشنة (الطرطشة) لضمان لصق قوي.',
            'مراحل اللياسة: طبقة التوزيع، وطبقة التسوية.',
            'استخدام القدة لتسوية الجدار والصنفرة الخفيفة للمس الختامي الناعم.'
          ],
          summaryEN: [
            'Preparing a clean, dust-free wall before plastering.',
            'Applying a rough scratch coat for strong adhesion.',
            'Plastering stages: application coat and leveling coat.',
            'Using the straight edge for leveling and light sanding for a smooth final finish.'
          ],
          task: {
            title: 'اختبار اللياسة المصغر',
            titleEN: 'Mini plastering test',
            description: 'جرب تلييس قطعة صغيرة من الطوب في حديقة المنزل.',
            descriptionEN: 'Try plastering a small piece of brick in your home garden.'
          },
          quiz: [
            {
              id: 'cons_3_2_q1',
              question: 'ما هي الغاية من الطبقة الأولى (الطرطشة) في أعمال التلييس؟',
              questionEN: 'What is the purpose of the first scratch coat in plastering work?',
              options: [
                { id: 'o1', text: 'تنعيم سطح الجدار في أقصر وقت', textEN: 'Smoothing the wall surface in no time', isCorrect: false },
                { id: 'o2', text: 'لخلق قاعدة تماسك للياسة اللاحقة بشكل أقوى مع الجدار الملس', textEN: 'Creating an adhesion base for subsequent plaster to strongly grip smooth walls', isCorrect: true }
              ],
              explanation: 'القاعدة الخشنة ضرورية لمنع تساقط اللياسة عن الجدار.',
              explanationEN: 'A rough base is necessary to keep plaster from falling off the wall.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cons_3_3',
          title: 'تركيب بلاط الأرضيات والسيراميك',
          titleEN: 'Installing Floor Tiles and Ceramic',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'بناء يضع الملاط على الأرض، ثم يرص البلاط ويضبطه بالميزان.',
          visualDescriptionEN: 'Mason putting mortar on the floor, then laying tiles and adjusting with a level.',
          duration: '08:30',
          summary: [
            'تحضير مستوى الأرضية (الفورما) بشكل دقيق ومائل للتصريف إذا لزم.',
            'وضع الملاط (باربوتين) اللزج، ثم رص البلاط واحدة تلو الأخرى.',
            'مراقبة استقامة الخطوط والتسوية بمقياس ميزان طولاني.',
            'ملء الفواصل بمعجون مانع للتسرب يتماشى مع السيراميك (الجوانتير).'
          ],
          summaryEN: [
            'Preparing the floor level (screed) accurately, sloping for drainage if needed.',
            'Applying adhesive mortar (slurry), then laying tiles one by one.',
            'Monitoring straight lines and leveling with a long spirit level.',
            'Filling joints with waterproof grout matching the ceramic.'
          ],
          task: {
            title: 'تمعن في أرضية المنزل',
            titleEN: 'Floor inspection',
            description: 'تفحص أرضية منزلك، لاحظ طريقة ترتيب البلاط.',
            descriptionEN: 'Examine your home floor and observe the tile layout.'
          },
          quiz: [
            {
              id: 'cons_3_3_q1',
              question: 'ما هي أهم نقطة للتركيز عليها فور الانتهاء من تركيب بلاط سيراميك محاذ؟',
              questionEN: 'What is the most important thing to focus on right after installing adjacent ceramic tiles?',
              options: [
                { id: 'o1', text: 'المشي الطويل فوق المبلط لدمجه جيداً', textEN: 'Long walk over the tiles to blend them well', isCorrect: false },
                { id: 'o2', text: 'ضمان نظافة الفواصل لتهيئتها لملء الفواصل بمادة (الجوان/Barbotine)', textEN: 'Ensuring clean joints to prepare for grouting', isCorrect: true }
              ],
              explanation: 'تجب صيانة وتنظيف الفواصل فوراً لمنع تراكم الشوائب وجفاف الغراء، مما يسهل الملء المتقن لاحقاً.',
              explanationEN: 'Joints must be cleaned immediately to prevent debris buildup and glue drying, facilitating perfect grouting later.'
            }
          ],
          xpReward: 40
        },
        {
          id: 'cons_3_4',
          title: 'عزل الرطوبة والمياه',
          titleEN: 'Moisture and Waterproofing',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1541888082003-8889ee4a46a5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'عامل يدهن مادة عازلة سوداء على أساسات المبنى.',
          visualDescriptionEN: 'Worker applying black waterproofing material to building foundations.',
          duration: '06:00',
          summary: [
            'المياه المتسربة يمكنها أن تلحق دمارا بصحة وهيكل المباني.',
            'أنواع عزل الرطوبة تشمل الزفت الأسود (البيتومين) والأغشية الاصطناعية.',
            'طرق التطبيق الصحيحة عند الأساسات وقواعد الجدران الأرضية.',
            'تطبيق إضافي داخل الحمامات والمراحيض للحماية الداخلية.'
          ],
          summaryEN: [
            'Leaking water can devastate the health and structure of buildings.',
            'Waterproofing types include black pitch (bitumen) and synthetic membranes.',
            'Correct application methods at foundations and ground wall bases.',
            'Additional application inside bathrooms and toilets for internal protection.'
          ],
          task: {
            title: 'تقفي الرطوبة',
            titleEN: 'Moisture tracking',
            description: 'ابحث عن علامات الرطوبة في بنايتك وسجلها.',
            descriptionEN: 'Look for moisture signs in your building and record them.'
          },
          quiz: [
            {
              id: 'cons_3_4_q1',
              question: 'أين يتم عادة وضع المواد البيتومينية العازلة للرطوبة لحماية المنشأة ككل؟',
              questionEN: 'Where are bituminous waterproofing materials usually applied to protect the entire structure?',
              options: [
                { id: 'o1', text: 'على السقف الخارجي (فقط)', textEN: 'On the outer roof (only)', isCorrect: false },
                { id: 'o2', text: 'فقط داخل جدران الغرف العلوية', textEN: 'Only inside upper room walls', isCorrect: false },
                { id: 'o3', text: 'على الأساسات وجدران الدور الأرضي الملامسة للتربة', textEN: 'On foundations and ground layer walls touching the soil', isCorrect: true }
              ],
              explanation: 'عزل الأساسات هو الخندق الأول لمنع ظاهرة الصعود الشعري للماء من التربة ووقاية الحديد والأعمدة.',
              explanationEN: 'Foundation isolation is the first trench to prevent capillary rise of water from the soil and protect steel and columns.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'cons_lvl_4',
      title: 'المرحلة 4: المشاريع الصغيرة والاحتراف',
      titleEN: 'Stage 4: Small Projects and Professionalism',
      description: 'أتمم مهارتك بقراءة المخططات الهندسية، تقييم مواد العمل، والشروع بمشروع كالتخرج.',
      descriptionEN: 'Complete your skills by reading engineering plans, estimating materials, and starting a graduation project.',
      lessons: [
        {
          id: 'cons_4_1',
          title: 'قراءة المخططات الهندسية البسيطة',
          titleEN: 'Reading Simple Engineering Blueprints',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'مكتب به مخططات، بناء يتفحص مخططاً لمسكن، ويشير إلى الأبعاد.',
          visualDescriptionEN: 'Office with blueprints; mason examining a house plan and pointing to dimensions.',
          duration: '06:00',
          summary: [
            'المخطط الدقيق يعادل البناء المتقن.',
            'معرفة رموز المخطط (الجدران، الشبابيك، والأبواب).',
            'التأقلم مع نسب مقياس الرسم وكيفية قلب الأبعاد النظرية لواقع.',
            'حساب المحيط الجداري وفروقات التسطير المعماري.'
          ],
          summaryEN: [
            'An accurate plan equates a perfect build.',
            'Knowing blueprint symbols (walls, windows, and doors).',
            'Adapting to drawing scale ratios and converting theory dimensions to reality.',
            'Calculating wall perimeters and architectural layout differences.'
          ],
          task: {
            title: 'رسم تخطيطي غرفي',
            titleEN: 'Room blueprint',
            description: 'ارسم مخططاً بسيطاً لغرفتك مع الأبعاد.',
            descriptionEN: 'Draw a simple floor plan of your room with dimensions.'
          },
          quiz: [
            {
              id: 'cons_4_1_q1',
              question: 'ما هي الوسيلة التي تعبر عن مقاسات المخطط للواقع بصيغة نسبة (مثل 1:100)؟',
              questionEN: 'What mechanism expresses blueprint dimensions to reality in a ratio format (e.g., 1:100)?',
              options: [
                { id: 'o1', text: 'طاقة المادة', textEN: 'Material energy', isCorrect: false },
                { id: 'o2', text: 'مقياس الرسم (Echelle)', textEN: 'Drawing Scale (Echelle)', isCorrect: true },
                { id: 'o3', text: 'زمن انجاز التنفيذ', textEN: 'Execution runtime', isCorrect: false }
              ],
              explanation: 'مقياس 1/100 يعني أن كل سم على الورق يوازي متر واحد في الحقيقة.',
              explanationEN: 'A 1/100 scale means every cm on paper equals one meter in reality.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cons_4_2',
          title: 'تقدير تكاليف مواد البناء',
          titleEN: 'Estimating Construction Material Costs',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1541888082003-8889ee4a46a5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'بناء يستخدم آلة حاسبة، أمامه قائمة أسعار مواد.',
          visualDescriptionEN: 'Mason using a calculator, looking at a material price list in front of him.',
          duration: '06:00',
          summary: [
            'تحليل كمية الطوب (Briques) عبر مساحة طول بارتفاع.',
            'حساب أكياس وحجم الاسمنت من خلال مساحة السطح المراد تغطيته.',
            'معرفة حجم الرمل اللازم مع تضمين نسب النقص وهدر المادة.',
            'تلخيص ميزانية بناء وتسعيرها لصاحب المشروع.'
          ],
          summaryEN: [
            'Analyzing brick quantities across length by height area.',
            'Calculating cement bags and volume based on the coverage surface area.',
            'Determining required sand volume, including loss and waste ratios.',
            'Summarizing a construction budget and pricing it for the project owner.'
          ],
          task: {
            title: 'تسعيرة خيالية',
            titleEN: 'Imaginary pricing',
            description: 'احسب تكلفة بناء جدار طوله 3 أمتار وارتفاعه 2.5 متر.',
            descriptionEN: 'Calculate the cost of building a wall 3 meters long and 2.5 meters high.'
          },
          quiz: [
            {
              id: 'cons_4_2_q1',
              question: 'هل يؤخذ عدد الفتحات (الأبواب والشبابيك) في الاعتبار عند حساب عدد حبات الطوب المطلوبة؟',
              questionEN: 'Are openings (doors/windows) considered when calculating required brick quantities?',
              options: [
                { id: 'o1', text: 'نعم، يجب خصم مساحتها لعدم شراء فائض طوب غير مفيد', textEN: 'Yes, their area must be deducted to avoid buying useless excess brick', isCorrect: true },
                { id: 'o2', text: 'لا يؤخذ بالاعتبار أبداً', textEN: 'It is never taken into consideration', isCorrect: false }
              ],
              explanation: 'تحسب المساحة الكلية الصافية عن طريق (مساحة الجدار الكلية – مساحة الأبواب والنوافذ).',
              explanationEN: 'Net total area is calculated by (Total wall area - Doors/Windows area).'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cons_4_3',
          title: 'العمل الحر وتسويق خدماتك',
          titleEN: 'Freelancing and Marketing Your Services',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1541888082003-8889ee4a46a5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'بناء مبتسم يوزع بطاقات عمل على صاحب منزل.',
          visualDescriptionEN: 'A smiling mason handing out business cards to a homeowner.',
          duration: '05:30',
          summary: [
            'بناء سمعة قوية عبر الانضباط والنظافة والأمانة.',
            'التواصل الرصين والموثوق مع الزبائن يولد أعمالاً متكررة (التسويق الشفهي).',
            'التواجد الرقمي وعرض صور الأعمال المحترفة (Portfolio).',
            'التحكم والتفاوض المسبق المكتوب عند تحديد الأسعار.'
          ],
          summaryEN: [
            'Building a strong reputation via discipline, cleanliness, and honesty.',
            'Solid, reliable communication with clients generates repeat business (word of mouth).',
            'Digital presence and showcasing professional work photos (Portfolio).',
            'Control and written preliminary negotiation when setting prices.'
          ],
          task: {
            title: 'بطاقة المستقل',
            titleEN: 'Freelancer card',
            description: 'صمم بطاقة عمل لخدمات البناء الخاصة بك.',
            descriptionEN: 'Design a business card for your construction services.'
          },
          quiz: [
            {
              id: 'cons_4_3_q1',
              question: 'ما هو أحد أقوى أدوات تسويق حِرفي محترف في السوق المحلي؟',
              questionEN: 'What is one of the strongest marketing tools for a professional craftsman in the local market?',
              options: [
                { id: 'o1', text: 'تغيير الأسعار في كل لحظة لجذب الكل', textEN: 'Changing prices constantly to attract everyone', isCorrect: false },
                { id: 'o2', text: 'السمعة الإيجابية من أصحاب المشاريع السابقة (توصيات الناس الموثوقة)', textEN: 'Positive reputation from past project owners (trusted word of mouth references)', isCorrect: true }
              ],
              explanation: 'نجاح مشاريعك وجودة ما تطبقه تجعل الزبائن أنفسهم هم مسوقوك المستقبليين.',
              explanationEN: 'Your projects\' success and quality make customers your own future marketers.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cons_4_4',
          title: 'مشروع التخرج – بناء جدار صغير من الألف إلى الياء',
          titleEN: 'Graduation Project – Constructing a Small Wall from A to Z',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'رسم توضيحي لجدار مكتمل، إلى جانبه الأدوات المستخدمة. شارة تخرج ذهبية.',
          visualDescriptionEN: 'Illustration of a completed wall alongside used tools. Golden graduation badge.',
          duration: 'مفتوح / Open',
          summary: [
            'المشروع الختامي لتتويج مكتسباتك.',
            'خطط ونفذ (نظرياً أو فعلياً) بناء جدار صغير من الطوب بطول 2 متر وارتفاع 1 متر.',
            'قدم مخططاً، قائمة مواد، خطوات بناء، واحسب التكلفة.',
            'في النهاية، الشارة الذهبية للمهارات تنتظرك.'
          ],
          summaryEN: [
            'The final project to crown your acquired skills.',
            'Plan and execute (theoretically or practically) laying a small brick wall 2 meters long by 1 meter high.',
            'Provide a plan, materials list, construction steps, and calculate costs.',
            'Ultimately, your skills golden badge awaits.'
          ],
          task: {
            title: 'المشروع النهائي للبَنَّاء',
            titleEN: 'Mason\'s Final Project',
            description: 'خطط ونفذ (نظرياً أو فعلياً) بناء جدار صغير من الطوب بطول 2 متر وارتفاع 1 متر. قدم مخططاً، قائمة مواد، خطوات بناء، واحسب التكلفة.',
            descriptionEN: 'Plan and execute (theoretically or practically) laying a small brick wall 2 meters long by 1 meter high. Provide a plan, materials list, construction steps, and calculate costs.'
          },
          xpReward: 100
        }
      ]
    }
  ],
  badges: {
    started: {
      id: 'cons_badge_1',
      title: 'البنّاء المتدرب',
      titleEN: 'Apprentice Mason',
      description: 'أتمم الدرس الأول للغوص في مهنة التعمير.',
      descriptionEN: 'Completed the first lesson to dive into the construction profession.',
      icon: '👷‍♂️'
    },
    completed: {
      id: 'cons_badge_2',
      title: 'البنّاء الماهر',
      titleEN: 'Master Mason',
      description: 'أكمل جميع الدروس ونال شرف وسام البنّاء الماهر.',
      descriptionEN: 'Completed all lessons and earned the honor of the Master Mason badge.',
      icon: '🧱'
    }
  }
};
