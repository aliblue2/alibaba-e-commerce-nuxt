export const signupFcHandler = async (
  fullname: string,
  email: string,
  password: string
) => {
  const response = await fetch("http://localhost:8000/signup", {
    body: JSON.stringify({ name: fullname, email, password }),
    method: "POST",
  });

  if (response.ok) {
    throw new Error("can not signup user with this creadentials");
  }

  const result = await response.json();
  return result;
};
