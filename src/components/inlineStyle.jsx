export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px gray",
    borderRadius: 8,
    padding: 7,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#1e1e1f"
  };
  const buttonStyle = {
    backgroundColor: "#05d9fa",
    border: "none",
    padding: 8,
    borderRadius: 2
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}> Inline Style </p>
      <button style={buttonStyle}> Fight </button>
    </div>
  );
};
