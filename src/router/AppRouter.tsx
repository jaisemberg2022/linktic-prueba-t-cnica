import { Routes, Route, Navigate } from "react-router-dom"
import IndexPage from "../pages/index/components/IndexPage"
import Albums from "../pages/albums/components/Albums"
import Users from "../pages/users/components/Users"
import Photos from "../pages/photos/components/Photos"
import Comments from "../pages/comments/comments"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to="/Index"/>} />
        <Route path="Index" element={<IndexPage />} />
        <Route path="Users" element={<Users />} />
        <Route path="Albums" element={<Albums />} />
        <Route path="Photos" element={<Photos />} />
        <Route path="Comments" element={<Comments />} />
    </Routes>
  )
}

export default AppRouter