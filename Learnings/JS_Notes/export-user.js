// user.js
export const user = {
    username: "obuli",
    password: "1234",
  };
  
  export function login(inputUser, inputPass) {
    if (inputUser === user.username && inputPass === user.password) {
      return "Login successful!";
    } else {
      return "Invalid credentials.";
    }
  }
  