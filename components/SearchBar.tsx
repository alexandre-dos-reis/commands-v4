import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { searchTextAtom } from "utils/store";
import { MatchedPopOver } from "./MatchedPopOver";
import { osName, isMobile } from "react-device-detect";

export const SearchBar = () => {
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const [metaKey, setMetaKey] = useState("META");
  const inputRef = useRef<HTMLInputElement>(null);
  const macOS = "Mac OS";
  const searchKey = "k";

  const handleFocusOnShortcut = (e: KeyboardEvent) => {
    if (osName !== macOS && e.ctrlKey && e.key === searchKey) {
      inputRef.current?.focus();
    }

    if (osName === macOS && e.metaKey && e.key === searchKey) {
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    setMetaKey(osName === macOS ? "CMD" : "CTRL");
    document.addEventListener("keydown", handleFocusOnShortcut);
    return () => document.removeEventListener("keydown", handleFocusOnShortcut);
  }, []);

  const bgColor = "bg-gray-800";

  return (
    <div className={`relative`}>
      <div className={`flex rounded-md overflow-hidden border ${bgColor}`}>
        <i className="p-2 text-2xl flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search text-gray-300"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </i>
        <input
          className={`p-2 font-mono text-xl min-w-[300px] ${bgColor} text-gray-200`}
          type="text"
          placeholder={`Rechercher${isMobile ? '' : ` [${metaKey} + K]`}`}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          ref={inputRef}
        />
        <button
          className="p-2 flex justify-center items-center"
          onClick={() => setSearchText("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg text-gray-300"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
      <MatchedPopOver />
    </div>
  );
};
