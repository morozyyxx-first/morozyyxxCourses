import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import KindOfCourses from './KindOfCourses.jsx'

createRoot(document.getElementById('kindofcourses')).render(
  <StrictMode>
    <KindOfCourses />
  </StrictMode>,
)
