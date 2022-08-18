import '../styles/Preview.css';
import '../styles/DragAndDrop.css';
import {dragOverContainer, dragStart, dragEnd} from '../logic/dragAndDrop.js';

export default function Preview({object})
{   
    console.log(object)
    return (
        <div className="frame">
            <div className="customization"></div>

            <div className='preview-header' onDragOver={dragOverContainer}>

                <div
                    className="draggable aux">
                </div>

                {object.name && <h1 
                                    className="draggable"
                                    onDragStart={dragStart} 
                                    onDragEnd={dragEnd} 
                                    draggable="true"
                                    >{object.name}</h1>}

                {object.title && <h2
                                    className="draggable"
                                    onDragStart={dragStart} 
                                    onDragEnd={dragEnd} 
                                    draggable="true"
                                    >{object.title}</h2>}

                {object.image && <h3
                                    className="draggable"
                                    onDragStart={dragStart} 
                                    onDragEnd={dragEnd} 
                                    draggable="true"
                                    >{object.image}</h3>}

            </div>

            <div className="preview-wrapper">
                
                <div className='preview-left'  onDragOver={dragOverContainer}>
                    
                </div>

                <div className='preview-main' onDragOver={dragOverContainer}>
                    
                </div>

                <div className='preview-right' onDragOver={dragOverContainer}>
                    
                    {object.email && <p
                                        className="draggable"
                                        onDragStart={dragStart} 
                                        onDragEnd={dragEnd} 
                                        draggable="true"
                                        >Email: {object.email}</p>}

                </div>
            </div>

            <div className='preview-footer' onDragOver={dragOverContainer}>

            </div>
            
        </div>
    )
}