const config = Object.freeze({
  DEFAULT_AGE: 55,
  MIN_AGE: 40,
  MAX_AGE: 70,

  // https://www.worldlifeexpectancy.com/canada-life-expectancy
  DEFAULT_GENDER: 'female',
  GENDER: [
    { key: 'male', value: 'male', lifeExpectancy: 81 },
    { key: 'female', value: 'female', lifeExpectancy: 85 },
  ],

  // Only single supported for now
  DEFAULT_MARITAL_STATUS: 'single',
  MARITAL_STATUS: [
    { key: 'single', value: 'single', label: 'Single' },
    // {
    //   key: 'partner_oas',
    //   value: 'partner_oas',
    //   label: 'Spouse/common-law partner of someone who receives an OAS Pension',
    // },
    // {
    //   key: 'partner_oas',
    //   value: 'partner_oas',
    //   label:
    //     'Spouse/common-law partner of someone who does not receive an OAS Pension',
    // },
  ],

  // Only needed when factoring in income tax - future
  // DEFAULT_INCOME: 30000,
  // MIN_INCOME: 0,
  // MAX_INCOME: 100000,

  DEFAULT_RRSP: 90000,
  MIN_RRSP: 0,
  MAX_RRSP: 1000000,

  DEFAULT_ANNUAL_CPP: 9000,
  MIN_ANNUAL_CPP: 0,
  MAX_ANNUAL_CPP: 15000,

  DEFAULT_ANNUAL_PENSION: 0,
  MIN_ANNUAL_PENSION: 0,
  MAX_ANNUAL_PENSION: 50000,

  DEFAULT_RETIREMENT_AGE: 65,
  MIN_RETIREMENT_AGE: 55,
  MAX_RETIREMENT_AGE: 70,
});

export default config;
