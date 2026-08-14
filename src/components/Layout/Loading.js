import loading from '../../imagens/loading.svg'
import styles from './Loading.module.css'

function Loading(){
    return(
        <div ClassName={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading" />
        </div>
    )

}
export default Loading