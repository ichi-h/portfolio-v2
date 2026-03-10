import { Icon, LeftArrowIcon, Link } from "portfolio-ui";

interface Props {
  className?: string;
}

export const BackButton = ({ className }: Props) => {
  return (
    <Link
      className={className}
      color="mono.900"
      as="a"
      asProps={{
        href: "/",
        "aria-label": "トップページへ戻る",
      }}
    >
      <Icon icon={LeftArrowIcon} color="mono.900" size={4} />
      戻る
    </Link>
  );
};
