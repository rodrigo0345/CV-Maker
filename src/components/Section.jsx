import Form from './Form';
import Preview from './Preview';
import '../styles/Section.css';
import { useState } from 'react';

export default function Section(){

    const [mainObject, setMainObject] = useState([]);

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
                    object={mainObject}
                    setter={setMainObject}
                />

                <hr id="separator" />

                <Preview 
                    object={mainObject}
                    setter={setMainObject}
                />
            </div>

        </section>
    )
}