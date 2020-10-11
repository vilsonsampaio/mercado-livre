import React from "react";

import Header from "../Header";
import Product from "../Product";
import Footer from "../Footer";

import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />

        <Product />

        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
