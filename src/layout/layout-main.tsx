import { Flex, Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutPagesProps {
  children: ReactNode;
}

export default function LayoutMain({ children }: LayoutPagesProps) {
  return (
    <Grid templateColumns="repeat(4,1fr)" backgroundColor="#1d1d1d" >
        {children}
    </Grid>
  );
}
