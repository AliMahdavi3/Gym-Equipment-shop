import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { initialValues, onSubmit, validationSchema } from '../core/LoginCore'
import { useNavigate } from 'react-router-dom';
import FormikControl from '../../../components/FormikControl';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => onSubmit(values, action, navigate)}
      validationSchema={validationSchema}
    >
      {
        (formik) => {
          return (
            <div className='login_page'>
              <div className="container">
                <div className="row py-5 px-3 bg-light rounded-5 mt-3 mb-5">
                  <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img className='w-75 border border-5 rounded-circle' src="/assets/images/mult (6).jpg" alt="" />
                  </div>
                  <div className="col-12 col-md-6">
                    <h3 className='text-center'>ورود</h3>
                    <Form>
                      <div className='d-flex flex-column justify-content-center align-items-center'>
                        <FormikControl
                          formik={formik}
                          control='input'
                          type='email'
                          name='email'
                          label='ایمیل'
                          placeholder='ایمیل'
                        />
                        
                        <FormikControl
                          formik={formik}
                          control='input'
                          type='password'
                          name='password'
                          label='رمزعبور'
                          placeholder='رمزعبور'
                        />
                      </div>

                      <div className='w-100 mt-3'>
                        <button className='w-100 rounded-5 btn btn-primary' type='submit'>ورود</button>
                      </div>
                    </Form>
                      <div className='mt-3 text-center d-flex flex-column'>
                        <a className='a_tag mt-2 fw-bold' href="/register">ثبت نام</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
    </Formik>

  )
}

export default Login
