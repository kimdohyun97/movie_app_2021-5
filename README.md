# 김도현 201640105

## [ 10월 06일]

axios 설치<br>
터미널에 'npm install axios' 입력<br>

영화 API를 영화 앱에 호출하기
```jsx
import axios from "axios"

componnentDidMount() {
  axios.get('http://yts.mx/api/v2/list_moives.json')
}
```
axios 동작 확인<br>
브라우저 F12 > Network 탭열고 새로고침(Crtl+F5)<br>

getMovies()에 async 붙이고, axios.get()에 await붙이기<br>
- 시간이 필요하다는 것을 알리기 위해서는 async, await 키워드가 필요
- 자바스크립트에게 시간이 필요하다는것을 알리려면 async를 ()앞에 붙이고,
- 실제 시간이 필요한 대상인 axios.get()함수에는 await을 붙인다. 
```jsx
getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
    }
componnentDidMount() {
    this.getMovies()
    }
```
객체에 있는 movies 키에 조금더 똑똑하게 접근하기.<br>
- 구조 분해 할당
```jsx
getMovies = async () => {
    const {
        data: {
            data: {movies}
        }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json")
        // const movies 
     console.log(movies);
}
```

***

## [ 09월 29일 ]

Master branch를 main branch로 변경<br>
master를 사용하지 않게 된 이유는 'Black Lives Matter'운동에 발맞춰 주종관계를 뜻하는<br> 'maser', 'slave' 를 다른 단어로 대체하기 위해서이다.<br>
- main 으로 변경
```
git config --global init.defaultBranch main
``` 
상대경로 이미지 삽입 방법<br>
- public 폴더에 images 폴더를 생성<br> 
```
<img src="image/[이미지이름]"> 형태로 태그 작성
```
prop-types 설치<br>
```
npm install prop-types
```
state로 숫자 증감 기능 만들기
- props는 정적인 데이터만 다룰수 있다.
- state는 동적인 데이터를 다루기 위해 사용된다.
- state는 class형 컴포넌트에서 사용 <br>

state에 count값 추가<br>
```jsx

class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <h1> The number is: {this.state.count} </h1>
    )
  }
}
```
constructor() 함수 알아보기<br>
- 클래스 내에 constructor()(생성자)함수를 선언하고, console.log()함수를 이용해 문장을 출력한다.
- 이것은 어떤 문장이 먼저 실행되는지 비교해보기 위해서이다.<br>

생성자란 무엇인가<br>
- constructor()는 Component를 생성할때 state 값을 초기화하거나 메서드를 바인딩할때 사용한다.<br>
- 생성자 내에서는 setState를 사용하지 않고, this.state를 사용하여 state의 초기값을 할당한다.<br>
- 생성자 내에서는 외부API를 직접 호출할수 없다. 필요하다면 componentDidMount()를 사용한다.<br>
- 자바스크립트에서 super 부모클래스 생성자의 참조한다는 의미이다.<br>

componentDidMount()함수 , componentDidUpdate()함수 <br>
```jsx
class App extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }
    
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate...GoodBye');
    }
```
### 생명주기함수
![리액트 기초 개념](https://blogfiles.pstatic.net/MjAyMTEwMDFfNDcg/MDAxNjMzMDYzODg1MjU3.XwWd_q9e_SrYA1WMelPI5CchWDaEcD1SRzzXZQOlL2cg.zpNifQhAnV-tp2RSXj_WkbjAuTsp8bQsKf8sZe4T1F4g.PNG.alsl970/%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0%ED%95%A8%EC%88%98.PNG)<br>


***

학습 내용

## [ 09월 15일 ]

Props: 컴포넌트에서 컴포넌트로 전달하는 데이터를 말한다.<br>

[Window + . ] = 이모티콘 단축키<br>

Potato 컴포넌트 만들기

```jsx
function Potato(){
 return(
  <h1>I love potato</h1>
 )

 export default Potato
}
```
<br>

Potato 컴포넌트 사용<br>
-App 옆에 Potato 추가

```jsx
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( <App /> <Potato/>, document.getElementById('root'));
```
여러개의 props 사용하기

```jsx
<Food fav="kimchi" /> //3번 호출, 각자 출력
<Food fav="ramen" />
<Food fav="cookie" />
```
<br>
음식 데이터 만들기 <br>

```jsx
const foodILike = [
  {
    name: "chicken",
    image: "https://health.chosun.com/site/data/img_dir/2021/03/31/2021033102448_0.jpg"
  },
  {
    name: "pizza",
    image: "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg"
  }
]
```

음식 이미지 출력하기<br>
```jsx
<Food name={dish.name} picture={dish.image} />
```
<br>

이미지 출력을 위해 img tag 추가하기<br>
```jsx
function Food({name, picture}) { //picture 추가
    return (
        <div>
        <h2>I like {name} <h2/> 
        <img src={picture} /> 
        </div>
    ) 
}
```
<br>
Food 컴포넌트에 key props 추가하기<br>

```jsx
function App() {
  return (
    <div>
      {
      foodLike.map(dish => 
      (<Food key={dish.id} name={dish.name} picture={dish.image}/>)) 
      }     
    </div>
  )
}
```
<br>
img 엘리먼트에 alt 속성 추가하기<br>
- alt속성을 하나씩 넣을수 없기 때문에 {name}을 대입해준다. 

```jsx
<img src={picture} alt={name}/> // alt={name} 추가
```

***

## [ 09월 08일 ]

### -슈퍼 빠른 create-react-app
- 웹팩(Webpack)은 자바스크립트 앱을 위한 정적 모듈들을 하나로 묶어주는 번들러이다.<br/>
- 바벨(Bavel)은 최신 자바스크립트 문법을 사용할 수 있게 해주는 트랜스파일러이다.<br/>
- React로 개발하는 경우 웹팩이나, 바벨은 신경 쓰지 않아도 된다.<br/>
- create-react-app은 react를 위한 보일러 플레이트, 이 한줄을 입력해서 리액트 개발을 바로 시작할 수 있다.<br/>
- 보일러 플레이트(Boilerplate):최소한의 변경으로 여러 곳에서 재사용이 
가능한 코드를 <br>보일러 플레이트 코드라고 부른다.

### -개발환경 확인
- VSCode의 Terminal을 이용 <br/>
- git --version<br/>
- node -v<br/>
- npm -v<br/>
- npx -v


### -create-react-app으로 리액트 앱 만들기
- 명령은 > npx create-react-app movie_app_2021-5<br/>
- Ok to proceed? (y) 나오면 y입력<br/>
- 완료후 생성된 폴더오픈<br/>


### -package.json 파일 수정하기
- "test": "reate scripts test" 지우기<br/>
- "eject":"react scripts eject" 지우기<br/>

### -리액트 앱 실행하기
- Terminal에 npm start 입력하면 리액트 앱 실행<br/>
- App을 종료하려면 Ctrl + c 누른다.

### -깃허브에 리액트 앱 업로드
- 좌측하단 구름아이콘 클릭<br/>
- private , public 중에 public 선택

### -리액트앱 살펴보고 수정하기
- src 폴더 안 필요없는 파일 삭제하기.<br/>
- App.js, index.js 빼고 전부 삭제<br/>

### -index.js 파일 수정하기 
- import 전부 지우기<br>
- <React.StrictMode>   </React.StrictMode> 지우기
### -App.js 파일 수정하기 
- import 전부 지우기<br>
- div안에있는 라인 지우기

### -리액트 기초 개념
![리액트 기초 개념](https://blogfiles.pstatic.net/MjAyMTA5MTBfMTgy/MDAxNjMxMjc4NDU5ODc4.CdkEKQgzQyD3u_S_wFciIVaHFJzCBY_HVmN4enfGIMsg.OdmBybLq4AD94iwXfaxypBI4A1N1zJ0fPHJF7751ZUAg.PNG.alsl970/react.PNG)

