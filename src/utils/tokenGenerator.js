import Guid from 'guid';
import sha256 from 'sha256';
import jwt from 'jsonwebtoken';

function generateToken(content) {
  console.log(content)
  return jwt.sign({
    jti: Guid.raw(),
    iss: "d9eaa136-20d5-0f51-60e1-943efbebd493",
    sub: sha256("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkODY2MWExNC00YjdjLTVmZGEtMjIyNy05YjA1NWZjZjViMTAiLCJpc3MiOiIwZWQwZTAxYi00ZjhmLTkzZWUtNDVkZS05Njk1OTU0YTQ0YTkiLCJzdWIiOiI0NDEzNmZhMzU1YjM2NzhhMTE0NmFkMTZmN2U4NjQ5ZTk0ZmI0ZmMyMWZlNzdlODMxMGMwNjBmNjFjYWFmZjhhIiwiZXhwIjoxNTE5MzQzNzI0LCJpYXQiOjE1MTkzNDM3MTR9.4KSookeDh2d_Vujy_bUiA2n0yKY39inaIc1laWjDt6Q"),
    exp: Math.floor(Date.now() / 1000) + 10
  }, "838b3313-6092-5cc8-3a62-fd02f14a80eb")
}

export default generateToken
