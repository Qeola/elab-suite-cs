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
    <div className="max-w-md mx-auto">
      <TextInput
        type="text"
        placeholder="Search..."
        value={searchField}
        onChange={handleInputChange}
        sizing="md"
        className="form-control !rounded-md py-2"
        // icon={Search}
      />
    </div>
  );
};

export default SearchBar;
