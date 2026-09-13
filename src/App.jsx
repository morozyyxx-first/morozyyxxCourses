import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header.jsx'
import Content from './Content.jsx'
import KindOfCourses from './KindOfCourses.jsx'
import ForWho from './ForWho.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/for-who" element={<ForWho/>}/>
        <Route path="/kind-of-courses" element={<KindOfCourses/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
