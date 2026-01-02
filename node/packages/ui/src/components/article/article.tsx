import clsx from "clsx";
import * as styles from "portfolio-styles/components/article.css";
import { ComponentProps } from "react";

type Props = {
  dangerouslySetInnerHTML: {
    __html: string | TrustedHTML;
  };
  theme?: "light" | "dark";
} & ComponentProps<"div">;

export const Article = ({
  className,
  dangerouslySetInnerHTML,
  theme,
  ...props
}: Props) => {
  return (
    <div
      className={clsx([
        styles.article,
        styles.articleVariant[theme ?? "light"],
        className,
      ])}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      {...props}
    />
  );
};
