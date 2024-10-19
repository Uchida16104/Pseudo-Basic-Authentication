       function authenticate() {
           const username = prompt('Please enter user name:');
           const password = prompt('Please enter password:');
           const users = JSON.parse(localStorage.getItem('users')) || [];

           const user = users.find(user => user.username === username && user.password === password);

           if (user) {
               alert('Authentication succeeded!');
               window.location.href = 'welcome.php';
           } else {
               alert('Authentication failed.');
               window.location.href = 'error.php';
           }
       }

       function checkAuthStatus() {
           const isAuthenticated = localStorage.getItem('isAuthenticated');
           if (!isAuthenticated) {
               authenticate();
           }
       }

      function markAuthenticated() {
           localStorage.setItem('isAuthenticated', 'true');
       }

       window.onload = () => {
           checkAuthStatus();
       };
