import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

type TextProps = {
  size: number | number[]
  weight: number | number[]
  mb: number | number[]
  mt: number | number[]
  lineHeight?: number
}

const transformInRem = (value: number): string => {
  return `${value / 16}rem`
}

const getFontSizeValue = (
  value: number | number[],
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
  } else {
    return css`
      font-size: ${transformInRem(value)};
    `
  }
  return css``
}

const getFontWeightValue = (
  value: number | number[],
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
  } else {
    return css`
      font-weight: ${value};
    `
  }
  return css``
}

const getMbValue = (value: number | number[]): FlattenSimpleInterpolation => {
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
  } else {
    return css`
      margin-bottom: ${transformInRem(value)};
    `
  }
  return css``
}

const getMtValue = (value: number | number[]): FlattenSimpleInterpolation => {
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
  } else {
    return css`
      margin-top: ${transformInRem(value)};
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
