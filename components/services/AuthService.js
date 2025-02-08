import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";
import { setUid } from "./UidService";

export async function login(credentials) {
  const { data } = await axios.post("/signIn", credentials);
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

export async function logout() {
  const token = await getToken();
  await axios.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  await setToken(null);
}
