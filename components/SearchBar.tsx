import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const SearchBar = ({ value, setValue }: SearchBarProps) => {
  return (
    <div className="hidden md:block">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setValue("")}>X</button>
    </div>
  );
};
