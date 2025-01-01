import { RouterProvider } from "react-router-dom"
import router from "./routers/router"
import Them from './Them'

function App() {
  return (
    <>
      <Them>
        <RouterProvider router={router}/>
      </Them>
    </>
  )
}

export default App
