// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Create a new workbook and worksheet
    var wb = XLSX.utils.book_new();
    var ws_data = [
        ["Name", "Email", "Subject", "Message"],
        [name, email, subject, message]
    ];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "ContactUs");

    // Write the workbook to a file
    XLSX.writeFile(wb, "ContactUsDetails.xlsx");

    // Clear the form
    document.getElementById('contact-form').reset();

    alert('Your message has been sent and saved to an Excel file.');
});
