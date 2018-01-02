/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PeriodList from './components/PeriodListScreen/index';
import PeriodEdit from './components/PeriodEditScreen/index';

const App = () => (
  <Router>
    <Scene modal>
      <Scene key="root" hideNavBar>
        {/* リスト */}
        <Scene key="list" component={PeriodList} initial />
        {/* 編集 */}
        <Scene key="editPeriod" component={PeriodEdit} />
      </Scene>
    </Scene>
  </Router>
);

export default App;
