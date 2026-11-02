import { SubjectType, InstitutionType } from '../types/homework';

export interface ShadowQuestion {
  id: string;
  parentQuestionId: string;
  parentQuestionNumber: number;
  parentQuestionTitle: string;
  shadowIndex: 1 | 2;
  institution: InstitutionType;
  institutionName: string;
  examId: string;
  examName: string;
  subjectType: SubjectType;
  learningObjective: string; // MEB Kazanım Kodu ve Açıklaması
  topic: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  title: string;
  leadText?: string;
  quoteBlock?: string;
  svgDiagram?: string; // Vektörel SVG Şekil ve Grafik Çizimi
  tableData?: {
    headers: string[];
    rows: { col1: string; col2: string }[];
  };
  itemsList?: { num: number; question: string; answer: string }[];
  rulesList?: string[];
  bulletPoints?: string[];
  questionPrompt: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  distractorAnalysis: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  microSummary: string;
}

export const SHADOW_QUESTIONS: ShadowQuestion[] = [];
