import React, { createContext, useState } from "react";

const Notes = createContext();

const Context = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [showForm, setShowForm] = useState(false);

    return <Notes.Provider value={{ notes, setNotes, showForm, setShowForm }}>
        {children}
    </Notes.Provider>;
};

export {Notes, Context};
