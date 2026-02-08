import Navbar from "./components/navbar";
import Cancionsita from "./pages/cancionsita";
import Fotitos from "./pages/fotitos";
import SanValentin from "./pages/san-valentin";
import SobreNosotros from "./pages/sobre-nosotros";

function App() {
  const hoy = new Date();

  const anioActual = hoy.getFullYear();
  const fechaLimite = new Date(anioActual, 1, 13, 23, 59, 59);

  const mostrarSanValentin = hoy <= fechaLimite;

  return (
    <div>
      {!mostrarSanValentin ? (
        <>
          <Navbar />
          <div>
            <SobreNosotros />
            <Fotitos />
            <Cancionsita />
          </div>
        </>
      ) : (
        <SanValentin />
      )}
    </div>
  );
}

export default App;
