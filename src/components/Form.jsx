import '../styles/Form.css';

export default function Form({changes, experience, education})
{
    const numExperiences = experience[0];
    const addExp = experience[1];
    const subExp = experience[2];

    const numEducations = education[0];
    const addEdu = education[1];
    const subEdu = education[2];

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
                    <input type="text" name={`jobTitle-${i}`} placeholder="Job title"/>
                    <input type="text" name={`jobCompany-${i}`} placeholder="Company"/>
                    <input type="text" name={`jobCity-${i}`} placeholder="City"/>
                    <input type="date" name={`jobStart-${i}`} placeholder="Start date" max={`${year}-${month}-${date}`}/>
                    <input type="date" name={`jobEnd-${i}`} placeholder="End date" max={`${date}-${month}-${year}`}/>

                    <button onClick={subExp}>Delete</button>
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
                    <input type="text" name={`eduDegree-${i}`} placeholder="Degree"/>
                    <input type="text" name={`eduUniversity-${i}`} placeholder="University"/>
                    <input type="date" name={`eduStart-${i}`} placeholder="Start date" max={`${date}-${month}-${year}`}/>
                    <input type="date" name={`eduEnd-${i}`} placeholder="End date"/>

                    <button onClick={subEdu}>Delete</button>
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

            <input type="text" name="name" placeholder="First and Last name" required/>
            <input type="text" name="title" placeholder='Title' required/>
            <input type="text" name="email" placeholder='Email'/>
            <input type="text" name="phone" placeholder='Phone'/>
            <input type="text" name="city" placeholder='City'/>
            <textarea name="description" placeholder='Description' />

            <h2>Job experience/ Side projects</h2>
            <hr />
            {experiences()}
            <button class="add" onClick={addExp}>Add</button>

            <h2>Education</h2>
            <hr />
            {educations()}
            <button class="add" onClick={addEdu}>Add</button>

            <button type="submit">Reset</button>
        </form>
    )
}