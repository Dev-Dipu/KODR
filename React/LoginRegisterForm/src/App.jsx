import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	const [users, setUsers] = useState([]);
	const [toggle, setToggle] = useState(false);
    return (
        <div className="flex">
			<div className="grow main min-h-screen font-[gilroy]">
            <ToastContainer position="top-right" autoClose={3000} />
			{
				toggle ? <Register setToggle={setToggle} userstate={[users, setUsers]} /> : <Login setToggle={setToggle} userstate={users} />
			}
        </div>
		<div className="mt-8 bg-white w-1/6 rounded-lg shadow-lg p-6 max-w-md mx-auto flex flex-col">
				<h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Users</h2>
				<ul>
					{users.length === 0 ? (
						<li className="text-gray-500">No users registered yet.</li>
					) : (
						users.map((user, idx) => (
							<li
								key={idx}
								className="py-2 px-4 mb-2 bg-gray-100 rounded flex flex-col items-center justify-between"
							>
								<span className="text-gray-700 font-medium">{user.username}</span>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
    );
};

export default App;
