import "./App.css"
import AudioRecorder from "./components/AudioRecorder/AudioRecorder"
import CardGroup from "./components/CardGroup/CardGroup"
import SpeechApp from "./components/SpeechApp/SpeechApp"
import SpeechToNumber from "./components/SpeechToNumbers/SpeechToNumbers"
import SpeechToText from "./components/SpeechToText/SpeechToText"
import Grid from "./components/Grid/Grid"
import Header from "./common/Header/Header"

function App() {
  return (
    <>
      <Header />
      <h1>Card Game</h1>
      <h2>Choose a Card</h2>
      <CardGroup />
      <Grid />
      <SpeechApp />
      <SpeechToText />

      <SpeechToNumber />
      <AudioRecorder />
      <br />
    </>
  )
}

export default App
