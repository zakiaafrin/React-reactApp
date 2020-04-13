import React, { Component } from 'react';
import Books from './Books';

class BooksApp extends Component {
  state = {
    books: [
      {
        name: 'React',
        price: 20,
        id: 1
      },
      {
        name: 'Redux',
        price: 30,
        id: 2
      },
      {
        name: 'React-Native',
        price: 25,
        id: 3
      }
    ]
  }

  editHandler = (name, id) => {
    let newBooks = this.state.books.map(book => {
      if (book.id === id) {
        return {
          ...book,
          name
        }
      }
      return book
    })
    this.setState({
      books: newBooks
    })
  }

  deleteHandler = (id) => {
    let newBooks = this.state.books.filter(book => book.id !== id)
    this.setState({
      books: newBooks
    })
  }

  render() {
    return (
      <div className="container py-5" >
        <Books
          books={this.state.books}
          editHandler={this.editHandler.bind(this)}
          deleteHandler={this.deleteHandler.bind(this)} />
      </div >
    );
  }
}

export default BooksApp;