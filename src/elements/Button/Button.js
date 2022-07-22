import React from 'react';

import s from './Button.module.css'

function Button({ text }) {
     console.log('wwewewew');
     return (
          <button className={s.btnSubmit}>{text}</button>
     );
}

export default Button;