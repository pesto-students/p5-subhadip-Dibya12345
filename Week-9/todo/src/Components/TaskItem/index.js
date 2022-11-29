import PropTypes from "prop-types";
import { BiCheckDouble, BiPencil, BiX, BiTrash } from "react-icons/bi";
import "./TaskItem.css";

const TaskItem = (props) => {
  const taskComplete = () => {
    props.onTaskComplete(props.id);
  };

  function taskDelete() {
    props.onTaskDelete(props.id);
  }

  function taskUndo() {
    props.onTaskUndo(props.id);
  }

  function taskEdit() {
    props.onTaskEdit(props.id);
  }

  let description;
  if (props.description) {
    description = <p>{props.description}</p>;
  }

  return (
    <li className={props.done ? "completed" : ""}>
      <div className="label">
        <label>{props.label}</label>
        {props.done ? (
          <>
            <div className="div-actions">
              <button className="info" onClick={taskUndo}>
                <BiX />
              </button>
              <button className="danger" onClick={taskDelete}>
                <BiTrash />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="div-actions">
              <button className="warning" onClick={taskEdit}>
                <BiPencil />
              </button>
              <button className="success" onClick={taskComplete}>
                <BiCheckDouble />
              </button>
            </div>
          </>
        )}
      </div>
      {description}
    </li>
  );
};

TaskItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};

export default TaskItem;
