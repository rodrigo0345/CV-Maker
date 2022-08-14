export default function Experience({times, changeHandler})
{
    const html = (i) => { return (<div>
            <input type="text" className={`cmpny--exp${i}`} onChange={changeHandler} placeholder="Company" />
            <input type="text" className={`pos--exp${i}`}  onChange={changeHandler} placeholder="Position" />
            
            <div className="date">
                <span className="start-pos">
                    <p>Date of start</p>
                    <input className={`b-date--exp${i}`}   type="date" onChange={changeHandler} placeholder="Date of start" />
                </span>
                <span className="end-pos">
                    <p>Date of end</p>
                    <input className={`e-date--exp${i}`}   type="date" onChange={changeHandler} placeholder="Date of end" />
                </span>
            </div>
            <textarea type="text" className={`des--exp${i}`}  maxLength="300" onChange={changeHandler} placeholder="Description" />
            <div className="delete">
                <button className={`del--exp${i}`} onClick={changeHandler}>Delete</button>
            </div>
        </div>)}

    const arr = new Array();

    function multiply()
    {
        for(let i = 0; i < times; i++)
        {
            arr.push(html(i));
        }

        return arr;
    }

    return (
        multiply() 
    )
}