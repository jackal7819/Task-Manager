import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../store/tasksSlice';

// eslint-disable-next-line react/prop-types
const TaskModal = ({ closeModal, taskToEdit }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            // eslint-disable-next-line react/prop-types
            setTitle(taskToEdit.title);
            // eslint-disable-next-line react/prop-types
            setDescription(taskToEdit.description);
        }
    }, [taskToEdit]);

    const handleSave = () => {
        if (title.trim() === '') {
            alert('The title cannot be empty.');
            return;
        }

        if (taskToEdit) {
            // eslint-disable-next-line react/prop-types
            dispatch(editTask({ id: taskToEdit.id, title, description }));
        } else {
            dispatch(addTask({ title, description, completed: false }));
        }

        closeModal();
    };

    return (
        <div className='modal text-dark' style={{ display: 'block' }}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>
                            {taskToEdit ? 'Edit Task' : 'Add Task'}
                        </h5>
                        <button
                            type='button'
                            className='btn-close'
                            onClick={closeModal}
                            aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>
                                Task Title
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='description' className='form-label'>
                                Task Description
                            </label>
                            <textarea
                                className='form-control'
                                id='description'
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }></textarea>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-primary'
                            onClick={handleSave}>
                            {taskToEdit ? 'Save' : 'Add'}
                        </button>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
