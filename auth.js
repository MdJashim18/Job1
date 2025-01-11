const handleRegistration = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
    const info = {
      username,
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };
  
    if (password === confirm_password) {
      document.getElementById("error").innerText = "";
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          password
        )
      ) {
        console.log(info);
  
        fetch("https://job-buop.onrender.com/employee/register/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      } else {
        document.getElementById("error").innerText =
          "pass must contain eight characters, at least one letter, one number and one special character:";
      }
    } else {
      document.getElementById("error").innerText =
        "password and confirm password do not match";
      alert("password and confirm password do not match");
    }
};
  
const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
};
  
const handleLogin = (event) => {
    event.preventDefault();
    const username = getValue("login-username");
    const password = getValue("login-password");
    console.log(username, password);
  
    if (username && password) {
      fetch("https://job-buop.onrender.com/employee/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          if (data.error) {
            document.getElementById("error").innerText = data.error;
          } else {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user_id);
            window.location.href = "index.html";
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          document.getElementById("error").innerText =
            "An error occurred during login. Please try again.";
        });
    } else {
      document.getElementById("error").innerText =
        "Username and password are required.";
    }
  };
  