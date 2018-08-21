import React, {Component, PropTypes} from 'react';
import Card from './Card';

class List extends Component {
    render() {
        console.log(this.props.cards);
        let cards = this.props.cards.map((card) => {
            return <Card key={card.id}
                         id={card.id}
                         title={card.title}
                         taskCallbacks={this.props.taskCallbacks}
                         description={card.description}
                         color={card.color}
                         tasks={card.tasks} />;
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>

        );
    }
};

List.PropTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
};

export default List;
