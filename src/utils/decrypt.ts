import CryptoJS from "crypto-js";

const KEY = CryptoJS.enc.Utf8.parse("2523105279348258");
const IV = CryptoJS.enc.Utf8.parse("2523105279348258");

export const decryptData = (encryptedText: string) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  const result = decrypted.toString(CryptoJS.enc.Utf8);
  return JSON.parse(result);
};