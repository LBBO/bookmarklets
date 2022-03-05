export type Bookmarklet = {
  name: string
  description: string
  func: Function
}

export const functionToBookmarkletUrl = (func: Function) =>
  `javascript:(${encodeURI(func.toString())})()`
