import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({setCategoria}) => {
    // OPCIONES FORMULARIO
    const OPCIONES = [
        {value: 'general' , label: 'General'},
        {value: 'business' , label: 'Negocio'},
        {value: 'entertainment' , label: 'Entretenimiento'},
        {value: 'health' , label: 'Salud'},
        {value: 'science' , label: 'Ciencia'},
        {value: 'sports' , label: 'Deportes'},
        {value: 'technology' , label: 'Tecnologia'}
    ];
    // Utilizar custom hook useSelect
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);
    // Manejar el submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategoria(categoria);
    }
    
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleSubmit} >
                    <h2 className={styles.heading}>Encuentra noticias por Categoria</h2>
                    <SelectNoticias/>
                    <div>
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;