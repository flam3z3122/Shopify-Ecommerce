import React,{useState}  from 'react'

const Signin = () => {

    const[email ,setEmail] = useState('');
    const[password ,setPassword] = useState('');

  return (
    <div className='sign-in-container'>
        <form>
            <h1>Log In</h1>
            <input type='eamil' placeholder='Enter your Email ' />
            <input type='password' placeholder='Enter your Password' />

        </form>
    </div>
  )
}

export default Signin