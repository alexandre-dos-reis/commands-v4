import { getOneCommandQuery } from "graphql/queries";
import { CopyToClipboard } from "./CopyToClipboard";
import { Markdown } from "./Markdown";

export const CommandItems = (
  selectedCommand: Awaited<ReturnType<typeof getOneCommandQuery>>
) => {
  return (
    <ul>
      {selectedCommand.sub_commands?.map((sc) => (
        <li key={sc?.id} className="mb-10 w-full rounded-lg">
          <Markdown>{sc?.info as string}</Markdown>
          <div className="flex items-center gap-3">
            <CopyToClipboard text={sc?.item!} />
            <code className="bg-slate-800 whitespace-nowrap overflow-x-auto overflow-y-hidden font-mono rounded-lg text-gray-100 p-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-300">
              <span className="text-gray-500">{sc?.sign}</span> {sc?.item}
            </code>
          </div>
        </li>
      ))}
    </ul>
  );
};
