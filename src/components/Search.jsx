import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };


  
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm"
        >
          <option>All</option>
          <option>Arts & Crafts</option>
          <option>Automotive</option>
          <option>Baby</option>
          <option>Personal care</option>
          <option>Books</option>
          <option>Boy's fashion</option>
          <option>Computer's</option>
          <option>Deals</option>
          <option>Digital Music</option>
          <option>Electronics</option>
          <option>Girl's fashion</option>
          <option>Health & Household</option>
          <option>Home & Kitchen</option>
          <option>Kindle store</option>
          <option>Luggage</option>
          <option>Men's fashion</option>
          <option>Movie's & TV</option>
          <option>Music, CD & Vinyl</option>
          <option>Pet Supplies</option>
          <option>Prime video</option>
          <option>Software</option>
          <option>Sports & outdoor</option>
          <option>Toys & Games</option>
          <option>Video games</option>
          <option>Women's fashion</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      
    </div>
  );
};

export default Search;
