import React, {useCallback, useState} from 'react'

//Titleコンポーネント(子)
// const Title = () => {
//   console.log('Title component')
//   return (
//     <h2>useCallBackTest vol.1</h2>
//   )
// }

const Title = React.memo(function TitleContent () {
  console.log('Title component')
  return (
    <h2>useCallBackTest vol.1</h2>
  )
})

//Buttonコンポーネント(子)
// const Button = ({handleClick,value}) => {
//   console.log('Button child component', value)
//   return <button type="button" onClick={handleClick}>{value}</button>
// }

const Button = React.memo(function ButtonContent({handleClick,value}) {
  console.log('Button child component', value)
  return <button type="button" onClick={handleClick}>{value}</button>
})

//Countコンポーネント(子)
// const Count = ({text, countState}) => {
//   console.log('Count child component', text)
//   return <p>{text}:{countState}</p>
// }

const Count = React.memo(function CountContent({text, countState}) {
  console.log('Count child component', text)
  return <p>{text}:{countState}</p>
})

//Counterコンポーネント（親）
const Counter = () => {

  console.log('###Counter###')

  const [firstCountState, setFirstCountState] = useState(0)
  const [secondCountState, setSecondCountState] = useState(10)

  //+ 1 ボタンのstateセット用関数
  const incrementFirstCounter = useCallback(() => setFirstCountState(firstCountState + 1), [firstCountState])

  //+ 10 ボタンのstateセット用関数
  const incrementSecondCounter = useCallback(() => setSecondCountState(secondCountState + 10), [secondCountState])

  //子コンポーネントを呼び出す
  return (
    <>
      <Title/>
      <Count text="+ 1 ボタン" countState={firstCountState}/>
      <Count text="+ 10 ボタン" countState={secondCountState}/>
      <Button handleClick={incrementFirstCounter} value={'+1 ボタン'}/>
      <Button handleClick={incrementSecondCounter} value={'+10 ボタン'}/>
    </>
  )
}

export default Counter
