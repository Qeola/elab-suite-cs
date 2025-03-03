"use client";

import { useState } from "react";
import { TextInput } from "flowbite-react";

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const [searchField, setSearchField] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchField(value);
    onSearchChange(value);
  };

  return (
    <div className="max-w-lg mx-auto">
      <TextInput
        type="text"
        placeholder="Search..."
        value={searchField}
        onChange={handleInputChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        // icon={Search}
      />
    </div>
  );
};

export default SearchBar;
