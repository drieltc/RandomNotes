import styles from './index.module.css'
import RenderSharpOrFlat from './RenderSharpOrFlat';
import NotesSelectGrid from './NotesSelectGrid';
import ControlsSelect from './ControlsSelect';

export default function NotesMenu({
    visibility=true
}:{
    visibility?:boolean
}) {

    return( visibility?
        <menu id={styles.notes}>
            <ControlsSelect />
            <NotesSelectGrid />
            <RenderSharpOrFlat />
        </menu>
        :null
    )
}