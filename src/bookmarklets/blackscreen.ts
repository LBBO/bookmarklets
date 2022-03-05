export const blackscreen = () => {
  const div = document.createElement('div')
  div.style.backgroundColor = 'black'
  div.style.height = '100vh'
  div.style.width = '100vw'

  document.body.style.padding = '0'
  document.body.style.margin = '0'
  document.body.style.overflow = 'hidden'
  document.body.innerHTML = ''

  const openFullscreen = (elem: HTMLElement) => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if ((elem as any).webkitRequestFullscreen) {
      /* Safari */
      ;(elem as any).webkitRequestFullscreen()
    } else if ((elem as any).msRequestFullscreen) {
      /* IE11 */
      ;(elem as any).msRequestFullscreen()
    }
  }

  requestAnimationFrame(() => {
    document.body.appendChild(div)
    openFullscreen(document.body)
  })
}
