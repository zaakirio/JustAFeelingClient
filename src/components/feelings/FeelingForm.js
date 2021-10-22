import axios from "axios";
import React, { useState } from "react";

function FeelingForm({ getFeelings }) {
  const [feelingName, setFeelingName] = useState("");

  async function saveFeeling(e) {
    e.preventDefault();

    try {
      const feelingData = {
        name: feelingName,
      };
      await axios.post("http://localhost:5000/feeling/", feelingData);

      getFeelings();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={saveFeeling}>
        <input
          type="text"
          placeholder="Feeling name"
          onChange={(e) => {
            setFeelingName(e.target.value);
          }}
          value={feelingName}
        />
        <button type="submit">Save new feeling</button>
      </form>
    </div>
  );
}

export default FeelingForm;
