import React from 'react'

import PrimaryButton from './elements/buttons/PrimaryButton'

const ResultsScreen = ({data, onBack}) => {

	if(!data) return (
		<div className='w-full flex flex-col gap-3'>
			<h2>No data</h2>
		</div>
	)

	return (
		<div className='w-full flex flex-col gap-3'>

		<h1 className="text-xl text-center text-white font-semibold capitalize"
			data-testid="title"
		>
		 Results
		</h1>

			{Object.entries(data)?.map(item=> {
				const key = item[0]
				const value = item[1]
				return (
					<div key={key}>
						<p className='w-full text-white text-md'>
						{key}
						</p>
						<p className='w-full text-white text-md' data-testid={key}>
						{value}
						</p>
					</div>
				)
			})}
			<PrimaryButton
				onClick={onBack}
				data-testid="back"
				type="button"
				text="Back"
			/>
		</div>
	)
}

export default ResultsScreen