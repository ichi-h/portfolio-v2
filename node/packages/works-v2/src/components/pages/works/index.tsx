import { GridWorks } from "../../parts/gridWorks";
import { Title } from "../../parts/title";

import * as styles from "./index.css";

import type { Work } from "../../../api/notion/works";
import type { FC } from "react";

interface Props {
  works: Work[];
}

export const Works: FC<Props> = ({ works }) => {
  return (
    <div className={styles.layout}>
      <Title>Works</Title>
      <GridWorks works={works} />
    </div>
  );
};
