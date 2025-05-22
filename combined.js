const crypto = require('crypto');
const CryptoJS = require('crypto-js');
const secretKey = 'mySecretKey123';

function hashData(data) {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}

function encodeBase64(data) {
  return Buffer.from(data).toString('base64');
}

function decodeBase64(encodedData) {
  return Buffer.from(encodedData, 'base64').toString('utf-8');
}

function encryptData(data) {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}

function secureProcess(password) {
  const hashed = hashData(password);
  console.log("Hashed:", hashed);

  const encoded = encodeBase64(hashed);
  console.log("Base64 Encoded:", encoded);

  const encrypted = encryptData(encoded);
  console.log("Encrypted:", encrypted);

  const decrypted = decryptData(encrypted);
  const decoded = decodeBase64(decrypted);
  console.log("Decrypted and Decoded:", decoded);
}

const input = process.argv[2] || "myPassword123";
secureProcess(input);
