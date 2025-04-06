import { Link } from "portfolio-ui";

import { Anchor } from "../../parts/anchor";

import type { FC } from "react";

interface Props {
  categories: string[];
}

export const Categories: FC<Props> = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <Link as={Anchor} asProps={{ href: `/categories/${category}` }}>
            #{category}
          </Link>
        </li>
      ))}
    </ul>
  );
};
