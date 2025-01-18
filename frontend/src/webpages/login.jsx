import React, { useState } from 'react';
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
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false); 

  const onSubmit = async (data) => {
    setLoading(true); 
    setErrorMessage(null); 

    try {
      const response = await API.post('/api/auth/login', data);
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setErrorMessage('Login failed. Check if your username or password is correct.');
    } finally {
      setLoading(false);
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
              disabled={loading} 
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
              disabled={loading}
              className="w-full pl-10 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white rounded-md transition-colors duration-200 font-medium ${
              loading ? 'bg-sky-500 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-700'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'} 
          </button>

          {errorMessage && (
            <div className="text-center text-red-500 my-4">
              {errorMessage}
            </div>
          )}

          <div className="text-center text-lg">
            <p className="text-white">Don't have an account?</p> 
            <Link to="/register" className="text-sky-400">Register here</Link>
          </div>
        </form>

        {loading && (
          <div className="flex justify-center mt-4">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
