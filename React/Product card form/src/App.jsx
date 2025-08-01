import React, { useState } from 'react'
import Form from './Form';

const App = () => {

  const [products, setProducts] = useState([]);

  return (
    <div className='min-h-screen bg-blue-50'>
      <Form state={[products, setProducts]} />
      <div className="max-w-2xl mx-auto mt-8">
        {products.length === 0 ? (
          <p className="text-gray-500 text-center">No products added yet.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <li key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover mb-4 rounded"
                  />
                )}
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-blue-600 font-bold">${product.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App