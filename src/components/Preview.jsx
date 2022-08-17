import '../styles/Preview.css';
import '../styles/DragAndDrop.css';
import {dragOverContainer, dragStart, dragEnd} from '../logic/dragAndDrop.js';
import uniqid from 'uniqid';

export default function Preview({object})
{   
    console.log(object)
    return (
        <div>
            <div className="container" onDragOver={dragOverContainer}>
                <p className="draggable" onDragStart={dragStart} onDragEnd={dragEnd} draggable="true">1</p>
                <p className="draggable" onDragStart={dragStart} onDragEnd={dragEnd} draggable="true">2</p>
            </div>
            <div className="container" onDragOver={dragOverContainer}>
                <p className="draggable" onDragStart={dragStart} onDragEnd={dragEnd} draggable="true">3</p>
                <p className="draggable" onDragStart={dragStart} onDragEnd={dragEnd} draggable="true">4</p>
            </div>
        </div>
    )
}