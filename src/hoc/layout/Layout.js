import React, { Fragment } from 'react';

const Layout = (props) => {
  return (
    <Fragment>
      <main className="Content">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
