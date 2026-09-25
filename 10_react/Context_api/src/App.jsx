import Navbar  from './component/Navbar'
import './App.css'

const App = () => {

  return (
    <div className="app-shell">
      <Navbar/>
      <main className="page-content" id="home">
        <p className="eyebrow">React Context API</p>
        <h1>Shared data, without the prop drilling.</h1>
        <p className="intro">
          This example uses a context provider to make one value available to every component in the tree.
        </p>
      </main>
    </div>
  )
}

export default App