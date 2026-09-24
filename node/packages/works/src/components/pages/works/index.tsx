import { Heading, Link } from "portfolio-ui";
import type { FC } from "react";

import type { Work } from "../../../api/notion/works";
import { GridWorks } from "../../parts/gridWorks";
import { Anchor } from "../../parts/anchor";
import { Hr } from "../../parts/hr";

import * as style from "./index.css";

export interface Props {
  works: Work[];
}

interface AllCategoriesContainerProps {
  href: string;
}

const AllCategoriesContainer: FC<AllCategoriesContainerProps> = ({ href }) => (
  <div className={style.allCategoriesContainer}>
    <Link as={Anchor} asProps={{ href }}>
      All Categories &gt;
    </Link>
  </div>
);

export const Works: FC<Props> = ({ works }) => {
  return (
    <>
      <AllCategoriesContainer href="/categories" />
      <GridWorks works={works} />
    </>
  );
};
