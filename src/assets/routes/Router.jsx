import { BrowserRouter , Routes , Route} from "react-router-dom";
import App from "../../App";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
// import Footer from "../../components/Footer";
// import About from "../../components/About";

function Myrooter () {

    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <App />}/>
                <Route path="/about" element={ <App />}/>
                <Route path="/contact" element={ <Contact />}/>
                <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default Myrooter