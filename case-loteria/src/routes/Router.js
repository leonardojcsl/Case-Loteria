import { BrowserRouter, Route, Routes } from "react-router-dom"
import DiaDeSorte from "../pages/DiaDeSorte"
import MegaSena from "../pages/MegaSena"
import LotoFacil from "../pages/LotoFacil"
import LotoMania from "../pages/LotoMania"
import Quina from "../pages/Quina"
import TimeMania from "../pages/TimeMania"
import Header from "../components/Header"
import SelectLotteries from "../components/SelectLotteries"


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <SelectLotteries/>
            <Routes>
                <Route exact path="/" element={<MegaSena />} />
                <Route exact path="/quina/:id" element={<Quina />} />
                <Route exact path="/lotofacil" element={<LotoFacil />} />
                <Route exact path="/lotomania" element={<LotoMania />} />
                <Route exact path="/timemania" element={<TimeMania />} />
                <Route exact path="/diadesorte" element={<DiaDeSorte />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router