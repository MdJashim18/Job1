document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
    if (isLoggedIn) {
      // Show Profile and Logout buttons, hide Login and Register
      document.getElementById('registerButton').style.display = 'none';
      document.getElementById('loginButton').style.display = 'none';
      document.getElementById('logoutButton').style.display = 'inline-block';
      document.getElementById('profileButton').style.display = 'inline-block';
    } else {
      // Show Login and Register buttons, hide Profile and Logout
      document.getElementById('registerButton').style.display = 'inline-block';
      document.getElementById('loginButton').style.display = 'inline-block';
      document.getElementById('logoutButton').style.display = 'none';
      document.getElementById('profileButton').style.display = 'none';
    }
  });
  
  // Call this function when the user logs in
  function login() {
    // After successful login, save the login state
    localStorage.setItem('isLoggedIn', 'true');
    window.location.reload(); // Reload the page to update UI
  }
  
  // Call this function when the user logs out
  function logout() {
    // Clear the login state and reload the page
    localStorage.setItem('isLoggedIn', 'false');
    window.location.reload(); // Reload the page to update UI
  }
  