import styles from './index.module.css';

function Atividade01() {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>Exemplo 1</h1>
            <p className={styles.text}>Conteúdo mínimo para componente React</p>
           
            <div>
                <div className={styles.vermelho}></div>
                <div className={styles.verde}></div>
                <div className={styles.branco}></div>
                <div className={styles.amarelo}></div>
            </div>
        </div>
     

    )
}

export default Atividade01;
