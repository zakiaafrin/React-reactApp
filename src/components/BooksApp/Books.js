import React, { Component } from 'react';
import Book from './Book';

class Books extends Component {

    render() {
        return (
            <div>
                {this.props.books.map((book, id) => {
                    return (
                        <Book key={id}
                            book={book}
                            editHandler={this.props.editHandler}
                            deleteHandler={this.props.deleteHandler} />
                    )
                })}
            </div>
        );
    }
}

export default Books;