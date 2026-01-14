import { Heading, Link, Text } from "portfolio-ui";
import * as styles from "./index.css";

// Sample Posts - In a real app, these might be fetched.
const posts = [
  { title: "技術記事 1", url: "https://zenn.dev/ichi_h" },
  { title: "技術記事 2", url: "https://zenn.dev/ichi_h" },
  { title: "技術記事 3", url: "https://zenn.dev/ichi_h" },
];

export const PostsSection = () => {
  return (
    <div className={styles.contentSection}>
      <Heading level="2">
        <Text className={styles.heading} color="mono.50">
          Posts
        </Text>
      </Heading>
      
      <div className={styles.postList}>
         {posts.map((post, i) => (
           <Link key={i} href={post.url} className={styles.postLink} openInNewTab>
             <Text color="mono.50">{post.title}</Text>
           </Link>
         ))}
      </div>
    </div>
  );
};
