import { Course } from "./courses";

export const accountingCourse: Course = {
  craftId: 'accounting',
  title: 'مسار المحاسبة',
  titleEN: 'Accounting Track',
  description: 'مسار متكامل لتعلم المحاسبة خطوة بخطوة، من المبادئ الأساسية إلى البرامج المحاسبية والجباية.',
  descriptionEN: 'A complete track to learn accounting step-by-step, from basic principles to accounting software and taxation.',
  badges: {
    started: {
      id: 'acc_novice',
      title: 'حارس الأرقام',
      titleEN: 'Guardian of Numbers',
      description: 'تعرفت على أساسيات المحاسبة والأخلاقيات.',
      descriptionEN: 'Learned the basics of accounting and ethics.',
      icon: '🔒'
    },
    completed: {
      id: 'acc_pro',
      title: 'محاسب محترف',
      titleEN: 'Professional Accountant',
      description: 'أتممت كامل المسار وأثبتت قدرتك على إدارة الحسابات وإعداد القوائم المالية.',
      descriptionEN: 'Completed the full track and proved your ability to manage accounts and prepare financial statements.',
      icon: '⚖️'
    }
  },
  levels: [
    {
      id: 'lvl_1',
      title: 'المرحلة الأولى: مبادئ المحاسبة والأخلاقيات',
      titleEN: 'Stage 1: Accounting Principles & Ethics',
      description: 'تعرف على دور المحاسب، أخلاقيات المهنة، والمعادلة المحاسبية الأساسية.',
      descriptionEN: 'Learn about the role of an accountant, professional ethics, and the basic accounting equation.',
      lessons: [
        {
          id: 'les_1',
          title: 'مدخل لمهنة المحاسب في الجزائر',
          titleEN: 'Introduction to Accounting in Algeria',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'مكتب محاسب جزائري عصري يضم ملفات منظمة وحاسوباً يظهر برنامج محاسبي SCF، مع التركيز على الدقة والشفافية.',
          duration: '05:00',
          summary: [
            'المحاسبة هي "لغة المال" التي تسجل كل حركة مالية داخل المؤسسة.',
            'المحاسب هو حارس شفافية الأرقام، والمؤتمن على سرية البيانات المالية.',
            'تعتمد المحاسبة في الجزائر على النظام المحاسبي المالي (SCF).',
            'الدور الأساسي هو تسجيل العمليات (شراء، بيع، رواتب) وتحليلها واستخراج التقارير.',
            'تساعد المحاسبة الإدارة في اتخاذ قرارات حكيمة لترشيد النفقات وزيادة الأرباح.',
            'المحاسب يضمن امتثال المؤسسة للقوانين الجبائية (الضرائب) وحقوق العمال.'
          ],
          summaryEN: [
            'Accounting is the "language of money" that records every financial transaction.',
            'The accountant is the guardian of numerical transparency and data confidentiality.',
            'Algerian accounting follows the Financial Accounting System (SCF).',
            'The core role is recording transactions (purchases, sales, salaries) and generating reports.',
            'Accounting helps management make wise decisions to optimize expenses and increase profits.',
            'Accountants ensure compliance with tax laws and employee rights.'
          ],
          task: {
            title: 'تمرين المحاكاة: المحاسب مقابل أمين الصندوق',
            titleEN: 'Simulation: Accountant vs. Cashier',
            description: 'ابحث عن إيصال شراء من متجر محلي. حدد ما هي المعلومة التي يحتاجها أمين الصندوق (قبض الثمن) والمعلومة التي يحتاجها المحاسب (التصنيف المحاسبي، الضريبة، والمورد).',
            descriptionEN: 'Find a receipt from a local store. Identify what info the cashier needs (payment) and what the accountant needs (classification, tax, supplier).'
          },
          quiz: [
            {
              id: 'q1_1',
              question: 'ما هو الهدف الجوهري للمحاسبة داخل أي مؤسسة اقتصادية؟',
              questionEN: 'What is the core objective of accounting within any economic entity?',
              options: [
                { id: 'o1', text: 'تخزين النقود فقط', textEN: 'Storing money only', isCorrect: false },
                { id: 'o2', text: 'توفير معلومات مالية دقيقة لاتخاذ القرارات والامتثال للقوانين', textEN: 'Providing accurate financial info for decision-making and legal compliance', isCorrect: true },
                { id: 'o3', text: 'البيع المباشر للزبائن', textEN: 'Direct selling to customers', isCorrect: false },
                { id: 'o4', text: 'ترويج الإعلانات', textEN: 'Promoting advertisements', isCorrect: false }
              ],
              explanation: 'المحاسبة تحول البيانات المبعثرة إلى معلومات منظمة تدعم الاقتصاد والامتثال.',
              explanationEN: 'Accounting transforms scattered data into organized information that supports the economy and compliance.'
            },
            {
              id: 'q1_2',
              question: 'دخل أحد الزبائن المزعجين وطلب منك كفرد من الطاقم المحاسبي كشفاً عن ديون شركة منافسة تتعامل معكم، ماذا تفعل؟',
              questionEN: 'An annoying customer enters and asks you, as part of the accounting staff, for a debt disclosure of a competitor. What do you do?',
              options: [
                { id: 'o1', text: 'أعطيه المعلومات لكسب وده', textEN: 'Give him the info to win him over', isCorrect: false },
                { id: 'o2', text: 'أرفض الطلب تماماً التزاماً بمبدأ السرية المهنية', textEN: 'Refuse the request completely in compliance with professional confidentiality', isCorrect: true },
                { id: 'o3', text: 'أطلب منه مبلغاً مالياً مقابل المعلومة', textEN: 'Ask him for money in exchange for info', isCorrect: false },
                { id: 'o4', text: 'أحوله لموظف الاستقبال', textEN: 'Refer him to the receptionist', isCorrect: false }
              ],
              explanation: 'السرية المهنية هي ركيزة أخلاقية للمحاسب؛ لا يجوز إفشاء بيانات الزبائن أو المؤسسة لأي طرف ثالث.',
              explanationEN: 'Professional confidentiality is an ethical pillar for accountants; customer/company data must not be disclosed to third parties.'
            },
            {
              id: 'q1_3',
              question: 'إذا استلمت فاتورة شراء بضاعة ولكنها لا تحتوي على الختم أو الرقم التعريفي الجبائي (NIF)، هل تسجلها؟',
              questionEN: 'If you receive a purchase invoice without a stamp or Tax Identification Number (NIF), do you record it?',
              options: [
                { id: 'o1', text: 'نعم، المهم أن البضاعة وصلت', textEN: 'Yes, as long as the goods arrived', isCorrect: false },
                { id: 'o2', text: 'لا، لأنها وثيقة غير قانونية ولا يمكن تبريرها محاسبياً', textEN: 'No, because it is an illegal document and cannot be justified for accounting', isCorrect: true },
                { id: 'o3', text: 'أنتظر حتى يطلب المدير ذلك', textEN: 'Wait for the manager to ask', isCorrect: false },
                { id: 'o4', text: 'أسجلها برسم "المصاريف الشخصية"', textEN: 'Record it as personal expenses', isCorrect: false }
              ],
              explanation: 'في المحاسبة الجزائرية، يجب أن تستوفي الوثائق الشروط القانونية (NIF, AI, RC) لتكون قابلة للتسجيل والخصم الجبائي.',
              explanationEN: 'In Algerian accounting, documents must meet legal requirements (NIF, AI, RC) to be valid for recording and tax deduction.'
            }
          ],
          xpReward: 50
        },
        {
          id: 'les_2',
          title: 'المعادلة المحاسبية وتوازن الميزانية',
          titleEN: 'Accounting Equation and Balance Sheet Equilibrium',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'ميزان يوضح الأصول (بنايات، سيارات، نقد) في كفة، والخصوم وحقوق الملكية في الكفة الأخرى، مع توضيح توازن المعادلة.',
          duration: '06:00',
          summary: [
            'المعادلة الأساسية هي: الأصول = الخصوم + حقوق الملكية.',
            'الأصول (Assets) هي كل ما تملكه المؤسسة من أموال، عقارات، ومخزون.',
            'الخصوم (Liabilities) هي ديون المؤسسة تجاه الغير (بنوك، موردين).',
            'حقوق الملكية (Equity) هي صافي استثمارات أصحاب المشروع والأرباح المحققة.',
            'كل عملية مالية تؤثر على طرفي المعادلة مع الحفاظ على توازنهما التام.',
            'إذا اختل توازن المعادلة، فهذا دليل قاطع على وجود خطأ في التسجيل أو الترصيد.'
          ],
          summaryEN: [
            'The basic equation is: Assets = Liabilities + Equity.',
            'Assets are everything the company owns: cash, buildings, and inventory.',
            'Liabilities are company debts to others: banks, suppliers.',
            'Equity is the net investment of owners and the profits made.',
            'Every financial transaction affects both sides of the equation while maintaining balance.',
            'If the balance is lost, it is definitive proof of an error in recording or balancing.'
          ],
          task: {
            title: 'Défi: بناء ميزانية مشروعك',
            titleEN: 'Challenge: Build Your Project Balance Sheet',
            description: 'تخيل أنك بدأت مشروعاً صغيراً "محل حلاقة": وضعت 200,000 دج في البنك، وافترضت ديناً بـ 50,000 دج لشراء كراسي. اكتب المعادلة المحاسبية للمحل.',
            descriptionEN: 'Imagine starting a barbershop: you put 200,000 DZD in the bank and took a 50,000 DZD loan for chairs. Write the accounting equation.'
          },
          quiz: [
            {
              id: 'q2_1',
              question: 'إذا كانت أصول شركتك تبلغ 1,500,000 دج، وديونها للموردين 400,000 دج وقرض البنك 200,000 دج، كم تبلغ حقوق الملكية؟',
              questionEN: 'If your assets are 1,500,000 DZD, debts to suppliers 400,000 DZD, and bank loan 200,000 DZD, what is the Equity?',
              options: [
                { id: 'o1', text: '2,100,000 دج', textEN: '2,100,000 DZD', isCorrect: false },
                { id: 'o2', text: '1,100,000 دج', textEN: '1,100,000 DZD', isCorrect: false },
                { id: 'o3', text: '900,000 دج', textEN: '900,000 DZD', isCorrect: true },
                { id: 'o4', text: '600,000 دج', textEN: '600,000 DZD', isCorrect: false }
              ],
              explanation: 'حقوق الملكية = الأصول - الخصوم. هنا (1,500,000) - (400,000 + 200,000) = 900,000 دج.',
              explanationEN: 'Equity = Assets - Liabilities. Here (1,500,000) - (400,000 + 200,000) = 900,000 DZD.'
            },
            {
              id: 'q2_2',
              question: 'اشتريت سيارة توصيل للمؤسسة نقداً بمبلغ 800,000 دج. كيف تتأثر المعادلة المحاسبية؟',
              questionEN: 'You bought a delivery car for the company in cash for 800,000 DZD. How is the equation affected?',
              options: [
                { id: 'o1', text: 'تزيد الأصول وتزيد الخصوم', textEN: 'Assets increase, Liabilities increase', isCorrect: false },
                { id: 'o2', text: 'يزيد أصل (السيارة) وينقص أصل آخر (النقدية) بنفس القيمة، ويبقى المجموع ثابتاً', textEN: 'One asset (car) increases while another (cash) decreases by same amount, total remains same', isCorrect: true },
                { id: 'o3', text: 'تنقص حقوق الملكية', textEN: 'Equity decreases', isCorrect: false },
                { id: 'o4', text: 'تزيد الخصوم فقط', textEN: 'Liabilities increase only', isCorrect: false }
              ],
              explanation: 'هذه عملية استبدال أصل بأصل؛ توازن الميزانية يبقى قائماً ولا تتأثر الخصوم أو حقوق الملكية.',
              explanationEN: 'This is an asset exchange; balance remains, and liabilities/equity are unaffected.'
            },
            {
              id: 'q2_3',
              question: 'ماذا يحدث إذا اقترضت المؤسسة مبلغ 1,000,000 دج من البنك ووضعته في حسابها؟',
              questionEN: 'What happens if the company borrows 1,000,000 DZD from the bank and deposits it?',
              options: [
                { id: 'o1', text: 'يزيد جانب الأصول (البنك) ويزيد جانب الخصوم (ديون بنكية) بنفس المبلغ', textEN: 'Assets (bank) increase, Liabilities (bank loans) increase by same amount', isCorrect: true },
                { id: 'o2', text: 'تنقص حقوق الملكية', textEN: 'Equity decreases', isCorrect: false },
                { id: 'o3', text: 'لا يتغير شيء في الميزانية', textEN: 'Nothing changes in the balance sheet', isCorrect: false },
                { id: 'o4', text: 'يزيد الربح فوراً', textEN: 'Profit increases immediately', isCorrect: false }
              ],
              explanation: 'الاقتراض يزيد من ممتلكاتك (نقد في البنك) وفي نفس الوقت يزيد من التزاماتك (دين للبنك).',
              explanationEN: 'Borrowing increases your properties (cash in bank) and simultaneously increases your obligations (bank debt).'
            }
          ],
          xpReward: 50
        },
        {
          id: 'les_3',
          title: 'دفتر اليومية ونظام القيد المزدوج',
          titleEN: 'The Journal and Double-Entry System',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'دفتر يومية محاسبي يظهر تسجيل عملية "شراء بضاعة"، مع سهمين يوضحان طرف المدين وطرف الدائن.',
          duration: '06:30',
          summary: [
            'كل عملية مالية تؤثر على طرفين على الأقل: طرف مدين (آخذ) وطرف دائن (معطي).',
            'في القيد المزدوج، يجب أن يتساوى مبلغ الطرف المدين مع مبلغ الطرف الدائن تماماً.',
            'الأصول والمصاريف تزيد في الجانب المدين (الدبّي) وتنقص في الجانب الدائن.',
            'الخصوم وحقوق الملكية والإيرادات تزيد في الجانب الدائن (الكريدي) وتنقص في المدين.',
            'دفتر اليومية هو السجل المبدئي الذي تدون فيه العمليات حسب تسلسلها الزمني.',
            'القيد اليومي يتكون من: التاريخ، المبالغ، الحسابات المتأثرة، وشرح موجز للعملية.'
          ],
          summaryEN: [
            'Every transaction affects at least two accounts: Debit (taker) and Credit (giver).',
            'In double-entry, the total debit amount must exactly equal the total credit amount.',
            'Assets and Expenses increase on the Debit side and decrease on the Credit side.',
            'Liabilities, Equity, and Revenue increase on the Credit side and decrease on the Debit.',
            'The Journal is the primary record where transactions are logged chronologically.',
            'A journal entry includes: date, amounts, affected accounts, and a brief description.'
          ],
          task: {
            title: 'تطبيق القيد المزدوج',
            titleEN: 'Double-Entry Application',
            description: 'سددت المؤسسة إيجار المكتب نقداً بمبلغ 35,000 دج. حدد الطرف المدين والطرف الدائن وقم بصياغة القيد في ورقة.',
            descriptionEN: 'The company paid 35,000 DZD office rent in cash. Identify Debit and Credit sides and write the entry.'
          },
          quiz: [
            {
              id: 'q3_1',
              question: 'إذا قمت بشراء آلة تصوير للصيانة بـ 40,000 دج "على الحساب" (دين)، فما هو الطرف الدائن؟',
              questionEN: 'If you buy a copier for 40,000 DZD "on account" (on credit), what is the Credit side?',
              options: [
                { id: 'o1', text: 'حساب الصندوق', textEN: 'Cash account', isCorrect: false },
                { id: 'o2', text: 'حساب الموردين/الدائنون', textEN: 'Suppliers/Accounts Payable', isCorrect: true },
                { id: 'o3', text: 'حساب الآلات', textEN: 'Equipment account', isCorrect: false },
                { id: 'o4', text: 'حساب المبيعات', textEN: 'Sales account', isCorrect: false }
              ],
              explanation: 'الشراء على الحساب يعني زيادة في التزامك تجاه المورد، والالتزامات تزيد في الجانب الدائن.',
              explanationEN: 'Buying on account increases your obligation to the supplier, and liabilities increase on the credit side.'
            },
            {
              id: 'q3_2',
              question: 'أين نسجل النقص في حساب "الصندوق" (النقدية)؟',
              questionEN: 'Where do we record a decrease in the "Cash" account?',
              options: [
                { id: 'o1', text: 'في الجانب المدين', textEN: 'In the Debit side', isCorrect: false },
                { id: 'o2', text: 'في الجانب الدائن', textEN: 'In the Credit side', isCorrect: true },
                { id: 'o3', text: 'في وسط الدفتر', textEN: 'In the middle of the book', isCorrect: false },
                { id: 'o4', text: 'لا يسجل النقص', textEN: 'Decrease is not recorded', isCorrect: false }
              ],
              explanation: 'الصندوق أصل، والأصول تنقص في الجانب الدائن (اليسار).',
              explanationEN: 'Cash is an asset, and assets decrease on the Credit (left) side.'
            },
            {
              id: 'q3_3',
              question: 'سجلنا قيداً بـ 50,000 دج مدين و 45,000 دج دائن، هل نقفل الدفتر؟',
              questionEN: 'We recorded an entry with 50,000 DZD Debit and 45,000 DZD Credit. Should we close the book?',
              options: [
                { id: 'o1', text: 'نعم، الفرق بسيط', textEN: 'Yes, the difference is small', isCorrect: false },
                { id: 'o2', text: 'لا، القيد غير متوازن ويجب تصحيحه ليتساوى الطرفان', textEN: 'No, the entry is unbalanced and must be corrected to match sides', isCorrect: true },
                { id: 'o3', text: 'نعم، نسجل الفرق كربح', textEN: 'Yes, record the difference as profit', isCorrect: false },
                { id: 'o4', text: 'ننتظر نهاية الشهر', textEN: 'Wait until month end', isCorrect: false }
              ],
              explanation: 'التوازن هو الأمانة العلمية للمحاسب؛ 1 دج فرق يجعل الدفاتر كلها مرفوضة.',
              explanationEN: 'Balance is the integrity of the accountant; a 1 DZD difference makes all records rejected.'
            }
          ],
          xpReward: 60
        },
        {
          id: 'les_4',
          title: 'الدورة المستندية وتدقيق الوثائق',
          titleEN: 'Document Cycle and Audit',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1554224154-26032ffc0d0c?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'عرض لأنواع الفواتير الجزائرية والوصولات مع توضيح البيانات الإلزامية مثل NIF و RC.',
          duration: '05:30',
          summary: [
            'لا يوجد تسجيل محاسبي بدون وثيقة قانونية تثبته (وصل، فاتورة، صك).',
            'الفاتورة (Facture) هي الوثيقة الأم التي تثبت البيع أو الشراء وتفاصيل الضريبة.',
            'يجب التأكد من صحة البيانات على الفاتورة: الرقم الضريبي (NIF)، رقم السجل التجاري (RC).',
            'أرشفة الوثائق بترقيم تسلسلي يسهل عملية التدقيق والبحث اللاحق.',
            'أمر الدفع وسند القبض ينظمان حركة النقدية داخل الصندوق.',
            'القانون التجاري الجزائري يلزم بحفظ الوثائق المحاسبية لمدة 10 سنوات.'
          ],
          summaryEN: [
            'No accounting record without a legal document (receipt, invoice, check).',
            'The invoice is the mother document proving sales/purchases and tax details.',
            'Must verify invoice data: Tax ID (NIF), Commercial Register (RC).',
            'Archiving documents in serial order simplifies later auditing and searching.',
            'Payment orders and receipts organize cash flow within the box/cash.',
            'Algerian commercial law mandates keeping accounting docs for 10 years.'
          ],
          task: {
            title: 'فحص فاتورة حقيقية',
            titleEN: 'Inspecting a Real Invoice',
            description: 'أحضر فاتورة كهرباء (Sonelgaz) أو فاتورة هاتف. استخرج منها المبالغ التالية: المبلغ الصافي (HT)، قيمة الرسم (TVA)، والمبلغ الإجمالي (TTC).',
            descriptionEN: 'Find a Sonelgaz or phone bill. Extract: Net Amount (HT), Tax Value (TVA), and Total Amount (TTC).'
          },
          quiz: [
            {
              id: 'q4_1',
              question: 'بصفتك محاسب، قدم لك مديرك وصلاً بسيطاً كتبه بيده لصرف مبلغ 5,000 دج لشراء قهوة للمكتب، هل تقبله؟',
              questionEN: 'As an accountant, your manager gives you a hand-written note to spend 5,000 DZD for office coffee. Do you accept it?',
              options: [
                { id: 'o1', text: 'نعم، لأنه المدير', textEN: 'Yes, because he is the manager', isCorrect: false },
                { id: 'o2', text: 'يجب تحويله إلى "سند صرف" داخلي رسمي موقع ومختم', textEN: 'It must be converted into a formal signed and stamped internal "Payment Voucher"', isCorrect: true },
                { id: 'o3', text: 'أرفض بشدة وأطرده', textEN: 'Refuse strongly and kick him out', isCorrect: false },
                { id: 'o4', text: 'أصرف من مالي الخاص', textEN: 'Pay from my own money', isCorrect: false }
              ],
              explanation: 'كل قرش يخرج من الصندوق يجب أن يبرره "سند صرف" داخلي معتمد لضبط الحسابات.',
              explanationEN: 'Every penny leaving the cash box must be justified by an approved internal "Payment Voucher".'
            },
            {
              id: 'q4_2',
              question: 'ما هو الرمز الضريبي الذي يجب توفره في فواتير الشركات في الجزائر؟',
              questionEN: 'What tax code must be present in company invoices in Algeria?',
              options: [
                { id: 'o1', text: 'PUP', textEN: 'PUP', isCorrect: false },
                { id: 'o2', text: 'NIF (الرقم التعريفي الجبائي)', textEN: 'NIF (Tax ID Number)', isCorrect: true },
                { id: 'o3', text: 'DNA', textEN: 'DNA', isCorrect: false },
                { id: 'o4', text: 'VIP', textEN: 'VIP', isCorrect: false }
              ],
              explanation: 'NIF هو الرقم الأساسي الذي تعتمده مصالح الضرائب للتعرف على المؤسسات وعملياتها.',
              explanationEN: 'NIF is the primary number used by tax authorities to identify entities and their operations.'
            },
            {
              id: 'q4_3',
              question: 'لماذا نهتم بترقيم الوثائق تسلسلياً (1، 2، 3...) في الأرشيف؟',
              questionEN: 'Why do we care about serializing documents (1, 2, 3...) in archives?',
              options: [
                { id: 'o1', text: 'فقط لزيادة العمل', textEN: 'Just to add work', isCorrect: false },
                { id: 'o2', text: 'للتأكد من عدم ضياع أي وثيقة وسهولة مراجعة العمليات المرتبطة بها', textEN: 'To ensure no document is lost and ease of reviewing associated transactions', isCorrect: true },
                { id: 'o3', text: 'لأن الألوان جميلة', textEN: 'Because colors are pretty', isCorrect: false },
                { id: 'o4', text: 'لطلب ورق جديد', textEN: 'To order new paper', isCorrect: false }
              ],
              explanation: 'التسلسل يمنع الثغرات ويسمح للمدقق الخارجي بالتأكد من اكتمال الدورة المستندية.',
              explanationEN: 'Serialization prevents gaps and allows external auditors to verify cycle completion.'
            }
          ],
          xpReward: 60
        }
      ]
    },
    {
      id: 'lvl_2',
      title: 'المرحلة الثانية: التسجيل المحاسبي والدورة المستندية',
      titleEN: 'Stage 2: Accounting Recording & Documentation Cycle',
      description: 'المستندات الأساسية، دفتر اليومية، دفتر الأستاذ، وإعداد ميزان المراجعة.',
      descriptionEN: 'Basic documents, Journal, General Ledger, and preparing Trial Balance.',
      lessons: [
        {
          id: 'les_5',
          title: 'دفتر الأستاذ: تصحيح المسار وترصيد الحسابات',
          titleEN: 'General Ledger: Course Correction and Balancing',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1611095567219-5d3c8cfa2b98?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'دفتر أستاذ (حسابات T) يظهر انتقال المبالغ من اليومية إلى حساب الصندوق وحساب الموردين.',
          duration: '06:45',
          summary: [
            'الهدف من دفتر الأستاذ هو تجميع العمليات المتشابهة في مكان واحد (حساب واحد).',
            'عملية "الترحيل" هي نقل المبالغ من دفتر اليومية إلى الحساب المختص في الأستاذ.',
            'نستخدم حساب (T) للتبسيط: الجانب الأيمن للمبالغ المدينة والأيسر للدائنة.',
            'ترصيد الحساب يعني إيجاد الفرق بين إجمالي المدين وإجمالي الدائن في نهاية الفترة.',
            'حسابات الأصول تكون أرصدتها طبيعياً "مدينة"، وحسابات الخصوم تكون "دائنة".',
            'بدون دفتر الأستاذ، لا يمكن معرفة رصيد الصندوق أو ديون الموردين بدقة فورية.'
          ],
          summaryEN: [
            'The goal of the ledger is to group similar transactions in one place (single account).',
            'The "posting" process is moving amounts from the journal to the specific ledger account.',
            'We use (T-account) for simplification: Right side for Debits, Left for Credits.',
            'Balancing means finding the difference between total Debits and Credits at period end.',
            'Assets usually have "Debit" balances, while Liabilities have "Credit" balances.',
            'Without a ledger, it\'s impossible to know cash balance or supplier debts instantly.'
          ],
          task: {
            title: 'ترصيد حساب الصندوق',
            titleEN: 'Balancing the Cash Account',
            description: 'ارسم حساب (T) للصندوق. سجل فيه: قبض 100,000 دج (مدين)، دفع 30,000 دج (دائن)، دفع 20,000 دج (دائن). احسب الرصيد النهائي.',
            descriptionEN: 'Draw a T-account for Cash. Record: 100k DZD in (Debit), 30k out (Credit), 20k out (Credit). Calculate final balance.'
          },
          quiz: [
            {
              id: 'q5_1',
              question: 'ما هو "الرصيد المدين" (Sold Débiteur)؟',
              questionEN: 'What is a "Debit Balance"?',
              options: [
                { id: 'o1', text: 'عندما يكون المال في الصندوق صفراً', textEN: 'When cash in box is zero', isCorrect: false },
                { id: 'o2', text: 'عندما يكون إجمالي الجانب المدين أكبر من إجمالي الجانب الدائن', textEN: 'When total Debit exceeds total Credit', isCorrect: true },
                { id: 'o3', text: 'عندما يطلب المدير سلفة', textEN: 'When the manager asks for an advance', isCorrect: false },
                { id: 'o4', text: 'عندما نخسر في المشروع', textEN: 'When the project loses money', isCorrect: false }
              ],
              explanation: 'الرصيد ينسب للجانب الأكبر؛ فإذا كان ما قبضته أكثر مما دفعته، فرصيدك مدين.',
              explanationEN: 'Balance is attributed to the larger side; if you received more than you paid, your balance is Debit.'
            },
            {
              id: 'q5_2',
              question: 'تخيل أنك رحلت قيداً من اليومية بقيمة 10,000 دج مدين، ولكنك سجلته بالخطأ في الجانب الدائن بالأستاذ. ماذا يحدث؟',
              questionEN: 'Imagine posting 10,000 DZD Debit from the journal, but accidentally recording it as Credit in the ledger. What happens?',
              options: [
                { id: 'o1', text: 'لا يتأثر شيء', textEN: 'Nothing happens', isCorrect: false },
                { id: 'o2', text: 'يختل توازن الحساب بمقدار 20,000 دج، وتصبح الدفاتر غير سليمة', textEN: 'The account balance is skewed by 20,000 DZD, making records invalid', isCorrect: true },
                { id: 'o3', text: 'يصبح الرصيد أصفاراً', textEN: 'Balance becomes zero', isCorrect: false },
                { id: 'o4', text: 'البرنامج يصححه تلقائياً', textEN: 'Software fixes it automatically', isCorrect: false }
              ],
              explanation: 'الخطأ في جهة الترحيل يضاعف أثر الخطأ (خطأ في الحساب ونقص في الآخر).',
              explanationEN: 'An error in posting side doubles the error impact (error in one account and deficiency in another).'
            },
            {
              id: 'q5_3',
              question: 'لماذا حساب "رأس المال" يكون رصيده دائماً دائن؟',
              questionEN: 'Why does the "Capital" account always have a Credit balance?',
              options: [
                { id: 'o1', text: 'لأن الدولة تطلب ذلك', textEN: 'Because the state requires it', isCorrect: false },
                { id: 'o2', text: 'لأنه يمثل التزاماً (حق) للملاك على المؤسسة، والالتزامات دائنة بطبيعتها', textEN: 'Because it represents an obligation (right) of owners on the entity, and liabilities are credit-natured', isCorrect: true },
                { id: 'o3', text: 'لأنه اسم جميل', textEN: 'Because it\'s a nice name', isCorrect: false },
                { id: 'o4', text: 'لأنه يزيد في المدين', textEN: 'Because it increases in Debit', isCorrect: false }
              ],
              explanation: 'حسب المعادلة المحاسبية، حقوق الملكية تقع في الجانب الأيسر (الدائن) وتزيد فيه.',
              explanationEN: 'According to the accounting equation, Equity is on the left (Credit) side and increases there.'
            }
          ],
          xpReward: 60
        },
        {
          id: 'les_6',
          title: 'ميزان المراجعة: المحفظة الأمنية للحسابات',
          titleEN: 'Trial Balance: Accounting Security Portfolio',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'قائمة ميزان مراجعة تظهر توازن إجمالي الأرصدة المدينة والدائنة مع علامة إنجاز خضراء.',
          duration: '05:30',
          summary: [
            'ميزان المراجعة هو كشف بأسماء وأرصدة جميع الحسابات في تاريخ معين.',
            'الوظيفة الأولى له هي التأكد من الدقة الحسابية للترحيل والترصيد.',
            'يجب أن يتساوى إجمالي الأرصدة المدينة مع أجمالي الأرصدة الدائنة حتماً.',
            'يوفر ميزان المراجعة أساساً متيناً لإعداد القوائم المالية الختامية (الميزانية).',
            'يساعد في اكتشاف الأخطاء الحسابية (مثل خطأ في الجمع أو نقل رقم غلط).',
            'توازن الميزان لا يعني غياب كل الأخطاء (قد يكون هناك خطأ مبدأ لم يكشفه).'
          ],
          summaryEN: [
            'The trial balance is a report of names and balances of all accounts at a specific date.',
            'Its primary function is ensuring mathematical accuracy of posting and balancing.',
            'Total Debit balances MUST exactly equal total Credit balances.',
            'It provides a solid basis for preparing final financial statements (Balance Sheet).',
            'Helps detect computational errors (like addition mistakes or wrong number transfers).',
            'Balance doesn\'t mean zero errors (there might be principle errors it doesn\'t catch).'
          ],
          task: {
            title: 'فحص توازن الميزان',
            titleEN: 'Checking Balance Sheet Equilibrium',
            description: 'أمامك أرصدة: صندوق (50ألف دج مدين)، بنك (100ألف دج مدين)، موردين (30ألف دج دائن)، رأس مال (120ألف دج دائن). هل الميزان متوازن؟ ارسمه وتأكد.',
            descriptionEN: 'Balances: Cash (50k Debit), Bank (100k Debit), Suppliers (30k Credit), Capital (120k Credit). Is it balanced? Draw and verify.'
          },
          quiz: [
            {
              id: 'q6_1',
              question: 'لماذا نُعد ميزان المراجعة قبل الانتقال للميزانية العمومية؟',
              questionEN: 'Why prepare a Trial Balance before the Balance Sheet?',
              options: [
                { id: 'o1', text: 'لأن القانون يعاقب على ذلك', textEN: 'Because the law punishes it', isCorrect: false },
                { id: 'o2', text: 'لإصلاح أي اختلال حسابي والتأكد من توازن قيودنا قبل النتائج النهائية', textEN: 'To fix any mathematical skew and ensure total balance before final results', isCorrect: true },
                { id: 'o3', text: 'لأن الأرقام تكون صغيرة', textEN: 'Because numbers are small', isCorrect: false },
                { id: 'o4', text: 'لصرف الرواتب', textEN: 'To pay salaries', isCorrect: false }
              ],
              explanation: 'الميزان هو الفلتر الأخير الذي يمنع مرور الأخطاء الحسابية للقوائم المالية الرسمية.',
              explanationEN: 'The trial balance is the final filter preventing mechanical errors from reaching formal statements.'
            },
            {
              id: 'q6_2',
              question: 'أي نوع من الأخطاء لا يستطيع ميزان المراجعة اكتشافه؟',
              questionEN: 'Which type of error can a trial balance NOT detect?',
              options: [
                { id: 'o1', text: 'خطأ في جمع أرقام المدين', textEN: 'Error in summing Debit numbers', isCorrect: false },
                { id: 'o2', text: 'نسيان تسجيل فاتورة مبيعات بالكامل (مديناً ودائناً)', textEN: 'Forgetting to record an entire sales invoice (both debit and credit)', isCorrect: true },
                { id: 'o3', text: 'نقل رصيد للأستاذ بشكل خاطئ', textEN: 'Wrongly transferring a balance to the ledger', isCorrect: false },
                { id: 'o4', text: 'خطأ في طرح الالتزامات', textEN: 'Error in subtracting liabilities', isCorrect: false }
              ],
              explanation: 'إذا سقطت عملية كاملة بطرفيها، سيبقى الميزان متوازناً حسابياً، ولكن الدفاتر ستكون ناقصة (خطأ سهو).',
              explanationEN: 'If an entire transaction is omitted on both sides, the balance remains mathematically correct but incomplete (omission error).'
            },
            {
              id: 'q6_3',
              question: 'إجمالي مدين ميزان المراجعة 1,000,000 دج، وإجمالي الدائن 990,000 دج. ماذا تفعل؟',
              questionEN: 'Total Debit is 1,000,000 DZD and total Credit is 990,000 DZD. What do you do?',
              options: [
                { id: 'o1', text: 'أضيف 10,000 دج لأي حساب ليصبحا متساويين', textEN: 'Add 10,000 DZD to any account to match them', isCorrect: false },
                { id: 'o2', text: 'أبحث عن الخطأ في الترحيل أو الترصيد فوراً، ولا أكمل العمل حتى أكتشف الفرق', textEN: 'Search for the posting or balancing error immediately, and don\'t proceed until found', isCorrect: true },
                { id: 'o3', text: 'أتجاهل الأمر وأنام', textEN: 'Ignore it and sleep', isCorrect: false },
                { id: 'o4', text: 'أطلب مساعدة الشرطة', textEN: 'Call the police for help', isCorrect: false }
              ],
              explanation: 'الفرق 10,000 دج قد يكون فاتورة لم تُرحل للدائن؛ البحث عن "القرش" هو سمة المحاسبة الناجح.',
              explanationEN: 'A 10,000 DZD gap could be an unposted credit invoice; searching for the "penny" is the mark of a successful accountant.'
            }
          ],
          xpReward: 60
        },
        {
          id: 'les_7',
          title: 'الأصناف المحاسبية في النظام الجزائري (SCF)',
          titleEN: 'Accounting Classes in the Algerian System (SCF)',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'رسم توضيحي للأصناف السبعة للمحاسبة الجزائرية (من 1 إلى 7) مع شرح مبسط لكل صنف.',
          duration: '06:00',
          summary: [
            'النظام المحاسبي المالي الجزائري (SCF) يقسم الحسابات إلى أصناف مرقمة.',
            'الأصناف من 1 إلى 5 هي حسابات الميزانية (أصول، خصوم، رؤوس أموال).',
            'الصنف 6 يمثل "الأعباء" (المصاريف) والصنف 7 يمثل "النواتج" (الإيرادات).',
            'هذا الترقيم الموحد يسهل العمل على برامج المحاسبة والتواصل بين المحاسبين.',
            'كل حساب يبدأ برقم الصنف التابع له (مثال: حسابات البنك تبدأ بـ 5).',
            'فهم الأصناف هو المفتاح لقراءة "مخطط الحسابات الوطني" وتوجيه القيود.'
          ],
          summaryEN: [
            'The Algerian Financial Accounting System (SCF) divides accounts into numbered classes.',
            'Classes 1 to 5 are balance sheet accounts (assets, liabilities, capital).',
            'Class 6 represents "Charges" (expenses) and Class 7 represents "Products" (revenue).',
            'This standardized numbering simplifies accounting software use and communication.',
            'Every account starts with its class number (e.g., bank accounts start with 5).',
            'Understanding classes is key to reading the "National Chart of Accounts" and directing entries.'
          ],
          task: {
            title: 'البحث في مخطط الحسابات',
            titleEN: 'Searching the Chart of Accounts',
            description: 'ابحث عن أرقام الحسابات التالية في النظام الجزائري: حساب "الصندوق"، حساب "الموردون"، وحساب "مبيعات بضائع". حدد صنف كل منها.',
            descriptionEN: 'Find the account numbers for: "Cash", "Suppliers", and "Sales of Goods" in the Algerian system. Identify their classes.'
          },
          quiz: [
            {
              id: 'q9_1',
              question: 'لماذا لا نقوم بإهلاك "الأراضي" (Terrains) في المحاسبة؟',
              questionEN: 'Why don\'t we depreciate "Land" in accounting?',
              options: [
                { id: 'o1', text: 'لأنها أصول رخيصة', textEN: 'Because they are cheap assets', isCorrect: false },
                { id: 'o2', text: 'لأن الأرض لا تفنى ولا تفقد قيمتها بالاستعمال؛ بل غالباً ما تزيد قيمتها مع الوقت', textEN: 'Because land isn\'t consumed and doesn\'t lose value with use; it often gains value over time', isCorrect: true }
              ],
              explanation: 'الأرض أصل غير قابل للإهلاك محاسبياً في النظام الجزائري.',
              explanationEN: 'Land is a non-depreciable asset in the Algerian accounting system.',
            }
          ],
          xpReward: 50
        },
        {
          id: 'les_11',
          title: 'الميزانية الختامية: الصورة النهائية للأصول',
          titleEN: 'Final Balance Sheet: Comprehensive Mirror',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'],
          duration: '06:00',
          summary: [
            'الميزانية الختامية هي المرآة التي تعكس كل ما تملكه وما تدين به المؤسسة.',
            'تُرتب الأصول حسب درجة سيولتها (من الأصعب تسييلاً كالعقار إلى الأسهل كالنقد).',
            'الخصوم تُرتب حسب تاريخ استحقاقها (ديون طويلة الأجل ثم قصيرة الأجل).',
            'التوازن في الميزانية ليس صدفة، بل نتيجة دقة نظام القيد المزدوج المطبق طوال السنة.',
            'تعتبر الميزانية الوثيقة الأساسية التي يطلبها البنك لمنح القروض الاستثمارية.',
            'في الجزائر، تُقدم الميزانية ضمن "الحزمة الجبائية" (Liasse Fiscale) للمصالح المعنية.'
          ],
          summaryEN: [
            'The final balance sheet is the mirror reflecting everything the entity owns and owes.',
            'Assets are ordered by liquidity (from hardest like property to easiest like cash).',
            'Liabilities are ordered by maturity (long-term then short-term debts).',
            'Balance is no coincidence; it results from accurate double-entry throughout the year.',
            'The balance sheet is the primary doc banks request for investment loans.',
            'In Algeria, it\'s submitted within the "Tax Package" (Liasse Fiscale) to authorities.'
          ],
          task: {
            title: 'قراءة ميزانية مبسطة',
            titleEN: 'Reading a Simplified Balance Sheet',
            description: 'ارسم جدولاً من عمودين. في اليمين سجل: شاحنة (200مليون)، نقود (50مليون). في اليسار سجل: قرض (100مليون)، رأس مال (150مليون). هل هي متوازنة؟',
            descriptionEN: 'Draw a 2-column table. Right: Truck (200m), Cash (50m). Left: Loan (100m), Capital (150m). Is it balanced?'
          },
          quiz: [
            {
              id: 'q11_1',
              question: 'ماذا يمثل "رأس المال" في الميزانية العمومية؟',
              questionEN: 'What does "Capital" represent in the balance sheet?',
              options: [
                { id: 'o1', text: 'المال المخزن في الخزنة الحديدية فقط', textEN: 'Only money stored in the safe', isCorrect: false },
                { id: 'o2', text: 'قيمة استثمار الملاك الصافية في المؤسسة (حقوقهم)', textEN: 'The owners\' net investment value in the entity (their equity)', isCorrect: true },
                { id: 'o3', text: 'ديون الشركة للبنك', textEN: 'Company debts to the bank', isCorrect: false },
                { id: 'o4', text: 'رواتب العمال', textEN: 'Worker salaries', isCorrect: false }
              ],
              explanation: 'رأس المال هو التزام المؤسسة تجاه أصحابها؛ أي ما سيأخذونه إذا صفينا الشركة اليوم.',
              explanationEN: 'Capital is the entity\'s obligation to its owners; what they\'d get if liquidated today.'
            },
            {
              id: 'q11_2',
              question: 'أي من العناصر التالية يُعتبر "أصلاً متداولاً" (Actif Circulant)؟',
              questionEN: 'Which of the following is considered a "Current Asset"?',
              options: [
                { id: 'o1', text: 'بناية المصنع', textEN: 'Factory building', isCorrect: false },
                { id: 'o2', text: 'مبالغ مالية في البنك والصندوق', textEN: 'Cash in bank and box', isCorrect: true },
                { id: 'o3', text: 'قرض لمدة 10 سنوات', textEN: 'A 10-year loan', isCorrect: false },
                { id: 'o4', text: 'اسم الشركة', textEN: 'Company name', isCorrect: false }
              ],
              explanation: 'الأصول المتداولة هي التي يمكن تحويلها لنقد في أقل من سنة، والبنك هو السيولة نفسها.',
              explanationEN: 'Current assets can be converted to cash in under a year; bank is liquidity itself.'
            },
            {
              id: 'q11_3',
              question: 'لماذا نهتم بترتيب الأصول من "الأقل سيولة" إلى "الأكثر سيولة"؟',
              questionEN: 'Why order assets from "least liquid" to "most liquid"?',
              options: [
                { id: 'o1', text: 'لتسهيل قراءة الموقف المالي للمحللين ومعرفة قدرة الشركة على مواجهة الطوارئ', textEN: 'To help analysts read financial position and know company emergency capacity', isCorrect: true },
                { id: 'o2', text: 'لأن القانون يحب الترتيب الأبجدي', textEN: 'Because the law likes alphabetical order', isCorrect: false },
                { id: 'o3', text: 'لا يوجد سبب محدد', textEN: 'No specific reason', isCorrect: false },
                { id: 'o4', text: 'لإخفاء الديون', textEN: 'To hide debts', isCorrect: false }
              ],
              explanation: 'التنظيم المحاسبي يهدف لتوفير معلومة مفيدة وسريعة للقارئ حول متانة الشركة.',
              explanationEN: 'Accounting organization aims to provide useful, fast info to the reader about company strength.'
            }
          ],
          xpReward: 60
        },
        {
          id: 'les_12',
          title: 'المؤونات والتسويات المتقدمة',
          titleEN: 'Provisions and Advanced Adjustments',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'رسم توضيحي يظهر توقع خسارة قادمة (مثل زبون مشكوك في سداده) وكيف يتم حجز "مؤونة" لها.',
          duration: '06:20',
          summary: [
            'المؤونة (Provision) هي تخصيص مبالغ لمواجهة أعباء أو خسائر محتملة الوقوع مستقبلاً.',
            'نطبق "مبدأ الحيطة والحذر": نسجل الخسارة المتوقعة فوراً ولا نسجل الربح إلا بعد تحققه.',
            'المؤونات تحمي المؤسسة من الهزات المالية المفاجئة (مثل إفلاس زبون كبير).',
            'يتم تقييم المخاطر في نهاية كل سنة وتعديل المؤونات (زيادة، نقص، أو إلغاء).',
            'المصاريف المقبوضة أو المدفوعة مسبقاً تُسوى لتطابق مبدأ "استقلالية الدورات".',
            'المحاسبة المتقدمة تتطلب حساً تقديرياً جيداً لمخاطر السوق.'
          ],
          summaryEN: [
            'A provision is setting aside funds for likely future expenses or losses.',
            'We apply the "Prudence Principle": record expected losses now, but profits only when realized.',
            'Provisions protect the entity from sudden financial shocks (like a major customer bankruptcy).',
            'Risks are reassessed each year-end to adjust provisions (increase, decrease, or cancel).',
            'Prepaid and unearned items are adjusted to strictly follow "Period Independence".',
            'Advanced accounting requires a good estimation sense of market risks.'
          ],
          task: {
            title: 'تقييم زبون مشكوك فيه',
            titleEN: 'Assessing a Doubtful Customer',
            description: 'لدى المؤسسة زبون يدين بـ 100,000 دج. وصل خبر أنه معرض للإفلاس. قررت المؤسسة تكوين مؤونة بـ 50% من الدين. احسب قيمة المؤونة.',
            descriptionEN: 'A customer owes 100k DZD. News came they might go bankrupt. The entity decides to set a 50% provision. Calculate it.'
          },
          quiz: [
            {
              id: 'q12_1',
              question: 'ما هو "مبدأ الحيطة والحذر" (Principe de Prudence)؟',
              questionEN: 'What is the "Prudence Principle"?',
              options: [
                { id: 'o1', text: 'أن نكون خائفين دائماً', textEN: 'To be always afraid', isCorrect: false },
                { id: 'o2', text: 'تسجيل الخسائر المتوقعة فوراً والأرباح عند تحققها فقط', textEN: 'Recording expected losses immediately and profits only when realized', isCorrect: true },
                { id: 'o3', text: 'تغيير أرقام الميزانية', textEN: 'Changing balance sheet numbers', isCorrect: false },
                { id: 'o4', text: 'زيادة ثمن البضاعة', textEN: 'Increasing goods price', isCorrect: false }
              ],
              explanation: 'هذا المبدأ يمنع المؤسسة من توزيع أرباح "وهمية" لم تتحقق فعلياً.',
              explanationEN: 'This principle prevents the entity from distributing "phantom" profits not actually realized.'
            },
            {
              id: 'q12_2',
              question: 'زبون كان مشكوكاً فيه وسدد دينه بالكامل لاحقاً. ماذا تفعل بالمؤونة التي كوناها؟',
              questionEN: 'A doubtful customer later paid in full. What do you do with the provision created?',
              options: [
                { id: 'o1', text: 'نتركها كما هي', textEN: 'Leave it as it is', isCorrect: false },
                { id: 'o2', text: 'نقوم بعملية "استرجاع" (Reprise) للمؤونة لأن الخطر زال', textEN: 'Perform a "Recovery" of the provision since the risk is gone', isCorrect: true },
                { id: 'o3', text: 'نصرفها كمكافآت', textEN: 'Spend it as bonuses', isCorrect: false },
                { id: 'o4', text: 'نحذف الحساب نهائياً', textEN: 'Delete the account entirely', isCorrect: false }
              ],
              explanation: 'عند زوال الخطر، تعود الأموال "المحجوزة" لتغذية أرباح السنة الحالية.',
              explanationEN: 'When risk vanishes, "held" funds return to fuel the current year\'s profits.'
            },
            {
              id: 'q12_3',
              question: 'أين تظهر المؤونات في القوائم المالية؟',
              questionEN: 'Where do provisions appear in financial statements?',
              options: [
                { id: 'o1', text: 'كخسائر في جدول النتائج وكخصوم أو تخفيض للأصول في الميزانية', textEN: 'As losses in the Income Statement and liabilities or asset reductions in Balance Sheet', isCorrect: true },
                { id: 'o2', text: 'في دفتر اليومية فقط', textEN: 'In the journal only', isCorrect: false },
                { id: 'o3', text: 'في رسالة المدير', textEN: 'In the manager\'s letter', isCorrect: false },
                { id: 'o4', text: 'لا تظهر أبداً', textEN: 'They never appear', isCorrect: false }
              ],
              explanation: 'المؤونة عبء على السنة (TCR) ولكنها أيضاً تصحح قيمة الأصول في الميزانية.',
              explanationEN: 'A provision is a year expense (TCR) but also adjusts asset values in the balance sheet.'
            }
          ],
          xpReward: 60
        }
      ]
    },
    {
      id: 'lvl_4',
      title: 'المرحلة الرابعة: مراجعة الميزانية والختام',
      titleEN: 'Stage 4: Balance Sheet Review',
      description: 'نظرة ختامية على الميزانية.',
      descriptionEN: 'A final look at the balance sheet.',
      lessons: [
        {
          id: 'les_11_audit',
          title: 'الصورة الفوتوغرافية للميزانية',
          titleEN: 'Balance Sheet Snapshot',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'],
          duration: '05:00',
          summary: [
            'الميزانية فوتوغرافية ثابتة لرصيد الشركة في نهاية يوم 31 ديسمبر.'
          ],
          xpReward: 60
        }
      ]
    },
    {
      id: 'lvl_extra',
      title: 'المزيد من الدروس',
      titleEN: 'More Lessons',
      description: 'دروس إضافية.',
      descriptionEN: 'Extra lessons.',
      lessons: [
        {
          id: 'les_11',
          title: 'الميزانية الختامية: الصورة النهائية للأصول',
          titleEN: 'Final Balance Sheet: Ultimate Asset Picture',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'توضيح لميزانية ختامية متوازنة تعرض الأصول في جهة والخصوم في جهة أخرى بشكل احترافي.',
          duration: '06:45',
          summary: [
            'الميزانية الختامية هي المرآة التي تعكس كل ما تملكه وما تدين به المؤسسة.',
            'تُرتب الأصول حسب درجة سيولتها (من الأصعب تسييلاً كالعقار إلى الأسهل كالنقد).',
            'الخصوم تُرتب حسب تاريخ استحقاقها (ديون طويلة الأجل ثم قصيرة الأجل).',
            'التوازن في الميزانية ليس صدفة، بل نتيجة دقة نظام القيد المزدوج المطبق طوال السنة.',
            'تعتبر الميزانية الوثيقة الأساسية التي يطلبها البنك لمنح القروض الاستثمارية.',
            'في الجزائر، تُقدم الميزانية ضمن "الحزمة الجبائية" (Liasse Fiscale) للمصالح المعنية.'
          ],
          summaryEN: [
            'The final balance sheet is the mirror reflecting everything the entity owns and owes.',
            'Assets are ordered by liquidity (from hardest like property to easiest like cash).',
            'Liabilities are ordered by maturity (long-term then short-term debts).',
            'Balance is no coincidence; it results from accurate double-entry throughout the year.',
            'The balance sheet is the primary doc banks request for investment loans.',
            'In Algeria, it\'s submitted within the "Tax Package" (Liasse Fiscale) to authorities.'
          ],
          task: {
            title: 'قراءة ميزانية مبسطة',
            titleEN: 'Reading a Simplified Balance Sheet',
            description: 'ارسم جدولاً من عمودين. في اليمين سجل: شاحنة (200مليون)، نقود (50مليون). في اليسار سجل: قرض (100مليون)، رأس مال (150مليون). هل هي متوازنة؟',
            descriptionEN: 'Draw a 2-column table. Right: Truck (200m), Cash (50m). Left: Loan (100m), Capital (150m). Is it balanced?'
          },
          quiz: [
            {
              id: 'q11_1',
              question: 'ماذا يمثل "رأس المال" في الميزانية العمومية؟',
              questionEN: 'What does "Capital" represent in the balance sheet?',
              options: [
                { id: 'o1', text: 'المال المخزن في الخزنة الحديدية فقط', textEN: 'Only money stored in the safe', isCorrect: false },
                { id: 'o2', text: 'قيمة استثمار الملاك الصافية في المؤسسة (حقوقهم)', textEN: 'The owners\' net investment value in the entity (their equity)', isCorrect: true },
                { id: 'o3', text: 'ديون الشركة للبنك', textEN: 'Company debts to the bank', isCorrect: false },
                { id: 'o4', text: 'رواتب العمال', textEN: 'Worker salaries', isCorrect: false }
              ],
              explanation: 'رأس المال هو التزام المؤسسة تجاه أصحابها؛ أي ما سيأخذونه إذا صفينا الشركة اليوم.',
              explanationEN: 'Capital is the entity\'s obligation to its owners; what they\'d get if liquidated today.'
            },
            {
              id: 'q11_2',
              question: 'أي من العناصر التالية يُعتبر "أصلاً متداولاً" (Actif Circulant)؟',
              questionEN: 'Which of the following is considered a "Current Asset"?',
              options: [
                { id: 'o1', text: 'بناية المصنع', textEN: 'Factory building', isCorrect: false },
                { id: 'o2', text: 'مبالغ مالية في البنك والصندوق', textEN: 'Cash in bank and box', isCorrect: true },
                { id: 'o3', text: 'قرض لمدة 10 سنوات', textEN: 'A 10-year loan', isCorrect: false },
                { id: 'o4', text: 'اسم الشركة', textEN: 'Company name', isCorrect: false }
              ],
              explanation: 'الأصول المتداولة هي التي يمكن تحويلها لنقد في أقل من سنة، والبنك هو السيولة نفسها.',
              explanationEN: 'Current assets can be converted to cash in under a year; bank is liquidity itself.'
            },
            {
              id: 'q11_3',
              question: 'لماذا نهتم بترتيب الأصول من "الأقل سيولة" إلى "الأكثر سيولة"؟',
              questionEN: 'Why order assets from "least liquid" to "most liquid"?',
              options: [
                { id: 'o1', text: 'لتسهيل قراءة الموقف المالي للمحللين ومعرفة قدرة الشركة على مواجهة الطوارئ', textEN: 'To help analysts read financial position and know company emergency capacity', isCorrect: true },
                { id: 'o2', text: 'لأن القانون يحب الترتيب الأبجدي', textEN: 'Because the law likes alphabetical order', isCorrect: false },
                { id: 'o3', text: 'لا يوجد سبب محدد', textEN: 'No specific reason', isCorrect: false },
                { id: 'o4', text: 'لإخفاء الديون', textEN: 'To hide debts', isCorrect: false }
              ],
              explanation: 'التنظيم المحاسبي يهدف لتوفير معلومة مفيدة وسريعة للقارئ حول متانة الشركة.',
              explanationEN: 'Accounting organization aims to provide useful, fast info to the reader about company strength.'
            }
          ],
          xpReward: 60
        },
        {
          id: 'les_12',
          title: 'المؤونات والتسويات المتقدمة',
          titleEN: 'Provisions and Advanced Adjustments',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'رسم توضيحي يظهر توقع خسارة قادمة (مثل زبون مشكوك في سداده) وكيف يتم حجز "مؤونة" لها.',
          duration: '06:20',
          summary: [
            'المؤونة (Provision) هي تخصيص مبالغ لمواجهة أعباء أو خسائر محتملة الوقوع مستقبلاً.',
            'نطبق "مبدأ الحيطة والحذر": نسجل الخسارة المتوقعة فوراً ولا نسجل الربح إلا بعد تحققه.',
            'المؤونات تحمي المؤسسة من الهزات المالية المفاجئة (مثل إفلاس زبون كبير).',
            'يتم تقييم المخاطر في نهاية كل سنة وتعديل المؤونات (زيادة، نقص، أو إلغاء).',
            'المصاريف المقبوضة أو المدفوعة مسبقاً تُسوى لتطابق مبدأ "استقلالية الدورات".',
            'المحاسبة المتقدمة تتطلب حساً تقديرياً جيداً لمخاطر السوق.'
          ],
          summaryEN: [
            'A provision is setting aside funds for likely future expenses or losses.',
            'We apply the "Prudence Principle": record expected losses now, but profits only when realized.',
            'Provisions protect the entity from sudden financial shocks (like a major customer bankruptcy).',
            'Risks are reassessed each year-end to adjust provisions (increase, decrease, or cancel).',
            'Prepaid and unearned items are adjusted to strictly follow "Period Independence".',
            'Advanced accounting requires a good estimation sense of market risks.'
          ],
          task: {
            title: 'تقييم زبون مشكوك فيه',
            titleEN: 'Assessing a Doubtful Customer',
            description: 'لدى المؤسسة زبون يدين بـ 100,000 دج. وصل خبر أنه معرض للإفلاس. قررت المؤسسة تكوين مؤونة بـ 50% من الدين. احسب قيمة المؤونة.',
            descriptionEN: 'A customer owes 100k DZD. News came they might go bankrupt. The entity decides to set a 50% provision. Calculate it.'
          },
          quiz: [
            {
              id: 'q12_1',
              question: 'ما هو "مبدأ الحيطة والحذر" (Principe de Prudence)؟',
              questionEN: 'What is the "Prudence Principle"?',
              options: [
                { id: 'o1', text: 'أن نكون خائفين دائماً', textEN: 'To be always afraid', isCorrect: false },
                { id: 'o2', text: 'تسجيل الخسائر المتوقعة فوراً والأرباح عند تحققها فقط', textEN: 'Recording expected losses immediately and profits only when realized', isCorrect: true },
                { id: 'o3', text: 'تغيير أرقام الميزانية', textEN: 'Changing balance sheet numbers', isCorrect: false },
                { id: 'o4', text: 'زيادة ثمن البضاعة', textEN: 'Increasing goods price', isCorrect: false }
              ],
              explanation: 'هذا المبدأ يمنع المؤسسة من توزيع أرباح "وهمية" لم تتحقق فعلياً.',
              explanationEN: 'This principle prevents the entity from distributing "phantom" profits not actually realized.'
            },
            {
              id: 'q12_2',
              question: 'زبون كان مشكوكاً فيه وسدد دينه بالكامل لاحقاً. ماذا نفعل بالمؤونة التي كوناها؟',
              questionEN: 'A doubtful customer later paid in full. What do you do with the provision created?',
              options: [
                { id: 'o1', text: 'نتركها كما هي', textEN: 'Leave it as it is', isCorrect: false },
                { id: 'o2', text: 'نقوم بعملية "استرجاع" (Reprise) للمؤونة لأن الخطر زال', textEN: 'Perform a "Recovery" of the provision since the risk is gone', isCorrect: true },
                { id: 'o3', text: 'نصرفها كمكافآت', textEN: 'Spend it as bonuses', isCorrect: false },
                { id: 'o4', text: 'نحذف الحساب نهائياً', textEN: 'Delete the account entirely', isCorrect: false }
              ],
              explanation: 'عند زوال الخطر، تعود الأموال "المحجوزة" لتغذية أرباح السنة الحالية.',
              explanationEN: 'When risk vanishes, "held" funds return to fuel the current year\'s profits.'
            },
            {
              id: 'q12_3',
              question: 'أين تظهر المؤونات في القوائم المالية؟',
              questionEN: 'Where do provisions appear in financial statements?',
              options: [
                { id: 'o1', text: 'كخسائر في جدول النتائج وكخصوم أو تخفيض للأصول في الميزانية', textEN: 'As losses in the Income Statement and liabilities or asset reductions in Balance Sheet', isCorrect: true },
                { id: 'o2', text: 'في دفتر اليومية فقط', textEN: 'In the journal only', isCorrect: false },
                { id: 'o3', text: 'في رسالة المدير', textEN: 'In the manager\'s letter', isCorrect: false },
                { id: 'o4', text: 'لا تظهر أبداً', textEN: 'They never appear', isCorrect: false }
              ],
              explanation: 'المؤونة عبء على السنة (TCR) ولكنها أيضاً تصحح قيمة الأصول في الميزانية.',
              explanationEN: 'A provision is a year expense (TCR) but also adjusts asset values in the balance sheet.'
            }
          ],
          xpReward: 60
        }
      ]
    },
    {
      id: 'lvl_4',
      title: 'المرحلة الرابعة: البرامج المحاسبية والجباية',
      titleEN: 'Stage 4: Accounting Software & Taxation',
      description: 'استخدام Excel، البرامج المتخصصة (Sage/Odoo)، والجباية الجزائرية (TVA/G50).',
      descriptionEN: 'Using Excel, Specialized Apps (Sage/Odoo), and Algerian Tax (TVA/G50).',
      lessons: [
        {
          id: 'les_13',
          title: 'الـ Excel المحاسبي والجداول المحورية',
          titleEN: 'Accounting Excel and Pivot Tables',
          visualType: 'animation',
          visualUrls: ['https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'شاشة Excel مع جداول محورية (Pivot Tables)، رسوم بيانية مالية، دوال VLOOKUP و SUMIF. مؤشر يضغط على خلية وتظهر دالة.',
          duration: '08:00',
          summary: [
            'الـ Excel هو الأداة رقم 1 للمحاسب للتحليل والتدقيق المستقل.',
            'الجداول المحورية (Pivot Tables) تتيح تلخيص آلاف العمليات في ثوان.',
            'نستخدم دالة (SUMIF) لجمع مبالغ حساب معين من وسط مئات القيود.',
            'دالة البحث (XLOOKUP) تساعد في ربط أرقام الحسابات بأسمائها آلياً.',
            'بناء "ميزان مراجعة" على Excel هو أول خطوة لاحتراف المحاسبة الرقمية.',
            'حماية الملفات وتأمين البيانات السرية مسؤولية تقنية للمحاسب.'
          ],
          summaryEN: [
            'Excel is the #1 tool for accountants for independent analysis and auditing.',
            'Pivot Tables allow summarizing thousands of transactions in seconds.',
            'We use (SUMIF) to sum specific account amounts from hundreds of entries.',
            'Search function (XLOOKUP) helps link account numbers to names automatically.',
            'Building a "Trial Balance" in Excel is the first step to mastering digital accounting.',
            'Protecting files and securing confidential data is a technical responsibility.'
          ],
          task: {
            title: 'بناء جدول مصاريف ذكي',
            titleEN: 'Building a Smart Expense Table',
            description: 'افتح Excel. سجل 10 عمليات (كهرباء، هاتف، شراء بضائع). استخدم دالة SUMIF لحساب إجمالي "مصاريف الكهرباء" فقط من القائمة.',
            descriptionEN: 'Open Excel. Record 10 transactions. Use SUMIF function to calculate total "Electricity Expenses" only from the list.'
          },
          quiz: [
            {
              id: 'q13_1',
              question: 'ما هي الفائدة الرئيسية للجداول المحورية (Pivot Tables) للمحاسب؟',
              questionEN: 'What is the main benefit of Pivot Tables for an accountant?',
              options: [
                { id: 'o1', text: 'تغيير ألوان الخطوط', textEN: 'Changing font colors', isCorrect: false },
                { id: 'o2', text: 'تلخيص وتصنيف كميات كبيرة من البيانات واستخراج النتائج فوراً', textEN: 'Summarizing and classifying deep data to extract results instantly', isCorrect: true },
                { id: 'o3', text: 'كتابة الرسائل', textEN: 'Writing letters', isCorrect: false },
                { id: 'o4', text: 'تصفح الإنترنت', textEN: 'Browsing the web', isCorrect: false }
              ],
              explanation: 'Pivot Tables تختصر ساعات من العمل اليدوي في تصنيف الحسابات.',
              explanationEN: 'Pivot Tables save hours of manual account classification work.'
            },
            {
              id: 'q13_2',
              question: 'إذا أردت حماية ميزانية شركتك من التعديل من قبل الآخرين في Excel، ماذا تفعل؟',
              questionEN: 'If you want to protect your budget from being edited by others in Excel, what do you do?',
              options: [
                { id: 'o1', text: 'أخفي الملف', textEN: 'Hide the file', isCorrect: false },
                { id: 'o2', text: 'أستخدم خاصية "حماية الورقة" (Protect Sheet) بكلمة مرور', textEN: 'Use "Protect Sheet" feature with a password', isCorrect: true },
                { id: 'o3', text: 'أمسح الأرقام', textEN: 'Erase the numbers', isCorrect: false },
                { id: 'o4', text: 'أطلب منهم عدم اللمس', textEN: 'Ask them not to touch', isCorrect: false }
              ],
              explanation: 'تأمين البيانات المحاسبية جزء لا يتجزأ من الأمانة المهنية.',
              explanationEN: 'Securing accounting data is an integral part of professional integrity.'
            },
            {
              id: 'q13_3',
              question: 'عندما يظهر خطأ #VALUE! في دالة Excel، ماذا يعني غالباً للمحاسب؟',
              questionEN: 'When #VALUE! error appears in Excel, what does it usually mean?',
              options: [
                { id: 'o1', text: 'أن الحاسوب تعطل', textEN: 'The computer broke', isCorrect: false },
                { id: 'o2', text: 'وجود تعارض في أنواع البيانات (مثل محاولة جمع رقم مع نص)', textEN: 'Data type mismatch (like trying to sum number with text)', isCorrect: true },
                { id: 'o3', text: 'أنك لم تدفع ثمن البرنامج', textEN: 'You didn\'t pay for the app', isCorrect: false },
                { id: 'o4', text: 'أن الميزانية خاسرة', textEN: 'The budget is losing', isCorrect: false }
              ],
              explanation: 'الدقة في إدخال البيانات هي الركيزة؛ Excel لا يجمع "الدنانير" إذا كانت مكتوبة كنص.',
              explanationEN: 'Data entry accuracy is key; Excel won\'t sum "Dinars" if written as text.'
            }
          ],
          xpReward: 60
        },
        {
          id: 'les_14',
          title: 'البرمجيات المحاسبية والـ ERP (Odoo, SAP)',
          titleEN: 'Accounting Software and ERP (Odoo, SAP)',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'شاشة تظهر واجهة برنامج محاسبي حديث مثل Odoo مع لوحة تحكم ذكية للأرباح والديون.',
          duration: '06:00',
          summary: [
            'البرامج المحاسبية (Software) تقوم بأتمتة الترحيل من اليومية للأستاذ للميزانية.',
            'أنظمة الـ ERP تربط المحاسبة بالمخازن والمبيعات والموارد البشرية في نظام واحد.',
            'البرمجيات السحابية (Cloud) تتيح للمحاسب العمل من أي مكان وبأمان عالي.',
            'في الجزائر، يُستخدم PC Compta بكثرة، بينما Odoo يكتسح الشركات الناشئة.',
            'دور المحاسب انتقل من "مدخل بيانات" إلى "مدقق ومحلل للنظام".',
            'النسخ الاحتياطي (Backup) هو أهم إجراء أمني لحماية تاريخ الشركة المالي.'
          ],
          summaryEN: [
            'Accounting software automates posting from journal to ledger to balance sheet.',
            'ERP systems link accounting to warehouse, sales, and HR in one system.',
            'Cloud software allows accountants to work from anywhere with high security.',
            'In Algeria, PC Compta is widely used, while Odoo is taking over startups.',
            'Accountant role shifted from "data entry" to "system auditor and analyst".',
            'Backup is the most critical security measure to protect financial history.'
          ],
          task: {
            title: 'استخدام نسخة تجريبية',
            titleEN: 'Using a Trial Version',
            description: 'ادخل على موقع Odoo وجرب نسخة تجريبية لبرنامج المحاسبة. حاول إدخال فاتورة بيع بسيطة وشاهد كيف تتأثر التقارير آلياً.',
            descriptionEN: 'Go to Odoo website and try a demo accounting app. Try entering a simple sales invoice and see report changes.'
          },
          quiz: [
            {
              id: 'q14_1',
              question: 'ما هو الفرق الجوهري بين ERP (مثل Odoo) وبرنامج محاسبة بسيط؟',
              questionEN: 'What is the core difference between an ERP and a simple accounting app?',
              options: [
                { id: 'o1', text: 'لا يوجد فرق', textEN: 'No difference', isCorrect: false },
                { id: 'o2', text: 'الـ ERP يربط كل أقسام الشركة (مخازن، مبيعات...) بالمحاسبة في قاعدة بيانات واحدة', textEN: 'ERP links all company departments (warehouse, sales...) into one database', isCorrect: true },
                { id: 'o3', text: 'برنامج المحاسبة أسرع', textEN: 'Accounting app is faster', isCorrect: false },
                { id: 'o4', text: 'الـ ERP للرسائل فقط', textEN: 'ERP is for messages only', isCorrect: false }
              ],
              explanation: 'الـ ERP يمنع تكرار البيانات؛ فبيع سلعة في المتجر يُسجل محاسبياً ويُنقصها من المخزن فوراً.',
              explanationEN: 'ERP prevents data duplication; selling an item logs it in accounting and reduces stock instantly.'
            },
            {
              id: 'q14_2',
              question: 'بصفتك محاسب، لماذا تهتم بعمل نسخة احتياطية (Backup) يومية؟',
              questionEN: 'As an accountant, why care about daily backups?',
              options: [
                { id: 'o1', text: 'لأن القرص الصلب قد يتعطل أو تتعرض البيانات للتشفير بالفيروسات', textEN: 'Hard drive might fail or data might be encrypted by viruses', isCorrect: true },
                { id: 'o2', text: 'لإضاعة الوقت', textEN: 'To waste time', isCorrect: false },
                { id: 'o3', text: 'لأن الدولة تحب النسخ', textEN: 'Because the state likes copies', isCorrect: false },
                { id: 'o4', text: 'لبيعها للمنافسين', textEN: 'To sell them to competitors', isCorrect: false }
              ],
              explanation: 'ضياع البيانات المالية هو كارثة قانونية ومالية للمؤسسة.',
              explanationEN: 'Losing financial data is a legal and financial disaster for the entity.'
            },
            {
              id: 'q14_3',
              question: 'هل يمكن للبرنامج المحاسبي أن يعطيك "ميزانية" في منتصف السنة؟',
              questionEN: 'Can accounting software give you a "Balance Sheet" mid-year?',
              options: [
                { id: 'o1', text: 'نعم، في أي لحظة تضغط فيها على زر التقرير (الميزانية اللحظية)', textEN: 'Yes, at any moment you click the report button (Instant Balance Sheet)', isCorrect: true },
                { id: 'o2', text: 'لا، فقط في 31 ديسمبر', textEN: 'No, only on Dec 31st', isCorrect: false },
                { id: 'o3', text: 'فقط إذا كان الحاسوب متصلاً بالكهرباء', textEN: 'Only if computer is plugged in', isCorrect: false },
                { id: 'o4', text: 'نعم، ولكن بموافقة الوزارة', textEN: 'Yes, but with ministry approval', isCorrect: false }
              ],
              explanation: 'هذه هي قوة الرقمنة؛ يمكنك مراجعة موقفك المالي يومياً.',
              explanationEN: 'This is the power of digitalization; you can review your position daily.'
            }
          ],
          xpReward: 50
        },
        {
          id: 'les_15',
          title: 'النظام الضريبي الجزائري والتصاريح (G50)',
          titleEN: 'Algerian Tax System and Declarations (G50)',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'شعار المديرية العامة للضرائب. جدول يوضح نسب TVA (19%، 9%)، شريحة IRG. محاسب يملأ إقراراً ضريبياً (G50).',
          duration: '07:30',
          summary: [
            'الرسم على القيمة المضافة (TVA): 19% عادي و 9% للمنتجات الأساسية.',
            'الضريبة على أرباح الشركات (IBS): تختلف حسب النشاط (من 19% إلى 26%).',
            'الضريبة على الدخل الإجمالي (IRG): يقتطعها صاحب العمل من أجر العامل ويوردها للدولة.',
            'تصريح G50 المحوري: وثيقة شهرية تلخص الضرائب والرسوم المستحقة.',
            'يجب إيداع G50 قبل الـ 20 من كل شهر (أو الـ 15 حسب مديرية الضرائب).',
            'المحاسب هو المحامي المالي للمؤسسة؛ التزامه بالمواعيد يجنبها غرامات التأخير.'
          ],
          summaryEN: [
            'Value Added Tax (TVA): 19% standard and 9% for basic products.',
            'Corporate Profit Tax (IBS): varies by activity (19% to 26%).',
            'Income Tax (IRG): Employer deducts from worker salary and remits to the state.',
            'The core G50 Declaration: monthly doc summarizing due taxes and fees.',
            'G50 must be filed before the 20th of each month (or 15th depending on office).',
            'The accountant is the entity\'s financial lawyer; meeting deadlines avoids late fines.'
          ],
          task: {
            title: 'حساب الضريبة على الأجر',
            titleEN: 'Calculating Salary Tax',
            description: 'عامل يتقاضى أجراً خاضعاً للضريبة بقيمة 50,000 دج. ابحث عن جدول IRG في الجزائر واحسب قيمة الضريبة المستقطعة منه.',
            descriptionEN: 'A worker has a taxable salary of 50k DZD. Find the Algerian IRG slate and calculate his deducted tax.'
          },
          quiz: [
            {
              id: 'q15_1',
              question: 'ما هي ضريبة الـ TVA في الجزائر؟',
              questionEN: 'What is TVA in Algeria?',
              options: [
                { id: 'o1', text: 'ضريبة على الأرباح فقط', textEN: 'Tax on profits only', isCorrect: false },
                { id: 'o2', text: 'رسم غير مباشر يدفعه المستهلك ويجمعه التاجر لصالح الدولة', textEN: 'Indirect tax paid by consumer and collected by trader for the state', isCorrect: true },
                { id: 'o3', text: 'ضريبة على الأراضي', textEN: 'Land tax', isCorrect: false },
                { id: 'o4', text: 'مكافأة للمحاسب', textEN: 'Bonus for the accountant', isCorrect: false }
              ],
              explanation: 'المستهلك هو من يتحمل TVA في النهاية؛ والتاجر مجرد "وسيط" للجمع.',
              explanationEN: 'The consumer bears the TVA; the trader is just a "collector" intermediary.'
            },
            {
              id: 'q15_2',
              question: 'ماذا سيحدث للمؤسسة إذا تأخرت في دفع G50 يوماً واحداً؟',
              questionEN: 'What happens to the entity if G50 is 1 day late?',
              options: [
                { id: 'o1', text: 'تُعفى من الضرائب', textEN: 'Tax exemption', isCorrect: false },
                { id: 'o2', text: 'تُطبق عليها "غرامة تأخير" (Pénalité) تزيد من مصاريفها', textEN: 'A "Late Fine" (Penalty) applies, increasing its expenses', isCorrect: true },
                { id: 'o3', text: 'لن يلاحظ أحد', textEN: 'Nobody will notice', isCorrect: false },
                { id: 'o4', text: 'تُغلق فوراً', textEN: 'Closed instantly', isCorrect: false }
              ],
              explanation: 'وقت الضرائب مقدس؛ أي تأخير يكلف أموالاً إضافية غيـر ضرورية.',
              explanationEN: 'Tax time is sacred; any delay costs unnecessary extra money.'
            },
            {
              id: 'q15_3',
              question: 'لماذا نهتم بالرقم التعريفي الجبائي (NIF) في المحاسبة؟',
              questionEN: 'Why care about Tax ID (NIF) in accounting?',
              options: [
                { id: 'o1', text: 'لأنه هو "الهوية" التي تتعرف بها مصلحة الضرائب على المؤسسة وعملياتها', textEN: 'It is the "Identity" tax authorities use to recognize the entity and its transactions', isCorrect: true },
                { id: 'o2', text: 'لأنه رقم سري للبنك', textEN: 'It\'s a secret bank number', isCorrect: false },
                { id: 'o3', text: 'لا يوجد سبب مفيد', textEN: 'No useful reason', isCorrect: false },
                { id: 'o4', text: 'لطلب الطعام', textEN: 'To order food', isCorrect: false }
              ],
              explanation: 'NIF هو الرقم الموحد لكل مؤسسة في تعاملاتها القانونية والمالية.',
              explanationEN: 'NIF is the unique number for every entity in its legal and financial dealings.'
            }
          ],
          xpReward: 60
        },
        {
          id: 'les_16',
          title: 'مشروع التخرج: دورة محاسبية كاملة لمحل "حرفتي"',
          titleEN: 'Final Project: Full Accounting Cycle for "Hirfati" Shop',
          visualType: 'illustration',
          visualUrls: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'],
          visualDescription: 'مكتب محاسب به حاسوب، مستندات، دفتر يومية. مخطط دائري يظهر تحليل الإيرادات. شهادة تخرج ذهبية.',
          duration: '45:00',
          summary: [
            'الهدف من هذا المشروع هو تطبيق كل ما تعلمته من القيد المزدوج إلى الميزانية.',
            'ستقوم بمحاكاة شهر كامل من العمليات المالية لمتجر جزائري صغير.',
            'يجب أن تتأكد من توازن كل دقيقة في قيودك لضمان صحة النتائج الختامية.',
            'حساب الضريبة (TVA) والاشتراكات الاجتماعية جزء أساسي من المشروع.',
            'في النهاية، ستقدم "تقرير المحاسب" الذي يوضح هل المشروع رابح أم خاسر.',
            'تهانينا! بإتمامه، تكون قد وضعت قدمك على أول طريق الاحتراف المحاسبي.'
          ],
          summaryEN: [
            'The goal is to apply everything learned from double-entry to the balance sheet.',
            'You will simulate one month of transactions for a small Algerian shop.',
            'Ensure every minute in your entries is balanced for accurate final results.',
            'Calculating Tax (TVA) and social contributions is a core part of the project.',
            'Finally, you\'ll present an "Accountant Report" showing if the project is profitable.',
            'Congratulations! By finishing this, you are on the path to professional accounting.'
          ],
          task: {
            title: 'دورة محاسبية شاملة (Excel)',
            titleEN: 'Comprehensive Accounting Cycle (Excel)',
            description: 'قم ببناء ملف Excel يتضمن:\n1. 10 عمليات شراء وبيع.\n2. إيداع قيد الرواتب.\n3. ترحيل للأستاذ وإعداد ميزان مراجعة.\n4. استخراج جدول النتائج (TCR) والميزانية.\n5. حساب G50 للشهر.\nتأكد من توازن الميزانية في النهاية!',
            descriptionEN: 'Build an Excel file with: 10 transactions, salary entry, ledger posting, trial balance, TCR, Balance Sheet, and G50 calculation. Ensure balance!'
          },
          quiz: [
            {
              id: 'q16_1',
              question: 'ما هي أهم خطوة قبل إقفال السنة المالية وتقديم الميزانية؟',
              questionEN: 'What is the most important step before closing the fiscal year?',
              options: [
                { id: 'o1', text: 'القيام بالتسويات والجرد المادي ومطابقته مع المحاسبة', textEN: 'Performing adjustments and physical inventory matching with accounting', isCorrect: true },
                { id: 'o2', text: 'تغيير ألوان الدفاتر', textEN: 'Changing ledger colors', isCorrect: false },
                { id: 'o3', text: 'صرف كل المال الموجود', textEN: 'Spending all existing money', isCorrect: false },
                { id: 'o4', text: 'شراء حاسوب جديد', textEN: 'Buying a new computer', isCorrect: false }
              ],
              explanation: 'الجرد يضمن أن الأرقام في الدفاتر مساوية تماماً لما هو موجود في الواقع بالمستودعات والصندوق.',
              explanationEN: 'Inventory ensures ledger numbers exactly match physical reality in warehouses and cash.'
            },
            {
              id: 'q16_2',
              question: 'لماذا نقول أن المحاسب هو محرك المؤسسة الصامت؟',
              questionEN: 'Why is the accountant called the silent engine of the entity?',
              options: [
                { id: 'o1', text: 'لأنه يملك المعلومات الدقيقة التي تسمح باتخاذ القرارات وتوفير التمويل والامتثال للقانون', textEN: 'He holds accurate info allowing decision-making, financing, and legal compliance', isCorrect: true },
                { id: 'o2', text: 'لأنه لا يتكلم كثيراً', textEN: 'Because he doesn\'t talk much', isCorrect: false },
                { id: 'o3', text: 'لأنه يملك مفاتيح الخزنة', textEN: 'Because he has keys to the safe', isCorrect: false },
                { id: 'o4', text: 'لأنه يستخدم الورق كثيراً', textEN: 'Because he uses lots of paper', isCorrect: false }
              ],
              explanation: 'المعلومة هي القوة؛ وبدون محاسبة، تسير المؤسسة في الظلام.',
              explanationEN: 'Information is power; without accounting, the entity walks in the dark.'
            },
            {
              id: 'q16_3',
              question: 'ما هو شعور التوازن المحاسبي في نهاية السنة؟',
              questionEN: 'What is the feeling of accounting balance at year end?',
              options: [
                { id: 'o1', text: 'راحة الضمير المهني والتأكد من أمانة ودقة العمل المنجز', textEN: 'Professional peace of mind and certainty of work integrity and accuracy', isCorrect: true },
                { id: 'o2', text: 'تعصب وغضب', textEN: 'Intolerance and anger', isCorrect: false },
                { id: 'o3', text: 'لا شيء محدد', textEN: 'Nothing specific', isCorrect: false },
                { id: 'o4', text: 'الرغبة في تغيير المهنة', textEN: 'Desire to change profession', isCorrect: false }
              ],
              explanation: 'توازن الميزانية هو "الكمال" في مهنة الأرقام؛ مبارك عليك إنهاء المسار!',
              explanationEN: 'Balance is "perfection" in the numbers profession; congrats on finishing the path!'
            }
          ],
          xpReward: 200
        }
      ]
    }
  ]
};
