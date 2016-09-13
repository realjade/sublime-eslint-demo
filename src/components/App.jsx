import React, { PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ location }) =>
  (<MainLayout>
    <Todos location={location} />
  </MainLayout>);

App.propTypes = {
  location: PropTypes.string.isRequired
};

export default App;
