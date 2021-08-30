import { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { BuilderContext } from '../global/BuilderContext';
import Droppable from './Droppable';
import SampleUIComponent from './SampleUIComponent';
import SampleUIComponent2 from './SampleUIComponent2';
import Selectable from './Selectable';

const components = {
  SampleUIComponent,
  SampleUIComponent2,
};

const style = {
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  width: '100%',
  minHeight: '300px',
  border: '1px solid grey',
};

const Workspace = () => {
  const { state, setState } = useContext(BuilderContext);

  const [{ canDrop, isOverCurrent }, drop] = useDrop(() => ({
    accept: 'Element',
    collect: (monitor) => ({
      // isOver - When the item is dragged on top of the drop area
      // isOver: monitor.isOver(),
      // canDrop: When the item is dragging
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
    drop: (props, monitor) => {
      console.log(monitor.getHandlerId());
      // return props.onDrop(props, monitor);
    },
  }));

  const renderElements = (elements) => {
    return elements.map((el) => {
      const TagName = components[el.type];
      return (
        <Selectable
          key={el.id}
          onClick={() => selectElement(el)}
          active={state.currentSelection?.id === el.id}>
          <TagName style={el.style} {...el.props}>
            {el.children ? renderElements(el.children) : null}
          </TagName>
        </Selectable>
      );
    });
  };

  const selectElement = (el) => {
    setState((prevState) => ({ ...prevState, currentSelection: el }));
  };

  const isActive = canDrop && isOverCurrent;
  // let backgroundColor = '#fff';
  // if (isActive) {
  //   backgroundColor = 'lightgreen';
  // } else if (canDrop) {
  //   backgroundColor = 'lightyellow';
  // }

  return (
    <div
      ref={drop}
      style={{ ...style }}
      onClickCapture={() => selectElement(null)}>
      {renderElements(state.elements)}
      <Droppable highlight={isActive || false}></Droppable>
    </div>
  );
};

export default Workspace;
