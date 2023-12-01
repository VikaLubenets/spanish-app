import { Reducer, Store } from '@reduxjs/toolkit';

export interface ActionType {
  type: string;
  payload: string[];
}

export interface CardState {
  testResults: string[];
  tense: string;
  pronoun: string;
  currentVerb: string;
  correctVerbForm: string;
  currentVerbTranslationRus: string;
  currentVerbTranslationEng: string;
  currentVerbNum: number;
  dailyGoal: number;
  error: null | string;
  loading: boolean;
}

export interface RootState {
  products: CardState;
}
export type setupStore = () => Store;
export type RootReducer = Reducer<RootState>;
export type AppStore = ReturnType<setupStore>;
export type AppDispatch = AppStore['dispatch'];
