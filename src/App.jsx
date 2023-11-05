import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profil from "./pages/Profil/Profil";
import Error from "./pages/ErrorPage/ErrorPage";

function App() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/profil/user/:id" element={<Profil />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
