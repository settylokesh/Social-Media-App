const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // Email validation
export const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/; // Password Validation

export function EmailCheck ( email ){
  if (!email) {
    return 'Email is required!';
  } else if (!regexEmail.test(email)) {
    return 'This is not a valid email format!';
  }                        
}

export function PasswordCheck(password){
  if (!password) {
    return 'Password is required!';
  } else if (password.length < 8) {
    return  'Password must be atleast 8 characters';
  } else if (password.length > 16) {
    return 'Password cannot exceed more than 16 characters';
  } else if (!regexPassword.test(password)) {
    return 'Password should be combination of Captial and Small Alphabets and Numbers combination';
  }

}
