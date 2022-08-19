import '../styles/Preview.css';
import '../styles/DragAndDrop.css';
import {dragOverContainer, dragStart, dragEnd} from '../logic/dragAndDrop.js';
import Customize from './CustomizePreview';
import { useState } from 'react';

export default function Preview({object, experience, education})
{   

    /*$dark-blue: #031059;
    $blue: ;
    $orange: #F24405;
    $light-orange: #f2846b;
    $gray: #F2F2F2;
    */

    const [enableCustomize, setEnableCustomize] = useState(false);
    const [settings, setSettings] = useState({
            mainColor: '#F24405',
            secondaryColor: '#2C3D73',
            ternaryColor: '#ffffff',
            fontTitleColor: '#ffffff',
            fontTextColor: '#000000',
            fontSubTextColor: '#ffffff',
    });

    function toggleCustomize()
    {
        setEnableCustomize(prev => !prev);
    }

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
                        <p className='jobCompanyWrap draggable'
                        onDragStart={dragStart}
                        onDragEnd={dragEnd}
                        draggable="true">
                            <p>Location:</p>
                            <p className='jobCompany'>{object[`jobCity-${i}`]}</p>
                        </p>}
                        
                    </div>

                    {object[`jobDescription-${i}`] &&
                        <p className='description-wrap draggable'
                        onDragStart={dragStart}
                        onDragEnd={dragEnd}
                        draggable="true">
                            <p>Description:</p>
                            <p className='description'>{object[`jobDescription-${i}`]}</p>
                    </p>}
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
                    <div className="title-t">
                        {object[`eduDegree-${i}`] &&
                            <p className='eduDegree draggable'
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable="true">
                                {object[`eduDegree-${i}`]}
                            </p>}
                        {object[`jobStart-${i}`] &&
                        <p className='date draggable'
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable="true">
                            ({object[`jobStart-${i}`]} {object[`jobEnd-${i}`]})
                        </p>}
                    </div>
                    
                    <div className={'educationContent'} onDragOver={dragOverContainer}>
                    
                        {object[`eduUniversity-${i}`] && 
                            <div className="eduUniversityWrap">    
                            <p className='eduUniversity draggable'
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable="true">
                                University: {object[`eduUniversity-${i}`]}
                            </p>
                        </div>}
                        
                    </div>

                    {object[`eduDescription-${i}`] &&
                        <p className='description-wrap draggable'
                        onDragStart={dragStart}
                        onDragEnd={dragEnd}
                        draggable="true">
                            <p>Description:</p>
                            <p className='description'>{object[`eduDescription-${i}`]}</p>
                    </p>}
                </div>
            );
            layout.push(html);
        }
        return layout;
    }

    return (
        <div id="preview">
            <div className="customization">
                    <abbr title="customize CV"><button onClick={toggleCustomize} id="enableSettings"></button></abbr>
                    <Customize enabled={enableCustomize} settings={settings} setSettings={setSettings}/>
            </div>

            <div className="frame" id="printable">
                <div className='preview-header' onDragOver={dragOverContainer} 
                    style={{backgroundColor: settings.mainColor, color: settings.fontTitleColor}}>
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
            
                    <div className='preview-left'  
                            onDragOver={dragOverContainer} 
                            style={{backgroundColor: settings.ternaryColor}}
                    >
            
                    </div>
                    <div className='preview-main' onDragOver={dragOverContainer}
                    style={{color: settings.fontTextColor}}>
            
                        {object.description && (<div className="about draggable"
                                                onDragStart={dragStart}
                                                onDragEnd={dragEnd}
                                                draggable="true"
                                                onDragOver={dragOverContainer}>
                                                <p className='about-me'>About me</p>
                                                <hr/>
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
                    <div className='preview-right' onDragOver={dragOverContainer} 
                    style={{backgroundColor: settings.secondaryColor, color: settings.fontSubTextColor}}>
            
                        {object.email &&<div className="email-wrapper draggable"
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable="true"
                        >
                            <p className="email-tag">Email</p>
                            {object.email && <p className="email">{object.email}</p>}
                        </div>}


                        {object.phone && <div className="phone-wrapper draggable"
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable="true"
                        >
                            <p className="phone-tag">Phone</p>
                            <p className='phone'>{object.phone}</p>
                        </div>}

                        {object.city && <div className="city-wrapper draggable"
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                            draggable="true"
                        >
                            <p className="city-tag">City</p>
                            {object.city && <p className='city'>{object.city}</p>}
                        </div>}

                    </div>
                </div>
                <div className='preview-footer' onDragOver={dragOverContainer}
                style={{backgroundColor: settings.mainColor, color: settings.fontTitleColor}}>
                </div>
            
            </div>
        </div>
    )
}