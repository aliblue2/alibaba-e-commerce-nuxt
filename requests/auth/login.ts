export const loginFcHandler = async (email: string, password: string) => {
  const response = await fetch("http://localhost:8000/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("can not login user with this creadenilas");
  }

  const { accessToken, refreshToken } = await response.json();
  const { setTokens } = useAuth();
  setTokens({ accessToken, refreshToken });
};
