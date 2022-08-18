import Form from './Form';
import Preview from './Preview';
import '../styles/Section.css';
import { useState } from 'react';

export default function Section(){

    const [mainObject, setMainObject] = useState([]);
    const experience = useState(1);
    const education = useState(1);

    function addExperience(){
        experience[1](prev => prev + 1);
    }

    function subtractExperience(){
        experience[1](prev => prev - 1);
    }

    function addEducation(){
        education[1](prev => prev + 1);
    }

    function subtractEducation(){
        education[1](prev => prev - 1);
    }

    function onChange(event){
        const form = event.target;
        console.log(form);
    
        const key = {} ;
        key[form.name] = form.value;;

        setMainObject(prevObj => {
            return {
                ...prevObj,
                ...key
            }
        });
    }

    function appear(e)
    {
        let object = '';
        if(e.target.id === 'btn-prv')
        {
            object = document.getElementById('preview');
        }
        else {
            object = document.getElementById('form');
        }
        
        if (window.screen.width < 900)
        {
            object.style = 'visibility: visible; position: absolute;';
        }     
    }

    return (
        <section>

            <div className="buttons">
                <button 
                    onClick={appear} 
                    id="btn-prv">
                    Preview
                </button>
                <button 
                    onClick={appear}
                    id="btn-rgs">
                    Register
                </button>
            </div>

            <div className="content">
                <Form
                    changes={onChange}
                    experience={[experience[0], addExperience, subtractExperience]}
                    education={[education[0], addEducation, subtractEducation]}
                />

                <Preview 
                    object={mainObject}
                    setter={setMainObject}
                />
            </div>

        </section>
    )
}