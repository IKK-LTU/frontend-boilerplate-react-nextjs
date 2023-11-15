import {Formik} from 'formik'
import * as Yup from 'yup'

import ErrorText from '../elements/text/ErrorText'
import PrimaryButton from '../elements/buttons/PrimaryButton'
import DefaultInput from '../elements/inputs/DefaultInput.jsx'

const validationSchema=
  Yup.object().shape({
    email: Yup.string()
      .required('Email is a required field')
      .email('Email should have correct format'),
    phone: Yup.string()
      .required('Phone number is a required field')
  })


const FormStep2=({onSubmit, onBack, formData}) => {


  const initialValues={
    email: formData.email||'',
    phone: formData.phone||''
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
                <h1 className="text-xl mb-3 text-center text-white font-semibold capitalize" data-testid="title">
                  Step 2
                </h1>

                <DefaultInput
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email"
                />
                <DefaultInput
                  id="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder="Phone Number"
                />

                {formik?.errors?.email&&<ErrorText text={formik?.errors?.email} />}
                {formik?.errors?.phone&&<ErrorText text={formik?.errors?.phone} />}

                <div className='flex flex-row gap-3 mt-auto'>
                  <PrimaryButton
                    testid="back"
                    onClick={onBack}
                    type="button"
                    text="Back"
                  />
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

export default FormStep2