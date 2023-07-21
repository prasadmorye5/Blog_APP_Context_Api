import Header from "./components/Header"
import { ReactDOM } from "react"
import Blogs from "./components/Blogs"
import Pageination from "./components/Pageination"


export default function App() {
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pageination/>

    </div>
  )
}
