import { Link } from "portfolio-ui";

import { Anchor } from "../../parts/anchor";
import { Title } from "../../parts/title";

import * as styles from "./index.css";

import type { FC } from "react";

interface Props {
  categories: string[];
}

export const Categories: FC<Props> = ({ categories }) => {
  return (
    <div className={styles.layout}>
      <Title>Categories</Title>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link as={Anchor} asProps={{ href: `/categories/${category}` }}>
              #{category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
