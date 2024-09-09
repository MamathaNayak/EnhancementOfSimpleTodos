// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoItem, userDelete, onUpdateTask} = props
  const {id, title} = todoItem
  const [checked, setChecked] = useState(false)
  const [isEdited, setEdit] = useState(false)
  const [editedTask, setEditedTask] = useState(title)
  const onDelete = () => {
    userDelete(id)
  }
  const onEdit = () => {
    setEdit(prevState => !prevState)
  }
  const onCheckeboxChecked = () => {
    setChecked(prevState => !prevState)
  }

  const classNameValue = checked ? 'through-line' : 'no-line'
  const style = `paragraph ${classNameValue}`
  console.log(style)
  const onSave = () => {
    onUpdateTask(id, editedTask)
    setEdit(prevState => !prevState)
  }
  const onUpdateInput = event => {
    setEditedTask(event.target.value)
  }

  return (
    <li className="todo-container">
      {isEdited ? (
        <>
          <div className="input-save-container">
            <input
              type="text"
              className="update-text"
              onChange={onUpdateInput}
              value={editedTask}
            />

            <button type="button" className="save-button" onClick={onSave}>
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            className="checkbox"
            onChange={onCheckeboxChecked}
          />

          <p className={style}>{title}</p>
          <button type="button" className="edit-button" onClick={onEdit}>
            Edit
          </button>
          <button type="button" className="button" onClick={onDelete}>
            Delete
          </button>
        </>
      )}
    </li>
  )
}
export default TodoItem
