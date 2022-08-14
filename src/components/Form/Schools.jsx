
export default function Schools({times, changeHandler})
{
    const html = (i) => { return (<div>
        <input type="text" className={`scl--edu${i}`} onChange={changeHandler} placeholder="School" />
        <input type="text" className={`degr--edu${i}`} onChange={changeHandler} placeholder="Degree" />
        <input type="text" className={`fos--edu${i}`} onChange={changeHandler} placeholder="Field of study" />
        <input type="text" className={`grde--edu${i}`} onChange={changeHandler} placeholder="Grade" />
        <div className="delete">
            <button className={`del--edu${i}`} onClick={changeHandler}>Delete</button>
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