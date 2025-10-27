 const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");

    function showRegister() {
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
      formTitle.textContent = "Register";
    }

    function showLogin() {
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
      formTitle.textContent = "Login";
    }

    function login() {
      let email = document.getElementById("login-email").value;
      let password = document.getElementById("login-password").value;

      if (email && password) {
        alert("Login Successful!\nEmail: " + email);
      } else {
        alert("Please fill in all fields.");
      }
    }

    function register() {
      let name = document.getElementById("reg-name").value;
      let email = document.getElementById("reg-email").value;
      let password = document.getElementById("reg-password").value;
      let confirm = document.getElementById("reg-confirm").value;


      if (!name || !email || !password || !confirm) {
        alert("Please fill in all fields.");
        return;
      }
      if (password !== confirm) {
        alert("Passwords do not match!");
        return;
      }
      alert("Registration Successful!\nWelcome, " + name);
      showLogin();
    }