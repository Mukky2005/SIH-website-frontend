       var formData = [];

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form data
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            // Add the new data to the array
            formData.push({ name: name, email: email, subject: subject, message: message });

            // Clear the form
            document.getElementById('contact-form').reset();

            alert('Your message has been sent and saved in memory.');
        });

        // Function to extract and display the stored data
        function displayFormData() {
            var output = document.getElementById('output');
            output.innerHTML = ''; // Clear previous output

            formData.forEach(function(data, index) {
                var entry = document.createElement('div');
                entry.className = 'entry';
                entry.innerHTML = `<strong>Entry ${index + 1}:</strong><br>
                                   Name: ${data.name}<br>
                                   Email: ${data.email}<br>
                                   Subject: ${data.subject}<br>
                                   Message: ${data.message}<br>`;
                output.appendChild(entry);
            });
        }