// Password Validation
const PassValidation = (str) => {
  return /[A-Z]/.test(str);
};

// Email Validation
const emailValidation = (str) => {
  return /\S+@\S+\.\S+/.test(str);
};

export { PassValidation, emailValidation };
