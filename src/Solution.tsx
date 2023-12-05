import setSelectedI from "./Operations"
import selectedI from "./Operations"
import i from "./Operations"

const Solution = () => {
  return (
    <>
      <input type="number" />
      <input type="number" />
        <button type="submit" name="submit" onSubmit={() => {
          setSelectedI(i) }} key{i} className={selectedI === i ? }>Submit</button>
    </>
  )
}
export default Solution