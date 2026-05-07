export const securityCourse: any = {
  id: 'security_agent',
  title_ar: 'مسار التكوين: عون الوقاية والأمن',
  title_en: 'Training Path: Security & Prevention Agent',
  stages: [
    {
      id: 'fundamentals',
      title_ar: 'القواعد الأساسية واليقظة الوقائية',
      title_en: 'Fundamentals & Preventive Vigilance',
      badge: {
        id: 'badge_security_1',
        title_ar: 'أساس اليقظة',
        title_en: 'Foundation of Vigilance',
        icon: 'Eye',
      },
      lessons: [
        {
          id: 'sec_l1',
          title_ar: 'دور عون الأمن وحدود مسؤوليته القانونية',
          title_en: 'The Security Agent Role & Legal Boundaries',
          visual_type: 'animation',
          visual_description: 'مشهد أنيق: عون أمن بزيه الرسمي يقف عند مدخل مؤسسة، يحيي الزوار باحترام. في الخلفية، لافتة صغيرة: "الأمن مسؤولية الجميع". أيقونة ميزان ترمز للقانون، وفقاعة نص: "المراقبة والتبليغ، لا التحقيق أو الاعتقال".',
          summary_ar: [
            'عون الأمن ليس شرطياً، دوره وقائي ورقابي.',
            'مهامه: مراقبة الدخول والخروج، منع التجاوزات، الإبلاغ عن الحوادث.',
            'لا يحق له تفتيش الأشخاص جسدياً، أو احتجازهم.',
            'يجب أن يعرف حدود القانون حتى لا يقع في مسؤولية.',
            'الاحترام والأدب في التعامل إجباريان.'
          ],
          summary_en: [
            'A security agent is not a police officer; their role is preventive and monitoring.',
            'Tasks: access control, preventing violations, reporting incidents.',
            'They do not have the right to physically search or detain people.',
            'Must know legal boundaries to avoid liability.',
            'Respect and politeness in interaction are mandatory.'
          ],
          exercise_text_ar: "اكتب بأسطر واضحة 'ميثاق عون الأمن المهني' الذي يتضمن 5 مبادئ أخلاقية وقانونية لا تتجاوزها. شاركه مع زميل افتراضي.",
          exercise_text_en: "Write smoothly the 'Professional Security Agent Charter' containing 5 ethical and legal principles you will not cross. Share it with a virtual colleague.",
          quiz: [
            {
              question_ar: 'ما هو الدور الأساسي لعون الأمن؟',
              question_en: 'What is the primary role of a security agent?',
              options_ar: ['التحقيق مع المشتبه بهم', 'المراقبة والتبليغ ومنع الحوادث', 'اعتقال المجرمين'],
              options_en: ['Interrogating suspects', 'Monitoring, reporting, and preventing incidents', 'Arresting criminals'],
              correct_index: 1,
              explanation_ar: 'دور عون الأمن وقائي ورقابي ولا يملك سلطة للتحقيق أو الاعتقال.',
              explanation_en: 'The security agent\'s role is preventive and monitoring; they have no authority to interrogate or arrest.'
            },
            {
              question_ar: 'هل يحق لعون الأمن تفتيش الأشخاص جسدياً؟',
              question_en: 'Does a security agent have the right to physically search people?',
              options_ar: ['نعم في كل الحالات', 'نعم إذا اشتبه بهم', 'لا، لا يحق له ذلك قانونياً'],
              options_en: ['Yes, in all cases', 'Yes, if they suspect them', 'No, they are not legally authorized to do so'],
              correct_index: 2,
              explanation_ar: 'التفتيش الجسدي المباشر ليس من صلاحيات عون الأمن بموجب القانون.',
              explanation_en: 'Direct physical search is not within the authority of a security agent under the law.'
            },
            {
              question_ar: 'كيف يجب أن يتعامل عون الأمن مع الزوار؟',
              question_en: 'How should a security agent interact with visitors?',
              options_ar: ['بأدب واحترام', 'بصرامة شديدة وتخويف', 'بتجاهل'],
              options_en: ['With politeness and respect', 'With extreme strictness and intimidation', 'By ignoring them'],
              correct_index: 0,
              explanation_ar: 'الاحترام والأدب يعكسان مهنية العون وهيبة المؤسسة.',
              explanation_en: 'Respect and politeness reflect the agent\'s professionalism and the establishment\'s prestige.'
            }
          ]
        },
        {
          id: 'sec_l2',
          title_ar: 'مظهر عون الأمن والانضباط المهني',
          title_en: 'Security Agent Appearance & Professional Discipline',
          visual_type: 'illustration',
          visual_description: 'عون أمن يقف أمام مرآة ويرتب زيه العسكري الأنيق: الحزام مربوط، الحذاء لامع، الشارة في مكانها. بجانبه أيقونة ساعة ترمز للالتزام بالمواعيد. يقارن بين صورتين: "قبل" بزي مهمل، و"بعد" بمظهر مهني.',
          summary_ar: [
            'الزي الموحد يعطي هيبة وثقة للزبائن والزوار.',
            'حافظ على نظافة الزي وكيّه.',
            'الالتزام بمواعيد المداومة أمانة.',
            'نبرة صوتك ولغة جسدك تعبران عن الاحترافية.',
            'اللياقة البدنية جزء من المظهر، حافظ على نشاطك.'
          ],
          summary_en: [
            'The uniform commands respect and instills trust in clients and visitors.',
            'Keep the uniform clean and ironed.',
            'Punctuality for shifts is a trust.',
            'Your tone of voice and body language express professionalism.',
            'Physical fitness is part of appearance; stay active.'
          ],
          exercise_text_ar: "تخيل أنك تستعد ليوم عمل في أمن فندق راقٍ. صف روتينك الصباحي: ماذا ترتدي؟ كيف تتأكد من مظهرك؟ اكتب قائمة تدقيق.",
          exercise_text_en: "Imagine you are preparing for a workday in a luxury hotel's security. Describe your morning routine: what to wear? How do you check your appearance? Write a checklist.",
          quiz: [
            {
              question_ar: 'لماذا يعتبر الزي الموحد النظيف مهماً لعون الأمن؟',
              question_en: 'Why is a clean uniform important for a security agent?',
              options_ar: ['لأنه مريح רק', 'لأنه يعكس هيبة واحترافية المؤسسة', 'لأنه يخيف اللصوص'],
              options_en: ['Because it is comfortable only', 'Because it reflects the prestige and professionalism of the establishment', 'Because it scares thieves'],
              correct_index: 1,
              explanation_ar: 'الزي النظيف يمنح الزوار ثقة وانطباعاً بالانضباط.',
              explanation_en: 'A clean uniform gives visitors confidence and an impression of discipline.'
            },
            {
              question_ar: 'ما هو السلوك الأمثل تجاه مواعيد المداومة؟',
              question_en: 'What is the ideal behavior regarding shift schedules?',
              options_ar: ['الوصول متأخراً قليلاً', 'الوصول قبل الوقت المحدد بقليل للاستلام', 'المغادرة متى شئت'],
              options_en: ['Arriving slightly late', 'Arriving slightly before the scheduled time for handover', 'Leaving whenever you want'],
              correct_index: 1,
              explanation_ar: 'الالتزام بالمواعيد يعكس مدى تحمل المسؤولية وتأمين الموقع باستمرار.',
              explanation_en: 'Punctuality reflects responsibility and ensures continuous site security.'
            },
            {
              question_ar: 'هل تلعب لغة الجسد دوراً في عمل عون الأمن؟',
              question_en: 'Does body language play a role in a security agent\'s work?',
              options_ar: ['نعم، فهي تعبر عن اليقظة والاحترافية', 'لا، الكلام فقط هو المهم', 'تستخدم فقط عند الغضب'],
              options_en: ['Yes, it expresses alertness and professionalism', 'No, only speech is important', 'It is only used when angry'],
              correct_index: 0,
              explanation_ar: 'الوقفة المعتدلة والنظرة المباشرة توحيان بالثقة.',
              explanation_en: 'An upright posture and direct gaze convey confidence.'
            }
          ]
        },
        {
          id: 'sec_l3',
          title_ar: 'تقنيات المراقبة البصرية والملاحظة الدقيقة',
          title_en: 'Visual Monitoring Techniques & Keen Observation',
          visual_type: 'animation',
          visual_description: 'عين بشرية مكبرة يحوطها خط تركيز. مشهد: عون أمن يتفحص كاميرات المراقبة، ثم يلتفت ليراقب ركناً في الصالة. أيقونات صغيرة تشير إلى: "حركات غير طبيعية"، "حقيبة متروكة"، "شخص يتردد".',
          summary_ar: [
            'المراقبة تعني المسح الدوري للمحيط.',
            'لاحظ التفاصيل: هل هناك حقيبة دون صاحب؟ شخص يتردد دون سبب؟',
            'استخدم قاعدة "انظر، قيّم، تصرف": لاحظ، حلل الموقف، ثم اختر الإجراء المناسب.',
            'توزيع الانتباه على كل الزوايا دون تشتت.',
            'التعب يضعف الملاحظة، خذ استراحات قصيرة.'
          ],
          summary_en: [
            'Monitoring means periodic scanning of the surroundings.',
            'Notice details: An unattended bag? Someone hesitating for no reason?',
            'Use the "Look, Evaluate, Act" rule.',
            'Distribute attention to all corners without losing focus.',
            'Fatigue weakens observation; take short breaks.'
          ],
          exercise_text_ar: "اجلس في مكان عام (أو تخيله) لمدة 5 دقائق. سجل كل ما لاحظته: الأشخاص، الأصوات، الأشياء غير العادية. تدرب على وصف شخص بدقة في 3 جمل.",
          exercise_text_en: "Sit in a public place (or imagine one) for 5 minutes. Record everything you observed: people, sounds, unusual objects. Practice describing a person accurately in 3 sentences.",
          quiz: [
            {
              question_ar: 'ما الخطوة الأولى عند ملاحظة أمر غير اعتيادي (حسب القاعدة)؟',
              question_en: 'What is the first step when noticing something unusual (according to the rule)?',
              options_ar: ['التصرف بعنف فوراً', 'انظر ولاحظ جيداً', 'الهرب'],
              options_en: ['Acting violently immediately', 'Look and observe carefully', 'Run away'],
              correct_index: 1,
              explanation_ar: 'القاعدة هي "انظر، قيّم، تصرف". الملاحظة الجيدة هي البداية.',
              explanation_en: 'The rule is "Look, Evaluate, Act". Good observation is the start.'
            },
            {
              question_ar: 'ما الذي يجب عليك ملاحظته في المحيط؟',
              question_en: 'What should you observe in the surroundings?',
              options_ar: ['وجوه الزوار فقط', 'التفاصيل كالحقائب المتروكة والأشخاص المترددين', 'الديكورات'],
              options_en: ['Faces of visitors only', 'Details like unattended bags and hesitating people', 'Decorations'],
              correct_index: 1,
              explanation_ar: 'التشوهات في المحيط والسلوكيات المشبوهة هي مؤشرات يجب التقاطها.',
              explanation_en: 'Anomalies in the environment and suspicious behaviors are key indicators to catch.'
            },
            {
              question_ar: 'كيف يؤثر التعب على المراقبة؟',
              question_en: 'How does fatigue affect monitoring?',
              options_ar: ['يجعلها أفضل', 'ليس له تأثير', 'يضعف الملاحظة ويسبب التشتت'],
              options_en: ['Makes it better', 'Has no effect', 'Weakens observation and causes distraction'],
              correct_index: 2,
              explanation_ar: 'الإجهاد يقلل من الاستجابة السريعة والدقة.',
              explanation_en: 'Fatigue reduces rapid response and accuracy.'
            }
          ]
        },
        {
          id: 'sec_l4',
          title_ar: 'إدارة سجل المداومة وكتابة التقارير',
          title_en: 'Logbook Management & Report Writing',
          visual_type: 'illustration',
          visual_description: 'مكتب صغير عليه دفتر "سجل المداومة". يد تكتب بتؤدة: "20:15 – جولة عادية، جميع الأبواب مؤمنة". قلم حبر جاف، ساعة حائط. في الخلفية، أيقونة توثيق: عدسة مكبرة على وثيقة.',
          summary_ar: [
            'سجل المداومة وثيقة قانونية تدون فيها كل الأحداث.',
            'اكتب بوضوح: التاريخ، الساعة، ماذا حدث، ماذا فعلت.',
            'لا تكتب رأيك ("شخص مشبوه")، بل صف ما تراه ("شخص يرتدي معطفاً أسود يقف منذ 10 دقائق").',
            'التقارير اليومية تحمي مسؤوليتك وتساعد في التحقيقات.',
            'راجع السجل في بداية ونهاية كل وردية.'
          ],
          summary_en: [
            'The logbook is a legal document recording all events.',
            'Write clearly: Date, time, what happened, what you did.',
            'Do not write opinions ("suspicious person"), describe facts ("person in black coat standing for 10 mins").',
            'Daily reports protect your liability and aid investigations.',
            'Review the log at the start and end of every shift.'
          ],
          exercise_text_ar: "تخيل أنك لاحظت طرداً غريباً عند باب المؤسسة. اكتب بلاغاً في دفتر المداومة يتضمن: التاريخ، الوقت، وصف الطرد، والإجراء الذي اتخذته.",
          exercise_text_en: "Imagine you noticed a strange package at the establishment's door. Write an entry in the logbook including: date, time, package description, and the action you took.",
          quiz: [
            {
              question_ar: 'كيف يجب صياغة الجمل في سجل المداومة؟',
              question_en: 'How should sentences be formulated in the logbook?',
              options_ar: ['بالاستناد إلى الآراء والتخمينات', 'بوصف الحقائق المجردة والواضحة', 'بطريقة شعرية طويلة'],
              options_en: ['Based on opinions and guesses', 'By describing clear and objective facts', 'In a long poetic way'],
              correct_index: 1,
              explanation_ar: 'السجل وثيقة قانونية يجب أن تحتوي على حقائق فقط.',
              explanation_en: 'The logbook is a legal document that must contain only facts.'
            },
            {
              question_ar: 'متى يجب مراجعة سجل المداومة؟',
              question_en: 'When should the logbook be reviewed?',
              options_ar: ['في منتصف الوردية فقط', 'في بداية ونهاية كل وردية', 'عند وقوع حادث كبير فقط'],
              options_en: ['Only in the middle of the shift', 'At the start and end of every shift', 'Only when a major incident occurs'],
              correct_index: 1,
              explanation_ar: 'المراجعة عند التسليم والاستلام تضمن استمرارية نقل المعلومات.',
              explanation_en: 'Reviewing during handover ensures continuity of information transfer.'
            },
            {
              question_ar: 'هل يمكن تقديم تقرير شفوي بدلاً من المكتوب لتوثيق حادث؟',
              question_en: 'Can a verbal report be provided instead of a written one to document an incident?',
              options_ar: ['نعم، دائماً', 'لا، التوثيق المكتوب ضروري للحماية والتحقيقات', 'حسب مزاج العون'],
              options_en: ['Yes, always', 'No, written documentation is essential for protection and investigations', 'Depending on the agent\'s mood'],
              correct_index: 1,
              explanation_ar: 'الكتابة توثق بدقة وتمنع ضياع المعلومات أو تحريفها.',
              explanation_en: 'Writing documents accurately and prevents loss or distortion of information.'
            }
          ]
        }
      ]
    },
    {
      id: 'access_tours',
      title_ar: 'مراقبة الدخول والجولات الأمنية',
      title_en: 'Access Control & Security Patrols',
      badge: {
        id: 'badge_security_2',
        title_ar: 'خبير الجولات',
        title_en: 'Patrol Expert',
        icon: 'Map',
      },
      lessons: [
        {
          id: 'sec_l5',
          title_ar: 'التحكم في الدخول والخروج والتحقق من الهوية',
          title_en: 'Entry/Exit Control & Identity Verification',
          visual_type: 'animation',
          visual_description: 'بوابة دخول، عون أمن يقف بجانب جهاز بصمة أو قارئ بطاقات. موظف يمرر بطاقته. زائر خارجي يقف، عون الأمن يطلب إثبات الهوية، يسجل اسمه، ويعطيه بطاقة زائر. كل ذلك بوجه بشوش.',
          summary_ar: [
            'تحية الزائر باحترام تبدأ العلاقة بإيجابية.',
            'تحقق من بطاقة الهوية دون استفزاز.',
            'سجل بيانات الزائر (الاسم، الوقت، الجهة المقصودة).',
            'لا تسمح بدخول أي شخص دون تصريح أو توجيه.',
            'إذا رفض الزائر التعريف بنفسه، أبلغ المشرف فوراً.'
          ],
          summary_en: [
            'Greeting visitors respectfully starts the interaction positively.',
            'Verify ID without causing provocation.',
            'Log visitor details (name, time, destination).',
            'Do not allow entry without authorization or guidance.',
            'If a visitor refuses to identify themselves, notify the supervisor immediately.'
          ],
          exercise_text_ar: "صمم استمارة 'سجل الزوار' ليوم واحد. املأها ببيانات 3 زوار وهميين (اسم، وقت الدخول، وقت الخروج، الشخص المزور).",
          exercise_text_en: "Design a 1-day 'Visitor Log' form. Fill it with data for 3 fictional visitors (name, entry time, exit time, host).",
          quiz: [
            {
              question_ar: 'ماذا تفعل إذا رفض زائر إبراز هويته؟',
              question_en: 'What should you do if a visitor refuses to show their ID?',
              options_ar: ['أسمح له بالدخول تجنباً للمشاكل', 'أمنعه وأبلغ المشرف فوراً', 'أدخل معه في شجار'],
              options_en: ['Allow them in to avoid trouble', 'Deny entry and notify the supervisor immediately', 'Start a fight with them'],
              correct_index: 1,
              explanation_ar: 'تطبيق القواعد يتطلب حزماً هادئاً، والمشرف سيتولى التعامل معه.',
              explanation_en: 'Applying rules requires calm firmness; the supervisor will handle it.'
            },
            {
              question_ar: 'لماذا نسجل وقت دخول وخروج الزوار؟',
              question_en: 'Why do we record visitor entry and exit times?',
              options_ar: ['لمعرفة من يتواجد داخل المبنى في حالات الطوارئ', 'لتضييع الوقت', 'لا أهمية لذلك'],
              options_en: ['To know who is inside the building in case of emergencies', 'To waste time', 'It is of no importance'],
              correct_index: 0,
              explanation_ar: 'التسجيل يضمن حصر الحاضرين في حال طلب إخلاء المبنى.',
              explanation_en: 'Logging ensures accounting for all present during an emergency evacuation.'
            },
            {
              question_ar: 'كيف يجب البدء عند طلب هوية الزائر؟',
              question_en: 'How should you begin when requesting a visitor\'s ID?',
              options_ar: ['بالصراخ عليه', 'بتحية محترمة ثم الطلب بلطافة', 'بأخذ حقيبته'],
              options_en: ['By yelling at them', 'With a respectful greeting, then politely requesting', 'By taking their bag'],
              correct_index: 1,
              explanation_ar: 'الاحترام أساس التعامل لتفادي النزاعات غير الضرورية.',
              explanation_en: 'Respect is the foundation of interaction to avoid unnecessary conflicts.'
            }
          ]
        },
        {
          id: 'sec_l6',
          title_ar: 'الجولات الأمنية والتفتيش الدوري للمباني',
          title_en: 'Security Rounds & Periodic Building Inspections',
          visual_type: 'illustration',
          visual_description: 'مخطط طابق، عون أمن يسير في ممر ويضيء زوايا بمصباحه. يتفحص أبواب الطوارئ، يفتحها ويغلقها. يراقب طفايات الحريق إذا كانت في مكانها. ساعة توقيت صغيرة في الزاوية: "الجولة تستغرق 15 دقيقة".',
          summary_ar: [
            'الجولات تجرى وفق مسار محدد ومتنوع الأوقات.',
            'تفحص: الأبواب، النوافذ، الإضاءة، أجهزة الإنذار، وطفايات الحريق.',
            'احمل معك دائماً: مصباحاً، جهاز لاسلكي، مفتاح الطوارئ.',
            'نوّع مسارك حتى لا تصبح روتينياً متوقعاً.',
            'أي شيء غير طبيعي يُسجل فوراً.'
          ],
          summary_en: [
            'Rounds are conducted on a defined but time-varied path.',
            'Inspect: doors, windows, lighting, alarms, and fire extinguishers.',
            'Always carry: flashlight, two-way radio, emergency key.',
            'Vary your route so it does not become predictable.',
            'Anything unusual must be recorded immediately.'
          ],
          exercise_text_ar: "ارسم مخططاً لطابق في مؤسسة تعرفها. ارسم مسار جولة أمنية تغطي كل الزوايا. ضع علامات على النقاط التي ستتفحصها بالتفصيل.",
          exercise_text_en: "Draw a floor plan of an establishment you know. Draw a patrol route covering all corners. Mark the points you will inspect in detail.",
          quiz: [
            {
              question_ar: 'لماذا يجب تنويع مسار الجولة الأمنية وأوقاتها؟',
              question_en: 'Why should the patrol route and timings be varied?',
              options_ar: ['لأن العون يمل من نفس الطريق', 'حتى لا يسهل على الدخلاء توقع تحركات العون', 'لتضييع المزيد من الوقت'],
              options_en: ['Because the agent gets bored of the same path', 'So intruders cannot easily predict the agent\'s movements', 'To waste more time'],
              correct_index: 1,
              explanation_ar: 'الروتين الثابت يسهل اختراقه من قبل المترصدين.',
              explanation_en: 'A fixed routine is easily exploited by intruders.'
            },
            {
              question_ar: 'ما هي أهم الأشياء التي تتفقدها أثناء الجولة؟',
              question_en: 'What are the most important things to check during a round?',
              options_ar: ['ألوان الجدران', 'الأبواب والنوافذ وأجهزة الإطفاء والممرات المظلمة', 'المكاتب للإطلاع على الأوراق'],
              options_en: ['Wall colors', 'Doors, windows, fire extinguishers, and dark corridors', 'Offices to read papers'],
              correct_index: 1,
              explanation_ar: 'الهدف هو تأمين المداخل ومعالجة أي مخاطر أو خلل فني.',
              explanation_en: 'The goal is to secure entrances and address any risks or technical faults.'
            },
            {
              question_ar: 'ماذا يجب أن تحمل أثناء الجولة الليلية؟',
              question_en: 'What must you carry during a night patrol?',
              options_ar: ['مصباح وجهاز لاسلكي ومفتاح الطوارئ', 'هاتف شخصي لتصفح الإنترنت', 'لا شيء'],
              options_en: ['Flashlight, two-way radio, and emergency key', 'Personal phone to browse the internet', 'Nothing'],
              correct_index: 0,
              explanation_ar: 'هذه الأدوات ضرورية لكشف المحيط وتسهيل طلب الدعم وفتح الممرات.',
              explanation_en: 'These tools are essential for illumination, requesting support, and opening paths.'
            }
          ]
        },
        {
          id: 'sec_l7',
          title_ar: 'التعامل مع الحالات المشبوهة والطرود المتروكة',
          title_en: 'Handling Suspicious Situations & Unattended Packages',
          visual_type: 'animation',
          visual_description: 'مشهد: في بهو مؤسسة، حقيبة ظهر متروكة بجانب كرسي. عون أمن يراها، لا يلمسها. يطلب من الزوار الابتعاد بهدوء، ويتصل بالمشرف عبر اللاسلكي. يضع شريطاً مانعاً حول المنطقة. أيقونة هاتف تحمل رقم "الشرطة – 17".',
          summary_ar: [
            'لا تلمس أي طرد مشبوه.',
            'أبعد الناس عن المنطقة بهدوء دون إثارة الذعر.',
            'أبلغ المسؤولين والشرطة فوراً.',
            'صف موقع الطرد وشكله عبر اللاسلكي بدقة.',
            'امنع استخدام الهواتف المحمولة قرب الطرد (في حالات خاصة).'
          ],
          summary_en: [
            'Do not touch any suspicious package.',
            'Evacuate people from the area calmly without causing panic.',
            'Notify supervisors and police immediately.',
            'Describe the package location and appearance accurately over the radio.',
            'Prevent mobile phone use near the package (in specific cases).'
          ],
          exercise_text_ar: "اكتب سيناريو كاملاً: أنت عون أمن في مركز تجاري، وجدت حقيبة سوداء دون صاحب. صف تصرفاتك خطوة بخطوة، وماذا ستقول عبر اللاسلكي.",
          exercise_text_en: "Write a complete scenario: You are a security guard in a mall, you found a black unattended bag. Describe your actions step by step, and what you will say over the radio.",
          quiz: [
            {
              question_ar: 'ما هو الخطأ القاتل عند إيجاد طرد مشبوه؟',
              question_en: 'What is the fatal mistake when finding a suspicious package?',
              options_ar: ['الابتعاد عنه', 'محاولة فتحه للتحقق من محتواه', 'تبليغ الشرطة'],
              options_en: ['Moving away from it', 'Trying to open it to check its contents', 'Notifying the police'],
              correct_index: 1,
              explanation_ar: 'لمس الطرد قد يؤدي إلى كارثة إذا كان يحتوي على مادة متفجرة.',
              explanation_en: 'Touching the package can cause a disaster if it contains an explosive device.'
            },
            {
              question_ar: 'كيف يجب إبعاد الناس عن الخطر؟',
              question_en: 'How should people be evacuated from the danger zone?',
              options_ar: ['بالصراخ "قنبلة!" لكي يركضوا', 'بتوجيههم بهدوء وحزم وبدون إثارة الذعر', 'بضربهم لحثهم على الخروج'],
              options_en: ['By yelling "Bomb!" so they run', 'By guiding them calmly, firmly, without causing panic', 'By hitting them to urge them out'],
              correct_index: 1,
              explanation_ar: 'الذعر يسبب إصابات تدافع قد تكون أسوأ من الطرد نفسه.',
              explanation_en: 'Panic causes stampede injuries that could be worse than the package itself.'
            },
            {
              question_ar: 'ماذا تقول عند التبليغ عبر اللاسلكي؟',
              question_en: 'What do you say when reporting over the radio?',
              options_ar: ['وصف دقيق لموقع وشكل الطرد', 'كلام غير مفهوم عن وحش', 'طلب قهوة'],
              options_en: ['An accurate description of the package\'s location and appearance', 'Incomprehensible talk about a monster', 'Ordering a coffee'],
              correct_index: 0,
              explanation_ar: 'دقة الوصف تساعد الخبراء على تقييم الموقف من بعيد.',
              explanation_en: 'Accurate descriptions help experts evaluate the situation from afar.'
            }
          ]
        },
        {
          id: 'sec_l8',
          title_ar: 'استخدام أجهزة الكشف والمراقبة الإلكترونية',
          title_en: 'Using Scanners & Electronic Surveillance',
          visual_type: 'illustration',
          visual_description: 'غرفة مراقبة صغيرة، شاشات عرض لكاميرات. عون أمن يتابع الشاشات، يضبط زاوية كاميرا. بجانبه كاشف معادن. زائر يمر عبر بوابة كشف المعادن وتصدر صفيراً خفيفاً، عون الأمن يطلب منه بهدوء إظهار ما بحوزته.',
          summary_ar: [
            'كاميرات المراقبة هي عيونك الإضافية، تفقد عملها يومياً.',
            'ركز على الشاشات ولكن لا تهمل جولاتك الميدانية.',
            'عند استخدام كاشف المعادن، افتش الحقائب فقط بإذن صاحبها وبوجود شاهد.',
            'احترم خصوصية الزوار ولا تصور أو تحتفظ بصور دون مبرر.',
            'أي عطل في الأجهزة يسجل ويبلغ فوراً.'
          ],
          summary_en: [
            'CCTV cameras are your extra eyes; check their operation daily.',
            'Focus on screens but do not neglect physical patrols.',
            'When using a metal detector, inspect bags only with the owner\'s permission and a witness.',
            'Respect visitors\' privacy; do not take or keep photos without justification.',
            'Log and report any equipment malfunction immediately.'
          ],
          exercise_text_ar: "تخيل أنك في غرفة مراقبة. ارسم مخططاً لشاشات الكاميرات الموزعة على أركان المبنى. كيف ستوزع انتباهك بينها؟",
          exercise_text_en: "Imagine you are in a control room. Draw a chart of camera views distributed around the building corners. How will you divide your attention?",
          quiz: [
            {
              question_ar: 'هل يمكن الاكتفاء بشاشات المراقبة دون القيام بجولات فعلية؟',
              question_en: 'Can one rely safely solely on CCTV screens without physical rounds?',
              options_ar: ['نعم، الكاميرات تكفي', 'لا، التقنية قد تتعطل، والجولات الميدانية تعزز الأمن وتغطي النقاط العمياء', 'حسب المزاج'],
              options_en: ['Yes, cameras are enough', 'No, tech can fail, and patrols enhance security and cover blind spots', 'Depends on your mood'],
              correct_index: 1,
              explanation_ar: 'الجولات الميدانية أساسية لا تكتمل المراقبة بدونها لتغطية الزوايا الصعبة وللتدخل المباشر.',
              explanation_en: 'Physical patrols are essential; monitoring is incomplete without them to cover tricky angles and act instantly.'
            },
            {
              question_ar: 'كيف تتصرف إذا أطلق كاشف المعادن صافرة عند مرور زائر؟',
              question_en: 'What do you do if the metal detector beeps for a visitor?',
              options_ar: ['تلقي القبض عليه فوراً', 'تطلب منه تفريغ جيوبه بهدوء لتمريره مجدداً', 'تتجاهل الأمر'],
              options_en: ['Arrest him immediately', 'Calmly ask him to empty his pockets to walk through again', 'Ignore it'],
              correct_index: 1,
              explanation_ar: 'الصافرة قد تكون من مفاتيح أو أجهزة إلكترونية عادية، التصرف يجب أن يكون هادئاً.',
              explanation_en: 'The beep might be from keys or normal gadgets, acting calmly is key.'
            },
            {
              question_ar: 'ما هو المبدأ الأساسي في استخدام الكاميرات للمراقبة؟',
              question_en: 'What is the core principle of using CCTV?',
              options_ar: ['التجسس على الموظفين', 'احترام الخصوصية ومراقبة حفظ الأمن والممتلكات', 'تسجيل فيديوهات للتسلية'],
              options_en: ['Spying on employees', 'Respecting privacy and monitoring to secure properties and maintain safety', 'Recording funny videos'],
              correct_index: 1,
              explanation_ar: 'كاميرات المراقبة توضع للمصلحة الأمنية فقط.',
              explanation_en: 'CCTV is placed strictly for security interests.'
            }
          ]
        }
      ]
    },
    {
      id: 'emergency_response',
      title_ar: 'التدخل الأولي وإدارة الطوارئ',
      title_en: 'First Response & Emergency Management',
      badge: {
        id: 'badge_security_3',
        title_ar: 'منقذ ومدافع',
        title_en: 'Rescuer & Defender',
        icon: 'HeartPulse',
      },
      lessons: [
        {
          id: 'sec_l9',
          title_ar: 'مبادئ الإسعافات الأولية الأساسية',
          title_en: 'Basic First Aid Principles',
          visual_type: 'animation',
          visual_description: 'مشهد متحرك: شخص مستلقٍ على الأرض. عون أمن ينحني، يتأكد من الوعي (ينادي ويهز كتفه). يتأكد من التنفس (ينظر للصدر ويحس بأنفاسه). يطلب من زميله الاتصال بالإسعاف (14). ثم يبدأ الإنعاش القلبي الرئوي (ضغطات على الصدر). أيقونة حقيبة إسعاف.',
          summary_ar: [
            'في أي حادث، الأولوية: تأمين المكان، ثم فحص المصاب.',
            'استخدم قاعدة "أنظر، أسمع، أحس" للتنفس.',
            'إذا كان المصاب لا يتنفس، ابدأ الضغطات الصدرية فوراً (30 ضغطة، ثم نفسان إن كنت مدرباً).',
            'اتصل بالإسعاف (14) أو أرسل شخصاً لذلك.',
            'حقيبة الإسعافات الأولية يجب أن تكون في متناول اليد دوماً.'
          ],
          summary_en: [
            'In any incident, the priority is: secure the area, then check the victim.',
            'Use the "Look, Listen, Feel" method for breathing.',
            'If the victim is not breathing, start chest compressions immediately.',
            'Call the ambulance (14) or send someone to do so.',
            'A first aid kit must always be within reach.'
          ],
          exercise_text_ar: "تعرف على محتويات حقيبة إسعافات أولية (في منزلك أو عبر الإنترنت). اذكر 10 مواد أساسية يجب أن تتوفر فيها. تدرب على وضعية الإنعاش على وسادة.",
          exercise_text_en: "Identify the contents of a first aid kit (at home or online). List 10 essential items that should be in it. Practice the CPR posture on a pillow.",
          quiz: [
            {
              question_ar: 'ما هو رقم الإسعاف / الحماية المدنية في الجزائر؟',
              question_en: 'What is the ambulance / Civil Protection number in Algeria?',
              options_ar: ['17', '14', '19'],
              options_en: ['17', '14', '19'],
              correct_index: 1,
              explanation_ar: 'للاتصال بالحماية المدنية والإسعاف نركب الرقم 14 (أو 1021).',
              explanation_en: 'Dial 14 (or 1021) to reach Civil Protection / Ambulance.'
            },
            {
              question_ar: 'ما الخطوة الأولى عند رؤية شخص سقط مغمى عليه؟',
              question_en: 'What is the first step when seeing someone collapse unconscious?',
              options_ar: ['رشه بالماء فوراً', 'تأمين المكان ثم فحص الوعي والتنفس', 'نقله بسرعة إلى مكان آخر'],
              options_en: ['Splash water on them immediately', 'Secure the area then check consciousness and breathing', 'Move them quickly somewhere else'],
              correct_index: 1,
              explanation_ar: 'تأمين المكان يمنع إصابة المزيد من الأشخاص، وبعدها نقيّم الحالة.',
              explanation_en: 'Securing the area prevents further injuries, then we assess the condition.'
            },
            {
              question_ar: 'كيف نتحقق من تنفس المصاب الفاقد للوعي؟',
              question_en: 'How to check the breathing of an unconscious victim?',
              options_ar: ['قاعدة: أنظر، أسمع، أحس', 'بهزه بقوة', 'لا نتحقق'],
              options_en: ['Rule: Look, Listen, Feel', 'By shaking them violently', 'We do not check'],
              correct_index: 0,
              explanation_ar: 'تنظر للصدر هل يتحرك، وتسمع، وتحس بالهواء.',
              explanation_en: 'Look if the chest is moving, listen, and feel the air.'
            }
          ]
        },
        {
          id: 'sec_l10',
          title_ar: 'مكافحة الحرائق الأولية واستخدام طفاية الحريق',
          title_en: 'Basic Firefighting & Extinguisher Usage',
          visual_type: 'animation',
          visual_description: 'حريق صغير في سلة مهملات. عون أمن يحمل طفاية CO2، يقف على مسافة مترين تقريباً. يزيل مسمار الأمان، يوجه القمع نحو قاعدة النار، يضغط ويمسح جانبياً. النار تنطفئ. في الخلفية، لوحة تعرض أنواع الطفايات وألوانها.',
          summary_ar: [
            'لا تحاول إطفاء حريق كبير، بل قم بالإخلاء وأبلغ الحماية المدنية (14).',
            'استخدم الطفاية المناسبة: CO2 للحرائق الكهربائية، المسحوق للمواد الصلبة والسوائل.',
            'تقنية PASS: اسحب المسمار (Pull)، وجّه نحو القاعدة (Aim)، اضغط المقبض (Squeeze)، وامسح جانبياً (Sweep).',
            'قف دائماً حيث يكون ظهرك نحو المخرج للهروب.'
          ],
          summary_en: [
            'Do not try to fight a large fire; evacuate and call Civil Protection (14).',
            'Use the right extinguisher: CO2 for electrical, Powder for solids and liquids.',
            'PASS technique: Pull the pin, Aim at the base, Squeeze the trigger, Sweep side to side.',
            'Always position your back towards an exit for escape.'
          ],
          exercise_text_ar: "ابحث عن طفاية حريق في مكان عملك أو بنايتك. اقرأ التعليمات المدونة عليها. ارسم ملصقاً تعليمياً عن خطوات PASS لتعلقه في المؤسسة.",
          exercise_text_en: "Find a fire extinguisher at your work or building. Read the instructions on it. Draw an educational poster on PASS steps to hang in the establishment.",
          quiz: [
            {
              question_ar: 'ماذا تعني قاعدة PASS في إطفاء الحرائق؟',
              question_en: 'What does the PASS rule mean in firefighting?',
              options_ar: ['اسحب، وجّه، اضغط، امسح', 'ارمي، اهرب، صرخ', 'رش الماء فقط'],
              options_en: ['Pull, Aim, Squeeze, Sweep', 'Throw, Run, Scream', 'Spray water only'],
              correct_index: 0,
              explanation_ar: 'هذه هي الخطوات القياسية المعتمدة لاستخدام أجهزة الإطفاء اليدوية.',
              explanation_en: 'These are the standard steps for using a manual fire extinguisher.'
            },
            {
              question_ar: 'متى يجب أن لا تحاول إطفاء الحريق؟',
              question_en: 'When should you NOT try to fight a fire?',
              options_ar: ['إذا كان حريقاً صغيراً في سلة مهملات', 'إذا كان الحريق كبيراً والدخان كثيفاً ويمنعك من الرؤية', 'إذا كانت الطفاية قريبة'],
              options_en: ['If it is a small fire in a trash bin', 'If the fire is large and thick smoke blocks your vision', 'If the extinguisher is nearby'],
              correct_index: 1,
              explanation_ar: 'الحرائق الكبيرة تتطلب إخلاء سريعاً وتدخل الحماية المدنية للمختصين.',
              explanation_en: 'Large fires drop oxygen and require prompt evacuation and Civil pro experts.'
            },
            {
              question_ar: 'أين يجب توجيه مادة الإطفاء؟',
              question_en: 'Where should you aim the extinguishing agent?',
              options_ar: ['نحو الدخان في الأعلى', 'نحو قاعدة (أسفل) ألسنة اللهب', 'بعيداً عن النار'],
              options_en: ['At the smoke above', 'At the base (bottom) of the flames', 'Away from the fire'],
              correct_index: 1,
              explanation_ar: 'توجيه المواد إلى القاعدة هو الذي يقطع الأكسجين ويطفئ مصدر النار الساخن.',
              explanation_en: 'Aiming at the base cuts oxygen supply and extinguishes the fuel source.'
            }
          ]
        },
        {
          id: 'sec_l11',
          title_ar: 'إخلاء المباني والتعامل مع الذعر',
          title_en: 'Building Evacuation & Dealing with Panic',
          visual_type: 'illustration',
          visual_description: 'ممر في عمارة، جرس إنذار أحمر يومض. عون أمن يوجه مجموعة من الأشخاص نحو مخارج الطوارئ بإشارات هادئة وقوية. يتأكد من خلو الحمامات والمكاتب. جميعهم يسيرون دون ركض.',
          summary_ar: [
            'عند جرس الإنذار، تصرف فوراً: افتح أبواب الطوارئ، وجه الناس.',
            'استخدم صوتاً جهورياً: "رجاء التوجه بهدوء إلى أقرب مخرج".',
            'ساعد كبار السن وذوي الاحتياجات الخاصة أولاً.',
            'امنع استخدام المصاعد.',
            'بعد الإخلاء، تأكد من عدم تخلف أحد وتجمع في نقطة التجمع المحددة.'
          ],
          summary_en: [
            'Upon alarm, act instantly: open emergency doors, guide people.',
            'Use a loud, clear voice: "Please proceed calmly to the nearest exit".',
            'Assist the elderly and people with disabilities first.',
            'Prohibit the use of elevators.',
            'After evacuation, verify nobody is left behind and gather at the assembly point.'
          ],
          exercise_text_ar: "ارسم خريطة إخلاء لطابق مؤسستك (أو منزلك). حدد طريقين للهروب من كل غرفة. ضع علامة على نقطة التجمع الخارجية.",
          exercise_text_en: "Draw an evacuation map for your establishment\'s floor (or your home). Identify two escape routes from each room. Mark the external assembly point.",
          quiz: [
            {
              question_ar: 'لماذا يمنع استخدام المصاعد أثناء الإخلاء بسبب الحريق؟',
              question_en: 'Why is the use of elevators prohibited during a fire evacuation?',
              options_ar: ['لأنها سريعة جداً', 'لأن الكهرباء قد تنقطع ويصبح المصعد فخاً مميتاً', 'لأنها صغيرة السعة'],
              options_en: ['Because they are too fast', 'Because power might shut off, turning elevators into deadly traps', 'Because they have small capacity'],
              correct_index: 1,
              explanation_ar: 'الدخان والحرارة يعطلان الكهرباء، مما قد يحجز الأشخاص داخل كبينة المصعد المخنوقة.',
              explanation_en: 'Smoke and heat disable electricity, potentially trapping people in suffocating cabins.'
            },
            {
              question_ar: 'كيف تتحدث مع الناس في حالة ذعر الحريق وإخلاء المبنى؟',
              question_en: 'How do you speak to people during a panic fire evacuation?',
              options_ar: ['أصرخ معهم وأولول', 'بصوت هادئ، جهوري وحازم لتوجيههم', 'أصمت تماماً'],
              options_en: ['I scream and wail with them', 'With a calm, loud, and firm voice to guide them', 'I stay completely silent'],
              correct_index: 1,
              explanation_ar: 'التعليمات الواضحة والحازمة تمتص الذعر وتُعطي توجيهات النجاة بدقة.',
              explanation_en: 'Clear, firm instructions absorb panic and give precise survival directions.'
            },
            {
              question_ar: 'ماذا نفعل بعد إخراج جميع الأفراد؟',
              question_en: 'What do we do after evacuating everyone?',
              options_ar: ['النوم', 'التجمع في النقطة الآمنة لإحصاء الحاضرين', 'الذهاب للبيت'],
              options_en: ['Sleep', 'Gather at the safe assembly point for headcounts', 'Go home'],
              correct_index: 1,
              explanation_ar: 'إحصاء الحاضرين يضمن عدم بقاء مفقودين ويساعد رجال الإطفاء بمعلومات دقيقة.',
              explanation_en: 'A headcount ensures no one is missing and gives firemen exact data.'
            }
          ]
        },
        {
          id: 'sec_l12',
          title_ar: 'فض النزاعات والتحكم في الغضب',
          title_en: 'Conflict Resolution & Anger Management',
          visual_type: 'animation',
          visual_description: 'شخصان يتشاحنان في بهو. عون أمن يقف بينهما، يداه مفتوحتان لأسفل في إشارة تهدئة. يتحدث بصوت منخفض وواثق. أحد المتشاحنين يهدأ تدريجياً. وفقاعة فوق عون الأمن: "أتفهم غضبك، لنجد حلاً معاً".',
          summary_ar: [
            'حافظ على مسافة آمنة ولا تمسك بأحد إلا للدفاع عن النفس.',
            'تحدث بهدوء واستمع للطرفين دون انحياز.',
            'استخدم عبارات تهدئة: "أفهم أنك غاضب، كيف يمكنني مساعدتك؟"',
            'إذا تصاعد الموقف، اطلب تعزيزات ولا تخاطر بنفسك.',
            'وثق الحادث كاملاً لاحقاً في التقرير.'
          ],
          summary_en: [
            'Maintain a safe distance and do not grab anyone unless for self-defense.',
            'Speak calmly and listen to both parties without taking sides.',
            'Use calming phrases: "I understand you\'re angry, how can I help?"',
            'If the situation escalates, call for backup and do not risk yourself.',
            'Document the full incident later in the report.'
          ],
          exercise_text_ar: "مع زميل، تدرب على تمثيل مشهد شجار بسيط. مارس دور المهدئ. ما الجمل التي ستستخدمها؟ كيف ستقف؟",
          exercise_text_en: "With a colleague, role-play a simple argument. Practice the de-escalator role. What phrases will you use? How will you stand?",
          quiz: [
            {
              question_ar: 'كيف تقف عند محاولة تهدئة شخص غاضب؟',
              question_en: 'How should you stand when trying to calm an angry person?',
              options_ar: ['ملتصقاً به وبأيدي مرفوعة للضرب', 'على مسافة آمنة مريحة ويدان مفتوحتان أو مرخيتان', 'مديراً له الظهر'],
              options_en: ['Sticking to them with hands raised to strike', 'At a safe comfortable distance with open or relaxed hands', 'Turning your back to them'],
              correct_index: 1,
              explanation_ar: 'المسافة الآمنة تحميك من الحركات المفاجئة واليد المفتوحة تدل على عدم وجود تهديد مهجومي.',
              explanation_en: 'Safe distance protects you; an open hand implies non-hostility.'
            },
            {
              question_ar: 'إذا بدأ شجار وتصاعد بشراسة ولم تستطع حسمه، ماذا تفعل؟',
              question_en: 'If a fight starts and escalates fiercely beyond your control, what do you do?',
              options_ar: ['أشترك مع أحدهم للضرب', 'أطلب الدعم وأبلغ الشرطة دون المخاطرة بحياتي', 'أغادر المكان نهائياً'],
              options_en: ['Join one to fight', 'Request backup and notify Police without risking my life', 'Leave the place completely'],
              correct_index: 1,
              explanation_ar: 'الحماية الذاتية أولاً. طلب الدعم الأمني المختص يعتبر التدخل الذكي والصحيح.',
              explanation_en: 'Self-preservation first. Calling specific backup is the right smart intervention.'
            },
            {
              question_ar: 'ما الهدف من استخدام عبارة "أنا أتفهم أنك غاضب..."؟',
              question_en: 'What is the goal of using the phrase "I understand you\'re angry..."?',
              options_ar: ['السخرية من الزبون', 'امتصاص الغضب وإظهار التعاطف مع المشكلة', 'تهديده'],
              options_en: ['Mocking the client', 'Defusing anger and showing empathy for the problem', 'Threatening him'],
              correct_index: 1,
              explanation_ar: 'التعاطف المدروس يقلل من العنف ويفتح مجالاً للنقاش العقلاني.',
              explanation_en: 'Calculated empathy reduces violence and opens up rational discussions.'
            }
          ]
        }
      ]
    },
    {
      id: 'advanced_specialization',
      title_ar: 'الاحتراف واﻷمن المتخصص',
      title_en: 'Professionalism & Specialized Security',
      badge: {
        id: 'badge_security_4',
        title_ar: 'عين ساهرة',
        title_en: 'The Watchful Eye',
        icon: 'ShieldCheck',
      },
      lessons: [
        {
          id: 'sec_l13',
          title_ar: 'أمن المنشآت الحساسة (البنوك، المستودعات)',
          title_en: 'Security of Sensitive Facilities (Banks, Warehouses)',
          visual_type: 'animation',
          visual_description: 'بوابة بنك، عون أمن يفحص سيارة نقل أموال. إجراءات تفتيش دقيقة لكن سريعة. كاميرات تغطي كل زاوية. لافتة "ممنوع الدخول". سبورة إلكترونية تظهر جدول الحراسة.',
          summary_ar: [
            'المنشآت الحساسة تتطلب بروتوكولات أمنية مشددة.',
            'تعرف على نظام الإنذار الصامت والتصرف عند تفعيله.',
            'تحقق من هوية كل شخص بدقة، مهما كان منصبه.',
            'مراقبة محيط المكان لا تقل أهمية عن الداخل.',
            'حافظ على سرية كل ما تراه وتسمعه.'
          ],
          summary_en: [
            'Sensitive facilities require strict security protocols.',
            'Know the silent alarm system and how to act upon activation.',
            'Thoroughly verify everyone\'s identity, regardless of rank.',
            'Monitoring the perimeter is as vital as the interior.',
            'Keep absolute secrecy about everything you see and hear.'
          ],
          exercise_text_ar: "تخيل أنك عون أمن في بنك. ضع قائمة بالبروتوكولات اليومية من فتح الأبواب إلى إغلاقها. شاركها مع زميل للتقييم.",
          exercise_text_en: "Imagine you are a bank security agent. List daily protocols from opening doors to closing them. Share with a peer for evaluation.",
          quiz: [
            {
              question_ar: 'ما أهمية المحافظة على السرية في المنشآت الحساسة؟',
              question_en: 'Why is secrecy important in sensitive facilities?',
              options_ar: ['ليست مهمة أصلاً', 'حماية أرواح الموظفين وأموال وممتلكات المؤسسة من التخطيط الإجرامي', 'لأن الكلام متعب'],
              options_en: ['Not important at all', 'To protect staff lives, institutional money, and properties from criminal planning', 'Because talking is tiring'],
              correct_index: 1,
              explanation_ar: 'تسريب أوقات العمل أو مكان الأموال قد يكون دافعاً للسرقات المسلحة.',
              explanation_en: 'Leaking schedules or vault spots could motivate armed robberies.'
            },
            {
              question_ar: 'كيف نتعامل مع شخص يُدعى أنه مدير جديد ولكن كارت هويته غير متوفر؟',
              question_en: 'How to handle someone claiming to be the new boss without ID?',
              options_ar: ['نمنعه بأدب ونطلب إثباتاً أو نتصل بمسؤول الموارد البشرية للتأكيد', 'ندخله مباشرة لأنه قد يطردنا', 'نطرده بشراسة'],
              options_en: ['Politely deny entry, request proof or call HR for verification', 'Let them in as they might fire us', 'Kick them out aggressively'],
              correct_index: 0,
              explanation_ar: 'تطبيق البروتوكول على الجميع يحمي العون والمؤسسة من الاختراقات (الهندسة الاجتماعية).',
              explanation_en: 'Applying protocols to everyone protects the agent and establishment from social engineering.'
            },
            {
              question_ar: 'متى نستخدم الإنذار الصامت؟',
              question_en: 'When do we use a silent alarm?',
              options_ar: ['عندما يقتحم لصوص مسلحون المكان وتكون المواجهة المباشرة خطيرة جداً', 'عند انتهاء الدوام', 'للتدريب دائماً وبدون قصد'],
              options_en: ['When armed robbers intrude and direct confrontation is too dangerous', 'At the end of shift', 'For training always and accidentally'],
              correct_index: 0,
              explanation_ar: 'الإنذار الصامت يرسل طلب النجدة للشرطة دون علم المجرمين لإبعاد الخطر الفوري عن الموظفين.',
              explanation_en: 'Silent alarms dispatch Police implicitly without tipping off criminals, avoiding immediate threat.'
            }
          ]
        },
        {
          id: 'sec_l14',
          title_ar: 'أمن الفعاليات والمناسبات الكبرى',
          title_en: 'Security for Major Events & Occasions',
          visual_type: 'illustration',
          visual_description: 'قاعة أفراح أو ملعب رياضي، حشد من الناس. عون أمن عند المدخل يفحص التذاكر، وعون آخر يراقب من علو. خريطة للمكان تظهر توزيع أفراد الأمن. علامات طوارئ مضيئة.',
          summary_ar: [
            'تأمين الحشود يتطلب تخطيطاً مسبقاً: عدد الأفراد، مواقعهم، خطة الطوارئ.',
            'السيطرة على المداخل والمخارج هي الأساس.',
            'تعرف على الشخصيات المهمة وكيفية حمايتها وتحضير ممراتها.',
            'راقب اختناقات الحشود وتدخل لفكها قبل أن تتحول إلى تدافع مأساوي.',
            'تواصل مع الزملاء عبر اللاسلكي باستمرار وتنسيق.'
          ],
          summary_en: [
            'Crowd control needs pre-planning: manpower, positions, contingency plan.',
            'Controlling entries and exits is the foundational pillar.',
            'Know VIPs, how to protect them, and clear their paths.',
            'Monitor bottlenecks and intervene early before they become stampedes.',
            'Maintain continuous radio coordination with colleagues.'
          ],
          exercise_text_ar: "صمم خطة أمنية لحفل زفاف في قاعة تسع 500 شخص. كم عون أمن تحتاج؟ أين تضعهم؟ ما إجراءات الطوارئ؟",
          exercise_text_en: "Design a security plan for a wedding hall fitting 500 people. How many agents needed? Placements? Contingency actions?",
          quiz: [
            {
              question_ar: 'ما الخطورة الكبرى في التجمعات الحاشدة والفعاليات؟',
              question_en: 'What is the biggest risk in large crowd gatherings and events?',
              options_ar: ['الأصوات الصاخبة', 'التدافع والاختناقات عند المداخل والمخارج', 'عدم تواجد التذاكر'],
              options_en: ['Loud noises', 'Stampedes and bottlenecks at entry/exit points', 'Missing tickets'],
              correct_index: 1,
              explanation_ar: 'التدافع من أسوأ الكوارث وقد يؤدي لوفيات، لهذا التوجيه والتنظيم المستمر ضروريان.',
              explanation_en: 'Stampedes are disastrous and can be fatal; continuous guidance and regulation are a must.'
            },
            {
              question_ar: 'كيف نضمن تدفقاً سلساً للزوار في الممرات؟',
              question_en: 'How to ensure a smooth flow of visitors in corridors?',
              options_ar: ['بإيقافهم طويلاً لتفتيش معقد', 'عن طريق وضع علامات توجيه واضحة وعدم التجمع في نقاطع المرور', 'لا نفعل شيئاً'],
              options_en: ['Stopping them too long for complex searches', 'By placing clear signs and preventing gathering at choke points', 'We do nothing'],
              correct_index: 1,
              explanation_ar: 'المنع المسبق للتكتلات يحفظ انسيابية المرور بشكل آمن.',
              explanation_en: 'Preemptively stopping clustering keeps traffic flowing safely.'
            },
            {
              question_ar: 'ما أهمية التنسيق اللاسلكي في الفعاليات الكبيرة؟',
              question_en: 'What is the value of radio coordination at large events?',
              options_ar: ['التحدث مع الزملاء عن الرياضة', 'توجيه فريق العمل لفك اختناق أو رصد تحرك مشبوه قبل تصاعده', 'للتشويش'],
              options_en: ['Talk to peers about sports', 'Guiding the team to break a bottleneck or spot suspects before escalation', 'To interfere'],
              correct_index: 1,
              explanation_ar: 'الاتصال يوسع دائرة المراقبة ويجعل الاستجابة فورية كأنهم رجل واحد.',
              explanation_en: 'Comms widen the surveillance net and render immediate, unified responses.'
            }
          ]
        },
        {
          id: 'sec_l15',
          title_ar: 'الأمن الإلكتروني الأساسي للعون (الوعي الرقمي)',
          title_en: 'Basic Cybersecurity for Security Agents',
          visual_type: 'animation',
          visual_description: 'شاشة حاسوب في غرفة المراقبة. عون أمن يغلق جلسته بكلمة مرور. أيقونة فيروس يظهر ثم يختفي بفضل برنامج مكافحة فيروسات. رمز "لا تفتح روابط مشبوهة".',
          summary_ar: [
            'كلمات المرور القوية تحمي أنظمة المراقبة، لا تجعلها سهلة التخمين.',
            'لا تشارك كلمة المرور الخاصة بأنظمة الأمن مع أي شخص.',
            'احذر من رسائل التصيد أو فلاش ديسك الملقى (USB) التي تستهدف موظفي الأمن.',
            'الإبلاغ عن أي رسائل تهديد أو اختراق إلكتروني مهم جداً كالخطر المادي الكلاسيكي.',
            'حافظ على أمن المعلومات الخاصة بالمؤسسة ولا تصور الشاشات لهاتفك.'
          ],
          summary_en: [
            'Strong passwords secure CCTV systems; do not make them guessable.',
            'Never share security system passwords with anyone.',
            'Beware of phishing emails or dropped USB keys targeting security staff.',
            'Reporting a cyber threat or breach is as vital as reporting a physical hazard.',
            'Protect company data and do not snap photos of monitors on your phone.'
          ],
          exercise_text_ar: "اختبر قوة كلمة مرورك الحالية. اكتب 5 قواعد لأمن المعلومات ستطبقها في عملك كعون أمن.",
          exercise_text_en: "Test your current password's strength. Write 5 IT security rules you will apply as a security agent.",
          quiz: [
            {
              question_ar: 'ماذا تفعل إذا طلب منك زميل استخدام كلمة المرور الخاصة بك للكاميرات؟',
              question_en: 'What to do if a colleague asks for your CCTV password?',
              options_ar: ['أعطيه الحساب فوراً', 'أرفض إعطائه الكلمة لحماية المساءلة، فهو يملك حساباً أو يحتاج لإذن إداري', 'أكتبها له في ورقة'],
              options_en: ['Give it to him instantly', 'Refuse to protect accountability; he has his own or needs admin approval', 'Write it for him on paper'],
              correct_index: 1,
              explanation_ar: 'الحسابات شخصية ومرتبطة بمسؤوليتك القانونية (Trackability).',
              explanation_en: 'Accounts are personal and tied to your legal trackability.'
            },
            {
              question_ar: 'وجدت مفتاح USB (فلاش ديسك) ملقى في الممر، ماذا يمثل؟',
              question_en: 'You found a dropped USB drive in the hallway, what does it represent?',
              options_ar: ['فرصة لسماع الأغاني على حاسوب المراقبة', 'خطر أمني (فيروس خبيث لاختراق الشبكة) ويجب وضعه في كيس وتسليمه للإدارة', 'لا ألمسه ولا أسجله'],
              options_en: ['A chance to hear music on the CCTV PC', 'A security threat (malware payload) to be bagged and logged to admin', 'I do not touch it or log it'],
              correct_index: 1,
              explanation_ar: 'التصيد بالـ USB طريقة معروفة لتعطيل الكاميرات واختراق الشبكات من الداخل.',
              explanation_en: 'USB drops are a known vector to poison networks and disable CCTV.'
            },
            {
              question_ar: 'هل يمكن التقاط صور لشاشات الكاميرا بهاتفك الشخصي لنشرها لاحقاً لمنع سرقة ثانية؟',
              question_en: 'Can you take photos of CCTV screens with a personal phone to post later to prevent a second theft?',
              options_ar: ['نعم ليحذر الناس', 'لا، يمنع منعاً باتاً ويعتبر خرقاً لخصوصية التحقيق والمكان', 'أصور الشاشة فقط في الليل'],
              options_en: ['Yes, to warn people', 'No, it is strictly forbidden and breaches investigation and facility privacy', 'I shoot the screen only at night'],
              correct_index: 1,
              explanation_ar: 'الكاميرات بيانات حساسة، وتسريبها للعامة قد يعرضك للمساءلة القانونية والقضائية.',
              explanation_en: 'CCTV footage is highly classified; leaking exposes you to prosecution.'
            }
          ]
        },
        {
          id: 'sec_l16',
          title_ar: 'مشروع التخرج – خطة أمنية متكاملة لمجمع تجاري',
          title_en: 'Graduation Project – Mall Comprehensive Security Plan',
          visual_type: 'illustration',
          visual_description: 'رسم توضيحي كبير لمجمع تجاري من الداخل: مداخل، محلات، مخارج طوارئ، كاميرات، مواقع أفراد الأمن. خريطة جميلة بأيقونات واضحة. شهادة تخرج ذهبية بجانبها.',
          summary_ar: [
            'الآن نجمع كل المهارات في تصميم خطة.',
            'تحديد مواقع أفراد الأمن بناءً على مداخل ومهددات المبنى.',
            'رسم مسارات الجولات الأمنية بحكمة.',
            'تحديد إجراءات الطوارئ والتواصل.',
            'مبروك أيها العون، أنت درع يحمي الأرواح الممتلكات.'
          ],
          summary_en: [
            'Now we consolidate all skills into a comprehensive design.',
            'Positioning guards based on entrances and structural threats.',
            'Drawing wise patrol routes.',
            'Pinning down emergency and communication procedures.',
            'Congratulations Agent, you are a shield for lives and properties.'
          ],
          exercise_text_ar: "تخيل أنك رئيس فريق أمن في مجمع تجاري جديد يتكون من: مدخل رئيسي، مدخل خلفي، موقف سيارات، 20 محلاً، وطابقين. قم بإعداد خطة أمنية كاملة: مواقع الأفراد، كاميرات مرصودة، جدول المناوبات لـ 5 أعوان (صباح ومساء)، خطة تدخل للحرائق والسرقات. قدمها بشكل مكتوب واضح ومهني.",
          exercise_text_en: "Imagine you are the security manager for a newly opened mall: Main entrance, back door, parking, 20 shops, 2 floors. Write a full security plan: Guard/Camera allocation, shift schedule (5 guards on AM/PM), and intervention plans for fire/theft. Deliver a professional written draft.",
          quiz: []
        }
      ]
    }
  ]
};
