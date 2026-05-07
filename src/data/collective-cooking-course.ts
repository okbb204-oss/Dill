import { Course } from "./courses";

export const collectiveCookingCourse: Course = {
  craftId: 'collective_cooking',
  title: 'الطبخ الجماعي والإطعام',
  titleEN: 'Collective Cooking & Catering',
  description: 'في المطابخ الكبرى للمستشفيات، المدارس، الثكنات، والمطاعم الجامعية الجزائرية، يقف طباخ الجماعي كقائد أوركسترا النكهات، يحول كميات هائلة من المواد الخام إلى وجبات متوازنة ومغذية لمئات الأشخاص يومياً. هو ليس مجرد طباخ عادي، بل مدير إنتاج غذائي، يخطط للوجبات، يحسب الكميات، يضمن سلامة الأغذية، ويدير فريقاً من المساعدين. تتطلب هذه الحرفة معرفة عميقة بتقنيات الطهي بكميات كبيرة، وقوانين الصحة الغذائية الصارمة، والقدرة على العمل تحت ضغط المواعيد. الطبخ الجماعي هو العمود الفقري لإطعام طلابنا ومرضانا وجنودنا، ومهنة مضمونة الطلب في المؤسسات العمومية والخاصة. مع تطور قطاع الإطعام في الجزائر، تتزايد فرص العمل في هذه الحرفة النبيلة التي تجمع بين الشغف بالطهي وخدمة المجتمع.',
  descriptionEN: 'In the large kitchens of Algerian hospitals, schools, barracks, and university restaurants, the institutional cook stands as the conductor of flavors, transforming massive quantities of raw ingredients into balanced, nutritious meals for hundreds of people daily. They are not merely an ordinary cook, but a food production manager, planning menus, calculating quantities, ensuring food safety, and leading a team of assistants. This craft demands deep knowledge of large-scale cooking techniques, strict food hygiene regulations, and the ability to work under deadline pressure. Collective cooking is the backbone of feeding our students, patients, and soldiers—a profession with guaranteed demand in public and private institutions. With the development of the catering sector in Algeria, job opportunities are increasing in this noble craft that combines a passion for cooking with community service.',
  levels: [
    {
      id: 'cc_lvl_1',
      title: 'المرحلة 1: أساسيات النظافة وسلامة الغذاء',
      titleEN: 'Stage 1: Hygiene and Food Safety Basics',
      description: 'تعرف على قواعد النظافة الشخصية، سلامة الأغذية، أنواع المطابخ الجماعية، واستلام المواد.',
      descriptionEN: 'Learn personal hygiene rules, food safety, types of collective kitchens, and receiving materials.',
      lessons: [
        {
          id: 'cc_1_1',
          title: 'قواعد النظافة الشخصية والمطبخ',
          titleEN: 'Personal and Kitchen Hygiene Rules',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1576867758508-54316dbe4d5f?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'طباخ يرتدي زياً نظيفاً، قبعة، قفازات، يغسل يديه في حوض خاص. ملصقات "اغسل يديك" على الجدران. مطبخ فولاذي نظيف.',
          visualDescriptionEN: 'A cook wearing a clean uniform, hat, and gloves, washing their hands in a dedicated sink. "Wash your hands" posters on the walls. A clean stainless steel kitchen.',
          duration: '05:00',
          summary: [
            'غسل اليدين بانتظام وبالطريقة الصحيحة قبل وبعد كل مهمة.',
            'ارتداء الزي الواقي الكامل (سترة، قبعة، شبكة شعر، مريلة، وقفازات).',
            'تنظيف الأسطح وتعقيمها باستمرار لمنع تراكم البكتيريا.',
            'فصل النفايات والتخلص منها بطريقة صحية بعيداً عن منطقة التحضير.',
            'استخدام مبيدات آمنة واتخاذ إجراءات وقائية لمنع دخول الحشرات.',
            'منع ارتداء المجوهرات أو وضع طلاء الأظافر أثناء الطبخ.'
          ],
          summaryEN: [
            'Regularly and correctly washing hands before and after every task.',
            'Wearing full protective gear (jacket, hat, hair net, apron, and gloves).',
            'Continuously cleaning and sanitizing surfaces to prevent bacterial buildup.',
            'Separating waste and disposing of it hygienically away from the prep area.',
            'Using safe pest control measures to prevent insects.',
            'Prohibiting jewelry and nail polish while cooking.'
          ],
          task: {
            title: 'قائمة النظافة',
            titleEN: 'Hygiene Checklist',
            description: 'ضع قائمة تدقيق (Checklist) من 5 خطوات للنظافة الشخصية قبل دخول المطبخ.',
            descriptionEN: 'Create a 5-step personal hygiene checklist before entering the kitchen.'
          },
          quiz: [
            {
              id: 'cc_1_1_q1',
              question: 'ما هو أول وأهم إجراء لمنع التلوث في المطبخ الجماعي؟',
              questionEN: 'What is the first and most important measure to prevent contamination in a collective kitchen?',
              options: [
                { id: 'o1', text: 'طهي الطعام بحرارة عالية جداً', textEN: 'Cooking food at very high heat', isCorrect: false },
                { id: 'o2', text: 'غسل اليدين بانتظام وبالطريقة الصحيحة', textEN: 'Washing hands regularly and correctly', isCorrect: true },
                { id: 'o3', text: 'تبريد المطبخ باستمرار', textEN: 'Continuously cooling the kitchen', isCorrect: false }
              ],
              explanation: 'الأيدي هي الناقل الرئيسي للبكتيريا، لذا غسلها هو خط الدفاع الأول.',
              explanationEN: 'Hands are the main transmitters of bacteria, so washing them is the first line of defense.'
            }
          ],
          xpReward: 30
        },
        {
          id: 'cc_1_2',
          title: 'سلامة الأغذية ومنع التسممات',
          titleEN: 'Food Safety and Preventing Poisoning',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'رسم توضيحي: "منطقة الخطر الحراري" بين 5°C و 60°C. بكتيريا تتكاثر في الطعام المتروك. طباخ يفحص حرارة الطعام بمقياس حرارة.',
          visualDescriptionEN: 'Illustration: "Danger Zone" between 5°C and 60°C. Bacteria multiplying in left-out food. Cook checking food temperature with a thermometer.',
          duration: '06:30',
          summary: [
            'التعرف على "منطقة الخطر الحراري" (5°C - 60°C) حيث تتكاثر البكتيريا بسرعة.',
            'التبريد السريع للأطعمة المطبوخة لتجاوز منطقة الخطر الحرج.',
            'الطبخ لدرجة حرارة داخلية آمنة (عادة فوق 70°C) للقضاء على الميكروبات.',
            'منع التلوث المتبادل بفصل اللحوم النيئة عن الأطعمة الجاهزة والخضار.',
            'استخدام ألواح تقطيع بألوان مختلفة لكل صنف (للخضار، للحوم، للدواجن).',
            'تطبيق قاعدة (ما يدخل أولاً يخرج أولاً - FIFO) في استهلاك المخزون.'
          ],
          summaryEN: [
            'Recognizing the "Danger Zone" (5°C - 60°C) where bacteria multiply rapidly.',
            'Rapid cooling of cooked foods to pass the critical danger zone.',
            'Cooking to a safe internal temperature (usually above 70°C) to eliminate microbes.',
            'Preventing cross-contamination by separating raw meats from ready foods and veg.',
            'Using color-coded cutting boards for different items (veg, meat, poultry).',
            'Applying First-In, First-Out (FIFO) rule in inventory consumption.'
          ],
          task: {
            title: 'تفتيش ثلاجتك',
            titleEN: 'Inspect Your Fridge',
            description: 'افحص ثلاجتك المنزلية: هل المواد النيئة مفصولة عن المطبوخة؟ سجل 3 ملاحظات.',
            descriptionEN: 'Inspect your home fridge: Are raw materials separated from cooked ones? Note 3 observations.'
          },
          quiz: [
            {
              id: 'cc_1_2_q1',
              question: 'ما هو التلوث المتبادل (Cross-contamination)؟',
              questionEN: 'What is cross-contamination?',
              options: [
                { id: 'o1', text: 'ترك الطعام في الثلاجة لمدة طويلة', textEN: 'Leaving food in the fridge for a long time', isCorrect: false },
                { id: 'o2', text: 'انتقال البكتيريا من طعام نيء إلى طعام جاهز للأكل', textEN: 'Transfer of bacteria from raw food to ready-to-eat food', isCorrect: true },
                { id: 'o3', text: 'طبخ الطعام في درجات حرارة منخفضة', textEN: 'Cooking food at low temperatures', isCorrect: false }
              ],
              explanation: 'التلوث المتبادل يحدث عادة عند استخدام نفس لوح التقطيع أو السكين للحم النيء ثم للخضار.',
              explanationEN: 'Cross-contamination usually happens when using the same cutting board or knife for raw meat then veggies.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_1_3',
          title: 'أنواع المطابخ الجماعية وتجهيزاتها',
          titleEN: 'Types of Collective Kitchens and Equipment',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'ثلاثة مشاهد: مطبخ مستشفى، مطبخ مدرسة، مطبخ مطعم كبير. أجهزة مختلفة في كل منها. أسهم تشرح الفروق.',
          visualDescriptionEN: 'Three scenes: Hospital kitchen, school kitchen, large restaurant kitchen. Different appliances in each. Arrows explain differences.',
          duration: '06:00',
          summary: [
            'المطابخ المركزية (Cuisine Centrale) تطبخ كميات ضخمة وتوزعها.',
            'المطابخ الفرعية (Cuisine Satellite) تستقبل الطعام وتجهزه للتقديم المباشر.',
            'التعرف على التجهيزات الأساسية: القدور المقلوبة، أفران البخار، غرف التبريد.',
            'فهم التخطيط المكاني وفصل منطقة "التحضير النيء" عن "الطبخ".',
            'مبدأ "السير إلى الأمام" (Marche en avant) حيث لا يتقاطع النظيف مع المتسخ.',
            'أهمية نظام التهوية القوي وصرف المياه الخاص بالأرضيات.'
          ],
          summaryEN: [
            'Central Kitchens cook massive quantities and distribute them.',
            'Satellite Kitchens receive food and prep it for direct serving.',
            'Identifying basic equipment: tilting pans, steam ovens, walk-in coolers.',
            'Understanding spatial planning and separating "raw prep" from "cooking" areas.',
            'The "Forward Flow" principle (Marche en avant) where clean never crosses paths with dirty.',
            'Importance of strong ventilation and dedicated floor drainage.'
          ],
          task: {
            title: 'تخطيط المطبخ',
            titleEN: 'Kitchen Layout',
            description: 'ارسم مخططاً بسيطاً لمطبخ جماعي نموذجي، وحدد مناطق: الاستلام، التخزين، التحضير، الطهي، التوزيع.',
            descriptionEN: 'Draw a simple layout for a typical collective kitchen, marking areas: Receiving, Storage, Prep, Cooking, Distribution.'
          },
          quiz: [
            {
              id: 'cc_1_3_q1',
              question: 'ما هو مبدأ "السير إلى الأمام" (Marche en avant) في المطبخ المهني؟',
              questionEN: 'What is the "Forward Flow" (Marche en avant) principle in a professional kitchen?',
              options: [
                { id: 'o1', text: 'تقديم الطعام الساخن بسرعة قبل أن يبرد', textEN: 'Serving hot food quickly before it cools', isCorrect: false },
                { id: 'o2', text: 'مسار الطعام يتقدم دائماً من النيء/نقطة الاستلام إلى الجاهز دون أي تقاطع مع مسار النفايات أو المتسخ', textEN: 'Food flow always moves forward from raw/receiving to ready without crossing paths with waste or dirty items', isCorrect: true },
                { id: 'o3', text: 'ترقية الطباخين من مساعدين إلى رؤساء مطابخ', textEN: 'Promoting cooks from assistants to head chefs', isCorrect: false }
              ],
              explanation: 'هذا المبدأ يضمن عدم انتقال البكتيريا من الأطباق المتسخة أو المواد النيئة إلى الطعام الجاهز.',
              explanationEN: 'This principle ensures bacteria does not transfer from dirty dishes or raw goods to ready-to-eat food.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_1_4',
          title: 'استلام المواد الغذائية وفحص جودتها',
          titleEN: 'Receiving Food Supplies and Quality Check',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'شاحنة تورد خضروات. طباخ يفحص الطماطم، يتأكد من تاريخ صلاحية اللحوم، يوزن الكميات ويسجلها في دفتر الاستلام.',
          visualDescriptionEN: 'A truck delivering vegetables. Cook inspecting tomatoes, checking meat expiration dates, weighing quantities and logging them.',
          duration: '05:30',
          summary: [
            'التحقق من الكميات المستلمة ومطابقتها تماماً مع الفواتير والطلبيات.',
            'فحص درجات حرارة سيارات التبريد فور وصولها (اللحوم والألبان).',
            'التدقيق في تواريخ الصلاحية (DLC / DDM) وعدم قبول أي منتج منتهي.',
            'فحص المظهر الخارجي للخضار والفواكه للتأكد من عدم وجود تعفن.',
            'رفض العلب المنتفخة أو المطعوجة لتجنب التسمم الوشيقي (Botulism).',
            'تسجيل الاستلام وتخزين المواد بسرعة في أماكنها المخصصة.'
          ],
          summaryEN: [
            'Verifying received quantities and matching them exactly against invoices and orders.',
            'Checking the temperature of refrigerated trucks upon arrival.',
            'Scrutinizing expiration dates and refusing any expired product.',
            'Inspecting the visual appearance of produce to ensure no rot.',
            'Rejecting dented or bulging cans to avoid Botulism.',
            'Logging receipts and quickly storing materials in their designated spots.'
          ],
          task: {
            title: 'فحص استلام',
            titleEN: 'Receiving Inspection',
            description: 'تخيل أنك تستلم طلبية لـ 100 بيضة. كيف تتأكد من صلاحيتها؟ اكتب قائمة فحص.',
            descriptionEN: 'Imagine you are receiving an order of 100 eggs. How do you ensure their viability? Write a checklist.'
          },
          quiz: [
            {
              id: 'cc_1_4_q1',
              question: 'ما الإجراء الصحيح عند استلام معلبات بها انبعاج شديد أو انتفاخ؟',
              questionEN: 'What is the correct action upon receiving severely dented or swollen canned goods?',
              options: [
                { id: 'o1', text: 'طهيها جيداً قبل تقديمها', textEN: 'Cooking them thoroughly before serving', isCorrect: false },
                { id: 'o2', text: 'تخزينها واستعمالها في أقرب وقت', textEN: 'Storing them and using them ASAP', isCorrect: false },
                { id: 'o3', text: 'رفضها وإرجاعها للمورد فوراً', textEN: 'Refusing and returning them to the supplier immediately', isCorrect: true }
              ],
              explanation: 'العلب المنتفخة أو التالفة قد تحتوي على بكتيريا سامة قاتلة لا تقضي عليها الحرارة العادية.',
              explanationEN: 'Swollen or damaged cans may contain deadly toxic bacteria not eradicated by normal heating.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'cc_lvl_2',
      title: 'المرحلة 2: فنون الطهي الجماعي الأساسية',
      titleEN: 'Stage 2: Basic Collective Culinary Arts',
      description: 'تعلم تحضير وطهي الخضروات، النشويات، اللحوم، والحلويات البسيطة بكميات كبيرة.',
      descriptionEN: 'Learn preparing and cooking vegetables, starches, meats, and simple desserts in bulk.',
      lessons: [
        {
          id: 'cc_2_1',
          title: 'تحضير الخضروات بكميات كبيرة (التقشير، التقطيع، السلق)',
          titleEN: 'Bulk Vegetable Preparation (Peeling, Chopping, Blanching)',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'فريق مطبخ: أحدهم يقشر البطاطا بآلة تقشير، آخر يقطع البصل بسكين كبير، قدر ضخم يغلي بالجزر.',
          visualDescriptionEN: 'Kitchen team: one peels potatoes with a peeling machine, another chops onions with a large knife, a massive pot boiling carrots.',
          duration: '07:00',
          summary: [
            'استخدام آلات التقشير الصناعي للبطاطا والجزر لتوفير الوقت.',
            'أهمية التقطيع المتساوي لضمان نضج متجانس في نفس الوقت.',
            'استغلال محضرات الطعام للفرم والتقطيع المبرمج عند الحاجة.',
            'تقنية السلق المسبق (Blanching) للحفاظ على اللون وإيقاف الإنزيمات.',
            'التبريد السريع جداً بالماء البارد والثلج بعد السلق للحفاظ على القرمشة.',
            'وضع تدابير لتجنب حوادث الجروح بسبب سرعة التقطيع.'
          ],
          summaryEN: [
            'Using industrial peeling machines for potatoes and carrots to save time.',
            'The importance of uniform chopping for simultaneous, even cooking.',
            'Utilizing food processors for programmed dicing and mincing when needed.',
            'Blanching techniques to preserve color and halt enzyme action.',
            'Very rapid chilling with ice baths post-blanching to maintain crispness.',
            'Implementing measures to prevent cut accidents due to fast chopping.'
          ],
          task: {
            title: 'تقطيع موحد',
            titleEN: 'Uniform Chopping',
            description: 'في منزلك، قشر وقطع 3 كغ من البطاطا بشكل متساوٍ للقلي. سجل الوقت الذي استغرقته.',
            descriptionEN: 'At home, peel and chop 3 kg of potatoes uniformly for frying. Record how long it took.'
          },
          quiz: [
            {
              id: 'cc_2_1_q1',
              question: 'ما هو الهدف الرئيسي من التقطيع المتساوي للخضار بكميات كبيرة؟',
              questionEN: 'What is the primary goal of uniform vegetable chopping in bulk?',
              options: [
                { id: 'o1', text: 'ضمان نضج جميع القطع في نفس الوقت', textEN: 'Ensuring all pieces cook and finish at the exact same time', isCorrect: true },
                { id: 'o2', text: 'تقليل استهلاك الغاز فقط', textEN: 'Only reducing gas consumption', isCorrect: false },
                { id: 'o3', text: 'جعلها أسهل للمضغ للأطفال', textEN: 'Making it easier to chew for children', isCorrect: false }
              ],
              explanation: 'القطع غير المتساوية تعني أن الحتت الصغيرة ستنضج وتهترئ بينما الكبيرة تبقى قاسية.',
              explanationEN: 'Uneven cuts mean small pieces turn to mush while large ones remain raw and tough.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_2_2',
          title: 'طبخ الأرز والمعكرونة والبقوليات بكميات كبيرة',
          titleEN: 'Cooking Rice, Pasta, and Legumes in Bulk',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1551186717-386050b181e1?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'قدر ضخم يغلي به الماء، طباخ يسكب 5 كغ من الأرز، يحرك، ثم يختبر النضج. قدر آخر به حمص مسلوق.',
          visualDescriptionEN: 'A huge pot boiling water, a cook pours 5kg of rice, stirs, then tests for doneness. Another pot holds boiled chickpeas.',
          duration: '06:30',
          summary: [
            'الضبط الدقيق لنسبة الماء للأرز (عادة 1.5 لتر ماء لكل 1 كغ أرز).',
            'استخدام أفران البخار القابلة للانقلاب للطهي المتجانس للمعكرونة.',
            'تحريك النشويات في الدقائق الأولى لمنع التصاقها في القاع.',
            'النقع المسبق الطويل (12 ساعة) للبقوليات كالحمص والفاصوليا لتقليل وقت الطبخ.',
            'صدمة الماء البارد للمعكرونة إذا كانت ستحفظ لتقديم لاحق، لإيقاف النضج.',
            'إضافة الملح والمادة الدهنية بالكميات الدقيقة لضمان المذاق وتجنب التعجن.'
          ],
          summaryEN: [
            'Precise water-to-rice ratios (usually 1.5L water per 1Kg rice).',
            'Using tilting steam kettles for even pasta cooking.',
            'Stirring starches in the first minutes to prevent bottom sticking.',
            'Long presoaking (12 hours) for legumes like chickpeas and beans to slash cooking time.',
            'Cold water shock for pasta if scaling for later service, halting the cooking process.',
            'Adding salt and fats in exact amounts to guarantee taste and avoid mushiness.'
          ],
          task: {
            title: 'حسابات الطبخ الكمي',
            titleEN: 'Bulk cooking math',
            description: 'اطبخ 1 كغ من الأرز في منزلك، واحسب كمية الماء والوقت المثاليين. كيف تختلف عن طبخ كمية صغيرة؟',
            descriptionEN: 'Cook 1 kg of rice at home, calculate the ideal water volume and time. How does it differ from a small batch?'
          },
          quiz: [
            {
              id: 'cc_2_2_q1',
              question: 'لماذا يتم نقع البقوليات (كالحمص الجاف) ليلة كاملة قبل طهيها بكميات ضخمة؟',
              questionEN: 'Why are dry legumes (like chickpeas) soaked overnight before cooking in bulk?',
              options: [
                { id: 'o1', text: 'لتغيير لونها للأفتح', textEN: 'To lighten their color', isCorrect: false },
                { id: 'o2', text: 'لتقليل وقت الطبخ وتسهيل الهضم', textEN: 'To significantly reduce cooking time and ease digestion', isCorrect: true },
                { id: 'o3', text: 'لمنع الالتصاق بالقدر', textEN: 'To prevent sticking to the pot', isCorrect: false }
              ],
              explanation: 'النقع يسمح لحبات البقول بامتصاص الماء، مما يوفر الكثير من وقت الغليان والطاقة.',
              explanationEN: 'Soaking allows legumes to absorb moisture, saving massive amounts of boiling time and energy.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_2_3',
          title: 'طهي اللحوم والدواجن بكميات كبيرة (الصلصات والطواجن)',
          titleEN: 'Bulk Cooking Meats & Poultry (Sauces and Tagines)',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1544025162-811cce5144b6?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'صينية فرن ضخمة بها قطع دجاج متبلة. طباخ يصب صلصة حمراء فوقها. قدر ضخم يطهو لحم الغنم مع الخضار.',
          visualDescriptionEN: 'A massive roasting pan with marinated chicken cuts. Cook pouring red sauce over them. Huge pot cooking lamb and veg.',
          duration: '08:00',
          summary: [
            'تحضير التتبيلات (Marinades) المسبقة للكميات الكبيرة لتشريب النكهة.',
            'طهي الدجاج في أفران حرارية (Convection) للتوزيع المتساوي للحرارة.',
            'تحضير الصلصات الأم (البيضاء والحمراء) كأساس لعدة طواجن.',
            'التحقق من نضج قلب اللحم بميزان الحرارة ذي المسبار، خاصة الدواجن.',
            'تقنيات الطهي البطيء للحوم القاسية لجعلها طرية بكميات كبيرة.',
            'توزيع مقادير اللحوم بحذر (Portioning) لضمان حصول الكل على حصص متساوية.'
          ],
          summaryEN: [
            'Preparing large-batch marinades beforehand to infuse flavor.',
            'Cooking chicken in convection ovens for perfectly even heat distribution.',
            'Prepping mother sauces (whites and reds) as a base for multiple tagines.',
            'Checking internal meat temperatures with a probe thermometer, especially poultry.',
            'Slow cooking techniques for tougher meat cuts to tenderize them in bulk.',
            'Careful portioning of meats to ensure everyone gets equal share sets.'
          ],
          task: {
            title: 'تكبير التتبيلة',
            titleEN: 'Scaling a marinade',
            description: 'جهز تتبيلة لـ 2 كغ من الدجاج، واحسب كميات التوابل والزيت.',
            descriptionEN: 'Prepare a marinade for 2 kg of chicken, scaling up spices and oils accurately.'
          },
          quiz: [
            {
              id: 'cc_2_3_q1',
              question: 'ما هي الوسيلة الأضمن للتأكد من نضج قطع اللحم أو الدجاج الضخمة من الداخل؟',
              questionEN: 'What is the absolute safest way to guarantee large meat/poultry cuts are safely cooked inside?',
              options: [
                { id: 'o1', text: 'تذوق المرق فقط', textEN: 'Tasting the broth only', isCorrect: false },
                { id: 'o2', text: 'حساب الوقت بالساعة', textEN: 'Strictly counting time on a clock', isCorrect: false },
                { id: 'o3', text: 'استخدام ميزان حرارة الطعام (المسبار) وغرسه في وسط القطعة', textEN: 'Using a food probe thermometer inserted strictly in the thickest center part', isCorrect: true }
              ],
              explanation: 'رغم الوقت، قد تختلف كثافة اللحوم، لذا درجة الحرارة الداخلية هي الدليل الوحيد على القضاء على البكتيريا.',
              explanationEN: 'Regardless of time, meat density varies; internal temp is the only true indicator of bacterial eradication.'
            }
          ],
          xpReward: 40
        },
        {
          id: 'cc_2_4',
          title: 'الحلويات الجماعية البسيطة (فواكه، مهلبية، كاسترد)',
          titleEN: 'Simple Bulk Desserts (Fruit, Muhallebi, Custard)',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'أوعية كبيرة من المهلبية تبرد في الثلاجة. فواكه موسمية مقطعة في أوعية.',
          visualDescriptionEN: 'Large prep containers of hot Muhallebi cooling in the fridge. Sliced seasonal fruits portioned in bowls.',
          duration: '06:00',
          summary: [
            'الاعتماد على الحلويات سهلة التقسيم ولا تفقد قوامها مع الوقت.',
            'تحضير المهلبية والكريم ديسير بمقادير النشا والحليب المضاعفة بحذر كي لا تتكتل.',
            'تقديم الفواكه الطازجة كخيار صحي واقتصادي متوفر موسميا.',
            'تقنيات التبريد السريع للحلويات الحليبية لمنع تشكل البكتيريا.',
            'تقسيم الحلويات في أطباق فردية مبكراً وتغليفها للحفاظ على النظافة.',
            'تجنب الكريمة الطازجة في الوصفات الحارة التي لا تحتوي على ثلاجات كافية للتقديم.'
          ],
          summaryEN: [
            'Relying on easily portionable desserts that hold their texture over time.',
            'Carefully scaling milk and starch ratios for Muhallebi/Custards avoiding lumpy clumps.',
            'Serving fresh whole seasonal fruits as a healthy, cost-effective staple.',
            'Rapid cooling of dairy-based desserts preventing hazardous bacterial blooms.',
            'Portioning desserts into individual wrapped cups early to maintain pristine hygiene.',
            'Avoiding highly perishable fresh creams ending in warm buffets lacking chiller support.'
          ],
          task: {
            title: 'تقسيم التحلية',
            titleEN: 'Portioning Dessert',
            description: 'حضر 2 لتر من المهلبية في منزلك، وقسمها على 10 أكواب.',
            descriptionEN: 'Prepare 2 liters of Muhallebi at home, and portion it perfectly into 10 cups.'
          },
          quiz: [
            {
              id: 'cc_2_4_q1',
              question: 'أثناء تحضير المهلبية الحليبية بكمية ضخمة، كيف تتجنب تكتل النشا (المايزينة)؟',
              questionEN: 'While prepping massive vats of dairy Muhallebi, how do you prevent the starch (Maizena) from clumping?',
              options: [
                { id: 'o1', text: 'غلي الحليب أولاً ثم رمي النشا الجاف فيه', textEN: 'Boil milk first then toss in dry starch powder', isCorrect: false },
                { id: 'o2', text: 'إذابة النشا بالكامل في سائل بارد قبل إضافته للخليط الساخن', textEN: 'Dissolving the starch completely in a cold liquid slurry before adding to the hot mix', isCorrect: true },
                { id: 'o3', text: 'الاعتماد على الخلاط الآلي فقط والحرارة العالية', textEN: 'Relying purely on mechanical mixers and high heat', isCorrect: false }
              ],
              explanation: 'النشا يتكتل فوراً في الماء الساخن. يجب دائماً حله في ماء أو حليب بارد لتشكيل مستحلب قبل سكب التدريجي.',
              explanationEN: 'Starch instantly clumps in hot water. It must always be slurred in cold water/milk before gradual pouring.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'cc_lvl_3',
      title: 'المرحلة 3: التخطيط والإدارة في الطبخ الجماعي',
      titleEN: 'Stage 3: Planning and Management in Collective Catering',
      description: 'تخطيط القوائم، حساب الكميات والتكاليف، وإدارة المخزون الغذائي بكفاءة.',
      descriptionEN: 'Menu planning, calculating quantities & costs, and efficiently managing food inventory.',
      lessons: [
        {
          id: 'cc_3_1',
          title: 'تخطيط الوجبات الأسبوعية المتوازنة',
          titleEN: 'Planning Balanced Weekly Menus',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'سبورة كبيرة عليها جدول أيام الأسبوع، في كل يوم وجبة غداء مكتوبة. طباخ يحسب السعرات الحرارية بجانبها.',
          visualDescriptionEN: 'A large whiteboard displaying a weekday schedule, a specific lunch written per day. A cook tallying calories beside it.',
          duration: '07:30',
          summary: [
            'الالتزام بقواعد التوازن الغذائي لكل وجبة: بروتينات، نشويات، خضار وفواكه.',
            'التنويع في تقديم الوجبات لتجنب ملل المستفيدين (تغيير نوع اللحم والنشويات).',
            'مراعاة الاحتياجات الطبية والفئات العمرية (وجبات مستشفى للسكري أو مرضى الضغط).',
            'الاستفادة من الخضار الموسمية المتوفرة في السوق للتحكم في الميزانية.',
            'مراعاة الإمكانيات التقنية للمطبخ (لا تخطط 3 أطباق مقلية إذا كان المقلاة صغيرة).',
            'التخطيط المسبق بأكثر من أسبوع لتسهيل عمليات الشراء والتخزين.'
          ],
          summaryEN: [
            'Adhering strictly to nutritional balance per plate: proteins, starches, veg & fruits.',
            'Diversifying presentations to avoid patron fatigue (swapping meat types and carb bases).',
            'Accommodating medical and age demographics (hospital diabetic or low-sodium diets).',
            'Leveraging abundant seasonal market produce pushing strict budget control.',
            'Factoring kitchen technical limits (don\'t plan 3 fried dishes if fryer capacity is tiny).',
            'Pre-planning weeks in advance to streamline purchasing and stock cycles.'
          ],
          task: {
            title: 'قائمة مدرسية',
            titleEN: 'School Menu',
            description: 'خطط لقائمة أسبوعية (5 أيام) لغداء مدرسة ابتدائية. تأكد من وجود بروتين، خضار، ونشويات كل يوم.',
            descriptionEN: 'Plan a 5-day weekly lunch menu for a primary school. Ensure protein, veg, and carbs each day.'
          },
          quiz: [
            {
              id: 'cc_3_1_q1',
              question: 'لماذا يعتبر التخطيط المراعى للطاقة الاستيعابية لأجهزة المطبخ مهماً؟',
              questionEN: 'Why is planning around kitchen equipment capacity deemed crucial?',
              options: [
                { id: 'o1', text: 'لتجنب اختناق الإنتاج (Bottlenecks) وفشل تسليم الوجبة في موعدها', textEN: 'To prevent production bottlenecks and service failure delays', isCorrect: true },
                { id: 'o2', text: 'لتوفير الكهرباء فقط', textEN: 'Merely to save electricity expenses', isCorrect: false },
                { id: 'o3', text: 'لأنها قاعدة وضعها مفتشو الصحة', textEN: 'Because it is a rule mandated by health inspectors', isCorrect: false }
              ],
              explanation: 'تصميم ثلاث وصفات تعتمد كلها على الفرن في وقت واحد سيبطئ الخدمة أو يفسد بعضها نظراً لمحدودية الفرن.',
              explanationEN: 'Designing three simultaneous oven-baked dishes bottlenecks workflow causing severe service disruption loops.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_3_2',
          title: 'حساب الكميات والمقادير لعدد محدد من الأشخاص',
          titleEN: 'Calculating Quantities & Ratios for Exact Crowds',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'آلة حاسبة، ورقة مكتوب عليها: "عدد الأشخاص × الحصة للفرد = الكمية الإجمالية". جداول قياسية للحصص.',
          visualDescriptionEN: 'Calculator, paper reading: "Number of pax × Individual portion = Total volume". Standard portion charts.',
          duration: '08:00',
          summary: [
            'التعرف على "الحصة القياسية" للفرد (مثال: 120غ لحم، 80غ أرز جاف).',
            'تطبيق المعادلة الأساسية: حصة الفرد × عدد الأشخاص = الكمية اللآزمة إجماليا.',
            'حساب معامل التصبير (النسبة التي تُفقد من الوزن الأصلي بسبب التقشير أو الطبخ).',
            'جدولة نسب التوابل بدقة؛ الكميات لا تُضاعف حرفياً وببساطة في التوابل لمنع الملوحة المفرطة.',
            'وضع هامش أمان بنسبة مئوية ضئيلة لتغطية الطوارئ (توقع 10 أشخاص إضافيين في المناسبات).',
            'استخدام جداول الجرد والآلة الحاسبة كصديق دائم للطباخ الجماعي.'
          ],
          summaryEN: [
            'Learning "Standard Portions" (e.g., 120g meat, 80g dry rice per person).',
            'Applying formula: Individual Portion × Pax Count = Gross Volume needed.',
            'Factoring in yield percentages (weight lost to peeling, bone, or cooking shrinkage).',
            'Scaling spices precisely; they do not scale perfectly linearly to avoid extreme saltiness.',
            'Buffering slight safety margins covering emergency drop-ins (expecting 10 extra guests blindly).',
            'Embracing spreadsheets, charts, and calculators as constant chef companions.'
          ],
          task: {
            title: 'حساب مأدبة بسيطة',
            titleEN: 'Mini-banquet calculation',
            description: 'احسب كمية الأرز وقطع الدجاج اللازمة لـ 150 شخصاً، إذا كانت الحصة 80 غراماً من الأرز وقطعة دجاج واحدة للشخص.',
            descriptionEN: 'Calculate rice and chicken cuts needed for 150 pax, assuming 80g dry rice and 1 cut of chicken per person.'
          },
          quiz: [
            {
              id: 'cc_3_2_q1',
              question: 'ما هو الهدف من أخذ "الوزن الصافي" و "الوزن الإجمالي" بعين الاعتبار عند شراء البطاطا مثلا؟',
              questionEN: 'What is the goal of noting both "Net Weight" and "Gross Weight" when acquiring raw potatoes?',
              options: [
                { id: 'o1', text: 'لا يوجد أهمية، الوزن واحد', textEN: 'No significance, weight is identical', isCorrect: false },
                { id: 'o2', text: 'تعويض الفاقد أثناء التقشير لضمان حصول الكل على حصته', textEN: 'Compensating peel waste yielding ensuring everyone gets correct net portion sizes', isCorrect: true },
                { id: 'o3', text: 'من أجل تسريع وقت الطبخ لاحقا', textEN: 'For the sake of speeding up future boil times', isCorrect: false }
              ],
              explanation: 'كيلوغرام بطاطس جاف يتقلص بعد تقشيره وإزالة التالف، لذا يتم شراء وزن أكبر من المطلوب تحضيره لتعويض الفاقد.',
              explanationEN: 'A kilo of raw potatoes shrinks post-peeling; chefs order higher gross numbers covering expected peeling trim yields securely.'
            }
          ],
          xpReward: 40
        },
        {
          id: 'cc_3_3',
          title: 'إدارة المخزون الغذائي وتجنب التبذير',
          titleEN: 'Managing Food Inventory and Avoiding Waste',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'مستودع غذائي منظم، صناديق مرقمة بتاريخ الاستلام. طباخ يفحص المخزون ويسجل في حاسوب.',
          visualDescriptionEN: 'Organized food storage room, boxes labeled with receipt dates. Cook audits stock noting it on a laptop.',
          duration: '06:00',
          summary: [
            'التحكم الدقيق في التخزين المبرد لتفادي فساد السلع (اللحوم مجمدة، والخضار مبردة بثبات).',
            'التدوير الإلزامي (FIFO): ما يتم جلبه و تخزينه أولاً، يجب استعماله للطبخ أولاً.',
            'المواضبة على الجرد الدوري (حساب الموجود يدوياً) لمطابقته مع قوائم الشراء.',
            'حماية الأكياس الجافة من الرطوبة، رفعها على منصات بلاستيكية عن الأرض بـ 15 سم.',
            'إعادة تدوير البقايا الصالحة (Recycling) بشكل آمن لتقليل الخسائر المالية.',
            'تسجيل أي منتج فاسد في دفتر "التوالف" لمعرفة أسبابه وتلافيه مستقبلاً.'
          ],
          summaryEN: [
            'Strict command over deep-freeze vaults preventing stock rot cascades.',
            'Mandatory FIFO (First-In, First-Out) rotations: oldest received goods utilized immediately first.',
            'Performing rigorous regular physical counts validating trailing purchase ledgers gracefully.',
            'Shielding dry sacks against humidity raising them physically 15cm off floor on pallets.',
            'Safely upcycling viable food trimmings (Recycling) shrinking gross financial bleed outs.',
            'Logging spoiled/dashed items specifically within "Waste ledgers" spotting structural flaw patterns.'
          ],
          task: {
            title: 'جرد وتدوير بالمنزل',
            titleEN: 'Home stock rotation',
            description: 'رتب مخزن مطبخك المنزلي حسب تاريخ الصلاحية، وتخلص من المواد المنتهية.',
            descriptionEN: 'Rearrange your home pantry exclusively by expiration dates, tossing out past-due cans.'
          },
          quiz: [
            {
              id: 'cc_3_3_q1',
              question: 'ما الذي يرمز له اختصار FIFO في عالم الطبخ وتسيير المخازن؟',
              questionEN: 'What does the acronym FIFO dictate within culinary warehousing spaces?',
              options: [
                { id: 'o1', text: 'الأرخص سعراً يستعمل أولاً', textEN: 'Cheapest Incoming, First Out', isCorrect: false },
                { id: 'o2', text: 'ما يدخل أولاً يخرج أولاً (First In, First Out)', textEN: 'First In, First Out', isCorrect: true },
                { id: 'o3', text: 'فحص البكتيريا الداخلي', textEN: 'Flora Inspection, Filtration Output', isCorrect: false }
              ],
              explanation: 'القاعدة تضمن استهلاك الأغذية قبل انتهاء صلاحيتها وتمنع ركود البضاعة الأقدم في زوايا الثلاجة.',
              explanationEN: 'This standard guarantees older food is served prior to rotting, blocking old-stock stagnation at the fridge rear.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_3_4',
          title: 'التحكم في التكاليف وإعداد ميزانية الوجبات',
          titleEN: 'Cost Control and Meal Budgeting',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'ورقة إكسل تظهر تكلفة وجبة غداء: المواد، العمالة، الطاقة. إجمالي التكلفة مقسوم على عدد الوجبات = تكلفة الوجبة الواحدة.',
          visualDescriptionEN: 'Excel sheet displaying a lunch cost: ingredients, labor, energy. Total cost divided by meal count = Unit cost.',
          duration: '06:30',
          summary: [
            'التفرقة بين التكلفة المباشرة (أسعار الأغذية) وغير المباشرة (غاز، كهرباء، رواتب الطباخين).',
            'حساب التكلفة الفردية بدقة عن طريق جمع التكاليف وقسمتها على عدد الوجبات.',
            'التفاوض المدروس مع الموردين الكبار للحصول على خصومات للكميات الضخمة.',
            'التخلص من الهدر (التبذير) هو الخطوة الأولى والأسرع لخفض التكاليف لزيادة الربح.',
            'ضبط مقاسات أدوات التقديم (المغارف والصحون) لضمان عدم تجاوز السعرات والتكلفة الموضوعة للمستفيد.',
            'إعداد لوحة قياس (Tableau de Bord) أسبوعي يظهر الفارق بين الميزانية المقترحة وواقع الاستهلاك.'
          ],
          summaryEN: [
            'Splitting direct expenditures (raw ingredient tags) versus indirect inputs (gas, salaries, utilities).',
            'Calculating precise per-plate Unit Cost by aggregating run rates scaling strictly across plate numbers.',
            'Shrewd negotiation wielding volume purchasing securing robust supplier deductions consistently.',
            'Eradicating waste metrics directly translates as the quickest fix lowering global operation prices.',
            'Standardizing serving ladles and scoop volumes guaranteeing portion control locking cost forecasts.',
            'Prepping a weekly dashboard (Tableau de Bord) detailing budget projections versus brute consumption realities.'
          ],
          task: {
            title: 'حساب وجبة كبرى',
            titleEN: 'Calculating a grand meal',
            description: 'احسب تكلفة وجبة "كسكس بالخضار" لـ 50 شخصاً بناءً على أسعار السوق في منطقتك.',
            descriptionEN: 'Calculate the cost of a "Vegetable Couscous" dish feeding 50 pax based on your local market pricing today.'
          },
          quiz: [
            {
              id: 'cc_3_4_q1',
              question: 'إذا كانت الكميات التي غرفها المساعدون للطلبة أكبر من المتوقع، ما النتيجة المالية المترتبة؟',
              questionEN: 'If assistants systematically scoop larger portions for students than projected, what is the core fiscal fallout?',
              options: [
                { id: 'o1', text: 'لا يوجد تأثير طالما الطعام متوفر', textEN: 'No impact as long as stockpiles cover it', isCorrect: false },
                { id: 'o2', text: 'تجاوز تكلفة الوجبة الواحدة للميزانية ونقص في حصص الزبائن اللاحقين', textEN: 'Blowing past individual unit cost budgets leaving trailing guests zeroed out hungry', isCorrect: true },
                { id: 'o3', text: 'توفير التكاليف', textEN: 'Saving costs actually', isCorrect: false }
              ],
              explanation: 'تحطيم الحصص القياسية يقضي على خطة التكلفة وقد يؤدي لخسارة فادحة في نهاية يوم المطعم الجامعي.',
              explanationEN: 'Shattering standard portion bounds blows the cost framework creating terrible profit margin losses ending large days.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'cc_lvl_4',
      title: 'المرحلة 4: المطبخ الجزائري التقليدي الجماعي والاحتراف',
      titleEN: 'Stage 4: Traditional Algerian Collective Cuisine & Professionalism',
      description: 'إتقان الأطباق الجزائرية الضخمة للولائم والمناسبات، وتطبيق معايير الصحة والسلامة المهنية ببراعة.',
      descriptionEN: 'Mastering colossal Algerian dishes for banquets, and deploying occupational health bounds skillfully.',
      lessons: [
        {
          id: 'cc_4_1',
          title: 'الأطباق الجزائرية التقليدية المحضرة بكميات كبيرة',
          titleEN: 'Traditional Algerian Dishes Made in Bulk',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1544025162-811cce5144b6?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'قدر كسكس ضخم على البخار. صحون كبيرة من الشخشوخة والرشتة مزينة بالدجاج والحمص.',
          visualDescriptionEN: 'Huge Couscous steamer steaming away. Large platters of Chakhchoukha and Rechta beautifully plated with chicken and chickpeas.',
          duration: '08:00',
          summary: [
            'التعامل مع تبخير وترطيب أوزان هائلة من الكسكس الجاف لمنع تعجنه أو تلف حبته.',
            'حساب مقادير المرق (الروى) الأحمر بدقة وموازنة الخضر الطرية كي لا تتهرد مع اللحم.',
            'ضبط مرق العجائن التقليدية كالرشتة والشخشوخة التي تمتص كميات سوائل أكبر.',
            'استخدام القدور المزدوجة الضخمة للتبخير ومراقبة قوة البخار المنبعث من القاع.',
            'توزيع زينة الطبق (حمص، لحم، خضر، قرفة) بسرعة وبشكل متساو يرضي الضيوف.',
            'التنسيق في التوقيت كي لا تفقد المعجنات حرارتها وقوامها عند سكب الصلصة قبل التقديم بـ 15 دقيقة.'
          ],
          summaryEN: [
            'Navigating bulk steaming hydrating colossal loads of dry Couscous dodging mushy textures preserving grain gaps.',
            'Scaling red broth (Rouwa) precisely balancing tender veggies delaying their entry so they don’t dissolve against boiling meats.',
            'Gauging stock volumes specifically for traditional pastas like Rechta & Chakhchoukha acting as heavy sponges.',
            'Deploying colossal double-tiered steaming vats monitoring vapor pressures rushing from the dense base.',
            'Distributing garnishes (chickpeas, meats, veggies, cinnamon dustings) identically matching visual appeals universally.',
            'Timing sauce pouring strictly 15 minutes prior to live serving ensuring heat and structural integrity.'
          ],
          task: {
            title: 'خطوات تكبير الكسكس',
            titleEN: 'Multiplying Couscous',
            description: 'حضر طبق الكسكس في منزلك (حتى ولو لعائلتك) وتخيل كيف ستضاعف المقادير لـ 50 شخصاً. اكتب خطوات التكبير.',
            descriptionEN: 'Prepare a home Couscous dish; theoretically draft the exact scalar math steps converting your yield to feed 50 pax.'
          },
          quiz: [
            {
              id: 'cc_4_1_q1',
              question: 'ما هي الوسيلة الأنجع لتفادي احتراق أو تشبث الطبقة السفلية أثناء طهي كميات ضخمة من المرق الثقيل؟',
              questionEN: 'What relies as the best method circumventing bottom scorching whilst boiling immense heavy broth loads?',
              options: [
                { id: 'o1', text: 'رمي مكعبات الثلج بانتظام', textEN: 'Tossing ice cubes regularly', isCorrect: false },
                { id: 'o2', text: 'التحريك المستمر من القاع بأدوات خشبية عملاقة وخفض الحرارة بعد بدء الغليان السريع', textEN: 'Constant bottom stirring wielding giant wooden paddles & lowering temps precisely after initial roaring boils', isCorrect: true },
                { id: 'o3', text: 'إضافة كميات كبيرة من الزيت', textEN: 'Pouring vast vats of raw oil', isCorrect: false }
              ],
              explanation: 'القاع معرض مباشرة لألسنة اللهب، وإذا ركدت المكونات النشوية أسفله فستحترق وتفسد طعم وعمل اليوم كله.',
              explanationEN: 'Lower vats contact raw flames; dormant starch bases instantly scorch ruining the entire day\'s labor aroma.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_4_2',
          title: 'تجهيز حفلات الزفاف والمناسبات (الولائم)',
          titleEN: 'Catering Weddings and Events (Banquets)',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'خيمة كبيرة، طاولات ممتدة، فريق طباخين يجهز الصواني. طباخ رئيسي يوجه الفريق.',
          visualDescriptionEN: 'Large wedding tent, expansive tables, culinary crew sorting massive trays. The Head Chef barking directing orders flawlessly.',
          duration: '07:30',
          summary: [
            'الضبط اللوجستي لمعرفة المساحة والكهرباء والماء المتاحة في موقع الحدث أو الخيمة.',
            'التنسيق الزمني العكسي (Retro-Planning) لمعرفة موعد بدء تقشير الخضار لتقديم العشاء في الـ 8 ليلاً.',
            'تنظيم خط الخدمة الساخن (Chafing Dishes) للحفاظ على الحرارة أمام الزوار.',
            'تكوين وإدارة المساعدين مؤقتاً وشرح الأدوار بصرامة لمنع الفوضى أو الاصطدام.',
            'الاستعداد لخطة (ب) الطوارئ كغياب الغاز أو نقص أعداد الأطباق في منتصف الذروة.',
            'التعامل الآمن والسريع مع بقايا الطعام السليمة لتوزيعها أو تبريدها فوراً.'
          ],
          summaryEN: [
            'Logistical bounds locking spatial, electrical, and plumbing checks prior touching event grounds/tents.',
            'Reverse time coordination (Retro-planning) mapping exactly when to start peeling veggies to land an 8PM feast.',
            'Orchestrating buffet hotlines (Chafing Dishes) shielding temperature drop-offs securely.',
            'Building and bossing temporary crews assigning strict roles preventing floor collisions mid-rush.',
            'Enacting sturdy Plan-B responses countering sudden gas cylinder run-outs or plate shortages.',
            'Handling viable buffet leftovers safely freezing/packing them quickly dodging hygiene gaps.'
          ],
          task: {
            title: 'خطة وليمة الزفاف',
            titleEN: 'Wedding banquet mapping',
            description: 'خطط لقائمة وليمة زفاف لـ 300 شخص في منطقتك. اكتب الأطباق والمقادير التقديرية.',
            descriptionEN: 'Draft a wedding banquet menu estimating yields covering 300 individuals localized to your region.'
          },
          quiz: [
            {
              id: 'cc_4_2_q1',
              question: 'ما هو التخطيط الزمني العكسي (Retro-Planning) المفيد جداً في تنظيم الولائم؟',
              questionEN: 'What does Reverse time coordination (Retro-Planning) specifically address organizing vast banquets?',
              options: [
                { id: 'o1', text: 'البدء بتحديد موعد التقديم ثم العودة زمنياً للوراء لحساب أوقات الطبخ والتحضير الدقيقة لتلتقي في هذا الموعد', textEN: 'Locking down the serving deadline initially, then winding hours backwards allocating distinct prep/cook markers ensuring seamless collision-free delivery', isCorrect: true },
                { id: 'o2', text: 'تغيير الوصفات لتصبح متأخرة عن الموعد', textEN: 'Stalling recipe deployments arriving late', isCorrect: false },
                { id: 'o3', text: 'طهي كل شيء قبل بأسبوع ليبرد ثم يسخن', textEN: 'Cooking everything a week early stalling them cold then reheating blindly', isCorrect: false }
              ],
              explanation: 'هذا التخطيط يمنح الطباخ قدرة على إخراج جميع الأطباق حارة متزامنة دون تأخير أو طهي مبكر أكثر من اللازم.',
              explanationEN: 'This strategy hands chefs the power serving vast multiplex plates hot simultaneously skipping premature staleness gaps.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_4_3',
          title: 'الصحة والسلامة المهنية في المطبخ الجماعي',
          titleEN: 'Occupational Health and Safety in Catering',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'طباخ يرتدي حذاء أمان، أرضية غير زلقة، طفاية حريق خاصة بالزيوت، لافتات "خطر الانزلاق".',
          visualDescriptionEN: 'Chef wearing non-slip safety boots. Grease-fire extinguishers mounted close. Yellow "Slippery Floor" caution signs deployed.',
          duration: '06:00',
          summary: [
            'استخدام أحذية أمان مهنية ضد الانزلاق والسقوط ومقاومة انسكاب الماء المغلي.',
            'الاحتفاظ بمعدات إطفاء طوارئ كطفاية الـ CO2 والمطانيات المخصصة لحرائق الزيوت.',
            'تقنيات حمل الأوزان الثقيلة بأمان: ثني الركبتين وإبقاء الظهر مستقيماً لحماية العمود الفقري.',
            'صيانة وتنظيف شبكات الشفط الهوائي (Hotte) وتجنب تراكم الدهون الشديد المسبب لانفجارات اللهب.',
            'التخاطب بوضوح بصيحات تنبيه مثل "خلفك!، حار!" أثناء الحركة بالقدور كأمر إلزامي.',
            'اسعافات الحروق البسيطة بتعريضها لتيار مائي فاتر وليس ثلجا مباشر.'
          ],
          summaryEN: [
            'Lacing up certified anti-slip safety boots deflecting boiling spill splash hazards completely.',
            'Mounting CO2 and heavy fire blankets uniquely formulated throttling grease/oil infernos quickly.',
            'Ergonomic heavy lifting techniques: bending knees pinning backs straight guarding the spine frame.',
            'Vigorously scrubbing ventilation hoods (Hotte) dodging severe fat accumulations sparking spontaneous flash fires.',
            'Vocalizing movement loudly with shouts like "Behind you! Hot!" bypassing deadly carriage collisions.',
            'Handling minor burns flooding streams of tepid tap water brushing aside harsh raw ice myth setups.'
          ],
          task: {
            title: 'خطة طوارئ الطبخ الجماعي',
            titleEN: 'Gally emergency protocols',
            description: 'ضع خطة طوارئ لمطبخ جماعي: 3 سيناريوهات (حريق زيت، انسكاب ماء، قطع إصبع).',
            descriptionEN: 'Formulate an emergency protocol covering 3 events (Oil grease tire, massive splash spill, knife cut).'
          },
          quiz: [
            {
              id: 'cc_4_3_q1',
              question: 'ما هي الطريقة العاجلة والأسلم لإخماد مقلاة عميقة اشتعل بها الزيت فجأة؟',
              questionEN: 'What yields the swiftest safest action knocking out a deep fryer roaring suddenly into an oil fire?',
              options: [
                { id: 'o1', text: 'رمي كمية ضخمة من الماء عليها البارد', textEN: 'Tossing massive chunks of cold water over the blaze', isCorrect: false },
                { id: 'o2', text: 'قطع الغاز فوراً، ثم رمي بطانية حريق خاصة فوقها لكتم الأوكسجين', textEN: 'Severing gas lines immediately, tossing a fire blanket straight over the vessel suffocating oxygen feeds', isCorrect: true },
                { id: 'o3', text: 'رمي كميات من الملح أو السكر', textEN: 'Tossing sugar or salt quantities heavily', isCorrect: false }
              ],
              explanation: 'رمي الماء على الزيت المشتعل يولد انفجاراً نارياً ضخماً يأكل السقف، الكتم ومنع الهواء هو الحل الوحيد الموثوق.',
              explanationEN: 'Splashing water on flaming grease cascades a terrifying fire explosion engulfing roofs; smothering remains the sole valid solution.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'cc_4_4',
          title: 'مشروع التخرج – إعداد وجبة غداء كاملة لـ 100 شخص',
          titleEN: 'Graduation Project – Prepping a Full Lunch for 100 Pax',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'مطبخ جماعي يعمل بكفاءة، جميع أفراد الفريق بزيهم، أطباق جاهزة على عربة التوزيع.',
          visualDescriptionEN: 'Institutional kitchen running optimally, team entirely suited up, finished platters glowing atop a distribution rolling trolley.',
          duration: 'مفتوح',
          summary: [
            'اللمسة الأخيرة لاختبار المهارات والمقدرة التنظيمية والحسابية.',
            'حصر الكميات وتحليل التكاليف وضبط قوائم الطوارئ بدقة.',
            'تحقيق طعم متساو ووقت قياسي مع حماية سلامة الفريق وإبهاج 100 مستفيد.'
          ],
          summaryEN: [
            'The final touch evaluating organizational, culinary, and mathematical grit holistically.',
            'Culling quantities scrutinizing cost models alongside tuning emergency blind spots meticulously.',
            'Attaining uniform flavor sets against rapid timelines protecting crew integrity delighting 100 bellies safely.'
          ],
          task: {
            title: 'المشروع الجماعي التتويجي',
            titleEN: 'Crowning Collective Endeavor',
            description: 'تخيل أنك مسؤول عن إعداد وجبة غداء ليوم واحد لـ 100 طالب في إقامة جامعية. قم بإعداد: 1. قائمة الطعام (طبق رئيسي، مقبلات، تحلية). 2. حساب الكميات والمقادير بالتفصيل. 3. خطة عمل زمنية (متى تبدأ الطهي ومتى تقدم). 4. قائمة بمعدات المطبخ التي ستحتاجها. 5. حساب التكلفة التقديرية للوجبة الكاملة. 6. خطة النظافة والسلامة أثناء العمل. قدم عملك في ملف منظم.',
            descriptionEN: 'Imagine tackling lunch catering covering 100 dorm students. Assemble: 1. The menu (Main, App, Dessert). 2. Granular volume math scale. 3. Workflow timeline (Prep vs Serve hours). 4. Heavy kitchen gear list mapping. 5. Gross total projected budgeting tag. 6. Hygiene and floor safety map. Submit your drafted document securely.'
          },
          xpReward: 100
        }
      ]
    }
  ],
  badges: {
    started: {
      id: 'cc_badge_1',
      title: 'حارس الصحة',
      titleEN: 'Health Guardian',
      description: 'أتمم الدرس الأول وبدأ مشوار الحفاظ على أرواح المستفيدين من الخطر الصحي.',
      descriptionEN: 'Finished the first stage launching the crucial mission protecting diner lives shielding against hazardous risks.',
      icon: '🧤'
    },
    completed: {
      id: 'cc_badge_2',
      title: 'طباخ جماعي محترف',
      titleEN: 'Pro Institutional Chef',
      description: 'أكمل جميع الدروس وأثبت جدارته في إدارة المطابخ الضخمة بمجدافه الذهبي ونكهاته المتزنة.',
      descriptionEN: 'Cleared every tier proving commanding dominance ruling vast kitchens bearing the golden paddle delivering balanced aromas safely.',
      icon: '🍲'
    }
  }
};
