import  { useSelector, useDispatch} from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react'

const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  const addValue = Number(incrementAmount) || null
  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => resetAll()}>Reset</button>
      <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} placeholder="Add Increment Amount" />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>incrementAmount</button>
      <p>{count}</p>
    </div>

  )
}

export default Counter