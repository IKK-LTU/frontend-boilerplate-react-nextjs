import {Formik} from 'formik'
import * as Yup from 'yup'

import ErrorText from '../elements/text/ErrorText'
import PrimaryButton from '../elements/buttons/PrimaryButton'
import DefaultInput from '../elements/inputs/DefaultInput.jsx'

const validationSchema=
  Yup.object().shape({
    seat: Yup.string().required('Seat is a required field'),
    food: Yup.string().required('Food is a required field'),
    allergies: Yup.string().required('Allergies is a required field')
  })


const FormStep3=({onSubmit, onBack, formData}) => {


  const initialValues={
    seat: formData.seat||'',
    food: formData.food||'',
    allergies: formData.allergies||''
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
                <h1 data-testid="title"
                  className="text-xl mb-3 text-center text-white font-semibold capitalize"
                >
                  Step 3
                </h1>
                <DefaultInput
                  id="seat"
                  value={formik.values.seat}
                  onChange={formik.handleChange}
                  placeholder="Seat"
                />
                <DefaultInput
                  id="food"
                  value={formik.values.food}
                  onChange={formik.handleChange}
                  placeholder="Food"
                />
                <DefaultInput
                  id="allergies"
                  value={formik.values.allergies}
                  onChange={formik.handleChange}
                  placeholder="allergies"
                />

                {formik?.errors?.seat&&<ErrorText text={formik?.errors?.seat} />}
                {formik?.errors?.food&&<ErrorText text={formik?.errors?.food} />}
                {formik?.errors?.allergies&&<ErrorText text={formik?.errors?.allergies} />}

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

export default FormStep3