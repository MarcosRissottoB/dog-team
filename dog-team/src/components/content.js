import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function Content({children}) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '90vh' }} >
        {children}
      </Container>
    </>
  )
};

export default Content;
