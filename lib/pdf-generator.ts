import { jsPDF } from 'jspdf';

interface SalaryResults {
  specialty: string;
  state: string;
  experience: string;
  estimatedSalary: number;
  salaryRange: { min: number; max: number };
  hourlyRate: number;
}

export function generateSalaryReportPDF(results: SalaryResults): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Title Page
  doc.setFillColor(37, 99, 235); // blue-600
  doc.rect(0, 0, pageWidth, 60, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('Nurse Salary Report', pageWidth / 2, 25, { align: 'center' });

  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Personalized Compensation Analysis', pageWidth / 2, 40, { align: 'center' });

  // Reset text color
  doc.setTextColor(0, 0, 0);

  // Date
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  doc.text(`Generated: ${today}`, pageWidth / 2, 70, { align: 'center' });

  // Main Salary Information
  doc.setFillColor(239, 246, 255); // blue-50
  doc.roundedRect(15, 85, pageWidth - 30, 50, 3, 3, 'F');

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(55, 65, 81); // gray-700
  doc.text('Estimated Annual Salary', pageWidth / 2, 95, { align: 'center' });

  doc.setFontSize(32);
  doc.setTextColor(37, 99, 235); // blue-600
  doc.text(`$${results.estimatedSalary.toLocaleString()}`, pageWidth / 2, 110, { align: 'center' });

  doc.setFontSize(14);
  doc.setTextColor(75, 85, 99); // gray-600
  doc.text(`$${results.hourlyRate.toFixed(2)}/hour`, pageWidth / 2, 125, { align: 'center' });

  // Profile Details
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Profile', 15, 150);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  let yPos = 162;

  const profileData = [
    { label: 'Specialty:', value: results.specialty },
    { label: 'Location:', value: results.state },
    { label: 'Experience:', value: results.experience }
  ];

  profileData.forEach(item => {
    doc.setFont('helvetica', 'bold');
    doc.text(item.label, 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(item.value, 60, yPos);
    yPos += 8;
  });

  // Salary Range
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Salary Range Analysis', 15, 200);

  doc.setFillColor(249, 250, 251); // gray-50
  doc.roundedRect(15, 210, pageWidth - 30, 35, 3, 3, 'F');

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Minimum:', 20, 222);
  doc.setFont('helvetica', 'normal');
  doc.text(`$${results.salaryRange.min.toLocaleString()}`, pageWidth - 80, 222);

  doc.setFont('helvetica', 'bold');
  doc.text('Your Estimate:', 20, 232);
  doc.setTextColor(37, 99, 235); // blue-600
  doc.text(`$${results.estimatedSalary.toLocaleString()}`, pageWidth - 80, 232);

  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.text('Maximum:', 20, 242);
  doc.setFont('helvetica', 'normal');
  doc.text(`$${results.salaryRange.max.toLocaleString()}`, pageWidth - 80, 242);

  // Key Insights
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Key Insights', 15, 260);

  const insights = [
    'This estimate is based on Bureau of Labor Statistics (BLS) data',
    'with 2026 market projections.',
    '',
    'Actual salaries may vary based on:',
    '  • Specific facility and location within the state',
    '  • Shift differentials (night, weekend, holiday)',
    '  • Additional certifications and specializations',
    '  • Benefits package and sign-on bonuses',
    '  • Current market demand in your area'
  ];

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  yPos = 270;

  insights.forEach(insight => {
    if (yPos > pageHeight - 30) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(insight, 20, yPos);
    yPos += insight === '' ? 3 : 6;
  });

  // New Page for Additional Information
  doc.addPage();

  // Header
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, pageWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Negotiation Tips & Next Steps', pageWidth / 2, 16, { align: 'center' });

  doc.setTextColor(0, 0, 0);

  // Negotiation Tips
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('How to Use This Report', 15, 40);

  const tips = [
    '1. Compare Offers',
    '   Use this estimate as a baseline when evaluating job offers.',
    '   If an offer is significantly below this range, be prepared to',
    '   negotiate or ask for additional benefits.',
    '',
    '2. Highlight Your Value',
    '   Emphasize certifications, specialized skills, and relevant',
    '   experience during salary negotiations.',
    '',
    '3. Consider Total Compensation',
    '   Look beyond base salary:',
    '   • Health insurance and benefits',
    '   • Retirement matching (401k/403b)',
    '   • PTO and sick leave',
    '   • Sign-on bonuses and relocation assistance',
    '   • Professional development and CEU reimbursement',
    '',
    '4. Research Specific Facilities',
    '   Visit NurseSalaryIntel.com to see actual salaries from',
    '   specific hospitals and healthcare systems in your area.',
    '',
    '5. Timing Matters',
    '   Healthcare facilities often have urgent staffing needs.',
    '   Being available quickly can increase your negotiating power.'
  ];

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  yPos = 48;

  tips.forEach(tip => {
    if (yPos > pageHeight - 30) {
      doc.addPage();
      yPos = 20;
    }
    if (tip.startsWith('   ')) {
      doc.text(tip, 20, yPos);
    } else {
      doc.setFont('helvetica', 'bold');
      doc.text(tip, 15, yPos);
      doc.setFont('helvetica', 'normal');
    }
    yPos += tip === '' ? 4 : 6;
  });

  // Additional Resources
  yPos += 10;
  doc.setFillColor(239, 246, 255);
  doc.roundedRect(15, yPos, pageWidth - 30, 35, 3, 3, 'F');

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Additional Resources', pageWidth / 2, yPos + 10, { align: 'center' });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text('Visit NurseSalaryIntel.com for:', pageWidth / 2, yPos + 20, { align: 'center' });
  doc.text('• Real salary data from 1000+ nursing positions', pageWidth / 2, yPos + 27, { align: 'center' });
  doc.text('• Contract red flag analysis tool', pageWidth / 2, yPos + 33, { align: 'center' });

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(107, 114, 128);
  doc.text('NurseSalaryIntel.com', pageWidth / 2, pageHeight - 15, { align: 'center' });
  doc.text('For informational purposes only. Individual results may vary.', pageWidth / 2, pageHeight - 10, { align: 'center' });

  // Save the PDF
  const filename = `Nurse_Salary_Report_${results.specialty.replace(/\s+/g, '_')}.pdf`;
  doc.save(filename);
}
