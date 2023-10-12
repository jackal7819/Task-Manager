import TaskList from './components/Tasklist';
import TaskModal from './components/TaskModal';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function App() {
    const [showModal, setShowModal] = useState(false);
	const [taskToEdit, setTaskToEdit] = useState(null);

    const openModal = (task) => {
		setTaskToEdit(task);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Container
            className='text-white d-flex flex-column align-items-center justify-content-center'
            style={{ minHeight: '100vh' }}>
            <div className='p-5 rounded w-50 bg-secondary'>
                <h1 className='mb-4'>Tasks List</h1>
                <Button variant='primary mb-4' onClick={openModal}>
                    Add Task
                </Button>
                <div>
                    <TaskList openModal={openModal} closeModal={closeModal} />
                    {showModal && <TaskModal closeModal={closeModal} taskToEdit={taskToEdit} />}
                </div>
            </div>
        </Container>
    );
}

export default App;
