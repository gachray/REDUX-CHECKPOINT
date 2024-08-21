import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../features/tasksSlice';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask({ id: task.id, description, isDone: task.isDone }));
        setIsEditing(false);
    };

    return (
        <div className="task-card">
            <div className="task-header">
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => dispatch(toggleTask(task.id))}
                />
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button onClick={handleEdit}>Save</button>
                    </div>
                ) : (
                    <span>{task.description}</span>
                )}
            </div>
            <div className="task-actions">
                <button onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>
                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </div>
        </div>
    );
};

export default Task;
