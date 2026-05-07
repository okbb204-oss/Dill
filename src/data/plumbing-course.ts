import { Course } from './courses';

export const sanitaryPlumbingCourse: Course = {
  craftId: 'sanitary_plumbing',
  title: 'مساعد الترصيص الصحي',
  titleEN: 'Sanitary Plumbing Assistant',
  description: 'دورة شاملة لتأسيس وإصلاح شبكات المياه والصرف الصحي بموثوقية واحترافية.',
  descriptionEN: 'A comprehensive course on installing and repairing plumbing networks with reliability and professionalism.',
  badges: {
    started: {
      id: 'plmb_start',
      title: 'خبير السلامة',
      titleEN: 'Safety Expert',
      description: 'أتممت أولى خطواتك في عالم الترصيص بأمان',
      descriptionEN: 'Completed your first steps in plumbing safely',
      icon: 'hard-hat'
    },
    completed: {
      id: 'plmb_comp',
      title: 'سباك ماهر',
      titleEN: 'Skilled Plumber',
      description: 'أنهيت المسار بنجاح وأنت الآن تبني وتصلح وتؤمن بيتاً كاملاً.',
      descriptionEN: 'Successfully finished the path and now you can build, fix, and secure a whole home.',
      icon: 'award'
    }
  },
  levels: [
    {
      id: 'lvl_1',
      title: 'السلامة، التعرف على المواد والأدوات',
      titleEN: 'Safety, Materials & Tools Recognition',
      description: 'تجهيز الورشة والتعرف على أنواع الأنابيب والأدوات والمخططات.',
      descriptionEN: 'Preparing the workspace and identifying pipes, tools, and blueprints.',
      lessons: [
        {
          id: 'l1',
          title: 'السلامة في ورشة الترصيص الصحي',
          titleEN: 'Safety in Plumbing Workshop',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'سباك يرتدي خوذة واقية، نظارات، قفازات. يحفر جداراً بـ "بيرفوراتور" بجواره علامة خطر كهرباء. ينظف المكان بالمكنسة. لوحة تنبيه: "تأكد من إغلاق المحبس الرئيسي قبل أي عمل".',
          visualDescriptionEN: 'Plumber wearing safety helmet, glasses, and gloves, drilling a wall with an electric drill near an electrical hazard sign. Cleaning up with a broom. Warning sign: Ensure main valve is closed before work.',
          duration: '10 min',
          summary: [
            'ارتدِ خوذة ونظارات واقية عند الحفر.',
            'تأكد من فصل التيار الكهربائي قبل الحفر في الجدران.',
            'أغلق محبس الماء الرئيسي قبل تفكيك أي أنبوب.',
            'استخدم قفازات لحماية اليدين من الحروق أثناء اللحام.',
            'حافظ على الورشة نظيفة لتجنب التعثر بالأنابيب.',
            'لا تلمس الأنابيب المسخنة قبل أن تبرد.'
          ],
          summaryEN: [
            'Wear safety helmet and goggles when drilling.',
            'Ensure electricity is disconnected before drilling walls.',
            'Close the main water valve before disassembling any pipe.',
            'Use gloves to protect hands from burns during welding.',
            'Keep the workshop clean to avoid tripping over pipes.',
            'Do not touch heated pipes before they cool.'
          ],
          task: {
            title: 'تحديد المخاطر',
            titleEN: 'Identify Hazards',
            description: 'ضع قائمة بـ 5 مخاطر محتملة في ورشة سباكة. لكل خطر، اكتب وسيلة الوقاية المناسبة. ارسم الملصق التحذيري الذي ستعلقه في ورشتك.',
            descriptionEN: 'List 5 potential hazards in a plumbing workshop and write the appropriate prevention method for each. Draw a warning poster.'
          },
          xpReward: 15,
          quiz: [
            {
              id: 'q1',
              question: 'ما هو الإجراء الأول قبل تفكيك أي صنبور أو أنبوب في المنزل؟',
              questionEN: 'What is the first procedure before disassembling any tap or pipe at home?',
              options: [
                { id: 'o1', text: 'فصل التيار الكهربائي', textEN: 'Disconnect electricity', isCorrect: false },
                { id: 'o2', text: 'إغلاق محبس الماء الرئيسي', textEN: 'Close the main water valve', isCorrect: true },
                { id: 'o3', text: 'ارتداء القفازات', textEN: 'Wear gloves', isCorrect: false }
              ],
              explanation: 'إغلاق المحبس الرئيسي يمنع حدوث فيضانات وأضرار مائية كبيرة.',
              explanationEN: 'Closing the main valve prevents flooding and major water damage.'
            }
          ]
        },
        {
          id: 'l2',
          title: 'التعرف على أنواع الأنابيب والمواد',
          titleEN: 'Identifying Pipes and Materials',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'ثلاثة أنواع من الأنابيب مرتبة: PPR (أخضر أو أبيض)، PVC (رمادي)، أنبوب نحاسي (برتقالي). مع أسهم تشرح الاستخدامات.',
          visualDescriptionEN: 'Three types of pipes arranged: PPR (green/white), PVC (grey), Copper pipe (orange). With arrows explaining uses.',
          duration: '15 min',
          summary: [
            'أنابيب PPR: بلاستيك قوي يتحمل الحرارة، يُستخدم في مياه الشرب والتدفئة.',
            'أنابيب PVC: رمادية، للصرف الصحي (غير صالحة للشرب الساخن).',
            'النحاس: متين ومكلف، يستخدم في التدفئة والمنازل القديمة.',
            'أقطار الأنابيب تقاس بالميليمتر (20، 25، 32 مم...).',
            'اختر نوع الأنبوب حسب الضغط ودرجة الحرارة.'
          ],
          summaryEN: [
            'PPR pipes: Strong heat-resistant plastic for drinking water and heating.',
            'PVC pipes: Grey, used for drainage (not for hot potable water).',
            'Copper: Durable and expensive, used in heating and older homes.',
            'Pipe diameters are measured in millimeters (20, 25, 32 mm...).',
            'Choose pipe type based on pressure and temperature.'
          ],
          task: {
            title: 'فحص الأنابيب',
            titleEN: 'Pipe Inspection',
            description: 'زر مطبخك أو حمامك، وافحص الأنابيب المكشوفة. حدد نوعها وقس قطرها التقريبي وسجل ملاحظاتك.',
            descriptionEN: 'Visit your kitchen/bathroom, inspect exposed pipes. Determine their type and approximate diameter.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'q1',
              question: 'أي نوع من الأنابيب هو الأفضل لخطوط إمداد المياه الساخنة الحديثة؟',
              questionEN: 'Which pipe type is best for modern hot water supply lines?',
              options: [
                { id: 'o1', text: 'PVC الرمادية', textEN: 'Grey PVC', isCorrect: false },
                { id: 'o2', text: 'أنابيب PPR', textEN: 'PPR pipes', isCorrect: true },
                { id: 'o3', text: 'الخرطوم المطاطي المبوس', textEN: 'Reinforced rubber hose', isCorrect: false }
              ],
              explanation: 'أنابيب PPR مصممة خصيصاً لتحمل حرارة وضغط مياه الشرب الساخنة.',
              explanationEN: 'PPR pipes are specifically designed to withstand hot potable water temperature and pressure.'
            }
          ]
        },
        {
          id: 'l3',
          title: 'الأدوات اليدوية الأساسية واستخدامها',
          titleEN: 'Basic Hand Tools and Their Uses',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'طاولة ورشة تعرض: مفتاح أنابيب سويدي، قاطع PPR، منشار، شريط قياس. يد تمسك وتستخدم كل أداة.',
          visualDescriptionEN: 'Workshop table displaying: pipe wrench, PPR cutter, hacksaw, measuring tape. A hand holding and using each tool.',
          duration: '15 min',
          summary: [
            'مفتاح الأنابيب (السويدي): للربط والفك بشدة دون كسر الأجزاء.',
            'قاطع الأنابيب PPR: يشبه المقصلة لتوفير قطع نظيف بزاوية قائمة.',
            'منشار الحديد: الأفضل لقطع مواسير الـ PVC والقطع النحاسية.',
            'المتر: قس مرتين واقطع مرة واحدة للتقليل من الهدر.',
            'المكشط: لإزالة الزوائد والرايش لضمان جودة الأسطح قبل اللحام.'
          ],
          summaryEN: [
            'Pipe wrench: For tightening and loosening parts securely.',
            'PPR cutter: Guillotine-like for clean 90-degree cuts.',
            'Hacksaw: Best for cutting PVC and copper pipes.',
            'Measuring tape: Measure twice, cut once to reduce waste.',
            'Deburring tool: To remove burrs for clean surfaces before welding.'
          ],
          task: {
            title: 'المحاكاة',
            titleEN: 'Simulation',
            description: 'ارسم كل أداة وتخيل طريقة استخدامها. جرب قياس وقطع قطعة من خرطوم قديم.',
            descriptionEN: 'Draw each tool and simulate its use. Try measuring and cutting an old piece of hose.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'q1',
              question: 'لماذا يجب إزالة الرايش (الزوائد) من الأنبوب بعد القطع؟',
              questionEN: 'Why should burrs be removed from the pipe after cutting?',
              options: [
                { id: 'o1', text: 'ليكون متناسقاً باللون', textEN: 'For color consistency', isCorrect: false },
                { id: 'o2', text: 'لتسهيل قراءة المخطط', textEN: 'To make blueprints easier to read', isCorrect: false },
                { id: 'o3', text: 'لضمان لحام محكم ومنع التسرب', textEN: 'To ensure a tight weld and prevent leaks', isCorrect: true }
              ],
              explanation: 'الرايش يسبب فجوات هوائية أثناء اللحام مما يؤدي لتسرب الماء مستقبلاً.',
              explanationEN: 'Burrs create air gaps during welding, leading to future water leaks.'
            }
          ]
        },
        {
          id: 'l4',
          title: 'رسم وقراءة مخططات السباكة',
          titleEN: 'Drawing and Reading Plumbing Blueprints',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'مخطط حمام: المغسلة والمرحاض والدوش موصلة بخطوط زرقاء للمياه الباردة وحمراء للساخنة، وخطوط سميكة للصرف.',
          visualDescriptionEN: 'Bathroom blueprint: Sink, toilet, and shower connected directly with blue lines for cold water, red lines for hot, and thick lines for drainage.',
          duration: '20 min',
          summary: [
            'المخطط هو خريطة المسارات المائية داخل المنشأة.',
            'يرمز للماء البارد باللون الأزرق وللساخن باللون الأحمر.',
            'يرمز لشبكات الصرف الصحي بخط متقطع أو عريض غامق.',
            'فهم الرموز (مثل الصمامات والمحابس) ضروري لتحديد الأعطال.',
            'العمل بالمخطط يمنع الأخطاء المكلفة عند البدء في التكسير والتمديد.'
          ],
          summaryEN: [
            'A blueprint is the map of water pathways in the facility.',
            'Cold water is blue; hot water is red.',
            'Drainage networks are represented by dashed or bold thick lines.',
            'Understanding symbols (valves, traps) is essential for troubleshooting.',
            'Following blueprints prevents costly mistakes during installation.'
          ],
          task: {
            title: 'رسم مخطط',
            titleEN: 'Draw a Blueprint',
            description: 'ارسم مخططاً بسيطاً لحمام منزلك موضحاً خطوط المياه الباردة والساخنة عبر الجدران.',
            descriptionEN: 'Draw a simple blueprint for your designated bathroom, showing hot and cold water lines along the walls.'
          },
          xpReward: 25,
          quiz: [
            {
              id: 'q1',
              question: 'ما هو اللون المعتاد للإشارة إلى خط الماء البارد في المخططات؟',
              questionEN: 'What is the standard color indicating a cold water line in blueprints?',
              options: [
                { id: 'o1', text: 'الأحمر', textEN: 'Red', isCorrect: false },
                { id: 'o2', text: 'الأزرق', textEN: 'Blue', isCorrect: true },
                { id: 'o3', text: 'الأخضر', textEN: 'Green', isCorrect: false }
              ],
              explanation: 'الأزرق للبارد والأحمر للساخن هو معيار عالمي في مخططات السباكة.',
              explanationEN: 'Blue for cold and red for hot is a universal standard in plumbing blueprints.'
            }
          ]
        }
      ]
    },
    {
      id: 'lvl_2',
      title: 'التقطيع، التوصيل، واللحام',
      titleEN: 'Cutting, Connecting, and Welding',
      description: 'تعلم تقنيات التعامل مع أنابيب PPR و PVC وتثبيت الوصلات والصمامات.',
      descriptionEN: 'Learn techniques for handling PPR and PVC pipes, and installing fittings and valves.',
      lessons: [
        {
          id: 'l5',
          title: 'تقطيع وتجهيز أنابيب PPR و PVC',
          titleEN: 'Cutting and Preparing PPR and PVC Pipes',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'أنبوب PPR يُقاس ويقص دائرية. أنبوب PVC يُقطع بالمنشار ويُنعم بورق الصنفرة.',
          visualDescriptionEN: 'PPR pipe being measured and cut cleanly. PVC pipe being cut with hacksaw and sanded smoothly.',
          duration: '15 min',
          summary: [
            'استخدم قاطع الأنابيب لقطع مستقيم ونظيف.',
            'نظف طرف الأنبوب من الرايش بعد القطع لمنع تسرب المياه.',
            'جفف طرف أنبوب PPR تماماً قبل بدء عملية اللحام الحراري.',
            'خشن طرف PVC بورق صنفرة لزيادة تماسك الغراء.',
            'احرص على أخذ قياسات دقيقة لتقليل هدر المواد.'
          ],
          summaryEN: [
            'Use a pipe cutter for clean, straight cuts.',
            'Clean pipe ends from burrs to prevent leaks.',
            'Completely dry the PPR pipe end before heat welding.',
            'Roughen PVC ends with fine sandpaper for better glue adhesion.',
            'Take exact measurements to reduce material waste.'
          ],
          task: {
            title: 'إعداد أنبوب',
            titleEN: 'Prepare a Pipe',
            description: 'تدرب على القياس والتقطيع النظيف باستخدام خرطوم أو أنبوب غير مستعمل.',
            descriptionEN: 'Practice measuring and clean cutting using an unused pipe or hose.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'q1',
              question: 'ما هي الخطوة التحضيرية لأنابيب PVC قبل وضع الغراء؟',
              questionEN: 'What is the preparation step for PVC pipes before applying glue?',
              options: [
                { id: 'o1', text: 'تسخينها بالنار', textEN: 'Heating over fire', isCorrect: false },
                { id: 'o2', text: 'تنعيمها بالماء والزيت', textEN: 'Smoothing with water and oil', isCorrect: false },
                { id: 'o3', text: 'تخشين الأطراف بورق صنفرة وتنظيفها', textEN: 'Roughening ends with sandpaper and cleaning', isCorrect: true }
              ],
              explanation: 'التخشين يزيد من مساحة السطح ويوفر تجانساً أفضل للغراء الكيميائي.',
              explanationEN: 'Roughening increases surface area and provides better adhesion for chemical glue.'
            }
          ]
        },
        {
          id: 'l6',
          title: 'لحام أنابيب PPR بالحرارة',
          titleEN: 'Heat Welding PPR Pipes',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'إدخال أنبوب PPR مع وصلة في مكوى اللحام الساخنة. بعد ثوانٍ تُنزع وتدمج في خط مستقيم بدون لف.',
          visualDescriptionEN: 'Inserting a PPR pipe and fitting into a hot welding iron. After seconds, removed and merged straightly without twisting.',
          duration: '20 min',
          summary: [
            'تسخين المكوى حتى 260 درجة مئوية أمر ضروري للحام السليم.',
            'أدخل الأنبوب والوصلة معاً وبشكل مستقيم في قوالب المكوى.',
            'مدة الترك تعتمد على القطر (مثلاً 5 ثوانٍ لقطر 20 مم).',
            'ادفع الأنبوب بالوصلة بشكل مستقيم بدون أي لف أو دوران.',
            'انتظر 15 ثانية على الأقل حتى يبرد اللحام ويتصلب.'
          ],
          summaryEN: [
            'Heating the iron to 260°C is essential for proper welding.',
            'Insert pipe and fitting straight simultaneously into the iron molds.',
            'Time depends on diameter (e.g., 5 seconds for 20mm).',
            'Push pipe directly into fitting blindly without twisting.',
            'Wait at least 15 seconds to let the weld cool and solidify.'
          ],
          task: {
            title: 'دقة الدمج',
            titleEN: 'Merge Accuracy',
            description: 'تدرب على حركة التوصيل المستقيمة باستخدام أنبوبين بدون التواء لضمان جودة المفصل.',
            descriptionEN: 'Practice the straight connection motion strictly without twisting using two pipes.'
          },
          xpReward: 25,
          quiz: [
            {
              id: 'q1',
              question: 'لماذا يُمنع تدوير أو لف أنبوب PPR أثناء غرزه في الوصلة الملحومة؟',
              questionEN: 'Why is twisting a PPR pipe prohibited while pushing it into the welded fitting?',
              options: [
                { id: 'o1', text: 'يسبب تشققات وتشوهاً للمفصل مما يؤدي للتسرب', textEN: 'It causes cracking and deformation leading to leaks', isCorrect: true },
                { id: 'o2', text: 'لأنه يستهلك وقتاً أطول', textEN: 'Because it takes longer', isCorrect: false },
                { id: 'o3', text: 'لأنه يغير من خصائص الماء', textEN: 'Because it changes water properties', isCorrect: false }
              ],
              explanation: 'اللف يتلف البلاستيك المنصهر ويخلق فجوات بين الأنبوب والوصلة.',
              explanationEN: 'Twisting damages the melted plastic and creates gaps between pipe and fitting.'
            }
          ]
        },
        {
          id: 'l7',
          title: 'تركيب الوصلات والصمامات',
          titleEN: 'Installing Fittings and Valves',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'سباك يركب صماماً كروياً، يلف شريط التفلون مع عقارب الساعة ويربط الصمام بمفتاح السويدي برفق.',
          visualDescriptionEN: 'Plumber installing a ball valve, wrapping Teflon tape clockwise, and tightening smoothly with a pipe wrench.',
          duration: '15 min',
          summary: [
            'اختر الوصلة التي تتماشى مع نوع الأنبوب المستخدم.',
            'استخدم شريط التفلون على القطع المسننة لضمان العزل المائي.',
            'لف التفلون باتجاه شد البرغي (عقارب الساعة) 4-6 لفات.',
            'استخدم مفتاح الأنابيب لشد الصمامات بدون المبالغة في القوة.',
            'اختبر شبكة التوصيلات بفتح المياه تدريجياً للتحقق من عدم وجود تسرب.'
          ],
          summaryEN: [
            'Pick fittings that match the exact pipe material.',
            'Use Teflon tape on threaded joints for waterproof sealing.',
            'Wrap Teflon tight clockwise 4-6 times.',
            'Use pipe wrench to tighten valves without overtorquing.',
            'Test the network by turning on water gradually to spot leaks.'
          ],
          task: {
            title: 'لفة التفلون',
            titleEN: 'Teflon Wrapping',
            description: 'تدرب على لف شريط لولبي حول قلاووظ زجاجة مياه بحركة مع عقارب الساعة.',
            descriptionEN: 'Practice wrapping tape around the threads of a water bottle clockwise.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'q1',
              question: 'ما هو الاتجاه الصحيح للَف التفلون حول الأسنان؟',
              questionEN: 'What is the correct direction to wrap Teflon on threads?',
              options: [
                { id: 'o1', text: 'باتجاه معاكس لاتجاه الخيط', textEN: 'Counter-thread direction', isCorrect: false },
                { id: 'o2', text: 'بشكل عمودي على السن', textEN: 'Perpendicular to threads', isCorrect: false },
                { id: 'o3', text: 'بنفس اتجاه دوران الصامولة (مع عقارب الساعة)', textEN: 'Same direction as tightening (clockwise)', isCorrect: true }
              ],
              explanation: 'ليظل التفلون مشدوداً ومقاوماً للاحتكاك أثناء تثبيت القطعة ولا يُفك.',
              explanationEN: 'So it stays tight and resists friction while securing the part, avoiding unraveling.'
            }
          ]
        },
        {
          id: 'l8',
          title: 'تركيب شبكة صرف بسيطة (PVC)',
          titleEN: 'Installing a Basic Drainage Network (PVC)',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'أنبوب للصرف تحت مغسلة، كوع سيفون (S-trap)، تثبيت وتلصيق بالغراء الرمادي وتركيز الميلان للأسفل.',
          visualDescriptionEN: 'Drainage pipe under a sink, S-trap setup, gluing with grey PVC glue, checking downward slope.',
          duration: '20 min',
          summary: [
            'تعتمد شبكات الصرف على الجاذبية؛ تأكد من ميل الأنبوب بنسبة 2% على الأقل.',
            'السيفون (S-trap أو P-trap) يجمع الماء بداخله ويمنع خروج الغازات والروائح.',
            'نظف طرف الأنابيب جيداً بالمطهر قبل استخدام اللاصق.',
            'الغراء الكيميائي الـ PVC بصهر ودمج البلاستيك ليكون كتلة واحدة.',
            'ثبّت الوصلة الملتصقة بقوة لمدة 30 ثانية.'
          ],
          summaryEN: [
            'Drainage depends on gravity; maintain at least a 2% downward slope.',
            'S-traps or P-traps trap water to block harmful sewer gases.',
            'Clean pipe ends stringently with primer before gluing.',
            'PVC cement melts and merges plastic to act as one solid block.',
            'Hold the glued joint firmly for 30 seconds.'
          ],
          task: {
            title: 'فحص السيفون',
            titleEN: 'Trap Inspection',
            description: 'تفحص شكل أنبوب الصرف تحت مغسلة ببيتك. ارسم شكل السيفون وكيف يمنع الروائح.',
            descriptionEN: 'Inspect the drain pipe beneath your sink. Sketch the trap and think how it blocks odors.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'q1',
              question: 'ما هي الوظيفة الأساسية لقطعة السيفون في شبكة الصرف؟',
              questionEN: 'What is the primary function of a drain trap (siphon)?',
              options: [
                { id: 'o1', text: 'زيادة سرعة نزول الماء', textEN: 'Increase water draining speed', isCorrect: false },
                { id: 'o2', text: 'تصفية المياه لتُشرب مجدداً', textEN: 'Filtering water to make it drinkable', isCorrect: false },
                { id: 'o3', text: 'الاحتفاظ بماء قليل كحاجز لمنع رجوع روائح المجاري', textEN: 'Holding some water as a barrier against sewer gases', isCorrect: true }
              ],
              explanation: 'بدون سيفون، ستملأ روائح المجاري الخانقة جميع أنحاء المنزل فوراً.',
              explanationEN: 'Without a trap, foul sewer smells would instantly fill the home.'
            }
          ]
        }
      ]
    },
    {
      id: 'lvl_3',
      title: 'التركيبات الصحية الكاملة',
      titleEN: 'Complete Sanitary Installations',
      description: 'تركيب المغاسل والمراحيض وأنظمة الدوش بشكل مثالي ومواجهة التسربات.',
      descriptionEN: 'Perfectly install sinks, toilets, and showers, and handle leaks.',
      lessons: [
        {
          id: 'l9',
          title: 'تركيب مغسلة وحوض مطبخ',
          titleEN: 'Sink and Washbasin Installation',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'دليل مرئي: تثبيت القواعد، تسوية المغسلة بالميزان، توصيل الخلاط بأنابيب مرنة، تركيب السيفون.',
          visualDescriptionEN: 'Visual guide: mounting brackets, leveling sink with spirit level, connecting mixer tap with hoses, trap setup.',
          duration: '20 min',
          summary: [
            'استخدم ميزان الماء لضمان استواء المغسلة بنسبة 100%.',
            'من الأسهل تركيب الخلاط والصنبور في المغسلة قبل رفعها وتثبيتها.',
            'استخدم الأنابيب المرنة (Flexibles) لوصل الماء الساخن والبارد بأمان.',
            'تأكد من تركيب الخواتم المطاطية (Joints) بشكل صحيح لتفادي التسرب.',
            'اختبر الماء بصورة بطيئة للتحقق من كافة التوصيلات ومرور الصرف بحرية.'
          ],
          summaryEN: [
            'Use a spirit level to ensure the sink is 100% flat.',
            'Install the mixer tap onto the sink before hanging it.',
            'Use flexible hoses to safely connect hot/cold water.',
            'Double-check rubber joints/O-rings for watertight seals.',
            'Test with a slow water flow to check connections and drainage.'
          ],
          task: {
            title: 'فحص الخلاط',
            titleEN: 'Mixer Inspection',
            description: 'استكشف الخلاط في مطبخك من الأسفل وتعرف على توصيلات المرن ووضعية السيفون.',
            descriptionEN: 'Explore your kitchen mixer tap from below to identify flexible connections and trap position.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'q1',
              question: 'لماذا يُنصح بتركيب الخلاط (الصنبور) على المغسلة قبل تثبيتها على الجدار؟',
              questionEN: 'Why is it recommended to install the mixer tap before mounting the sink to the wall?',
              options: [
                { id: 'o1', text: 'لتسهيل الوصول للبراغي وتثبيته بقوة وراحة', textEN: 'For easier screw access and comfortable securing', isCorrect: true },
                { id: 'o2', text: 'لمنع ضياع القطع الصغيرة', textEN: 'To avoid losing small parts', isCorrect: false },
                { id: 'o3', text: 'ليتناسب شكلها المكتمل أمام الكاميرا', textEN: 'To look complete for pictures', isCorrect: false }
              ],
              explanation: 'المساحة تضيق جداً تحت المغسلة بعد التركيب، مما يصعب العمل بالمفاتيح.',
              explanationEN: 'Space gets very cramped under a mounted sink making wrenching difficult.'
            }
          ]
        },
        {
          id: 'l10',
          title: 'تركيب مرحاض (WC) وتوصيله',
          titleEN: 'Installing and Connecting a Toilet',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'وضع المرحاض على حلقة شمع (Wax ring) لسد الفجوة. شد براغي القاعدة. توصيل الخزان وخط التغذية البارد.',
          visualDescriptionEN: 'Placing toilet on a wax ring to seal the gap. Tightening base bolts. Connecting the tank and continuous cold supply line.',
          duration: '25 min',
          summary: [
            'تثبيت المرحاض يتطلب قاعدة بلاستيكية وبراغي للتأمين بالأرضية.',
            'استخدام طوق شمعي (Wax ring) يضمن الختم المطلق بين المرحاض والصرف ضد الروائح والتسرب.',
            'تجنب الشدّ المفرط لبراغي الوعاء الخزفي لأنه ينكسر بسرعة.',
            'تأكد من تركيب الخزان باحكام وعمله بثبات عبر عوامة التعبئة.',
            'محبس الزاوية يفصل نظام المياه عن المرحاض في أوقات الصيانة.'
          ],
          summaryEN: [
            'Toilet mounting requires plastic anchors and floor bolts.',
            'A wax ring guarantees a 100% seal isolating leaks and odors between the toilet and drain.',
            'Never over-tighten ceramic bowl bolts to prevent cracking.',
            'Ensure the tank secures tightly and its fill-valve floats normally.',
            'An angle stop valve isolates the toilet during maintenance.'
          ],
          task: {
            title: 'فحص ميكانيكي',
            titleEN: 'Mechanical Check',
            description: 'انزع غطاء خزان المرحاض في منزلك وحاول فهم آلية تعويم المياه وعمل صمام الطرد وتعبئة الماء التلقائية.',
            descriptionEN: 'Remove your toilet tank lid and understand the flush mechanism and the automatic float fill-valve.'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'q1',
              question: 'ما هو الأثر الذي قد يسببه الشد الزائد لبراغي وعاء المرحاض على الأرضية؟',
              questionEN: 'What is the consequence of over-tightening toilet bowl floor bolts?',
              options: [
                { id: 'o1', text: 'لن يحدث شيء، فالمرحاض شديد المتانة', textEN: 'Nothing, toilets are extremely tough', isCorrect: false },
                { id: 'o2', text: 'سينكسر السيراميك (البورسلان) الهش للمرحاض', textEN: 'The brittle ceramic (porcelain) bowl will gracefully crack', isCorrect: true },
                { id: 'o3', text: 'يسبب تسرباً مباشراً للمياه العذبة', textEN: 'Causes direct fresh water leakage', isCorrect: false }
              ],
              explanation: 'السيراميك مادة قوية لكنها هشة جداً عند الضغط المفرط من النقاط المثبتة بالبراغي الحديدية.',
              explanationEN: 'Ceramic is strong but incredibly brittle under excess focal pressure from iron bolts.'
            }
          ]
        },
        {
          id: 'l11',
          title: 'تركيب دوش وخلاط جداري',
          titleEN: 'Shower and Wall-Mixer Installation',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'سباك يركب خلاطاً جدارياً بمسافة 15سم بين خطي المياه. يُركب الذراع وتختلط المياه بنجاح.',
          visualDescriptionEN: 'Plumber installing wall mixer at 15cm distance. Attaching shower rail and mixing hot/cold efficiently.',
          duration: '15 min',
          summary: [
            'المسافة القياسية بين تمديداتالماء البارد والساخن في الجدار هي 15 سم.',
            'يجب استخدام الجلَد (الحشوات المطاطية) عند جمع ذراع الدوش بالخلاط.',
            'اربط الصواميل بأيديك لتتأكد من نزولها الصحيح، ثم انهِ الأمر بالمفتاح برفق.',
            'في حال كان ضغط الدوش ضعيفاً قد يتطلب الأمر مضخة مساعدة.',
            'اختبر المزج وتحرك الذراع للتأكد من المرونة قبل الانتهاء.'
          ],
          summaryEN: [
            'The standard distance between cold and hot rough-ins is 15cm.',
            'Always use rubber washers/O-rings when merging the rail with the mixer.',
            'Hand-tighten nuts to ensure proper threading, then gently finish with wrench.',
            'Poor shower pressure may necessitate adding a booster pump.',
            'Validate the mix ratio and check the flexible shower arm mobility.'
          ],
          task: {
            title: 'قياس التمديدات',
            titleEN: 'Rough-in Measurement',
            description: 'قس المسافة بين إمدادات الصنبور (الساخن والبارد) في حمامك لتتأكد هل هي 15 سم أم لا.',
            descriptionEN: 'Measure the distance between hot & cold plumbing feeds in your bathroom; verify 15cm span.'
          },
          xpReward: 15,
          quiz: [
            {
              id: 'q1',
              question: 'ما هي المسافة القياسية المتبعة في تجهيزات خلاط الدوش الجداري في الجزائر والعالم؟',
              questionEN: 'What is the standard spacing for a wall-mounted shower mixer?',
              options: [
                { id: 'o1', text: '10 سنتمتر', textEN: '10 cm', isCorrect: false },
                { id: 'o2', text: '15 سنتمتر', textEN: '15 cm', isCorrect: true },
                { id: 'o3', text: '25 سنتمتر', textEN: '25 cm', isCorrect: false }
              ],
              explanation: 'توحيد المعايير يسمح بتبديل الخلاطات لاحقاً بغض النظر عن الشركة المصنعة.',
              explanationEN: 'Dimension standards allow future substitution across virtually all mixer brands globally.'
            }
          ]
        },
        {
          id: 'l12',
          title: 'اكتشاف التسربات وإصلاحها',
          titleEN: 'Leak Detection and Repair',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'سباك يفحص وصلة رطبة بيده الجافة مجسساً، يقلل كمية ماء، يفك قطعة خربة، يرقع التفلون ويعيد الربط. التسرب توقف.',
          visualDescriptionEN: 'Plumber inspecting a wet fitting using a dry hand. Closes water. Unscrews faulty part. Re-wraps Teflon, reconnects. Leak stops definitively.',
          duration: '30 min',
          summary: [
            'كشف التسرب يبدأ بعدم التخمين؛ جفف المنطقة وافحص الرطوبة بيدكَ.',
            'أغلق المحبس الرئيسي دائماً قبل البدء بفك المفصل التالف.',
            'تسريب الصواميل غالباً يكون سببه تفلون سيئ، جِلدة بالية، أو ارتخاء بسيط.',
            'في تسرب الأنابيب المباشر قد نحتاج لاستبدال مقطع كامل وتركيب وصلة إصلاح.',
            'راقب الصيانة لـ 5 دقائق بعد عودة ضغط الماء قبل اختتامك للعمل.'
          ],
          summaryEN: [
            'Never guess leak sources; wipe dry and feel for origin moisture.',
            'Always shut off the main before unscrewing the faulty junction.',
            'Nut leaks mostly stem from bad Teflon, worn gaskets or poor tightening.',
            'Direct pipe leaks usually warrant cutting the segment out and installing a union.',
            'Monitor under-pressure repair sites for 5 straight minutes minimum before closing up.'
          ],
          task: {
            title: 'التفتيش المنزلي',
            titleEN: 'Home Inspection',
            description: 'قم بجولة في مرافق منزلك بحثاً عن خطوط رطبة، بقع مائية، أو أصوات تصفير خفيفة. قد تجد تسرباً خفياً.',
            descriptionEN: 'Do a lap around your domestic facilities scanning for wet trails, drywall stains, or subtle hissing. Hunt hidden leaks.'
          },
          xpReward: 25,
          quiz: [
            {
              id: 'q1',
              question: 'ما هي الخطوة الأولى لاكتشاف النقطة الفعلية لتسرب خفي أو مبهم في الحمام؟',
              questionEN: 'What is step one to locating a confusing/hidden water leak?',
              options: [
                { id: 'o1', text: 'تكسير كل الجدران المشتبه بها', textEN: 'Smash all suspect walls', isCorrect: false },
                { id: 'o2', text: 'تجفيف المنطقة بالكامل والبحث عن منبع قطرة الماء الأولية', textEN: 'Bone-dry the area to pinpoint the exact origin water droplet', isCorrect: true },
                { id: 'o3', text: 'صب الأسمنت فوق مصادر المياه', textEN: 'Pour cement over water pipes', isCorrect: false }
              ],
              explanation: 'التجفيف التام يكشف المنبع الحقيقي لئلا تنخدع بمسار انحدار المياه الطبيعي.',
              explanationEN: 'Absolute drying reveals true origin so you aren\'t fooled by gravity tracing drip paths downstream.'
            }
          ]
        }
      ]
    },
    {
      id: 'lvl_4',
      title: 'مشاريع متكاملة والاحتراف',
      titleEN: 'Comprehensive Projects & Professionalism',
      description: 'فهم السخانات، تسعير الأعمال، وإنجاز الحمامات الكاملة.',
      descriptionEN: 'Understanding water heaters, pricing labor/materials, and executing a full bathroom build.',
      lessons: [
        {
          id: 'l13',
          title: 'تركيب شبكة مياه كاملة لشقة',
          titleEN: 'Full Apartment Water Network Setup',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'رسم توضيحي لشبكة تغذية تبدأ من العداد وتمتد بمشعب التوزيع للمطبخ والحمام.',
          visualDescriptionEN: 'Illustration of a feed network running from the meter into a manifold branch heading to kitchen & bathroom circuits.',
          duration: '35 min',
          summary: [
            'العدَّاد الرئيسي والمضخة يمثلان الانطلاقة. التخطيط السليم يوفر الأمتار ويحافظ على قوة الضغط.',
            'نظام التوزيع عبر المُشعب (Collecteur) يسمح بتعطيل جهاز واحد للصيانة دون قطع الماء عن كامل الشقة.',
            'دفن الأنابيب في الجدران يجب أن يكون محكماً ومعزولاً.',
            'لابد من اختبار الشبكة باستخدام مضخة الضغط لاكتشاف التسرب قبل طلاء وإغلاق الجدار.',
            'الخطوط الرئيسية تبدأ بقطر عريض للكميات، بينما تتفرع الأنابيب بأقطار أصغر نحو الأجهزة.'
          ],
          summaryEN: [
            'Main meter and pumps initiate flow. Proper layout saves meterage and retains strong pressure.',
            'A parallel manifold system isolates fixtures allowing single repairs out independently.',
            'Pipes buried in walls mandate robust, insulated fitting.',
            'Pressure testing lines is absolutely critical before sealing off drywall patches/tiles.',
            'Mains should be wide-diameter decreasing toward branch devices.'
          ],
          task: {
            title: 'خريطة الشقة',
            titleEN: 'Flat Mapping',
            description: 'ارسم تصوراً لمسار أنبوب رئيسي من الباب إلى الحمام. أين يتفرع؟ هل من الأفضل توزيعه بالسقف أم تحت البلاط؟',
            descriptionEN: 'Trace a mainline path mentally from door to bathroom. Where does it branch? Ceilings vs Floors under-tile?'
          },
          xpReward: 30,
          quiz: [
            {
              id: 'q1',
              question: 'ما فائدة استخدام (مُشعب التوزيع) بدلاً من أنبوب واحد متصل بجميع الأجهزة تباعاً في المنزل؟',
              questionEN: 'Why bypass a single daisy-chain pipe setup for a specialized distribution manifold?',
              options: [
                { id: 'o1', text: 'يوفر تكلفة الأنابيب', textEN: 'Cuts pipe material cost completely', isCorrect: false },
                { id: 'o2', text: 'يعطي لكل جهاز خط منفصل للتحكم والضغط المستقل والصيانة دون تعطيل المنزل', textEN: 'Isolates each fixture for steady independent pressure & zero-impact maintenance shutdown', isCorrect: true },
                { id: 'o3', text: 'يسرع تدفق الماء الساخن فقط', textEN: 'Turbo-accelerates hot water purely', isCorrect: false }
              ],
              explanation: 'المشعبات أسلوب حديث واحترافي للصيانة العزلية التامة مع أداء سلس.',
              explanationEN: 'Manifolds represent modern, superior plumbing layouts delivering pristine localized maintenance control.'
            }
          ]
        },
        {
          id: 'l14',
          title: 'تركيب وصيانة سخان المياه',
          titleEN: 'Installing and Maintaining Water Heaters',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'سخان ماء كهربائي بوضوح؛ مجموعة الأمان في الأسفل ترشح الماء الزائد إلى سيفون صرف لتفادي الضغط العالي.',
          visualDescriptionEN: 'Clear electric water heater. Safety group at its cold inlet base dripping excess-pressure water towards an open trap drain.',
          duration: '35 min',
          summary: [
            'سخان المياه الكهربائي يحتاج لتثبيت ببراغي قوية نظراً لوزنه الثقيل عند التعبئة.',
            'تُركب وحدة (مجموعة الأمان) على مدخل المياه الباردة للسخان كصمام تصريف للضغط العالي.',
            'مجموعة الأمان إلزامية لتفادي خطر انفجار السخان بسبب تراكم الضغط الحراري.',
            'يجب تصريف مياه مجموعة الأمان إلى مصرف حر غير محكم الإغلاق.',
            'الصيانة الدورية تتضمن تفريغ السخان من الماء لتنظيف ترسبات الكلس (التكلس) لحفظ عمره.'
          ],
          summaryEN: [
            'Heaters demand robust wall anchor bolts to sustain their tremendous full water payload.',
            'The high-pressure safety release valve block gets affixed exclusively on the cold water inlet.',
            'This safety group is non-negotiable; ignoring it ensures a ticking thermal pressure bomb.',
            'Discharge output must remain airborne funneling into a clear open drain.',
            'Maintenance demands periodically purging tanks scaling and calcium deposits protecting electrical lifespan.'
          ],
          task: {
            title: 'تحديد الأمان',
            titleEN: 'Safety Identification',
            description: 'طابق مكونات السخان المكتوبة بمهارة: ابحث عن مجموعة الأمان وأنبوب الصرف على السخان بلمحاتك.',
            descriptionEN: 'Match heater components gracefully: sight the critical cold-water safety group array alongside its purge drain.'
          },
          xpReward: 25,
          quiz: [
            {
              id: 'q1',
              question: 'ما هي الوظيفة الأساسية لمجموعة الأمان في السخان (الشوف با)؟',
              questionEN: 'What is the absolute critical function of an electric heater safety unit?',
              options: [
                { id: 'o1', text: 'تمنع انفجار السخان بتسريب الضغط الحراري العالي والزائد تلقائياً', textEN: 'Averts explosive tank ruptures by automatically venting excess thermo-pressure', isCorrect: true },
                { id: 'o2', text: 'تحافظ على برودة الماء لكي لا يغلي', textEN: 'Chill-gates water off reaching boil threshold', isCorrect: false },
                { id: 'o3', text: 'تطهر المياه من البكتيريا تلقائياً', textEN: 'Naturally sterilizes all incoming tap bacteria', isCorrect: false }
              ],
              explanation: 'بدونها قد يتحول السخان المغلق لقنبلة حرارية حقيقية تدمر المكان.',
              explanationEN: 'With zero pressure release a plugged boiling tank functionally morphs into an expanding bomb payload.'
            }
          ]
        },
        {
          id: 'l15',
          title: 'تقدير التكلفة وكتابة عرض السعر (Devis)',
          titleEN: 'Cost Estimation & Quoting',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'جدول أسعار يجمع تكلفة المواد والأدوات وتسعيرة اليد العاملة وينتهي برسالة احترافية للعميل.',
          visualDescriptionEN: 'Clean cost spreadsheet calculating parts, tools payload against man-hours terminating in a sharp professional customer devis.',
          duration: '30 min',
          summary: [
            'ابنِ سمعتك بالصدق: ادرس الموقع ولا تقدم أسعاراً قطعية بدون الفحص والمعاينة.',
            'احسب تكاليف المواد (أنابيب، وصلات، أجهزة) بزيادة 10% للتلف المحتمل.',
            'أضف تسعير مجهودك اليدوي اليومي (العمالة) ومجهودك في شراء النقل.',
            'طريقة تقديم التقدير المكتوب والمفصل تقنع العميل باحترافيتك، لا تكتف بالكلام.',
            'توضيح شروط الدفع مسبقاً يحفظ حقوقك وحقوق العميل وينهي الجدال.'
          ],
          summaryEN: [
            'Reputations rely on facts. Examine site thoroughly; avoid blind raw quoting.',
            'Assess materials rigorously plus +10% contingency buffer padding for cuts.',
            'Tack on labor daily-rate parameters seamlessly inclusive of transit hauling logic.',
            'Issuing an articulated typed/itemized invoice sells extreme competence over verbal guesses.',
            'Spelling out staged payment milestones safeguards contractor-client mutual trust fully.'
          ],
          task: {
            title: 'اقتراح ميزانية',
            titleEN: 'Budget Proposal',
            description: 'جهز عرض سعر خيالي لتركيب مرحاض، دوش ومغسلة على ورقة منفصلة.',
            descriptionEN: 'Draft an itemized dummy devis for a toilet/shower/sink install setup via spare paper.'
          },
          xpReward: 20,
          quiz: [
            {
              id: 'q1',
              question: 'لماذا نقوم بطلب زيادة تقديرية 10% في سعر ومواد المشروع قبل البدء؟',
              questionEN: 'Why pad project material quotas with roughly +10% estimates prior launching?',
              options: [
                { id: 'o1', text: 'سرقة العميل', textEN: 'Defrauding clients', isCorrect: false },
                { id: 'o2', text: 'لتغطية التلف المحتمل للمواد وتغيرات الخطط الفجائية وتوفير التكاليف', textEN: 'Padding absorbs unforeseen damaged cut-offs, sudden layout shifts handling contingency seamlessly', isCorrect: true },
                { id: 'o3', text: 'للضرائب فقط', textEN: 'Tax purposes purely', isCorrect: false }
              ],
              explanation: 'كل مشروع سباكة يتضمن هدراً صغيراً في القطع، حساب هذا الهدر يعكس خبرتك المسبقة.',
              explanationEN: 'Total plumbing builds all incur scrap off-cuts; budgeting waste showcases preemptive mastery.'
            }
          ]
        },
        {
          id: 'l16',
          title: 'مشروع التخرج: إنجاز حمام متكامل',
          titleEN: 'Capstone: Integrated Bathroom Build',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'صورة مجزأة تظهر المخطط الأساسي وحوله قائمة المواد المطلوبة، ثم الحمام بشكله الفخم بعد انتهاء العمل المتقن وعمليات التنظيف.',
          visualDescriptionEN: 'Split visual showing baseline empty-shell plumbing diagram contrasted by final pristine sparkling upscale modern tiles fixture execution.',
          duration: '60 min',
          summary: [
            'الخطوة الأولى: أعد مخططاً واضحاً لمسارات مياه الحمام البارد والساخن والصرف.',
            'حصر الأدوات والمواد مع أقطار الأنابيب وأطوالها المبدئية قبل التسوق.',
            'ترتيب تسلسل العمل: أولا التأسيس في الجدران، ثانيا التبليط، ثالثا تثبيت الأجهزة، وأخيرا توصيل المرن.',
            'الاختبار: فحص ضغط جميع مسارات المياه والصرف لمواجهة التسريبات الجذعية.',
            'قم بتنظيف الورشة وتجهيز ملف عرض السعر النهائي لتوقيع تسليم المشروع.'
          ],
          summaryEN: [
            'Alpha step: Design an absolute crystal-clear trace map of cold/hot and drain runs.',
            'Lock inventory logistics matching all diameter gauges / rough metrics directly.',
            'Sequential logic dictates: Wall rough-in > Tilers > Fixture mounting > Flex links finishing.',
            'Core Trials: High-pressure checks eliminating micro-leaks across junction trees entirely.',
            'Polish workstation footprint executing client final billing walkthrough signing.'
          ],
          task: {
            title: 'المشروع المهني',
            titleEN: 'Professional Project',
            description: 'ارسم ووصف تجهيز حمام جديد بالكامل. خطط له، اكتب أسعارك، واشرح تسلسل خطواتك للعميل بدقة وإيجاز قبل الاستلام.',
            descriptionEN: 'Render & plot an entire new bathroom from raw shell up. Build timeline, price mapping and client presentation brief accurately.'
          },
          xpReward: 40,
          quiz: [
            {
              id: 'q1',
              question: 'ما هو الترتيب الصحيح المتبع تقريباً في إنشاء حمام من الصفر؟',
              questionEN: 'Which exact logical progression dictates heavy bathroom overhauls globally?',
              options: [
                { id: 'o1', text: 'الطلي بالدهان، وضع الأجهزة الصحية ثم محاولة اختراق الجدران', textEN: 'Paints jobs, mounting ceramics then smashing holes randomly', isCorrect: false },
                { id: 'o2', text: 'شراء السيراميك ثم بيع البيت سريعاً', textEN: 'Hoard tile blocks and flee immediately', isCorrect: false },
                { id: 'o3', text: 'تأسيس الأنابيب بالجدران واختبارها (أولاً)، إغلاق الجدران وتلبيصها، ثم أخيراً التوصيل الظاهري للأجهزة', textEN: 'In-wall rough-in & pressure test (First) -> Tiling shell sealing -> Outer fixture finish connections', isCorrect: true }
              ],
              explanation: 'عزل العمل التأسيسي وفحصه يحميك من أي أعمال تكسير مروعة في مرحلة ما بعد إنهاء الشكل الجمالي.',
              explanationEN: 'Validating rough-work secures zero destructive horror teardowns post-aesthetic tiling completion acts.'
            }
          ]
        }
      ]
    }
  ]
};
