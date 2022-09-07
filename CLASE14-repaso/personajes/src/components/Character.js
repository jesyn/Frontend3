import { useEffect } from "react"
import styles from '../styles/container.module.css'

const Character = ({name, image, id}) =>{

  useEffect( () => {
      return  () =>{
          console.log('se desmonto el personaje')
      } 
  }, [])

  return (
    <div className={styles.Character}>
        <img className={styles.img} src={image} alt={name}></img>
        <h2>{name}</h2>
    </div>
  )

}
export default Character;