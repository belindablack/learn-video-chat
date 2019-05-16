import React from 'React'
import getInterviewLink from './src/interviewLink'

const Interview = () => {
	return(
		<div>
			<button onClick={getInterviewLink}></button>
			<text>Text here</text>
		</div>
	)
}

export default Interview