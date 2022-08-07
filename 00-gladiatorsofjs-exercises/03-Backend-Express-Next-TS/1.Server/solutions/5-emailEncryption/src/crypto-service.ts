// On a high-level the process between a sender and receiver looks like this:

// 1. The recipient generates public and private keys.
// 2. The recipient sends its public key to the sender.
// 3. The sender encrypts the message using the given public key.
// 4. The sender sends the encrypted message to the recipient.
// 5. The recipient decrypts the message using its private key.

require('dotenv').config();

import randomWords from 'random-words';
import * as openpgp from 'openpgp';

import { Email, email } from './utils';

class CryptoService {
  static async encryptEmail(email: Email, publicKey: string) {
    const encrypted = await openpgp.encrypt({
      message: await openpgp.createMessage({ text: email.body }),
      encryptionKeys: await openpgp.readKey({ armoredKey: publicKey }),
    });

    return { message: encrypted };
  }

  static async decryptEmail(
    encryptedEmail: string,
    privateKeyArmored: string,
    passphrase: string
  ) {
    const pk = await openpgp.readPrivateKey({
      armoredKey: privateKeyArmored,
    });

    const privateKey = await openpgp.decryptKey({
      privateKey: pk,
      passphrase,
    });

    const decrypted = await openpgp.decrypt({
      message: await openpgp.readMessage({ armoredMessage: encryptedEmail }),
      decryptionKeys: privateKey,
    });

    return decrypted;
  }
}

(async () => {
  const passphrase = randomWords({ exactly: 1, join: ' ' }); // long random word

  // 1. The recipient generates public and private keys.
  const { publicKey, privateKey } = await openpgp.generateKey({
    userIDs: [{ name: 'user', email: 'recipient@gmail.com' }],
    curve: 'ed25519',
    passphrase,
  });

  // 2. The recipient sends its public key to the sender.
  // 3. The sender encrypts the message using the given public key.
  const { message } = await CryptoService.encryptEmail(email, publicKey);

  // 4. The sender sends the encrypted message to the recipient.

  // 5. The recipient decrypts the message using its private key.
  const decrypted = await CryptoService.decryptEmail(
    message as string,
    privateKey,
    passphrase
  );

  console.log({ decrypted });
})();
