import { Heading, Link } from "portfolio-ui";
import type { FC } from "react";

import type { Work } from "../../../api/notion/works";
import { GridWorks } from "../../parts/gridWorks";
import { Anchor } from "../../parts/anchor";
import { Hr } from "../../parts/hr";

import * as style from "./index.css";

export interface Props {
  pickups: Work[];
  latestWorks: Work[];
  worksByCategory: {
    category: string;
    works: Work[];
  }[];
}

export const Works: FC<Props> = ({ pickups, latestWorks, worksByCategory }) => {
  return (
    <>
      {pickups.length !== 0 && (
        <>
          <Heading level="2">Pickups</Heading>
          <GridWorks works={pickups} enablePinned />
          <Hr />
        </>
      )}

      <Heading level="2">Latest</Heading>
      <GridWorks works={latestWorks} />
      <Hr />

      <Heading level="2">Categories</Heading>
      {worksByCategory.map(({ category, works }) => (
        <>
          <Heading level="3">
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
