export type CenterType = 'CFPA' | 'INSFP' | 'IFG' | 'INS' | 'Private';

export interface TrainingCenter {
  id: number;
  nameAR: string;
  nameFR: string;
  type: CenterType;
  address: string;
  wilayaId: number;
  commune: string;
  phone?: string;
  email?: string;
  latitude?: number;
  longitude?: number;
  specialties: string[]; // Craft IDs are typically used here, but we can match by Craft's Arabic/French names or Category
  sourceUrl: string;
  isActive: boolean;
}

export const trainingCenters: TrainingCenter[] = [
  {
    id: 1,
    nameAR: "مركز التكوين المهني والتمهين - زغيش",
    nameFR: "CFPA Zeghiche",
    type: "CFPA",
    address: "حي 200 مسكن، زغيش، بجديوية",
    wilayaId: 48,
    commune: "جديوية",
    phone: "046 00 00 00", // placeholder
    specialties: ["it_technician", "construction", "plumbing", "mechanics"], // Using craft IDs
    sourceUrl: "https://takwin.dz/Etabinfo",
    isActive: true
  },
  {
    id: 2,
    nameAR: "المعهد الوطني المتخصص في التكوين المهني - حاسي مسعود",
    nameFR: "INSFP Hassi Messaoud",
    type: "INSFP",
    address: "المنطقة الصناعية، حاسي مسعود",
    wilayaId: 30, // Ouargla
    commune: "حاسي مسعود",
    phone: "029 00 00 00",
    specialties: ["welding", "hvac", "mechanics"],
    sourceUrl: "https://takwin.dz/Etabinfo",
    isActive: true
  },
  {
    id: 3,
    nameAR: "مركز التكوين المهني والتمهين بوروبة",
    nameFR: "CFPA Bourouba",
    type: "CFPA",
    address: "شارع المجاهدين، بوروبة، الجزائر",
    wilayaId: 16, // Alger
    commune: "بوروبة",
    specialties: ["sewing", "hairdressing", "carpentry", "cooking"],
    sourceUrl: "https://takwin.dz/Etabinfo",
    isActive: true
  },
  {
    id: 4,
    nameAR: "معهد التكوين المستمر - وهران",
    nameFR: "IFG Oran",
    type: "IFG",
    address: "حي السانيا، وهران",
    wilayaId: 31, // Oran
    commune: "السانيا",
    specialties: ["electronics", "it_technician"],
    sourceUrl: "https://takwin.dz/Etabinfo",
    isActive: true
  },
  {
    id: 5,
    nameAR: "مركز التكوين المهني والتمهين - عين التوتة",
    nameFR: "CFPA Ain Touta",
    type: "CFPA",
    address: "طريق الدار البيضاء، عين التوتة",
    wilayaId: 5, // Batna
    commune: "عين التوتة",
    specialties: ["agriculture", "traditional_crafts", "mechanics"],
    sourceUrl: "https://takwin.dz/Etabinfo",
    isActive: true
  }
];
