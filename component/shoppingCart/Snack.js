import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd';

const snackSpec = {
    beginDrag(props) {
        return {
            name: props.name
        };
    },

    endDrag(props, monitor) {
        const dragItem = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if(dropResult) {
            console.log("You dropped " + dragItem.name + " into " + dropResult.name);
        }
    }
};

let collect = (connect, monitor) => {
    return {
        connectDragSourse: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

class Snack extends Component {
    render() {
        const {name, isDragging, connectDragSourse} = this.props;
        const opacity = isDragging ? 0.4 : 1;
        const style = {
            opacity: opacity
        };

        return (
            connectDragSourse(
                <div className='snack' style={style}>
                   {name}
                </div>
            )
        );
    }
}

Snack.PropTypes = {
    connectDragSourse: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default DragSource('snack', snackSpec, collect)(Snack);