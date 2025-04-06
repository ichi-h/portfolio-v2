import { Text } from "portfolio-ui";

import { Title } from "../../parts/title";

import type { FC } from "react";

interface Props {
  category: string;
}

export const Category: FC<Props> = ({ category }) => {
  return (
    <>
      <Title>#{category}</Title>
      <Text fontSize="4" color="mono.900">
        Coming soon...
      </Text>
    </>
  );
};
