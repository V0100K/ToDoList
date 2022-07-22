import React from 'react';
import FieldInput from "./FieldInput/FieldInput";


import imgBook from "../../img/img-logoBook.svg";
import plusButton from './../../img/icons-plus.svg'

import s from './ToDoInputBlock.module.css'

function ToDoInputBlock(props) {
     return (
          <div className={s.wrapperToDoInputBlock}>
               <img className={s.img} alt="book" src={imgBook}/>
               <FieldInput/>
               {/*<button className={s.plusButton}></button>*/}
               <button className={s.plusButton}>
                    <img className={s.plusImg} alt='add' src={plusButton} />
               </button>
          </div>
     );
}

export default ToDoInputBlock;