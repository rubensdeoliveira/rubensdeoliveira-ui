import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

export type BorderRadius = number | '50%'

type TextProps = {
  size?: number | number[]
  weight?: number | number[]
  mb?: number | number[]
  mt?: number | number[]
  lineHeight?: number
}

type CardProps = {
  borderRadius?: BorderRadius | BorderRadius[]
  px?: number | number[]
  py?: number | number[]
}

type NavbarBarProps = {
  py?: number | number[]
}

const transformInRem = (value: number): string => {
  return `${value / 16}rem`
}

const transformInPx = (value: number): string => {
  return `${value}px`
}

const getFontSizeValue = (
  value?: number | number[],
): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        font-size: ${transformInRem(value[0])};
      `
    }
    if (value.length === 2) {
      return css`
        font-size: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          font-size: ${transformInRem(value[1])};
        }
      `
    }
    if (value.length === 3) {
      return css`
        font-size: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          font-size: ${transformInRem(value[1])};
        }

        @media (min-width: 1024px) {
          font-size: ${transformInRem(value[2])};
        }
      `
    }
  }
  if (typeof value === 'number') {
    return css`
      font-size: ${transformInRem(value)};
    `
  }
  return css``
}

const getFontWeightValue = (
  value?: number | number[],
): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        font-weight: ${value[0]};
      `
    }
    if (value.length === 2) {
      return css`
        font-weight: ${value[0]};

        @media (min-width: 768px) {
          font-weight: ${value[1]};
        }
      `
    }
    if (value.length === 3) {
      return css`
        font-weight: ${value[0]};

        @media (min-width: 768px) {
          font-weight: ${value[1]};
        }

        @media (min-width: 1024px) {
          font-weight: ${value[2]};
        }
      `
    }
  }
  if (typeof value === 'number') {
    return css`
      font-weight: ${value};
    `
  }
  return css``
}

const getMbValue = (value?: number | number[]): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        margin-bottom: ${transformInRem(value[0])};
      `
    }
    if (value.length === 2) {
      return css`
        margin-bottom: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          margin-bottom: ${transformInRem(value[1])};
        }
      `
    }
    if (value.length === 3) {
      return css`
        margin-bottom: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          margin-bottom: ${transformInRem(value[1])};
        }

        @media (min-width: 1024px) {
          margin-bottom: ${transformInRem(value[2])};
        }
      `
    }
  }
  if (typeof value === 'number') {
    return css`
      margin-bottom: ${transformInRem(value)};
    `
  }
  return css``
}

const getMtValue = (value?: number | number[]): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        margin-top: ${transformInRem(value[0])};
      `
    }
    if (value.length === 2) {
      return css`
        margin-top: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          margin-top: ${transformInRem(value[1])};
        }
      `
    }
    if (value.length === 3) {
      return css`
        margin-top: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          margin-top: ${transformInRem(value[1])};
        }

        @media (min-width: 1024px) {
          margin-top: ${transformInRem(value[2])};
        }
      `
    }
  }
  if (typeof value === 'number') {
    return css`
      margin-top: ${transformInRem(value)};
    `
  }
  return css``
}

const getPxValue = (value?: number | number[]): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        padding-top: ${transformInRem(value[0])};
        padding-bottom: ${transformInRem(value[0])};
      `
    }
    if (value.length === 2) {
      return css`
        padding-top: ${transformInRem(value[0])};
        padding-bottom: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          padding-top: ${transformInRem(value[1])};
          padding-bottom: ${transformInRem(value[1])};
        }
      `
    }
    if (value.length === 3) {
      return css`
        padding-top: ${transformInRem(value[0])};
        padding-bottom: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          padding-top: ${transformInRem(value[1])};
          padding-bottom: ${transformInRem(value[1])};
        }

        @media (min-width: 1024px) {
          padding-top: ${transformInRem(value[2])};
          padding-bottom: ${transformInRem(value[2])};
        }
      `
    }
  }
  if (typeof value === 'number') {
    return css`
      padding-top: ${transformInRem(value)};
      padding-bottom: ${transformInRem(value)};
    `
  }
  return css``
}

const getPyValue = (value?: number | number[]): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        padding-left: ${transformInRem(value[0])};
        padding-right: ${transformInRem(value[0])};
      `
    }
    if (value.length === 2) {
      return css`
        padding-left: ${transformInRem(value[0])};
        padding-right: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          padding-left: ${transformInRem(value[1])};
          padding-right: ${transformInRem(value[1])};
        }
      `
    }
    if (value.length === 3) {
      return css`
        padding-left: ${transformInRem(value[0])};
        padding-right: ${transformInRem(value[0])};

        @media (min-width: 768px) {
          padding-left: ${transformInRem(value[1])};
          padding-right: ${transformInRem(value[1])};
        }

        @media (min-width: 1024px) {
          padding-left: ${transformInRem(value[2])};
          padding-right: ${transformInRem(value[2])};
        }
      `
    }
  }
  if (typeof value === 'number') {
    return css`
      padding-left: ${transformInRem(value)};
      padding-right: ${transformInRem(value)};
    `
  }
  return css``
}

const getBorderRadiusValue = (
  value?: BorderRadius | BorderRadius[],
): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        border-radius: ${value[0] === '50%'
          ? value[0]
          : transformInPx(value[0])};
      `
    }
    if (value.length === 2) {
      return css`
        border-radius: ${value[0] === '50%'
          ? value[0]
          : transformInPx(value[0])};

        @media (min-width: 768px) {
          border-radius: ${value[1] === '50%'
            ? value[1]
            : transformInPx(value[1])};
        }
      `
    }
    if (value.length === 3) {
      return css`
        border-radius: ${value[0] === '50%'
          ? value[0]
          : transformInPx(value[0])};

        @media (min-width: 768px) {
          border-radius: ${value[1] === '50%'
            ? value[1]
            : transformInPx(value[1])};
        }

        @media (min-width: 1024px) {
          border-radius: ${value[2] === '50%'
            ? value[2]
            : transformInPx(value[2])};
        }
      `
    }
  }
  if (typeof value === 'number' || value === '50%') {
    return css`
      border-radius: ${value === '50%' ? value : transformInPx(value)};
    `
  }
  return css``
}

const getLineHeightValue = (value?: number): FlattenSimpleInterpolation => {
  if (value) {
    return css`
      line-height: ${value};
    `
  }
  return css``
}

export const h1 = styled.h1<TextProps>`
  ${(props) => getFontSizeValue(props.size)}
  ${(props) => getFontWeightValue(props.weight)}
  ${(props) => getMbValue(props.mb)}
  ${(props) => getMtValue(props.mt)}
  ${(props) => getLineHeightValue(props.lineHeight)}
`

export const h2 = styled.h2<TextProps>`
  ${(props) => getFontSizeValue(props.size)}
  ${(props) => getFontWeightValue(props.weight)}
  ${(props) => getMbValue(props.mb)}
  ${(props) => getMtValue(props.mt)}
  ${(props) => getLineHeightValue(props.lineHeight)}
`

export const h3 = styled.h3<TextProps>`
  ${(props) => getFontSizeValue(props.size)}
  ${(props) => getFontWeightValue(props.weight)}
  ${(props) => getMbValue(props.mb)}
  ${(props) => getMtValue(props.mt)}
  ${(props) => getLineHeightValue(props.lineHeight)}
`

export const h4 = styled.h4<TextProps>`
  ${(props) => getFontSizeValue(props.size)}
  ${(props) => getFontWeightValue(props.weight)}
  ${(props) => getMbValue(props.mb)}
  ${(props) => getMtValue(props.mt)}
  ${(props) => getLineHeightValue(props.lineHeight)}
`

export const h5 = styled.h5<TextProps>`
  ${(props) => getFontSizeValue(props.size)}
  ${(props) => getFontWeightValue(props.weight)}
  ${(props) => getMbValue(props.mb)}
  ${(props) => getMtValue(props.mt)}
  ${(props) => getLineHeightValue(props.lineHeight)}
`

export const h6 = styled.h6<TextProps>`
  ${(props) => getFontSizeValue(props.size)}
  ${(props) => getFontWeightValue(props.weight)}
  ${(props) => getMbValue(props.mb)}
  ${(props) => getMtValue(props.mt)}
  ${(props) => getLineHeightValue(props.lineHeight)}
`

export const p = styled.p<TextProps>`
  ${(props) => getFontSizeValue(props.size)}
  ${(props) => getFontWeightValue(props.weight)}
  ${(props) => getMbValue(props.mb)}
  ${(props) => getMtValue(props.mt)}
  ${(props) => getLineHeightValue(props.lineHeight)}
`

export const span = styled.span<TextProps>`
  ${(props) => getFontSizeValue(props.size)}
  ${(props) => getFontWeightValue(props.weight)}
  ${(props) => getMbValue(props.mb)}
  ${(props) => getMtValue(props.mt)}
  ${(props) => getLineHeightValue(props.lineHeight)}
`

export const card = styled.div<CardProps>`
  ${(props) => getPxValue(props.px)}
  ${(props) => getPyValue(props.py)}
  ${(props) => getBorderRadiusValue(props.borderRadius)}
`

export const navbarBar = styled.div<NavbarBarProps>`
  ${(props) => getPyValue(props.py)}
`
