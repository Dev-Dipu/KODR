import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Player from "./screens/Player"

const App = () => {
    return (
        <div className="bg-zinc-900 text-white">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Player />} />
        </Routes>
        </div>
    );
};

export default App;
