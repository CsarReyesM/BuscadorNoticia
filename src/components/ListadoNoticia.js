import React from 'react';
import Noticia from './Noticia';

const ListadoNoticia = ({noticias}) => {
    return ( 
        <div className="row">
            {noticias.map(elemento => (
                <Noticia 
                    elemento={elemento}
                    key={elemento.url}
                />
            ))}
        </div>

     );
}
 
export default ListadoNoticia;