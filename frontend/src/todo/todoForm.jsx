import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSeach() : props.handleAdd();
        } else if(e.key === 'Return') {
            props.handleClear();
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control pl-0' placeholder='Adicione uma tarefa' 
                    value={props.description} onChange={props.handleChanged} onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols='12 3 2'>
                <div className='btn-group'>
                    <IconButton style='primary' icon='plus' onClick={props.handleAdd}/>
                    <IconButton style='info' icon='search' onClick={props.handleSeach}/>
                </div>            
            </Grid>
        </div>
    );
}