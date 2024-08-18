import CryptoJS from "crypto-js";
import development from "../config/development";
const encrypt = (text)=>{
    const ciphertext = CryptoJS.AES.encrypt(text, development.SECRET_KEY).toString();
    return ciphertext;
}

export default encrypt;
