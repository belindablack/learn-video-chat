import Guid from 'guid';
import sha256 from 'sha256';
import jwt from 'jsonwebtoken';

function generateToken(content) {
  console.log(content)
  return jwt.sign({
    jti: Guid.raw(),
    iss: "d9eaa136-20d5-0f51-60e1-943efbebd493",
    sub: sha256(content),
    exp: Math.floor(Date.now() / 1000) + 10
  }, "838b3313-6092-5cc8-3a62-fd02f14a80eb")
}

export default generateToken
