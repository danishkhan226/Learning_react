import react from 'react'
import './index.css'

function inputchanging(val){
    console.log(`${val} type by user`);
}

function ondoubleclick(){
    console.log('button is being clicked two times');
}

const App = () => {
    return(
        <div>
          <input type="text" placeholder='enter'  onChange={(elem)=>{
             inputchanging(elem.target.value);  
        }} />
        <button onClick={()=>{
            console.log("button has been clicked")
        }} onDoubleClick={ondoubleclick}>click here</button>

        <div className='box' onMouseMove={(elem)=>{
            console.log(elem.clientX);
        }}></div>
        <div onWheel={(elem) =>{
             if(elem.deltaY>0){
                console.log('scrolling upward');
             } else{
                console.log('scrolling downward');    
             }
        }}> 
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
        </div>
        </div>
    )
}

export default App