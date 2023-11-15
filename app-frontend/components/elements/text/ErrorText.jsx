import React from 'react'

const ErrorText = ({text}) => {
	return (
		<li className='text-red-500 text-xs px-2'>
			{text}
		</li>
	)
}

export default ErrorText