// Form.tsx
import React, { useState } from "react";

interface FormProps {
  onSubmit: (author: string) => void;
}

function AuthorForm({ onSubmit }: FormProps) {
  const [authorName, setAuthorName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(authorName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author Name:
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AuthorForm;
