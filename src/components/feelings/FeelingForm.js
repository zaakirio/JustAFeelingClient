import axios from "axios";
import React, { useState } from "react";
import "../../styles/Login.css";
import "../../styles/FeelingForm.css";

function FeelingForm({ getFeelings }) {
  const [feelingName, setFeeling] = useState("");


  async function saveFeeling(e) {
    e.preventDefault();

    try {
      const feelingData = {
        //camelCase text for event handler input
        feeling: feelingName,
      };

      await axios.post("http://localhost:5000/feeling/", feelingData);

     getFeelings();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form class="login" onSubmit={saveFeeling}>
        <input
          type="text"
          placeholder="Feeling name"
          onChange={(e) => {
            setFeeling(e.target.value);
          }}
          value={feelingName}
          minLength="50" 
          maxLength="500"
        />
        <button type="submit">Save new feeling</button>
      </form>
    </div>
  );
}

export default FeelingForm;
