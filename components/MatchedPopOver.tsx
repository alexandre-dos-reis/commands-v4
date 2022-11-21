import { Transition } from "@headlessui/react";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { matchedAtom } from "utils/store";

export const MatchedPopOver = () => {
  const [isMatched, setIsMatched] = useAtom(matchedAtom);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMatched) {
        setIsMatched(false);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [isMatched]);

  return (
    <>
      <Transition
        show={isMatched}
        enter="transition-all duration-[400ms]"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute bg-green-300 z-50 bottom-0 -right-32 flex justify-center items-center gap-3 p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
          Match !
        </div>
      </Transition>
    </>
  );
};
