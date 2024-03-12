// AuthorList.tsx
import React from "react";

interface AuthorListProps {
  authorNames: string[];
}

function AuthorList({ authorNames: authorName }: AuthorListProps) {
  return (
    <div>
      <h2>Submitted Authors</h2>
      <ol>
        {authorName.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ol>
    </div>
  );
}

export default AuthorList;
