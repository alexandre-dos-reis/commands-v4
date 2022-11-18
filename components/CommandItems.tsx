import { Command_Items } from "graphql/generated";
import { getOneCommandQuery } from "graphql/queries";
import ReactMarkdown from "react-markdown";
import { Markdown } from "./Markdown";

export const CommandItems = (
  selectedCommand: Awaited<ReturnType<typeof getOneCommandQuery>>
) => {
  return (
    <ul>
      {selectedCommand.sub_commands?.map((sc) => (
        <li key={sc?.id} className="mb-10 w-full rounded-lg">
          <Markdown>{sc?.info as string}</Markdown>
          <div className="flex">
            <code className="bg-slate-800 whitespace-nowrap overflow-x-auto overflow-y-hidden font-mono rounded-lg text-gray-100 p-2">
              <span className="text-gray-500">{sc?.sign}</span> {sc?.item}
            </code>
          </div>
        </li>
      ))}
    </ul>
  );
};
