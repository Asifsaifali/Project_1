import bcrypt from 'bcrypt'

//********************//Password Validation*******
const PassValidation = (str) => {
  return /[A-Z]/.test(str);
};

//*******************//Email Validation\\*********
const emailValidation = (str) => {
  return /\S+@\S+\.\S+/.test(str);
};

//*******************Password Hashing********//
const hashPassword = async(pass) => {
    const saltRounds = 10;
      const hash = await bcrypt.hash(pass, saltRounds)
      return hash
  }

export { PassValidation, emailValidation, hashPassword };
