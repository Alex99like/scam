import { Chart } from './view/Chart/Chart'
import { Main } from './view/Main.tsx/Main'
import { ParticlesView } from './view/Particles'
import { Reviews } from './view/Reviews/Reviews'

function App() {

  return (
    <main>
      <Main />
      <Chart />
      <Reviews />
      <ParticlesView />
    </main>
  )
}

export default App
