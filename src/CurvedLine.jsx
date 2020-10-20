import { axisBottom, axisRight, curveCardinal, line, scaleLinear, select } from "d3";
import React, { useEffect, useRef, useState } from "react";

const CurvedLine = () => {
      const [lineData, setLineData] = useState([1, 5, 34, 22, 50, 100, 70, 30]);
      const lineRef = useRef();

      useEffect(() => {
            const svgLine = select(lineRef.current); // d3.select("svg")

            const xScale = scaleLinear()
                  .domain([0, lineData.length - 1])
                  .range([0, 300]);

            const yScale = scaleLinear().domain([0, 100]).range([150, 0]);

            const xAxis = axisBottom(xScale)
                  .ticks(lineData.length)
                  .tickFormat((index) => index + 1);

            svgLine.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
            const yAxis = axisRight(yScale).ticks(5);
            svgLine.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

            const myLine = line()
                  // .x((value, index) => index * 50)
                  // .y((value) => 150 - value)
                  .x((value, index) => xScale(index))
                  .y(yScale)
                  .curve(curveCardinal); // curveCardinal : 점과 점 곡선으로 부드럽게 처리됨

            svgLine
                  // .selectAll("path") // path 태그 선택해서
                  .selectAll(".line")
                  .data([lineData]) // 데이터 바인딩
                  .join("path") // enter, update, exit 통합 관리
                  .attr("class", "line")
                  .attr("d", (value) => myLine(value)) // path 태그의 속성 d(좌표값) -> 콜백함수로 line() 호출
                  .attr("fill", "none") // 채우기 없음
                  .attr("stroke", "blue"); // 선색상
      }, [lineData]);

      const addData = () => setLineData(lineData.map((d) => d + 10));
      const subsData = () => setLineData(lineData.map((d) => d - 10));

      return (
            <div>
                  <svg ref={lineRef} style={{overflow:"visible"}}>
                        <g className="x-axis"></g>
                        <g className="y-axis"></g>
                  </svg>
                  <button onClick={addData}>add 10 to data</button>
                  <button onClick={subsData}>subtract 10 to data</button>
            </div>
      );
};

export default CurvedLine;
