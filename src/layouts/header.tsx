import SearchInput from "@components/searchInput";
import React from "react";

function Header() {
  return (
    <header className="bg-white flex-wrap gap-4 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <h1 className="text-2xl font-bold text-blue-600">FundingPips</h1>
      </div>

      <div className="w-full lg:w-1/6">
        <SearchInput/>
      </div>
    </header>
  );
}

export default Header;
