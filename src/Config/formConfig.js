const token = `${process.env.REACT_APP_MY_KEY}`;
export const datoHeader = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer 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`,
  },
};
export const endPointIA = "https://api.openai.com/v1/completions";

export const options = ["Montaña", "Playa", "Ciudad", "Campo"];
export const options2 = ["Cultura", "Gastronomia", "Familiar", "Ocio Nocturno"];


export const ciudad = [
    "Sevilla",
    "Madrid",
    "Valencia",
    "Barcelona",
    "Galicia",
    "Canarias",
  ];
