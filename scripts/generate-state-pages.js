#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'app', 'rn-salary-by-state');

const states = [
  { slug: 'alabama', name: 'Alabama', avg: '$66,390', hourly: '$31.92/hr', cities: [['Birmingham','$70,000–$78,000','$33.65–$37.50/hr'],['Huntsville','$67,500–$75,000','$32.45–$36.06/hr'],['Mobile','$64,000–$72,000','$30.77–$34.62/hr']], nightLow: '$6,639', nightHigh: '$11,950', vivian: 'Alabama', fn: 'AlabamaRNSalary' },
  { slug: 'alaska', name: 'Alaska', avg: '$96,990', hourly: '$46.63/hr', cities: [['Anchorage','$103,000–$115,000','$49.52–$55.29/hr'],['Fairbanks','$98,000–$108,000','$47.12–$51.92/hr'],['Juneau','$95,000–$105,000','$45.67–$50.48/hr']], nightLow: '$9,699', nightHigh: '$17,458', vivian: 'Alaska', fn: 'AlaskaRNSalary' },
  { slug: 'arkansas', name: 'Arkansas', avg: '$67,010', hourly: '$32.22/hr', cities: [['Little Rock','$71,000–$79,000','$34.13–$37.98/hr'],['Fort Smith','$65,000–$73,000','$31.25–$35.10/hr'],['Fayetteville','$66,000–$74,000','$31.73–$35.58/hr']], nightLow: '$6,701', nightHigh: '$12,062', vivian: 'Arkansas', fn: 'ArkansasRNSalary' },
  { slug: 'colorado', name: 'Colorado', avg: '$82,010', hourly: '$39.43/hr', cities: [['Denver','$87,000–$97,000','$41.83–$46.63/hr'],['Colorado Springs','$82,000–$92,000','$39.42–$44.23/hr'],['Fort Collins','$80,000–$89,000','$38.46–$42.79/hr']], nightLow: '$8,201', nightHigh: '$14,762', vivian: 'Colorado', fn: 'ColoradoRNSalary' },
  { slug: 'connecticut', name: 'Connecticut', avg: '$91,620', hourly: '$44.05/hr', cities: [['Hartford','$97,000–$108,000','$46.63–$51.92/hr'],['New Haven','$93,000–$104,000','$44.71–$50.00/hr'],['Bridgeport','$90,000–$100,000','$43.27–$48.08/hr']], nightLow: '$9,162', nightHigh: '$16,492', vivian: 'Connecticut', fn: 'ConnecticutRNSalary' },
  { slug: 'delaware', name: 'Delaware', avg: '$81,450', hourly: '$39.16/hr', cities: [['Wilmington','$86,000–$96,000','$41.35–$46.15/hr'],['Dover','$80,000–$89,000','$38.46–$42.79/hr'],['Newark','$79,000–$88,000','$37.98–$42.31/hr']], nightLow: '$8,145', nightHigh: '$14,661', vivian: 'Delaware', fn: 'DelawareRNSalary' },
  { slug: 'georgia', name: 'Georgia', avg: '$75,080', hourly: '$36.10/hr', cities: [['Atlanta','$79,500–$88,500','$38.22–$42.55/hr'],['Augusta','$73,000–$81,000','$35.10–$38.94/hr'],['Savannah','$72,000–$80,000','$34.62–$38.46/hr']], nightLow: '$7,508', nightHigh: '$13,514', vivian: 'Georgia', fn: 'GeorgiaRNSalary' },
  { slug: 'hawaii', name: 'Hawaii', avg: '$113,060', hourly: '$54.36/hr', cities: [['Honolulu','$119,000–$132,000','$57.21–$63.46/hr'],['Hilo','$108,000–$120,000','$51.92–$57.69/hr'],['Maui','$112,000–$124,000','$53.85–$59.62/hr']], nightLow: '$11,306', nightHigh: '$20,351', vivian: 'Hawaii', fn: 'HawaiiRNSalary' },
  { slug: 'idaho', name: 'Idaho', avg: '$72,160', hourly: '$34.69/hr', cities: [['Boise','$76,000–$85,000','$36.54–$40.87/hr'],['Nampa','$71,000–$79,000','$34.13–$37.98/hr'],['Meridian','$72,000–$80,000','$34.62–$38.46/hr']], nightLow: '$7,216', nightHigh: '$12,989', vivian: 'Idaho', fn: 'IdahoRNSalary' },
  { slug: 'illinois', name: 'Illinois', avg: '$82,020', hourly: '$39.43/hr', cities: [['Chicago','$87,000–$97,000','$41.83–$46.63/hr'],['Rockford','$79,000–$88,000','$37.98–$42.31/hr'],['Peoria','$78,000–$87,000','$37.50–$41.83/hr']], nightLow: '$8,202', nightHigh: '$14,764', vivian: 'Illinois', fn: 'IllinoisRNSalary' },
  { slug: 'indiana', name: 'Indiana', avg: '$72,080', hourly: '$34.65/hr', cities: [['Indianapolis','$76,000–$85,000','$36.54–$40.87/hr'],['Fort Wayne','$70,000–$78,000','$33.65–$37.50/hr'],['Evansville','$69,000–$77,000','$33.17–$37.02/hr']], nightLow: '$7,208', nightHigh: '$12,974', vivian: 'Indiana', fn: 'IndianaRNSalary' },
  { slug: 'iowa', name: 'Iowa', avg: '$66,220', hourly: '$31.84/hr', cities: [['Des Moines','$70,000–$78,000','$33.65–$37.50/hr'],['Cedar Rapids','$65,000–$73,000','$31.25–$35.10/hr'],['Davenport','$64,000–$72,000','$30.77–$34.62/hr']], nightLow: '$6,622', nightHigh: '$11,920', vivian: 'Iowa', fn: 'IowaRNSalary' },
  { slug: 'kansas', name: 'Kansas', avg: '$68,130', hourly: '$32.76/hr', cities: [['Wichita','$72,000–$80,000','$34.62–$38.46/hr'],['Overland Park','$70,000–$78,000','$33.65–$37.50/hr'],['Kansas City','$67,000–$75,000','$32.21–$36.06/hr']], nightLow: '$6,813', nightHigh: '$12,263', vivian: 'Kansas', fn: 'KansasRNSalary' },
  { slug: 'kentucky', name: 'Kentucky', avg: '$69,480', hourly: '$33.40/hr', cities: [['Louisville','$73,500–$82,000','$35.34–$39.42/hr'],['Lexington','$71,000–$79,000','$34.13–$37.98/hr'],['Bowling Green','$67,000–$75,000','$32.21–$36.06/hr']], nightLow: '$6,948', nightHigh: '$12,506', vivian: 'Kentucky', fn: 'KentuckyRNSalary' },
  { slug: 'louisiana', name: 'Louisiana', avg: '$69,980', hourly: '$33.65/hr', cities: [['New Orleans','$74,000–$82,500','$35.58–$39.66/hr'],['Baton Rouge','$71,000–$79,000','$34.13–$37.98/hr'],['Shreveport','$67,000–$75,000','$32.21–$36.06/hr']], nightLow: '$6,998', nightHigh: '$12,596', vivian: 'Louisiana', fn: 'LouisianaRNSalary' },
  { slug: 'maine', name: 'Maine', avg: '$78,920', hourly: '$37.94/hr', cities: [['Portland','$83,000–$93,000','$39.90–$44.71/hr'],['Lewiston','$77,000–$86,000','$37.02–$41.35/hr'],['Bangor','$76,000–$85,000','$36.54–$40.87/hr']], nightLow: '$7,892', nightHigh: '$14,206', vivian: 'Maine', fn: 'MaineRNSalary' },
  { slug: 'maryland', name: 'Maryland', avg: '$84,820', hourly: '$40.78/hr', cities: [['Baltimore','$89,500–$100,000','$43.03–$48.08/hr'],['Frederick','$85,000–$95,000','$40.87–$45.67/hr'],['Rockville','$87,000–$97,000','$41.83–$46.63/hr']], nightLow: '$8,482', nightHigh: '$15,268', vivian: 'Maryland', fn: 'MarylandRNSalary' },
  { slug: 'massachusetts', name: 'Massachusetts', avg: '$103,090', hourly: '$49.56/hr', cities: [['Boston','$109,000–$121,000','$52.40–$58.17/hr'],['Worcester','$100,000–$111,000','$48.08–$53.37/hr'],['Springfield','$97,000–$108,000','$46.63–$51.92/hr']], nightLow: '$10,309', nightHigh: '$18,556', vivian: 'Massachusetts', fn: 'MassachusettsRNSalary' },
  { slug: 'michigan', name: 'Michigan', avg: '$79,830', hourly: '$38.38/hr', cities: [['Detroit','$84,000–$94,000','$40.38–$45.19/hr'],['Grand Rapids','$79,000–$88,000','$37.98–$42.31/hr'],['Ann Arbor','$82,000–$92,000','$39.42–$44.23/hr']], nightLow: '$7,983', nightHigh: '$14,369', vivian: 'Michigan', fn: 'MichiganRNSalary' },
  { slug: 'minnesota', name: 'Minnesota', avg: '$86,110', hourly: '$41.40/hr', cities: [['Minneapolis','$91,000–$101,000','$43.75–$48.56/hr'],['Saint Paul','$88,000–$98,000','$42.31–$47.12/hr'],['Rochester','$86,000–$96,000','$41.35–$46.15/hr']], nightLow: '$8,611', nightHigh: '$15,500', vivian: 'Minnesota', fn: 'MinnesotaRNSalary' },
  { slug: 'mississippi', name: 'Mississippi', avg: '$64,320', hourly: '$30.92/hr', cities: [['Jackson','$68,000–$76,000','$32.69–$36.54/hr'],['Gulfport','$63,000–$70,500','$30.29–$33.89/hr'],['Hattiesburg','$62,000–$69,000','$29.81–$33.17/hr']], nightLow: '$6,432', nightHigh: '$11,578', vivian: 'Mississippi', fn: 'MississippiRNSalary' },
  { slug: 'missouri', name: 'Missouri', avg: '$71,390', hourly: '$34.32/hr', cities: [['Kansas City','$75,500–$84,000','$36.30–$40.38/hr'],['St. Louis','$74,000–$82,500','$35.58–$39.66/hr'],['Springfield','$69,000–$77,000','$33.17–$37.02/hr']], nightLow: '$7,139', nightHigh: '$12,850', vivian: 'Missouri', fn: 'MissouriRNSalary' },
  { slug: 'montana', name: 'Montana', avg: '$72,950', hourly: '$35.07/hr', cities: [['Billings','$77,000–$86,000','$37.02–$41.35/hr'],['Missoula','$73,500–$82,000','$35.34–$39.42/hr'],['Great Falls','$71,000–$79,000','$34.13–$37.98/hr']], nightLow: '$7,295', nightHigh: '$13,131', vivian: 'Montana', fn: 'MontanaRNSalary' },
  { slug: 'nebraska', name: 'Nebraska', avg: '$69,790', hourly: '$33.55/hr', cities: [['Omaha','$73,500–$82,000','$35.34–$39.42/hr'],['Lincoln','$70,000–$78,000','$33.65–$37.50/hr'],['Bellevue','$68,500–$76,500','$32.93–$36.78/hr']], nightLow: '$6,979', nightHigh: '$12,562', vivian: 'Nebraska', fn: 'NebraskaRNSalary' },
  { slug: 'nevada', name: 'Nevada', avg: '$88,290', hourly: '$42.45/hr', cities: [['Las Vegas','$93,000–$104,000','$44.71–$50.00/hr'],['Reno','$89,000–$99,000','$42.79–$47.60/hr'],['Henderson','$87,000–$97,000','$41.83–$46.63/hr']], nightLow: '$8,829', nightHigh: '$15,892', vivian: 'Nevada', fn: 'NevadaRNSalary' },
  { slug: 'new-hampshire', name: 'New Hampshire', avg: '$82,920', hourly: '$39.87/hr', cities: [['Manchester','$87,500–$97,500','$42.07–$46.88/hr'],['Nashua','$85,000–$95,000','$40.87–$45.67/hr'],['Concord','$81,000–$90,000','$38.94–$43.27/hr']], nightLow: '$8,292', nightHigh: '$14,926', vivian: 'New+Hampshire', fn: 'NewHampshireRNSalary' },
  { slug: 'new-jersey', name: 'New Jersey', avg: '$93,230', hourly: '$44.82/hr', cities: [['Newark','$98,500–$110,000','$47.36–$52.88/hr'],['Jersey City','$96,000–$107,000','$46.15–$51.44/hr'],['Trenton','$91,000–$101,000','$43.75–$48.56/hr']], nightLow: '$9,323', nightHigh: '$16,781', vivian: 'New+Jersey', fn: 'NewJerseyRNSalary' },
  { slug: 'new-mexico', name: 'New Mexico', avg: '$78,210', hourly: '$37.60/hr', cities: [['Albuquerque','$82,500–$92,000','$39.66–$44.23/hr'],['Santa Fe','$79,000–$88,000','$37.98–$42.31/hr'],['Las Cruces','$75,000–$84,000','$36.06–$40.38/hr']], nightLow: '$7,821', nightHigh: '$14,078', vivian: 'New+Mexico', fn: 'NewMexicoRNSalary' },
  { slug: 'north-carolina', name: 'North Carolina', avg: '$72,970', hourly: '$35.08/hr', cities: [['Charlotte','$77,000–$86,000','$37.02–$41.35/hr'],['Raleigh','$74,500–$83,000','$35.82–$39.90/hr'],['Durham','$73,500–$82,000','$35.34–$39.42/hr']], nightLow: '$7,297', nightHigh: '$13,135', vivian: 'North+Carolina', fn: 'NorthCarolinaRNSalary' },
  { slug: 'north-dakota', name: 'North Dakota', avg: '$72,140', hourly: '$34.68/hr', cities: [['Fargo','$76,000–$85,000','$36.54–$40.87/hr'],['Bismarck','$72,500–$81,000','$34.86–$38.94/hr'],['Grand Forks','$70,000–$78,000','$33.65–$37.50/hr']], nightLow: '$7,214', nightHigh: '$12,985', vivian: 'North+Dakota', fn: 'NorthDakotaRNSalary' },
  { slug: 'ohio', name: 'Ohio', avg: '$76,190', hourly: '$36.63/hr', cities: [['Columbus','$80,500–$90,000','$38.70–$43.27/hr'],['Cleveland','$78,000–$87,000','$37.50–$41.83/hr'],['Cincinnati','$75,000–$84,000','$36.06–$40.38/hr']], nightLow: '$7,619', nightHigh: '$13,714', vivian: 'Ohio', fn: 'OhioRNSalary' },
  { slug: 'oklahoma', name: 'Oklahoma', avg: '$67,150', hourly: '$32.28/hr', cities: [['Oklahoma City','$71,000–$79,000','$34.13–$37.98/hr'],['Tulsa','$69,000–$77,000','$33.17–$37.02/hr'],['Norman','$66,000–$74,000','$31.73–$35.58/hr']], nightLow: '$6,715', nightHigh: '$12,087', vivian: 'Oklahoma', fn: 'OklahomaRNSalary' },
  { slug: 'oregon', name: 'Oregon', avg: '$98,630', hourly: '$47.42/hr', cities: [['Portland','$104,000–$116,000','$50.00–$55.77/hr'],['Salem','$97,000–$108,000','$46.63–$51.92/hr'],['Eugene','$95,000–$106,000','$45.67–$50.96/hr']], nightLow: '$9,863', nightHigh: '$17,753', vivian: 'Oregon', fn: 'OregonRNSalary' },
  { slug: 'pennsylvania', name: 'Pennsylvania', avg: '$79,750', hourly: '$38.34/hr', cities: [['Philadelphia','$84,000–$94,000','$40.38–$45.19/hr'],['Pittsburgh','$81,000–$90,000','$38.94–$43.27/hr'],['Allentown','$78,000–$87,000','$37.50–$41.83/hr']], nightLow: '$7,975', nightHigh: '$14,355', vivian: 'Pennsylvania', fn: 'PennsylvaniaRNSalary' },
  { slug: 'rhode-island', name: 'Rhode Island', avg: '$88,030', hourly: '$42.32/hr', cities: [['Providence','$93,000–$104,000','$44.71–$50.00/hr'],['Cranston','$87,000–$97,000','$41.83–$46.63/hr'],['Warwick','$86,000–$96,000','$41.35–$46.15/hr']], nightLow: '$8,803', nightHigh: '$15,845', vivian: 'Rhode+Island', fn: 'RhodeIslandRNSalary' },
  { slug: 'south-carolina', name: 'South Carolina', avg: '$70,760', hourly: '$34.02/hr', cities: [['Columbia','$74,500–$83,500','$35.82–$40.14/hr'],['Charleston','$73,000–$81,500','$35.10–$39.18/hr'],['Greenville','$71,000–$79,000','$34.13–$37.98/hr']], nightLow: '$7,076', nightHigh: '$12,737', vivian: 'South+Carolina', fn: 'SouthCarolinaRNSalary' },
  { slug: 'south-dakota', name: 'South Dakota', avg: '$64,920', hourly: '$31.21/hr', cities: [['Sioux Falls','$68,500–$76,500','$32.93–$36.78/hr'],['Rapid City','$65,000–$73,000','$31.25–$35.10/hr'],['Aberdeen','$63,000–$70,500','$30.29–$33.89/hr']], nightLow: '$6,492', nightHigh: '$11,686', vivian: 'South+Dakota', fn: 'SouthDakotaRNSalary' },
  { slug: 'tennessee', name: 'Tennessee', avg: '$69,560', hourly: '$33.44/hr', cities: [['Nashville','$73,500–$82,000','$35.34–$39.42/hr'],['Memphis','$70,000–$78,000','$33.65–$37.50/hr'],['Knoxville','$68,000–$76,000','$32.69–$36.54/hr']], nightLow: '$6,956', nightHigh: '$12,521', vivian: 'Tennessee', fn: 'TennesseeRNSalary' },
  { slug: 'utah', name: 'Utah', avg: '$74,860', hourly: '$36.00/hr', cities: [['Salt Lake City','$79,000–$88,000','$37.98–$42.31/hr'],['Provo','$74,000–$83,000','$35.58–$39.90/hr'],['Ogden','$72,500–$81,000','$34.86–$38.94/hr']], nightLow: '$7,486', nightHigh: '$13,475', vivian: 'Utah', fn: 'UtahRNSalary' },
  { slug: 'vermont', name: 'Vermont', avg: '$77,750', hourly: '$37.38/hr', cities: [['Burlington','$82,000–$91,500','$39.42–$44.00/hr'],['South Burlington','$79,000–$88,000','$37.98–$42.31/hr'],['Montpelier','$76,000–$85,000','$36.54–$40.87/hr']], nightLow: '$7,775', nightHigh: '$13,995', vivian: 'Vermont', fn: 'VermontRNSalary' },
  { slug: 'virginia', name: 'Virginia', avg: '$77,720', hourly: '$37.37/hr', cities: [['Virginia Beach','$82,000–$91,500','$39.42–$44.00/hr'],['Richmond','$80,000–$89,000','$38.46–$42.79/hr'],['Norfolk','$77,000–$86,000','$37.02–$41.35/hr']], nightLow: '$7,772', nightHigh: '$13,990', vivian: 'Virginia', fn: 'VirginiaRNSalary' },
  { slug: 'washington', name: 'Washington', avg: '$97,960', hourly: '$47.10/hr', cities: [['Seattle','$103,500–$115,500','$49.76–$55.53/hr'],['Spokane','$96,000–$107,000','$46.15–$51.44/hr'],['Tacoma','$95,000–$106,000','$45.67–$50.96/hr']], nightLow: '$9,796', nightHigh: '$17,633', vivian: 'Washington', fn: 'WashingtonRNSalary' },
  { slug: 'west-virginia', name: 'West Virginia', avg: '$68,950', hourly: '$33.15/hr', cities: [['Charleston','$72,500–$81,000','$34.86–$38.94/hr'],['Huntington','$69,500–$77,500','$33.41–$37.26/hr'],['Morgantown','$68,000–$76,000','$32.69–$36.54/hr']], nightLow: '$6,895', nightHigh: '$12,411', vivian: 'West+Virginia', fn: 'WestVirginiaRNSalary' },
  { slug: 'wisconsin', name: 'Wisconsin', avg: '$78,140', hourly: '$37.57/hr', cities: [['Milwaukee','$82,500–$92,000','$39.66–$44.23/hr'],['Madison','$80,000–$89,000','$38.46–$42.79/hr'],['Green Bay','$77,000–$86,000','$37.02–$41.35/hr']], nightLow: '$7,814', nightHigh: '$14,065', vivian: 'Wisconsin', fn: 'WisconsinRNSalary' },
  { slug: 'wyoming', name: 'Wyoming', avg: '$71,730', hourly: '$34.49/hr', cities: [['Cheyenne','$75,500–$84,500','$36.30–$40.63/hr'],['Casper','$72,000–$80,500','$34.62–$38.70/hr'],['Laramie','$70,000–$78,000','$33.65–$37.50/hr']], nightLow: '$7,173', nightHigh: '$12,911', vivian: 'Wyoming', fn: 'WyomingRNSalary' },
];

function generatePage(s) {
  const [c1, c2, c3] = s.cities;
  return `import type { Metadata } from 'next';
import SEOPageLayout from '@/components/SEOPageLayout';
import SalaryTable from '@/components/SalaryTable';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RN Salary ${s.name} (2026): Hourly Pay + Highest Paying Cities',
  description:
    'Average RN salary in ${s.name} is ${s.avg}/year (${s.hourly}) in 2026. Compare pay by city and specialty.',
};

const faqs = [
  {
    question: 'How much do nurses make in ${s.name}?',
    answer: 'The average RN salary in ${s.name} is ${s.avg}/year (${s.hourly}) in 2026. Rates vary by city, specialty, and experience level.',
  },
  {
    question: 'What is the highest-paying nursing job in ${s.name}?',
    answer: 'CRNAs in ${s.name} typically earn $180,000\\u2013$220,000/year. Nurse Practitioners average $115,000\\u2013$130,000, and ICU nurses average $80,000\\u2013$105,000 depending on location.',
  },
  {
    question: 'Do travel nurses earn more in ${s.name}?',
    answer: 'Yes. Travel RNs in ${s.name} typically earn $2,000\\u2013$2,800/week on assignment \\u2014 significantly above staff nurse pay.',
  },
  {
    question: 'What is the job outlook for nurses in ${s.name}?',
    answer: 'Nursing demand in ${s.name} continues to grow, driven by an aging population and ongoing healthcare staffing shortages.',
  },
];

const cityData = [
  { label: '${c1[0]}', avgSalary: '${c1[1]}', hourlyRate: '${c1[2]}' },
  { label: '${c2[0]}', avgSalary: '${c2[1]}', hourlyRate: '${c2[2]}' },
  { label: '${c3[0]}', avgSalary: '${c3[1]}', hourlyRate: '${c3[2]}' },
  { label: 'State Average', avgSalary: '${s.avg}', hourlyRate: '${s.hourly}' },
];

export default function ${s.fn}() {
  return (
    <SEOPageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'RN Salary by State', href: '/rn-salary-by-state' },
        { label: '${s.name}' },
      ]}
      h1="RN Salary in ${s.name} \\u2014 2026 Nurse Pay Guide"
      lastUpdated="April 2026"
      schemaTitle="RN Salary in ${s.name} 2026"
      schemaDescription="${s.name} RN salary by city for 2026, based on BLS data."
      schemaUrl="/rn-salary-by-state/${s.slug}"
      faqs={faqs}
    >
      <p>
        ${s.name} registered nurses earn an average of ${s.avg}/year (${s.hourly}) in 2026.
        Below, we break down pay by city and top earning opportunities using Bureau of Labor Statistics
        2024 data with 2026 projections.
      </p>

      <SalaryTable
        title="RN Salary by City in ${s.name} (2026)"
        headers={['Metro Area', 'Avg. Annual Salary', 'Avg. Hourly Rate']}
        rows={cityData}
        source="BLS OEWS 2024 + NurseSalaryIntel data"
      />

      <h2 className="text-2xl font-bold font-headline text-on-surface">Night Shift Pay in ${s.name}</h2>
      <p>
        ${s.name} hospitals typically offer night shift differentials of 10\\u201318% above base pay.
        On a ${s.avg} base salary, consistent night shift work adds approximately ${s.nightLow}\\u2013${s.nightHigh}/year.{' '}
        <Link href="/salary-negotiation/night-shift-differential-pay" className="text-primary hover:underline font-semibold">
          See our complete night shift differential guide
        </Link>
        {' '}for detailed rates by specialty and hospital system.
      </p>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Travel Nursing in ${s.name}</h2>
      <p>
        Travel RN assignments in ${s.name} typically pay $2,000\\u2013$2,800/week. Demand is strongest in
        urban medical centers and specialty units.
      </p>
      <a
        href="https://www.vivian.com/search?query=Travel+RN+${s.vivian}&utm_source=nursesalaryintel&utm_medium=referral"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 gradient-primary text-on-primary rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
      >
        Find Travel RN Jobs in ${s.name} \\u2192
      </a>

      <h2 className="text-2xl font-bold font-headline text-on-surface">Compare ${s.name} to Other States</h2>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <Link href="/rn-salary-by-state/california" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Compare with California \\u2192</span>
        </Link>
        <Link href="/rn-salary-by-state/highest-paying-states" className="block p-4 rounded-lg border border-outline-variant hover:border-primary transition-colors">
          <span className="font-bold text-primary text-sm">Top 10 Highest-Paying States \\u2192</span>
        </Link>
      </div>
    </SEOPageLayout>
  );
}
`;
}

let created = 0;
let skipped = 0;

for (const s of states) {
  const dir = path.join(baseDir, s.slug);
  const file = path.join(dir, 'page.tsx');

  if (fs.existsSync(file)) {
    console.log(`SKIP (exists): ${s.slug}`);
    skipped++;
    continue;
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, generatePage(s), 'utf8');
  console.log(`CREATED: ${s.slug}/page.tsx`);
  created++;
}

console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`);
