import background from './assets/background.jpg'
import p5 from 'p5'
window.p5 = p5
require('p5/lib/addons/p5.sound')

const height = 600
const mp3fileName = 'Ketsa-10.mp3'

export function sketch(p) {
  let song
  let fft
  let isPlay = false
  let image

  p.setup = () => {
    p.createCanvas(p.windowWidth, height)
    p.textFont('Roboto')

    song = p.loadSound(mp3fileName)
    fft = new p5.FFT()
    fft.setInput(song)

    image = p.loadImage(background)
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, height)
  }

  p.mousePressed = () => {
    if (isPlay === false) {
      song.play()
      isPlay = true
    } else {
      song.pause()
      isPlay = false
    }
  }

  p.draw = () => {
    p.background(255)

    p.image(image, 0, 0, p.windowWidth, height)

    if (isPlay === false) {
      p.text('Click to play', 20, 30)
    } else {
      p.text('Click to pause', 20, 30)
    }

    const spectrum = fft.analyze()

    p.beginShape()
    p.vertex(0, height)
    for (let i = 0; i < spectrum.length; i++) {
      p.vertex(i, p.map(spectrum[i], 0, 255, height, 0))
    }
    p.endShape()
  }
}
