import { GridWorks } from "../../parts/gridWorks";
import { Title } from "../../parts/title";

import * as styles from "./index.css";

import type { Work } from "../../../api/notion/works";
import type { FC } from "react";

interface Props {
  category: string;
  works: Work[];
}

export const Category: FC<Props> = ({ category, works }) => {
  return (
    <div className={styles.layout}>
      <Title>#{category}</Title>
      <GridWorks works={works} />
    </div>
  );
};
