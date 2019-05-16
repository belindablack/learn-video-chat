import generateToken from './utils/tokenGenerator.js'

const payload = {
	"jti": "d8661a14-4b7c-5fda-2227-9b055fcf5b10", // Random GUID
	"iss": "d9eaa136-20d5-0f51-60e1-943efbebd493",
	"iat": 1519343714, // Current NumericDate
	"sub": "44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a", // SHA256 hash request body
	"exp": 1519343724 // Current NumericDate + 10 seconds
}

const proxy = 'https://cors-anywhere.herokuapp.com/'

const getInterviewLink = () => {
	return fetch(proxy + 'https://interviews.skype.com/api/interviews', {
	  method: 'POST',
	  headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'POST',
	    'Content-Type': 'application/json',
	    'Authorization': 'Bearer ' + generateToken()
	  },
	  body: JSON.stringify(payload)
	})
	.then(res => res.json())
	.then(console.log)
}

export default getInterviewLink
