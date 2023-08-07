import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './Login.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" placeholder='Login' name={'login'} component={'input'} />
      </div>
      <div>
        <Field type="text" placeholder='Password' name={'password'} component={'input'} />
      </div>
      <div>
        <Field type="checkbox" name={'rememberMe'} component={'input'} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}

export default Login