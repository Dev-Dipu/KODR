import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
	const [users, setUsers] = useState([]);
	const [toggle, setToggle] = useState(false);

	return (
		<div className="main min-h-screen font-[gilroy] bg-white text-black dark:bg-black dark:text-white transition-all">
			<ThemeToggle />
			{
				toggle
					? <Register setToggle={setToggle} userstate={[users, setUsers]} />
					: <Login setToggle={setToggle} userstate={users} />
			}
		</div>
	);
};

export default App;
