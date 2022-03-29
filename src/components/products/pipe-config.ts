export const PipeConfig = Object.assign({
  numberFormat: '#,###.##',
  dateTimeFormat: 'DD-MM-YYYY HH:mm',
  dateFormat: 'DD/MM/YYYY',
  timeFormat: 'HH:mm',
  emptyInput: 'N/A',
  passwordRegex : '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\^$*.\\[\\]{}\\(\\)?\\-“!@#%&/,><\\’:;|_~`])\\S{8,99}$',
  currencyPrefix: '',
  currencyPostfix: '',
  currencyFormat: '##.### ',
  notAvailable: 'N/A',
  emailRegex: '^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
  numberRegex: '',
  ssnRegex: '^([\\d]{2})([\\d]{2})([\\d]{2})([\\d]{5})(-[\\w]+)?$',
  phoneRegex: '^([+]|([0-9]*))([0-9]*$)',
  usernameRegex: '^(?=[a-zA-Z0-9._-]{4,128}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$',
  calendarDateFormat: 'YYYY-MM-DD',
  defaultCurrency: 'NOK',
  currencyThousandSeparator: ',',
  currencyDecimalSeparator: '.',
  currencyDecimalPlaces: 2
});
