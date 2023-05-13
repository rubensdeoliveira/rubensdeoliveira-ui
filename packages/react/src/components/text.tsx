import { ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'

const textStyles = cva('', {
  variants: {
    fontSize: {
      '0': 'text-[0rem]',
      '1': 'text-[0.0625rem]',
      '2': 'text-[0.125rem]',
      '3': 'text-[0.1875rem]',
      '4': 'text-[0.25rem]',
      '5': 'text-[0.3125rem]',
      '6': 'text-[0.375rem]',
      '7': 'text-[0.4375rem]',
      '8': 'text-[0.5rem]',
      '9': 'text-[0.5625rem]',
      '10': 'text-[0.625rem]',
      '11': 'text-[0.6875rem]',
      '12': 'text-[0.75rem]',
      '13': 'text-[0.8125rem]',
      '14': 'text-[0.875rem]',
      '15': 'text-[0.9375rem]',
      '16': 'text-[1rem]',
      '17': 'text-[1.0625rem]',
      '18': 'text-[1.125rem]',
      '19': 'text-[1.1875rem]',
      '20': 'text-[1.25rem]',
      '21': 'text-[1.3125rem]',
      '22': 'text-[1.375rem]',
      '23': 'text-[1.4375rem]',
      '24': 'text-[1.5rem]',
      '25': 'text-[1.5625rem]',
      '26': 'text-[1.625rem]',
      '27': 'text-[1.6875rem]',
      '28': 'text-[1.75rem]',
      '29': 'text-[1.8125rem]',
      '30': 'text-[1.875rem]',
      '31': 'text-[1.9375rem]',
      '32': 'text-[2rem]',
      '33': 'text-[2.0625rem]',
      '34': 'text-[2.125rem]',
      '35': 'text-[2.1875rem]',
      '36': 'text-[2.25rem]',
      '37': 'text-[2.3125rem]',
      '38': 'text-[2.375rem]',
      '39': 'text-[2.4375rem]',
      '40': 'text-[2.5rem]',
      '41': 'text-[2.5625rem]',
      '42': 'text-[2.625rem]',
      '43': 'text-[2.6875rem]',
      '44': 'text-[2.75rem]',
      '45': 'text-[2.8125rem]',
      '46': 'text-[2.875rem]',
      '47': 'text-[2.9375rem]',
      '48': 'text-[3rem]',
      '49': 'text-[3.0625rem]',
      '50': 'text-[3.125rem]',
      '51': 'text-[3.1875rem]',
      '52': 'text-[3.25rem]',
      '53': 'text-[3.3125rem]',
      '54': 'text-[3.375rem]',
      '55': 'text-[3.4375rem]',
      '56': 'text-[3.5rem]',
      '57': 'text-[3.5625rem]',
      '58': 'text-[3.625rem]',
      '59': 'text-[3.6875rem]',
      '60': 'text-[3.75rem]',
      '61': 'text-[3.8125rem]',
      '62': 'text-[3.875rem]',
      '63': 'text-[3.9375rem]',
      '64': 'text-[4rem]',
      '65': 'text-[4.0625rem]',
      '66': 'text-[4.125rem]',
      '67': 'text-[4.1875rem]',
      '68': 'text-[4.25rem]',
      '69': 'text-[4.3125rem]',
      '70': 'text-[4.375rem]',
      '71': 'text-[4.4375rem]',
      '72': 'text-[4.5rem]',
      '73': 'text-[4.5625rem]',
      '74': 'text-[4.625rem]',
      '75': 'text-[4.6875rem]',
      '76': 'text-[4.75rem]',
      '77': 'text-[4.8125rem]',
      '78': 'text-[4.875rem]',
      '79': 'text-[4.9375rem]',
      '80': 'text-[5rem]',
      '81': 'text-[5.0625rem]',
      '82': 'text-[5.125rem]',
      '83': 'text-[5.1875rem]',
      '84': 'text-[5.25rem]',
      '85': 'text-[5.3125rem]',
      '86': 'text-[5.375rem]',
      '87': 'text-[5.4375rem]',
      '88': 'text-[5.5rem]',
      '89': 'text-[5.5625rem]',
      '90': 'text-[5.625rem]',
      '91': 'text-[5.6875rem]',
      '92': 'text-[5.75rem]',
      '93': 'text-[5.8125rem]',
      '94': 'text-[5.875rem]',
      '95': 'text-[5.9375rem]',
      '96': 'text-[6rem]'
    },
    fontSizeMd: {
      '0': 'md:text-[0rem]',
      '1': 'md:text-[0.0625rem]',
      '2': 'md:text-[0.125rem]',
      '3': 'md:text-[0.1875rem]',
      '4': 'md:text-[0.25rem]',
      '5': 'md:text-[0.3125rem]',
      '6': 'md:text-[0.375rem]',
      '7': 'md:text-[0.4375rem]',
      '8': 'md:text-[0.5rem]',
      '9': 'md:text-[0.5625rem]',
      '10': 'md:text-[0.625rem]',
      '11': 'md:text-[0.6875rem]',
      '12': 'md:text-[0.75rem]',
      '13': 'md:text-[0.8125rem]',
      '14': 'md:text-[0.875rem]',
      '15': 'md:text-[0.9375rem]',
      '16': 'md:text-[1rem]',
      '17': 'md:text-[1.0625rem]',
      '18': 'md:text-[1.125rem]',
      '19': 'md:text-[1.1875rem]',
      '20': 'md:text-[1.25rem]',
      '21': 'md:text-[1.3125rem]',
      '22': 'md:text-[1.375rem]',
      '23': 'md:text-[1.4375rem]',
      '24': 'md:text-[1.5rem]',
      '25': 'md:text-[1.5625rem]',
      '26': 'md:text-[1.625rem]',
      '27': 'md:text-[1.6875rem]',
      '28': 'md:text-[1.75rem]',
      '29': 'md:text-[1.8125rem]',
      '30': 'md:text-[1.875rem]',
      '31': 'md:text-[1.9375rem]',
      '32': 'md:text-[2rem]',
      '33': 'md:text-[2.0625rem]',
      '34': 'md:text-[2.125rem]',
      '35': 'md:text-[2.1875rem]',
      '36': 'md:text-[2.25rem]',
      '37': 'md:text-[2.3125rem]',
      '38': 'md:text-[2.375rem]',
      '39': 'md:text-[2.4375rem]',
      '40': 'md:text-[2.5rem]',
      '41': 'md:text-[2.5625rem]',
      '42': 'md:text-[2.625rem]',
      '43': 'md:text-[2.6875rem]',
      '44': 'md:text-[2.75rem]',
      '45': 'md:text-[2.8125rem]',
      '46': 'md:text-[2.875rem]',
      '47': 'md:text-[2.9375rem]',
      '48': 'md:text-[3rem]',
      '49': 'md:text-[3.0625rem]',
      '50': 'md:text-[3.125rem]',
      '51': 'md:text-[3.1875rem]',
      '52': 'md:text-[3.25rem]',
      '53': 'md:text-[3.3125rem]',
      '54': 'md:text-[3.375rem]',
      '55': 'md:text-[3.4375rem]',
      '56': 'md:text-[3.5rem]',
      '57': 'md:text-[3.5625rem]',
      '58': 'md:text-[3.625rem]',
      '59': 'md:text-[3.6875rem]',
      '60': 'md:text-[3.75rem]',
      '61': 'md:text-[3.8125rem]',
      '62': 'md:text-[3.875rem]',
      '63': 'md:text-[3.9375rem]',
      '64': 'md:text-[4rem]',
      '65': 'md:text-[4.0625rem]',
      '66': 'md:text-[4.125rem]',
      '67': 'md:text-[4.1875rem]',
      '68': 'md:text-[4.25rem]',
      '69': 'md:text-[4.3125rem]',
      '70': 'md:text-[4.375rem]',
      '71': 'md:text-[4.4375rem]',
      '72': 'md:text-[4.5rem]',
      '73': 'md:text-[4.5625rem]',
      '74': 'md:text-[4.625rem]',
      '75': 'md:text-[4.6875rem]',
      '76': 'md:text-[4.75rem]',
      '77': 'md:text-[4.8125rem]',
      '78': 'md:text-[4.875rem]',
      '79': 'md:text-[4.9375rem]',
      '80': 'md:text-[5rem]',
      '81': 'md:text-[5.0625rem]',
      '82': 'md:text-[5.125rem]',
      '83': 'md:text-[5.1875rem]',
      '84': 'md:text-[5.25rem]',
      '85': 'md:text-[5.3125rem]',
      '86': 'md:text-[5.375rem]',
      '87': 'md:text-[5.4375rem]',
      '88': 'md:text-[5.5rem]',
      '89': 'md:text-[5.5625rem]',
      '90': 'md:text-[5.625rem]',
      '91': 'md:text-[5.6875rem]',
      '92': 'md:text-[5.75rem]',
      '93': 'md:text-[5.8125rem]',
      '94': 'md:text-[5.875rem]',
      '95': 'md:text-[5.9375rem]',
      '96': 'md:text-[6rem]'
    },
    fontSizeLg: {
      '0': 'lg:text-[0rem]',
      '1': 'lg:text-[0.0625rem]',
      '2': 'lg:text-[0.125rem]',
      '3': 'lg:text-[0.1875rem]',
      '4': 'lg:text-[0.25rem]',
      '5': 'lg:text-[0.3125rem]',
      '6': 'lg:text-[0.375rem]',
      '7': 'lg:text-[0.4375rem]',
      '8': 'lg:text-[0.5rem]',
      '9': 'lg:text-[0.5625rem]',
      '10': 'lg:text-[0.625rem]',
      '11': 'lg:text-[0.6875rem]',
      '12': 'lg:text-[0.75rem]',
      '13': 'lg:text-[0.8125rem]',
      '14': 'lg:text-[0.875rem]',
      '15': 'lg:text-[0.9375rem]',
      '16': 'lg:text-[1rem]',
      '17': 'lg:text-[1.0625rem]',
      '18': 'lg:text-[1.125rem]',
      '19': 'lg:text-[1.1875rem]',
      '20': 'lg:text-[1.25rem]',
      '21': 'lg:text-[1.3125rem]',
      '22': 'lg:text-[1.375rem]',
      '23': 'lg:text-[1.4375rem]',
      '24': 'lg:text-[1.5rem]',
      '25': 'lg:text-[1.5625rem]',
      '26': 'lg:text-[1.625rem]',
      '27': 'lg:text-[1.6875rem]',
      '28': 'lg:text-[1.75rem]',
      '29': 'lg:text-[1.8125rem]',
      '30': 'lg:text-[1.875rem]',
      '31': 'lg:text-[1.9375rem]',
      '32': 'lg:text-[2rem]',
      '33': 'lg:text-[2.0625rem]',
      '34': 'lg:text-[2.125rem]',
      '35': 'lg:text-[2.1875rem]',
      '36': 'lg:text-[2.25rem]',
      '37': 'lg:text-[2.3125rem]',
      '38': 'lg:text-[2.375rem]',
      '39': 'lg:text-[2.4375rem]',
      '40': 'lg:text-[2.5rem]',
      '41': 'lg:text-[2.5625rem]',
      '42': 'lg:text-[2.625rem]',
      '43': 'lg:text-[2.6875rem]',
      '44': 'lg:text-[2.75rem]',
      '45': 'lg:text-[2.8125rem]',
      '46': 'lg:text-[2.875rem]',
      '47': 'lg:text-[2.9375rem]',
      '48': 'lg:text-[3rem]',
      '49': 'lg:text-[3.0625rem]',
      '50': 'lg:text-[3.125rem]',
      '51': 'lg:text-[3.1875rem]',
      '52': 'lg:text-[3.25rem]',
      '53': 'lg:text-[3.3125rem]',
      '54': 'lg:text-[3.375rem]',
      '55': 'lg:text-[3.4375rem]',
      '56': 'lg:text-[3.5rem]',
      '57': 'lg:text-[3.5625rem]',
      '58': 'lg:text-[3.625rem]',
      '59': 'lg:text-[3.6875rem]',
      '60': 'lg:text-[3.75rem]',
      '61': 'lg:text-[3.8125rem]',
      '62': 'lg:text-[3.875rem]',
      '63': 'lg:text-[3.9375rem]',
      '64': 'lg:text-[4rem]',
      '65': 'lg:text-[4.0625rem]',
      '66': 'lg:text-[4.125rem]',
      '67': 'lg:text-[4.1875rem]',
      '68': 'lg:text-[4.25rem]',
      '69': 'lg:text-[4.3125rem]',
      '70': 'lg:text-[4.375rem]',
      '71': 'lg:text-[4.4375rem]',
      '72': 'lg:text-[4.5rem]',
      '73': 'lg:text-[4.5625rem]',
      '74': 'lg:text-[4.625rem]',
      '75': 'lg:text-[4.6875rem]',
      '76': 'lg:text-[4.75rem]',
      '77': 'lg:text-[4.8125rem]',
      '78': 'lg:text-[4.875rem]',
      '79': 'lg:text-[4.9375rem]',
      '80': 'lg:text-[5rem]',
      '81': 'lg:text-[5.0625rem]',
      '82': 'lg:text-[5.125rem]',
      '83': 'lg:text-[5.1875rem]',
      '84': 'lg:text-[5.25rem]',
      '85': 'lg:text-[5.3125rem]',
      '86': 'lg:text-[5.375rem]',
      '87': 'lg:text-[5.4375rem]',
      '88': 'lg:text-[5.5rem]',
      '89': 'lg:text-[5.5625rem]',
      '90': 'lg:text-[5.625rem]',
      '91': 'lg:text-[5.6875rem]',
      '92': 'lg:text-[5.75rem]',
      '93': 'lg:text-[5.8125rem]',
      '94': 'lg:text-[5.875rem]',
      '95': 'lg:text-[5.9375rem]',
      '96': 'lg:text-[6rem]'
    },
    fontWeight: {
      '300': 'font-[300]',
      '400': 'font-[400]',
      '500': 'font-[500]',
      '600': 'font-[600]',
      '700': 'font-[700]',
      '800': 'font-[800]',
      '900': 'font-[900]'
    },
    fontWeightMd: {
      '300': 'md:font-[300]',
      '400': 'md:font-[400]',
      '500': 'md:font-[500]',
      '600': 'md:font-[600]',
      '700': 'md:font-[700]',
      '800': 'md:font-[800]',
      '900': 'md:font-[900]'
    },
    fontWeightLg: {
      '300': 'lg:font-[300]',
      '400': 'lg:font-[400]',
      '500': 'lg:font-[500]',
      '600': 'lg:font-[600]',
      '700': 'lg:font-[700]',
      '800': 'lg:font-[800]',
      '900': 'lg:font-[900]'
    },
    marginTop: {
      '0': 'mt-[0rem]',
      '1': 'mt-[0.0625rem]',
      '2': 'mt-[0.125rem]',
      '3': 'mt-[0.1875rem]',
      '4': 'mt-[0.25rem]',
      '5': 'mt-[0.3125rem]',
      '6': 'mt-[0.375rem]',
      '7': 'mt-[0.4375rem]',
      '8': 'mt-[0.5rem]',
      '9': 'mt-[0.5625rem]',
      '10': 'mt-[0.625rem]',
      '11': 'mt-[0.6875rem]',
      '12': 'mt-[0.75rem]',
      '13': 'mt-[0.8125rem]',
      '14': 'mt-[0.875rem]',
      '15': 'mt-[0.9375rem]',
      '16': 'mt-[1rem]',
      '17': 'mt-[1.0625rem]',
      '18': 'mt-[1.125rem]',
      '19': 'mt-[1.1875rem]',
      '20': 'mt-[1.25rem]',
      '21': 'mt-[1.3125rem]',
      '22': 'mt-[1.375rem]',
      '23': 'mt-[1.4375rem]',
      '24': 'mt-[1.5rem]',
      '25': 'mt-[1.5625rem]',
      '26': 'mt-[1.625rem]',
      '27': 'mt-[1.6875rem]',
      '28': 'mt-[1.75rem]',
      '29': 'mt-[1.8125rem]',
      '30': 'mt-[1.875rem]',
      '31': 'mt-[1.9375rem]',
      '32': 'mt-[2rem]',
      '33': 'mt-[2.0625rem]',
      '34': 'mt-[2.125rem]',
      '35': 'mt-[2.1875rem]',
      '36': 'mt-[2.25rem]',
      '37': 'mt-[2.3125rem]',
      '38': 'mt-[2.375rem]',
      '39': 'mt-[2.4375rem]',
      '40': 'mt-[2.5rem]',
      '41': 'mt-[2.5625rem]',
      '42': 'mt-[2.625rem]',
      '43': 'mt-[2.6875rem]',
      '44': 'mt-[2.75rem]',
      '45': 'mt-[2.8125rem]',
      '46': 'mt-[2.875rem]',
      '47': 'mt-[2.9375rem]',
      '48': 'mt-[3rem]',
      '49': 'mt-[3.0625rem]',
      '50': 'mt-[3.125rem]',
      '51': 'mt-[3.1875rem]',
      '52': 'mt-[3.25rem]',
      '53': 'mt-[3.3125rem]',
      '54': 'mt-[3.375rem]',
      '55': 'mt-[3.4375rem]',
      '56': 'mt-[3.5rem]',
      '57': 'mt-[3.5625rem]',
      '58': 'mt-[3.625rem]',
      '59': 'mt-[3.6875rem]',
      '60': 'mt-[3.75rem]',
      '61': 'mt-[3.8125rem]',
      '62': 'mt-[3.875rem]',
      '63': 'mt-[3.9375rem]',
      '64': 'mt-[4rem]',
      '65': 'mt-[4.0625rem]',
      '66': 'mt-[4.125rem]',
      '67': 'mt-[4.1875rem]',
      '68': 'mt-[4.25rem]',
      '69': 'mt-[4.3125rem]',
      '70': 'mt-[4.375rem]',
      '71': 'mt-[4.4375rem]',
      '72': 'mt-[4.5rem]',
      '73': 'mt-[4.5625rem]',
      '74': 'mt-[4.625rem]',
      '75': 'mt-[4.6875rem]',
      '76': 'mt-[4.75rem]',
      '77': 'mt-[4.8125rem]',
      '78': 'mt-[4.875rem]',
      '79': 'mt-[4.9375rem]',
      '80': 'mt-[5rem]',
      '81': 'mt-[5.0625rem]',
      '82': 'mt-[5.125rem]',
      '83': 'mt-[5.1875rem]',
      '84': 'mt-[5.25rem]',
      '85': 'mt-[5.3125rem]',
      '86': 'mt-[5.375rem]',
      '87': 'mt-[5.4375rem]',
      '88': 'mt-[5.5rem]',
      '89': 'mt-[5.5625rem]',
      '90': 'mt-[5.625rem]',
      '91': 'mt-[5.6875rem]',
      '92': 'mt-[5.75rem]',
      '93': 'mt-[5.8125rem]',
      '94': 'mt-[5.875rem]',
      '95': 'mt-[5.9375rem]',
      '96': 'mt-[6rem]'
    },
    marginTopMd: {
      '0': 'md:mt-[0rem]',
      '1': 'md:mt-[0.0625rem]',
      '2': 'md:mt-[0.125rem]',
      '3': 'md:mt-[0.1875rem]',
      '4': 'md:mt-[0.25rem]',
      '5': 'md:mt-[0.3125rem]',
      '6': 'md:mt-[0.375rem]',
      '7': 'md:mt-[0.4375rem]',
      '8': 'md:mt-[0.5rem]',
      '9': 'md:mt-[0.5625rem]',
      '10': 'md:mt-[0.625rem]',
      '11': 'md:mt-[0.6875rem]',
      '12': 'md:mt-[0.75rem]',
      '13': 'md:mt-[0.8125rem]',
      '14': 'md:mt-[0.875rem]',
      '15': 'md:mt-[0.9375rem]',
      '16': 'md:mt-[1rem]',
      '17': 'md:mt-[1.0625rem]',
      '18': 'md:mt-[1.125rem]',
      '19': 'md:mt-[1.1875rem]',
      '20': 'md:mt-[1.25rem]',
      '21': 'md:mt-[1.3125rem]',
      '22': 'md:mt-[1.375rem]',
      '23': 'md:mt-[1.4375rem]',
      '24': 'md:mt-[1.5rem]',
      '25': 'md:mt-[1.5625rem]',
      '26': 'md:mt-[1.625rem]',
      '27': 'md:mt-[1.6875rem]',
      '28': 'md:mt-[1.75rem]',
      '29': 'md:mt-[1.8125rem]',
      '30': 'md:mt-[1.875rem]',
      '31': 'md:mt-[1.9375rem]',
      '32': 'md:mt-[2rem]',
      '33': 'md:mt-[2.0625rem]',
      '34': 'md:mt-[2.125rem]',
      '35': 'md:mt-[2.1875rem]',
      '36': 'md:mt-[2.25rem]',
      '37': 'md:mt-[2.3125rem]',
      '38': 'md:mt-[2.375rem]',
      '39': 'md:mt-[2.4375rem]',
      '40': 'md:mt-[2.5rem]',
      '41': 'md:mt-[2.5625rem]',
      '42': 'md:mt-[2.625rem]',
      '43': 'md:mt-[2.6875rem]',
      '44': 'md:mt-[2.75rem]',
      '45': 'md:mt-[2.8125rem]',
      '46': 'md:mt-[2.875rem]',
      '47': 'md:mt-[2.9375rem]',
      '48': 'md:mt-[3rem]',
      '49': 'md:mt-[3.0625rem]',
      '50': 'md:mt-[3.125rem]',
      '51': 'md:mt-[3.1875rem]',
      '52': 'md:mt-[3.25rem]',
      '53': 'md:mt-[3.3125rem]',
      '54': 'md:mt-[3.375rem]',
      '55': 'md:mt-[3.4375rem]',
      '56': 'md:mt-[3.5rem]',
      '57': 'md:mt-[3.5625rem]',
      '58': 'md:mt-[3.625rem]',
      '59': 'md:mt-[3.6875rem]',
      '60': 'md:mt-[3.75rem]',
      '61': 'md:mt-[3.8125rem]',
      '62': 'md:mt-[3.875rem]',
      '63': 'md:mt-[3.9375rem]',
      '64': 'md:mt-[4rem]',
      '65': 'md:mt-[4.0625rem]',
      '66': 'md:mt-[4.125rem]',
      '67': 'md:mt-[4.1875rem]',
      '68': 'md:mt-[4.25rem]',
      '69': 'md:mt-[4.3125rem]',
      '70': 'md:mt-[4.375rem]',
      '71': 'md:mt-[4.4375rem]',
      '72': 'md:mt-[4.5rem]',
      '73': 'md:mt-[4.5625rem]',
      '74': 'md:mt-[4.625rem]',
      '75': 'md:mt-[4.6875rem]',
      '76': 'md:mt-[4.75rem]',
      '77': 'md:mt-[4.8125rem]',
      '78': 'md:mt-[4.875rem]',
      '79': 'md:mt-[4.9375rem]',
      '80': 'md:mt-[5rem]',
      '81': 'md:mt-[5.0625rem]',
      '82': 'md:mt-[5.125rem]',
      '83': 'md:mt-[5.1875rem]',
      '84': 'md:mt-[5.25rem]',
      '85': 'md:mt-[5.3125rem]',
      '86': 'md:mt-[5.375rem]',
      '87': 'md:mt-[5.4375rem]',
      '88': 'md:mt-[5.5rem]',
      '89': 'md:mt-[5.5625rem]',
      '90': 'md:mt-[5.625rem]',
      '91': 'md:mt-[5.6875rem]',
      '92': 'md:mt-[5.75rem]',
      '93': 'md:mt-[5.8125rem]',
      '94': 'md:mt-[5.875rem]',
      '95': 'md:mt-[5.9375rem]',
      '96': 'md:mt-[6rem]'
    },
    marginTopLg: {
      '0': 'lg:mt-[0rem]',
      '1': 'lg:mt-[0.0625rem]',
      '2': 'lg:mt-[0.125rem]',
      '3': 'lg:mt-[0.1875rem]',
      '4': 'lg:mt-[0.25rem]',
      '5': 'lg:mt-[0.3125rem]',
      '6': 'lg:mt-[0.375rem]',
      '7': 'lg:mt-[0.4375rem]',
      '8': 'lg:mt-[0.5rem]',
      '9': 'lg:mt-[0.5625rem]',
      '10': 'lg:mt-[0.625rem]',
      '11': 'lg:mt-[0.6875rem]',
      '12': 'lg:mt-[0.75rem]',
      '13': 'lg:mt-[0.8125rem]',
      '14': 'lg:mt-[0.875rem]',
      '15': 'lg:mt-[0.9375rem]',
      '16': 'lg:mt-[1rem]',
      '17': 'lg:mt-[1.0625rem]',
      '18': 'lg:mt-[1.125rem]',
      '19': 'lg:mt-[1.1875rem]',
      '20': 'lg:mt-[1.25rem]',
      '21': 'lg:mt-[1.3125rem]',
      '22': 'lg:mt-[1.375rem]',
      '23': 'lg:mt-[1.4375rem]',
      '24': 'lg:mt-[1.5rem]',
      '25': 'lg:mt-[1.5625rem]',
      '26': 'lg:mt-[1.625rem]',
      '27': 'lg:mt-[1.6875rem]',
      '28': 'lg:mt-[1.75rem]',
      '29': 'lg:mt-[1.8125rem]',
      '30': 'lg:mt-[1.875rem]',
      '31': 'lg:mt-[1.9375rem]',
      '32': 'lg:mt-[2rem]',
      '33': 'lg:mt-[2.0625rem]',
      '34': 'lg:mt-[2.125rem]',
      '35': 'lg:mt-[2.1875rem]',
      '36': 'lg:mt-[2.25rem]',
      '37': 'lg:mt-[2.3125rem]',
      '38': 'lg:mt-[2.375rem]',
      '39': 'lg:mt-[2.4375rem]',
      '40': 'lg:mt-[2.5rem]',
      '41': 'lg:mt-[2.5625rem]',
      '42': 'lg:mt-[2.625rem]',
      '43': 'lg:mt-[2.6875rem]',
      '44': 'lg:mt-[2.75rem]',
      '45': 'lg:mt-[2.8125rem]',
      '46': 'lg:mt-[2.875rem]',
      '47': 'lg:mt-[2.9375rem]',
      '48': 'lg:mt-[3rem]',
      '49': 'lg:mt-[3.0625rem]',
      '50': 'lg:mt-[3.125rem]',
      '51': 'lg:mt-[3.1875rem]',
      '52': 'lg:mt-[3.25rem]',
      '53': 'lg:mt-[3.3125rem]',
      '54': 'lg:mt-[3.375rem]',
      '55': 'lg:mt-[3.4375rem]',
      '56': 'lg:mt-[3.5rem]',
      '57': 'lg:mt-[3.5625rem]',
      '58': 'lg:mt-[3.625rem]',
      '59': 'lg:mt-[3.6875rem]',
      '60': 'lg:mt-[3.75rem]',
      '61': 'lg:mt-[3.8125rem]',
      '62': 'lg:mt-[3.875rem]',
      '63': 'lg:mt-[3.9375rem]',
      '64': 'lg:mt-[4rem]',
      '65': 'lg:mt-[4.0625rem]',
      '66': 'lg:mt-[4.125rem]',
      '67': 'lg:mt-[4.1875rem]',
      '68': 'lg:mt-[4.25rem]',
      '69': 'lg:mt-[4.3125rem]',
      '70': 'lg:mt-[4.375rem]',
      '71': 'lg:mt-[4.4375rem]',
      '72': 'lg:mt-[4.5rem]',
      '73': 'lg:mt-[4.5625rem]',
      '74': 'lg:mt-[4.625rem]',
      '75': 'lg:mt-[4.6875rem]',
      '76': 'lg:mt-[4.75rem]',
      '77': 'lg:mt-[4.8125rem]',
      '78': 'lg:mt-[4.875rem]',
      '79': 'lg:mt-[4.9375rem]',
      '80': 'lg:mt-[5rem]',
      '81': 'lg:mt-[5.0625rem]',
      '82': 'lg:mt-[5.125rem]',
      '83': 'lg:mt-[5.1875rem]',
      '84': 'lg:mt-[5.25rem]',
      '85': 'lg:mt-[5.3125rem]',
      '86': 'lg:mt-[5.375rem]',
      '87': 'lg:mt-[5.4375rem]',
      '88': 'lg:mt-[5.5rem]',
      '89': 'lg:mt-[5.5625rem]',
      '90': 'lg:mt-[5.625rem]',
      '91': 'lg:mt-[5.6875rem]',
      '92': 'lg:mt-[5.75rem]',
      '93': 'lg:mt-[5.8125rem]',
      '94': 'lg:mt-[5.875rem]',
      '95': 'lg:mt-[5.9375rem]',
      '96': 'lg:mt-[6rem]'
    },
    marginBottom: {
      '0': 'mb-[0rem]',
      '1': 'mb-[0.0625rem]',
      '2': 'mb-[0.125rem]',
      '3': 'mb-[0.1875rem]',
      '4': 'mb-[0.25rem]',
      '5': 'mb-[0.3125rem]',
      '6': 'mb-[0.375rem]',
      '7': 'mb-[0.4375rem]',
      '8': 'mb-[0.5rem]',
      '9': 'mb-[0.5625rem]',
      '10': 'mb-[0.625rem]',
      '11': 'mb-[0.6875rem]',
      '12': 'mb-[0.75rem]',
      '13': 'mb-[0.8125rem]',
      '14': 'mb-[0.875rem]',
      '15': 'mb-[0.9375rem]',
      '16': 'mb-[1rem]',
      '17': 'mb-[1.0625rem]',
      '18': 'mb-[1.125rem]',
      '19': 'mb-[1.1875rem]',
      '20': 'mb-[1.25rem]',
      '21': 'mb-[1.3125rem]',
      '22': 'mb-[1.375rem]',
      '23': 'mb-[1.4375rem]',
      '24': 'mb-[1.5rem]',
      '25': 'mb-[1.5625rem]',
      '26': 'mb-[1.625rem]',
      '27': 'mb-[1.6875rem]',
      '28': 'mb-[1.75rem]',
      '29': 'mb-[1.8125rem]',
      '30': 'mb-[1.875rem]',
      '31': 'mb-[1.9375rem]',
      '32': 'mb-[2rem]',
      '33': 'mb-[2.0625rem]',
      '34': 'mb-[2.125rem]',
      '35': 'mb-[2.1875rem]',
      '36': 'mb-[2.25rem]',
      '37': 'mb-[2.3125rem]',
      '38': 'mb-[2.375rem]',
      '39': 'mb-[2.4375rem]',
      '40': 'mb-[2.5rem]',
      '41': 'mb-[2.5625rem]',
      '42': 'mb-[2.625rem]',
      '43': 'mb-[2.6875rem]',
      '44': 'mb-[2.75rem]',
      '45': 'mb-[2.8125rem]',
      '46': 'mb-[2.875rem]',
      '47': 'mb-[2.9375rem]',
      '48': 'mb-[3rem]',
      '49': 'mb-[3.0625rem]',
      '50': 'mb-[3.125rem]',
      '51': 'mb-[3.1875rem]',
      '52': 'mb-[3.25rem]',
      '53': 'mb-[3.3125rem]',
      '54': 'mb-[3.375rem]',
      '55': 'mb-[3.4375rem]',
      '56': 'mb-[3.5rem]',
      '57': 'mb-[3.5625rem]',
      '58': 'mb-[3.625rem]',
      '59': 'mb-[3.6875rem]',
      '60': 'mb-[3.75rem]',
      '61': 'mb-[3.8125rem]',
      '62': 'mb-[3.875rem]',
      '63': 'mb-[3.9375rem]',
      '64': 'mb-[4rem]',
      '65': 'mb-[4.0625rem]',
      '66': 'mb-[4.125rem]',
      '67': 'mb-[4.1875rem]',
      '68': 'mb-[4.25rem]',
      '69': 'mb-[4.3125rem]',
      '70': 'mb-[4.375rem]',
      '71': 'mb-[4.4375rem]',
      '72': 'mb-[4.5rem]',
      '73': 'mb-[4.5625rem]',
      '74': 'mb-[4.625rem]',
      '75': 'mb-[4.6875rem]',
      '76': 'mb-[4.75rem]',
      '77': 'mb-[4.8125rem]',
      '78': 'mb-[4.875rem]',
      '79': 'mb-[4.9375rem]',
      '80': 'mb-[5rem]',
      '81': 'mb-[5.0625rem]',
      '82': 'mb-[5.125rem]',
      '83': 'mb-[5.1875rem]',
      '84': 'mb-[5.25rem]',
      '85': 'mb-[5.3125rem]',
      '86': 'mb-[5.375rem]',
      '87': 'mb-[5.4375rem]',
      '88': 'mb-[5.5rem]',
      '89': 'mb-[5.5625rem]',
      '90': 'mb-[5.625rem]',
      '91': 'mb-[5.6875rem]',
      '92': 'mb-[5.75rem]',
      '93': 'mb-[5.8125rem]',
      '94': 'mb-[5.875rem]',
      '95': 'mb-[5.9375rem]',
      '96': 'mb-[6rem]'
    },
    marginBottomMd: {
      '0': 'md:mb-[0rem]',
      '1': 'md:mb-[0.0625rem]',
      '2': 'md:mb-[0.125rem]',
      '3': 'md:mb-[0.1875rem]',
      '4': 'md:mb-[0.25rem]',
      '5': 'md:mb-[0.3125rem]',
      '6': 'md:mb-[0.375rem]',
      '7': 'md:mb-[0.4375rem]',
      '8': 'md:mb-[0.5rem]',
      '9': 'md:mb-[0.5625rem]',
      '10': 'md:mb-[0.625rem]',
      '11': 'md:mb-[0.6875rem]',
      '12': 'md:mb-[0.75rem]',
      '13': 'md:mb-[0.8125rem]',
      '14': 'md:mb-[0.875rem]',
      '15': 'md:mb-[0.9375rem]',
      '16': 'md:mb-[1rem]',
      '17': 'md:mb-[1.0625rem]',
      '18': 'md:mb-[1.125rem]',
      '19': 'md:mb-[1.1875rem]',
      '20': 'md:mb-[1.25rem]',
      '21': 'md:mb-[1.3125rem]',
      '22': 'md:mb-[1.375rem]',
      '23': 'md:mb-[1.4375rem]',
      '24': 'md:mb-[1.5rem]',
      '25': 'md:mb-[1.5625rem]',
      '26': 'md:mb-[1.625rem]',
      '27': 'md:mb-[1.6875rem]',
      '28': 'md:mb-[1.75rem]',
      '29': 'md:mb-[1.8125rem]',
      '30': 'md:mb-[1.875rem]',
      '31': 'md:mb-[1.9375rem]',
      '32': 'md:mb-[2rem]',
      '33': 'md:mb-[2.0625rem]',
      '34': 'md:mb-[2.125rem]',
      '35': 'md:mb-[2.1875rem]',
      '36': 'md:mb-[2.25rem]',
      '37': 'md:mb-[2.3125rem]',
      '38': 'md:mb-[2.375rem]',
      '39': 'md:mb-[2.4375rem]',
      '40': 'md:mb-[2.5rem]',
      '41': 'md:mb-[2.5625rem]',
      '42': 'md:mb-[2.625rem]',
      '43': 'md:mb-[2.6875rem]',
      '44': 'md:mb-[2.75rem]',
      '45': 'md:mb-[2.8125rem]',
      '46': 'md:mb-[2.875rem]',
      '47': 'md:mb-[2.9375rem]',
      '48': 'md:mb-[3rem]',
      '49': 'md:mb-[3.0625rem]',
      '50': 'md:mb-[3.125rem]',
      '51': 'md:mb-[3.1875rem]',
      '52': 'md:mb-[3.25rem]',
      '53': 'md:mb-[3.3125rem]',
      '54': 'md:mb-[3.375rem]',
      '55': 'md:mb-[3.4375rem]',
      '56': 'md:mb-[3.5rem]',
      '57': 'md:mb-[3.5625rem]',
      '58': 'md:mb-[3.625rem]',
      '59': 'md:mb-[3.6875rem]',
      '60': 'md:mb-[3.75rem]',
      '61': 'md:mb-[3.8125rem]',
      '62': 'md:mb-[3.875rem]',
      '63': 'md:mb-[3.9375rem]',
      '64': 'md:mb-[4rem]',
      '65': 'md:mb-[4.0625rem]',
      '66': 'md:mb-[4.125rem]',
      '67': 'md:mb-[4.1875rem]',
      '68': 'md:mb-[4.25rem]',
      '69': 'md:mb-[4.3125rem]',
      '70': 'md:mb-[4.375rem]',
      '71': 'md:mb-[4.4375rem]',
      '72': 'md:mb-[4.5rem]',
      '73': 'md:mb-[4.5625rem]',
      '74': 'md:mb-[4.625rem]',
      '75': 'md:mb-[4.6875rem]',
      '76': 'md:mb-[4.75rem]',
      '77': 'md:mb-[4.8125rem]',
      '78': 'md:mb-[4.875rem]',
      '79': 'md:mb-[4.9375rem]',
      '80': 'md:mb-[5rem]',
      '81': 'md:mb-[5.0625rem]',
      '82': 'md:mb-[5.125rem]',
      '83': 'md:mb-[5.1875rem]',
      '84': 'md:mb-[5.25rem]',
      '85': 'md:mb-[5.3125rem]',
      '86': 'md:mb-[5.375rem]',
      '87': 'md:mb-[5.4375rem]',
      '88': 'md:mb-[5.5rem]',
      '89': 'md:mb-[5.5625rem]',
      '90': 'md:mb-[5.625rem]',
      '91': 'md:mb-[5.6875rem]',
      '92': 'md:mb-[5.75rem]',
      '93': 'md:mb-[5.8125rem]',
      '94': 'md:mb-[5.875rem]',
      '95': 'md:mb-[5.9375rem]',
      '96': 'md:mb-[6rem]'
    },
    marginBottomLg: {
      '0': 'lg:mb-[0rem]',
      '1': 'lg:mb-[0.0625rem]',
      '2': 'lg:mb-[0.125rem]',
      '3': 'lg:mb-[0.1875rem]',
      '4': 'lg:mb-[0.25rem]',
      '5': 'lg:mb-[0.3125rem]',
      '6': 'lg:mb-[0.375rem]',
      '7': 'lg:mb-[0.4375rem]',
      '8': 'lg:mb-[0.5rem]',
      '9': 'lg:mb-[0.5625rem]',
      '10': 'lg:mb-[0.625rem]',
      '11': 'lg:mb-[0.6875rem]',
      '12': 'lg:mb-[0.75rem]',
      '13': 'lg:mb-[0.8125rem]',
      '14': 'lg:mb-[0.875rem]',
      '15': 'lg:mb-[0.9375rem]',
      '16': 'lg:mb-[1rem]',
      '17': 'lg:mb-[1.0625rem]',
      '18': 'lg:mb-[1.125rem]',
      '19': 'lg:mb-[1.1875rem]',
      '20': 'lg:mb-[1.25rem]',
      '21': 'lg:mb-[1.3125rem]',
      '22': 'lg:mb-[1.375rem]',
      '23': 'lg:mb-[1.4375rem]',
      '24': 'lg:mb-[1.5rem]',
      '25': 'lg:mb-[1.5625rem]',
      '26': 'lg:mb-[1.625rem]',
      '27': 'lg:mb-[1.6875rem]',
      '28': 'lg:mb-[1.75rem]',
      '29': 'lg:mb-[1.8125rem]',
      '30': 'lg:mb-[1.875rem]',
      '31': 'lg:mb-[1.9375rem]',
      '32': 'lg:mb-[2rem]',
      '33': 'lg:mb-[2.0625rem]',
      '34': 'lg:mb-[2.125rem]',
      '35': 'lg:mb-[2.1875rem]',
      '36': 'lg:mb-[2.25rem]',
      '37': 'lg:mb-[2.3125rem]',
      '38': 'lg:mb-[2.375rem]',
      '39': 'lg:mb-[2.4375rem]',
      '40': 'lg:mb-[2.5rem]',
      '41': 'lg:mb-[2.5625rem]',
      '42': 'lg:mb-[2.625rem]',
      '43': 'lg:mb-[2.6875rem]',
      '44': 'lg:mb-[2.75rem]',
      '45': 'lg:mb-[2.8125rem]',
      '46': 'lg:mb-[2.875rem]',
      '47': 'lg:mb-[2.9375rem]',
      '48': 'lg:mb-[3rem]',
      '49': 'lg:mb-[3.0625rem]',
      '50': 'lg:mb-[3.125rem]',
      '51': 'lg:mb-[3.1875rem]',
      '52': 'lg:mb-[3.25rem]',
      '53': 'lg:mb-[3.3125rem]',
      '54': 'lg:mb-[3.375rem]',
      '55': 'lg:mb-[3.4375rem]',
      '56': 'lg:mb-[3.5rem]',
      '57': 'lg:mb-[3.5625rem]',
      '58': 'lg:mb-[3.625rem]',
      '59': 'lg:mb-[3.6875rem]',
      '60': 'lg:mb-[3.75rem]',
      '61': 'lg:mb-[3.8125rem]',
      '62': 'lg:mb-[3.875rem]',
      '63': 'lg:mb-[3.9375rem]',
      '64': 'lg:mb-[4rem]',
      '65': 'lg:mb-[4.0625rem]',
      '66': 'lg:mb-[4.125rem]',
      '67': 'lg:mb-[4.1875rem]',
      '68': 'lg:mb-[4.25rem]',
      '69': 'lg:mb-[4.3125rem]',
      '70': 'lg:mb-[4.375rem]',
      '71': 'lg:mb-[4.4375rem]',
      '72': 'lg:mb-[4.5rem]',
      '73': 'lg:mb-[4.5625rem]',
      '74': 'lg:mb-[4.625rem]',
      '75': 'lg:mb-[4.6875rem]',
      '76': 'lg:mb-[4.75rem]',
      '77': 'lg:mb-[4.8125rem]',
      '78': 'lg:mb-[4.875rem]',
      '79': 'lg:mb-[4.9375rem]',
      '80': 'lg:mb-[5rem]',
      '81': 'lg:mb-[5.0625rem]',
      '82': 'lg:mb-[5.125rem]',
      '83': 'lg:mb-[5.1875rem]',
      '84': 'lg:mb-[5.25rem]',
      '85': 'lg:mb-[5.3125rem]',
      '86': 'lg:mb-[5.375rem]',
      '87': 'lg:mb-[5.4375rem]',
      '88': 'lg:mb-[5.5rem]',
      '89': 'lg:mb-[5.5625rem]',
      '90': 'lg:mb-[5.625rem]',
      '91': 'lg:mb-[5.6875rem]',
      '92': 'lg:mb-[5.75rem]',
      '93': 'lg:mb-[5.8125rem]',
      '94': 'lg:mb-[5.875rem]',
      '95': 'lg:mb-[5.9375rem]',
      '96': 'lg:mb-[6rem]'
    },
    lineHeight: {
      '0': 'leading-[0]',
      '1': 'leading-[1]',
      '2': 'leading-[2]',
      '3': 'leading-[3]',
      '0.1': 'leading-[0.1]',
      '0.2': 'leading-[0.2]',
      '0.3': 'leading-[0.3]',
      '0.4': 'leading-[0.4]',
      '0.5': 'leading-[0.5]',
      '0.6': 'leading-[0.6]',
      '0.7': 'leading-[0.7]',
      '0.8': 'leading-[0.8]',
      '0.9': 'leading-[0.9]',
      '1.1': 'leading-[1.1]',
      '1.2': 'leading-[1.2]',
      '1.3': 'leading-[1.3]',
      '1.4': 'leading-[1.4]',
      '1.5': 'leading-[1.5]',
      '1.6': 'leading-[1.6]',
      '1.7': 'leading-[1.7]',
      '1.8': 'leading-[1.8]',
      '1.9': 'leading-[1.9]',
      '2.1': 'leading-[2.1]',
      '2.2': 'leading-[2.2]',
      '2.3': 'leading-[2.3]',
      '2.4': 'leading-[2.4]',
      '2.5': 'leading-[2.5]',
      '2.6': 'leading-[2.6]',
      '2.7': 'leading-[2.7]',
      '2.8': 'leading-[2.8]',
      '2.9': 'leading-[2.9]'
    }
  }
})

export type TextProps = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
  fontSize?:
    | VariantProps<typeof textStyles>['fontSize']
    | VariantProps<typeof textStyles>['fontSize'][]
  fontWeight?:
    | VariantProps<typeof textStyles>['fontWeight']
    | VariantProps<typeof textStyles>['fontWeight'][]
  marginTop?:
    | VariantProps<typeof textStyles>['marginTop']
    | VariantProps<typeof textStyles>['marginTop'][]
  marginBottom?:
    | VariantProps<typeof textStyles>['marginBottom']
    | VariantProps<typeof textStyles>['marginBottom'][]
  lineHeight?: VariantProps<typeof textStyles>['lineHeight']
}

export function Text({
  fontSize,
  fontWeight,
  as,
  className,
  children,
  marginBottom,
  marginTop,
  lineHeight
}: TextProps) {
  switch (as) {
    case 'h1':
      return (
        <h1
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            marginTop: renderResponsizeProp(marginTop, 'sm'),
            marginTopMd: renderResponsizeProp(marginTop, 'md'),
            marginTopLg: renderResponsizeProp(marginTop, 'lg'),
            marginBottom: renderResponsizeProp(marginBottom, 'sm'),
            marginBottomMd: renderResponsizeProp(marginBottom, 'md'),
            marginBottomLg: renderResponsizeProp(marginBottom, 'lg'),
            lineHeight,
            className
          })}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            marginTop: renderResponsizeProp(marginTop, 'sm'),
            marginTopMd: renderResponsizeProp(marginTop, 'md'),
            marginTopLg: renderResponsizeProp(marginTop, 'lg'),
            marginBottom: renderResponsizeProp(marginBottom, 'sm'),
            marginBottomMd: renderResponsizeProp(marginBottom, 'md'),
            marginBottomLg: renderResponsizeProp(marginBottom, 'lg'),
            lineHeight,
            className
          })}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            marginTop: renderResponsizeProp(marginTop, 'sm'),
            marginTopMd: renderResponsizeProp(marginTop, 'md'),
            marginTopLg: renderResponsizeProp(marginTop, 'lg'),
            marginBottom: renderResponsizeProp(marginBottom, 'sm'),
            marginBottomMd: renderResponsizeProp(marginBottom, 'md'),
            marginBottomLg: renderResponsizeProp(marginBottom, 'lg'),
            lineHeight,
            className
          })}
        >
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            marginTop: renderResponsizeProp(marginTop, 'sm'),
            marginTopMd: renderResponsizeProp(marginTop, 'md'),
            marginTopLg: renderResponsizeProp(marginTop, 'lg'),
            marginBottom: renderResponsizeProp(marginBottom, 'sm'),
            marginBottomMd: renderResponsizeProp(marginBottom, 'md'),
            marginBottomLg: renderResponsizeProp(marginBottom, 'lg'),
            lineHeight,
            className
          })}
        >
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            marginTop: renderResponsizeProp(marginTop, 'sm'),
            marginTopMd: renderResponsizeProp(marginTop, 'md'),
            marginTopLg: renderResponsizeProp(marginTop, 'lg'),
            marginBottom: renderResponsizeProp(marginBottom, 'sm'),
            marginBottomMd: renderResponsizeProp(marginBottom, 'md'),
            marginBottomLg: renderResponsizeProp(marginBottom, 'lg'),
            lineHeight,
            className
          })}
        >
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            marginTop: renderResponsizeProp(marginTop, 'sm'),
            marginTopMd: renderResponsizeProp(marginTop, 'md'),
            marginTopLg: renderResponsizeProp(marginTop, 'lg'),
            marginBottom: renderResponsizeProp(marginBottom, 'sm'),
            marginBottomMd: renderResponsizeProp(marginBottom, 'md'),
            marginBottomLg: renderResponsizeProp(marginBottom, 'lg'),
            lineHeight,
            className
          })}
        >
          {children}
        </h6>
      )
    case 'p':
      return (
        <p
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            marginTop: renderResponsizeProp(marginTop, 'sm'),
            marginTopMd: renderResponsizeProp(marginTop, 'md'),
            marginTopLg: renderResponsizeProp(marginTop, 'lg'),
            marginBottom: renderResponsizeProp(marginBottom, 'sm'),
            marginBottomMd: renderResponsizeProp(marginBottom, 'md'),
            marginBottomLg: renderResponsizeProp(marginBottom, 'lg'),
            lineHeight,
            className
          })}
        >
          {children}
        </p>
      )
    default:
      return (
        <span
          className={textStyles({
            fontSize: renderResponsizeProp(fontSize, 'sm'),
            fontSizeMd: renderResponsizeProp(fontSize, 'md'),
            fontSizeLg: renderResponsizeProp(fontSize, 'lg'),
            fontWeight: renderResponsizeProp(fontWeight, 'sm'),
            fontWeightMd: renderResponsizeProp(fontWeight, 'md'),
            fontWeightLg: renderResponsizeProp(fontWeight, 'lg'),
            marginTop: renderResponsizeProp(marginTop, 'sm'),
            marginTopMd: renderResponsizeProp(marginTop, 'md'),
            marginTopLg: renderResponsizeProp(marginTop, 'lg'),
            marginBottom: renderResponsizeProp(marginBottom, 'sm'),
            marginBottomMd: renderResponsizeProp(marginBottom, 'md'),
            marginBottomLg: renderResponsizeProp(marginBottom, 'lg'),
            lineHeight,
            className
          })}
        >
          {children}
        </span>
      )
  }
}
