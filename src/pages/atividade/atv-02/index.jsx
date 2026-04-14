import { useState } from 'react';

import styles from './index.module.css';

export default function atividade02() {

    const [num, setNum] = useState(0);

    function somarUm () {
        setNum(num + 1000);
    }

    function subtraiUm () {
        setNum(num - 1000);
    }

    function zerar() {
        setNum(0);
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerHorizontal}>
                    <label                
                        className={styles.botao} 
                        onClick={() => subtraiUm()}
                >-1000</label>
                <label className={styles.texto}>Contador de Aura: {num}</label>
                <label                
                        className={styles.botao} 
                        onClick={() => somarUm()}
                >+1000</label>
            </div>   

            <label                
                className={styles.botao} 
                onClick={() => zerar()}
            >zerar</label>
 
        </div>
    );
}