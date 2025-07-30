import React, { useState } from 'react'

const App = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true)
  }

  return (
    <div className="container" style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="mobile" style={{ display: 'block', marginBottom: '0.5rem' }}>Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <button 
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
      {
        show && <div>
          <h1>name: {formData.name}</h1>
          <h1>email: {formData.email}</h1>
          <h1>mobile: {formData.mobile}</h1>
        </div>
      }
    </div>
  )
}

export default App