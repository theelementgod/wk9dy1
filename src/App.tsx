import Header from "./Header"
import Operations from "./Operations"
import Solution from "./Solution"

const App = () => {
  const math = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponents']
  return (
    <>
      <Header/>
      <Operations math={math} />
      <Solution/>
      
    </>
  )
}
export default App