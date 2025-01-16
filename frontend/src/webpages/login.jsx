import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await API.post('/api/auth/login', data);
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err) {
        navigate('/register')
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder="Email" {...register('email')} required />
        <input type="password" placeholder="Password" {...register('password')} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
