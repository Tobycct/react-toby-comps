import React from 'react';
import { SelectInput } from 'react-toby-comps';

const App = () => {
  return (
    <SelectInput initialKey='name' options={[{label: '设备名称', key: 'name', placeholder: '请输入设备名称'}, {label: '设备MAC', key: 'mac', placeholder: '请输入设备MAC'}]} selectWidth={112} inputWidth={180}></SelectInput>

  );
};

export default App;
