export const blackscreen = () => {
  const animationFrame = () =>
    new Promise((resolve) => requestAnimationFrame(resolve))

  const openFullscreen = (elem: HTMLElement, onExitFullscreen?: () => void) => {
    const scheduleExitHandler = (eventName: string) => {
      if (onExitFullscreen) {
        document.addEventListener(
          eventName,
          () => {
            if (document.fullscreenElement === null) {
              onExitFullscreen()
            } else {
              scheduleExitHandler(eventName)
            }
          },
          {
            once: true,
          },
        )
      }
    }
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
      scheduleExitHandler('fullscreenchange')
    } else if ((elem as any).webkitRequestFullscreen) {
      /* Safari */
      ;(elem as any).webkitRequestFullscreen()
      scheduleExitHandler('webkitfullscreenchange')
    } else if ((elem as any).msRequestFullscreen) {
      /* IE11 */
      ;(elem as any).msRequestFullscreen()
      scheduleExitHandler('MSFullscreenChange')
    }
  }

  const div = document.createElement('div')
  div.style.backgroundColor = 'black'
  div.style.height = '100vh'
  div.style.width = '100vw'
  div.style.position = 'absolute'
  div.style.top = '0'
  div.style.left = '0'

  const oldOverflowStyle = document.body.style.overflow

  const onExit = () => {
    console.log('exit')
    div.remove()
    document.body.style.overflow = oldOverflowStyle
  }

  animationFrame().then(() => {
    document.body.style.overflow = 'hidden'

    document.body.appendChild(div)
    openFullscreen(document.body, onExit)
  })
}
