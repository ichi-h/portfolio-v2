import { GridWorks } from "../../parts/gridWorks";

import type { Work } from "../../../api/notion/works";
import type { FC } from "react";

interface Props {
  works: Work[];
}

export const Works: FC<Props> = ({ works }) => {
  return <GridWorks works={works} />;
};
