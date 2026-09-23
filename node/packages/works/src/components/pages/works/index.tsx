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

interface SeeMoreContainerProps {
  href: string;
}

const SeeMoreContainer: FC<SeeMoreContainerProps> = ({ href }) => (
  <div className={style.seeMoreContainer}>
    <Link as={Anchor} asProps={{ href }}>
      See more &gt;
    </Link>
  </div>
);

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
      <SeeMoreContainer href="/works/all" />
      <Hr />

      <Heading level="2">Categories</Heading>
      {worksByCategory.map(({ category, works }) => (
        <>
          <Heading level="3">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Heading>
          <GridWorks works={works} />
          <SeeMoreContainer href={`/categories/${category}`} />
        </>
      ))}
    </>
  );
};
