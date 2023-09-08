import styles from './index.module.css'

export default function ChordsMenu({
    visibility=true
}:{
    visibility?:boolean
}) {
    return(visibility?
        <menu id={styles.chords}>
            Chords
        </menu>
        :null
    )
}