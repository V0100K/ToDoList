import React from 'react';
import imgBook from 'img/img-one.svg'

function FieldInput(props) {
     return (
          <div>
               <img alt="book" src={imgBook}/>
               <input type="text" placeholder="Enter text"></input>
          </div>
     );
}

export default FieldInput;