import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "./components/AuthorForm";
import AuthorList from "./components/AuthorList";
import { Author } from "./types/types";
import "./App.css";

const BASE_URL = "http://localhost:5000";

function App() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [displayNames, setDisplayNames] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/authors`);
      setAuthors(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterAuthorsByName = (keyword: string): string[] => {
    if (!authors || authors.length === 0 || keyword === "") {
      return [];
    }

    const filteredAuthors = authors.filter((author) =>
      author.name.toLowerCase().includes(keyword.toLowerCase())
    );

    const names = filteredAuthors.map((author) => author.name);

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
