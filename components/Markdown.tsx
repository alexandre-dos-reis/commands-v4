import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownProps {
  children: string;
  bigger?: boolean;
  centered?: boolean;
}

export const Markdown = ({
  children,
  bigger = false,
  centered = false,
}: MarkdownProps) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className={`${bigger ? "text-xl" : "text-md"} ${
        centered ? "text-center" : "text-left"
      }`}
    >
      {children}
    </ReactMarkdown>
  );
};
