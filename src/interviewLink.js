import fetch from 'node-fetch'
import generateToken from 'utils/generateToken'

const payload = {}

const getInterviewLink = () => {
	return fetch('https://interviews.skype.com/api/interviews', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json',
	    'Authorization': 'Bearer ' + generateToken(JSON.stringify(payload))
	  },
	  body: JSON.stringify(payload)
	})
	.then(res => res.json())
	.then(console.log)
}
 
export default getInterviewLink