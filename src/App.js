import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticia from './components/ListadoNoticia';


function App() {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=f4f54ab4dc044d0085d485c9a39c8ba0`;
      const consulta = await fetch(url);
      const noticias = await consulta.json();
      setNoticias(noticias.articles);
    }
    consultarAPI();
  },[categoria])

  return (
    <>
      <Header
        titulo="Buscador de noticias"
      />
      <div className="container white">
          <Formulario
            setCategoria={setCategoria}
          />
          <ListadoNoticia
            noticias={noticias}
          />
      </div>

    </>
  );
}

export default App;
