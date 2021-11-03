import axios from "axios";
import React, { useEffect, useState } from "react";
import FeelingForm from "./FeelingForm";
import FeelingList from "./FeelingList";

function Feelings() {
  const [feelings, setFeelings] = useState([]);

  async function getFeelings() {
    const feelingsRes = await axios.get("http://localhost:5000/feeling/");

    setFeelings(feelingsRes.data);
  }

  useEffect(() => {
    getFeelings();
  }, []);

  return (
    <div>
      <FeelingForm getFeelings={getFeelings} />
      <FeelingList feelings={feelings} />
    </div>
  );
}

export default Feelings;
