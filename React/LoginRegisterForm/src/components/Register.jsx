import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Register = ({userstate, setToggle}) => {
    const [users, setUsers] = userstate;

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = (user) => {
        const existingUser = users.find(u => u.email === user.email);
        if (existingUser) {
            toast.error("Email already registered!");
            return;
        }
        setUsers(prev => [...prev, user]);
        toast.success("Registration successful!");
        reset();
    };

    return (
        <div className="flex ">
        <div className="h-screen bg-black text-white flex flex-col text-2xl items-center justify-center gap-6 grow">
            <h1 className="text-4xl">Register User</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <input
                    className="outline-none bg-zinc-800 rounded-sm px-3 py-1.5"
                    type="text"
                    placeholder="username"
                    {...register('username', { 
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message: "Username must be at least 3 characters"
                        }
                    })}
                />
                {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
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
                    type="tel"
                    placeholder="mobile"
                    {...register('mobile', { 
                        required: "Mobile number is required",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Please enter a valid 10-digit mobile number"
                        }
                    })}
                />
                {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile.message}</span>}
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
                    value="Register"
                />
                <h2 className="cursor-pointer hover:text-blue-400" onClick={() => setToggle(prev => !prev)}>
                    Already have an Account ?
                </h2>
            </form>
        </div>
            </div>
    );
};

export default Register;
