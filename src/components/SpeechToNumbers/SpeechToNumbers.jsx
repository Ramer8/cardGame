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
      <h1>
        Speech to Numbers{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-mic-fill"
          viewBox="0 0 16 16"
        >
          <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
          <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
        </svg>{" "}
        to{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-123"
          viewBox="0 -3 16 16"
        >
          <path d="M2.873 11.297V4.142H1.699L0 5.379v1.137l1.64-1.18h.06v5.961zm3.213-5.09v-.063c0-.618.44-1.169 1.196-1.169.676 0 1.174.44 1.174 1.106 0 .624-.42 1.101-.807 1.526L4.99 10.553v.744h4.78v-.99H6.643v-.069L8.41 8.252c.65-.724 1.237-1.332 1.237-2.27C9.646 4.849 8.723 4 7.308 4c-1.573 0-2.36 1.064-2.36 2.15v.057zm6.559 1.883h.786c.823 0 1.374.481 1.379 1.179.01.707-.55 1.216-1.421 1.21-.77-.005-1.326-.419-1.379-.953h-1.095c.042 1.053.938 1.918 2.464 1.918 1.478 0 2.642-.839 2.62-2.144-.02-1.143-.922-1.651-1.551-1.714v-.063c.535-.09 1.347-.66 1.326-1.678-.026-1.053-.933-1.855-2.359-1.845-1.5.005-2.317.88-2.348 1.898h1.116c.032-.498.498-.944 1.206-.944.703 0 1.206.435 1.206 1.07.005.64-.504 1.106-1.2 1.106h-.75z" />
        </svg>{" "}
      </h1>
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
            Escuchar{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-mic-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
            </svg>{" "}
          </button>
        )}
      </div>
    </div>
  )
}

export default SpeechToNumber
