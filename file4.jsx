import React, { Component } from 'react';

import "./App.css"

class MyClass4 extends React.Component {

    Arr=[]
    state = {
        Final_score : 'None'
    }
    fun1 = (e)=>
    {
        //alert(e.target.id)
        let D_Click = document.getElementById(e.target.id)
        let D_25 = document.getElementById('25')

        let l25 = D_25.style.left
        let t25 = D_25.style.top

        if(
            (l25 == D_Click.style.left && (parseInt(t25) == parseInt(D_Click.style.top) + 100 || parseInt(t25) == parseInt(D_Click.style.top) - 100  ))

                ||

            (t25 == D_Click.style.top && (parseInt(l25) == parseInt(D_Click.style.left) + 100 || parseInt(l25) == parseInt(D_Click.style.left) - 100  ))
            )
        {
        D_25.style.left = D_Click.style.left
        D_25.style.top = D_Click.style.top

        
        D_Click.style.left = l25
        D_Click.style.top = t25
        }
        let score = 0
        let myID = 1
        for (let t = 1 ; t <= 500 ; t+=100)
        {
            for (let l = 1 ; l <= 500 ; l+=100)
            {
                let tep = document.getElementById(myID)
                if(parseInt(tep.style.left) == l && parseInt(tep.style.top) == t)
                    score++
                myID++
            }
            if (score == 25)
            
                this.setState({Final_score: 'You Win'})
            
        }
    
 
    }

    swap = ()=>
    {
        for (let i = 1 ; i <=25 ; i++)
        {

            let r1 = Math.round(Math.random() * 24) + 1
            let r2 = Math.round(Math.random() * 24) + 1

            let D_Click = document.getElementById(r1)
            let D_25 = document.getElementById(r2)
    
            let l25 = D_25.style.left
            let t25 = D_25.style.top
    
        
            
            D_25.style.left = D_Click.style.left
            D_25.style.top = D_Click.style.top
    
            
            D_Click.style.left = l25
            D_Click.style.top = t25
            
        }
    } 
    componentWillMount()
    {
        let val = 1
        for(let y = 1 ; y <= 500 ; y+=100)
        {
            for(let x = 1 ; x <=500 ; x+=100)
            {
                this.Arr.push (

                    <div style={{

                        border: '2px solid black',
                        width: '90px',
                        height:'90px',
                        position:'absolute',
                        left: x+'px',
                        top: y+'px',
                        borderRadius:'10px',
                        background:'rgb(100,250,50)',
                        fontSize:'50px',
                        display:'flex',
                        justifyContent:'center',
                        alignContent:'center',
                        alignItems:'center'
                    }}
                    
                    id = {val}
                    onClick = {this.fun1}
                    
                    >
                        { (val == 25) ? '' : val++ }

                    </div>
                )
            }
        }
    }
    render() { 
        return  <div>
            <div style = {{background: 'rgb(200,250,50)', display:'flex', justifyContent:'center'}}><h1>Creative</h1></div>
            <div style = {{background:'silver', display:'flex', justifyContent:'center'}}><h1>Puzzle Game</h1></div>
            <div style = {{border:'1px solid green', position:'relative', height:'600px'}}>
                {this.Arr}
            
                <button style = {{position: 'absolute', left:'650px', top:'20px'}} onClick = {this.swap}> Start Game</button>
            </div>
        
            <div style = {{background:'silver', display:'flex', justifyContent:'center'}}><h1>Score: {this.state.Final_score}</h1></div>
            
            </div>;


        
    }
}
 
export default MyClass4;