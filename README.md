# 김도현 201640105

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

