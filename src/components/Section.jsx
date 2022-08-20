import Form from './Form';
import Preview from './Preview';
import '../styles/Section.css';
import { useState } from 'react';
import Save from '../logic/save.js';
import { useEffect } from 'react';

export default function Section(){

    const save = new Save();

    const [mainObject, setMainObject] = useState([]);
    const experience = useState(1);
    const education = useState(1);
    const [enableCustomize, setEnableCustomize] = useState(false);
    const [settings, setSettings] = useState({
            mainColor: '#F24405',
            secondaryColor: '#2C3D73',
            ternaryColor: '#ffffff',
            fontTitleColor: '#ffffff',
            fontTextColor: '#000000',
            fontSubTextColor: '#ffffff',
    });
    
    /* replace the default values with the saved Client's values */
    useEffect(() => {
        const retrive = ["mainObject", "experience", "education", "settings"];
        const saved = save.getStates(retrive);

        saved.map(item => {
            if (item === null || item === undefined) return;
            const key = Object.keys(item)[0];
            
            const value = Object.values(Object.values(item))[0];

            if(key === "mainObject"){
                setMainObject(value);
            }
            else if(key === "experience"){
                experience[1](value);
            }
            else if(key === "education"){
                education[1](value);
            }
            else if(key === "settings"){
                setSettings(value);
            }
        })
    }, []);

    function resetStatesAndStorage(){
        save.reset();
        setMainObject([]);
        experience[1](1);
        education[1](1);
        setSettings({
            mainColor: '#F24405',
            secondaryColor: '#2C3D73',
            ternaryColor: '#ffffff',
            fontTitleColor: '#ffffff',
            fontTextColor: '#000000',
            fontSubTextColor: '#ffffff',
        });
    }   

    function saveAllStates(e){
        e.preventDefault();
        
        const states = [
                            {
                                mainObject: mainObject
                            }, 
                            {
                                experience: experience[0]
                            }, 
                            {
                                education: education[0]
                            },
                            {
                                settings: settings
                            } 
                        ];

        save.saveStates(states);
        
    }

    function addExperience(e){
        e.preventDefault();
        experience[1](prev => prev + 1);
    }

    function subtractExperience(e){
        e.preventDefault();
        experience[1](prev => prev - 1);
    }

    function addEducation(e){
        e.preventDefault();
        education[1](prev => prev + 1);
    }

    function subtractEducation(e){
        e.preventDefault();
        education[1](prev => prev - 1);
    }

    function onChange(event){
        const form = event.target;

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
                    object={mainObject}
                    experience={[experience[0], addExperience, subtractExperience]}
                    education={[education[0], addEducation, subtractEducation]}
                    saveStates={saveAllStates}
                    reset={resetStatesAndStorage}
                />

                
                <Preview 
                    object={mainObject}
                    experience={experience[0]}
                    education={education[0]}
                    enableCustomize={enableCustomize}
                    setEnableCustomize={setEnableCustomize}
                    settings={settings}
                    setSettings={setSettings}
                />
            </div>

        </section>
    )
}