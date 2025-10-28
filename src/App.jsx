import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
function App() {

  return (
    <>
   {/* <h1>Hello from app</h1>*/}
    
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
           <Routes>
            <Route path="/" element={<Home/>}/>
           <Route path="/profile/:id" element={<h1>Profile Page</h1>}/>
           <Route path="/movies" element={<h1>Movies Page</h1>}/>
           </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
