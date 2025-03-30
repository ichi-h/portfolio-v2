import { Headline, Link, Text, Avatar } from "portfolio-ui";

import me from "../../../assets/me_512x512.webp?url";
import { Footer } from "../../parts/footer";

import { outer, headline, links, link, footer, avatar } from "./index.css";
import { Anchor } from "../../parts/anchor";

export default function Index() {
  return (
    <div className={outer}>
      <Link as={Anchor} asProps={{ href: "/me" }}>
        <Avatar className={avatar} src={me} size={64} />
      </Link>
      <Headline level="1">
        <Text className={headline} color="mono.50" fontSize="16">
          ichi-h.com
        </Text>
      </Headline>
      <div className={links}>
        <Link
          as={Anchor}
          asProps={{ href: "/works?category=development" }}
          color="mono.50"
        >
          <Text className={link} fontSize="8">
            Development
          </Text>
        </Link>
        <Link
          as={Anchor}
          asProps={{ href: "/works?category=music" }}
          color="mono.50"
        >
          <Text className={link} fontSize="8">
            Music
          </Text>
        </Link>
        <Link
          as={Anchor}
          asProps={{ href: "/works?category=photograph" }}
          color="mono.50"
        >
          <Text className={link} fontSize="8">
            Photograph
          </Text>
        </Link>
        <Link
          as={Anchor}
          asProps={{ href: "/works?category=philosophy" }}
          color="mono.50"
        >
          <Text className={link} fontSize="8">
            Philosophy
          </Text>
        </Link>
      </div>
      <div className={footer}>
        <Footer />
      </div>
    </div>
  );
}
