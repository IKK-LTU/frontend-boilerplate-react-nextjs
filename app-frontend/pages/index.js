import { useState } from 'react'
import Head from 'next/head'
import FormStep1 from '../components/registrationFlow/FormStep1'

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: null,

  })

  const handleStateUpdate = (key, value) => {
    setFormData(prevData => {
      return {
      ...prevData,
      [key]: value
    }})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  console.log("fromdata", formData)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Frontend Boilerplate React/NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <FormStep1 
          onSubmit={handleSubmit}
          formData={formData}
          handleStateUpdate={handleStateUpdate}
          />
      </main>
    </div>
  )
}
