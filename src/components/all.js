import React from "react";

const All = ({ all, index, deleteall }) => {
  return (
    <>
      <div className="list">
        <h3>{all}</h3>{" "}
        <button className="btn-delete" onClick={() => deleteall(index)}>
          x
        </button>
      </div>
    </>
  );
};

export default All;
