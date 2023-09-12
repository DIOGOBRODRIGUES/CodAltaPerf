import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times=[
        'Eng. Soft.',
        'Eng. Dados',
        'Analista'
    ]
    return (
        <section className='formulario'>
        <form>
            <CampoTexto label="Nome" placeholder="Digite seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa itens={times}/>
        </form>
        </section>
    );
}

export default Formulario;