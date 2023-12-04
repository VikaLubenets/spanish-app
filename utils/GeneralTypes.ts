export enum TensesIndicativo {
  INFINITIVE = 'Infinitivo',
  PRESENT = 'Presente',
  PRETERITE = 'Pretérito Indefinido',
  IMPERFECT = 'Pretérito Imperfecto',
  COMPUESTO = 'Pretérito Perfecto (Compuesto)',
  PLUSQUAMPERFECTO = 'Pretérito Plusquamperfecto',
  ANTERIOR = 'Pretérito Anterior',
  FUTURE = 'Futuro',
  FUTURE_PERFECTO = 'Futuro Perfecto',
  CONDITIONAL = 'Conditional',
  COMMAND_AFFIRMATIVE = 'Imperativo Afirmativo',
  COMMAND_NEGATIVE = 'Imperativo Negativo',
}

export enum TensesSubjuntivo {
  PRESENT = 'Presente de Subjunctivo',
  IMPERFECT = 'Pretérito Imperfecto de Subjunctivo',
  COMPUESTO = 'Pretérito Perfecto (Compuesto) de Subjunctivo',
  PLUSQUAMPERFECTO = 'Pretérito Plusquamperfecto de Subjunctivo',
  FUTURE = 'Future de Subjunctivo',
}

export enum Pronoun {
  YO = 'yo',
  TÚ = 'tú',
  ÉL = 'él',
  ELLA = 'ella',
  USTED = 'usted',
  NOSOTROS = 'nosotros',
  NOSOTRAS = 'nosotras',
  VOSOTROS = 'vosotros',
  VOSOTRAS = 'vosotras',
  ELLOS = 'ellos',
  ELLAS = 'ellas',
  USTEDES = 'ustedes',
}

export interface IVerb {
  infinitive: InfinitiveType;
  indicativo: IndicativeObjType;
  subjuntivo: SubjuntivoObjType;
}

type InfinitiveType = {
  spanish: string;
  russian: string;
  english: string;
};

type IndicativeVerbType = {
  present: string;
  preterite: string;
  imperfect: string;
  future: string;
  conditional: string;
};

type SubjuntivoVerbType = {
  present: string;
  imperfect: string;
  compuesto: string;
  plusquamperfecto: string;
  future: string;
};

type VerbTimeType<T> = {
  yo: T;
  tú: T;
  'él/ella/usted': T;
  'nosotros/nosotras': T;
  'vosotros/vosotras': T;
  'ellos/ellas/ustedes': T;
};

type IndicativeObjType = VerbTimeType<IndicativeVerbType>;
type SubjuntivoObjType = VerbTimeType<SubjuntivoVerbType>;
