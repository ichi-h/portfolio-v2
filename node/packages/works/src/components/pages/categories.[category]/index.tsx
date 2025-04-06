import { GridWorks } from "../../parts/gridWorks";

import type { Work } from "../../../api/notion/works";
import type { FC } from "react";

interface Props {
  works: Work[];
}

export const Category: FC<Props> = ({ works }) => {
  return <GridWorks works={works} />;
};
