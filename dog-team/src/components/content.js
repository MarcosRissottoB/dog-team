import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function Content({children}) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" style={{ backgroundColor: '#FAFAFA', height: 'auto' }} >
        {children}
      </Container>
    </>
  )
};

export default Content;
