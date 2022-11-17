import NextLink from "next/link";

interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

export const Link = (props: LinkProps) => {
  if (props.href?.startsWith("http")) {
    return <a {...props}>{props.children}</a>;
  } else {
    return (
      <NextLink
        id={props.id}
        className={props.className}
        href={props.href}
        onClick={props.onClick}
      >
        {props.children}
      </NextLink>
    );
  }
};
