import React, { useState } from 'react'
import { saveData } from '../Data'

function Drop() {
    const [drop, setDrop] = useState()
  return (
    <div className="drop">
      {/* {
          saveData?.map((items, i) =>
              <div key={i} className="div">
               <p onClick={() => drop !== items?.id ? setDrop(items?.id) : setDrop()} className="hd1">
                {items.name}
               </p>
               <div className={drop === items?.id ? 'transit show' : 'transit hide'}>
                  {items.job}
              </div>
              </div>
          )
      } */}
    </div>
  )
}

export default Drop
