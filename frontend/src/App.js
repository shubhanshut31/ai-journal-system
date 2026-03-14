import { useEffect, useState } from "react";
import API from "./api/api";
import "./App.css";

import JournalForm from "../src/components/JournalForm";
import JournalList from "../src/components/JournalList";
import Insights from "../src/components/Insights";

function App() {

  const [journals, setJournals] = useState([]);

  const loadJournals = async () => {

    const res = await API.get("/journal/123");

    setJournals(res.data);

  };

  useEffect(() => {

    loadJournals();

  }, []);

  return (

    <div style={{ padding: "20px" }}>

      <h1>AI Journal System</h1>

      <JournalForm refresh={loadJournals} />

      <JournalList journals={journals} />

      <Insights />

    </div>

  );
}

export default App;