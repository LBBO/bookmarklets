export const getChangeMediaSpeed = () => {
  const mediaElements: NodeListOf<
    HTMLAudioElement | HTMLVideoElement | HTMLMediaElement
  > = document.querySelectorAll('audio,video,media')
  const defaultSpeed = 2
  if (mediaElements.length) {
    const newSpeedStr =
      prompt(
        'How fast do you want the media to be?',
        defaultSpeed.toString(),
      ) ?? defaultSpeed.toString()
    const newSpeed = parseFloat(newSpeedStr)

    if (!Number.isNaN(newSpeed) && newSpeed > 0) {
      mediaElements.forEach((el) => {
        el.playbackRate = newSpeed
      })
    } else {
      alert(
        `${newSpeedStr} is not a valid speed! Please enter a positive number (preferably no larger than 5)!`,
      )
    }
  } else {
    alert('No media found!')
  }
}
