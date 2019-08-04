import { formatMoney } from './viz-util';
import {
  annualRrsp,
  lifeExpectancy,
  yearsInRetirement,
  numYearsCollectingGIS,
} from './calc-util';
import config from '../config';

function annualIncomeForGisEligibility(
  numericInput,
  scenarioBefore,
  scenarioAfter
) {
  return `If you cash out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,\
  then the income used to determine how much GIS you're eligible for will be your CPP of\
  <span class="chart-text--number">${formatMoney(numericInput.cpp)}</span>\
  plus your pension of\
  <span class="chart-text--number">${formatMoney(numericInput.pension)}</span>\
  for a total of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualIncome
  )}</span>.\
  <span class="chart-text--separator">&nbsp;</span>\
  If you withdraw from your RRSP <span class="chart-text--time chart-text--time-after">after</span> retiring,\
  then the withdrawals get included in your income for GIS eligibility purposes.\
  Given Canadian\
  <span class="chart-text--number">${numericInput.gender}</span>\
  life expectancy of\
  <span class="chart-text--number">${lifeExpectancy(
    numericInput.gender
  )}</span>\
  and your retirement age of\
  <span class="chart-text--number">${numericInput.retirementAge}</span>,\
  you will have an estimated\
  <span class="chart-text--number">${scenarioBefore.numYrsInRetirement}</span>\
  years in retirement. Assuming an even withdrawal rate from your\
  <span class="chart-text--number">${formatMoney(numericInput.rrsp)}</span>\
  RRSP throughout retirement,\
  this will add\
  <span class="chart-text--number">${formatMoney(
    annualRrsp(numericInput)
  )}</span>,\
  to your income for a total of\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.annualIncome
  )}</span>.\
  `;
}

function monthlyGISEntitlement(numericInput, scenarioBefore, scenarioAfter) {
  return `If you cash out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,\
  then your income of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualIncome
  )}</span>\
  makes you eligible for a monthly GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.monthlyGIS
  )}</span>\
  <span class="chart-text--separator">&nbsp;</span>\
  If you withdraw from your RRSP <span class="chart-text--time chart-text--time-after">after</span> retiring,\
  then the\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.annualIncome - scenarioBefore.annualIncome
  )}</span>\
  increase in your income reduces your GIS payment by
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.monthlyGIS - scenarioAfter.monthlyGIS
  )}</span>\
  resulting in a lower monthly benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.monthlyGIS
  )}</span>\
  <span class="chart-text--separator">&nbsp;</span>\
  Remember when cashing out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,
  you still have the money (for example in a savings account), but it doesn't count as income for\
  GIS eligibility purposes.
  `;
}

function annualGISEntitlement(numericInput, scenarioBefore, scenarioAfter) {
  return `Translating the monthly GIS benefit to a yearly value,\
  cashing out your RRSP <span class="chart-text--time chart-text--time-before">before</span> retiring,\
  would result in an annual GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.annualGIS
  )}</span>.\
  <span class="chart-text--separator">&nbsp;</span>\
  Cashing out your RRSP <span class="chart-text--time chart-text--time-after">after</span> retirement,\
  would result in a lower annual GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.annualGIS
  )}</span>.`;
}

// TODO: Re-iterate annual GIS benefit: Multiplying your expected years of collectnig GIS by your annual GIS benefit of AMT...
// TODO: If retiring before 65, explain why eg: 30 yrs in retirement vs only 20 yrs collecting GIS
function totalGISEntitlement(numericInput, scenarioBefore, scenarioAfter) {
  return `You're eligible to start receiving GIS at age\
  <span class="chart-text--number">${config.GIS_ENTITLEMENT_AGE}</span>.\
  Given Canadian\
  <span class="chart-text--number">${numericInput.gender}</span>\
  life expectancy of\
  <span class="chart-text--number">${lifeExpectancy(
    numericInput.gender
  )}</span>\
  and your retirement age of\
  <span class="chart-text--number">${numericInput.retirementAge}</span>,\
  you will have an estimated\
  <span class="chart-text--number">${numYearsCollectingGIS(
    numericInput.retirementAge,
    yearsInRetirement(numericInput)
  )}</span>\
  years of collecting GIS during retirement.\
  <span class="chart-text--separator">&nbsp;</span>\
  Multiplying your expected years of collecting GIS by your annual GIS benefit results in an estimated total GIS benefit of\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.totalGISInRetirement
  )}</span>,\
  when the RRSP is cashed out <span class="chart-text--time chart-text--time-before">before</span> retirement.\
  <span class="chart-text--separator">&nbsp;</span>\
  If the RRSP is cashed out <span class="chart-text--time chart-text--time-after">after</span> retirement, total benefit would be\
  <span class="chart-text--number">${formatMoney(
    scenarioAfter.totalGISInRetirement
  )}</span>.\
  <span class="chart-text--separator">&nbsp;</span>\
  This means you could have\
  <span class="chart-text--number">${formatMoney(
    scenarioBefore.totalGISInRetirement - scenarioAfter.totalGISInRetirement
  )}</span>\
  more in GIS benefits by cashing out RRSP <span class="chart-text--time chart-text--time-before">before</span> retirement.`;
}

function generate(numericInput, scenarioBefore, scenarioAfter) {
  return {
    annualIncomeForGisEligibility: annualIncomeForGisEligibility(
      numericInput,
      scenarioBefore,
      scenarioAfter
    ),
    monthlyGISEntitlement: monthlyGISEntitlement(
      numericInput,
      scenarioBefore,
      scenarioAfter
    ),
    annualGISEntitlement: annualGISEntitlement(
      numericInput,
      scenarioBefore,
      scenarioAfter
    ),
    totalGISEntitlement: totalGISEntitlement(
      numericInput,
      scenarioBefore,
      scenarioAfter
    ),
  };
}

export { generate };
