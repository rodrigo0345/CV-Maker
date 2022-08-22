import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

window.html2canvas = html2canvas;

export default async function HtmlToPdf(e) {
    
    e.preventDefault();
    
    const html = document.getElementById("printable");

    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: 'a4',
      });

    await html2canvas(html, {
        useCORS: true,
        allowTaint: true,
    }).then((canvas) => {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 5, 5); 
    });

    pdf.save('cv');
    
}