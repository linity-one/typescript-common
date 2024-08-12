import { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './typescript-common/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      desktop: '1680px',
      laptop: '1280px',
      vertical: '1024px',
      tablet: '768px',
      phablet: '560px',
      mobile: '330px',
    },
    fontSize: {},
    fontWeight: {
      normal: '400',
      'semi-bold': '550',
      bold: '700',
    },
    fontFamily: {
      title: ['Cairo', 'sans-serif'],
      body: ['Cairo', 'sans-serif'],
      math: ['Cairo', 'sans-serif'],
      button: ['Cairo', 'sans-serif'],
    },

    borderRadius: {
      none: '0px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
    },
    boxShadow: {
      100: '0px 2px 4px -2px rgba(40, 51, 58, 0.12), 0px 4px 4px -2px rgba(40, 51, 58, 0.08)',
      200: '0px 4px 6px -4px rgba(40, 51, 58, 0.12), 0px 8px 8px -4px rgba(40, 51, 58, 0.08)',
      300: '0px 6px 8px -6px rgba(40, 51, 58, 0.12), 0px 8px 16px -6px rgba(40, 51, 58, 0.08)',
      400: '0px 6px 12px -6px rgba(40, 51, 58, 0.12), 0px 8px 24px -4px rgba(40, 51, 58, 0.08)',
      500: '0px 6px 14px -6px rgba(40, 51, 58, 0.12), 0px 10px 32px -4px rgba(40, 51, 58, 0.10)',
      600: '0px 8px 18px -6px rgba(40, 51, 58, 0.12), 0px 12px 42px -4px rgba(40, 51, 58, 0.12)',
      700: '0px 8px 22px -6px rgba(40, 51, 58, 0.12), 0px 14px 64px -4px rgba(40, 51, 58, 0.12)',
      800: '0px 8px 28px -6px rgba(40, 51, 58, 0.12), 0px 18px 88px -4px rgba(40, 51, 58, 0.14)',
      'light-100':
        '0px 2px 4px -2px rgba(228, 241, 253, 0.12), 0px 4px 4px -2px rgba(228, 241, 253, 0.08)',
      'light-200':
        '0px 4px 6px -4px rgba(228, 241, 253, 0.12), 0px 8px 8px -4px rgba(228, 241, 253, 0.08)',
      'light-300':
        '0px 6px 8px -6px rgba(228, 241, 253, 0.12), 0px 8px 16px -6px rgba(228, 241, 253, 0.08)',
      'light-400':
        '0px 6px 12px -6px rgba(228, 241, 253, 0.12), 0px 8px 24px -4px rgba(228, 241, 253, 0.08)',
      'light-500':
        '0px 6px 14px -6px rgba(228, 241, 253, 0.12), 0px 10px 32px -4px rgba(228, 241, 253, 0.10)',
      'light-600':
        '0px 8px 18px -6px rgba(228, 241, 253, 0.12), 0px 12px 42px -4px rgba(228, 241, 253, 0.12)',
      'light-700':
        '0px 8px 22px -6px rgba(228, 241, 253, 0.12), 0px 14px 64px -4px rgba(228, 241, 253, 0.12)',
      'light-800':
        '0px 8px 28px -6px rgba(228, 241, 253, 0.12), 0px 18px 88px -4px rgba(228, 241, 253, 0.14)',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gunmetal: {
        DEFAULT: '#28333A',
        950: '#28333A',
        900: '#343F45',
        800: '#3A4950',
        700: '#3A4950',
      },
      slate: '#778F9B',
      storm: '#ADC1C7',
      cloud: '#e4f1fd',
      lime: {
        DEFAULT: '#DDDE59',
        hover: '#E9EC9C',
      },
      success: '#198038',
      warning: '#ff832b',
      alert: '#da1e28',
    },
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(38.04% 75.07% at 48.61% 57.34%, #ADC1C7 0%, #E4F1FD 100%)',
        'gradient-gunmetal-white':
          'linear-gradient(to right, #28333A 25%, #ffffff 25%)',
      },
      keyframes: {
        'marquise-dt': {
          '0%': { transform: 'translateY(0)' },
          '100%': {
            transform: 'translateY(calc(-100% - 32px))',
          },
        },
        'marquise-td': {
          '100%': { transform: 'translateY(0)' },
          '0%': {
            transform: 'translateY(calc(-100% - 32px))',
          },
        },
      },
      animation: {
        'marquise-td': 'marquise-td 20s linear infinite',
        'marquise-dt': 'marquise-dt 20s linear infinite',
      },

      spacing: {
        '3xs': '2px',
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        ld: '24px',
        xl: '40px',
        xxl: '64px',
        '3xl': '96px',
        0: '0px',
        0.25: '2px',
        0.5: '4px',
        0.75: '6px',
        1: '8px',
        1.5: '12px',
        1.75: '14px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        3.5: '28px',
        4: '32px',
        4.5: '36px',
        5: '40px',
        5.5: '44px',
        6: '48px',
        6.5: '52px',
        7: '56px',
        7.5: '60px',
        8: '64px',
        9: '72px',
        10: '80px',
        11: '88px',
        12: '96px',
        13: '104px',
        14: '112px',
        15: '120px',
        16: '128px',
        18: '144px',
        20: '160px',
        21: '168px',
        22: '176px',
        24: '192px',
        27: '216px',
        28: '224px',
        32: '256px',
        35: '280px',
        36: '288px',
        40: '320px',
        44: '352px',
        48: '384px',
        50: '400px',
        52: '416px',
        54: '432px',
        55: '440px',
        56: '448px',
        60: '480px',
        64: '512px',
        68: '544px',
        72: '576px',
        78: '624px',
        80: '640px',
        90: '720px',
        96: '768px',
        100: '800px',
        120: '960px',
        128: '1024px',
        144: '1152px',
        150: '1200px',
        160: '1280px',
        192: '1536px',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addBase, theme }: PluginAPI) {
      addBase({
        h1: {
          fontWeight: theme?.('fontWeight.semi-bold') || '550',
          fontFamily: theme?.('fontFamily.title') || ['Cairo', 'sans-serif'],
        },
        h2: {
          fontWeight: theme?.('fontWeight.normal') || '400',
          fontFamily: theme?.('fontFamily.title') || ['Cairo', 'sans-serif'],
        },
        h3: {
          fontWeight: theme?.('fontWeight.semi-bold') || '550',
          fontFamily: theme?.('fontFamily.title') || ['Cairo', 'sans-serif'],
        },
        p: {
          fontWeight: theme('fontWeight.normal') || '400',
          fontFamily: theme('fontFamily.body') || ['Cairo', 'sans-serif'],
        },
        [`@media (min-width: ${theme('screens.tablet')})`]: {
          '.text-subtext': { fontSize: '16px', lineHeight: '24px' },
          '.text-text': { fontSize: '21px', lineHeight: '32px' },
          '.text-h3': { fontSize: '32px', lineHeight: '40px' },
          '.text-h2': { fontSize: '48px', lineHeight: '64px' },
          '.text-h1': { fontSize: '64px', lineHeight: '80px' },
          h1: { fontSize: '64px', lineHeight: '80px' },
          h2: { fontSize: '48px', lineHeight: '64px' },
          h3: { fontSize: '32px', lineHeight: '40px' },
          p: { fontSize: '21px', lineHeight: '32px' },
          label: { fontSize: '16px', lineHeight: '24px' },
        },
        [`@media (max-width: ${theme('screens.tablet')})`]: {
          '.text-subtext': { fontSize: '10px', lineHeight: '16px' },
          '.text-text': { fontSize: '16px', lineHeight: '24px' },
          '.text-h3': { fontSize: '21px', lineHeight: '32px' },
          '.text-h2': { fontSize: '32px', lineHeight: '40px' },
          '.text-h1': { fontSize: '48px', lineHeight: '64px' },
          h1: { fontSize: '48px', lineHeight: '64px' },
          h2: { fontSize: '32px', lineHeight: '40px' },
          h3: { fontSize: '21px', lineHeight: '32px' },
          p: { fontSize: '16px', lineHeight: '24px' },
          label: { fontSize: '10px', lineHeight: '16px' },
        },
      });
    },
    function ({ addComponents }: PluginAPI) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          minWidth: '312px',
          '@screen mobile': {
            maxWidth: '312px',
          },
          '@screen phablet': {
            maxWidth: '520px',
          },
          '@screen tablet': {
            maxWidth: '672px',
          },
          '@screen vertical': {
            maxWidth: '864px',
          },
          '@screen laptop': {
            maxWidth: '1120px',
          },
          '@screen desktop': {
            maxWidth: '1504px',
          },
        },
      });
    },
  ],
};

export default config;
