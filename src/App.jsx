import TaskList from './components/Tasklist';
import TaskModal from './components/TaskModal';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function App() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
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
                    <TaskList />
                    {showModal && <TaskModal closeModal={closeModal} />}
                </div>
            </div>
        </Container>
    );
}

export default App;
