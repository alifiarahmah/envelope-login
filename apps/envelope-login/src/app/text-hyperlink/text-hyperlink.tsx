import {
  Link,
  Typography
} from '@mui/material';

/* eslint-disable-next-line */
export interface TextHyperlinkProps {
  href: string,
  children: React.ReactNode,
}

export function TextHyperlink(props: TextHyperlinkProps) {
  return (
    <Link href={props.href} fontWeight="bold" underline="none" sx={{
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
    }}>
      {props.children}
    </Link>
  );
}

export default TextHyperlink;
