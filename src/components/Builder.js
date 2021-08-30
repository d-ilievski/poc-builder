import React, { useContext, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BuilderContext } from '../global/BuilderContext';
import CssControls from './CssControls';
import Element from './Element';
import Workspace from './Workspace';

const Builder = () => {
  const { state } = useContext(BuilderContext);

  const [isToolbarCollapsed, setIsToolbarCollapsed] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='row' style={{ display: 'flex', width: '100%' }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            background: 'blue',
            position: 'absolute',
            top: '0',
            right: '0',
          }}
          onClick={() => setIsToolbarCollapsed(!isToolbarCollapsed)}></div>
        <div
          className='column left'
          style={{
            width: isToolbarCollapsed ? '100%' : '65%',
            padding: '30px',
          }}>
          <Workspace />
        </div>
        {!isToolbarCollapsed && (
          <div
            className='column right'
            style={{
              width: '35%',
              padding: '30px',
            }}>
            <Element name='Component 1' component='SampleUIComponent' />
            <Element name='Component 2' component='SampleUIComponent2' />
            {state.currentSelection && (
              <CssControls styles={state.currentSelection.style || null} />
            )}
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default Builder;
