export const checkValidData = (email, password,name) => {
  const isEmailValid = /[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isValidUserName = /([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (!isValidUserName) return "User Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
