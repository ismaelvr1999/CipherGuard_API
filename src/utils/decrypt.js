import CryptoJS from "crypto-js";
import development from "../config/development";
const decrypt = (ciphertext)=>{
    let bytes  = CryptoJS.AES.decrypt(ciphertext, development.SECRET_KEY);
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    return originalText;
}

export default decrypt;
