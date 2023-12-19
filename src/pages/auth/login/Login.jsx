import React from 'react'

const Login = () => {
  return (
    <div className='login_page'>
      <div className="container">
        <div className="row py-5 px-3 bg-light rounded-5 mt-3 mb-5">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img className='w-75 border border-5 rounded-circle' src="/assets/images/mult (6).jpg" alt="" />
          </div>
          <div className="col-12 col-md-6">
            <h3 className='text-center'>ورود</h3>
            <form>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='w-100 my-3' dir='rtl'>
                  <label className='mb-3 fw-bold' htmlFor="email">ایمیل</label>
                  <input className='form-control py-2 px-2 fw-semibold border border-0' type="email" placeholder='ایمیل' />
                </div>
                <div className='w-100 my-3' dir='rtl'>
                  <label className='mb-3 fw-bold' htmlFor="password">رمزعبور</label>
                  <input className='form-control py-2 px-2 fw-semibold border border-0' type="password" placeholder='رمزعبور' />
                </div>
              </div>
              <div className="form-check mt-2">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label me-4" htmlFor="defaultCheck1">
                  مرا به خاطر بسپار
                </label>
              </div>
              <div className='w-100 mt-3'>
                <button className='w-100 rounded-5 btn btn-primary' type='submit'>ورود</button>
              </div>
              <div className='mt-3 text-center d-flex flex-column'>
                <a className='a_tag fw-bold' href="/">رمزعبور خود را فراموش کرده اید ؟</a>
                <a className='a_tag mt-2 fw-bold' href="/register">ثبت نام</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
