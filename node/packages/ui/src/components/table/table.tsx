import clsx from "clsx";
import * as styles from "portfolio-styles/components/table.css";

import type { ComponentProps, FC } from "react";

type TableProps = {
  theme?: "light" | "dark";
} & ComponentProps<"table">;

export const Table: FC<TableProps> = ({
  className,
  theme = "light",
  children,
  ...props
}) => (
  <table
    className={clsx([styles.table, styles.tableVariant[theme], className])}
    {...props}
  >
    {children}
  </table>
);

type TheadProps = {
  theme?: "light" | "dark";
} & ComponentProps<"thead">;

export const Thead: FC<TheadProps> = ({
  className,
  theme = "light",
  children,
  ...props
}) => (
  <thead className={clsx([styles.theadVariant[theme], className])} {...props}>
    {children}
  </thead>
);

type TbodyProps = ComponentProps<"tbody">;

export const Tbody: FC<TbodyProps> = ({ children, ...props }) => (
  <tbody {...props}>{children}</tbody>
);

type TrProps = ComponentProps<"tr">;

export const Tr: FC<TrProps> = ({ children, ...props }) => (
  <tr {...props}>{children}</tr>
);

type ThProps = {
  theme?: "light" | "dark";
} & ComponentProps<"th">;

export const Th: FC<ThProps> = ({
  className,
  theme = "light",
  children,
  ...props
}) => (
  <th
    className={clsx([styles.th, styles.thVariant[theme], className])}
    {...props}
  >
    {children}
  </th>
);

type TdProps = {
  theme?: "light" | "dark";
} & ComponentProps<"td">;

export const Td: FC<TdProps> = ({
  className,
  theme = "light",
  children,
  ...props
}) => (
  <td
    className={clsx([styles.td, styles.tdVariant[theme], className])}
    {...props}
  >
    {children}
  </td>
);
