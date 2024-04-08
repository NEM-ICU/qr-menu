import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div>
      <div className="flex w-full rounded bg-gray-300">
        <input
          className=" w-full border-none rounded bg-gray-300 px-4 py-1 text-gray-400 outline-none focus:outline-none "
          type="search"
          name="search"
          placeholder="Search food item here"
        />
        <button
          type="submit"
          className="rounded-e bg-purple-500 px-8 py-4 text-white"
        >
          <FaSearch className="text-lg"/>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
