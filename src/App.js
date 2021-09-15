
const foodLike = [
  {
    name: "chicken" ,
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg"
  },
  {
    name: "ham",
    image: "http://image.newdaily.co.kr/site/data/img/2017/07/10/2017071010070_0.jpg"
  }
]

// function renderFood(dish) {
//   return  (
//     <Food name={dish.name} picture={dish.image} />
//   )
// }

const renderFood = dish => <Food name={dish.name} picture={dish.image} />

function App() {
  return (
    <div>
      {
        foodLike.map(dish =>  (<Food name={dish.name} picture={dish.image} />))
      }
    </div>
  );
}

function Food({name, picture}) {
  return (
    <div>
    <h1>I like {name} </h1>
    <img src={picture} />
 </div>
  )
}

export default App;
