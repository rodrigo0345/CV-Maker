export function dragOverContainer(e) {
  e.preventDefault()

  const container = e.target.parentNode;
  const afterElement = getDragAfterElement(container, e.clientY)
  const draggable = document.querySelector('.dragging')

  console.log(draggable)

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

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}