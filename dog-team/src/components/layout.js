import React from 'react';

// Components
import Content from './content';
import Header from './header';

function Layout({children}) {

  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  )
}

export default Layout;
