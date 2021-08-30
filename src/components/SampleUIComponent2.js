import React from 'react';
import Droppable from './Droppable';

const SampleUIComponent2 = ({ style, title }) => {
  return (
    <Droppable>
      <div className='col-3'>
        <div
          style={{
            width: '100%',
            height: '100px',
            background: 'green',
            ...style,
          }}>
          {title}
        </div>
      </div>
      <div className='col-3'>
        <div
          style={{
            width: '100%',
            height: '100px',
            background: 'green',
            ...style,
          }}>
          {title}
        </div>
      </div>
      <div className='col-3'>
        <div
          style={{
            width: '100%',
            height: '100px',
            background: 'green',
            ...style,
          }}>
          {title}
        </div>
      </div>
      <div className='col-3'>
        <div
          style={{
            width: '100%',
            height: '100px',
            background: 'green',
            ...style,
          }}>
          {title}
        </div>
      </div>
    </Droppable>
  );
};

export default SampleUIComponent2;
