import React from 'react'
import './style.css'

const App2 = () => {
    const getdata =()=>
    {
        const itemvalues=localStorage.getItem("mylist")
        if(itemvalues)
            return JSON.parse(itemvalues)
        else
            return []
    }
    const [state, setstate] = React.useState("");
    const [val,newValue]=React.useState(getdata);

    const adding=()=>
    {
        if(!state)
            alert("Please type some data")
        else{
            const newitems={
                id:new Date().getTime().toString(),
                name:state
            }
            newValue([...val,newitems])
            setstate("")
        }
    }
    const deleting =(id)=>
    {
        const updtaeditems=val.filter((curElem)=>{
            return curElem.id!==id
        })
        newValue(updtaeditems)
    }
    const edit =(id)=>
    {
        const updtaeditem=val.filter((curElem)=>{
            if(curElem.id===id)
                setstate(curElem.name)
            return curElem.id!==id
        })
        newValue(updtaeditem)

    }
    const remove=()=>
    {
        return newValue([])
    }
    React.useEffect(() => {
        localStorage.setItem("mylist",JSON.stringify(val))
    }, [val])
    return (
        <>
            <div className="center">
            <center>
                <img src="./images/check-list.png" height="50" alt="logo"widht="50"></img>
                <p className="para">Add your list here😉</p>
                <input type="text" placeholder="✍ Type Here..." className="box" value={state} onChange={(event)=>setstate(event.target.value)}></input>
                <input type="image" src="./images/plus.png" height="20" widht="25" className="image" onClick={adding} alt="Add"></input>
                <br></br>
                <div>
                    {val.map((curElem)=>{
                        return(
                            <div key={curElem.id}>
                            <h3 className="display">{curElem.name}</h3> 
                            <input type="image" src="./images/editing.png" height="20" widht="25" className="image" alt="edit"onClick={()=>edit(curElem.id)}></input>
                            <input type="image" src="./images/delete.png" height="20" widht="25" className="image" alt="deletelogo" onClick={()=>deleting(curElem.id)}></input>
                            </div>
                        )
                    })}
                    
                </div>
                <button className="button" data-sm-link-text="Remove All" onClick={()=>remove()}>Remove All</button>
            </center>
            </div>
        </>
    )
}

export default App2
