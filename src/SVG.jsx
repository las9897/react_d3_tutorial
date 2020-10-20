import React, { useEffect, useRef, useState } from "react";
import { select } from "d3";

const SVG = () => {
      const svgRef = useRef();
      const [data, setData] = useState([5, 20, 25, 30, 40]);

      useEffect(() => {
            console.log(data);
            const svg = select(svgRef.current);
            svg.selectAll("circle")
                  .data(data)
                  .join(
                        (enter) => enter.append("circle"),
                        (update) => update.attr("class", "updated"),
                        (exit) => exit.remove(),
                  )
                  .attr("r", (value) => value)
                  .attr("cx", (value) => value * 2)
                  .attr("cy", (value) => value * 2)
                  .attr("storke", "red");
      }, [data]);

      const increaseData = () => setData(data.map((value) => value + 5));

      const decreaseData = () => setData(data.map((value) => value - 5));

      return (
            <div>
                  <svg ref={svgRef}>
                        <circle />
                  </svg>
                  <button onClick={increaseData}>+5</button>
                  <button onClick={decreaseData}>-5</button>
            </div>
      );
};

export default SVG;
