document.addEventListener('DOMContentLoaded', () => {

  // Login handler
  async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in.');
      }
    }
  }

  // Signup handler
  async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    }
  }

  // Logout handler
  async function logoutHandler(event) {
    event.preventDefault();

    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  }

  // Event listeners for form submissions
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
  document.querySelector('#logout').addEventListener('click', logoutHandler);

  // Additional handlers for post creation, editing, and commenting can be implemented here following a similar pattern.
});

