import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";


function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-10">
      <h1 className="text-6xl text-purple-600 text-center my-20">Hot coffee in cold weather: {coffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
