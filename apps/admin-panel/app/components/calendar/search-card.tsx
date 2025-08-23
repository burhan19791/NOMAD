import React from 'react';
import { TextInput } from 'flowbite-react';
import { FaSearch } from 'react-icons/fa';
import CustomSearch from '../custom-search';

interface SearchCardProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchCard: React.FC<SearchCardProps> = ({
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="bg-card-background border-inner-card-border rounded-2xl border p-4">
      <div className="relative">
        <CustomSearch />
      </div>
    </div>
  );
};

export default SearchCard;
