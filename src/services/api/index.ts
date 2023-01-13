import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { getQuestion } from '../../mocks/api'
import { IQuestion } from '../../types/Question'
import { IReplyAnswerRequest } from './types'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getQuestion: builder.query<IQuestion, Array<string>>({
      query: () => ({
        url: `posts`,
      }),
      // use only for mock data
      transformResponse: (response, meta, arg) => getQuestion(arg),
    }),
    replyAnswer: builder.mutation<boolean, IReplyAnswerRequest>({
      // query: ({questionUuid, answerUuid}) => ({ // real
      query: () => ({
        // mock
        url: `posts`, // mock
        // url: 'reply-answer/questionUuid/answerUuid' // real
        method: 'POST',
      }),
    }),
  }),
})

export const { useGetQuestionQuery, useReplyAnswerMutation } = api

export default api
