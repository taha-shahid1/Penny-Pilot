import React from 'react';
import { useForm } from 'react-hook-form';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post('/api/auth/register', data);
      alert('Registration successful! You can now log in.');
      reset();
      navigate('/login')
    } catch (err) {
      alert(err || 'Registration failed!');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Username" {...register('username')} required />
        <input type="password" placeholder="Password (Minimum length of 6 characters)" {...register('password')} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
