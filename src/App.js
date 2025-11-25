import "./data/app.css";
import Categories from './components/Categories';
import quizData from './data/quizData.json';
import { useState } from "react";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";




const App = () => {
  const [category,setCategory] = useState(null); //시작화면 js
  const [filterQuiz,setfilterQuiz] = useState([]); //퀴즈 js
  const [finish,setFinish] =useState(false); //끝나는 js
  const [score, setScore] = useState(0); //점수 js
  
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
  const handleScore = ()=>{
    setScore((prev)=>{return prev+20});
  }
  
  return (
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
  )
}

export default App