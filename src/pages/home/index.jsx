import { Link } from "react-router";

import styles from './index.module.css';

function Home() {

  return (
    <div className={styles.container}>
        <h1>Aula de React com Vite JS</h1>
        <div className={styles.containerCards}>   
          <h2>Exemplos</h2>       
          <Link to="/exemplo/1">Exemplo 1 - Componente básico</Link>
          <Link to="/exemplo/2">Exemplo 2 - Uso de module CSS</Link>    
          <Link to="/exemplo/3">Exemplo 3 - Uso de module CSS</Link>    
          <Link to="/exemplo/4">Exemplo 4 - Uso de module CSS</Link>   
        </div>
        
        <div className={styles.containerCards}>    
          <h2>Atividades</h2>      
          <Link to="/atividade/1">Atividade 1 - Uso CSS</Link>
          <Link to="/atividade/2">Atividade 2 - botao</Link>
          <Link to="/atividade/3">Atividade 3 - botao</Link>
        </div>
    </div>
  )
}

export default Home;
