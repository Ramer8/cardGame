import { useState } from "react"

const SpeechApp = () => {
  const [text, setText] = useState("")
  const [lang, setLang] = useState("es-ES") // El idioma por defecto es español de España

  const handleSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = lang // Establece el idioma
    speechSynthesis.speak(utterance)
  }

  return (
    <div>
      <h1>Text-to-Speech con idioma</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe aquí el texto a leer"
      />
      <div>
        <label htmlFor="lang">Seleccionar idioma:</label>
        <select
          id="lang"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="es-ES">Español (España)</option>
          <option value="es-MX">Español de México (Mexico)</option>
          <option value="en-US">Inglés (Estados Unidos)</option>
          <option value="en-GB">Inglés (Reino Unido)</option>
          <option value="fr-FR">Francés (Francia)</option>
          <option value="de-DE">Alemán (Alemania)</option>
          {/* Añade más opciones de idioma según tus necesidades */}
        </select>
      </div>
      <button onClick={handleSpeech}>Leer Texto</button>
    </div>
  )
}

export default SpeechApp
