import {
  Paragraph,
  Text,
  Link,
  Icon,
  UpdateIcon,
  YouTubeIcon,
  SoundCloudIcon,
  OpenInNewIcon,
} from "portfolio-ui";

import * as styles from "./GridPosts.css";

import type { COLOR } from "portfolio-styles";
import type { ComponentProps, FC } from "react";
import clsx from "clsx";

export interface Post {
  id: string;
  slug: string;
  redirectTo: string;
  categories: string[];
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  updatedAt: string;
}

interface Props extends ComponentProps<"div"> {
  posts: Post[];
  theme?: "light" | "dark";
  baseUrl?: string;
  ogImageServerUrl?: string;
}

const youtubeLinks = [
  "https://youtu.be",
  "https://www.youtube.com",
  "https://youtube.com",
];

const caseOfUrl =
  <T,>(pattern: {
    youtube: () => T;
    soundcloud: () => T;
    others: () => T | null;
  }) =>
  (url: string): T | null => {
    if (youtubeLinks.some((link) => url.includes(link))) {
      return pattern.youtube();
    }
    if (url.includes("https://soundcloud.com")) {
      return pattern.soundcloud();
    }
    return pattern.others();
  };

interface ThumbnailIconProps {
  post: Post;
}

const ThumbnailIcon: FC<ThumbnailIconProps> = ({ post }) => {
  const icon = caseOfUrl({
    youtube: () => YouTubeIcon,
    soundcloud: () => SoundCloudIcon,
    others: () => null,
  })(post.redirectTo);

  if (icon === null) return null;

  const color =
    (caseOfUrl<keyof typeof COLOR>({
      youtube: () => "youtube",
      soundcloud: () => "soundcloud",
      others: () => "transparent" as keyof typeof COLOR,
    })(post.redirectTo) as keyof typeof COLOR) ??
    ("transparent" as keyof typeof COLOR);

  return (
    <Icon
      className={styles.cardThumbnailIcon}
      size={7}
      icon={icon}
      color={color}
    />
  );
};

export const GridPosts: FC<Props> = ({
  className,
  posts,
  theme = "light",
  baseUrl = "/posts",
  ogImageServerUrl,
  ...props
}) => {
  const cardStyle = theme === "dark" ? styles.cardDark : styles.cardLight;
  const titleStyle =
    theme === "dark" ? styles.cardTitleDark : styles.cardTitleLight;
  const textColor = theme === "dark" ? "mono.50" : "mono.900";
  const dateColor = theme === "dark" ? "mono.300" : "mono.900";
  const categoryColor = theme === "dark" ? "mono.300" : "mono.500";
  const iconColor = theme === "dark" ? "mono.300" : "mono.500";

  return (
    <div className={clsx(styles.cardGrid, className)} {...props}>
      {posts.map((post) => (
        <Link
          className={styles.cardLink}
          key={post.id}
          href={
            post.redirectTo !== "" ? post.redirectTo : `${baseUrl}/${post.slug}`
          }
          openInNewTab={post.redirectTo !== ""}
          decoration="none"
        >
          <div className={cardStyle}>
            <div className={styles.cardLayout}>
              <div className={styles.cardThumbnailBox}>
                <ThumbnailIcon post={post} />
                <img
                  className={styles.cardThumbnail}
                  src={
                    post.thumbnailUrl ||
                    (ogImageServerUrl
                      ? `${ogImageServerUrl}?title=${post.title}`
                      : "")
                  }
                  alt={post.title}
                />
              </div>
              <div className={styles.cardDateAndCategory}>
                <div className={styles.cardPublishedAt}>
                  <Icon size={3} icon={UpdateIcon} color={iconColor} />
                  <Text fontSize="3" color={dateColor}>
                    {post.publishedAt}
                  </Text>
                </div>
                <Text fontSize="3" color={categoryColor}>
                  {post.categories.map((category) => `#${category} `)}
                </Text>
              </div>
              <Paragraph
                overflow="hidden"
                textOverflow="ellipsis"
                lineClamp={3}
              >
                <Text className={titleStyle} color={textColor}>
                  {post.title}
                </Text>
                {post.redirectTo !== "" && (
                  <Icon size={4} icon={OpenInNewIcon} color={iconColor} />
                )}
              </Paragraph>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
