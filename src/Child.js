const Child = ({ pa, color, sendingColor }) => {
  const colorSet = () => {
    pa("blue");
  };
  return (
    <div>
      <h1>This is Child</h1>
      <button onClick={colorSet} style={{ backgroundColor: sendingColor }}>
        Click Child me
      </button>
    </div>
  );
};

export default Child;
