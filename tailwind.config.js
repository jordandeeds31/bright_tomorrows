/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

module.exports = {
  theme: {
    colors: {
      blue: '#107B98',
      'light-gray': '#F4F4F7',
      'dark-gray': '#CCCCCC',
      'light-yellow':'#FFF2AE',
      'dark-yellow': '#FFF2AE',
      orange: '#F79425',
      'dark-orange': '#d97d1e',
      white: '#FFFFFF',
      yellow: '#FFE542',
      gray: '#F0F0F0',
      black: '#000000',
      transparent: 'transparent'
    },
    fontFamily: {
      'sans': ['Barlow', 'sans-serif'],
      'serif': ['Crimson Text', 'serif']
    },
    spacing: {
      '0': '0px',
      '1': '6px',
      '2': '12px',
      '3': '18px',
      '4': '24px',
      '5': '30px',
      '6': '36px',
      '7': '42px',
      '8': '48px',
      '9': '54px',
      '10': '60px',
      '11': '66px',
      '12': '72px',
      '13': '78px',
      '14': '84px',
      '15': '90px',
      '16': '96px',
      '17': '102px',
      '18': '108px',
      '19': '114px',
      '20': '120px',
      '21': '126px',
      '22': '132px',
      '23': '138px',
      '24': '144px',
      '25': '150px',
      '26': '156px',
      '27': '162px',
      '28': '168px',
      '29': '174px',
      '30': '180px',
      '31': '186px',
      '32': '192px',
      '33': '198px',
      '34': '204px',
      '35': '210px',
      '36': '216px',
      '37': '222px',
      '38': '228px',
      '39': '234px',
      '40': '240px',
      '41': '246px',
      '42': '252px',
      '43': '258px',
      '44': '264px',
      '45': '270px',
      '46': '276px',
      '47': '282px',
      '48': '288px',
      '49': '294px',
      '50': '300px',
      '51': '306px',
      '53': '312px',
      '54': '318px',
      '55': '324px',
      '56': '330px',
      '57': '336px',
      '58': '342px',
      '59': '348px',
      '60': '354px',
      '63': '516px',
      '64': '80px',
      '67': '420px',
      '70': '-240px'
    },
    extend: {
      zIndex: {
        'auto': 'auto',
        'n2': -2,
        'n1': -1
      },
    },
    variants: {},
    plugins: [],
    purge: {
      // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js'
      ]
    }
  }
}
