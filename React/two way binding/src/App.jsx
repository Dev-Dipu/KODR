import React, { useState } from 'react'

const App = () => {

  const [values, setValues] = useState({
    name: '',
    email: ''
  })
  
  console.log(values)

  return (
    <>
      <style>{`
        .form-container {
          max-width: 350px;
          margin: 40px auto;
          padding: 24px;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .form-container h2 {
          margin-bottom: 18px;
          font-size: 1.5rem;
          color: #333;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 6px;
          color: #555;
        }
        .form-group input {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .form-btn {
          width: 100%;
          padding: 10px;
          background: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .form-btn:hover {
          background: #0056b3;
        }
      `}</style>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <button className="form-btn" type="submit">Submit</button>
      </form>
    </>
  )
}

export default App