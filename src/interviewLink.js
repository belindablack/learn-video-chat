import fetch from 'node-fetch'
import generateToken from './utils/tokenGenerator.js'

const payload = {
	"jti": "d8661a14-4b7c-5fda-2227-9b055fcf5b10", // Random GUID
	"iss": "YOUR_API_KEY",
	"iat": 1519343714, // Current NumericDate
	"sub": "44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a", // SHA256 hash request body
	"exp": 1519343724 // Current NumericDate + 10 seconds
}

const getInterviewLink = () => {
	return fetch('https://interviews.skype.com/api/interviews', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Authorization': 'Bearer ' + generateToken(JSON.stringify(payload)),
			'Access-Control-Allow-Origin': 'http://localhost:3000'
	  },
	  body: JSON.stringify(payload)
	})
	.then(res => res.json())
	.then(console.log)
}

export default getInterviewLink
