import { useState } from "react";
import React from "react";
import axios from "axios";
// import Load from "../assets/animated/load.gif";
import { FrasesSabiasQue } from "../assets/frasesLargas";
import {
  datoHeader,
  ciudad,
  options,
  options2,
  endPointIA,
  endPointdata,
  endPointdata2,

} from "../Config/formConfig";
import { FormContainer, FormTitle, FormJson, FormOptions, FormInput, FormBtn } from "../styles/FormStyles";

const Form = () => {
  const [saveCiudad, setSaveCiudad] = useState("");
  const [saveOption1, setSaveOption1] = useState("");
  const [saveOption2, setSaveOption2] = useState("");

  const [saveResult, setSaveResult] = useState("");
  const [exito, setExito] = useState("");


  const onOptionChangeCiudad = (event) => {
     
    const resultado = ciudad.findIndex(word=> word==event.target.value) + 1
    
    setSaveCiudad(resultado);
    
   
  };
  const onOptionChangeHandler = (event) => {
    setSaveOption1(event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    setSaveOption2(event.target.value);
  };
  const reset = () => {
    setExito("");
  };

  const sendData = async (e) => {
    e.preventDefault()
    
    const datoTravel = {
      model: "text-davinci-003",

      prompt: `Soy de ${saveCiudad}, recomiéndame un listado de 2 lugares  dentro del territotio español para viajar que tenga ${saveOption1} en el que se pueda disfrutar de ${saveOption2} in  array two objet , form JSON  "nombre", "ubicación","provincia"`,
      temperature: 0,

      max_tokens: 400,
    };
  
    try {
      const datoinput = {
        "provincia":saveCiudad,
        "entorno":saveOption1,
        "actividades":saveOption2,
      }
      
      
      const datain = await axios.post(endPointdata, datoinput);
      
      
    } catch (err) {
      setExito("error1");
      console.log(err)
    }
    try {
      const num = Math.floor(Math.random() * FrasesSabiasQue.length)

      const textoForm = "Los mejores destinos son :  "
      setExito(FrasesSabiasQue[num]);
      const data = await axios.post(endPointIA, datoTravel, datoHeader);

      

        const arrayRes = []
        arrayRes.push(JSON.parse(data.data.choices[0].text)[0].nombre)
        arrayRes.push(JSON.parse(data.data.choices[0].text)[0].ubicación)
        arrayRes.push(JSON.parse(data.data.choices[0].text)[0].provincia)
        arrayRes.push(JSON.parse(data.data.choices[0].text)[1].nombre)
        arrayRes.push(JSON.parse(data.data.choices[0].text)[1].ubicación)
        arrayRes.push(JSON.parse(data.data.choices[0].text)[1].provincia)
        
        setSaveResult(arrayRes)
        
        setExito(textoForm + saveResult[0] + " , " + saveResult[3]);
        
      
    } catch (err) {
      setExito("error2");
      console.log(err)
    }
    
    const sendOut = async () =>{
        try {
          
      const datooutput = {
        "provincia":0,
        "ubicacion":saveResult[1],
        "nombre":saveResult[0],
      }
      console.log(datooutput)
      const dataout = await axios.post(endPointdata2, datooutput);

      
      
    } catch (err) {
      setExito("error3");
      console.log(err)
    }  
    }
    sendOut()
    
    const sendOut2 = async () =>{
        try {
      const datooutput = {
        "provincia":0,
        "ubicacion":saveResult[4],
        "nombre":saveResult[3],
      }
      console.log(datooutput)
      const dataout = await axios.post(endPointdata2, datooutput);
      
      
    } catch (err) {
      setExito("error3");
      console.log(err)
    }  
    }
    sendOut2()






    

  };
  
  return (
    <FormContainer>
      <FormTitle>¿A DÓNDE VAMOS?</FormTitle> 
      {exito ? <FormJson>{exito}<br /><br /><FormBtn onClick={reset}>volver</FormBtn></FormJson> : <FormOptions>
        ¿Desde dónde viajas?<FormInput onChange={onOptionChangeCiudad}>
          <option>Elige una opción</option>
          {ciudad.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </FormInput>
        ¿Qué entorno prefieres? <FormInput onChange={onOptionChangeHandler}>
          <option>Elige una opción</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </FormInput>
        ¿Cuáles son tus intereses?<FormInput onChange={onOptionChangeHandler2}>
          <option>Elige una opción</option>
          {options2.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </FormInput>
        <FormBtn onClick={sendData}>ENVIAR</FormBtn>
        </FormOptions>}

    </FormContainer>
      
    
  );
};

export default Form;
