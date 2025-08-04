import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContextProvider";

const Login = () => {
    const {setToggle, users} = useContext(UserContext);
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = (user) => {
        const foundUser = users.find((data) => data.email === user.email && data.password === user.password);
        if (foundUser) {
            toast.success("Login successful!");
            reset();
        } else {
            toast.error("Invalid email or password!");
        }
    };

    return (
        <div className="h-screen bg-black text-white flex flex-col text-2xl items-center justify-center gap-6">
            <h1 className="text-4xl">Login User</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <input
                    className="outline-none bg-zinc-800 rounded-sm px-3 py-1.5"
                    type="email"
                    placeholder="email"
                    {...register('email', { 
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                <input
                    className="outline-none bg-zinc-800 rounded-sm px-3 py-1.5"
                    type="password"
                    placeholder="password"
                    {...register('password', { 
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
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

export default Login;
