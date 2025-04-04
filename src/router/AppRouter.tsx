import { Routes, Route, Navigate } from "react-router-dom"
import Index from "../pages/index/components/Index"
import Albums from "../pages/albums/components/Albums"
import Users from "../pages/users/components/Users"
import Photos from "../pages/photos/components/Photos"
import Comments from "../pages/comments/comments"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<Navigate to="/Index"/>} />
        <Route path="Index" element={<Index />} />
        <Route path="Users" element={<Users />} />
        <Route path="Albums" element={<Albums />} />
        <Route path="Photos" element={<Photos />} />
        <Route path="Comments" element={<Comments />} />
    </Routes>
  )
}

export default AppRouter