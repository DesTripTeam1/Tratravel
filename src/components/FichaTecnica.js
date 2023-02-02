import React from 'react'
import '../styles/fichaTecnica.css'

const FichaTecnica = ({provinceInfo, setFichaTecnica, comAut}) => {
    console.log(comAut);
    return (
     <div className='divFichaTecnica'>
         <div className='imgLanding' style={{ backgroundImage: `url(${provinceInfo.img})` }}>
             <div className='closeBTN' onClick={() => setFichaTecnica('')}>
                <p className="xBTN">X</p>
             </div>
         </div>
         <div className="provinciaInfo">
            <p className="title">{provinceInfo.nombre}</p>
            <hr />
            <div className='habYcom'>
                <p className="ccaa">Comunidad Autonoma</p>
                <p className="dato">{provinceInfo.ccaa}</p>
                <p className="hab">Habitantes</p>
                <p className="dato">{provinceInfo.habitantes} habitantes</p>
            </div>
         </div>
         <div className="listas">
                <ul className='pueblos'>
                    <p>Pueblos destacados</p>
                    {provinceInfo.pueblosDestacados.map((pueblo, index) => <li key={index}>{pueblo}</li>)}
                </ul>
                <ul className='fiestas'>
                    <p>Fiestas populares</p>
                    {provinceInfo.fiestasPopulares.map((fiesta, index) => <li key={index}>{fiesta}</li>)}
                </ul>
                <ul className='platos'>
                    <p>Platos típicos</p>
                    {provinceInfo.platosTipicos.map((plato, index) => <li key={index}>{plato}</li>)}
                </ul>
            </div>
     </div>
  )
}

export default FichaTecnica