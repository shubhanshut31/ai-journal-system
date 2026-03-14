import { useState } from "react";
import API from "../api/api";

function JournalForm({ refresh }) {

    const [text, setText] = useState("");
    const [ambience, setAmbience] = useState("forest");

    const submitJournal = async () => {

        if (!text) {
            alert("Write something first");
            return;
        }

        await API.post("/journal", {
            userId: "123",
            ambience,
            text
        });

        setText("");

        refresh();

    };

    return (
        <div>

            <h2>Write Journal</h2>

            <textarea
                rows="4"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your thoughts..."
            />

            <br />

            <select
                value={ambience}
                onChange={(e) => setAmbience(e.target.value)}
            >
                <option value="forest">Forest</option>
                <option value="ocean">Ocean</option>
                <option value="mountain">Mountain</option>
            </select>

            <br />

            <button onClick={submitJournal}>
                Save Entry
            </button>

        </div>
    );
}

export default JournalForm;