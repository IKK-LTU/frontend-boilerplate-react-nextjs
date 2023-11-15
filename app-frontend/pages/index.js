import { useState } from 'react'

import Head from 'next/head'

import FormStep1 from '../components/registrationFlow/FormStep1'
import FormStep2 from '../components/registrationFlow/FormStep2'
import FormStep3 from '../components/registrationFlow/FormStep3'
import ResultsScreen from '../components/ResultsScreen'

const Home = () => {
  const [formIndex, setFormIndex] = useState(0)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: undefined,
    email: '',
    phone: '',
    seat: '',
    food: '',
    allergies: ''
  })

  const handleStateUpdate = (newValues) => {
    setFormData(prevData => {
      return {
      ...prevData, 
      ...newValues
    }})
  }

  const handleBack = () => {
    setFormIndex(prev => prev -1)
  }
  const handleNextForm = () => {
    setFormIndex(prev => prev + 1)
  }


  const handleSubmit = (newValues, nextForm) => {
    handleStateUpdate(newValues)
    handleNextForm()
  }

  const renderForm = (index) => {
    switch (index) {
      case 0:
      return <FormStep1 
              onSubmit={handleSubmit}
              formData={formData}
          />
      case 1:
      return  <FormStep2 
            onSubmit={handleSubmit}
            onBack={handleBack}
            formData={formData}
          />
      case 2:
      return  <FormStep3 
            onSubmit={handleSubmit}
            onBack={handleBack}
            formData={formData}
          />
    
      default:
        <FormStep1 
          onSubmit={handleSubmit}
          formData={formData}
      />
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 h-3/5">
      <Head>
        <title>Telia test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-96 px-4 py-6 card-glass min-h-96">
        {formIndex === 3 
          ? <ResultsScreen data={formData} onBack={handleBack} />
          : renderForm(formIndex)
        }
      </main>
    </div>
  )
}
export default Home;
