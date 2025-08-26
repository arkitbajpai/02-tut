import React from 'react'
import Row from './Row';
const Table = ({items}) => {
  return (
    <div className='table-container'>
      <table>
        <trbody>
        {items.map(item=>(
            <Row key={item.id} item ={item}/>
        ))}
        </trbody>
      </table>
    </div>
  )
}

export default Table
