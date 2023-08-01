const DotGrid = (props)=>{
    const rows = props.length
    const columns = props.length
    const renderDots = () => {
        const dots = [];
        for (let row = 0; row < rows; row++) {
          const rowDots = [];
          for (let col = 0; col < columns; col++) {
            rowDots.push(<div key={`${row}-${col}`} className="dot"></div>);
          }
          dots.push(<div key={row} className="row">{rowDots}</div>);
        }
        return dots;
      };
      return <div className={`google-icon ${rows===3 ? "gridofsize3":"gridofsize4"}`}>{renderDots()}</div>;
}

export default DotGrid