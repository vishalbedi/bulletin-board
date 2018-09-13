import React, {Component} from 'react';
import Note from './Note';
import {FaPlusSquare} from 'react-icons/fa';

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
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    update(newText, i){
        console.log("Updating item at index ", i, newText);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
                )
        }));
    }

    remove(id){
        console.log("Removing id", id);
        this.setState(prevState => ({
                notes: prevState.notes.filter(note => note.id !== id)
            })
        );
    }
    eachNote(note, i){
        return (
            <Note key={note.id}
                  index={note.id}
                  onRemove={this.remove}
                  onChange={this.update}>
                {note.note}</Note>
        )
    }

    add(text){
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
            })
        );
    }

    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    render() {
        return (
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                <button id="add" onClick={this.add.bind(null, "New Note")}> <FaPlusSquare/> </button>
            </div>
        );
    }
}

export default Board;