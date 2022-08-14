import './Form.css';
import Experience from './Experience';
import Schools from './Schools'
import Projects from './Projects';

export default function Form({changeHandler, saveHandler, loadExample, generatePDF, 
                                experiences, schools, projects}){
    return (
        <aside className="form">

            <div className="form-header">
                <h3>Personal information</h3>
                <hr />
                <input type="text" className="fst-name--psl" onChange={changeHandler} placeholder="First name" />
                <input type="text" className="lst-name--psl" onChange={changeHandler} placeholder="Last name" />
                <input type="text" className="crr-pos--psl" onChange={changeHandler} placeholder="Position" />
                <input type="text" className="phn--psl" onChange={changeHandler} placeholder="Phone" />
                <input type="text" className="mail--psl" onChange={changeHandler} placeholder="Email" />
                <input type="text" className="site--psl" onChange={changeHandler} placeholder="Website" />
                <input type="text" className="city--psl" onChange={changeHandler} placeholder="City" />
                <textarea type="text" className="des--psl" onChange={changeHandler} placeholder="Description" maxLength="300"/>
            </div>

            <div className="experience">
                <div className="experiences">
                    <h3>Experience</h3>
                    <hr />
                    
                    <Experience times={experiences} changeHandler={changeHandler}/>
                </div>

                <div className="add">
                    <button className="add--exp" onClick={changeHandler}>Add</button>
                </div>
            </div>

            <div className="education">
                
                <div className="schools">
                    <h3>Education</h3>
                    <hr />
                    
                    <Schools times={schools} changeHandler={changeHandler}/>
                </div>

                <div className="add">
                    <button className="add--edu0" onClick={changeHandler}>Add</button>
                </div>

            </div>

            <div className="project">

                <div className="projects">
                    <h3>Projects</h3>
                    <hr />
                    
                    <Projects times={projects} changeHandler={changeHandler} />

                </div>
                <div className="add">
                    <button className="add--prj0" onClick={changeHandler}>Add</button>
                </div>

            </div>

            <hr />
            
            <div className="end">
                <div className="exportPDF">
                    <button onClick={generatePDF}>Export PDF</button>
                </div>
                <div className="save">
                    <button onClick={saveHandler}>Save</button>
                </div>
                <div className="load">
                    <button onClick={loadExample}>Generate example</button>
                </div>
            </div>

        </aside>
    )
}