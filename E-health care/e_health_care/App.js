import React from 'react';
import Layout from './Layout';
import {Provider as MobxProvider} from 'mobx-react';
import store from './src/store/DataStore';

const App = () => {
  return (
    <MobxProvider store={store}>
      <Layout />
    </MobxProvider>
  );
};

export default App;
