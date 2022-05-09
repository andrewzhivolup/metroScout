import React, { useState } from 'react';
import testimg from '../../../img/station-test-img.jpg';
import { Switch } from 'antd';
import 'antd/dist/antd.css';


const UploadForm = () => {
  
  function onChange(checked) {
    console.log(`switch to ${checked}`);
    
  }
  
    return (
    <div>
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
};

export default UploadForm;