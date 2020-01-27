import React from 'react';
import IconButton from '../template/iconButton';
import If from '../template/if';

import './todoList.css';

export default props => {

    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <div className='btn-group'>
                        <If test={!todo.done}>
                            <IconButton 
                                style='success' 
                                icon='check' 
                                onClick={() => props.handleMarkAsDone(todo)}
                            />
                        </If>

                        <If test={todo.done}>
                            <IconButton 
                                style='warning' 
                                icon='undo' 
                                onClick={() => props.handleMarkAsPending(todo)}
                            />
                        </If>
                        
                        <IconButton 
                            style='danger' 
                            icon='trash-o' 
                            onClick={() => props.handleRemove(todo)}
                        />
                    </div>                    
                </td>
            </tr>
        ));
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}