import React from 'react'

const FormStep1 = ({onSubmit, handleStateUpdate, formData}) => {
	return (
		<form 
		className='w-96 p-4 flex flex-col gap-3 bg-blue-700'
		onSubmit={onSubmit}
	>
		<h1>Login</h1>
		<input 
			className='w-full py-1 px-2'
			type="text"
			required
			name="firstName"
			id="firstName"
			data-testid="firstName"
			value={formData.firstName}
			onChange={e => handleStateUpdate('firstName',e.target.value)}
			placeholder="First name"
		/>
		<input 
			className='w-full py-1 px-2'
			type="text"
			required
			name="lastName"
			id="lastName"
			data-testid="lastName"
			value={formData.lastName}
			onChange={e => handleStateUpdate('lastName',e.target.value)}
			placeholder="Last name"
		/>
		<input 
			className='w-full py-1 px-2'
			type="number"
			required
			name="age"
			id="age"
			data-testid="age"
			value={formData.age}
			onChange={e => handleStateUpdate('age',e.target.value)}
			placeholder="Your age"
		/>
		<div className='flex flex-row gap-2'>
		<button
			className='w-1/2 px-3 py-2 bg-yellow-50'
			type="button"
			onClick={() => console.log(formData)}
		 >
			Back
		</button>
		<button 
			className='w-1/2 px-3 py-2 bg-green-400'
			type="submit"
			data-testid="submit"
		>
			Next
		</button>
		</div>
	</form>
	)
}

export default FormStep1