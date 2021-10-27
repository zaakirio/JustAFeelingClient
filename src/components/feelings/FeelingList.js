import React from "react";

function FeelingList({ feelings }) {
  function renderFeelings() {
    return feelings.map((feeling, i) => {
      return <li key={i}>{feeling.name}</li>;
    });
  }

  return (
    <div>
      <ul>{renderFeelings()}</ul>
    </div>
  );
}

export default FeelingList;
//add auto expire- add a feeliung, but also let it self destruct in an hour..days..etc