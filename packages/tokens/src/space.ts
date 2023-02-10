function generateNumberArray(from: number, to: number) {
  return [...new Array(to - from + 1)]
    .map((_, index) => from + index)
    .filter((page) => page > 0)
}

let spaceGenerate = {}

generateNumberArray(1, 100).forEach((number) => {
  spaceGenerate = Object.assign(spaceGenerate, {
    [number]: `${number / 16}rem`,
  })
})

export const space = spaceGenerate
