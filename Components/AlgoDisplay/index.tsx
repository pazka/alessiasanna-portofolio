import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    canvas {
        position : absolute;
        left : calc(${props => props.x}px + ${3}px);
        top : calc(${props => props.y}px + ${31}px);
        width : ${props => props.width}px;
        height : ${props => props.height}px;

        z-index : -10;
        ${process.env._DEBUG ? 'border : solid 1px red' : ''}
    }
`

class AlgoDisplay extends Component {
    drawSpeed
    canvasRef
    drawCycle
    x
    y
    width
    height

    constructor(props) {
        super(props);

        this.cities = props.cities;
               

        let minCity, maxCity;
        minCity = [...this.cities[0]];
        maxCity = [...this.cities[0]];
        
        //get input limits
        this.cities.forEach((city)=>{
            if(city[0] < minCity[0] ){
                minCity[0] = city[0]
            }
            
            if(city[0] > maxCity[0] ){
                maxCity[0] = city[0]
            }

            if(city[1] < minCity[1] ){
                minCity[1] = city[1]
            }
            
            if(city[1] > maxCity[1] ){
                maxCity[1] = city[1]
            }
        })

        this.x = minCity[0] +10
        this.y = minCity[1] +10
        this.width = maxCity[0] - minCity[0] 
        this.height = maxCity[1] - minCity[1] 

        //resize input
        this.cities = this.cities.map(c=>[
            c[0]-minCity[0],
            c[1]-minCity[1]
        ])

        //prepare references
        this.drawSpeed = 100;
        this.canvasRef = React.createRef();


        this.prim_init(this.cities)
    }

    componentDidMount = () => {
        this.executeAlgorithm()
    }

    render() {
        return (
            <Wrapper x={this.x} y={this.y} width = {this.width} height = {this.height}>
                <canvas width = {this.width} height = {this.height} id="algo-display" ref={this.canvasRef}>
                </canvas>
            </Wrapper>
        );
    }


    //#INIT
    notAddedEdge
    addedEdge 
    addedVertex 
    currentNeighbours 
    selectedMinimalEdge

    prim_init(all_vertex){
        this.notAddedEdge = []

        for (let i = 0; i < all_vertex.length; i++) {
            for (let j = i+1; j < all_vertex.length; j++) {
                this.notAddedEdge.push([i,j])
            }            
        }

        this.addedEdge = []
    
        this.currentNeighbours = []
        
        this.addedVertex = [Math.floor(Math.random()*(this.cities.length))] 
    }

    //### Process
    prim_new_neighbour(_this){
        
        _this.currentNeighbours = []

            _this.notAddedEdge.forEach(nedge=>{
                if(_this.addedVertex.includes(nedge[0]) && !_this.addedVertex.includes(nedge[1]) || _this.addedVertex.includes(nedge[1]) && !_this.addedVertex.includes(nedge[0])) {
                    _this.currentNeighbours.push(nedge)
                }
        })
    }

    prim_select_minimal_edge(_this){
        let eucli_dist = (p1,p2)=>{ return Math.sqrt((p1[0]-p2[0])*(p1[0]-p2[0])+(p1[1]-p2[1])*(p1[1]-p2[1])) }
        let dist = (e)=>{ return eucli_dist(_this.cities[e[0]],_this.cities[e[1]]) }

        _this.selectedMinimalEdge = _this.currentNeighbours[0];
        let miniDist = dist(_this.selectedMinimalEdge)

        _this.currentNeighbours.forEach(nei=>{
            if(dist(nei) < miniDist){
                _this.selectedMinimalEdge = nei;
                miniDist = dist(nei)
            }
        })


    }

    prim_add_edge_to_result(_this){

        _this.addedEdge.push([..._this.selectedMinimalEdge])

        _this.notAddedEdge = _this.notAddedEdge.filter((ne)=>{
            return !(_this.selectedMinimalEdge[1]==ne[1] && _this.selectedMinimalEdge[0] == ne[0])
        })

        if(_this.addedVertex.includes(_this.selectedMinimalEdge[0]))
            _this.addedVertex.push(_this.selectedMinimalEdge[1])
        else
            _this.addedVertex.push(_this.selectedMinimalEdge[0])
            
        _this.currentNeighbours = []
        _this.selectedMinimalEdge = null
    }

    executeAlgorithm(){
        
        let indexToExecute = 0
        this.prim_init(this.cities)
        let algorithmSteps = [this.prim_new_neighbour,this.prim_select_minimal_edge,this.prim_add_edge_to_result]

        this.drawCycle = setInterval(() => {
            if(!this.canvasRef.current){
                return;
            }
            
            if(this.addedVertex.length < this.cities.length){
                algorithmSteps[indexToExecute](this)
                indexToExecute = indexToExecute + 1 < algorithmSteps.length ?  indexToExecute + 1 : 0
                this.draw()
            }else{
                clearInterval(this.drawCycle)
            }
        }, this.drawSpeed)
    }

    draw(){
        let cnv = this.canvasRef.current.getContext('2d')
        
        cnv.fillStyle = "white";
        cnv.fillRect(0,0,this.width,this.height)

        cnv.save()
        cnv.lineWidth = 0.7;
        cnv.strokeStyle = "lightblue";
        cnv.setLineDash([4, 10]);

        this.notAddedEdge.forEach(edgeIndex=>{
            cnv.beginPath();
            cnv.moveTo( this.cities[edgeIndex[0]][0] , this.cities[edgeIndex[0]][1]);
            cnv.lineTo( this.cities[edgeIndex[1]][0] , this.cities[edgeIndex[1]][1]);
            cnv.stroke();
        })
        cnv.restore()

        cnv.lineWidth = 2;
        cnv.strokeStyle = "blue";
        this.addedEdge.forEach(edgeIndex=>{
            cnv.beginPath();
            cnv.moveTo( this.cities[edgeIndex[0]][0] , this.cities[edgeIndex[0]][1]);
            cnv.lineTo( this.cities[edgeIndex[1]][0] , this.cities[edgeIndex[1]][1]);
            cnv.stroke();
        })

        /*
        if(this.currentNeighbours){
            cnv.lineWidth = 1;
            cnv.strokeStyle = "lightgrey";
            this.currentNeighbours.forEach(edgeIndex=>{
                cnv.beginPath();
                cnv.moveTo( this.cities[edgeIndex[0]][0] , this.cities[edgeIndex[0]][1]);
                cnv.lineTo( this.cities[edgeIndex[1]][0] , this.cities[edgeIndex[1]][1]);
                cnv.stroke();
            })
        }*/

        if(this.selectedMinimalEdge){
            cnv.lineWidth = 1;
            cnv.strokeStyle = "orange";
            
            cnv.beginPath();
            cnv.moveTo( this.cities[this.selectedMinimalEdge[0]][0] , this.cities[this.selectedMinimalEdge[0]][1]);
            cnv.lineTo( this.cities[this.selectedMinimalEdge[1]][0] , this.cities[this.selectedMinimalEdge[1]][1]);
            cnv.stroke();
        }
    }
}

export default AlgoDisplay;

