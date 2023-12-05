import Header from "./Header"
import Operations from "./Operations"

const App = () => {
  const math = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponents']
  return (
    <>
      <Header/>
      <Operations math={math} />
     
      
    </>
  )
}
export default App