import React, { useState } from 'react';
import {Container} from '@material-ui/core'

import CubbyAppView from './views/CubbyAppView';
import FeaturesListView from './views/FeaturesListView';

import './index.css'

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState(1);

  return (
    <Container>
      <FeaturesListView selectFeature={(id) => setSelectedFeature(id)} />
      <CubbyAppView selectedFeature={selectedFeature} />
    </Container>
  );
};

export default App;
