import React, {useContext} from "react";
import { Notes } from "../context/Context";

const AllNotes = () => {

    const {notes, setNotes, setShowForm} = useContext(Notes);
    const [activeNote, setActiveNote] = useState(null);

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl">📝 Notes</h1>
                <button
                    className="text-xl bg-[royalblue] px-4 py-2 rounded-sm cursor-pointer"
                    onClick={() => setShowForm(true)}
                >
                    Add Note
                </button>
            </div>
            <div className="notes mt-6 flex flex-col gap-3">
                {notes.map((note, i) => (
                    <div
                        key={i}
                        className="note bg-zinc-800 px-4 py-2.5 rounded-sm cursor-pointer"
                        onClick={() => setActiveNote(i)}
                    >
                        <div className="flex justify-between">
                            <h1 className="text-2xl">{note.title}</h1>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setNotes(
                                        notes.filter((n) => n.id !== note.id)
                                    );
                                    if (activeNote === i) setActiveNote(null); // optional: close if deleted
                                }}
                                className="bg-red-500 px-3 py-1 rounded-sm"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {activeNote !== null && (
                <div className="note-details absolute md:w-[97vw] w-[90vw] min-h-4/5 bg-zinc-800 mt-16 p-6 rounded-sm">
                    <h2 className="text-3xl font-semibold">
                        {notes[activeNote].title}
                    </h2>
                    <p className="mt-2 text-xl">
                        {notes[activeNote].description}
                    </p>
                    <button
                        className="mt-4 absolute top-0 cursor-pointer right-4 bg-red-500 px-3 py-1 rounded-sm"
                        onClick={() => setActiveNote(null)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllNotes;
