import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';

function Atividade03() {
    // O hook useState gerencia o valor do contador

    const [funcao, setFuncao] = useState('');
    
    const cadastrar = () => setFuncao('Cadastrar');
    const editar = () => setFuncao('Editar');
    const lista = () => setFuncao('Lista');
    const excluir = () => setFuncao('Excluir');
    const cancelar= () => setFuncao('Cancelar');

    return (
        <div className={styles.container}>
            <h1>Atividade 3</h1>
            <h2>Ação selecionada:{funcao}</h2>

            {/* Passando funções e textos via Props para o componente Botao */}
            <Botao texto="Cadastrar" aoClicar={cadastrar} acao={'Cadastrar'} />
            <Botao texto="Editar" aoClicar={editar} acao={'Editar'} />
            <Botao texto="Lista" aoClicar={lista} acao={'Lista'} />
            <Botao texto="Excluir" aoClicar={excluir} acao={'Excluir'} />
            <Botao texto="Cancelar" aoClicar={cancelar} acao={'Cancelar'} />
        </div>
    );
}

export default Atividade03;