import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

import DeviceList from './components/Device/DeviceList'
import DeviceCreate from './components/Device/DeviceCreate'
import DeviceEdit from './components/Device/DeviceEdit'

import MyLayout from "./components/ReactAdmin/Layout";
function App() {
  return (
    <div className="App">
      <Admin
      loading={false}
        title="IoT Devices"
        layout={MyLayout}
        dataProvider={jsonServerProvider('http://localhost:3001')}
      >
        <Resource options={{ label: 'IoT Devices' }} name="devices" list={DeviceList} create={DeviceCreate} edit={DeviceEdit} />
        <Resource name="models" />
      </Admin>
    </div>
  );
}

export default App;
