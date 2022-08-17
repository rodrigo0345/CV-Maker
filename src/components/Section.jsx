import Form from './Form';
import Preview from './Preview';
import '../styles/Section.css';

export default function Section(){
    

    return (
        <section>

            <div className="buttons">

            </div>

            <div className="content">
                <Form />
                <hr id="separator" />
                <Preview />
            </div>

        </section>
    )
}