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
      <h1>
        Speech to Text{" "}
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
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-card-text"
          viewBox="0 -2 16 16"
        >
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
          <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
        </svg>{" "}
      </h1>
      <textarea
        className="input-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        readOnly
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

export default SpeechToText
