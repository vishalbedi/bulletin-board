import React, {Component} from 'react';
import Note from './Note';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:[
                {
                    id:0,
                    note: "Eat Food"
                },
                {
                    id:1,
                    note:"Get Milk"
                }
            ]
        };
        this.eachNote = this.eachNote.bind(this);
    }

    eachNote(note, i){
        return (
            <Note key={i}
                  index={i}>{note.note}</Note>
        )
    }


    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
            </div>
        );
    }
}

export default Board;