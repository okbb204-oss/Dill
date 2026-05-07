export interface OfficialDoc {
  id: string;
  craftId: string;
  diploma: {
    titleAR: string;
    titleEN: string;
    levelAR: string;
    levelEN: string;
    durationAR: string;
    durationEN: string;
    requirementsAR: string;
    requirementsEN: string;
  };
  regulation: {
    titleAR: string;
    titleEN: string;
    contentAR: string;
    contentEN: string;
    lawNumber: string;
    sourceUrl: string;
  };
  registration: {
    portalAR: string;
    portalEN: string;
    url: string;
    stepsAR: string[];
    stepsEN: string[];
    requiredDocsAR: string[];
    requiredDocsEN: string[];
  };
}

export const officialDocs: Record<string, OfficialDoc> = {
  accounting: {
    id: 'doc-accounting',
    craftId: 'accounting',
    diploma: {
      titleAR: 'شهادة تقني سامي في المحاسبة والتسيير',
      titleEN: 'Higher Technician Diploma (BTS) in Accounting & Management',
      levelAR: 'المستوى 5 - تقني سامي',
      levelEN: 'Level 5 - Higher Technician',
      durationAR: '30 شهراً (منها 6 أشهر تربص تطبيقي)',
      durationEN: '30 months (including 6 months internship)',
      requirementsAR: 'مستوى الثالثة ثانوي كاملة',
      requirementsEN: 'Full 3rd-year secondary level',
    },
    regulation: {
      titleAR: 'القانون التوجيهي للتكوين والتعليم المهنيين',
      titleEN: 'Vocational Training Orientations Law',
      contentAR: 'يخضع هذا التخصص لمدونة الشعب المهنية وتخصصات التكوين المهني المعتمدة من طرف وزارة التكوين والتعليم المهنيين لجودة التكوين وضمان الاعتراف بالشهادة.',
      contentEN: 'This specialty is governed by the Professional Sectors and Vocational Training Specialties Nomenclature approved by the MVET to ensure quality and recognition.',
      lawNumber: '08-07',
      sourceUrl: 'https://www.mvet.gov.dz',
    },
    registration: {
      portalAR: 'منصة تكوين - التسجيل الأولي',
      portalEN: 'Takwin Platform - Pre-registration',
      url: 'https://www.takwin.dz',
      stepsAR: [
        'الدخول لموقع تكوين وتحديد الولاية والمركز',
        'اختيار التخصص: محاسبة وتسيير',
        'تأكيد التسجيل الأولي طباعة وصل الإيداع',
        'إيداع الملف الورقي في المركز المختار'
      ],
      stepsEN: [
        'Access Takwin website and select Wilaya/Center',
        'Choose specialty: Accounting & Management',
        'Confirm pre-registration and print receipt',
        'Submit paper file at the selected center'
      ],
      requiredDocsAR: [
        'شهادة مدرسية (3 ثانوي)',
        'شهادة ميلاد أصلية',
        '4 صور شمسية',
        'نسخة من بطاقة التعريف الوطنية',
        'ظرفين بريديين عليهما الطابع والعنوان'
      ],
      requiredDocsEN: [
        'School certificate (3rd secondary)',
        'Original birth certificate',
        '4 passport photos',
        'Copy of National ID card',
        '2 stamped envelopes with address'
      ]
    }
  },
  welding: {
    id: 'doc-welding',
    craftId: 'welding',
    diploma: {
      titleAR: 'شهادة الكفاءة المهنية في التلحيم',
      titleEN: 'Vocational Competency Certificate (CAP) in Welding',
      levelAR: 'المستوى 2 - تأهيل مهني',
      levelEN: 'Level 2 - Professional Qualification',
      durationAR: '12-18 شهراً حسب نظام التكوين',
      durationEN: '12-18 months depending on regime',
      requirementsAR: 'مستوى مابعد مرحلة التعليم الابتدائي',
      requirementsEN: 'Post-primary education level',
    },
    regulation: {
      titleAR: 'نظام التكوين عن طريق التمهين',
      titleEN: 'Apprenticeship Training System',
      contentAR: 'تخصص التلحيم معترف به كمهنة ذات أولوية في القطاع الصناعي، حيث يتم التكوين بالتناوب بين مركز التكوين والورشة لضمان اكتساب مهارات عملية.',
      contentEN: 'Welding is recognized as a priority industrial trade, utilizing alternating training between centers and workshops for practical mastery.',
      lawNumber: '81-07',
      sourceUrl: 'https://www.mvet.gov.dz',
    },
    registration: {
      portalAR: 'البوابة الوطنية رقمية للتكوين المهني',
      portalEN: 'National Digital Vocational Portal',
      url: 'https://www.mvet.gov.dz/services',
      stepsAR: [
        'التسجيل عبر منصة تكوين الرقمية',
        'اجتياز المقابلة التقنية في المركز',
        'البحث عن ورشة تمهين (في حال نظام التمهين)',
        'توقيع عقد التمهين والمصادقة عليه'
      ],
      stepsEN: [
        'Register via Takwin digital platform',
        'Pass the technical interview at the center',
        'Find an apprenticeship workshop (for AP regime)',
        'Sign and validate the apprenticeship contract'
      ],
      requiredDocsAR: [
        'شهادة مدرسية (نهاية الابتدائي أو المتوسط)',
        '2 صور شمسية',
        'نسخة من بطاقة التعريف',
        'كشف نقاط آخر فصل دراسي'
      ],
      requiredDocsEN: [
        'School certificate',
        '2 passport photos',
        'Copy of National ID',
        'Last semester grades transcript'
      ]
    }
  },
  sanitary_plumbing: {
    id: 'doc-plumbing',
    craftId: 'sanitary_plumbing',
    diploma: {
      titleAR: 'شهادة التحكم المهني في الترصيص الصحي والغاز',
      titleEN: 'Professional Mastery Certificate (CMP) in Plumbing & Gas',
      levelAR: 'المستوى 3 - كفاءة متوسطة',
      levelEN: 'Level 3 - Intermediate Competency',
      durationAR: '18 شهراً نظام إقامي أو تمهين',
      durationEN: '18 months (Residential or Apprenticeship)',
      requirementsAR: 'مستوى نهاية التعليم الأساسي (المتوسط)',
      requirementsEN: 'Middle school completion level',
    },
    regulation: {
      titleAR: 'قانون السلامة في التركيبات الصحية والغازية',
      titleEN: 'Plumbing & Gas Safety Regulations',
      contentAR: 'يجب أن تتوفر في التركيبات الصحية معايير الجودة والأمان المعمول بها وطنياً، ويمنح التكوين المهني الأهلية لممارسة المهنة بشكل رسمي.',
      contentEN: 'Sanitary installations must meet national safety and quality standards; vocational training grants official legal eligibility.',
      lawNumber: '02-01',
      sourceUrl: 'https://www.joradp.dz',
    },
    registration: {
      portalAR: 'منصة تكوين الرسمية - الجزائر',
      portalEN: 'Takwin Official Portal - Algeria',
      url: 'https://www.takwin.dz',
      stepsAR: [
        'اختيار نمط التكوين (تمهين أو حضوري)',
        'التسجيل الأولي في موقع takwin.dz',
        'إحضار الملف الإداري للمركز الأقرب',
        'بداية التربص الميداني'
      ],
      stepsEN: [
        'Choose training mode (Apprenticeship/Residential)',
        'Pre-register on takwin.dz',
        'Submit administrative file at the nearest center',
        'Start field internship'
      ],
      requiredDocsAR: [
        'شهادة مدرسية للمستوى المتوسط',
        'شهادة طبية (صدرية وعامة)',
        'نسخة من شهادة الميلاد',
        '2 أظرفة بريدية'
      ],
      requiredDocsEN: [
        'Middle school certificate',
        'Medical certificate (chest & general)',
        'Birth certificate copy',
        '2 stamped envelopes'
      ]
    }
  }
};

// Helper for generic data if not specified
export const getGenericOfficialDoc = (craftId: string, nameAR: string, nameEN: string): OfficialDoc => ({
  id: `doc-gen-${craftId}`,
  craftId,
  diploma: {
    titleAR: `شهادة تأهيل مهني في ${nameAR}`,
    titleEN: `Vocational Qualification in ${nameEN}`,
    levelAR: 'المستوى الأساسي لتأطير الحرفة',
    levelEN: 'Basic Vocational Qualification Level',
    durationAR: '6 إلى 12 شهراً',
    durationEN: '6 to 12 months',
    requirementsAR: 'بدون شروط مستوى دراسي مسبق (حسب التخصص)',
    requirementsEN: 'No specific educational level required (varies)',
  },
  regulation: {
    titleAR: 'القانون التوجيهي للتكوين المهني 08-07',
    titleEN: 'Vocational Training Law 08-07',
    contentAR: 'تمارس هذه الحرفة وفقاً للمعايير التقنية المعمول بها في الجزائر، وهي معترف بها ضمن مدونة التخصصات الوطنية لوزارة التكوين المهني.',
    contentEN: 'This craft is practiced according to national technical standards and recognized within the official MVET nomenclature.',
    lawNumber: '08-07',
    sourceUrl: 'https://www.mvet.gov.dz',
  },
  registration: {
    portalAR: 'منصة تكوين الإلكترونية',
    portalEN: 'Takwin E-registration',
    url: 'https://www.takwin.dz',
    stepsAR: [
      'التسجيل في البوابة الرقمية لوزارة التكوين',
      'التوجه لمركز التكوين الأقرب لمقر السكن',
      'اجتياز اختبارات الانتقاء والتوجيه'
    ],
    stepsEN: [
      'Register on the MVET digital portal',
      'Visit the nearest vocational center',
      'Pass selection and orientation tests'
    ],
    requiredDocsAR: [
      'شهادة ميلاد',
      'شهادة مدرسية',
      'نسخة من بطاقة التعريف',
      'صور شمسية حديثة'
    ],
    requiredDocsEN: [
      'Birth certificate',
      'School certificate',
      'ID card copy',
      'Recent passport photos'
    ]
  }
});
