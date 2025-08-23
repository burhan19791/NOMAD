'use client';

import React, { useState } from 'react';
import { TextInput } from 'flowbite-react';
import {
  Eye,
  EyeOff,
  Users,
  TrendingUp,
  Shield,
  Activity,
  ArrowRight,
  Mail,
  Lock,
  User,
} from 'lucide-react';
import Image from 'next/image';

const AdminAuthPages = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const stats = [
    {
      icon: Users,
      label: 'Active Users',
      value: '12.4K',
      change: '+12%',
      color: 'bg-blue-500',
    },
    {
      icon: TrendingUp,
      label: 'Revenue Growth',
      value: '€45.2K',
      change: '+28%',
      color: 'bg-green-500',
    },
    {
      icon: Shield,
      label: 'Security Score',
      value: '98.5%',
      change: '+5%',
      color: 'bg-purple',
    },
    {
      icon: Activity,
      label: 'System Load',
      value: '67%',
      change: '-8%',
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Left Side - Statistics */}
      <div className="hidden flex-col justify-center p-12 lg:flex lg:w-1/2">
        <div className="max-w-lg">
          <h1 className="mb-6 text-4xl font-bold text-white">
            Welcome to Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </h1>
          <p className="mb-12 text-lg text-slate-300">
            Monitor, manage, and optimize your platform with powerful analytics
            and insights.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-purple/10 hover:bg-purple/20 rounded-2xl p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className={`${stat.color} rounded-xl p-3 shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <span
                    className={`rounded-full px-2 py-1 text-sm font-semibold ${
                      stat.change.startsWith('+')
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <h3 className="mb-1 text-2xl font-bold text-white">
                  {stat.value}
                </h3>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="from-purple/20 mt-12 rounded-2xl bg-gradient-to-r to-pink-500/20 p-6">
            <h3 className="mb-2 font-semibold text-white">
              🚀 New Feature Available
            </h3>
            <p className="text-sm text-slate-300">
              Advanced analytics dashboard with real-time monitoring is now
              live!
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* Form Container */}
          <div className="rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur-lg">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="relative top-0 right-0 mt-0.5 h-8 w-8">
                  <Image src={'/images/Nomad-logo-black.png'} alt="Logo" fill />
                </div>
                <h1 className="text-font-primary ml-2 text-3xl font-bold">
                  NOMAD
                </h1>
              </div>
              <h2 className="text-font-primary text-xl font-bold">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-600">
                {isSignUp
                  ? 'Set up your admin account'
                  : 'Sign in to your dashboard'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div className="[&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:bg-slate-50 [&_input]:px-4 [&_input]:py-3 [&_input]:text-gray-900 [&_input]:placeholder:text-gray-500 [&_input]:focus:ring-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <User className="mr-2 inline h-4 w-4" />
                    Full Name
                  </label>
                  <TextInput
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}

              <div className="[&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:bg-slate-50 [&_input]:px-4 [&_input]:py-3 [&_input]:text-gray-900 [&_input]:placeholder:text-gray-500 [&_input]:focus:ring-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  <Mail className="mr-2 inline h-4 w-4" />
                  Email Address
                </label>
                <TextInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="[&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:bg-slate-50 [&_input]:px-4 [&_input]:py-3 [&_input]:text-gray-900 [&_input]:placeholder:text-gray-500 [&_input]:focus:ring-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  <Lock className="mr-2 inline h-4 w-4" />
                  Password
                </label>
                <div className="relative">
                  <TextInput
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div className="[&_input]:focus:ring-purple [&_input]:rounded-lg [&_input]:border-0 [&_input]:bg-slate-50 [&_input]:px-4 [&_input]:py-3 [&_input]:text-gray-900 [&_input]:placeholder:text-gray-500 [&_input]:focus:ring-2">
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <Lock className="mr-2 inline h-4 w-4" />
                    Confirm Password
                  </label>
                  <div className="relative">
                    <TextInput
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {!isSignUp && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="text-purple focus:ring-purple mr-2 rounded border-gray-300"
                    />
                    Remember me
                  </label>
                  <a
                    href="#"
                    className="text-purple font-medium hover:text-purple-700"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="from-purple group flex w-full items-center justify-center rounded-lg bg-gradient-to-r to-pink-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-600 hover:shadow-xl"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                {isSignUp
                  ? 'Already have an account?'
                  : "Don't have an account?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-purple ml-2 font-semibold transition-colors hover:text-purple-700"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>

            {/* Divider */}
            <div className="mt-8 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">
                Or continue with
              </span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Social Login */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-50">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-50">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuthPages;
