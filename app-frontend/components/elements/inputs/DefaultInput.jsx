import React from 'react'

const DefaultInput = ({
	id,
	type = 'string',
	value,
	onChange,
	name,
	testid,
	placeholder
}) => (
		<input
		className='w-full backdrop-opacity-75 rounded-md py-1 px-3'
		type={type}
		value={value}
		onChange={onChange}
		name={name || id}
		id={id}
		data-testid={testid || id}
		placeholder={placeholder}
	/>
	)

export default DefaultInput