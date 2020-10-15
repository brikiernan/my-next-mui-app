import { Fragment, ReactNode } from 'react';
import Head from 'next/head';
import { Box, Container } from '@material-ui/core';
import NavBar from './NavBar';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <NavBar />
    </header>
    <main>
      <Container>
        <Box>{children}</Box>
      </Container>
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
);

export default Layout;
