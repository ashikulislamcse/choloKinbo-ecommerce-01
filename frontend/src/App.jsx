import Banner from "./components/Banner"
import Container from "./components/container"
import Header from "./components/Header"
import Sale from "./components/Sale"
import Title from "./components/Title"

function App() {
  return (
     <main>
      <Banner/>
      <Container className='py-5 md:py-10'>
        <Sale/>
      </Container>
     </main>
  )
}

export default App
