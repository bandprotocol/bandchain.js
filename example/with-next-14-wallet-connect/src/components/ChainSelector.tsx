import React from "react";

const ChainSelector = ({ chainName, setChainName }) => {
  const handleChange = (event) => {
    setChainName(event.target.value);
  };

  return (
    <div className="mb-5">
      <label htmlFor="dropdown">Select Chain</label>
      <select
        id="dropdown"
        value={chainName}
        onChange={handleChange}
        className="ml-2 text-black"
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="localbandchain">Band</option>
        <option value="osmosistestnet">Osmosis</option>
      </select>
      {chainName && (
        <p style={{ marginTop: "10px" }}>
          You selected: <strong>{chainName}</strong>
        </p>
      )}
    </div>
  );
};

export default ChainSelector;
