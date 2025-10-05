import { HashRouter, Routes, Route } from "react-router"
import Home from "../../pages/Home"
export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={Home} />
                <Route path="/modal-demo" element={Home} />
                <Route path="/scroll-demo" element={Home} />
            </Routes>
        </HashRouter>
    )
}
