import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
  bigger?: boolean;
  centered?: boolean
}

export const Markdown = ({ children, bigger = false, centered = false }: MarkdownProps) => {
  return (
    <ReactMarkdown className={`${bigger ? "text-xl" : "text-md"} ${centered ? 'text-center' : 'text-left'}`}>
      {children}
    </ReactMarkdown>
  );
};
