import React, { useState, useContext } from "react";
import {Notes} from '../context/Context'


const Form = ({ formstate }) => {
    const {setNotes} = useContext(Notes)

    const { setShowForm } = formstate;
    const [data, setdata] = useState({
        title: "",
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setNotes(prev => ([...prev, {
          id: Date.now(),
          ...data
        }]))
        setShowForm(false);
    };




    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <form
                onSubmit={handleSubmit}
                className="bg-zinc-800 p-6 rounded-sm shadow-lg flex flex-col gap-4 min-w-[350px]"
            >
                <h2 className="text-2xl mb-2">Add New Note</h2>
                <input
                    value={data.title}
                    onChange={(e) => {
                        setdata((prev) => ({ ...prev, title: e.target.value }));
                    }}
                    type="text"
                    placeholder="Title"
                    className="bg-zinc-900 text-white px-3 py-2 rounded-sm outline-none border border-zinc-700 focus:border-[royalblue]"
                />
                <textarea
                    value={data.description}
                    onChange={(e) => {
                        setdata((prev) => ({
                            ...prev,
                            description: e.target.value,
                        }));
                    }}
                    placeholder="Your note..."
                    rows={4}
                    className="bg-zinc-900 text-white px-3 py-2 rounded-sm outline-none border border-zinc-700 focus:border-[royalblue] resize-none"
                />
                <div className="flex gap-2 justify-end">
                    <button
                        type="button"
                        className="bg-zinc-700 px-4 py-2 rounded-sm text-white cursor-pointer"
                        onClick={() => setShowForm(false)}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-[royalblue] px-4 py-2 rounded-sm text-white cursor-pointer"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
