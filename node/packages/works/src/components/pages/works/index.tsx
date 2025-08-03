import { GridWorks } from "../../parts/gridWorks";

import type { Work } from "../../../api/notion/works";
import type { FC } from "react";

import * as style from "./index.css";

import { Link } from "portfolio-ui";
import { Anchor } from "../../parts/anchor";

interface Props {
  works: Work[];
}

export const Works: FC<Props> = ({ works }) => {
  return (
    <>
      <div className={style.tagLinkContainer}>
        <Link as={Anchor} asProps={{ href: "/categories" }}>
          All categories &gt;
        </Link>
      </div>
      <GridWorks works={works} />
    </>
  );
};
