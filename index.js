const canvas = d3.select(".canvas")
// console.log(canvas);
const svg = canvas.append("svg").attr("width", 600).attr("height", 600)

//appending shapes to svg

const group = svg.append('g')
.attr('transform', 'translate(50, 100)')

group.append("rect")
    .attr("fill", "orange")

group
  .append("rect")
  .attr("width", 200)
  .attr("height", 100)
  .attr("fill", "orange")
  .attr("x", 20)
  .attr("y", 20)

group
  .append("circle")
  .attr("r", 50)
  .attr("cx", 300)
  .attr("cy", 70)
  .attr("fill", "pink")

group.append('line')
.attr('x1', 370)
.attr('x2', 400)
.attr('y1', 200)
.attr('y2', 80)
.attr('stroke', 'red')

