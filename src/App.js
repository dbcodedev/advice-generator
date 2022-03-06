import {useState, useEffect} from "react"
import axios from "axios"
import Advice from "./Advice"
import Footer from "./Footer"

function App() {

  const [advice, setAdvice] = useState(null)
  const [askAdvice, setAskAdvice] = useState(false)

  const API = "https://api.adviceslip.com/advice"

  useEffect(() => {
    const getData = async () => {
      const id = Math.floor(Math.random() * 200)
      // call the API providing an id otherwise the same advice is returned
      const response = await axios.get(`${API}/${id}`)
        .catch(error => console.log(error))
      const data = await response.data
      if (data.message) {
        // if the advice with this id doesn't exist, ask for another one
        getData()
      } else setAdvice(data.slip)
    }
    getData()
  }, [askAdvice])

  function getAdvice() {
    setAskAdvice(askAdvice => !askAdvice)
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          {advice && <Advice advice={advice} />}
          <div className="separator"></div>
          <div className="button" onClick={getAdvice}></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
