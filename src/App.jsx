
import './App.css'
import { useState, useCallback } from 'react'
import { ChildArea } from './ChildArea'
function App() {
  // const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)

  // const onClickCountUp = () => {
  //   setCount(count + 1)
  // }
  const onChangeText = (e) => {
    setText(e.target.value)
  }
  const onClickOpen = () => {
    setOpen(!open)
  }
  const onClickClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <div className='App'>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>

  )
}

export default App
