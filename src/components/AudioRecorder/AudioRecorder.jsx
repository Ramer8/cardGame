import { useState } from "react"

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [stream, setStream] = useState(null)

  // Solicitar permiso para el micrófono
  const enableMic = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      })
      setStream(mediaStream)
      setIsRecording(true)
    } catch (error) {
      console.error("Error al habilitar el micrófono: ", error)
    }
  }

  // Detener el uso del micrófono
  const disableMic = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop()) // Detener el flujo de audio
      setIsRecording(false)
    }
  }

  return (
    <div>
      <h2 style={{ color: " dimgray" }}>Grabar audio</h2>
      {isRecording ? (
        <button onClick={disableMic} style={{ background: "blue" }}>
          Detener grabación
        </button>
      ) : (
        <button onClick={enableMic} style={{ background: "red" }}>
          Iniciar grabación
        </button>
      )}
    </div>
  )
}

export default AudioRecorder
