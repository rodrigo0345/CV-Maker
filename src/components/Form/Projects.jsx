
export default function Projects({times, changeHandler})
{
    const html = (i) => { return (<div>
        <input type="text" className={`ttl--prj${i}`} onChange={changeHandler} placeholder="Title" />
        <input type="text" className={`des--prj${i}`} onChange={changeHandler} placeholder="Description" />
        <input type="text" className={`link--prj${i}`} onChange={changeHandler} placeholder="Link" />

        <div className="delete">
            <button className={`del--prj${i}`} onClick={changeHandler}>Delete</button>
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