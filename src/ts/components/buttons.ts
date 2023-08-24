import styles from '../../sass/modules/app.module.scss'

export const FirstButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input type='button' name='display' value='RAD'/>
        <input type='button' name='display' value='DEG'/>
        <input type='button' name='display' value='√'/>
        <input type='button' name='display' value='x²'/>
        <input type='button' name='display' value='('/>
        <input type='button' name='display' value=')'/>
        <input type='button' name='display' value='C'/>
        <input type='button' class='${styles.DEL}' name='display' value='DEL'/>
        `
    )

}


export const SecondButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input id='7' type='button' name='display' value='π'/>
        <input id='7' type='button' name='display' value='cos'/>
        <input id='7' type='button' name='display' value='sin'/>
        <input id='7' type='button' name='display' value='tan'/>
        <input id='7' type='button' name='display' value='7'/>
        <input id='8' type='button' name='display' value='8'/>
        <input id='9' type='button' name='display' value='9'/>
        <input id='times' type='button' name='display' value='/'/>
        `
    )

}

export const ThirdButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input id='4' type='button' name='display' value='e'/>
        <input id='4' type='button' name='display' value='acos'/>
        <input id='4' type='button' name='display' value='asin'/>
        <input id='4' type='button' name='display' value='atan'/>
        <input id='4' type='button' name='display' value='4'/>
        <input id='5' type='button' name='display' value='5'/>
        <input id='6' type='button' name='display' value='6'/>
        <input id='minus' type='button' name='display' value='*'/>
        `
    )

}

export const FourthButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input id='1' type='button' name='display' value='x!'/>
        <input id='1' type='button' name='display' value='exp'/>
        <input id='1' type='button' name='display' value='In'/>
        <input id='1' type='button' name='display' value='log'/>
        <input id='1' type='button' name='display' value='1'/>
        <input id='2' type='button' name='display' value='2'/>
        <input id='3' type='button' name='display' value='3'/>
        <input id='plus' type='button' name='display' value='-'/>
        `
    )

}

export const FifthButtons = (DOM: HTMLDivElement) => {

    DOM.innerHTML = (
        `
        <input id='00' type='button' name='display' value='^'/>
        <input id='00' type='button' name='display' value='ANS'/>
        <input id='00' type='button' name='display' value='%'/>
        <input id='00' type='button' name='display' value='.'/>
        <input id='0' type='button' name='display' value='0'/>
        <input id='equals' type='button' name='display' value='='/>
        <input id='0' type='button' name='display' value='+'/>
        `
    )

}
