import React from 'react';
import Droppable from './Droppable';

const SampleUIComponent = ({ style, title }) => {
  return (
    <Droppable>
      <div className='col-6'>
        <div
          style={{
            width: '100%',
            height: '100px',
            background: 'pink',
            ...style,
          }}>
          {title}
        </div>
      </div>
      <div className='col-6'>
        <div
          style={{
            width: '100%',
            height: '100px',
            background: 'olive',
            ...style,
          }}>
          {title}
        </div>
      </div>
    </Droppable>
  );
};

export default SampleUIComponent;
