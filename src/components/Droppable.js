import React from 'react';
import { useDrop } from 'react-dnd';

const Droppable = (props) => {
  const [{ canDrop, isOverCurrent }, drop] = useDrop(() => ({
    accept: 'Element',
    collect: (monitor) => ({
      // isOver - When the item is dragged on top of the drop area + shallow = on the specific child only
      isOverCurrent: monitor.isOver({ shallow: true }),
      // canDrop: When the item is dragging
      canDrop: monitor.canDrop(),
    }),
    // drop: (props, monitor) => {
    //   console.log(props);
    //   return props.onDrop(props, monitor);
    // },
  }));

  const isActive = canDrop && isOverCurrent;
  let backgroundColor = '#fff';
  if (isActive || props.highlight) {
    backgroundColor = 'lightgreen';
  } else if (canDrop) {
    backgroundColor = 'lightyellow';
  }

  return (
    <div ref={drop} style={{ backgroundColor, ...props.style }} className='row'>
      {props.children}
    </div>
  );
};

export default Droppable;
