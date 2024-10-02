import { useState } from "react"
import "./CardGroup.css"
const CardGroup = () => {
  const [askedItem, setAskedItem] = useState("")

  const imageTeams = [
    {
      id: 33121,
      urlTeam:
        "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/red-bull-racing.png",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/4col/image.png",
    },
    {
      id: 58685,
      urlTeam:
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mercedes.png.transform/4col/image.png",

      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mercedes.png",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mercedes.png.transform/4col/image.png",
    },
    {
      id: 183197,
      urlTeam:
        // "https://media.formula1.com/content/dam/fom-website/teams/Ferrari/logo-ferrari-18%20.jpg",
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/ferrari",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/ferrari.png",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/ferrari.png.transform/4col/image.png",
    },
    {
      id: 65311,
      urlTeam:
        "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin.jpg",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/aston-martin.png", // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/aston-martin.png.transform/4col/image.png",
    },
    {
      id: 56525,
      urlTeam:
        // "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mclaren.jpg",
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/mclaren",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/mclaren.png",

      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mclaren.png.transform/4col/image.png",
    },
    {
      id: 31205,
      urlTeam:
        "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine.jpg",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/alpine.png",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alpine.png.transform/4col/image.png",
    },
    {
      id: 163637,
      urlTeam:
        // "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/williams%20blue.jpg",
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/williams",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/williams.png",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/williams.png.transform/4col/image.png",
    },
    {
      id: 143585,
      urlTeam:
        "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/haas.jpg",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/haas.png",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/haas-f1-team.png.transform/4col/image.png",
    },
    {
      id: 71583,
      urlTeam:
        // "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alfa%20romeo.jpg",
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/kick%20sauber",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/kick-sauber.png",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alfa-romeo.png.transform/4col/image.png",
    },
    {
      id: 199493,
      urlTeam:
        // "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alphatauri.jpg",
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/2018-redesign-assets/team%20logos/rb",
      urlCar:
        "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2024/rb.png",
      // "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alphatauri.png.transform/4col/image.png",
    },
  ]

  function generateUniqueRandomNumbers(min, max, count) {
    let numbers = new Set()

    while (numbers.size < count) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
      numbers.add(randomNumber)
    }

    return Array.from(numbers)
  }

  // Generar 10 números aleatorios únicos entre 1 y 100
  // let randomNumbers = generateUniqueRandomNumbers(1, 100, 10)

  // Generar 4 números aleatorios únicos entre 0 y 9
  let randomNumbers = generateUniqueRandomNumbers(0, 9, 4)
  console.log(randomNumbers)

  const filteredArray = imageTeams.filter((item, index) =>
    randomNumbers.includes(index)
  )
  console.log(filteredArray)

  let randomNumbersQuiz = generateUniqueRandomNumbers(0, 3, 1)
  console.log(randomNumbersQuiz, "del quiz")

  const inputHandler = (e) => {
    // Añadir el nuevo objeto al array existente sin mutar
    setAskedItem((prevAskedItem) => [...prevAskedItem, e])
  }
  console.log(askedItem)

  return (
    <div className="card-group-design">
      <div className="card-group-content">
        {filteredArray.map((element) => (
          <div key={element.id}>
            <img
              alt="pic"
              src={element.urlCar}
              className="car_pic"
              onClick={() => inputHandler(element)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardGroup
