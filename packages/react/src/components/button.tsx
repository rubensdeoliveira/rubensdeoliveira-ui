import { ButtonHTMLAttributes } from 'react'
import { Icon, IconProps } from './icon'
import { TextProps, Text } from './text'
import { VariantProps, cva } from 'class-variance-authority'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'

const buttonStyles = cva(
  'rdoui-gap-3 rdoui-cursor-pointer rdoui-flex rdoui-items-center rdoui-justify-center rdoui-transition-colors rdoui-duration-200 rdoui-disabled:opacity-60',
  {
    variants: {
      paddingHorizontal: {
        '0': 'rdoui-px-[0rem]',
        '1': 'rdoui-px-[0.0625rem]',
        '2': 'rdoui-px-[0.125rem]',
        '3': 'rdoui-px-[0.1875rem]',
        '4': 'rdoui-px-[0.25rem]',
        '5': 'rdoui-px-[0.3125rem]',
        '6': 'rdoui-px-[0.375rem]',
        '7': 'rdoui-px-[0.4375rem]',
        '8': 'rdoui-px-[0.5rem]',
        '9': 'rdoui-px-[0.5625rem]',
        '10': 'rdoui-px-[0.625rem]',
        '11': 'rdoui-px-[0.6875rem]',
        '12': 'rdoui-px-[0.75rem]',
        '13': 'rdoui-px-[0.8125rem]',
        '14': 'rdoui-px-[0.875rem]',
        '15': 'rdoui-px-[0.9375rem]',
        '16': 'rdoui-px-[1rem]',
        '17': 'rdoui-px-[1.0625rem]',
        '18': 'rdoui-px-[1.125rem]',
        '19': 'rdoui-px-[1.1875rem]',
        '20': 'rdoui-px-[1.25rem]',
        '21': 'rdoui-px-[1.3125rem]',
        '22': 'rdoui-px-[1.375rem]',
        '23': 'rdoui-px-[1.4375rem]',
        '24': 'rdoui-px-[1.5rem]',
        '25': 'rdoui-px-[1.5625rem]',
        '26': 'rdoui-px-[1.625rem]',
        '27': 'rdoui-px-[1.6875rem]',
        '28': 'rdoui-px-[1.75rem]',
        '29': 'rdoui-px-[1.8125rem]',
        '30': 'rdoui-px-[1.875rem]',
        '31': 'rdoui-px-[1.9375rem]',
        '32': 'rdoui-px-[2rem]',
        '33': 'rdoui-px-[2.0625rem]',
        '34': 'rdoui-px-[2.125rem]',
        '35': 'rdoui-px-[2.1875rem]',
        '36': 'rdoui-px-[2.25rem]',
        '37': 'rdoui-px-[2.3125rem]',
        '38': 'rdoui-px-[2.375rem]',
        '39': 'rdoui-px-[2.4375rem]',
        '40': 'rdoui-px-[2.5rem]',
        '41': 'rdoui-px-[2.5625rem]',
        '42': 'rdoui-px-[2.625rem]',
        '43': 'rdoui-px-[2.6875rem]',
        '44': 'rdoui-px-[2.75rem]',
        '45': 'rdoui-px-[2.8125rem]',
        '46': 'rdoui-px-[2.875rem]',
        '47': 'rdoui-px-[2.9375rem]',
        '48': 'rdoui-px-[3rem]',
        '49': 'rdoui-px-[3.0625rem]',
        '50': 'rdoui-px-[3.125rem]',
        '51': 'rdoui-px-[3.1875rem]',
        '52': 'rdoui-px-[3.25rem]',
        '53': 'rdoui-px-[3.3125rem]',
        '54': 'rdoui-px-[3.375rem]',
        '55': 'rdoui-px-[3.4375rem]',
        '56': 'rdoui-px-[3.5rem]',
        '57': 'rdoui-px-[3.5625rem]',
        '58': 'rdoui-px-[3.625rem]',
        '59': 'rdoui-px-[3.6875rem]',
        '60': 'rdoui-px-[3.75rem]',
        '61': 'rdoui-px-[3.8125rem]',
        '62': 'rdoui-px-[3.875rem]',
        '63': 'rdoui-px-[3.9375rem]',
        '64': 'rdoui-px-[4rem]',
        '65': 'rdoui-px-[4.0625rem]',
        '66': 'rdoui-px-[4.125rem]',
        '67': 'rdoui-px-[4.1875rem]',
        '68': 'rdoui-px-[4.25rem]',
        '69': 'rdoui-px-[4.3125rem]',
        '70': 'rdoui-px-[4.375rem]',
        '71': 'rdoui-px-[4.4375rem]',
        '72': 'rdoui-px-[4.5rem]',
        '73': 'rdoui-px-[4.5625rem]',
        '74': 'rdoui-px-[4.625rem]',
        '75': 'rdoui-px-[4.6875rem]',
        '76': 'rdoui-px-[4.75rem]',
        '77': 'rdoui-px-[4.8125rem]',
        '78': 'rdoui-px-[4.875rem]',
        '79': 'rdoui-px-[4.9375rem]',
        '80': 'rdoui-px-[5rem]',
        '81': 'rdoui-px-[5.0625rem]',
        '82': 'rdoui-px-[5.125rem]',
        '83': 'rdoui-px-[5.1875rem]',
        '84': 'rdoui-px-[5.25rem]',
        '85': 'rdoui-px-[5.3125rem]',
        '86': 'rdoui-px-[5.375rem]',
        '87': 'rdoui-px-[5.4375rem]',
        '88': 'rdoui-px-[5.5rem]',
        '89': 'rdoui-px-[5.5625rem]',
        '90': 'rdoui-px-[5.625rem]',
        '91': 'rdoui-px-[5.6875rem]',
        '92': 'rdoui-px-[5.75rem]',
        '93': 'rdoui-px-[5.8125rem]',
        '94': 'rdoui-px-[5.875rem]',
        '95': 'rdoui-px-[5.9375rem]',
        '96': 'rdoui-px-[6rem]',
      },
      paddingHorizontalMd: {
        '0': 'md:rdoui-px-[0rem]',
        '1': 'md:rdoui-px-[0.0625rem]',
        '2': 'md:rdoui-px-[0.125rem]',
        '3': 'md:rdoui-px-[0.1875rem]',
        '4': 'md:rdoui-px-[0.25rem]',
        '5': 'md:rdoui-px-[0.3125rem]',
        '6': 'md:rdoui-px-[0.375rem]',
        '7': 'md:rdoui-px-[0.4375rem]',
        '8': 'md:rdoui-px-[0.5rem]',
        '9': 'md:rdoui-px-[0.5625rem]',
        '10': 'md:rdoui-px-[0.625rem]',
        '11': 'md:rdoui-px-[0.6875rem]',
        '12': 'md:rdoui-px-[0.75rem]',
        '13': 'md:rdoui-px-[0.8125rem]',
        '14': 'md:rdoui-px-[0.875rem]',
        '15': 'md:rdoui-px-[0.9375rem]',
        '16': 'md:rdoui-px-[1rem]',
        '17': 'md:rdoui-px-[1.0625rem]',
        '18': 'md:rdoui-px-[1.125rem]',
        '19': 'md:rdoui-px-[1.1875rem]',
        '20': 'md:rdoui-px-[1.25rem]',
        '21': 'md:rdoui-px-[1.3125rem]',
        '22': 'md:rdoui-px-[1.375rem]',
        '23': 'md:rdoui-px-[1.4375rem]',
        '24': 'md:rdoui-px-[1.5rem]',
        '25': 'md:rdoui-px-[1.5625rem]',
        '26': 'md:rdoui-px-[1.625rem]',
        '27': 'md:rdoui-px-[1.6875rem]',
        '28': 'md:rdoui-px-[1.75rem]',
        '29': 'md:rdoui-px-[1.8125rem]',
        '30': 'md:rdoui-px-[1.875rem]',
        '31': 'md:rdoui-px-[1.9375rem]',
        '32': 'md:rdoui-px-[2rem]',
        '33': 'md:rdoui-px-[2.0625rem]',
        '34': 'md:rdoui-px-[2.125rem]',
        '35': 'md:rdoui-px-[2.1875rem]',
        '36': 'md:rdoui-px-[2.25rem]',
        '37': 'md:rdoui-px-[2.3125rem]',
        '38': 'md:rdoui-px-[2.375rem]',
        '39': 'md:rdoui-px-[2.4375rem]',
        '40': 'md:rdoui-px-[2.5rem]',
        '41': 'md:rdoui-px-[2.5625rem]',
        '42': 'md:rdoui-px-[2.625rem]',
        '43': 'md:rdoui-px-[2.6875rem]',
        '44': 'md:rdoui-px-[2.75rem]',
        '45': 'md:rdoui-px-[2.8125rem]',
        '46': 'md:rdoui-px-[2.875rem]',
        '47': 'md:rdoui-px-[2.9375rem]',
        '48': 'md:rdoui-px-[3rem]',
        '49': 'md:rdoui-px-[3.0625rem]',
        '50': 'md:rdoui-px-[3.125rem]',
        '51': 'md:rdoui-px-[3.1875rem]',
        '52': 'md:rdoui-px-[3.25rem]',
        '53': 'md:rdoui-px-[3.3125rem]',
        '54': 'md:rdoui-px-[3.375rem]',
        '55': 'md:rdoui-px-[3.4375rem]',
        '56': 'md:rdoui-px-[3.5rem]',
        '57': 'md:rdoui-px-[3.5625rem]',
        '58': 'md:rdoui-px-[3.625rem]',
        '59': 'md:rdoui-px-[3.6875rem]',
        '60': 'md:rdoui-px-[3.75rem]',
        '61': 'md:rdoui-px-[3.8125rem]',
        '62': 'md:rdoui-px-[3.875rem]',
        '63': 'md:rdoui-px-[3.9375rem]',
        '64': 'md:rdoui-px-[4rem]',
        '65': 'md:rdoui-px-[4.0625rem]',
        '66': 'md:rdoui-px-[4.125rem]',
        '67': 'md:rdoui-px-[4.1875rem]',
        '68': 'md:rdoui-px-[4.25rem]',
        '69': 'md:rdoui-px-[4.3125rem]',
        '70': 'md:rdoui-px-[4.375rem]',
        '71': 'md:rdoui-px-[4.4375rem]',
        '72': 'md:rdoui-px-[4.5rem]',
        '73': 'md:rdoui-px-[4.5625rem]',
        '74': 'md:rdoui-px-[4.625rem]',
        '75': 'md:rdoui-px-[4.6875rem]',
        '76': 'md:rdoui-px-[4.75rem]',
        '77': 'md:rdoui-px-[4.8125rem]',
        '78': 'md:rdoui-px-[4.875rem]',
        '79': 'md:rdoui-px-[4.9375rem]',
        '80': 'md:rdoui-px-[5rem]',
        '81': 'md:rdoui-px-[5.0625rem]',
        '82': 'md:rdoui-px-[5.125rem]',
        '83': 'md:rdoui-px-[5.1875rem]',
        '84': 'md:rdoui-px-[5.25rem]',
        '85': 'md:rdoui-px-[5.3125rem]',
        '86': 'md:rdoui-px-[5.375rem]',
        '87': 'md:rdoui-px-[5.4375rem]',
        '88': 'md:rdoui-px-[5.5rem]',
        '89': 'md:rdoui-px-[5.5625rem]',
        '90': 'md:rdoui-px-[5.625rem]',
        '91': 'md:rdoui-px-[5.6875rem]',
        '92': 'md:rdoui-px-[5.75rem]',
        '93': 'md:rdoui-px-[5.8125rem]',
        '94': 'md:rdoui-px-[5.875rem]',
        '95': 'md:rdoui-px-[5.9375rem]',
        '96': 'md:rdoui-px-[6rem]',
      },
      paddingHorizontalLg: {
        '0': 'lg:rdoui-px-[0rem]',
        '1': 'lg:rdoui-px-[0.0625rem]',
        '2': 'lg:rdoui-px-[0.125rem]',
        '3': 'lg:rdoui-px-[0.1875rem]',
        '4': 'lg:rdoui-px-[0.25rem]',
        '5': 'lg:rdoui-px-[0.3125rem]',
        '6': 'lg:rdoui-px-[0.375rem]',
        '7': 'lg:rdoui-px-[0.4375rem]',
        '8': 'lg:rdoui-px-[0.5rem]',
        '9': 'lg:rdoui-px-[0.5625rem]',
        '10': 'lg:rdoui-px-[0.625rem]',
        '11': 'lg:rdoui-px-[0.6875rem]',
        '12': 'lg:rdoui-px-[0.75rem]',
        '13': 'lg:rdoui-px-[0.8125rem]',
        '14': 'lg:rdoui-px-[0.875rem]',
        '15': 'lg:rdoui-px-[0.9375rem]',
        '16': 'lg:rdoui-px-[1rem]',
        '17': 'lg:rdoui-px-[1.0625rem]',
        '18': 'lg:rdoui-px-[1.125rem]',
        '19': 'lg:rdoui-px-[1.1875rem]',
        '20': 'lg:rdoui-px-[1.25rem]',
        '21': 'lg:rdoui-px-[1.3125rem]',
        '22': 'lg:rdoui-px-[1.375rem]',
        '23': 'lg:rdoui-px-[1.4375rem]',
        '24': 'lg:rdoui-px-[1.5rem]',
        '25': 'lg:rdoui-px-[1.5625rem]',
        '26': 'lg:rdoui-px-[1.625rem]',
        '27': 'lg:rdoui-px-[1.6875rem]',
        '28': 'lg:rdoui-px-[1.75rem]',
        '29': 'lg:rdoui-px-[1.8125rem]',
        '30': 'lg:rdoui-px-[1.875rem]',
        '31': 'lg:rdoui-px-[1.9375rem]',
        '32': 'lg:rdoui-px-[2rem]',
        '33': 'lg:rdoui-px-[2.0625rem]',
        '34': 'lg:rdoui-px-[2.125rem]',
        '35': 'lg:rdoui-px-[2.1875rem]',
        '36': 'lg:rdoui-px-[2.25rem]',
        '37': 'lg:rdoui-px-[2.3125rem]',
        '38': 'lg:rdoui-px-[2.375rem]',
        '39': 'lg:rdoui-px-[2.4375rem]',
        '40': 'lg:rdoui-px-[2.5rem]',
        '41': 'lg:rdoui-px-[2.5625rem]',
        '42': 'lg:rdoui-px-[2.625rem]',
        '43': 'lg:rdoui-px-[2.6875rem]',
        '44': 'lg:rdoui-px-[2.75rem]',
        '45': 'lg:rdoui-px-[2.8125rem]',
        '46': 'lg:rdoui-px-[2.875rem]',
        '47': 'lg:rdoui-px-[2.9375rem]',
        '48': 'lg:rdoui-px-[3rem]',
        '49': 'lg:rdoui-px-[3.0625rem]',
        '50': 'lg:rdoui-px-[3.125rem]',
        '51': 'lg:rdoui-px-[3.1875rem]',
        '52': 'lg:rdoui-px-[3.25rem]',
        '53': 'lg:rdoui-px-[3.3125rem]',
        '54': 'lg:rdoui-px-[3.375rem]',
        '55': 'lg:rdoui-px-[3.4375rem]',
        '56': 'lg:rdoui-px-[3.5rem]',
        '57': 'lg:rdoui-px-[3.5625rem]',
        '58': 'lg:rdoui-px-[3.625rem]',
        '59': 'lg:rdoui-px-[3.6875rem]',
        '60': 'lg:rdoui-px-[3.75rem]',
        '61': 'lg:rdoui-px-[3.8125rem]',
        '62': 'lg:rdoui-px-[3.875rem]',
        '63': 'lg:rdoui-px-[3.9375rem]',
        '64': 'lg:rdoui-px-[4rem]',
        '65': 'lg:rdoui-px-[4.0625rem]',
        '66': 'lg:rdoui-px-[4.125rem]',
        '67': 'lg:rdoui-px-[4.1875rem]',
        '68': 'lg:rdoui-px-[4.25rem]',
        '69': 'lg:rdoui-px-[4.3125rem]',
        '70': 'lg:rdoui-px-[4.375rem]',
        '71': 'lg:rdoui-px-[4.4375rem]',
        '72': 'lg:rdoui-px-[4.5rem]',
        '73': 'lg:rdoui-px-[4.5625rem]',
        '74': 'lg:rdoui-px-[4.625rem]',
        '75': 'lg:rdoui-px-[4.6875rem]',
        '76': 'lg:rdoui-px-[4.75rem]',
        '77': 'lg:rdoui-px-[4.8125rem]',
        '78': 'lg:rdoui-px-[4.875rem]',
        '79': 'lg:rdoui-px-[4.9375rem]',
        '80': 'lg:rdoui-px-[5rem]',
        '81': 'lg:rdoui-px-[5.0625rem]',
        '82': 'lg:rdoui-px-[5.125rem]',
        '83': 'lg:rdoui-px-[5.1875rem]',
        '84': 'lg:rdoui-px-[5.25rem]',
        '85': 'lg:rdoui-px-[5.3125rem]',
        '86': 'lg:rdoui-px-[5.375rem]',
        '87': 'lg:rdoui-px-[5.4375rem]',
        '88': 'lg:rdoui-px-[5.5rem]',
        '89': 'lg:rdoui-px-[5.5625rem]',
        '90': 'lg:rdoui-px-[5.625rem]',
        '91': 'lg:rdoui-px-[5.6875rem]',
        '92': 'lg:rdoui-px-[5.75rem]',
        '93': 'lg:rdoui-px-[5.8125rem]',
        '94': 'lg:rdoui-px-[5.875rem]',
        '95': 'lg:rdoui-px-[5.9375rem]',
        '96': 'lg:rdoui-px-[6rem]',
      },
      paddingVertical: {
        '0': 'rdoui-py-[0rem]',
        '1': 'rdoui-py-[0.0625rem]',
        '2': 'rdoui-py-[0.125rem]',
        '3': 'rdoui-py-[0.1875rem]',
        '4': 'rdoui-py-[0.25rem]',
        '5': 'rdoui-py-[0.3125rem]',
        '6': 'rdoui-py-[0.375rem]',
        '7': 'rdoui-py-[0.4375rem]',
        '8': 'rdoui-py-[0.5rem]',
        '9': 'rdoui-py-[0.5625rem]',
        '10': 'rdoui-py-[0.625rem]',
        '11': 'rdoui-py-[0.6875rem]',
        '12': 'rdoui-py-[0.75rem]',
        '13': 'rdoui-py-[0.8125rem]',
        '14': 'rdoui-py-[0.875rem]',
        '15': 'rdoui-py-[0.9375rem]',
        '16': 'rdoui-py-[1rem]',
        '17': 'rdoui-py-[1.0625rem]',
        '18': 'rdoui-py-[1.125rem]',
        '19': 'rdoui-py-[1.1875rem]',
        '20': 'rdoui-py-[1.25rem]',
        '21': 'rdoui-py-[1.3125rem]',
        '22': 'rdoui-py-[1.375rem]',
        '23': 'rdoui-py-[1.4375rem]',
        '24': 'rdoui-py-[1.5rem]',
        '25': 'rdoui-py-[1.5625rem]',
        '26': 'rdoui-py-[1.625rem]',
        '27': 'rdoui-py-[1.6875rem]',
        '28': 'rdoui-py-[1.75rem]',
        '29': 'rdoui-py-[1.8125rem]',
        '30': 'rdoui-py-[1.875rem]',
        '31': 'rdoui-py-[1.9375rem]',
        '32': 'rdoui-py-[2rem]',
        '33': 'rdoui-py-[2.0625rem]',
        '34': 'rdoui-py-[2.125rem]',
        '35': 'rdoui-py-[2.1875rem]',
        '36': 'rdoui-py-[2.25rem]',
        '37': 'rdoui-py-[2.3125rem]',
        '38': 'rdoui-py-[2.375rem]',
        '39': 'rdoui-py-[2.4375rem]',
        '40': 'rdoui-py-[2.5rem]',
        '41': 'rdoui-py-[2.5625rem]',
        '42': 'rdoui-py-[2.625rem]',
        '43': 'rdoui-py-[2.6875rem]',
        '44': 'rdoui-py-[2.75rem]',
        '45': 'rdoui-py-[2.8125rem]',
        '46': 'rdoui-py-[2.875rem]',
        '47': 'rdoui-py-[2.9375rem]',
        '48': 'rdoui-py-[3rem]',
        '49': 'rdoui-py-[3.0625rem]',
        '50': 'rdoui-py-[3.125rem]',
        '51': 'rdoui-py-[3.1875rem]',
        '52': 'rdoui-py-[3.25rem]',
        '53': 'rdoui-py-[3.3125rem]',
        '54': 'rdoui-py-[3.375rem]',
        '55': 'rdoui-py-[3.4375rem]',
        '56': 'rdoui-py-[3.5rem]',
        '57': 'rdoui-py-[3.5625rem]',
        '58': 'rdoui-py-[3.625rem]',
        '59': 'rdoui-py-[3.6875rem]',
        '60': 'rdoui-py-[3.75rem]',
        '61': 'rdoui-py-[3.8125rem]',
        '62': 'rdoui-py-[3.875rem]',
        '63': 'rdoui-py-[3.9375rem]',
        '64': 'rdoui-py-[4rem]',
        '65': 'rdoui-py-[4.0625rem]',
        '66': 'rdoui-py-[4.125rem]',
        '67': 'rdoui-py-[4.1875rem]',
        '68': 'rdoui-py-[4.25rem]',
        '69': 'rdoui-py-[4.3125rem]',
        '70': 'rdoui-py-[4.375rem]',
        '71': 'rdoui-py-[4.4375rem]',
        '72': 'rdoui-py-[4.5rem]',
        '73': 'rdoui-py-[4.5625rem]',
        '74': 'rdoui-py-[4.625rem]',
        '75': 'rdoui-py-[4.6875rem]',
        '76': 'rdoui-py-[4.75rem]',
        '77': 'rdoui-py-[4.8125rem]',
        '78': 'rdoui-py-[4.875rem]',
        '79': 'rdoui-py-[4.9375rem]',
        '80': 'rdoui-py-[5rem]',
        '81': 'rdoui-py-[5.0625rem]',
        '82': 'rdoui-py-[5.125rem]',
        '83': 'rdoui-py-[5.1875rem]',
        '84': 'rdoui-py-[5.25rem]',
        '85': 'rdoui-py-[5.3125rem]',
        '86': 'rdoui-py-[5.375rem]',
        '87': 'rdoui-py-[5.4375rem]',
        '88': 'rdoui-py-[5.5rem]',
        '89': 'rdoui-py-[5.5625rem]',
        '90': 'rdoui-py-[5.625rem]',
        '91': 'rdoui-py-[5.6875rem]',
        '92': 'rdoui-py-[5.75rem]',
        '93': 'rdoui-py-[5.8125rem]',
        '94': 'rdoui-py-[5.875rem]',
        '95': 'rdoui-py-[5.9375rem]',
        '96': 'rdoui-py-[6rem]',
      },
      paddingVerticalMd: {
        '0': 'md:rdoui-py-[0rem]',
        '1': 'md:rdoui-py-[0.0625rem]',
        '2': 'md:rdoui-py-[0.125rem]',
        '3': 'md:rdoui-py-[0.1875rem]',
        '4': 'md:rdoui-py-[0.25rem]',
        '5': 'md:rdoui-py-[0.3125rem]',
        '6': 'md:rdoui-py-[0.375rem]',
        '7': 'md:rdoui-py-[0.4375rem]',
        '8': 'md:rdoui-py-[0.5rem]',
        '9': 'md:rdoui-py-[0.5625rem]',
        '10': 'md:rdoui-py-[0.625rem]',
        '11': 'md:rdoui-py-[0.6875rem]',
        '12': 'md:rdoui-py-[0.75rem]',
        '13': 'md:rdoui-py-[0.8125rem]',
        '14': 'md:rdoui-py-[0.875rem]',
        '15': 'md:rdoui-py-[0.9375rem]',
        '16': 'md:rdoui-py-[1rem]',
        '17': 'md:rdoui-py-[1.0625rem]',
        '18': 'md:rdoui-py-[1.125rem]',
        '19': 'md:rdoui-py-[1.1875rem]',
        '20': 'md:rdoui-py-[1.25rem]',
        '21': 'md:rdoui-py-[1.3125rem]',
        '22': 'md:rdoui-py-[1.375rem]',
        '23': 'md:rdoui-py-[1.4375rem]',
        '24': 'md:rdoui-py-[1.5rem]',
        '25': 'md:rdoui-py-[1.5625rem]',
        '26': 'md:rdoui-py-[1.625rem]',
        '27': 'md:rdoui-py-[1.6875rem]',
        '28': 'md:rdoui-py-[1.75rem]',
        '29': 'md:rdoui-py-[1.8125rem]',
        '30': 'md:rdoui-py-[1.875rem]',
        '31': 'md:rdoui-py-[1.9375rem]',
        '32': 'md:rdoui-py-[2rem]',
        '33': 'md:rdoui-py-[2.0625rem]',
        '34': 'md:rdoui-py-[2.125rem]',
        '35': 'md:rdoui-py-[2.1875rem]',
        '36': 'md:rdoui-py-[2.25rem]',
        '37': 'md:rdoui-py-[2.3125rem]',
        '38': 'md:rdoui-py-[2.375rem]',
        '39': 'md:rdoui-py-[2.4375rem]',
        '40': 'md:rdoui-py-[2.5rem]',
        '41': 'md:rdoui-py-[2.5625rem]',
        '42': 'md:rdoui-py-[2.625rem]',
        '43': 'md:rdoui-py-[2.6875rem]',
        '44': 'md:rdoui-py-[2.75rem]',
        '45': 'md:rdoui-py-[2.8125rem]',
        '46': 'md:rdoui-py-[2.875rem]',
        '47': 'md:rdoui-py-[2.9375rem]',
        '48': 'md:rdoui-py-[3rem]',
        '49': 'md:rdoui-py-[3.0625rem]',
        '50': 'md:rdoui-py-[3.125rem]',
        '51': 'md:rdoui-py-[3.1875rem]',
        '52': 'md:rdoui-py-[3.25rem]',
        '53': 'md:rdoui-py-[3.3125rem]',
        '54': 'md:rdoui-py-[3.375rem]',
        '55': 'md:rdoui-py-[3.4375rem]',
        '56': 'md:rdoui-py-[3.5rem]',
        '57': 'md:rdoui-py-[3.5625rem]',
        '58': 'md:rdoui-py-[3.625rem]',
        '59': 'md:rdoui-py-[3.6875rem]',
        '60': 'md:rdoui-py-[3.75rem]',
        '61': 'md:rdoui-py-[3.8125rem]',
        '62': 'md:rdoui-py-[3.875rem]',
        '63': 'md:rdoui-py-[3.9375rem]',
        '64': 'md:rdoui-py-[4rem]',
        '65': 'md:rdoui-py-[4.0625rem]',
        '66': 'md:rdoui-py-[4.125rem]',
        '67': 'md:rdoui-py-[4.1875rem]',
        '68': 'md:rdoui-py-[4.25rem]',
        '69': 'md:rdoui-py-[4.3125rem]',
        '70': 'md:rdoui-py-[4.375rem]',
        '71': 'md:rdoui-py-[4.4375rem]',
        '72': 'md:rdoui-py-[4.5rem]',
        '73': 'md:rdoui-py-[4.5625rem]',
        '74': 'md:rdoui-py-[4.625rem]',
        '75': 'md:rdoui-py-[4.6875rem]',
        '76': 'md:rdoui-py-[4.75rem]',
        '77': 'md:rdoui-py-[4.8125rem]',
        '78': 'md:rdoui-py-[4.875rem]',
        '79': 'md:rdoui-py-[4.9375rem]',
        '80': 'md:rdoui-py-[5rem]',
        '81': 'md:rdoui-py-[5.0625rem]',
        '82': 'md:rdoui-py-[5.125rem]',
        '83': 'md:rdoui-py-[5.1875rem]',
        '84': 'md:rdoui-py-[5.25rem]',
        '85': 'md:rdoui-py-[5.3125rem]',
        '86': 'md:rdoui-py-[5.375rem]',
        '87': 'md:rdoui-py-[5.4375rem]',
        '88': 'md:rdoui-py-[5.5rem]',
        '89': 'md:rdoui-py-[5.5625rem]',
        '90': 'md:rdoui-py-[5.625rem]',
        '91': 'md:rdoui-py-[5.6875rem]',
        '92': 'md:rdoui-py-[5.75rem]',
        '93': 'md:rdoui-py-[5.8125rem]',
        '94': 'md:rdoui-py-[5.875rem]',
        '95': 'md:rdoui-py-[5.9375rem]',
        '96': 'md:rdoui-py-[6rem]',
      },
      paddingVerticalLg: {
        '0': 'lg:rdoui-py-[0rem]',
        '1': 'lg:rdoui-py-[0.0625rem]',
        '2': 'lg:rdoui-py-[0.125rem]',
        '3': 'lg:rdoui-py-[0.1875rem]',
        '4': 'lg:rdoui-py-[0.25rem]',
        '5': 'lg:rdoui-py-[0.3125rem]',
        '6': 'lg:rdoui-py-[0.375rem]',
        '7': 'lg:rdoui-py-[0.4375rem]',
        '8': 'lg:rdoui-py-[0.5rem]',
        '9': 'lg:rdoui-py-[0.5625rem]',
        '10': 'lg:rdoui-py-[0.625rem]',
        '11': 'lg:rdoui-py-[0.6875rem]',
        '12': 'lg:rdoui-py-[0.75rem]',
        '13': 'lg:rdoui-py-[0.8125rem]',
        '14': 'lg:rdoui-py-[0.875rem]',
        '15': 'lg:rdoui-py-[0.9375rem]',
        '16': 'lg:rdoui-py-[1rem]',
        '17': 'lg:rdoui-py-[1.0625rem]',
        '18': 'lg:rdoui-py-[1.125rem]',
        '19': 'lg:rdoui-py-[1.1875rem]',
        '20': 'lg:rdoui-py-[1.25rem]',
        '21': 'lg:rdoui-py-[1.3125rem]',
        '22': 'lg:rdoui-py-[1.375rem]',
        '23': 'lg:rdoui-py-[1.4375rem]',
        '24': 'lg:rdoui-py-[1.5rem]',
        '25': 'lg:rdoui-py-[1.5625rem]',
        '26': 'lg:rdoui-py-[1.625rem]',
        '27': 'lg:rdoui-py-[1.6875rem]',
        '28': 'lg:rdoui-py-[1.75rem]',
        '29': 'lg:rdoui-py-[1.8125rem]',
        '30': 'lg:rdoui-py-[1.875rem]',
        '31': 'lg:rdoui-py-[1.9375rem]',
        '32': 'lg:rdoui-py-[2rem]',
        '33': 'lg:rdoui-py-[2.0625rem]',
        '34': 'lg:rdoui-py-[2.125rem]',
        '35': 'lg:rdoui-py-[2.1875rem]',
        '36': 'lg:rdoui-py-[2.25rem]',
        '37': 'lg:rdoui-py-[2.3125rem]',
        '38': 'lg:rdoui-py-[2.375rem]',
        '39': 'lg:rdoui-py-[2.4375rem]',
        '40': 'lg:rdoui-py-[2.5rem]',
        '41': 'lg:rdoui-py-[2.5625rem]',
        '42': 'lg:rdoui-py-[2.625rem]',
        '43': 'lg:rdoui-py-[2.6875rem]',
        '44': 'lg:rdoui-py-[2.75rem]',
        '45': 'lg:rdoui-py-[2.8125rem]',
        '46': 'lg:rdoui-py-[2.875rem]',
        '47': 'lg:rdoui-py-[2.9375rem]',
        '48': 'lg:rdoui-py-[3rem]',
        '49': 'lg:rdoui-py-[3.0625rem]',
        '50': 'lg:rdoui-py-[3.125rem]',
        '51': 'lg:rdoui-py-[3.1875rem]',
        '52': 'lg:rdoui-py-[3.25rem]',
        '53': 'lg:rdoui-py-[3.3125rem]',
        '54': 'lg:rdoui-py-[3.375rem]',
        '55': 'lg:rdoui-py-[3.4375rem]',
        '56': 'lg:rdoui-py-[3.5rem]',
        '57': 'lg:rdoui-py-[3.5625rem]',
        '58': 'lg:rdoui-py-[3.625rem]',
        '59': 'lg:rdoui-py-[3.6875rem]',
        '60': 'lg:rdoui-py-[3.75rem]',
        '61': 'lg:rdoui-py-[3.8125rem]',
        '62': 'lg:rdoui-py-[3.875rem]',
        '63': 'lg:rdoui-py-[3.9375rem]',
        '64': 'lg:rdoui-py-[4rem]',
        '65': 'lg:rdoui-py-[4.0625rem]',
        '66': 'lg:rdoui-py-[4.125rem]',
        '67': 'lg:rdoui-py-[4.1875rem]',
        '68': 'lg:rdoui-py-[4.25rem]',
        '69': 'lg:rdoui-py-[4.3125rem]',
        '70': 'lg:rdoui-py-[4.375rem]',
        '71': 'lg:rdoui-py-[4.4375rem]',
        '72': 'lg:rdoui-py-[4.5rem]',
        '73': 'lg:rdoui-py-[4.5625rem]',
        '74': 'lg:rdoui-py-[4.625rem]',
        '75': 'lg:rdoui-py-[4.6875rem]',
        '76': 'lg:rdoui-py-[4.75rem]',
        '77': 'lg:rdoui-py-[4.8125rem]',
        '78': 'lg:rdoui-py-[4.875rem]',
        '79': 'lg:rdoui-py-[4.9375rem]',
        '80': 'lg:rdoui-py-[5rem]',
        '81': 'lg:rdoui-py-[5.0625rem]',
        '82': 'lg:rdoui-py-[5.125rem]',
        '83': 'lg:rdoui-py-[5.1875rem]',
        '84': 'lg:rdoui-py-[5.25rem]',
        '85': 'lg:rdoui-py-[5.3125rem]',
        '86': 'lg:rdoui-py-[5.375rem]',
        '87': 'lg:rdoui-py-[5.4375rem]',
        '88': 'lg:rdoui-py-[5.5rem]',
        '89': 'lg:rdoui-py-[5.5625rem]',
        '90': 'lg:rdoui-py-[5.625rem]',
        '91': 'lg:rdoui-py-[5.6875rem]',
        '92': 'lg:rdoui-py-[5.75rem]',
        '93': 'lg:rdoui-py-[5.8125rem]',
        '94': 'lg:rdoui-py-[5.875rem]',
        '95': 'lg:rdoui-py-[5.9375rem]',
        '96': 'lg:rdoui-py-[6rem]',
      },
      buttonType: {
        filled: 'rdoui-border-none',
        ghosted:
          'rdoui-bg-[transparent] rdoui-px-[0_!important] rdoui-py-[0_!important] rdoui-border-none',
        bordered: 'rdoui-border-[1px] rdoui-border-solid',
      },
      disabled: {
        true: 'rdoui-opacity-30 rdoui-cursor-[not-allowed_!important]',
        false: '',
      },
      isLoading: {
        true: 'rdoui-cursor-[not-allowed_!important]',
        false: '',
      },
    },
    defaultVariants: {
      paddingHorizontal: '16',
      paddingHorizontalMd: '16',
      paddingHorizontalLg: '16',
      paddingVertical: '8',
      paddingVerticalMd: '8',
      paddingVerticalLg: '8',
      buttonType: 'filled',
      disabled: false,
      isLoading: false,
    },
  },
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    paddingHorizontal?:
      | VariantProps<typeof buttonStyles>['paddingHorizontal']
      | VariantProps<typeof buttonStyles>['paddingHorizontal'][]
    paddingVertical?:
      | VariantProps<typeof buttonStyles>['paddingVertical']
      | VariantProps<typeof buttonStyles>['paddingVertical'][]
    isLoading?: boolean
    className?: string
    label?: string
    labelProps?: Omit<TextProps, 'children'>
    iconLeft?: IconProps
    iconRight?: IconProps
  }
export function Button({
  isLoading,
  className,
  disabled,
  paddingHorizontal,
  paddingVertical,
  label,
  labelProps,
  iconLeft,
  iconRight,
  buttonType,
  ...rest
}: ButtonProps) {
  function Loading() {
    return (
      <svg
        aria-hidden="true"
        role="status"
        className="rdoui-inline rdoui-w-4 rdoui-h-4 rdoui-text-white rdoui-animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  function ButtonContent() {
    return (
      <>
        {iconLeft && <Icon {...iconLeft} />}
        {label && <Text {...labelProps}>{label}</Text>}
        {iconRight && <Icon {...iconRight} />}
      </>
    )
  }

  return (
    <button
      {...rest}
      className={buttonStyles({
        className,
        paddingHorizontal: renderResponsizeProp(paddingHorizontal, 'sm'),
        paddingHorizontalMd: renderResponsizeProp(paddingHorizontal, 'md'),
        paddingHorizontalLg: renderResponsizeProp(paddingHorizontal, 'lg'),
        paddingVertical: renderResponsizeProp(paddingVertical, 'sm'),
        paddingVerticalMd: renderResponsizeProp(paddingVertical, 'md'),
        paddingVerticalLg: renderResponsizeProp(paddingVertical, 'lg'),
        buttonType,
        disabled,
        isLoading,
      })}
      disabled={isLoading || disabled}
    >
      {isLoading ? <Loading /> : <ButtonContent />}
    </button>
  )
}
