// validation.js
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePassword = (password) => {
    return password.length >= 8;
  };
  
  export const validateName = (name) => {
    return name.trim() !== '';
  };
  
  export const validateCollege = (college) => {
    return college.trim() !== '';
  };
  