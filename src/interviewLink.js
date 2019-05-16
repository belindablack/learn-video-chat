import generateToken from './utils/tokenGenerator.js'
import sha256 from 'sha256'

const payload = {
	"jti": "d8661a14-4b7c-5fda-2227-9b055fcf5b10", // Random GUID
	"iss": "d9eaa136-20d5-0f51-60e1-943efbebd493",
	"iat": 1558025227825, // Current NumericDate
	"exp": 1558025227825 + 1000 // Current NumericDate + 10 seconds
}

const proxy = 'https://cors-anywhere.herokuapp.com/'

const getInterviewLink = () => {
	return fetch(proxy + 'https://interviews.skype.com/api/interviews', {
	  method: 'POST',
	  headers: {		
	    'Content-Type': 'application/json',
	    'Authorization': 'Bearer ' + generateToken(JSON.stringify(payload))	    
	  },
	  body: JSON.stringify(payload)
	})
	.then(res => res)
	.then(console.log)
}

export default getInterviewLink
