import style from './Calculator.module.css'

import { Button } from './Button'

const Calculator =  () => {


    return(
        <main className={style.calculator}>
            <div className={style.display}>
                <h2>6000/2+3227*2</h2>
                <h1>=12,454</h1>
            </div>
            <div className={style.keyboard}>
                <div>
                    <Button content="Ac" type="tertiary"/>
                    <Button content="<x]" type="tertiary"/>
                    <Button content="/" type="secondary"/>
                    <Button content="*" type="secondary"/>
                </div>
                <div>
                    <Button content="7" type="primary"/>
                    <Button content="8" type="primary"/>
                    <Button content="9" type="primary"/>
                    <Button content="-" type="secondary"/>
                </div>
                <div className={style.group3}>
                    <div>
                        <div>
                            <Button content="4" type="primary"/>
                            <Button content="5" type="primary"/>
                            <Button content="6" type="primary"/>

                        </div>
                        <div>
                            <Button content="1" type="primary"/>
                            <Button content="2" type="primary"/>
                            <Button content="3" type="primary"/>
                        </div>
                    </div>
                    <Button content="+" type="secondary" higher/>

                </div>
                <div className={style.group4}>
                    <Button content="0" type="primary" wider/>
                    <Button content="." type="primary"/>
                    <Button content="=" type="fourth" higher/>
                </div>

            </div>

        </main>
    )
}

export {
    Calculator
}