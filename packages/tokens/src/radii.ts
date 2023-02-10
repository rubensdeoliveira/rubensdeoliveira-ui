function generateNumberArray(from: number, to: number) {
  return [...new Array(to - from + 1)]
    .map((_, index) => from + index)
    .filter((page) => page > 0)
}

let radiiGenerate = {}

generateNumberArray(1, 16).forEach((number) => {
  radiiGenerate = Object.assign(radiiGenerate, {
    [number]: `${number}px`,
  })
})

export const radii = Object.assign(radiiGenerate, { full: '99999px' })
