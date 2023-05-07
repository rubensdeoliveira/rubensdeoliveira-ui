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

type ButtonProps = {
  w?: number | number[] | 'full'
  h?: number | number[]
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

const getWidth = (value?: number | number[]): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        max-width: ${transformInPx(value[0])};
      `
    }
    if (value.length === 2) {
      return css`
        max-width: ${transformInPx(value[0])};

        @media (min-width: 768px) {
          max-width: ${transformInPx(value[1])};
        }
      `
    }
    if (value.length === 3) {
      return css`
        max-width: ${transformInPx(value[0])};

        @media (min-width: 768px) {
          max-width: ${transformInPx(value[1])};
        }

        @media (min-width: 1024px) {
          max-width: ${transformInPx(value[2])};
        }
      `
    }
  }
  if (typeof value === 'number') {
    return css`
      max-width: ${transformInPx(value)};
    `
  }
  return css``
}

const getHeight = (value?: number | number[]): FlattenSimpleInterpolation => {
  if (Array.isArray(value)) {
    if (value.length === 1) {
      return css`
        height: ${transformInPx(value[0])};
      `
    }
    if (value.length === 2) {
      return css`
        height: ${transformInPx(value[0])};

        @media (min-width: 768px) {
          height: ${transformInPx(value[1])};
        }
      `
    }
    if (value.length === 3) {
      return css`
        height: ${transformInPx(value[0])};

        @media (min-width: 768px) {
          height: ${transformInPx(value[1])};
        }

        @media (min-width: 1024px) {
          height: ${transformInPx(value[2])};
        }
      `
    }
  }
  if (typeof value === 'number') {
    return css`
      height: ${transformInPx(value)};
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

export const button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 24px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


  ${(props) => props.w !== 'full' && getWidth(props.w)}
  ${(props) => getHeight(props.h)}
  ${(props) => props.disabled && css`opacity: 0.6`}
`
