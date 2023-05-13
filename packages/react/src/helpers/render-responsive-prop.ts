export function renderResponsizeProp(
  prop: any | any[],
  screenSize: 'sm' | 'md' | 'lg' = 'sm'
) {
  if (Array.isArray(prop) && prop.length === 0) {
    return undefined
  }
  if (screenSize === 'lg') {
    if (Array.isArray(prop) && prop.length > 2) {
      return prop[2]
    }
  }
  if (screenSize === 'md') {
    if (Array.isArray(prop) && prop.length > 1) {
      return prop[1]
    }
  }
  if (screenSize === 'sm') {
    if (Array.isArray(prop) && prop.length > 0) {
      return prop[0]
    }
    return prop
  }
}
