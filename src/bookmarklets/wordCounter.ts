export const wordCounter = () => {
  let selection: Selection | null = window.getSelection()

  const matches = selection?.toString()?.match(/\w+/g)
  if (matches) {
    alert(matches.length)
  }
}
