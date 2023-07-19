import React from 'react'
import { Formik, Field, Form} from 'formik'
import useSignin from './useSignin'
import { StateType, UserEmail } from '../../types/Types'
import { validationSchema } from '../../validation'
import "./Signin.css"
import { useSelector } from 'react-redux'
import Error from '../Error/Error'

const Signin = () => {
  const error = useSelector((state: StateType) => state.error)
  const {handleSubmit} = useSignin()
  
  const initial: UserEmail = {
    username: "Bret",
    email: "Sincere@april.biz"
  }
  
  return (
    !error?
    <div className='container'>
      <h1>Signin</h1>
      <Formik initialValues = {initial}
      validationSchema={validationSchema}
      onSubmit={values => {
         handleSubmit(values)
      }}>
        {({ errors, touched }) => (
          <Form>
          Email
          <Field name="email" validate={validationSchema}/>
          {errors.email && touched.email && <div>{errors.email}</div>}
          Username
          <Field name="username" validate={validationSchema} />
          {errors.username && touched.username && <div>{errors.username}</div>}
           <button type="submit">Submit</button>
        </Form>
      )}
      </Formik>
    </div>
    :
    <Error/>
  )
}

export default Signin