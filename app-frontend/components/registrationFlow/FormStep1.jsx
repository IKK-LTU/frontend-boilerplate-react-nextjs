import { Formik } from 'formik'
import * as Yup from 'yup'

import ErrorText from '../elements/text/ErrorText'
import PrimaryButton from '../elements/buttons/PrimaryButton'
import DefaultInput from '../elements/inputs/DefaultInput.jsx'

const validationSchema =
  Yup.object().shape({
    firstName: Yup.string()
		.matches(/^[A-Za-z]+$/, 'First name should not contain numbers')
		.required('First name is a required field'),
    lastName: Yup.string().required('Required')
		.matches(/^[A-Za-z]+$/, 'Last name should not contain numbers')
		.required('Last name is a required field'),
		age: Yup.number()
    .required('Age must be a number')
		.positive('Age should be positive')
		.nullable()
  })


const FormStep1=({ onSubmit, formData}) => {

  const initialValues = {
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    age: formData.age || undefined
  }

  return (
		<div className='w-full h-72 flex flex-col gap-3'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={onSubmit}
      >
        {formik => {
          return (
            <form onSubmit={formik.handleSubmit} className='w-full h-full'>
              <div className='w-full h-full flex flex-col gap-3'>
                <h1 className="text-xl mb-3 text-center text-white font-semibold capitalize"
                  data-testid="title"
                >
                  Step 1
                </h1>
                <DefaultInput
                  id="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  placeholder="First Name"
                />
                <DefaultInput
                   id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  placeholder="Last Name"
                />
                <DefaultInput
                  type="number"
                  id="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  placeholder="Age"
                />

								 {formik?.errors?.firstName && <ErrorText text={formik?.errors?.firstName} />}
								 {formik?.errors?.lastName && <ErrorText text={formik?.errors?.lastName} />}
								 {formik?.errors?.age && <ErrorText text={formik?.errors?.age} />}

								<div className='flex flex-row gap-3 mt-auto'>
                  <PrimaryButton
                    testid="submit"
                    type="submit"
                    text="Next"
                  />
                </div>
              </div>
            </form>

          )
        }}
      </Formik>
    </div>
  )
}

export default FormStep1