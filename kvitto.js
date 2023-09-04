document.getElementById('PdfButton').addEventListener('click', () => {
    fetch('productPage.html') // Fetch the content of products.html
        .then(response => response.text())
        .then(htmlContent => {
            // Create a new HTML element with the fetched content
            const div = document.createElement('div');
            div.innerHTML = htmlContent;

            // Generate a PDF from the HTML content using html2pdf.js
            html2pdf()
                .from(div)
                .outputPdf()
                .then(pdf => {
                    // Create a blob from the PDF bytes
                    const blob = new Blob([pdf], { type: 'application/pdf' });

                    // Create a download link for the PDF
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'products.pdf';
                    link.click();
                });
        })
        .catch(error => console.error('Error fetching products.html:', error));
});
