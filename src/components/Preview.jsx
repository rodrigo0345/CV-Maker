import '../styles/Preview.css';
import '../styles/DragAndDrop.css';
import {dragOverContainer, dragStart, dragEnd} from '../logic/dragAndDrop.js';

export default function Preview({object, experience, education})
{   
    function displayExperience(){
        const layout = [];
        for(let i = 0; i < experience; i++)
        {
            const html = (
                <div onDragOver={dragOverContainer}>
                    <div className="title-t">
                        {object[`jobTitle-${i}`] &&
                            <p className='jobTitle draggable'
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable="true">
                                {object[`jobTitle-${i}`]}
                            </p>}
                        {object[`jobStart-${i}`] && 
                        <p className='date draggable'
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable="true">
                            ({object[`jobStart-${i}`]} {object[`jobEnd-${i}`]})
                        </p>}
                    </div>

                    <div className={'experienceContent'} >
                    
                        {object[`jobCompany-${i}`] &&
                        <p className='jobCompanyWrap draggable'
                        onDragStart={dragStart}
                        onDragEnd={dragEnd}
                        draggable="true">
                            <p>Company:</p>
                            <p className='jobCompany'>{object[`jobCompany-${i}`]}</p>
                        </p>}
                        {object[`jobCity-${i}`] &&
                        <p className='jobCity draggable'
                        onDragStart={dragStart}
                        onDragEnd={dragEnd}
                        draggable="true">
                            Location: {object[`jobCity-${i}`]}
                        </p>}
                        
                    </div>
                </div>
            );
            layout.push(html);
        }
        return layout;
    }

    function displayEducation()
    {
        const layout = [];
        for(let i = 0; i < education; i++)
        {
            const html = (
                <div>
                    {object[`eduDegree-${i}`] &&
                        <p className='eduDegree draggable'
                        onDragStart={dragStart}
                        onDragEnd={dragEnd}
                        draggable="true">
                            {object[`eduDegree-${i}`]}
                        </p>}
                    <div className={'educationContent'} onDragOver={dragOverContainer}>
                    
                    
                        {object[`eduUniversity-${i}`] &&
                        <p className='eduUniversity draggable'
                        onDragStart={dragStart}
                        onDragEnd={dragEnd}
                        draggable="true">
                            University: {object[`eduUniversity-${i}`]}
                        </p>}
                        
                    </div>
                </div>
            );
            layout.push(html);
        }
        return layout;
    }

    return (
        <div id="preview">
            <div className="frame" id="printable">
                <div className="customization"></div>
                <div className='preview-header' onDragOver={dragOverContainer}>
                    {object.name && <p className="draggable name"
                                        onDragStart={dragStart}
                                        onDragEnd={dragEnd}
                                        draggable="true"
                                        >{object.name}</p>}
                    {object.title && <p className="draggable title"
                                        onDragStart={dragStart}
                                        onDragEnd={dragEnd}
                                        draggable="true"
                                        >{object.title}</p>}
                    {object.image && <p className="draggable image"
                                        onDragStart={dragStart}
                                        onDragEnd={dragEnd}
                                        draggable="true"
                                        >{object.image}</p>}
                </div>
                <div className="preview-wrapper">
            
                    <div className='preview-left'  onDragOver={dragOverContainer}>
            
                    </div>
                    <div className='preview-main' onDragOver={dragOverContainer}>
            
                        {object.description &&
                                            (<div className="about draggable"
                                                onDragStart={dragStart}
                                                onDragEnd={dragEnd}
                                                draggable="true"
                                                onDragOver={dragOverContainer}>
                                                <p className='about-me'>About me</p>
                                                <hr />
                                                <p
                                                className="description draggable"
                                                onDragStart={dragStart}
                                                onDragEnd={dragEnd}
                                                draggable="true"
                                                onDragOver={dragOverContainer}
                                                >{object.description}</p>
                                            </div>)}
            
                        {experience > 0 && (<div className='draggable'
                                                onDragStart={dragStart}
                                                onDragEnd={dragEnd}
                                                draggable="true"
                                                onDragOver={dragOverContainer}>
                                                <p className='experience'>Experience</p>
                                                <hr />
                                                {displayExperience()}
                                            </div>)}
            
                        {education > 0 && (<div className='draggable'
                                                onDragStart={dragStart}
                                                onDragEnd={dragEnd}
                                                draggable="true"
                                                onDragOver={dragOverContainer}>
                                                <p className='education'>Education</p>
                                                <hr />
                                                {displayEducation()}
                                            </div>)}
                    </div>
                    <div className='preview-right' onDragOver={dragOverContainer}>
            
                        {object.email && <p className="draggable email"
                                            onDragStart={dragStart}
                                            onDragEnd={dragEnd}
                                            draggable="true"
                                            >Email: {object.email}</p>}
                        {object.phone && <p className="draggable phone"
                                            onDragStart={dragStart}
                                            onDragEnd={dragEnd}
                                            draggable="true"
                                            >Phone number: {object.phone}</p>}
                        {object.city && <p className="draggable city"
                                            onDragStart={dragStart}
                                            onDragEnd={dragEnd}
                                            draggable="true"
                                            >City: {object.city}</p>}
                    </div>
                </div>
                <div className='preview-footer' onDragOver={dragOverContainer}>
                </div>
            
            </div>
        </div>
    )
}