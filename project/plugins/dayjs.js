import dayjs from 'dayjs'
const brLocale = require('dayjs/locale/pt-br')

dayjs.locale('pt-br')

export default (context, inject) => {
  context.$dayjs = dayjs
}