import React, { useContext } from "react";
import Form from "./components/Form";
import { Notes } from "./context/Context";
import AllNotes from "./components/AllNotes";


const App = () => {
    const {showForm, setShowForm} = useContext(Notes);
    return (
      <div className="main bg-zinc-900 min-h-screen text-white p-6 font-[gilroy]">
        <AllNotes />
        {showForm && <Form formstate={{ showForm, setShowForm }} />}
      </div>
    );
};

export default App;
