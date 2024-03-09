import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "./components/AuthorForm";
import AuthorList from "./components/AuthorList";
import "./App.css";

const BASE_URL = "http://localhost:5000";

function App() {
  const [authorNames, setAuthorNames] = useState<string[]>([]);
  const [displayNames, setDisplayNames] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/author_names`);
      setAuthorNames(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterAuthorsByName = (keyword: string): string[] => {
    if (!authorNames || authorNames.length === 0 || keyword === "") {
      return [];
    }

    const filteredAuthors = authorNames.filter((authorName) =>
      authorName.toLowerCase().includes(keyword.toLowerCase())
    );

    const names = filteredAuthors.map((authorName) => authorName);

    return names;
  };

  const handleSubmittedNameChange = (author: string) => {
    setDisplayNames(filterAuthorsByName(author));
  };

  return (
    <div>
      <h1>Assessment 1 App</h1>
      <AuthorForm onSubmit={handleSubmittedNameChange} />
      <AuthorList authorNames={displayNames} />
    </div>
  );
}

export default App;
