import { useAtom } from "jotai";
import { Dispatch, SetStateAction } from "react";
import { searchTextAtom } from "utils/store";

export const SearchBar = () => {
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  return (
    <div className="hidden md:block">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={() => setSearchText("")}>X</button>
    </div>
  );
};
