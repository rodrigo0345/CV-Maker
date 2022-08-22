import '../styles/Form.css';
import HtmlToPdf from '../logic/HtmlToPdf';

export default function Form({changes, experience, education, skill, language, saveStates, object, reset})
{
    const numExperiences = experience[0];
    const addExp = experience[1];
    const subExp = experience[2];

    const numEducations = education[0];
    const addEdu = education[1];
    const subEdu = education[2];

    const numSkills = skill[0];
    const addSkill = skill[1];
    const subSkill = skill[2];

    const numLanguages = language[0];
    const addLanguage = language[1];
    const subLanguage = language[2];

    const experiences = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        const layout = [];

        for(let i = 0; i < numExperiences; i++)
        {
            const html = (
                <div id={`experience-${i}`} className={'experience'}>
                    <input type="text" name={`jobTitle-${i}`} placeholder="Job title" value={object[`jobTitle-${i}`]}/>
                    <input type="text" name={`jobCompany-${i}`} placeholder="Company" value={object[`jobCompany-${i}`]}/>
                    <input type="text" name={`jobCity-${i}`} placeholder="City"/>
                    <input type="date" name={`jobStart-${i}`} placeholder="Start date" max={`${day}-${month}-${year}`} value={object[`jobStart-${i}`]}/>
                    <input type="date" name={`jobEnd-${i}`} placeholder="End date" value={object[`jobEnd-${i}`]}/>
                    <textarea name={`jobDescription-${i}`} placeholder='Description' value={object[`jobDescription-${i}`]}/>

                    <button onClick={subExp} className="delete">Delete</button>
                </div>
            );
            layout.push(html);
        }
        return layout;
    } 

    const educations = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();

        const layout = [];

        for(let i = 0; i < numEducations; i++)
        {
            const html = (
                <div id={`education-${i}`} className={'education'}>
                    <input type="text" name={`eduDegree-${i}`} placeholder="Degree" value={object[`eduDegree-${i}`]}/>
                    <input type="text" name={`eduUniversity-${i}`} placeholder="University" value={object[`eduUniversity-${i}`]}/>
                    <input type="date" name={`eduStart-${i}`} placeholder="Start date" value={object[`eduStart-${i}`]} max={`${day}-${month}-${year}`}/>
                    <input type="date" name={`eduEnd-${i}`} placeholder="End date" value={object[`eduEnd-${i}`]}/>
                    <textarea name={`eduDescription-${i}`} placeholder='Description' value={object[`eduDescription-${i}`]} />

                    <button onClick={subEdu} className="delete">Delete</button>
                </div>
            );
            layout.push(html);
        }
        return layout;
    } 

    const skills = () => {
        const layout = [];

        for(let i = 0; i < numSkills; i++)
        {
            const html = (
                <div id={`skill-${i}`} className={'skill'}>
                    <input type="text" name={`skill-${i}`} placeholder="Skill" value={object[`skill-${i}`]}/>
                    <button onClick={subSkill} className="delete">Delete</button>
                </div>
            );
            layout.push(html);
        }
        return layout;
    }

    const languages = () => {
        const layout = [];

        for(let i = 0; i < numLanguages; i++)
        {
            const html = (
                <div id={`language-${i}`} className={'language'}>
                    <input type="text" name={`language-${i}`} placeholder="Language" value={object[`language-${i}`]}/>
                    <input type="text" name={`languageLevel-${i}`} placeholder="Level" value={object[`languageLevel-${i}`]}/>
                    <button onClick={subLanguage} className="delete">Delete</button>
                </div>
            );
            layout.push(html);
        }
        return layout;
    }


    return (
        <form 
            id="form" 
            onChange={changes}
        >
            <h2>Personal information</h2>
            <hr />

            <input type="text" name="name" placeholder="First and Last name" maxlength="30" value={object.name} required/>
            <input type="text" name="title" placeholder='Title' maxlength="30" value={object.title} required/>
            <input type="text" name="email" placeholder='Email' maxlength="30" value={object.email}/>
            <input type="text" name="phone" placeholder='Phone' value={object.phone}/>
            <input type="text" name="city" placeholder='City' value={object.city}/>
            <textarea name="description" placeholder='Description' value={object.description}/>

            <h2>Job experience/ Side projects</h2>
            <hr />
            {experiences()}
            <button className="add" type="none" onClick={addExp}>Add</button>

            <h2>Education</h2>
            <hr />
            {educations()}
            <button className="add" type="none" onClick={addEdu}>Add</button>

            <h2>Skills</h2>
            <hr />
            {skills()}
            <button className="add" type="none" onClick={addSkill}>Add</button>

            <h2>Languages</h2>
            <hr />
            {languages()}
            <button className="add" type="none" onClick={addLanguage}>Add</button>

            <button onClick={reset} id="reset">Reset</button>

            <button onClick={saveStates} id="save">Save</button>

            <button onClick={HtmlToPdf} id="pdf">Download Pdf</button>
        </form>
    )
}