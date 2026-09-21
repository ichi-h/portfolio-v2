import { GridWorks } from "../../parts/gridWorks";

import type { Work } from "../../../api/notion/works";
import type { FC } from "react";

import { Heading } from "portfolio-ui";

import * as style from "./index.css";

import { Link } from "portfolio-ui";
import { Anchor } from "../../parts/anchor";

export interface Props {
  pickups: Work[];
  worksByCategory: {
    category: string;
    works: Work[];
  }[];
}

export const Works: FC<Props> = ({ pickups, worksByCategory }) => {
  return (
    <>
      <Heading level="2">Pickups</Heading>
      <GridWorks works={pickups} />
      {worksByCategory.map(({ category, works }) => (
        <>
          <Heading level="2">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Heading>
          <GridWorks works={works} />
          <div className={style.tagLinkContainer}>
            <Link as={Anchor} asProps={{ href: `/categories/${category}` }}>
              See more &gt;
            </Link>
          </div>
        </>
      ))}
    </>
  );
};
