function generateNumberArray(from: number, to: number) {
  return [...new Array(to - from + 1)]
    .map((_, index) => from + index)
    .filter((page) => page > 0)
}

let fontSizesGenerate = {}

generateNumberArray(10, 96).forEach((number) => {
  fontSizesGenerate = Object.assign(fontSizesGenerate, {
    [number]: `${number / 16}rem`,
  })
})

export const fontSizes = fontSizesGenerate
