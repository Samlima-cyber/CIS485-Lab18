# Lab 18 – Hashing, Encoding, and Encrypting Data (CIS 485)

## 🔐 Objective

This lab demonstrates data protection techniques using:
- SHA-256 Hashing
- Base64 Encoding/Decoding
- AES Encryption/Decryption
- A combined process chaining all three together

## 🏗️ Technologies Used

- Node.js
- `crypto` module (built-in)
- `crypto-js` for AES operations

## 🗂️ Files Included

| File          | Description                                 |
|---------------|---------------------------------------------|
| `hashing.js`  | Hashes user input with SHA-256              |
| `encoding.js` | Base64 encodes and decodes input            |
| `encryption.js` | AES encrypts and decrypts a string        |
| `combined.js` | Chains all 3 steps for secure data handling |

---

## 🚀 How to Run

1. Install dependencies:
```bash
npm install crypto-js
Run the scripts:

bash
Copy
Edit
node hashing.js "Hello World"
node encoding.js "Sample Text"
node encryption.js "Secret Message"
node combined.js "myPassword123"
🧠 Reflection Answers
Q: What's the difference between hashing, encoding, and encryption?

Hashing: One-way transformation. Can't be reversed. Used for integrity (e.g., passwords).

Encoding: Reversible, but not secure (e.g., Base64). Used for data transport.

Encryption: Reversible with a key. Used to protect sensitive data.

Q: When to use what?

Use hashing for passwords or checksums.

Use encoding when sending binary data as text (e.g., in JSON or URLs).

Use encryption when data must be securely hidden but also retrievable (e.g., private messages).

👨‍💻 Author
Sam Lima
CIS 485 – Spring 2025
