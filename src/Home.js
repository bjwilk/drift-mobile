import * as React from 'react';
import AppFooter from './modules/views/AppFooter';
import ProductValues from './modules/views/ProductValues';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import BackgroundImage from './modules/views/BackgroundImage';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <BackgroundImage />
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
