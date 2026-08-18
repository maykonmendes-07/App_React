import styles from './Loading.module.css'
import loading from '../../imagens/loading.svg' // Verifique se o caminho da imagem está correto

function Loading() {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  )
}

export default Loading
