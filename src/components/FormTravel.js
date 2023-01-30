import { useState, useEffect } from "react";
import React from "react";
import "../styles/FormTravel.css";
import {
  faInfo,
  faList,
  faSitemap,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Badges from "../common/Badges";
import Controls from "../common/Control";
import Cards from "../common/Cards";
import { FrasesSabiasQue } from "../assets/frasesLargas";
import { options, options2, ciudad } from "../archive/formOptions";
import {
  FormContainer,
  FormJson,
  FormTitle,
  FormOptions,
  FormInput,
} from "../styles/FormStyles";
import LoadTravel from "../images/loadTravel.webp";
import UserConsumer from "../hooks/useDatos";
import SliderData from "../components/SliderData"

const FormTravel = () => {
  const [saveResultFinal, setSaveResultFinal] = UserConsumer();
  const [saveCiudad, setSaveCiudad] = useState("");
  const [saveOption1, setSaveOption1] = useState("");
  const [saveOption2, setSaveOption2] = useState("");
  const [saveResult, setSaveResult] = useState("");
  const [saveCustom, setSaveCustom] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isError2, setIsError2] = useState("");


  const onOptionChangeCiudad = (event) => {
    const resultado =
      ciudad.findIndex((word) => word == event.target.value) + 1;
    setSaveCiudad(resultado);
  };
  const onOptionChangeHandler = (event) => {
    setSaveOption1(event.target.value);
  };
  const onOptionChangeHandler2 = (event) => {
    setSaveOption2(event.target.value);
  };

  const slides = [
    {
      iconElement: faInfo,
      title: "bienvenido",
      description:
        "¡Hola! Estoy aquí para ayudarte a decidir tu destino de vacaciones. ¿Cuáles son tus preferencias? ¿Prefieres un destino con playas, montañas, ciudades o algo más conectado con la naturaleza? ¿Cuales son tus intereses principales al viajar? Estas preguntas me ayudarán a recomendarte el destino perfecto para tus vacaciones.",
    },
    {
      iconElement: faList,
      title: "",
      description: (
        <>
          <div className="containerOptions">
            ¿Desde dónde viajas?
            <FormInput onChange={onOptionChangeCiudad}>
              <option>Elige una opción</option>
              {ciudad.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </FormInput>
            ¿Qué entorno prefieres?{" "}
            <FormInput onChange={onOptionChangeHandler}>
              <option>Elige una opción</option>
              {options.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </FormInput>
            ¿Cuáles son tus intereses?
            <FormInput onChange={onOptionChangeHandler2}>
              <option>Elige una opción</option>
              {options2.map((option, index) => {
                return <option key={index}>{option}</option>;
              })}
            </FormInput>
          </div>
        </>
      ),
    },
    {
      iconElement: faSitemap,
      title: "Elige",
      description: (
        <>
          {" "}
          {!saveResult ? (
            <>
              {saveCustom} <img src={LoadTravel} alt="loading" width={50} />
            </>
          ) : (
            <>
              {" "}
              <button
                className="btnFormResult"
                onClick={() =>
                  setSaveResultFinal(
                    saveResult.slice(0, 3),
                    console.log(saveResultFinal)
                  )
                }
              >
                {saveResult[0]}
              </button>{" "}
              <button
                className="btnFormResult"
                onClick={() =>
                  setSaveResultFinal(
                    saveResult.slice(3, 6),
                    console.log(saveResultFinal)
                  )
                }
              >
                {saveResult[3]}
              </button>{" "}
            </>
          )}
          <br />
          <br />
          {saveResultFinal ? (
            <>Ha elegido : {saveResultFinal[0]}</>
          ) : (
            saveResultFinal
          )}{" "}
        </>
      ),
    },
    {
      iconElement: faCheck,
      title: "Felicidades",
      description:
        "Su elección ha sido guardada , a continuacion dispondra en su zona privada de todas la posibilidades que ponemos a su disposición.",
    },
  ];

  useEffect(() => {
    const num = Math.floor(Math.random() * FrasesSabiasQue.length);

    const textoForm = "Los mejores destinos son :  ";
    setSaveCustom(FrasesSabiasQue[num]);
  }, []);

  return (
<<<<<<< HEAD
    <>
=======
    
>>>>>>> cb54814073dd1bb27223850e7886d0dc8b288517
    <FormContainer>
      <FormTitle>¿A DÓNDE VAMOS?</FormTitle>
      <div className="containerCardIA">
        <Badges currentIndex={currentIndex} slides={slides} />

        <Cards currentIndex={currentIndex} slides={slides} />

        <Controls
          saveOption1={saveOption1}
          setSaveOption1={setSaveOption1}
          saveOption2={saveOption2}
          setSaveOption2={setSaveOption2}
          saveCiudad={saveCiudad}
          setSaveCiudad={setSaveCiudad}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          slides={slides}
          setSaveResult={setSaveResult}
          saveResult={saveResult}
          setIsErrort={setIsError2}
          isError2={isError2}
          setSaveCustom={setSaveCustom}
          saveCustom={saveCustom}
        />
      </div>
    </FormContainer>
  
      </>
  );
};

export default FormTravel;
