import Navbar from './components/navbar'
import Cancionsita from './pages/cancionsita'
import Fotitos from './pages/fotitos'
import SobreNosotros from './pages/sobre-nosotros'

function App() {

  return (
    <div>
      <Navbar />
      <div>
        <SobreNosotros />
        <Fotitos />
        <Cancionsita/>
      </div>
    </div>
  )
}

export default App
