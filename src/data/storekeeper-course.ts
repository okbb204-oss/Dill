import { Course } from './courses';

export const storekeeperCourse: Course = {
  craftId: 'storekeeper',
  title: 'مسار تعلم حرفة: أمين المخزن',
  titleEN: 'Storekeeper Learning Path',
  description: 'مرحباً بك في عالم المخازن واللوجستيك. مع كل درس، تبني نظاماً يحمي أموال المؤسسات. تعلم فنون إدارة المخازن، وتنظيم المواد، واستخدام التقنيات الحديثة في اللوجستيك.',
  descriptionEN: 'Welcome to the world of warehousing and logistics. With each lesson, you build a system that protects company assets. Learn the arts of warehouse management, material organization, and modern logistics techniques.',
  badges: {
    started: {
      id: "storekeeper_novice",
      title: "مبتدئ في إدارة المخازن",
      titleEN: "Storekeeper Novice",
      description: "بدأ رحلته في عالم المخازن واللوجستيك.",
      descriptionEN: "Started the journey in the warehousing and logistics world.",
      icon: "📦"
    },
    completed: {
      id: "storekeeper_pro",
      title: "أمين المخزن المحترف",
      titleEN: "Professional Storekeeper",
      description: "أتم جميع مراحل التكوين وأثبت قدرته على إدارة مخزن متكامل.",
      descriptionEN: "Completed all training stages and proved the ability to manage a full warehouse.",
      icon: "🔑"
    }
  },
  levels: [
    {
      id: "stage-1",
      title: "المرحلة الأولى: أساسيات المخزن والسلامة",
      titleEN: "Stage 1: Warehouse & Safety Basics",
      description: "تعرف على دورك وأخلاقيات المهنة، وقواعد السلامة في المستودعات.",
      descriptionEN: "Get to know your role, professional ethics, and warehouse safety rules.",
      lessons: [
        {
          id: "lesson-1",
          title: "دور أمين المخزن وأخلاقيات المهنة",
          titleEN: "The Role and Ethics of a Storekeeper",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"],
          duration: "10 min",
          summary: [
             "حماية أموال المؤسسة وممتلكاتها.",
             "الصدق والأمانة في جرد السلع.",
             "متابعة دقيقة لكل الداخل والخارج.",
             "تنظيم المساحات للاستغلال الأمثل.",
             "احترام القوانين والإجراءات الداخلية.",
             "التعاون المستمر مع قسم المشتريات والمبيعات."
          ],
          summaryEN: [
             "Protecting the company's assets and money.",
             "Honesty and integrity in inventory counting.",
             "Precise tracking of all inbound and outbound items.",
             "Organizing spaces for optimal utilization.",
             "Respecting internal laws and procedures.",
             "Continuous cooperation with purchasing and sales departments."
          ],
          task: {
            title: "تمرين",
            titleEN: "Exercise",
            description: "اكتب ميثاق شرف مهني لأمين المخزن من 5 نقاط.",
            descriptionEN: "Write a professional code of honor for a storekeeper consisting of 5 points."
          },
          xpReward: 100,
          quiz: [
             {
               id: "q1",
               question: "ما هي الصفة الأهم لأمين المخزن؟",
               questionEN: "What is the most important quality of a storekeeper?",
               options: [
                 { id: "a", text: "السرعة العشوائية", textEN: "Random speed", isCorrect: false },
                 { id: "b", text: "الأمانة والدقة", textEN: "Honesty and accuracy", isCorrect: true },
                 { id: "c", text: "تجاهل الأخطاء", textEN: "Ignoring mistakes", isCorrect: false }
               ],
               explanation: "الأمانة والدقة هما أساس عمل أمين المخزن لأنه مؤتمن على ممتلكات المؤسسة.",
               explanationEN: "Honesty and accuracy are the foundation of a storekeeper's work because they are entrusted with the company's property."
             }
          ]
        },
        {
          id: "lesson-2",
          title: "السلامة المهنية في المخزن",
          titleEN: "Occupational Safety in the Warehouse",
          visualType: "animation",
          visualUrls: ["https://images.unsplash.com/photo-1520694478166-daaaaaec94b4?auto=format&fit=crop&w=800&q=80"],
          duration: "15 min",
          summary: [
             "ارتداء الخوذة وأحذية الأمان لحماية الرأس والقدمين.",
             "رفع الأحمال بالطريقة الصحيحة (ثني الركبتين وليس الظهر).",
             "الحفاظ على الممرات فارغة وخالية من العوائق والمخلفات.",
             "التعامل بحذر مع المواد الخطرة أو الكيميائية وتخزينها بأمان.",
             "استخدام طفايات الحريق في الحالات الطارئة ومعرفة مواقعها.",
             "الالتزام بقواعد السلامة واللافتات التحذيرية في جميع الأوقات."
          ],
          summaryEN: [
             "Wearing hard hats and safety shoes to protect head and feet.",
             "Lifting loads correctly (bending the knees, not the back).",
             "Keeping aisles clear and free of obstacles and debris.",
             "Handling hazardous or chemical materials with care and storing them safely.",
             "Using fire extinguishers in emergencies and knowing their locations.",
             "Adhering to safety rules and warning signs at all times."
          ],
          task: {
            title: "تمرين",
            titleEN: "Exercise",
            description: "تفقد مكان تخزين في بيتك، سجل 3 مخاطر محتملة وكيف تعالجها.",
            descriptionEN: "Inspect a storage area in your home, record 3 potential hazards, and how you would address them."
          },
          xpReward: 120,
          quiz: [
             {
               id: "q1",
               question: "الطريقة الصحيحة لرفع صندوق ثقيل من الأرض هي:",
               questionEN: "The correct way to lift a heavy box from the ground is:",
               options: [
                 { id: "a", text: "الاستلقاء أرضاً", textEN: "Lying on the ground", isCorrect: false },
                 { id: "b", text: "ثني الركبتين وإبقاء الظهر مستقيماً", textEN: "Bending the knees and keeping the back straight", isCorrect: true },
                 { id: "c", text: "الانحناء السريع", textEN: "Bending over quickly", isCorrect: false }
               ],
               explanation: "رفع الأحمال عبر ثني الركبتين يقي الظهر من الإصابات.",
               explanationEN: "Lifting loads by bending the knees protects the back from injuries."
             }
          ]
        },
        {
          id: "lesson-3",
          title: "أنواع المخازن ومناطق التخزين",
          titleEN: "Types of Warehouses and Storage Areas",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?auto=format&fit=crop&w=800&q=80"],
          duration: "12 min",
          summary: [
             "المخازن المغلقة لحماية البضائع من عوامل الطقس.",
             "المخازن المفتوحة للمواد الكبيرة التي لا تتأثر بالعوامل الجوية.",
             "مخازن التبريد لحفظ الأطعمة والأدوية ومراقبة وتدوين درجات الحرارة.",
             "منطقة الاستلام لفحص البضائع القادمة.",
             "المنطقة الرئيسية للتخزين وتوزيع البضائع على الرفوف.",
             "منطقة الشحن لتجهيز الطليات الخارجة."
          ],
          summaryEN: [
             "Closed warehouses to protect goods from weather conditions.",
             "Open warehouses for large materials unaffected by weather.",
             "Cold storage for food and medicine, monitoring and recording temperatures.",
             "Receiving area for inspecting incoming goods.",
             "Main storage area for distributing goods on racks.",
             "Shipping area for preparing outgoing orders."
          ],
          task: {
            title: "تمرين",
            titleEN: "Exercise",
            description: "ارسم مخططاً لمخزن بقالة صغير، وحدد مناطق التخزين المختلفة.",
            descriptionEN: "Draw a layout for a small grocery store warehouse and identify the different storage areas."
          },
          xpReward: 110,
          quiz: []
        },
        {
          id: "lesson-4",
          title: "أدوات العمل الأساسية في المخزن",
          titleEN: "Essential Tools in the Warehouse",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80"],
          duration: "10 min",
          summary: [
             "الماسح الضوئي (Barcode Scanner) لتسجيل الأصناف بسرعة.",
             "الحاسوب لإدارة المخزون وبرامج المستودعات.",
             "الرافعة اليدوية (الترانس باليت) لنقل الطبالي.",
             "ميزان الأرض أو ميزان الشاحنات لحساب الأوزان.",
             "رفوف التخزين لتنظيم البضائع عمودياً.",
             "سجل التدوين والأقلام لتدوين الملاحظات الفورية."
          ],
          summaryEN: [
             "Barcode Scanner for quickly recording items.",
             "Computer for inventory management and warehouse software.",
             "Hand Pallet Truck for moving pallets.",
             "Floor scale or weighbridge for calculating weights.",
             "Storage racks for vertical organization of goods.",
             "Logbook and pens for immediate notes."
          ],
          task: {
            title: "تمرين",
            titleEN: "Exercise",
            description: "تعرف على أدوات مشابهة في محيطك (ميزان، رفوف)، وصف كيف تستخدم.",
            descriptionEN: "Identify similar tools in your surroundings (scale, shelves) and describe how they are used."
          },
          xpReward: 100,
          quiz: []
        }
      ]
    },
    {
      id: "stage-2",
      title: "المرحلة الثانية: استلام البضائع وفحصها وتخزينها",
      titleEN: "Stage 2: Receiving, Inspecting, and Storing Goods",
      description: "تعلم خطوات استلام الشحنات، والتنظيم، والجرد لضمان تطابق الأعداد.",
      descriptionEN: "Learn the steps of receiving shipments, organizing, and inventory counting to ensure accuracy.",
      lessons: [
        {
          id: "lesson-5",
          title: "إجراءات استلام الشحنات ومطابقتها",
          titleEN: "Shipment Receiving and Matching Procedures",
          visualType: "animation",
          visualUrls: ["https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=800&q=80"],
          duration: "15 min",
          summary: [
             "مراجعة بوليصة الشحن مع أمر الشراء الفعلي.",
             "فحص الكميات يدوياً أو إلكترونياً عند الاستلام.",
             "مطابقة الأصناف والمواصفات للتأكد من عدم وجود اختلاف.",
             "فحص جودة الشحنة وعزل المواد التالفة أو المشكوك فيها.",
             "تسجيل التوالف أو النقص في تقرير الملاحظات المستلمة.",
             "التوقيع على استلام الشحنة بعد التأكد التام وتسجيل الدخول."
          ],
          summaryEN: [
             "Reviewing the bill of lading against the actual purchase order.",
             "Inspecting quantities manually or electronically upon receipt.",
             "Matching items and specifications to ensure no discrepancies.",
             "Checking the quality of the shipment and isolating damaged or questionable items.",
             "Recording damages or shortages in the received notes report.",
             "Signing for the receipt of the shipment after complete verification and logging it in."
          ],
          task: {
             title: "تمرين",
             titleEN: "Exercise",
             description: "جهز استمارة استلام وهمية لبضاعة (10 أصناف)، واملأها.",
             descriptionEN: "Prepare a mock receiving form for goods (10 items) and fill it out."
          },
          xpReward: 130,
          quiz: []
        },
        {
          id: "lesson-6",
          title: "ترميز البضائع وتصنيفها (الكوداج)",
          titleEN: "Coding and Classifying Goods",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1556740714-a832145b23ac?auto=format&fit=crop&w=800&q=80"],
          duration: "15 min",
          summary: [
             "أهمية الترميز لتوحيد تسمية الأصناف وتجنب الخلط.",
             "تخصيص كود لكل منتج أو صنف لتمييزه وتتبعه.",
             "استخدام الباركود لتسريع عمليات البيع والاستلام المعتمدة.",
             "تصنيف البضائع في مجموعات رئيسية وفرعية لترشيد التخزين.",
             "وضع ملصقات الباركود بوضوح على كل قطعة أو طبلية.",
             "تجميع الأصناف المتشابهة لتسهيل استرجاعها حسب الكود."
          ],
          summaryEN: [
             "The importance of coding to standardize item names and avoid confusion.",
             "Assigning a code to each product or item to identify and track it.",
             "Using barcodes to speed up approved receiving and sales operations.",
             "Classifying goods into main and sub-categories to rationalize storage.",
             "Placing barcode labels clearly on each piece or pallet.",
             "Grouping similar items to facilitate their retrieval by code."
          ],
          task: {
             title: "تمرين",
             titleEN: "Exercise",
             description: "اخترع نظام ترميز لـ 10 منتجات في مطبخك، واكتب أكوادها.",
             descriptionEN: "Invent a coding system for 10 products in your kitchen and write their codes."
          },
          xpReward: 120,
          quiz: []
        },
        {
          id: "lesson-7",
          title: "تقنيات التخزين الصحيحة والرفوف",
          titleEN: "Correct Storage Techniques and Racking",
          visualType: "animation",
          visualUrls: ["https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=800&q=80"],
          duration: "13 min",
          summary: [
             "توزيع الوزن بوضع البضائع الثقيلة أسفل الرفوف تفاديا للانقلاب.",
             "تخزين المواد الخفيفة في الرفوف العلوية لسهولة الرفع.",
             "توفير مساحات للتهوية بين الصناديق لمنع التلف والرطوبة.",
             "الانتباه لملصقات الاتجاه (هذا الوجه للأعلى) لتجنب انسكاب المحتويات.",
             "استغلال مساحة التخزين العمودية بفعالية من خلال الرفوف المرتفعة.",
             "استخدام الترانس باليت لنقل البضائع المجهزة داخل المخزن بأمان."
          ],
          summaryEN: [
             "Distributing weight by placing heavy goods on the bottom shelves to prevent tipping.",
             "Storing light materials on the upper shelves for easy lifting.",
             "Providing ventilation spaces between boxes to prevent damage and moisture.",
             "Paying attention to orientation labels (this side up) to avoid spilling contents.",
             "Effectively utilizing vertical storage space through high racks.",
             "Using a hand pallet truck to move prepared goods safely within the warehouse."
          ],
          task: {
             title: "تمرين",
             titleEN: "Exercise",
             description: "رتب مخزن مطبخك (أو أي رف) وطبق قواعد التخزين التي تعلمتها.",
             descriptionEN: "Organize your kitchen pantry (or any shelf) and apply the storage rules you learned."
          },
          xpReward: 120,
          quiz: []
        },
        {
          id: "lesson-8",
          title: "الجرد الدوري والمفاجئ",
          titleEN: "Periodic and Surprise Inventory Counting",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"],
          duration: "16 min",
          summary: [
             "الجرد الدوري يتم بانتظام (شهريا أو سنويا) لحصر التكاليف الكلية للشركة.",
             "الجرد المفاجئ (الجزئي) يتم دون موعد مسبق لردع السرقة أو إهمال السجلات.",
             "استخدام الأجهزة الضوئية لمقارنة الأعداد الفعلية على الرفوف بأرقام الحاسوب.",
             "مراجعة الأرقام مرتين كخطوة احترازية للتأكد من الموثوقية التامة.",
             "معالجة الفروقات (النقص أو الزيادة) وتحديد أسبابها بدقة كحالات التلف.",
             "التعاون بين الإدارة وأمين المخزن لجعل الجرد عملية خالية من الأخطاء.",
             "لا تقلق. المخزون الذي لا يُخطَأ في جرده لم يُجرد بعد."
          ],
          summaryEN: [
             "Periodic inventory is done regularly (monthly or annually) to calculate total company costs.",
             "Surprise (partial) inventory is done without prior notice to deter theft or neglect of records.",
             "Using optical devices to compare physical counts on shelves with computer figures.",
             "Reviewing numbers twice as a precautionary step to ensure complete reliability.",
             "Addressing discrepancies (shortages or overages) and determining their causes accurately, like damage.",
             "Cooperation between management and the storekeeper to make counting an error-free process.",
             "Don't worry. The inventory that has never had an error hasn't been counted yet."
          ],
          task: {
             title: "تمرين",
             titleEN: "Exercise",
             description: "قم بجرد سريع لخزانة ملابسك أو ثلاجتك وسجل الأعداد في جدول.",
             descriptionEN: "Do a quick inventory of your closet or fridge and record the numbers in a table."
          },
          xpReward: 140,
          quiz: []
        }
      ]
    },
    {
      id: "stage-3",
      title: "المرحلة الثالثة: إدارة المخزون الرقمية والبرامج",
      titleEN: "Stage 3: Digital Inventory Management and Software",
      description: "طور مهاراتك في استخدام الإكسل والبرامج الاحترافية، وتطبيق قواعد FIFO.",
      descriptionEN: "Develop your skills in using Excel and professional software, and applying FIFO rules.",
      lessons: [
        {
          id: "lesson-9",
          title: "استخدام Excel لإدارة المخزون",
          titleEN: "Using Excel for Inventory Management",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"],
          duration: "20 min",
          summary: [
             "تصميم جدول أساسي بأعمدة واضحة: الكود، اسم الصنف، الكمية المتبقية.",
             "تحديد الحد الأدنى والحد الأقصى لكل منتج بناء على حركة البيع.",
             "استخدام دالة الجمع SUM لتحديث الأعداد تلقائيا في نهاية الشهر.",
             "تطبيق التنسيق الشرطي لتحويل الخلية للون مختلف عند النقصان.",
             "إضافة رسوم بيانية توضح معدل تدفق البضاعة.",
             "حفظ ومشاركة الملف بانتظام لحماية البيانات من الضياع."
          ],
          summaryEN: [
             "Designing a basic table with clear columns: Code, Item Name, Remaining Quantity.",
             "Determine the minimum and maximum limit for each product based on sales movement.",
             "Using the SUM function to update numbers automatically at the end of the month.",
             "Applying conditional formatting to change the cell color when running low.",
             "Adding charts that showing the flow rate of the goods.",
             "Saving and sharing the file regularly to protect data from loss."
          ],
          task: {
            title: "تمرين",
            titleEN: "Exercise",
            description: "أنشئ في Excel جدول مخزون لـ 20 صنفاً وهمياً مع تنسيق شرطي للكميات المنخفضة.",
            descriptionEN: "Create an Excel inventory table for 20 mock items with conditional formatting for low quantities."
          },
          xpReward: 150,
          quiz: []
        },
        {
          id: "lesson-10",
          title: "مقدمة في برامج إدارة المخزون (ERP)",
          titleEN: "Introduction to Inventory Management Software (ERP)",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"],
          duration: "18 min",
          summary: [
             "فهم أهمية برامج ERP لتوحيد إدارة الشركة (مشتريات/مبيعات/مخازن).",
             "التعرف على برامج شائعة مثل Odoo أو SAP التي تتميز بسرعة التطبيق.",
             "مراقبة الواجهة التي تتحدث تلقائياً بمجرد إدخال فاتورة الشراء.",
             "الربط التلقائي بين المخزن والمحاسبة والمبيعات في وقت واحد.",
             "استخراج التقارير والتحليلات الشاملة لبيانات المخزن بنقرة واحدة.",
             "الحد من الأخطاء البشرية وتسريع اتخاذ القرارات الإدارية الحاسمة."
          ],
          summaryEN: [
             "Understanding the importance of ERP systems to unify company management (Purchasing/Sales/Inventory).",
             "Learning about common software like Odoo or SAP known for rapid deployment.",
             "Observing the interface that updates automatically once a purchase invoice is entered.",
             "Automated linking between warehouse, accounting, and sales simultaneously.",
             "Extracting comprehensive reports and analytics of warehouse data with a single click.",
             "Reducing human error and accelerating crucial administrative decision-making."
          ],
          task: {
            title: "تمرين",
            titleEN: "Exercise",
            description: "ابحث عن برنامج مخزون مفتوح المصدر (سهل)، واكتب مميزاته.",
            descriptionEN: "Search for an open-source, easy inventory software and write down its features."
          },
          xpReward: 140,
          quiz: []
        },
        {
          id: "lesson-11",
          title: "إدارة المخزون حسب طريقة FIFO و LIFO",
          titleEN: "Inventory Management using FIFO and LIFO Methods",
          visualType: "animation",
          visualUrls: ["https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"],
          duration: "15 min",
          summary: [
             "نظام FIFO يعتمد مبدأ 'ما يدخل أولاً يخرج أولاً'، مما يخفض نسبة السلع التالفة.",
             "تطبيق FIFO أساسي للمواد الغذائية والأدوية لانتهاء صلاحيتها سريعا.",
             "نظام LIFO يرتكز على 'ما يدخل أخيراً يخرج أولاً'، ويسهل استخراج البضائع الثقيلة جدا.",
             "استخدام LIFO للمواد غير القابلة للتلف مثل الأخشاب أو الحديد المتراكم.",
             "تحديد الطريقة المتبعة وفق خصائص المنتجات لضمان تقليل الهدر.",
             "تأثير الطريقة المتخذة على ربحية المؤسسة والسياسات المحاسبية النهائية للمخازن."
          ],
          summaryEN: [
             "The FIFO system is based on 'First-In, First-Out', reducing the rate of damaged goods.",
             "Implementing FIFO is essential for foodstuffs and medicines due to quick expiration.",
             "The LIFO system revolves around 'Last-In, First-Out', making it easy to retrieve very heavy goods.",
             "Using LIFO for non-perishable materials like wood or stacked iron.",
             "Determining the method used according to product characteristics to ensure waste reduction.",
             "The impact of the chosen method on the company's profitability and final accounting policies for warehouses."
          ],
          task: {
            title: "تمرين",
            titleEN: "Exercise",
            description: "طبق FIFO على منتجات مطبخك، ورتبها حسب تاريخ الانتهاء.",
            descriptionEN: "Apply FIFO to your kitchen products, organizing them by expiration date."
          },
          xpReward: 150,
          quiz: [
             {
               id: "q1",
               question: "ما معنى نظام FIFO؟",
               questionEN: "What does the FIFO system mean?",
               options: [
                 { id: "a", text: "ما يدخل أخيراً يخرج أولاً", textEN: "Last-In, First-Out", isCorrect: false },
                 { id: "b", text: "السلع التالفة فقط تخرج أولاً", textEN: "Only damaged goods go out first", isCorrect: false },
                 { id: "c", text: "ما يدخل أولاً يخرج أولاً", textEN: "First-In, First-Out", isCorrect: true }
               ],
               explanation: "FIFO هي اختصار لـ First-In, First-Out، وتعني تصريف البضائع الأقدم أولاً.",
               explanationEN: "FIFO stands for First-In, First-Out, and it means disposing of the oldest goods first."
             }
          ]
        },
        {
          id: "lesson-12",
          title: "تحليل المخزون وتجنب النفاد أو التراكم",
          titleEN: "Inventory Analysis and Avoiding Stockouts or Overstocking",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"],
          duration: "18 min",
          summary: [
             "معرفة نقطة إعادة الطلب وتحديدها لضمان سير حركة العمل بسلاسة.",
             "حساب كمية الطلب الاقتصادية لموازنة الإنفاق وإشغال المخازن بحكمة.",
             "تحليل تكلفة التخزين اليومية التي تشمل المساحة، وإضاءة المخزن وقيمة العاملين المضافة.",
             "وضع استراتيجية لتفادي تراكم السلع غير الضرورية لفترات أطول من المخطط لها.",
             "استخدام الرسوم البيانية لفهم فترات الذروة واحتياج المستودع فيها لزيادة الاستيعاب.",
             "تسهيل تدفق المعلومات حول السلع بين المورد وأمين النقل وأمين المخازن مباشرة."
          ],
          summaryEN: [
             "Knowing the reorder point and identifying it to ensure smooth workflow operations.",
             "Calculating the economic order quantity to balance spending and wisely taking up warehouse space.",
             "Analyzing daily storage costs which include space, lighting, and the added value of workers.",
             "Developing a strategy to avoid the accumulation of unnecessary goods for longer than planned.",
             "Using charts to understand peak periods and the warehouse's need for increased capacity during them.",
             "Facilitating the flow of information about goods directly between the supplier, the transporter, and the storekeeper."
          ],
          task: {
             title: "تمرين",
             titleEN: "Exercise",
             description: "احسب نقطة إعادة الطلب لمنتج في بيتك يستهلك بانتظام.",
             descriptionEN: "Calculate the reorder point for a regularly consumed product in your home."
          },
          xpReward: 160,
          quiz: []
        }
      ]
    },
    {
      id: "stage-4",
      title: "المرحلة الرابعة: الاحتراف، التقارير، ومشروع التخرج",
      titleEN: "Stage 4: Professionalism, Reports, and Final Project",
      description: "إعداد تقارير احترافية ومواكبة عالم اللوجستيات الحديث ومناقشة مشروع التخرج.",
      descriptionEN: "Preparing professional reports, keeping up with modern logistics, and discussing the final project.",
      lessons: [
        {
          id: "lesson-13",
          title: "إعداد تقارير المخزون الشهرية",
          titleEN: "Preparing Monthly Inventory Reports",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"],
          duration: "15 min",
          summary: [
             "إدراج جدول الأرصدة الافتتاحية والختامية بوضوح لمعرفة الفروقات الحالية.",
             "إرفاق حركات الداخل والخارج لفهم طبيعة دوران المنتجات المختلفة المستلمة والمباعة.",
             "إبراز قيمة المخزون الحالي الإجمالية مالياً للمسؤول والمدير لمراجعتها باستمرار.",
             "توضيح الأصناف الراكدة وتبيان الفترة الكلية لركودها مع اقتراحات لسرعة البيع.",
             "الحفاظ على أسلوب واضح وتنسيقات مناسبة تسهّل قراءة التقارير الرقمية للإدارة.",
             "مراجعة التقرير وتصحيحه قبل عملية الطباعة النهائية أو إرساله الكترونياً بريدياً."
          ],
          summaryEN: [
             "Clearly including the opening and closing balances table to know the current differences.",
             "Attaching inbound and outbound movements to understand the turnover nature of various items.",
             "Highlighting the total financial value of current inventory for the manager to constantly review.",
             "Detailing slow-moving items and showing their total stagnation period with suggestions for quick sale.",
             "Maintaining a clear style and appropriate formatting making it easy for management to read digital reports.",
             "Reviewing and correcting the report prior to final printing or sending it electronically via email."
          ],
          task: {
             title: "تمرين",
             titleEN: "Exercise",
             description: "أنشئ تقرير مخزون شهري بسيط (شهر وهمي) باستخدام جدول Excel.",
             descriptionEN: "Create a simple monthly inventory report (mock month) using an Excel table."
          },
          xpReward: 140,
          quiz: []
        },
        {
          id: "lesson-14",
          title: "التعامل مع المرتجعات والتوالف",
          titleEN: "Handling Returns and Damages",
          visualType: "animation",
          visualUrls: ["https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80"],
          duration: "13 min",
          summary: [
             "استعداد أمين المخازن للتعامل مع المرتجعات بروتوكوليا ودون مماطلة المستفيدين.",
             "فحص ومعاينة البضاعة المرجعة لمعرفة ما إذا كانت قابلة للتدوير مرة أخرى أو تالفة فعلياً.",
             "تعبئة استمارة التوالف والمرتجعات بشفافية لكي يستمر تدفق البيانات.",
             "يتم عزل التوالف فوراً عن السلع الصالحة وإرجاعها في مناطق محددة 'مناطق الإرجاع'.",
             "تقييد وتسجيل المعلومات في نظام وإرسال نسخة للإدارة للحد من وقوع هذه الخسارة وتكرارها.",
             "إخبار المورد بالأخطاء والمسببات ليعيد إرسال البدائل بأسلوب عملي مهني ومحمي."
          ],
          summaryEN: [
             "Storekeeper readiness to handle returns via protocols without delaying beneficiaries.",
             "Inspecting and examining returned goods to see if they are recyclable or truly damaged.",
             "Transparently filling out damages and returns forms for data flow to continue.",
             "Damaged goods are immediately isolated from usable ones and returned to designated 'Returns Areas'.",
             "Logging information into the system and sending a copy to management to reduce and prevent this loss.",
             "Notifying the supplier of errors to resend practical, professional, and safe replacements."
          ],
          task: {
             title: "تمرين",
             titleEN: "Exercise",
             description: "اكتب سيناريو مرتجع لصنف تالف، واملأ استمارة مرتجع وهمية.",
             descriptionEN: "Write a return scenario for a damaged item and fill out a mock return form."
          },
          xpReward: 140,
          quiz: []
        },
        {
          id: "lesson-15",
          title: "التخزين في المستودعات الكبرى واللوجستيك الحديث",
          titleEN: "Storage in Large Warehouses and Modern Logistics",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"],
          duration: "16 min",
          summary: [
             "الاطلاع على مستجدات المستودعات الضخمة والآليات الحديثة المتبعة فيها لإدارة اللوجستيك.",
             "فهم أهمية الأتمتة وكيف تنقل الروبوتات والسيور الناقلة البضائع الكبيرة تلقائياً داخل المبنى المعني.",
             "استخدام لوحات التحكم الرقمية لمتابعة حركة السلع دون الحاجة للحضور الجسدي في كل شق ورف.",
             "فرص النمو المتاحة لأمناء المخازن في الجزائر نتيجة هذا التحول التكنولوجي اللوجيستي والمحلي.",
             "تخطيط مسارات التوزيع وإمداد الشاحنات أوتوماتيكياً وتسليم السلع وإدراج نظام تعقب رقمي مباشر لآليات العمل ومتابعة المنجزات.",
             "الموازنة الدقيقة لمهمة تسيير الكوادر والعمال و المهندسين المكلفين لإصلاح خلل المنصة عند العوائق."
          ],
          summaryEN: [
             "Reviewing major warehouse developments and modern logistics mechanisms implemented in them.",
             "Understanding the importance of automation and how robots and conveyor belts automatically transport large goods internally.",
             "Using digital control panels to track the movement of goods without needing to be physically present at every rack.",
             "Growth opportunities available to storekeepers in Algeria as a result of this technological and local logistics shift.",
             "Routing and automating truck supply, delivering goods, integrating direct digital tracking systems, and overseeing achievements.",
             "Carefully balancing the task of managing staff and engineers assigned to fix platform disruptions."
          ],
          task: {
             title: "تمرين",
             titleEN: "Exercise",
             description: "ابحث عن مستودع كبير في الجزائر (أونلاين) واكتب 3 تقنيات حديثة يستخدمها.",
             descriptionEN: "Research a large warehouse in Algeria (online) and write down 3 modern technologies it uses."
          },
          xpReward: 150,
          quiz: []
        },
        {
          id: "lesson-16",
          title: "مشروع التخرج – تصميم وإدارة مخزن متكامل",
          titleEN: "Final Project - Designing and Managing a Complete Warehouse",
          visualType: "illustration",
          visualUrls: ["https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?auto=format&fit=crop&w=800&q=80"],
          duration: "60 min",
          summary: [
             "إعداد قائمة بـ 30 صنفاً تخيليا مع إدراج المواصفات كاملة (الأكواد والحدود).",
             "ترتيب جداول حسابية واضحة في اكسل و العمل عليها باستمرار وتدوينة الإحصاء بدقتهِ واحترافية.",
             "إنشاء مخطط أو مجسم بسيط للمخزن يشمل تقسيم المسارات ( الاستلام - التخزين - منطقة الشحن ).",
             "عمل وإيجاد خطة جرد شهري سريعة للمنصات و إدراج توقيتها وإجراءاتها المستحدثة.",
             "تبيين كيفية استلام الأصناف الجديدة وكيف تتصرف عند التلف والمرتجعات خطوة بخطوة عمليا.",
             "جمع الأعمال السابقة وتقديمها على هيئة تقرير شهري جاهز وواضح و مناقشته في مسار التعليم للمدرب.",
             "مبروك! أنت الآن أمين مخزن محترف، مستعد لتنظيم أكبر المستودعات."
          ],
          summaryEN: [
             "Preparing a list of 30 imaginary items, including full specifications (codes and limits).",
             "Arranging clear spreadsheet tables in Excel, working on them constantly, and logging statistics with accuracy and professionalism.",
             "Creating a diagram or simple model of the warehouse including route division (Receiving - Storage - Shipping area).",
             "Developing a quick monthly inventory plan for platforms, its timing, and its updated procedures.",
             "Demonstrating how to receive new items and handle damages and returns step-by-step practically.",
             "Compiling previous tasks into a ready and clear monthly report to discuss during the training path with the instructor.",
             "Congratulations! You are now a professional storekeeper, ready to organize the largest warehouses."
          ],
          task: {
             title: "مشروع التخرج",
             titleEN: "Final Project",
             description: "تخيل أنك عينت أمين مخزن لمؤسسة تجارية تبيع مواد التنظيف. أعد ما يلي: 1- قائمة بـ30 صنفاً مع الأكواد. 2- جدول مخزون एक्सेल. 3- مخطط للمخزن. 4- خطة جرد. 5- إجراءات استلام. 6- تقرير مبسط.",
             descriptionEN: "Imagine you are appointed as a storekeeper for a cleaning supplies company. Prepare: 1. A list of 30 items with codes. 2. An Excel inventory table. 3. A warehouse layout. 4. An inventory plan. 5. Receiving procedures. 6. A simplified report."
          },
          xpReward: 500,
          quiz: []
        }
      ]
    }
  ]
};
