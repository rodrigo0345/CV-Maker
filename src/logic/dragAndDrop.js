export function dragOverContainer(e) {
  e.preventDefault()

  const container = e.target;
  const afterElement = getDragAfterElement(container, e.clientY, e.ClientX)
  const draggable = document.querySelector('.dragging')

  if (afterElement == null) {
    container.appendChild(draggable)
  } else {
    container.insertBefore(draggable, afterElement)
  }
}

export function dragStart(e) { 
  e.target.classList.add('dragging');
}

export function dragEnd(e) {
  e.target.classList.remove('dragging');
}

function getDragAfterElement(container, y, x) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offsetY = y - box.top - box.height / 2
    const offsetX = x - box.left - box.width / 2

    let offset;
    if(offsetY < offsetX){
      offset = offsetX;
    }
    else { 
      offset = offsetY; 
    }

    if ((offset < 0 && offset > closest.offset)) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}