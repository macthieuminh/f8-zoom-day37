import { HashRouter, Routes, Route } from "react-router"
import Home from "../../pages/Home"
import Profile from "../../pages/Profile"
import ModalDemo from "../../pages/ModalDemo"
import ScrollDemo from "../../pages/Home"
import PerformanceDemo from "../../pages/Home"
import FocusDemo from "../../pages/FocusDemo"
import HOCDemo from "../../pages/HOCDemo"
import RenderPropsDemo from "../../pages/RenderPropsDemo"
import CustomHooksDemo from "../../pages/RenderPropsDemo"

export default function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/modal-demo" element={<ModalDemo />} />
                <Route path="/scroll-demo" element={<ScrollDemo />} />
                <Route path="/performance-demo" element={<PerformanceDemo />} />
                <Route path="/focus-demo" element={<FocusDemo />} />
                <Route path="/hoc-demo" element={<HOCDemo />} />
                <Route path="/render-props-demo" element={<RenderPropsDemo />} />
                <Route path="/custom-hooks-demo" element={<CustomHooksDemo />} />
            </Routes>
        </HashRouter>
    )
}
