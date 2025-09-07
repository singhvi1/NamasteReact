export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
      password
    );
  const isValidName = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(name);
  if (!isEmailValid) return "Email Id is not Valid";
  if (!isValidPassword) return "Password is Not Valid";
  if (!isValidName && name!==null && name.trim().length<3) return "Name is Not Valid";

  return null;
};
