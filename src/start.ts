import styles from './sass/modules/app.module.scss';
import Render from "./render/render";
import { Calculator_Function } from "./ts/calculator.function";


export default function Start(start: HTMLElement): void {
    
    start.innerHTML = (`
    
       <div class='${styles.container}'>
            <div class='${styles.calculator}'>
                <form>
                    <div class='${styles.screen}'>
                       <input type='text' class='${styles.calculatetop}' id='display' value=''/>
                       <input type='text' class='${styles.calculatebottom}' id='subdisplay' value='0'/>
                    </div>
                    <div id='firstGroup'></div>
                    <div id='secondGroup'></div>
                    <div id='thirdGroup'></div>
                    <div id='fourthGroup'></div>
                    <div id='fifthGroup'></div>
                </form>
            </div>
       </div>

    `
    )

    Render();
    Calculator_Function();
  }
  
