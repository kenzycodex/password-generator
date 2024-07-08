export function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*(),.?":{}|<>';
  
    let characters = '';
    let password = '';
  
    if (uppercase) characters += upperLetters;
    if (lowercase) characters += lowerLetters;
    if (numbers) characters += numberChars;
    if (symbols) characters += symbolChars;
  
    for (let i = 0; i < length; i++) {
      const character = characters[Math.floor(Math.random() * characters.length)];
      password += character;
    }
  
    return password;
  }
  
  export function updateStrength(password) {
    let strength = 0;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
  
    return strength;
  }
  