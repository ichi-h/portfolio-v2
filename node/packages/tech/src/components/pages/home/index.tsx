import { Footer } from "../../parts/footer";
import * as styles from "./index.css";
import { TopSection } from "./TopSection";
import { AboutMeSection } from "./AboutMeSection";
import { PostsSection } from "./PostsSection";

interface Props {
  meBody: string;
}

export const Home = ({ meBody }: Props) => {
  return (
    <>
      <div className={styles.contentAnimation}>
        <TopSection />
        
        <AboutMeSection />
        
        <PostsSection />
        
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
      <div className={styles.overlay} />
    </>
  );
};
