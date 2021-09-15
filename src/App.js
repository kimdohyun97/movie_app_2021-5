
const foodLike = [
  {
    id: 1,
    name: "chicken" ,
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg"
  },
  {
    id: 2,
    name: "ham",
    image: "http://image.newdaily.co.kr/site/data/img/2017/07/10/2017071010070_0.jpg"
  }
]


function App() {
  return (
    <div>
      {
        foodLike.map(dish =>  (<Food key={dish.id} name={dish.name} picture={dish.image} />))
      }
    </div>
  );
}

function Food({name, picture}) {
  return (
    <div>
    <h1>I like {name} </h1>
    <img src={picture} alt={name}/>
 </div>
  )
}

export default App;
