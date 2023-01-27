const token = `${process.env.REACT_APP_MY_KEY}`;
export const datoHeader = {
  headers: {
    "Content-Type": "application/json",

    Authorization: `Bearer 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`,

  },
};
export const endPointIA = "https://api.openai.com/v1/completions";

export const endPointdata = process.env.REACT_APP_MY_URL_DB1;
export const endPointdata2 = process.env.REACT_APP_MY_URL_DB2;

export const options = ["Montaña", "Playa", "Ciudad", "Campo"];
export const options2 = ["Cultura", "Gastronomia", "Familiar", "Ocio Nocturno"];


export const ciudad = ["A_Coruña", "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz", "Baleares", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ceuta", "Ciudad_Real", "Córdoba", 'Cuenca', "Girona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca", "Jaén", "La_Rioja", "Las_Palmas", "León", "Lleida", "Lugo", "Madrid", "Málaga", "Melilla","Murcia", "Navarra", "Ourense", "Palencia", "Pontevedra", "Salamanca", "Santa_Cruz_de_Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza"];

export const ciudadIndex = {Almería:1, Cádiz:2, Córdoba:3, Granada:4, Huelva:5, Jaén:6, Málaga:7, Sevilla:8, Huesca:9, Teruel:10, Zaragoza:11, Asturias:12, Baleares:13, Las_Palmas:14, Santa_Cruz_de_Tenerife:15, Cantabria:16, Ávila:17, Burgos:18, León:19, Palencia:20, Salamanca:21, Segovia:22, Soria:23, Valladolid:24, Zaragoza:25, Albacete:26, Ciudad_Real:27, Cuenca:28, Guadalajara:29, Toledo:30, Barcelona:31 , Gerona:32, Lleida:33, Tarragona:34, Alicante:35, Castellón:36, Valencia:37, Cáceres:39, A_Coruña:40, Lugo:41, Ourense:42, Pontevedra:43, La_Rioja:44, Madrid:45, Murcia:46, Navarra:47, Álava:48, Guipúzcoa:49, Vizcaya:50,Ceuta:51, Melilla:52}
  


  