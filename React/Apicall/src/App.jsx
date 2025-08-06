import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            if (!search) return setProducts([]);
            const response = await axios.get("https://fakestoreapi.com/products");
            const filtered = response.data.filter((p) =>
                p.title?.toLowerCase().includes(search.toLowerCase())
            );
            setProducts(filtered);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getData();
    }, [search]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-8">🛍️ Product Finder</h1>

            <input
                className="backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-gray-300 px-5 py-3 rounded-xl text-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-white transition mb-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search products..."
            />

            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white/10 border border-white/10 backdrop-blur-lg p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-contain mb-4"
                            />
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-green-400 font-bold text-xl">${product.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                search && (
                    <p className="text-gray-400 mt-10 text-center">No products found. Try another keyword!</p>
                )
            )}
        </div>
    );
};

export default App;
