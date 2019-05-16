import Guid from 'guid';
import sha256 from 'sha256';
import jwt from 'jsonwebtoken';

function generateToken(content) {
  jwt.sign({
    jti: Guid.raw(),
    iss: process.env.API_KEY,
    sub: sha256(content),
    exp: Math.floor(Date.now() / 1000) + 10
  }, process.env.API_SECRET)
}

export default generateToken