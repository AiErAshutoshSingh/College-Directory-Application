document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validate credentials (this example uses a simple check, ideally, you should check against a database)
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.username === username && u.password === password && u.role === role);
            if (user) {
                // Redirect based on role
                if (role === 'student') {
                    window.location.href = 'student.html';
                } else if (role === 'faculty') {
                    window.location.href = 'faculty.html';
                } else if (role === 'admin') {
                    window.location.href = 'admin.html';
                }
            } else {
                document.getElementById('error-message').textContent = 'Incorrect credentials, please try again.';
            }
        });
});
