import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroVideo(){
    return (
      <PageDefault>
        <h1>Página de Cadastro de Video</h1>

        <Link to="/Cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }
export default CadastroVideo;
