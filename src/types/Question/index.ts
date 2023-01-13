export interface IQuestion {
  question: string
  content: Array<{
    uuid: string
    answer: string
  }>
  correct: string
  uuid: string
}
