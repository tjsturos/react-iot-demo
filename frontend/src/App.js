import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

import { DeviceList } from './components/DeviceList'

function App() {
  return (
    <div className="App">
      <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={DeviceList} />
      </Admin>
    </div>
  );
}

export default App;
