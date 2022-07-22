import React from 'react';

import s from './FieldInput.module.css'


function FieldInput() {
     return (
          <div className={s.wrapperInputBlock}>

               <input className={s.input} type="text" placeholder="Enter text"></input>

          </div>
     );
}

export default FieldInput;