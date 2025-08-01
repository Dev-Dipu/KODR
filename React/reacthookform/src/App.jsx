import React from 'react'
import { useForm } from 'react-hook-form';


const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center">
      <form onSubmit={handleSubmit((val) => console.log(val))} className="bg-white rounded-2xl shadow-xl p-8 w-96 flex flex-col gap-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Premium Info Form</h2>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 transition"
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            className="rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 transition"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-medium text-gray-700" htmlFor="mobile">
            Mobile
          </label>
          <input
            id="mobile"
            type="tel"
            {...register('mobile', {
              required: 'Mobile is required',
              pattern: {
                value: /^[0-9]{10,}$/,
                message: 'Invalid mobile number',
              },
            })}
            className="rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 text-gray-800 transition"
            placeholder="Enter your mobile"
          />
          {errors.mobile && (
            <span className="text-red-500 text-sm">{errors.mobile.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App