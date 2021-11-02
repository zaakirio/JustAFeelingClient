import "../../styles/Home.scss";
import "../../styles/Button.css";
import {useHistory} from "react-router-dom";

function Home() {



  const history = useHistory();



  return (
    
    <div>
      <div class="container">
      <button class="custom-btn btn-5 topright" onClick={()=>{history.push('/register')}} ><span>Sign Up</span></button>
        <button class="custom-btn btn-5 topleft" onClick={()=>{history.push('/login')}}><span>Login</span></button>
  </div>
  <div id = "outer">
      <h1 id = "inner"> Just A Feeling </h1>
    </div>

<div class="illustration"> 
  <div class="yogi-lady">
    <div class="breath">
      <div class="inhale"></div>
      <div class="exhale"></div>
      <div class="hold hold1"></div>
      <div class="hold hold2"></div>
      <span class="text inhale-text">just</span>
      <span class="text hold1-text">a</span>
      <span class="text exhale-text">feeling</span>
      <span class="text hold2-text"></span>
    </div>
    <div class="hair">
      <div class="face-up">      
        <div class="eyes"></div>
      </div>
      <div class="face body">
        <div class="nose"></div>
        <div class="lips"></div>
      </div>
      <div class="neck body"></div>
      <div class="tshirt"></div>
      <div class="decoltee body"></div>
    </div>
    <div class="arms body"></div>
    <div class="right-hand body">
      <div class="right-hand-in">
        <div class="finger finger-1"></div>
        <div class="finger finger-2"></div>
        <div class="finger finger-3"></div>
        <div class="finger finger-4"></div>
      </div>
    </div>
    <div class="left-hand body">
      <div class="left-hand-in">
        <div class="finger-l finger-l-1"></div>
        <div class="finger-l finger-l-2"></div>
        <div class="finger-l finger-l-3"></div>
        <div class="finger-l finger-l-4"></div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Home;
