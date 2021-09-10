import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {

    const [state, setState] = useState('')

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            <option value="">--Seleccione--</option>
            {opciones.map(el => (
                <option key={el.value} value={el.value}> {el.label} </option>
            ))}
        </select>
    );

    return [state, SelectNoticias];
}
 
export default useSelect;