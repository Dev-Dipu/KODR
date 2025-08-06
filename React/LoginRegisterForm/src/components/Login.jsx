import React from "react";
import { useForm } from "react-hook-form";

const Register = ({setToggle, userstate: users}) => {
    

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    return (
        <div className="h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col text-2xl items-center justify-center gap-6">
            <h1 className="text-4xl">Login User</h1>
            <form onSubmit={handleSubmit((user) => {
                const u = users.find((data) => data.email === user.email && data.password === user.password)
                console.log(u)
                reset()
            })} className="flex flex-col gap-4">
                <input
                    className="outline-none bg-zinc-800 rounded-sm px-3 py-1.5"
                    type="text"
                    placeholder="email"
                    {...register('email')}
                />
                <input
                    className="outline-none bg-zinc-800 rounded-sm px-3 py-1.5"
                    type="text"
                    placeholder="password"
                    {...register('password')}
                />
                <input
                    className="py-1.5 bg-emerald-500 rounded-sm cursor-pointer"
                    type="submit"
                    value="Login"
                />
                <h2 className="cursor-pointer hover:text-blue-400 text-center" onClick={() => setToggle(prev => !prev)}>
                    Not have an Account ?
                </h2>
            </form>
        </div>
    );
};

export default Register;
