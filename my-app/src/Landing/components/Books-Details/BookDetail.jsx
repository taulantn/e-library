import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import all_books from '../../../Admin/constants/books';
import all_categories from '../../../Admin/constants/categories';
import {calculateRange, sliceData} from '../../../Admin/utils/table-pagination';
import './books.css';
const BookDetail = () => {

    const [books, setBooks] = useState(all_books);

    

    return(
        <div className='book-content'>
            <div className='book-content-container'>
                <div className='book-content-nav'>
                    
                {books.length !==0 ?
               
                <div className='book-card'>
                     {books.map((books, index) => (
                    <Card key={index}>
                            <CardImg 
                            className="book-card-img"  
                            src={books.image}
                            alt={books.book_name}
                            />
                        <CardBody>
                            <CardTitle tag="h5">{books.book_name}</CardTitle>
                            <CardText>{books.author}</CardText>
                            <CardText>{books.category}</CardText>
                            <Button >${books.price}</Button>
                        </CardBody>
                    </Card>
                     ))}
                </div>  
                : null}    

              
              </div>
            </div>
        </div>
    )
}
 export default Books;