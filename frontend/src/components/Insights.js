import { useEffect, useState } from "react";
import API from "../api/api";

function Insights() {

    const [data, setData] = useState(null);

    useEffect(() => {

        API.get("/journal/insights/123")
            .then(res => setData(res.data));

    }, []);

    if (!data) return <p>Loading insights...</p>

    return (

        <div>

            <h2>Insights</h2>

            <div className="insight">
                Total Entries: {data.totalEntries}
            </div>

            <div className="insight">
                Top Emotion: {data.topEmotion}
            </div>

            <div className="insight">
                Most Used Ambience: {data.mostUsedAmbience}
            </div>

            <div className="insight">
                Keywords: {data.recentKeywords.join(", ")}
            </div>

        </div>

    )

}

export default Insights;