import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task'; // Ensure this path is correct

const ListTask = ({ filter }) => {
    const tasks = useSelector(state => state.tasks);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'done') return task.isDone;
        if (filter === 'notDone') return !task.isDone;
        return false;
    });

    return (
        <div>
            {filteredTasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;
