import { useState } from "react"

// Comprobamos que el navegador soporta la API
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const SpeechToText = () => {
  const [text, setText] = useState("")
  const [listening, setListening] = useState(false)

  if (!SpeechRecognition) {
    return (
      <p>Lo siento, tu navegador no soporta la API de reconocimiento de voz.</p>
    )
  }

  const recognition = new SpeechRecognition()
  recognition.lang = "es-ES" // Puedes cambiar el idioma aquí
  recognition.continuous = true // Escucha continuamente hasta que se detenga manualmente
  recognition.interimResults = false // Si es true, muestra resultados intermedios

  // Cuando se detecta el discurso y se convierte en texto
  recognition.onresult = (event) => {
    const current = event.resultIndex
    const transcript = event.results[current][0].transcript
    setText((prevText) => prevText + transcript + " ") // Agregamos la transcripción al texto
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
      <h1>Reconocimiento de Voz (Speech-to-Text)</h1>
      <textarea
        className="input-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        // rows="10"
        // cols="50"
      />
      <div>
        {listening ? (
          <button style={{ background: "red" }} onClick={stopListening}>
            Detener
          </button>
        ) : (
          <button onClick={startListening} style={{ background: "green" }}>
            Escuchar
          </button>
        )}
      </div>
    </div>
  )
}

export default SpeechToText
