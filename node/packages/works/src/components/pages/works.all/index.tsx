import type { FC } from "react";

import type { Work } from "../../../api/notion/works";
import { GridWorks } from "../../parts/gridWorks";

export interface Props {
  works: Work[];
}

export const WorksAll: FC<Props> = ({ works }) => <GridWorks works={works} />;
