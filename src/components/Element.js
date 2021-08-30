import { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { BuilderContext } from '../global/BuilderContext';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

const placeItem = (component, setState) => {
  const id = Math.random().toString(36).substr(2, 5);
  const newElement = {
    id,
    type: component,
    props: {
      title: id,
    },
    style: {
      margin: '0px',
      padding: '0px',
    },
  };

  setState((prevState) => ({
    ...prevState,
    elements: [...prevState.elements, newElement],
  }));
};

const Element = ({ name, component }) => {
  const { setState } = useContext(BuilderContext);
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: 'Element',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      console.log(item);
      if (monitor.getDropResult()) {
        placeItem(component, setState);
      }
    },
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={dragPreview} style={{ ...style, opacity }}>
      <div ref={drag}>{name}</div>
    </div>
  );
};
export default Element;
