import { SubjectType, InstitutionType } from "../types/homework";

export interface PracticeQuestion {
  id: string;
  institution: InstitutionType;
  institutionName: string;
  examId: string;
  examName: string;
  subjectType: SubjectType;
  questionNumber: number;
  title: string;
  topic: string;
  fullQuestionImage?: string; // Sadece PNG/WebP Görseli Modu (v2 & v3 için)
  leadText?: string;
  quoteBlock?: string;
  svgDiagram?: string;
  tableData?: {
    headers: string[];
    rows: { col1: string; col2: string }[];
  };
  itemsList?: { num: number; question: string; answer: string }[];
  rulesList?: string[];
  bulletPoints?: string[];
  questionPrompt: string;
  options: {
    key: "A" | "B" | "C" | "D";
    text: string;
  }[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  microSummary: string; // 📌 Akılda Kalsın Mikro Konu Özeti
  difficulty: "Kolay" | "Orta" | "Zor";
  examType: string;
}

export interface ExamInfo {
  id: string;
  institution: InstitutionType;
  institutionName: string;
  examName: string;
  examShortTitle: string;
  description: string;
  date?: string;
  totalQuestions: number;
  subjectBreakdown: {
    subjectType: SubjectType;
    label: string;
    icon: string;
    count: number;
    color: string;
  }[];
}

export const INSTITUTION_EXAMS: ExamInfo[] = [
  {
    id: "aydin-nao-lgs-deneme-1-v2",
    institution: "aydin",
    institutionName: "Aydın Dershanesi",
    examName: "8.SINIF NAO LGS DENEME-1.v2",
    examShortTitle: "NAO LGS Deneme-1.v2",
    description: "Aydın Dershanesi 8. Sınıf NAO LGS Deneme-1.v2 versiyonu.",
    date: "Ekim 2026",
    totalQuestions: 18,
    subjectBreakdown: [
      { subjectType: "TÜRKÇE", label: "Türkçe", icon: "📖", count: 7, color: "amber" },
      { subjectType: "MATEMATİK", label: "Matematik", icon: "📐", count: 4, color: "blue" },
      { subjectType: "FEN BİLİMLERİ", label: "Fen Bilimleri", icon: "🔬", count: 4, color: "emerald" },
      { subjectType: "İNKILAP TARİHİ", label: "İnkılap Tarihi", icon: "🏛️", count: 3, color: "rose" },
    ],
  },
  {
    id: "aydin-nao-lgs-deneme-3",
    institution: "aydin",
    institutionName: "Aydın Dershanesi",
    examName: "8.SINIF NAO LGS DENEME-3",
    examShortTitle: "NAO LGS Deneme-3",
    description: "Aydın Dershanesi 8. Sınıf NAO LGS Deneme-3 (Full Görsel & İnteraktif Şıklar).",
    date: "Kasım 2026",
    totalQuestions: 26,
    subjectBreakdown: [
      { subjectType: "MATEMATİK", label: "Matematik", icon: "📐", count: 11, color: "blue" },
      { subjectType: "FEN BİLİMLERİ", label: "Fen Bilimleri", icon: "🔬", count: 7, color: "emerald" },
      { subjectType: "TÜRKÇE", label: "Türkçe", icon: "📖", count: 4, color: "amber" },
      { subjectType: "İNKILAP TARİHİ", label: "İnkılap Tarihi", icon: "🏛️", count: 2, color: "rose" },
      { subjectType: "DİN KÜLTÜRÜ", label: "Din Kültürü", icon: "🕌", count: 2, color: "purple" },
    ],
  },
];

// Combine Deneme 1.v2 questions and Deneme 3 questions
