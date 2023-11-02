import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'code-block': "url('/svg/code-block.svg')",
        'code-mushroom': "url('/img/code-mushroom.png')"
      },
      fontFamily: {
        custom: ['Montserrat'],
        inter: ['Inter'],
        redHat: ['RedHatMono']
      },
      colors: {
        Brand: '#F8D348',
        BrandBlack: '#20201E',
        BrandDarkGray: '#585752',
        BrandLightGray: '#BDBCB9',
        BrandWhite: '#FFFFFF',
        BrandWhite80: 'rgba(255, 255, 255, 0.80)',
        BackgroundLight: '#FFFCF1',
        BackgroundDark: '#FDF2C8',
      },
      fontSize: {
        'hd1': ['48px', { lineHeight: '120%' }],
        'hd1-mb': ['28px', { lineHeight: '120%' }],
        'hd2': ['40px', { lineHeight: '120%' }],
        'hd2-mb': ['24px', { lineHeight: '120%' }],
        'hd3': ['28px', { lineHeight: '120%' }],
        'hd3-mb': ['20px', { lineHeight: '120%' }],
        'b1': ['18px', { lineHeight: '160%' }],
        'b1-mb': ['16px', { lineHeight: '160%' }],
        'b1-bold': ['18px', { lineHeight: '160%' }],
        'b1-bold-mb': ['16px', { lineHeight: '160%' }],
        'b2': ['16px', { lineHeight: '160%' }],
        'b2-mb': ['14px', { lineHeight: '160%' }],
        'b2-bold': ['16px', { lineHeight: '160%' }],
        'b2-bold-mb': ['14px', { lineHeight: '160%' }],
        'btn': ['16px', { lineHeight: '100%' }],
        'btn-mb': ['16px', { lineHeight: '100%' }],
        'code': ['14px', { lineHeight: '200%' }],
      },
      boxShadow: {
        custom: '2px 2px 0px 2px rgba(32, 32, 30, 0.32)',
      },
    },
  },
  plugins: [],
}
export default config
