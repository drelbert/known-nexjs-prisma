import React, { ReactNode } from "react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/styles";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      <div className="layout">{props.children}</div>

      <style jsx>{`
        .layout {
          padding: 0 2rem;
        }
      `}</style>
    </div>
  </ThemeProvider>
);

export default Layout;
