import API from "../api/api";

function JournalList({ journals }) {

    const analyze = async (text) => {

        const res = await API.post("/journal/analyze", { text });

        alert(
            "Emotion: " + res.data.emotion +
            "\nKeywords: " + res.data.keywords.join(", ") +
            "\nSummary: " + res.data.summary
        );

    };

    return (

        <div>

            <h2>Journal Entries</h2>

            {journals.map(j => (
                <div className="journal-item" key={j._id}>

                    <p>{j.text}</p>

                    <p><b>Ambience:</b> {j.ambience}</p>

                    <button onClick={() => analyze(j.text)}>
                        Analyze
                    </button>

                </div>
            ))}

        </div>

    )

}

export default JournalList;