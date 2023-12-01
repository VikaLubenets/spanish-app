import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionType, AppDispatch, CardState } from '../types';

const initialState: CardState = {
  testResults: [],
  tense: '',
  pronoun: '',
  currentVerb: '',
  correctVerbForm: '',
  currentVerbTranslationRus: '',
  currentVerbTranslationEng: '',
  currentVerbNum: 0,
  dailyGoal: 100,
  error: null,
  loading: false,
};

export const verbsSlice = createSlice({
  name: 'verbs',
  initialState,
  reducers: {},
});
