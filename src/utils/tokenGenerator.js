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
  }, "4695d5d9-6a0c-497a-f7c6-93b720c529f3")
}

export default generateToken
