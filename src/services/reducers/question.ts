import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

interface QuestionState {
  resolvedQuestionUuid: Array<string>
}

const initialState: QuestionState = {
  resolvedQuestionUuid: [],
}

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    addResolvedQuestionUuid(state, action: PayloadAction<string>) {
      state.resolvedQuestionUuid.push(action.payload)
    },
    resetResolvedQuestionUuid(state) {
      state.resolvedQuestionUuid = initialState.resolvedQuestionUuid
    },
  },
})

export const { addResolvedQuestionUuid, resetResolvedQuestionUuid } = questionSlice.actions

export const questionSelector = (state: RootState) => state[questionSlice.name]

export const resolvedQuestionUuidSelector = createSelector(
  questionSelector,
  (state) => state.resolvedQuestionUuid,
)

export default questionSlice
