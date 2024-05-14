async function submitSignupForm() {
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: parseInt(document.getElementById('age').value),
        sex: document.getElementById('sex').value,
        username: document.getElementById('signupUsername').value,
        password: document.getElementById('signupPassword').value,
        contactNo: document.getElementById('contactNo').value,
    };

    try {
        const response = await fetch('http://localhost:27017/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                // Successful signup, redirect to qrcode page or any other page
                window.location.href = '/qrcode.html';
            } else {
                // Display error message from the server
                document.getElementById('signupErrorMessage').innerText = result.message;
            } 
        } else {
            // Handle other response status codes
            console.error('Error:', response.status);
        }
    } catch (error) {
        console.error('Error submitting signup form:', error);
    }
}
