import React from 'react';
import DateTime from './DateTime';
import SelectDropdown from './SelectDropdown';

type SelectType = {
  text: string;
  value: string | number;
};

const Header = () => {
  const list: SelectType[] = [
    { text: 'BST', value: 'BST'},
    { text: 'GMT', value: 'GMT'},
    { text: 'UTC', value: 'UTC'}
  ];
  return (
    <div className="App-header bg-primary w-full">
      <div className="gutter">
        <div className="flex justify-content-between">
          <div className="text-white fs-xs">
            <p className="fw-md fs-xs">
              Current time: <DateTime />
            </p>
          </div>
          <div className="text-white fs-xs">
            <SelectDropdown list={list}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;