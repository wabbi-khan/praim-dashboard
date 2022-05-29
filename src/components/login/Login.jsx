import React from "react";
import backGround from "../../img/bg.png";
import Logo from "../../img/logo.png";
import "./style.css";
const Login = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-8'>
            <div>
              <img src={backGround} className='bg' alt='bg' />
            </div>
          </div>
          <div className='col-4'>
            <div className='left-section'>
              <div>
                <img src={Logo} className='logo' alt='logo' />
              </div>
              <div className='text'>
                <b>Welcome Back!</b>
              </div>
              <div>
                <p>You've been missed</p>
              </div>
              <div className='form'>
                <form>
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>
                      <b> Your Email</b>
                    </label>
                    <input
                      type='email'
                      class='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      placeholder='example@gmail.com'
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputPassword1'>
                      <b> Password</b>
                    </label>
                    <input
                      type='password'
                      class='form-control'
                      id='exampleInputPassword1'
                      placeholder='Password'
                    />
                  </div>
                  <div class='form-group form-check'>
                    <input
                      type='checkbox'
                      class='form-check-input'
                      id='exampleCheck1'
                    />
                    <label class='form-check-label' for='exampleCheck1'>
                      Remember me
                    </label>
                    <label class='form-check-label ml-4 forgot'>
                      Forgot Password?
                    </label>
                  </div>
                  <button type='submit' class='btn btn-primary'>
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
