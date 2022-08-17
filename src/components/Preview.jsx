import '../styles/Preview.css';

export default function Preview({object})
{
    console.log(object)
    return (
        <div className="preview" id="preview">
            <header>
                <h1>{object.name}</h1>
            </header>
        </div>
    )
}