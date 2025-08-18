
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import New from './pages/New'
import { getEmotionImage } from './util/getEmotionImage'
import Header from './components/Header'
function App() {



  return (
    <div>
      <Header 
      title="header title"
      leftChild="left child"
      rightChild="right child"
      />
      <div>
        <img src={getEmotionImage(1)} alt="image" />
        <img src={getEmotionImage(2)} alt="image" />
        <img src={getEmotionImage(3)} alt="image" />
        <img src={getEmotionImage(4)} alt="image" />
        <img src={getEmotionImage(5)} alt="image" />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App