import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";
import { setUid } from "./UidService";

export async function login(credentials) {
  const { data } = await axios.post("/auth/login", credentials);
  await setToken(data.extra.authToken);
  await setUid(data.extra.uid);
}

export async function loadUser() {
  const token = await getToken();
  const { data: user } = await axios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return user;
}

export async function logout(userId) {
  const token = await getToken();
  await axios.get(
    `/auth/logout/${userId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  await setToken(null);
}
