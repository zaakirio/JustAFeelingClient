import "../../styles/Home.scss";
import "../../styles/Button.css";
function Home() {
//add sign up button
//add login button
  return (
    <div>
    <div id = "outer">
      <h1 id = "inner"> Just A Feeling </h1>
      </div>
      <p id = "inner"> A letter to the self...</p>
      
      <div>
    <button class="custom-btn btn-5"><span>Sign Up</span></button>
  <button class="custom-btn btn-5"><span>Log In</span></button>
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
      <span class="text hold2-text">a</span>
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
