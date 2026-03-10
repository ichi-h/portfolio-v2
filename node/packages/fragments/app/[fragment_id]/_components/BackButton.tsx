"use client";

import NextLink from "next/link";

import { Link, Icon, LeftArrowIcon } from "portfolio-ui";

interface Props {
  className?: string;
}

export function BackButton({ className }: Props) {
  return (
    <Link
      className={className}
      color="mono.900"
      as={NextLink}
      asProps={{
        href: "/",
        "aria-label": "トップページへ戻る",
      }}
    >
      <Icon icon={LeftArrowIcon} color="mono.900" size={4} />
      戻る
    </Link>
  );
}
