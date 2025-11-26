import "./data/app.css";
import Categories from './components/Categories';
import quizData from './data/quizData.json';
import { useState } from "react";
import { useEffect } from "react";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";


const App = () => {
  const [category,setCategory] = useState(null); //시작화면 js
  const [filterQuiz,setfilterQuiz] = useState([]); //퀴즈 js
  const [finish,setFinish] =useState(false); //끝나는 js
  const [score, setScore] = useState(0); //점수 js
  const imgMap = {
  "귀멸의칼날": "guimyeol",
  "스파이패밀리": "spyfamily",
  "주술회전": "jujutsu",
  "체인소맨": "chainsawman",
};

 // 사운드 기능
  useEffect(() => {
  const video = document.getElementById("bg-video");
  const button = document.getElementById("sound-btn");

  const toggleSound = () => {
    if (video.muted) {
      // 소리 켜기
      video.muted = false;
      video.volume = 1;
      button.innerHTML = "<p>🔊 사운드 OFF</p>";
    } else {
      // 소리 끄기
      video.muted = true;
      button.innerHTML = "<p>🔇 사운드 ON</p>";
    }
  };

  button.addEventListener("click", toggleSound);
  return () => button.removeEventListener("click", toggleSound);
}, []);
// 사운드 종료

//선택한 카테고리 
  const onSelectCategory = ( select )=>{
    setCategory(select);
    //quizData에서 선택한 카테고리의 문제만 새로 만듦.
    const quizes = quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
    setfilterQuiz(quizes);
  }
  //restart를 하면 다시 처음 화면으로
  const handleReStart = () => {
  setCategory(null);
  setFinish(false);
  setScore(0);
};
  //점수 
  const handleScore = ()=>{
    setScore((prev)=>{return prev+20});
  }
  //background 관리
  return (
    <div className="backGround"> 
      <video
      id="bg-video"
      className="bg-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source 
    src={`${process.env.PUBLIC_URL}/images/chainsawvideo.mp4`}
    type="video/mp4"
      />
    </video> 
        <div className="reze"></div> 
        <div className="power"></div>
      <div id='app'>
        <h1>애니 덕력 고사</h1>
        <p>~이 세계에서 오타쿠가 되는 법!~</p>
        { !category && 
        <Categories 
        Categories={quizData.categories}
        onSelect={onSelectCategory}
        />}
        {category && !finish &&
        <QuizPage 
        quizes={filterQuiz}
        onFinish={setFinish}
        onScore={handleScore}
        score={score}
        category={category}
        imgMap={imgMap}
        />
        }
        {category && !finish && (
          <p className="score">오타쿠 점수 : {score} 점</p>
          )}
        {finish && 
        <Results 
        onReStart={handleReStart}
        score={score}
        />
        }
        </div>
        <button id="sound-btn" className="sound-btn">
          <p>🔊 사운드 ON</p>
        </button>
    </div>
  )
}

export default App