import React, { useContext, useState } from 'react';
import { BuilderContext } from '../global/BuilderContext';

const CssControls = ({ styles }) => {
  const { setState } = useContext(BuilderContext);

  const [newProp, setNewProp] = useState('');
  const [newPropValue, setNewPropValue] = useState('');

  const modifyProperty = (key, value) => {
    setState((prevState) => {
      const stateCopy = JSON.parse(JSON.stringify(prevState));
      const currentSelection = stateCopy.elements.find(
        (el) => el.id === stateCopy.currentSelection.id
      );
      currentSelection.style[key] = value;
      stateCopy.currentSelection = currentSelection;
      return stateCopy;
    });
  };

  const addNewProp = () => {
    modifyProperty(newProp, newPropValue);
    setNewProp('');
    setNewPropValue('');
  };

  return (
    <table>
      <tr>
        <th>Rule</th>
        <th>Value</th>
      </tr>
      {styles &&
        Object.keys(styles).map((key) => (
          <tr>
            <td>{key}</td>
            <td>
              <input
                value={styles[key]}
                name={key}
                onChange={(e) => modifyProperty(key, e.target.value)}
              />
            </td>
          </tr>
        ))}
      <tr>
        <td>
          <input
            type='text'
            value={newProp}
            onChange={(e) => setNewProp(e.target.value)}
            style={{}}
          />
        </td>
        <td>
          <input
            type='text'
            value={newPropValue}
            onChange={(e) => setNewPropValue(e.target.value)}
          />
        </td>
        <td>
          <button onClick={addNewProp}>Add</button>
        </td>
      </tr>
    </table>
  );
};

export default CssControls;
