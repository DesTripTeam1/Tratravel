import { useState } from "react";
import React from "react";
import axios from "axios";
import {
  datoHeader,
  ciudad,
  options,
  options2,
  endPointIA,
} from "../Config/formConfig";
import { FormContainer, FormTitle, FormJson, FormOptions, FormInput, FormBtn } from "../styles/FormStyles";

const Form = () => {
  const [saveCiudad, setSaveCiudad] = useState("");
  const [saveOption1, setSaveOption1] = useState("");
  const [saveOption2, setSaveOption2] = useState("");
  const [exito, setExito] = useState('');

  const onOptionChangeCiudad = (event) => {
    setSaveCiudad(event.target.value);
  };
  const onOptionChangeHandler = (event) => {
    setSaveOption1(event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    setSaveOption2(event.target.value);
  };

  const sendData = async (e) => {
    e.preventDefault()
    console.log(`${process.env.REACT_APP_MY_KEY}`)
    const datoTravel = {
      model: "text-davinci-003",
      prompt: `Soy de ${saveCiudad}, recomiéndame un listado de 2 lugares  dentro del territotio español para viajar que tenga ${saveOption1} en el que se pueda disfrutar de ${saveOption2} en un array de dos objetos en formato JSON con los siguientes campos: "nombre", "localización"`,
      temperature: 0.5,
      max_tokens: 400,
    };

    try {
      const data = await axios.post(endPointIA, datoTravel, datoHeader);
      console.log(data.data.choices[0].text)

      
      setExito("Cargando respuesta ...");
    
        setExito(JSON.parse(data.data.choices[0].text)[0].nombre) ;
      
      
    } catch (err) {
      setExito("error");
    }
  };

  return (
    <FormContainer>
      <FormTitle>¿A DÓNDE VAMOS?</FormTitle> 
      {exito ? <FormJson>{exito}</FormJson> : <FormOptions>
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
