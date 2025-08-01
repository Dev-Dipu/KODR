import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({state: [products, setProducts]}) => {
    const {register, handleSubmit, formState: { errors }, reset} = useForm();

return (
    <form onSubmit={handleSubmit((data)=>{
        console.log(data)
        setProducts((prev) => [...prev, data])
        reset();
    })} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 max-w-sm mx-auto">
        <input {...register('name')}
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input {...register('price')}
            type="number"
            placeholder="Price"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input {...register('image')}
            type="url"
            placeholder="Image URL"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
            type="submit"
            value="Create"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 cursor-pointer transition"
        />
    </form>
)
}

export default Form