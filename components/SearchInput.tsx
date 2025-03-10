import { Search } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <form>
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4" />
        <Input
          type="text"
          name="search"
          placeholder="Search Hotel Name or City...."
          className="pl-10 focus-visible:ring-1 text-lg "
        />
      </div>
    </form>
  );
};

export default SearchInput;
