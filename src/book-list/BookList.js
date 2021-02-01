import {books} from '../resources/books';
import Book from './Book';

const BookList = () => {
    return (
        <div>
      <h2 className = "header">Best Selling Books</h2>
    <section className = "booklist">
      {
        books.map((book)=>{
          return <Book key = {book.id} { ...book }></Book>
        })
      }
    </section>
    </div>
    );
}

export default BookList;