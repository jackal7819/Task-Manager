import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../store/tasksSlice';

// eslint-disable-next-line react/prop-types
const TaskList = ({ openModal }) => {
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
                    <li key={task.id} className='list-group-item'>
                        <div className='d-flex justify-content-between align-items-center flex-grow-1'>
                            <div className='w-75'>
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
                                            ? 'text-decoration-line-through text-secondary text-break'
                                            : 'text-secondary text-break'
                                    }>
                                    {task.description}
                                </p>
                            </div>
                            <button
                                className='align-middle btn btn-success btn-sm d-inline-block'
                                onClick={() => openModal(task)}>
                                Edit
                            </button>
                            <button
                                className='btn btn-danger btn-sm'
                                size='sm'
                                onClick={() => handleDeleteTask(task.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
