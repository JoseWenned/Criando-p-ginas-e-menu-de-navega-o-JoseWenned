import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ContactPage } from "../pages/ContactPage"
import { ProjectPage } from "../pages/ProjectPage"
import { TestimonyPage } from "../pages/TestimonyPage"

export const RouterMain = () => {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/project" element={<ProjectPage/>}/>
            <Route path="/testimony" element={<TestimonyPage/>}/>
        </Routes>
    )
}