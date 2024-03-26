import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface ErrorCount {
  errorCode: string;
  count: number;
}

interface BarChartProps {
  data: ErrorCount[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
      drawChart();
    }
  }, [data]);

  const drawChart = () => {
    const svg = d3.select(ref.current);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = parseInt(svg.style('width')) - margin.left - margin.right;
    const height = parseInt(svg.style('height')) - margin.top - margin.bottom;

    // Scala per l'asse X
    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(data.map(d => d.errorCode));

    // Scala per l'asse Y
    const y = d3.scaleLinear()
    .range([height, 0])
    // Assicurati che d.count sia sempre un numero. Se l'interfaccia garantisce questo, non è necessario ?? 0
    .domain([0, d3.max(data, d => d.count) ?? 0]);
  ;

    // Pulisce il SVG in caso di ridisegno
    svg.selectAll("*").remove();

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Aggiunta delle barre
    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', function(d) {
        // Calcola il valore di x qui. Assicurati che il valore ritornato non sia mai 'undefined'.
        // Per esempio, se usi una scala x basata su 'errorCode', potresti avere qualcosa del genere:
        const xValue = x(d.errorCode);
        return xValue !== undefined ? xValue : 0; // Fornisce un valore di fallback nel caso in cui xValue sia 'undefined'
      })
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.count));

    // Aggiunta dell'asse X
    g.append('g')
  .attr('transform', `translate(0,${height})`)
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("y", 0)
    .attr("x", 9)
    .attr("dy", ".35em")
    .attr("transform", "rotate(45)")
    .style("text-anchor", "start");

    // Aggiunta dell'asse Y
    g.append('g')
      .call(d3.axisLeft(y));
  };

  return <svg ref={ref} width={750} height={250} />;
};

export default BarChart;
