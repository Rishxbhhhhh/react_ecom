import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./style.css";
import Logo from '../../Assests/images/logo.png';
import { handleError, handleSuccess } from '../../utils';

const Signup = () => {

  const [signupInfo, setSignupInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    const { firstname,lastname, email, password} = signupInfo;
    if (!firstname || !email || !password) {
      return handleError('name, email and password are required')
    }
    try {
      const url = "http://localhost:8080/auth/signup"
      const response = await fetch(url,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      console.log(signupInfo);
      const {success, message} = result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate('/login');
        },1000)
      }
    } catch (err) {
      handleError(err);
    }
  }

  return (

    <div className='container'>
      <Link to={"/"}>
        <img style={{ width: "150px", height: '50px', marginLeft: '30px', cursor: 'pointer', marginBottom: "20px" }} alt='home' src={Logo} />
      </Link>
      <h1>Login</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor='firstname'>Firstname</label>
          <input
            onChange={handleChange}
            type='text'
            name='firstname'
            autoFocus
            placeholder='Enter your firstname...'
            value={signupInfo.name}
          />
        </div>
        <div>
          <label htmlFor='lastname'>Lastname</label>
          <input
            onChange={handleChange}
            type='text'
            name='lastname'
            autoFocus
            placeholder='Enter your lastname...'
            value={signupInfo.lastname}
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChange}
            type='email'
            name='email'
            autoFocus
            placeholder='Enter your email...'
            value={signupInfo.email}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            onChange={handleChange}
            type='password'
            name='password'
            autoFocus
            placeholder='Enter your password...'
            value={signupInfo.password}
          />
        </div>
        <button type='submit'>Signup</button>
        <span>Already have an account ?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup;