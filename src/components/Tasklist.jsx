import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../store/tasksSlice';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleToggleStatus = (taskId) => {
        dispatch(toggleTaskStatus(taskId));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <div className='container mt-4'>
            <ul className='list-group'>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className='list-group-item d-flex justify-content-between'>
                        <div>
                            <input
                                type='checkbox'
                                checked={task.completed}
                                onChange={() => handleToggleStatus(task.id)}
                                className='me-3'
                            />
                            <span
                                className={
                                    task.completed
                                        ? 'text-decoration-line-through'
                                        : ''
                                }>
                                {task.title}
                            </span>
                            <p
                                className={
                                    task.completed
                                        ? 'text-decoration-line-through text-secondary'
                                        : 'text-secondary'
                                }>
                                {task.description}
                            </p>
                        </div>
                        <button
                            className='btn btn-danger btn-sm'
                            onClick={() => handleDeleteTask(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
