import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserIcon, KeyIcon } from 'lucide-react';
import API from '../api';
import { Link } from "react-router-dom";

function LogOut() {
  localStorage.removeItem("token");
}

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await API.post('/api/auth/login', data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      navigate('/register');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-cyan-950 to-sky-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-sm border border-sky-500/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Login</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <UserIcon className="absolute left-3 top-3 h-5 w-5 text-sky-400" />
            <input
              type="text"
              placeholder="Username"
              {...register('username')}
              required
              className="w-full pl-10 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
            />
          </div>
          
          <div className="relative">
            <KeyIcon className="absolute left-3 top-3 h-5 w-5 text-sky-400" />
            <input
              type="password"
              placeholder="Password (Minimum length of 6 characters)"
              {...register('password')}
              required
              className="w-full pl-10 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors duration-200 font-medium"
          >
            Login
          </button>

          <div className = "text-center text-lg">
            <p className = "text-white">Dont have an account?</p> 
            <Link to = "/register" className = "text-sky-400">Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;