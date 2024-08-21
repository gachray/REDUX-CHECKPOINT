import React, { useState } from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './styles/styles.css';

function App() {
    const [filter, setFilter] = useState('all');

    return (
        <div className="app-container">
            <h1>TODO LIST</h1>
            <div className="main-content">
                <AddTask />
                <div className="filters">
                    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                        <option value="all">All Tasks</option>
                        <option value="done">Completed Tasks</option>
                        <option value="notDone">Incomplete Tasks</option>
                    </select>
                </div>
                <ListTask filter={filter} />
            </div>
        </div>
    );
}

export default App;
