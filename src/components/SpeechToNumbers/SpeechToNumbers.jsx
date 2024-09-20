import { useState } from "react"
import "./SpeechToNumbers.css"
// Comprobamos que el navegador soporta la API
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const SpeechToNumber = () => {
  const [transcription, setTranscription] = useState("")
  const [listening, setListening] = useState(false)
  const [numbers, setNumbers] = useState([])

  if (!SpeechRecognition) {
    return (
      <p>Lo siento, tu navegador no soporta la API de reconocimiento de voz.</p>
    )
  }

  const recognition = new SpeechRecognition()
  recognition.lang = "en-GB" // Puedes cambiar el idioma aquí
  recognition.continuous = true // Escucha continuamente hasta que se detenga manualmente
  recognition.interimResults = false // Si es true, muestra resultados intermedios

  // Cuando se detecta el discurso y se convierte en texto
  recognition.onresult = (event) => {
    const current = event.resultIndex
    const transcript = event.results[current][0].transcript.trim()

    setTranscription((prevText) => prevText + " " + transcript)

    // Filtramos y almacenamos números encontrados en la transcripción
    const detectedNumbers = transcript.match(/\d+/g) // Busca secuencias de números
    if (detectedNumbers) {
      console.log(detectedNumbers)
      setNumbers((prevNumbers) => [...prevNumbers, ...detectedNumbers])
    }
  }

  // Manejo de errores
  recognition.onerror = (event) => {
    console.error("Error:", event.error)
  }

  const startListening = () => {
    setListening(true)
    recognition.start()
  }

  const stopListening = () => {
    setListening(false)
    recognition.stop()
  }

  return (
    <div>
      <h1>Reconocimiento de Voz para Números</h1>

      <textarea
        className="input-textarea"
        value={transcription}
        type="text"
        placeholder="your speech numbers.."
        // rows="10"
        // cols="50"
        readOnly
      />
      <div>
        <h2 style={{ color: " dimgray" }}>Números detectados:</h2>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <div>
        {listening ? (
          <button onClick={stopListening}>Detener</button>
        ) : (
          <button style={{ background: "blue" }} onClick={startListening}>
            Escuchar
          </button>
        )}
      </div>
    </div>
  )
}

export default SpeechToNumber
