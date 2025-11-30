import { Text } from "portfolio-ui";

import { footerStyle } from "./footer.css";

export const Footer = () => (
  <footer className={footerStyle}>
    <Text color="mono.50">
      Copyright ©{` ${new Date().getFullYear()} `}ichi-h All rights reserved.
    </Text>
  </footer>
);
