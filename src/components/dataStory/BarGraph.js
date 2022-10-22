import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function BarGraph({ width, height, data, label }){
    const ref = useRef();
    var container = d3.select(ref.current),
            margin = {top: 30, right: 20, bottom: 30, left: 50},
            barPadding = .2,
            axisTicks = {qty: 5, outerSize: 0, dateFormat: '%m-%d'};

        var svg = container
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        
        container.selectAll('.model_name').remove();
        container.selectAll('text').remove();
        container.exit().remove();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
        
    }, []);

    useEffect(() => {
        draw();
    }, [data]);

    const draw = () => {
        data = data.map(i => {
        i.model_name = i.model_name;
            return i;
        });

        d3.selectAll(".tick").remove();

        var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding);
        var xScale1 = d3.scaleBand();
        var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

        var xAxis = d3.axisBottom(xScale0).tickSizeOuter(0);
        var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(0);

        xScale0.domain(data.map(d => d.model_name));
        xScale1.domain(['field1', 'field2']).range([0, xScale0.bandwidth()]);
        yScale.domain([0, d3.max(data, d => d.field1 > d.field2 ? d.field1 : d.field2)]);

        var model_name = svg.selectAll(".model_name")
            .data(data)
            .enter().append("g")
            .attr("class", "model_name")
            .attr("transform", d => `translate(${xScale0(d.model_name)},0)`);

        /* Add field1 bars */
        model_name.selectAll(".bar.field1")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar field1")
        .style("fill","#56A8CBFF")
        .transition().duration(300)
        .attr("x", d => xScale1('field1'))
        .attr("y", d => yScale(d.field1))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.field1)
        });
        
        /* Add field2 bars */
        model_name.selectAll(".bar.field2")
        .data(d => [d])
        .enter()
        .append("rect")
        .attr("class", "bar field2")
        .style("fill","#DA291CFF")
        .transition().duration(300)
        .attr("x", d => xScale1('field2'))
        .attr("y", d => yScale(d.field2))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => {
            return height - margin.top - margin.bottom - yScale(d.field2)
        });

        
        // Add the X Axis
        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
        .call(xAxis);

        // Add the Y Axis
        svg.append("g")
        .attr("class", "y axis")
        .call(yAxis); 

        // Add the Title
        svg.append("text")
        .attr("x", width/2)
        .attr("y", -15)
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .text("Harris County vs. Third Ward \n" + label);

        // Add the X Label
        // svg.append("text")
        // .attr("transform", "translate(" + (width/2) + " ," + (height-30) + ")")
        // .style("text-anchor", "middle")
        // .text("X Label");

        // Add the Y Label
        // svg.append("text")
        // .attr("transform", "rotate(-90)")
        // .attr("x", -(height/2))
        // .attr("y", -40)
        // .style("text-anchor", "middle")
        // .text("Y Label");

        // Add legend
        svg.append("circle").attr("cx", 470).attr("cy", 25).attr("r", 6).style("fill", "#56A8CBFF")
        svg.append("circle").attr("cx", 470).attr("cy", 50).attr("r", 6).style("fill", "#DA291CFF")
        svg.append("text").attr("x", 480).attr("y", 25).text("2015").style("font-size", "15px").attr("alignment-baseline","middle")
        svg.append("text").attr("x", 480).attr("y", 50).text("2020").style("font-size", "15px").attr("alignment-baseline","middle")
    };


    return (
        <div className="chart">
            <svg ref={ref}></svg>
        </div>
        
    )

}

export default BarGraph;