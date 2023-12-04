import { Reducer, Store } from '@reduxjs/toolkit';

export interface ActionType {
  type: string;
  payload: string[];
}

export interface CardState {
  verb: Record<string, never>;
  tense: string;
  pronoun: string;
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
