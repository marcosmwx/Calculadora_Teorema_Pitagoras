import React from 'React'

const Calculados =({hipotenusa,catetoum,catetodois}) => {
    return(
        <div className='calculados'>
            <div>
                <h4 className='hipotenusa'>Hipotenusa = {hipotenusa}</h4>
                <h4 className='catetoum'> Cateto oposto = {catetoum}</h4>
                <h4 className='catetodois'>Cateto adjacente = {catetodois}</h4>
            </div>
            
        </div>
    )
}

export {Calculados}