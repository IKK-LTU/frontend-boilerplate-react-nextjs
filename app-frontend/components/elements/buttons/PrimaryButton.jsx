import React from 'react'

const PrimaryButton = ({testid, type, onClick, text}) => {
	return (
		<button
				className='px-3 py-1.5 w-full bg-black rounded-md border-gray-900 border-2 font-semibold text-white'
				onClick={onClick}
				data-testid={testid}
				type={type}
			>
				{text}
			</button>
	)
}

export default PrimaryButton