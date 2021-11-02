import axios from "axios";
import React, { useState } from "react";
import "../../styles/Login.css";
import "../../styles/FeelingForm.css";

function FeelingForm({ getFeelings }) {
  const [feelingName, setFeelingName] = useState("");
  const [toTheVoid, setToTheVoid] = useState("");


  async function saveFeeling(e) {
    e.preventDefault();

    try {
      const feelingData = {
        //camelCase text for event handler input
        name: feelingName, tothevoid:toTheVoid
      };
      await axios.post("http://localhost:5000/feelings/", feelingData);

      getFeelings();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>I've got a feeling...</h1>
      <form class="login" onSubmit={saveFeeling}>
        <input
          type="text"
          placeholder="Feeling name"
          onChange={(e) => {
            setFeelingName(e.target.value);
          }}
          value={feelingName}
        />
        <button type="submit">Save new feeling</button>
        <div class="tooltip">
  <input title="The void is a realm for feelings to be seen by all! This option anonamizes your post and allows it to be seen by others" 
        type="checkbox" 
          id="tothevoid" 
          name="ToTheVoid"
          onChange={(e)=>{
            setToTheVoid(e.target.value)
          }}
          text="test"/>
  <label for="tothevoid">To the void!</label>

</div>
      </form>
    </div>
  );
}

export default FeelingForm;
