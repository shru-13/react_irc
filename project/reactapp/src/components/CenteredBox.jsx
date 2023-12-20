import React from 'react';
import '../assets/CenteredBox.css';
import {Toggle} from './Toggle';
import { useState } from 'react';

export const CenteredBox = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    <div className="Container" data-theme={isDark ? "dark" : "light"}>
      <div className="Content">
        <h1>Terms and Conditions</h1>
        <p>Please read these terms and conditions of use carefully before accessing, using or obtaining any materials, information, products or services. By accessing the .sync website, mobile or tablet application, or any other feature or other .sync platform (collectively "Our Website") you agree to be bound by these terms and conditions ("Terms") and our Privacy Policy.</p>
        <ul>
            <li>Using the .sync Service to import or copy and local files you do not have the legal right to import or copy in this way</li>
            <li>Circumventing any territorial restrictions applied by .sync or its licensors</li>
            <li>Selling a user account or playlist, or otherwise accepting compensation, financial or otherwise, to influence the name of an account or playlist or the content included on an account or playlist</li>
        </ul>
    </div>
    </div>
    </>
  );
};

export default CenteredBox;