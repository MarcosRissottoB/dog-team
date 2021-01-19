import React from 'react';
// import { Layout } from '@material-ui/core';

// Components
import Content from './content';
import Header from './header';

function LayoutComponent({children}) {
  // const { Footer } = Layout;

  return (
    <>
      <Header />
      <Content>{children}</Content>
      {/* <Footer>footer</Footer> */}
    </>
  )
}

export default LayoutComponent;
