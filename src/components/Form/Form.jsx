import './Form.css';

export default function Form({changeHandler, saveHandler, loadExample, generatePDF, ...props}){
    return (
        <aside className="form">

            <div className="form-header">
                <h3>Personal information</h3>
                <input type="text" onChange={changeHandler} placeholder="First name" />
                <input type="text" onChange={changeHandler} placeholder="Last name" />
                <input type="text" onChange={changeHandler} placeholder="Position" />
                <input type="text" onChange={changeHandler} placeholder="Phone" />
                <input type="text" onChange={changeHandler} placeholder="Email" />
                <input type="text" onChange={changeHandler} placeholder="Website" />
                <input type="text" onChange={changeHandler} placeholder="City" />
                <textarea type="text" onChange={changeHandler} placeholder="Description" maxlength="300"/>
            </div>

            <div className="experience">
                <div className="experiences">
                    <h3>Experience</h3>
                    <input type="text" onChange={changeHandler} placeholder="Company" />
                    <input type="text" onChange={changeHandler} placeholder="Position" />
                    <span className="start-pos">
                        <p>Date of start</p>
                        <input type="date" onChange={changeHandler} placeholder="Date of start" />
                    </span>
                    <span className="end-pos">
                        <p>Date of end</p>
                        <input type="date" onChange={changeHandler} placeholder="Date of end" />
                    </span>
                    <input type="text" onChange={changeHandler} placeholder="Description" />
                    <div className="delete">
                        <button onClick={changeHandler}>Delete</button>
                    </div>
                </div>

                <div className="add">
                    <button onClick={changeHandler}>Add</button>
                </div>
            </div>

            <div className="education">
                
                <div className="schools">
                    <h3>Education</h3>
                    <input type="text" onChange={changeHandler} placeholder="School" />
                    <input type="text" onChange={changeHandler} placeholder="Degree" />
                    <input type="text" onChange={changeHandler} placeholder="Field of study" />
                    <input type="text" onChange={changeHandler} placeholder="Grade" />
                    <div className="delete">
                        <button onClick={changeHandler}>Delete</button>
                    </div>
                </div>

                <div className="add">
                    <button onClick={changeHandler}>Add</button>
                </div>

            </div>

            <div className="project">

                <div className="projects">
                    <h3>Projects</h3>
                    <input type="text" onChange={changeHandler} placeholder="Title" />
                    <input type="text" onChange={changeHandler} placeholder="Description" />
                    <input type="text" onChange={changeHandler} placeholder="Link" />

                    <div className="delete">
                        <button onClick={changeHandler}>Delete</button>
                    </div>
                </div>
                <div className="add">
                    <button onClick={changeHandler}>Add</button>
                </div>

            </div>

            <div className="exportPDF">
                <button onClick={generatePDF}>Export PDF</button>
            </div>

            <div className="save">
                <button onClick={saveHandler}>Save</button>
            </div>

            <div className="load">
                <button onClick={loadExample}>Generate example</button>
            </div>

        </aside>
    )
}