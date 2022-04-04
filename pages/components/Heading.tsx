import { Typography } from "@mui/material";

interface HeadingProps {
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  content: string;
}

export const Heading = ({ component, content }: HeadingProps) => {
  return (
    <Typography sx={{ my: 2 }} component={component} variant={component}>
      {content}
    </Typography>
  );
};
