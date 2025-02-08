import * as SecureStore from "expo-secure-store";

let uid = null;

export async function setUid(newUid) {
  uid = newUid;

  if (uid !== null) {
    await SecureStore.setItemAsync("uid", uid);
  } else {
    await SecureStore.deleteItemAsync("uid");
  }
}

export async function getUid() {
  if (uid !== null) {
    return uid;
  }
  uid = await SecureStore.getItemAsync("uid");

  return uid;
}
