import { Course } from "./courses";

export const itTechnicianCourse: Course = {
  craftId: 'it_technician',
  title: 'تقني الإعلام الآلي – صيانة الحاسوب والشبكات',
  titleEN: 'IT Technician – Computer & Network Maintenance',
  description: 'في زمن الرقمنة المتسارع، أصبح تقني الإعلام الآلي أحد أكثر الحرف طلباً في الجزائر. هو الطبيب الذي يشخص أعطال الحواسيب، والخبير الذي يركّب الشبكات ويحميها. من إصلاح الأعطال المادية (Hardware) إلى تنصيب أنظمة التشغيل ومكافحة الفيروسات، يعمل تقني الإعلام الآلي في شركات، مؤسسات تعليمية، أو في ورشته الخاصة. يجمع بين المهارة اليدوية في تفكيك وتركيب القطع الإلكترونية، والفهم العميق للبرمجيات والشبكات. إنها حرفة لا تعرف الركود، تتطور باستمرار، وتوفر دخلاً ممتازاً مع إمكانية التخصص في مجالات مثل الأمن السيبراني أو إدارة الخوادم. تبدأ كمساعد تقني، وتكبر لتصبح مدير شبكات أو صاحب محل صيانة.',
  descriptionEN: 'In this era of rapid digitization, the IT Technician has become one of the most in-demand crafts in Algeria. They are the doctor who diagnoses computer malfunctions, and the expert who installs and secures networks. From repairing hardware faults to installing operating systems and fighting viruses, the IT technician works in companies, schools, or their own workshop. They combine manual skill in disassembling and assembling electronic components with deep understanding of software and networks. It is a craft that never stagnates, constantly evolves, and provides excellent income with the possibility of specializing in fields like cybersecurity or server administration. You start as a technical assistant and grow into a network manager or owner of a repair shop.',
  levels: [
    {
      id: 'it_lvl_1',
      title: 'المرحلة 1: أساسيات الحاسوب والمعدات',
      titleEN: 'Stage 1: Computer Basics & Hardware',
      description: 'تعرف على مكونات الحاسوب الداخلية، الأدوات الأساسية للصيانة، تثبيت أنظمة التشغيل والتعريفات.',
      descriptionEN: 'Learn internal computer components, basic maintenance tools, installing OS and drivers.',
      lessons: [
        {
          id: 'it_1_1',
          title: 'مكونات الحاسوب الداخلية والتعرف عليها',
          titleEN: 'Internal Computer Components and Identification',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'حاسوب مكتبي مفتوح، تظهر داخله اللوحة الأم، المعالج، الذاكرة RAM، القرص الصلب، وبطاقة الرسوميات. عند التمرير على كل قطعة، تظهر تسميتها ووظيفتها.',
          visualDescriptionEN: 'An open desktop computer showing motherboard, CPU, RAM, hard drive, and graphics card. Hovering reveals name and function.',
          duration: '06:00',
          summary: [
            'اللوحة الأم (Motherboard) هي القطعة المركزية التي تربط جميع المكونات.',
            'المعالج (CPU) بمثابة العقل المدبر للحاسوب.',
            'الذاكرة العشوائية (RAM) مسؤولة عن تخزين البيانات المؤقتة وسرعة الاستجابة.',
            'القرص الصلب (HDD/SSD) مساحة التخزين الدائمة للملفات والنظام.',
            'مزود الطاقة (Power Supply) يوزع الكهرباء بجهد مناسب للمكونات.',
            'بطاقات التوسعة (Expansion Cards) كبطاقة الشاشة والصوت لإضافة ميزات إضافية.'
          ],
          summaryEN: [
            'Motherboard is the central piece connecting all components.',
            'Processor (CPU) acts as the brain behind the computer.',
            'Random Access Memory (RAM) temporarily stores data for quick response.',
            'Hard Drive (HDD/SSD) provides permanent storage space.',
            'Power Supply unit distributes proper electrical voltage.',
            'Expansion Cards (GPU, sound) add extra features to the system.'
          ],
          task: {
            title: 'استكشاف الأجزاء',
            titleEN: 'Component exploration',
            description: 'افتح حاسوباً قديماً (بإشراف) وتعرف على 5 مكونات رئيسية فيه.',
            descriptionEN: 'Open an old computer (under supervision) and identify 5 main components.'
          },
          quiz: [
            {
              id: 'it_1_1_q1',
              question: 'أي قطعة تعتبر "العقل" الذي ينفذ الأوامر في الحاسوب؟',
              questionEN: 'Which component is considered the "brain" that executes commands in the computer?',
              options: [
                { id: 'o1', text: 'اللوحة الأم', textEN: 'Motherboard', isCorrect: false },
                { id: 'o2', text: 'المعالج (CPU)', textEN: 'Processor (CPU)', isCorrect: true },
                { id: 'o3', text: 'القرص الصلب', textEN: 'Hard Drive', isCorrect: false }
              ],
              explanation: 'المعالج هو القطعة المسؤولة عن معالجة البيانات وتنفيذ الأوامر البرمجية.',
              explanationEN: 'The processor is responsible for processing data and executing software instructions.'
            }
          ],
          xpReward: 30
        },
        {
          id: 'it_1_2',
          title: 'الأدوات الأساسية لصيانة الحاسوب',
          titleEN: 'Basic Computer Maintenance Tools',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'مجموعة أدوات على طاولة: مفكات دقيقة، كباس RJ45، ملقط بلاستيكي، سوار مضاد للكهرباء الساكنة. كل أداة تُستخدم في مشهد صغير.',
          visualDescriptionEN: 'Tools on a table: precision screwdrivers, RJ45 crimper, plastic tweezers, anti-static wrist strap. Each tool is used in a small scene.',
          duration: '05:30',
          summary: [
            'المفكات الدقيقة تُستخدم لفك براغي الحواسيب المحمولة والمكتبية.',
            'كباس الشبكة (Crimping Tool) لتأريج وتجهيز كابلات RJ45.',
            'سوار تفريغ الشحنات يمنع التلف الكهروستاتيكي للقطع.',
            'الملقط والمغناطيس لاسترداد البراغي الصغيرة التي تسقط داخلياً.',
            'جهاز فحص الكابلات (LAN Tester) لاختبار سلامة الاتصال الشبكي.',
            'بخاخ تنظيف الغبار (Blower) ومادة لتنظيف اللوحات (Contact Cleaner).'
          ],
          summaryEN: [
            'Precision screwdrivers are used for laptops and desktops.',
            'Crimping Tool is used for creating RJ45 network cables.',
            'Anti-static wrist strap prevents electrostatic damage to components.',
            'Tweezers and magnetic tools retrieve tiny fallen screws.',
            'LAN Tester checks the integrity of network connections.',
            'Air blower and contact cleaner are essential for dusting inside the casing.'
          ],
          task: {
            title: 'بدائل أدوات الصيانة',
            titleEN: 'Maintenance tool alternatives',
            description: 'اجمع 5 أدوات منزلية يمكن أن تستخدمها كبديل لأدوات الصيانة (مثلاً ملقط ثلج بدل الملقط البلاستيكي).',
            descriptionEN: 'Gather 5 household items that could be used as alternatives to maintenance tools (e.g., ice tongs instead of plastic tweezers).'
          },
          quiz: [
            {
              id: 'it_1_2_q1',
              question: 'لماذا يجب استخدام سوار مضاد للكهرباء الساكنة عند التعامل مع القطع الداخلية؟',
              questionEN: 'Why should an anti-static wrist strap be used when handling internal hardware?',
              options: [
                { id: 'o1', text: 'لتجنب الصدمات الكهربائية القاتلة من مزود الطاقة', textEN: 'To prevent fatal electric shocks from the power supply', isCorrect: false },
                { id: 'o2', text: 'لتفريغ الشحنات الساكنة من جسمك التي قد تتلف الدوائر الإلكترونية', textEN: 'To discharge static electricity from your body that could damage electronic circuits', isCorrect: true },
                { id: 'o3', text: 'لاحتواء وتثبيت البراغي المغناطيسية', textEN: 'To contain magnetic screws securely', isCorrect: false }
              ],
              explanation: 'جسم الإنسان يولد كهرباء ساكنة تكفي لحرق الرقاقات الإلكترونية الدقيقة إذا تم لمسها مباشرة.',
              explanationEN: 'The human body generates static electricity capable of frying delicate microchips if touched directly.'
            }
          ],
          xpReward: 30
        },
        {
          id: 'it_1_3',
          title: 'أنظمة التشغيل – تثبيت ويندوز خطوة بخطوة',
          titleEN: 'Operating Systems – Windows Installation Step by Step',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'شاشة تظهر خطوات تثبيت ويندوز: الإقلاع من USB، تقسيم القرص، اختيار النسخة، الكتابة على القرص، وإعادة التشغيل.',
          visualDescriptionEN: 'Screen showing Windows installation steps: booting from USB, partitioning, selecting edition, writing to disk, and restarting.',
          duration: '08:00',
          summary: [
            'تنزيل نسخة ISO وحرقها على فلاشة باستخدام أداة مثل Rufus.',
            'الدخول إلى إعدادات BIOS أو UEFI لتغيير ترتيب الإقلاع (Boot Order).',
            'بدء التثبيت عبر الفلاشة واختيار اللغة والوقت ولوحة المفاتيح.',
            'حذف أو فورمات أقراص التخزين وتقسيم القرص الصلب (Partitions).',
            'انتظار نسخ الملفات الأساسية وإعادة التشغيل التلقائي.',
            'مرحلة الإعداد النهائي (اسم المستخدم، الاتصال، التحديثات).'
          ],
          summaryEN: [
            'Downloading an ISO and burning it to a USB drive using Rufus.',
            'Entering BIOS or UEFI settings to change the Boot Order.',
            'Starting installation via USB, selecting language, time, and keyboard.',
            'Deleting or formatting storage drives and creating partitions.',
            'Waiting for system files to copy and the automatic restart.',
            'Final setup phase (username, connection, updates).'
          ],
          task: {
            title: 'تجهيز أداة الإقلاع',
            titleEN: 'Preparing the boot tool',
            description: 'جهز فلاشة USB قابلة للإقلاع باستخدام أداة Rufus، وجرب الإقلاع منها (حتى شاشة الترحيب).',
            descriptionEN: 'Prepare a bootable USB drive using Rufus, and try booting from it (up to the welcome screen).'
          },
          quiz: [
            {
              id: 'it_1_3_q1',
              question: 'ما هو المكان الذي نعدل منه خيار الإقلاع ليصبح من الفلاشة (USB) أولاً؟',
              questionEN: 'Where do we modify the boot order option to boot from USB first?',
              options: [
                { id: 'o1', text: 'لوحة تحكم الويندوز (Control Panel)', textEN: 'Windows Control Panel', isCorrect: false },
                { id: 'o2', text: 'شاشة الـ BIOS أو UEFI', textEN: 'BIOS or UEFI screen', isCorrect: true },
                { id: 'o3', text: 'إدارة المهام (Task Manager)', textEN: 'Task Manager', isCorrect: false }
              ],
              explanation: 'إعدادات الإقلاع تتم على مستوى أجهزة اللوحة الأم الأساسية (BIOS) قبل بدء نظام التشغيل.',
              explanationEN: 'Boot settings are handled at the motherboard\'s firmware level (BIOS) before any OS loading.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'it_1_4',
          title: 'تثبيت التعريفات (Drivers) وبرامج التشغيل الأساسية',
          titleEN: 'Installing Drivers and Basic Essential Software',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'شاشة تظهر إدارة الأجهزة (Device Manager)، بعض الأجهزة بعلامة تعجب صفراء. يد تضغط "تحديث التعريف"، وتختار ملف التعريف المناسب.',
          visualDescriptionEN: 'Screen showing Device Manager, some devices have a yellow exclamation mark. A hand clicks "Update Driver" and selects the appropriate file.',
          duration: '06:00',
          summary: [
            'التعريف (Driver) هو الكود الذي يساعد النظام على فهم القطعة المرتبطة به.',
            'علامة التعجب الصفراء في Device Manager تعني نقص تعريف القطعة.',
            'كيفية إيجاد التعريفات عبر الموقع الرسمي للشركة المصنعة.',
            'استخدام برامج مثل Snappy Driver لتعريف جميع القطع آلياً بخطوة واحدة.',
            'تنصيب برامج العمل الافتراضية (WinRAR، متصفحات، وVLC، وأوفيس).',
            'التأكد من تشغيل الصوت، دقة الشاشة، والشبكات بنجاح.'
          ],
          summaryEN: [
            'A Driver is code that helps the OS understand connected hardware.',
            'Yellow exclamation marks in Device Manager mean missing drivers.',
            'Finding drivers officially via the manufacturer\'s website.',
            'Using tools like Snappy Driver to install all drivers automatically in one step.',
            'Installing essential work software (WinRAR, browsers, VLC, Office).',
            'Ensuring audio, screen resolution, and networks operate successfully.'
          ],
          task: {
            title: 'إدارة الأجهزة',
            titleEN: 'Device manager inspection',
            description: 'افتح إدارة الأجهزة على حاسوبك، وابحث عن أي جهاز بعلامة استفهام. حاول تحديث تعريفه.',
            descriptionEN: 'Open Device Manager on your computer, look for any device with a question mark. Try updating its driver.'
          },
          quiz: [
            {
              id: 'it_1_4_q1',
              question: 'ماذا تعني علامة التعجب الصفراء بجوار أحد المكونات في إدارة الأجهزة؟',
              questionEN: 'What does the yellow exclamation mark next to a component in Device Manager mean?',
              options: [
                { id: 'o1', text: 'القطعة معطلة مادياً ولا يمكن إصلاحها', textEN: 'The hardware is physically broken and irrepairable', isCorrect: false },
                { id: 'o2', text: 'نظام التشغيل لا يملك التعريف الصحيح للتواصل معها', textEN: 'The OS does not have the correct driver to communicate with it', isCorrect: true },
                { id: 'o3', text: 'القطعة تعمل بشكل خارق (أداء عالي)', textEN: 'The hardware is performing optimally (high performance)', isCorrect: false }
              ],
              explanation: 'علامة التعجب تشير لعدم وجود الدرايفر السليم، ولحلها يكفي تثبيته برمجياً.',
              explanationEN: 'The exclamation mark indicates a missing correct driver, solved by installing it via software.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'it_lvl_2',
      title: 'المرحلة 2: الصيانة والبرمجيات',
      titleEN: 'Stage 2: Maintenance and Software',
      description: 'تعلم تشخيص الأعطال الشائعة، الترقية، التعامل مع الفيروسات وعمليات النسخ الاحتياطي.',
      descriptionEN: 'Learn common troubleshooting, hardware upgrades, handling viruses, and performing backups.',
      lessons: [
        {
          id: 'it_2_1',
          title: 'تشخيص أعطال الحاسوب الشائعة وإصلاحها',
          titleEN: 'Troubleshooting and Fixing Common Computer Issues',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'حاسوب لا يعمل (شاشة سوداء). تقني يفحص كابل الطاقة، يستبدل RAM، يفصل بطارية CMOS ويعيدها. الحاسوب يعمل في النهاية.',
          visualDescriptionEN: 'Computer not turning on (black screen). Tech checks power cable, replaces RAM, removes CMOS battery and puts it back. Computer works at the end.',
          duration: '07:30',
          summary: [
            'المشاكل الكهربائية: فحص مزود الطاقة (Alimentation) واستبداله.',
            'الشاشة السوداء أو الصفارة (Beep Codes): فحص و تنظيف واجهة RAM.',
            'ارتفاع درجة الحرارة: تنظيف المروحة وتغيير المعجون الحراري.',
            'بطء الجهاز: التحقق من صحة القرص (HDD Health) واستبداله.',
            'تفريغ الشحنات الكهربائية بتجريد الطاقة والضغط على زر التشغيل.',
            'إعادة ضبط الـ BIOS بفصل بطارية CMOS المؤقتة.'
          ],
          summaryEN: [
            'Electrical issues: Checking and replacing the power supply unit (PSU).',
            'Black screen or beep codes: Inspecting and cleaning RAM slots.',
            'Overheating: Cleaning the fan and replacing thermal paste.',
            'System slowness: Verifying Hard Drive health and replacing it.',
            'Discharging static buildup by removing power and holding the power button.',
            'Resetting BIOS by temporarily removing the CMOS battery.'
          ],
          task: {
            title: 'خطوات التشخيص الوهمية',
            titleEN: 'Mock diagnosis steps',
            description: 'تخيل أن حاسوبك لا يشتغل. اكتب 5 خطوات ستقوم بها لتشخيص العطل قبل استدعاء خبير.',
            descriptionEN: 'Imagine your computer won\'t turn on. Write down 5 steps you\'ll take to diagnose the fault before calling an expert.'
          },
          quiz: [
            {
              id: 'it_2_1_q1',
              question: 'الجهاز يطلق أصوات صفير (Beeps) متتالية عند التشغيل ولا تعرض الشاشة شيء. المشكلة غالباً تتعلق بـ:',
              questionEN: 'The computer emits consecutive beep sounds on startup and shows no display. The issue is most likely related to:',
              options: [
                { id: 'o1', text: 'الذاكرة العشوائية (RAM) أو شريحة الرسوم', textEN: 'RAM memory or graphics card', isCorrect: true },
                { id: 'o2', text: 'عطل في مشغل الأقراص المرنة', textEN: 'Floppy disk drive failure', isCorrect: false },
                { id: 'o3', text: 'كابل الإنترنت غير موصول', textEN: 'Ethernet cable disconnected', isCorrect: false }
              ],
              explanation: 'الشفرات الصوتية لـ BIOS في الغالب تحذر من تركيب غير صحيح لـ RAM أو خلل في كرت الشاشة.',
              explanationEN: 'BIOS beep codes typically warn about improperly seated RAM or a faulty graphics card.'
            }
          ],
          xpReward: 40
        },
        {
          id: 'it_2_2',
          title: 'تنظيف الجهاز من الفيروسات والبرامج الضارة',
          titleEN: 'Cleaning the PC from Viruses and Malware',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1553531580-652231db3b6f?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'شاشة مليئة بنوافذ إعلانية مزعجة. تقني يدخل الوضع الآمن (Safe Mode)، يشغل برنامج تنظيف (Malwarebytes)، والفيروسات تُحذف.',
          visualDescriptionEN: 'Screen full of annoying pop-up ads. Technician enters Safe Mode, runs a cleaning program (Malwarebytes), and the viruses are deleted.',
          duration: '06:00',
          summary: [
            'أنواع البرمجيات الخبيثة: تروجان، برامج الفدية (Ransomware)، والإعلانات المزعجة.',
            'أهمية عدم فتح الروابط المشبوهة أو البرامج المكركة (Cracked).',
            'الدخول إلى "الوضع الآمن" (Safe Mode) لإيقاف عمل الفيروس في الخلفية.',
            'استخدام برامج مثل Malwarebytes لتنظيف جذري وفحص كامل.',
            'حذف الإضافات الخبيثة من المتصفحات وتصفية الريجستري.',
            'تفعيل دوري لبرنامج Windows Defender أو أي Antivirus موثوق.'
          ],
          summaryEN: [
            'Malware types: Trojans, Ransomware, and Adware.',
            'Importance of not opening suspicious links or cracked software.',
            'Entering "Safe Mode" to stop background virus activity.',
            'Using programs like Malwarebytes for deep cleaning and full scanning.',
            'Removing malicious browser extensions and cleaning the registry.',
            'Regularly enabling Windows Defender or a trusted Antivirus.'
          ],
          task: {
            title: 'فحص الحماية',
            titleEN: 'Protection scan',
            description: 'حمل نسخة مجانية من برنامج Malwarebytes وافحص حاسوبك.',
            descriptionEN: 'Download the free version of Malwarebytes and scan your computer.'
          },
          quiz: [
            {
              id: 'it_2_2_q1',
              question: 'لماذا يُنصح بالدخول إلى "الوضع الآمن" (Safe Mode) عند محاولة إزالة الفيروسات المعقدة؟',
              questionEN: 'Why is it recommended to boot into Safe Mode when attempting to remove stubborn viruses?',
              options: [
                { id: 'o1', text: 'لإغلاق أي خدمات ثانوية وبرامج تمنع حذف الفيروس', textEN: 'To disable secondary services and programs that prevent virus deletion', isCorrect: true },
                { id: 'o2', text: 'لتسريع الانترنت وتحميل الانتي فايروس بسرعة أقوى', textEN: 'To speed up the internet and download antivirus software faster', isCorrect: false },
                { id: 'o3', text: 'لكي يتم مسح كل بيانات القرص العشوائي', textEN: 'In order to wipe all data from the random access drive', isCorrect: false }
              ],
              explanation: 'في الوضع الآمن يتم تشغيل ويندوز بالحد الأدنى من البرامج، مما يمنع الفيروس من تشغيل برامجه الدفاعية.',
              explanationEN: 'In Safe Mode, Windows runs with minimal drivers, preventing the virus from starting its defensive processes.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'it_2_3',
          title: 'النسخ الاحتياطي واستعادة البيانات',
          titleEN: 'Data Backup and Recovery',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'قرص صلب خارجي متصل بحاسوب. شاشة تظهر برنامج نسخ احتياطي، ونافذة "استعادة الملفات".',
          visualDescriptionEN: 'External hard drive connected to a computer. Screen showing backup software, and a "File Recovery" window.',
          duration: '06:00',
          summary: [
            'النسخ الاحتياطي هو حزام أمان الرقمي لضمان عدم ضياع الداتا.',
            'استخدام أقراص خارجية (External HDD) أو السحابة (Google Drive) للحفظ المتكرر.',
            'إنشاء نقطة استعادة النظام (System Restore Point) لحماية وندوز.',
            'أخذ نسخة احتياطية من صورة القرص باستخدام برامج كـ Macrium Reflect.',
            'استخدام برامج مثل Recuva لمحاولة إرجاع الملفات المحذوفة.',
            'قاعدة 3-2-1 للنسخ الاحتياطي: 3 نسخ، 2 أقراص مختلفة، ومكان جغرافي آخر.'
          ],
          summaryEN: [
            'Backups are the digital seatbelt ensuring no data is ever lost.',
            'Using external HDDs or cloud storage (Google Drive) for repeated saving.',
            'Creating a System Restore Point to protect Windows.',
            'Taking full disk image backups using software like Macrium Reflect.',
            'Using programs like Recuva to try reverting deleted files.',
            'The 3-2-1 backup rule: 3 copies, across 2 different media, 1 located off-site.'
          ],
          task: {
            title: 'جلسة نسخ احتياطي',
            titleEN: 'Backup session',
            description: 'انسخ مجلد المستندات الخاص بك على قرص خارجي أو سحابي.',
            descriptionEN: 'Back up your documents folder to an external drive or loud storage.'
          },
          quiz: [
            {
              id: 'it_2_3_q1',
              question: 'ما هي أهمية استخدام "نقطة استعادة النظام"؟',
              questionEN: 'What is the importance of using a System Restore Point?',
              options: [
                { id: 'o1', text: 'إنقاذ ملفات النظام والبرامج في حالة تحديث معطوب، دون الحذف للإيميلات', textEN: 'Rescuing system files/programs in case of a corrupted update, returning to a previously working state', isCorrect: true },
                { id: 'o2', text: 'حذف جميع الصور والفيديوهات تلقائياً', textEN: 'Deleting all photos and videos automatically', isCorrect: false },
                { id: 'o3', text: 'زيادة مساحة القرص الصلب', textEN: 'Increasing hard drive storage space', isCorrect: false }
              ],
              explanation: 'تساعد للرجوع بحالة ويندوز لاعدادات العمل السابقة عند الفشل برمجيا.',
              explanationEN: 'It helps revert Windows registry and settings to a previously working state during software failures.'
            }
          ],
          xpReward: 30
        },
        {
          id: 'it_2_4',
          title: 'ترقية مكونات الحاسوب (RAM والقرص الصلب)',
          titleEN: 'Computer Upgrading (RAM and Storage Drives)',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1541888082003-8889ee4a46a5?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'حاسوب محمول مفتوح. تقني يضيف شريحة RAM جديدة، ثم يستبدل القرص الصلب بقرص SSD. الجهاز يشتغل بسرعة أكبر.',
          visualDescriptionEN: 'An open laptop. Technician adds a new RAM stick, then replaces the HDD with an SSD. The device boots up much faster.',
          duration: '07:00',
          summary: [
            'الترقية (Upgrade) تزيد من العمر الافتراضي للجهاز بأقل تكلفة.',
            'تغيير القرص الصلب القديم (HDD) بقرص حديث (SSD) هو أقوى تحديث لتسريع الجهاز بأضعاف.',
            'زيادة سعف الرام (RAM) تعطي الجهاز القدرة على فتح نوافذ كثيرة بدون تباطؤ.',
            'معرفة توافق المكونات (مثال: نوع الذاكرة DDR3 مقابل DDR4) باستخدام أداة Task Manager.',
            'فتح الحواسيب المحمولة بحذر لتجنب كسر الشاسيه وفصل البطارية أولاً.',
            'استنساخ الويندوز من القرص القديم للحديث باستخدام تقسيمات القرص.'
          ],
          summaryEN: [
            'Upgrading extends the device\'s lifespan at minimal costs.',
            'Replacing old Mechanical Hard Drives (HDD) with Solid State Drives (SSD) provides the biggest speed boost.',
            'Adding RAM capacity gives the PC horsepower to open heavy apps without lagging.',
            'Identifying component compatibility (e.g. DDR3 vs DDR4 memory typings) using Task Manager.',
            'Carefully opening laptops to avoid cracking chassis, ensuring battery is unplugged first.',
            'Cloning Windows from the old drive to a new SSD directly.'
          ],
          task: {
            title: 'توافق حاسوبك',
            titleEN: 'Your computer compatibility',
            description: 'ابحث عن نوع RAM المناسب لحاسوبك (أونلاين)، واقرأ دليل استبداله.',
            descriptionEN: 'Find the appropriate RAM type for your computer (online), and read its replacement guide.'
          },
          quiz: [
            {
              id: 'it_2_4_q1',
              question: 'ما هو التحديث الذي يعطي قفزة ملحوظة جداً في سرعة فتح البرامج وتشغيل الويندوز؟',
              questionEN: 'What upgrade provides a very noticeable jump in app loading times and Windows booting?',
              options: [
                { id: 'o1', text: 'استبدال شاشة اللابتوب', textEN: 'Replacing the laptop screen', isCorrect: false },
                { id: 'o2', text: 'استبدال القرص الميكانيكي HDD بالقرص السريع SSD', textEN: 'Replacing the mechanical HDD with a fast SSD', isCorrect: true },
                { id: 'o3', text: 'تغيير كابل الكهرباء', textEN: 'Changing the power cable', isCorrect: false }
              ],
              explanation: 'قرص الـ SSD يعمل بسرعات قراءة وكتابة أعلى بكثير لقراءة الويندوز بغضون ثواني.',
              explanationEN: 'SSDs operate at vastly higher read/write speeds, loading Windows in seconds.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'it_lvl_3',
      title: 'المرحلة 3: الشبكات والإنترنت',
      titleEN: 'Stage 3: Networks and the Internet',
      description: 'تعمق في إعداد الراوترات، صنع الكابلات، تشخيص الانقطاعات وتكوين الشبكات المحلية.',
      descriptionEN: 'Dive deep into router config, cable making, internet disruption diagnostics, formatting local networks.',
      lessons: [
        {
          id: 'it_3_1',
          title: 'أساسيات الشبكات (LAN, WAN, IP, DNS)',
          titleEN: 'Networking Fundamentals (LAN, WAN, IP, DNS)',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'رسم توضيحي: مجموعة حواسيب متصلة بسويتش، متصل براوتر، متصل بسحابة الإنترنت. أسهم بالألوان تمثل البيانات.',
          visualDescriptionEN: 'Illustration: multiple computers connected to a switch, routing to a router, bridging Internet cloud. Colored arrows representing data.',
          duration: '08:00',
          summary: [
            'الشبكة المحلية (LAN): حواسيب متصلة ببعضها في مبنى أو منزل واحد.',
            'الشبكة الواسعة (WAN): شبكة الإنترنت العالمية الأوسع من حيث النطاق.',
            'عنوان IP (الداخلي): كالهوية التي تميز كل جهاز داخل الشبكة ليتم التواصل.',
            'خادم DNS: هو الدليل الهاتفي الذي يحول الأسماء كـ Google.com إلى أرقام IP ليتم فهمها.',
            'بروتوكول DHCP دور تعيين الـ IP آلياً لجميع الأجهزة فور اتصالها.',
            'البوابة الافتراضية (Default Gateway): عنوان الراوتر الذي يمنحك منفذا للأنترنت.'
          ],
          summaryEN: [
            'Local Area Network (LAN): computers connected within a single building or home.',
            'Wide Area Network (WAN): The broader global internet infrastructure.',
            'Internal IP Address: Acts as an ID distinguishing each device internally.',
            'DNS Server: The phonebook converting domain names like Google.com into backend IP numbers.',
            'DHCP protocol handles automatic assignment of IPs to attaching devices.',
            'Default Gateway: The router\'s address bridging you outwards to the web.'
          ],
          task: {
            title: 'تحليل أرقام شبكتك',
            titleEN: 'Analyzing your network numbers',
            description: 'افتح موجه الأوامر (cmd)، اكتب ipconfig /all وافهم قيم IP، Mask، Gateway.',
            descriptionEN: 'Open Command Prompt (cmd), run ipconfig /all, and understand the IP, Mask, and Gateway values.'
          },
          quiz: [
            {
              id: 'it_3_1_q1',
              question: 'ما هي الخدمة المسؤولة عن تحويل اسم المواقع (مثل harfati.dz) لعنوان IP؟',
              questionEN: 'What service is responsible for translating website names (like harfati.dz) into an IP address?',
              options: [
                { id: 'o1', text: 'DHCP', textEN: 'DHCP', isCorrect: false },
                { id: 'o2', text: 'خادم الأسماء DNS', textEN: 'Domain Name System (DNS)', isCorrect: true },
                { id: 'o3', text: 'عنوان الـ Gateway', textEN: 'Gateway string address', isCorrect: false }
              ],
              explanation: 'أنظمة اسم النطاق DNS تقوم بعملية المطابقة والترجمة من أسماء نصية لأرقام سيرفرات مفهومة حاسوبيا.',
              explanationEN: 'DNS matches and translates human-readable textual domains to machine-comprehensible server IP numbers.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'it_3_2',
          title: 'تركيب وتكوين راوتر منزلي',
          titleEN: 'Installing and Configuring a Home Router',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'راوتر متصل بخط الهاتف. تقني يدخل 192.168.1.1، يضبط اسم الشبكة (SSID) وكلمة المرور، ويفعل التشفير WPA2.',
          visualDescriptionEN: 'Router connected to a phone line. Technician opens 192.168.1.1, sets SSID and password, enabling WPA2 encryption.',
          duration: '07:30',
          summary: [
            'الوصول لصفحة الراوتر عبر IP الافتراضي (غالباً 192.168.1.1) وإدخال بيانات مدير (Admin).',
            'إدخال إعدادات موفر الخدمة ADSL/VDSL واسم الاشتراك والرقم السري من إتصالات الجزائر.',
            'تغيير وضبط اسم شبكة الواي فاي اللاسلكية (SSID) لحجب التخفي.',
            'اختيار بروتوكول أمان (WPA2/WPA3) ووضع كلمة مرور للواي فاي صعبة التكهن.',
            'تغيير كلمة المرور الافتراضية لمنصة الراوتر حتى لا يخترقها الضيوف.',
            'أهمية حفظ الإعدادات و إعادة تشغيل الراوتر للحصول على أول اتصال أنترنت.'
          ],
          summaryEN: [
            'Accessing the router via default IP (usually 192.168.1.1) with Admin credentials.',
            'Setting up ISP ADSL/VDSL settings, putting username/password from local telco.',
            'Configuring and altering the Wireless Network Name (SSID).',
            'Selecting secure protocols (WPA2/WPA3) and formulating tough Wi-Fi passwords.',
            'Changing the default router gateway password to prevent unauthorized tampering.',
            'Saving settings and rebooting to pull the first steady internet connection.'
          ],
          task: {
            title: 'إعدادات راوترك المنزلي',
            titleEN: 'Home router settings',
            description: 'ادخل إلى إعدادات راوتر منزلك (بإذن)، وتعرف على مكان تغيير كلمة مرور الواي فاي.',
            descriptionEN: 'Log into your home router setup (with permission), locate where to change your Wi-Fi password.'
          },
          quiz: [
            {
              id: 'it_3_2_q1',
              question: 'ما نوع بروتوكول التشفير الآمن الذي ننصح باختياره لشبكة الوايفاي لضمان عدم اختراقها بسهولة؟',
              questionEN: 'What secure encryption protocol is widely advised to choose for Wi-Fi configurations to prevent easy access?',
              options: [
                { id: 'o1', text: 'WEP', textEN: 'WEP', isCorrect: false },
                { id: 'o2', text: 'WPA2 أو WPA3', textEN: 'WPA2 or WPA3', isCorrect: true },
                { id: 'o3', text: 'الوضع المفتوح (Open Network)', textEN: 'Open Network configuration', isCorrect: false }
              ],
              explanation: 'بروتوكولات WPA أثبتت جودة وصعوبة الاختراق عكس WEP الضعيف والمتهالك.',
              explanationEN: 'WPA protocols are recognized for their robust cryptographic difficulty against WEP vulnerabilities.'
            }
          ],
          xpReward: 40
        },
        {
          id: 'it_3_3',
          title: 'صنع كابل شبكة RJ45 وفحصه',
          titleEN: 'Crimping and Testing an RJ45 Network Cable',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'يد تمسك بكابل شبكة، تقشره، ترتب الأسلاك حسب الترتيب (T568B)، تدخلها في مقبس RJ45، وتضغط بالكباس. ثم تفحصه بجهاز LAN Tester وتظهر الأضواء خضراء.',
          visualDescriptionEN: 'Hand stripping a network cable, organizing wires (T568B standard), inserting them into RJ45 connector, and crimping. Uses LAN tester confirming with green lights.',
          duration: '06:30',
          summary: [
            'التعرف على كابل UTP واستخدام المكبس (Crimping Tool) لتجريده بحرص.',
            'الكابل المستقيم (Straight) للربط بالحواسيب، المعكوس (Crossover) لربط راوتر براوتر.',
            'ترتيب الأسلاك اللوني (T568B المشهور): أبيض-برتقالي، برتقالي، أبيض-أخضر، أزرق، أبيض-أزرق، أخضر، أبيض-بني، بني.',
            'إدخال الأسلاك لمقبس البلاستيك RJ45 وضمان الملامسة النحاسية للنهاية.',
            'كبس المقبس بقوة معتدلة باستخدام أداة الأرجة لتثبيت كل سلك في مكانه.',
            'التحقق النهائي بجهاز LAN Tester لضمان جريان الإشارة بجميع المسارات (1لـ8).'
          ],
          summaryEN: [
            'Identifying UTP cables and cautiously stripping using a Crimper tool jacket stripper.',
            'Straight cables link PC to hubs/routers, whereas Crossover link alike gears (PC-to-PC).',
            'T568B wire color sequencing: White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown.',
            'Inserting parallel wires smoothly deep inside the RJ45 plastic head connector.',
            'Punching in firmly holding the crimp tool handles to lock metal blades onto the wires.',
            'Testing connectivity with a LAN Tester unit watching for matching 1-to-8 sequencing pings.'
          ],
          task: {
            title: 'محاولة الأرجة',
            titleEN: 'Crimping attempt',
            description: 'اشتري 2 متر من كابل RJ45 ومقبسين، وجرب صنع كابل مستقيم.',
            descriptionEN: 'Buy 2 meters of RJ45 cable and two connectors, try making a functional straight-through cable.'
          },
          quiz: [
            {
              id: 'it_3_3_q1',
              question: 'إذا كنت تخطط لربط حاسوب بمبدل شبكات (Switch)، فما نوع الكابل الذي تعتمده بالمقياس العادي؟',
              questionEN: 'If parsing to connect a computer to a network switch, what standard layout cable type do you make?',
              options: [
                { id: 'o1', text: 'كابل الطاقة', textEN: 'Power AC cable', isCorrect: false },
                { id: 'o2', text: 'كابل مستقيم (Straight-through Cable)', textEN: 'Straight-through cable', isCorrect: true },
                { id: 'o3', text: 'صوت أو HDMI', textEN: 'Audio / HDMI logic cable', isCorrect: false }
              ],
              explanation: 'الكابل المستقيم يستعمل للربط بين أجهزة بمستويات مختلفة كالكمبيوتر والراوتر أو المبدل.',
              explanationEN: 'Straight-through cables are mandated for connecting different hardware layers, i.e., end-nodes to switches.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'it_3_4',
          title: 'حل مشاكل الاتصال بالإنترنت',
          titleEN: 'Troubleshooting Internet Connection Issues',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'أيقونة "لا يوجد اتصال بالإنترنت". تقني يفحص الأضواء على الراوتر، يعيد تشغيله، يفحص الكابل، يتصل بالدعم الفني.',
          visualDescriptionEN: '"No Internet Connection" system icon. Tech inspects router LED lights, restarts it, checks cabling lines, dials technical support.',
          duration: '06:00',
          summary: [
            'التحقق المادي: التأكد من وميض مصابيح جهاز الراوتر واسلاك الربط الهاتفية.',
            'التحقق من إعدادات كرت الشبكة واعادة تشغيل وتنشيط أداة الاتصال اللاسلكي.',
            'إعادة ضبط الراوتر بإطفائه 10 ثوان ثم تشغيله (Power Cycle).',
            'استخدام أمر ping 8.8.8.8 في شاشة الدوس (cmd) لاختبار وصول البيانات عالميا.',
            'أمر tracert لتعقب مكان الانقطاع ومساره.',
            'تغيير عناوين سيرفرات الـ DNS كحل لاختناق أو تعطل موفر الأنترنت المحلي.'
          ],
          summaryEN: [
            'Physical check-up: Ensure hardware LEDs flashing and verifying landline inserts.',
            'Disabling and re-enabling network adapters safely through the Control Panel.',
            'Power Cycling the router (Off 10 secs, then reboot).',
            'Pinging global public IPs (ping 8.8.8.8 via cmd) tests outbound internet vitality.',
            'Using the tracert command details the exact hop node where a signal drops.',
            'Configuring alternative DNS servers (like 8.8.8.8) bypassing local telco bottlenecks.'
          ],
          task: {
            title: 'ترقية موجه الأوامر',
            titleEN: 'Command prompt upgrade',
            description: 'اكتب أمر ping 8.8.8.8 في cmd، واشرح ماذا يعني إذا لم يكن هناك رد.',
            descriptionEN: 'Type the ping 8.8.8.8 command in cmd, and explain what happens if there is "Request timed out".'
          },
          quiz: [
            {
              id: 'it_3_4_q1',
              question: 'متى نستخدم طريقة "إعادة تشغيل الروتر" (إطفاء وتدوير الكهرباء)؟',
              questionEN: 'When exactly do you use a router Power Cycling approach?',
              options: [
                { id: 'o1', text: 'لحذف نظام الويندوز بالكامل', textEN: 'To delete the Windows system completely', isCorrect: false },
                { id: 'o2', text: 'لتفريغ الكاش وتهيئة الربط من جديد كحل سريع لانقطاع مفاجئ وغير مألوف للإنترنت', textEN: 'Flushing cache memory to regain quick internet re-initiation past a sudden blackout drop', isCorrect: true },
                { id: 'o3', text: 'لاطالة عمر الأتصال', textEN: 'To elongate connection life', isCorrect: false }
              ],
              explanation: 'تفصل الكهرباء مدة ثوانٍ تعطي المودم القدرة على تنظيف القنوات والاستحواذ على عنوان IP جديد حيوي.',
              explanationEN: 'Securing a short off-circuit time commands modems to clear cache stacks and grip fresh vital ISP assigned IPs.'
            }
          ],
          xpReward: 35
        }
      ]
    },
    {
      id: 'it_lvl_4',
      title: 'المرحلة 4: الاحتراف والأمن السيبراني',
      titleEN: 'Stage 4: Professionalism & Cyber Security',
      description: 'أمن الأنظمة وحماية البيانات، صيانة الملحقات الطابعة، والتأسيس لعملك الحر كتقني.',
      descriptionEN: 'Data protection and cyber safety, servicing peripheral printers, backing to build freelance IT consulting.',
      lessons: [
        {
          id: 'it_4_1',
          title: 'مقدمة في أمن المعلومات وحماية البيانات',
          titleEN: 'Introduction to Information Security & Data Protection',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'حاسوب ودرع أمامه يحميه من أيقونات فيروسات وهاكرز. تقني يفعّل جدار الحماية و Windows Defender.',
          visualDescriptionEN: 'PC with a glowing digital shield protecting against virus blobs and hacker silhouettes. Tech turning ON Windows Defender switches.',
          duration: '06:00',
          summary: [
            'التحصين الشامل يعتمد على تفعيل جدار الحماية الناري (Firewall).',
            'الأهمية البالغة لإنشاء كلمات مرور صعبة التخمين (12 حرف ومدمجة).',
            'هجمات الاحتيال والتصيد الإلكتروني (Phishing) عبر الروابط الوهمية والإيميلات الخادعة.',
            'تشفير الملفات والوثائق الحساسة ببرمجيات التشفير أو أقفال الويندوز BitLocker.',
            'تفعيل التوثيق الثنائي والتحقق الإضافي بخطوتين (2FA) لمشاريع العميل.',
            'توعية المستخدم العادي هي أقوى جدار حماية لأي مؤسسة.'
          ],
          summaryEN: [
            'Fundamental cyber fortification relies largely on an active native/hardware firewall barrier.',
            'The pivotal importance of deploying lengthy, strong passphrases over simple words.',
            'Phishing scam mechanics through malicious email lures dropping ransom traps.',
            'Cryptographic disk protection routines with native solutions (like Microsoft BitLocker).',
            'Mandating Two-Factor Authentication (2FA) across key client platform access edges.',
            'The notion that "User awareness" overrides all the latest automated intrusion protections.'
          ],
          task: {
            title: 'تقوية جدارك',
            titleEN: 'Fortifying your wall',
            description: 'غير كلمة مرور بريدك الإلكتروني إلى كلمة مرور قوية (12 حرفاً) وفعّل التحقق بخطوتين.',
            descriptionEN: 'Change your primary email password to a strong phrase (12+ characters) and implement 2-Step verification.'
          },
          quiz: [
            {
              id: 'it_4_1_q1',
              question: 'ما هي الخاصية الأمنية التي تطلب منك رمزاً يصل لهاتفك بالإضافة لكلمة المرور للدخول لحساباتك؟',
              questionEN: 'Which security feature mandates entering an SMS code aside from just typing your usual password at login?',
              options: [
                { id: 'o1', text: 'خاصية تشفير الويندوز BitLocker', textEN: 'Windows-encryption BitLocker system', isCorrect: false },
                { id: 'o2', text: 'التحقق والمصادقة بخطوتين الثنائية (2FA)', textEN: 'Two-Factor Authentication/2-Step Verification (2FA)', isCorrect: true },
                { id: 'o3', text: 'خدمة التصفح المخفي', textEN: 'Incognito surfing', isCorrect: false }
              ],
              explanation: 'رغم سرقة الهاكر لكلمة مرور العميل، سيعجز عن العبور لعدم امتلاكه لبطاقة هاتف وجهاز الضحية.',
              explanationEN: 'Despite hackers lifting login passcodes, 2FA hurdles stand strong as SMS payloads hit uniquely tethered devices.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'it_4_2',
          title: 'صيانة الطابعات والماسحات الضوئية',
          titleEN: 'Printers and Scanners Maintenance',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'طابعة متعددة الوظائف. تقني يغير خرطوشة الحبر، ينظف الرأس، ويربط الطابعة بالشبكة.',
          visualDescriptionEN: 'Multi-function printer. Junior tech changes the ink cartridge, commands head cleaning software routine, and networks the printer.',
          duration: '06:30',
          summary: [
            'التعرف على الفروق بين الطابعات النفاثة للحبر (Inkjet) وطابعات الليزر للمكاتب (Laser).',
            'إصلاح مشاكل التوقف و حشر الورق الداخلي بحذر وعكس حركية الاسطوانة.',
            'تغيير خرطوشة الحبر وأهمية تنظيف رأس الطابعة برمجيا وماديا لتجنب تخطيط الصور.',
            'تنصيب برامج تشغيل الطابعة (Driver) وربطها لا سلكياً عبر شبكة الوايفاي.',
            'إعدادات مشاركة الطابعة بالـ Network لجميع الأجهزة دون الحاجة للكابل.',
            'تنظيف مرآة الماسح الضوئي الزجاجي لضمان نسخ أصلية لامعة.'
          ],
          summaryEN: [
            'Understanding structural gaps dictating Inkjet household verses Laserjet corporate usage domains.',
            'Attending mechanical paper jam flaws gracefully releasing rollers backwards reducing snag rips.',
            'Exchanging toner pods and firing mandatory head cleaning cycles preserving sharp crisp color tones.',
            'Routing correct drivers rendering proper functionality bridging native wireless networks effortlessly.',
            'Establishing shared Network directories offering full print-pull capabilities sans USB wires.',
            'Polishing scanner glass mirror plates reflecting impeccable brilliant document transfers.'
          ],
          task: {
            title: 'إخراج الخرطوشة',
            titleEN: 'Ejecting the Cartridge',
            description: 'تفقد طابعة في منزلك أو عملك، ولاحظ كيفية إخراج الخرطوشة.',
            descriptionEN: 'Inspect a printer at home or desk, noting down its cartridge uncoupling clip mechanics.'
          },
          quiz: [
            {
              id: 'it_4_2_q1',
              question: 'هناك خطوط بيضاء أو بهتان بالألوان رغم بقاء كمية حبر. كتقني صيانة مالحل البرمجي الفعلي؟',
              questionEN: 'White streaks persist across pages despite ample ink reserves. As a tech layout the initial software approach?',
              options: [
                { id: 'o1', text: 'شراء ورق أكثر سمكا وخشونة', textEN: 'Purchasing thicker denser printable media cards', isCorrect: false },
                { id: 'o2', text: 'استخدام عملية (تنظيف رؤوس ومنافذ الطباعة Head Cleaning) من إعدادات الطابعة', textEN: 'Running automatic Head Cleaning cycles direct via firmware printer driver panels', isCorrect: true },
                { id: 'o3', text: 'هز الطابعة جيدا', textEN: 'Vigorously shaking the overall device carriage box', isCorrect: false }
              ],
              explanation: 'عملية التنظيف في إعدادات الطابعة تعمل على حقن دفقات من الحبر لفتح العوائق الصغيرة وتسليك ثقوب الرأس النفاث الدقيق.',
              explanationEN: 'Head cleaning commands thrust bulk jet bursts forcefully declogging crusted ink blockages paving smooth tiny hole dispersion streams.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'it_4_3',
          title: 'العمل الحر وتسويق خدماتك كتقني إعلام آلي',
          titleEN: 'Freelancing and Marketing Your IT Tech Services',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'تقني مبتسم يسلم بطاقة عمل لصاحب متجر. هاتف يظهر صفحة فيسبوك لخدمات "صيانة الحاسوب – CFPA Jdiouia" مع تقييمات إيجابية.',
          visualDescriptionEN: 'Smiling technician handing business cards to a shop owner. Smartphone glows depicting a Facebook "IT Services CFPA" page with 5 star ratings.',
          duration: '06:00',
          summary: [
            'السرية والأمانة في بيانات وأقراص وحواسيب الزبائن ضمان لا يقاس بالمال.',
            'التسعير العادل والمدروس بناء على مجهود التشخيص (ليس فقط وقت النقر بل زمن قراءة واكتساب المعلومة).',
            'التسويق على شبكات التواصل كفيسبوك وانستغرام بصفحة مهنية وبطاقات إشهار مبسطة لزبائن الأحياء.',
            'تقديم ضمان أو دعم مجاني بعد الخدمة يؤدي لتكوين قاعدة زبائن موالين دائمين.',
            'المبادرة بزيارات ميدانية (Depannage) لمقرات الشركات والمدارس وتقديم عروض عمل مرنة ومنافسة.',
            'تطوير نفسك يوما بعد يوم فالتقنية لا تقف.'
          ],
          summaryEN: [
            'Pledging undeniable discretion prioritizing client privacy limits across personal hard drive volumes surpasses monetary values.',
            'Structuring fair labor estimates counting brain knowledge diagnosing time besides mere screwdriver clicking counts.',
            'Setting up digital footprints alongside tangible flyer distribution aiming neighborhood clients via Facebook marketing avenues.',
            'Proffering gentle warranty windows securing faithful client dependencies echoing repeat service pipelines.',
            'Pitching remote or off-site maintenance (depannage) tours towards small schools bridging competitive B2B deals securely.',
            'Adapting to a craft that updates weekly guarantees infinite relevance alongside expanding profit boundaries continuously.'
          ],
          task: {
            title: 'عرض ترويجي لخدماتك التقنية',
            titleEN: 'Pitching IT maintenance prowess',
            description: 'صمم منشوراً ترويجياً لخدماتك كتقني إعلام آلي، مع سعر تنافسي لتشخيص الأعطال.',
            descriptionEN: 'Draft an online promotional post encapsulating your repair services tagging engaging competitive diagnostic offers softly.'
          },
          quiz: [
            {
              id: 'it_4_3_q1',
              question: 'ما هو الأمر الأكثر حساسية في مهنة تقني الصيانة والذي يجلب ولاء الزبون ويزيد من التسويق لك تلقائيا؟',
              questionEN: 'What defines the single most crucial sensitive trait for an IT practitioner fostering automatic word-of-mouth growth?',
              options: [
                { id: 'o1', text: 'كثرة الألوان بصفحات وسائل التواصل', textEN: 'Oversaturating media pages manipulating excessive colored palettes logically.', isCorrect: false },
                { id: 'o2', text: 'سرعة حفظ الخصوصيات، الأمانة وكتمان أسرار الزبون وما في أجهزتهم واحترام محتواها', textEN: 'Failing safe commitments holding extreme confidentiality regarding files residing inside fixed boxes securely honoring trust scopes entirely.', isCorrect: true }
              ],
              explanation: 'الحاسوب صندوق حياة الناس اليومية، لذا إن أثبتت أمانتك والتزامك السرية فإنه لا محالة ستربح عميلاً بل ومجتمعه المحيط بأكمله.',
              explanationEN: 'Workboxes harbor everyday lives entirely; demonstrating solid ethical trustworthiness magnetically garners expansive word-of-mouth client waves steadily.'
            }
          ],
          xpReward: 35
        },
        {
          id: 'it_4_4',
          title: 'مشروع التخرج – صيانة كاملة لجهاز وإعداده للزبون',
          titleEN: 'Graduation Project – Total PC Restore & Client Prep',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1544441892-794166f1e3be?auto=format&fit=crop&w=1200&q=80'],
          visualDescription: 'حاسوب قديم مغبر بجانبه حاسوب نظيف يعمل بنظام ويندوز جديد. شهادة تخرج ذهبية.',
          visualDescriptionEN: 'Dusty beat-up rig positioned close a shiny humming clean PC firing fresh Windows. Gold grading graduation seal displayed.',
          duration: 'مفتوح',
          summary: [
            'الخطوات الختامية لتتويج مسار تقني الإعلام الآلي بنجاح وكفاءة.',
            'تنظيف المكونات وبناء الثقة وفحص القطع وتثبيت نظام ذكي وبرمجيات عمل مناسبة لحاجة وميزانية العميل.',
            'نسخ الاحتياط وإرشادات وتوعية الأمنيات كصمام حماية للمدى الطويل.'
          ],
          summaryEN: [
            'Final lap solidifying acquired hardware configurations cementing adept capabilities universally bounding logic gaps tightly.',
            'Decluttering dusty hardware, auditing hardware, deploying sharp OS instances layered within proper driver packages bridging optimal operational bandwidths properly.',
            'Pushing automated backups layered atop security advices extending digital endurance greatly.'
          ],
          task: {
            title: 'المشروع التقني النهائي',
            titleEN: 'Final Technical Capstone',
            description: 'تسلمت حاسوباً قديماً لزبون يريد استعماله لأبنائه في الدراسة. قم بـ: 1. تنظيف الجهاز من الداخل والخارج. 2. تشخيص الأعطال (إن وجدت). 3. ترقية RAM إن أمكن. 4. تثبيت ويندوز 10 وجميع التعريفات. 5. تثبيت برامج أساسية (Antivirus، متصفح، Office). 6. إنشاء نسخة احتياطية للنظام. 7. كتابة تقرير للزبون بما تم إنجازه. وثق عملك بالصور (إن كان عملياً) أو بالوصف النظري الدقيق.',
            descriptionEN: 'Received an old PC bound for student education tasks. Perform: 1. Internal/external dust cleaning. 2. Diagnostic screening. 3. Ram Upgrade limits. 4. Deploying Win 10 alongside precise driver installs. 5. Crucial software injects (Office, Anti-V). 6. Crafting backup recovery points securely. 7. Log deliverables reporting back to owners logically. Photograph steps or construct meticulous textual guides outlining the endeavor gracefully.'
          },
          xpReward: 100
        }
      ]
    }
  ],
  badges: {
    started: {
      id: 'it_badge_1',
      title: 'خبير المكونات',
      titleEN: 'Component Expert',
      description: 'أتمم الدرس الأول للغوص في مهنة تشخيص الصندوق الأسود وعتاده.',
      descriptionEN: 'Completed the first lesson diving deep inside the hardware components.',
      icon: '🪛'
    },
    completed: {
      id: 'it_badge_2',
      title: 'تقني محترف',
      titleEN: 'Pro IT Technician',
      description: 'أكمل جميع الدروس ونال شرف وسام المحترف في تركيب وشبكة النبض الرقمي.',
      descriptionEN: 'Cleared every tier acquiring pro credentials reviving computational ecosystems thoroughly.',
      icon: '💻'
    }
  }
};
