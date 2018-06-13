import React from 'react';

const EditExpensePage = (props) => {
    return (
        <div>
            Editing with the expense with id of {props.match.params.id}
        </div>
    );
}

export default EditExpensePage;