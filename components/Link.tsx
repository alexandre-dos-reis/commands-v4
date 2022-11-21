import NextLink from "next/link";

type ReactLinkType = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

interface LinkProps extends ReactLinkType {
  href: string;
}

export const Link = (props: LinkProps) => {
  if (props.href?.startsWith("http")) {
    return (
      <a {...props} target="_blank" rel="noreferrer noopener">
        {props.children}
      </a>
    );
  } else {
    return (
      <NextLink {...props} prefetch={false} ref={undefined}>
        {props.children}
      </NextLink>
    );
  }
};
