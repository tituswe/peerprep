import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
  Question,
  QuestionConstraint,
  QuestionDescription,
  QuestionDifficulty,
  QuestionExample,
  QuestionTag
} from '../../types';

const initialState: Question = {
  id: '',
  title: '',
  difficulty: 'EASY',
  tags: [],
  description: '',
  examples: [],
  constraints: []
};

export const creatorSlice = createSlice({
  name: 'creator',
  initialState,
  reducers: {
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    updateDifficulty: (state, action: PayloadAction<QuestionDifficulty>) => {
      state.difficulty = action.payload;
    },
    updateTags: (state, action: PayloadAction<QuestionTag[]>) => {
      state.tags = action.payload;
    },
    updateDescription: (state, action: PayloadAction<QuestionDescription>) => {
      state.description = action.payload;
    },
    addExample: (state, action: PayloadAction<QuestionExample>) => {
      state.examples.push(action.payload);
    },
    updateExample: (
      state,
      action: PayloadAction<{ example: QuestionExample; index: number }>
    ) => {
      state.examples[action.payload.index] = action.payload.example;
    },
    deleteExample: (state, action: PayloadAction<QuestionExample>) => {
      const examples = [...state.examples];
      state.examples = examples.filter(
        (e) =>
          !(
            e.in === action.payload.in &&
            e.out === action.payload.out &&
            e.explanation === action.payload.explanation
          )
      );
    },
    addConstraint: (state, action: PayloadAction<QuestionConstraint>) => {
      state.constraints.push(action.payload);
    },
    updateConstraint: (
      state,
      action: PayloadAction<{ constraint: QuestionConstraint; index: number }>
    ) => {
      state.constraints[action.payload.index] = action.payload.constraint;
    },
    deleteConstraint: (state, action: PayloadAction<QuestionConstraint>) => {
      const constraints = [...state.constraints];
      state.constraints = constraints.filter((c) => c !== action.payload);
    },
    reset: (state) => {
      state = initialState;
    }
  }
});

export const {
  updateTitle,
  updateDifficulty,
  updateTags,
  updateDescription,
  addExample,
  updateExample,
  deleteExample,
  addConstraint,
  updateConstraint,
  deleteConstraint,
  reset
} = creatorSlice.actions;

export const selectTitle = (state: RootState) => state.creator.title;
export const selectDifficulty = (state: RootState) => state.creator.difficulty;
export const selectTags = (state: RootState) => state.creator.tags;
export const selectDescription = (state: RootState) =>
  state.creator.description;
export const selectExamples = (state: RootState) => state.creator.examples;
export const selectConstraints = (state: RootState) =>
  state.creator.constraints;

export default creatorSlice.reducer;
