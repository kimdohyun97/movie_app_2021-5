
function App() {
  return (
    <div>
        <h1>Hello</h1>
        <Food fav="kimchi" />
    </div>
  )
}

function Food(props) {
  console.log(props)
  return <h1>I like potato</h1>
}

export default App;
