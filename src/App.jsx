import react from "react";
import { Card } from "./Components/Card";
import { Data } from "./Components/Data";

function App() {
  console.log(Data);

  return (
    <>
      <div>

        {
           Data ? Data.map((e, i) => {
            return (
              <Card image={e.image} title={e.title} id={e.id} price={e.price} description={e.description} category={e.category} />
            )
          }): <h1>Loading.....</h1>
        }
      </div>
    </>
  )
}

export default App
