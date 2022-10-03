import 'bootstrap/dist/css/bootstrap.css';

import buildClient from '../api/build-client';

import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

// Page Component getInitialProps is little bit different from App Component getInitialProps
AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  const pageProps =
    (await appContext.Component.getInitialProps?.(appContext.ctx)) || {};

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
