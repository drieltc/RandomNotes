import Separator from "../Separator";
import SelectOption from "../SelectOptions";
import styles from './index.module.css'

export default function GroupSelectOptions({
    id,
    separator = true,
    icons,
    handleFunction,
    states,
    updateMenus,
    handleFunctionVar,
    twoInputs=false
  }:{
    id: string;
    separator?:boolean;
    icons?:React.ReactNode[];
    handleFunction?: Function;
    states?: any;
    updateMenus?:boolean;
    handleFunctionVar?:any
    twoInputs?:boolean
  }) {

    const handleChildClick = (content:string) => {
      if (handleFunction){
        handleFunction(content)
      }
    }

    return (
      <>
        <div className={styles.options} id={id}>
          {Object.keys(states).map((state:string, index:number) => (
            <SelectOption
              key={state}
              icon={icons? icons[index]: null}
              content={state? state : null}
              isSelected = {Object.values(states)[index]}
              handleFunction={handleChildClick}
              handleFunctionVar={handleFunctionVar}
              updateMenus = {updateMenus}
              twoInputs = {twoInputs}
            />
          ))}
        </div>
        {separator && <Separator />}
      </>
    );
  }