import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import all_books from '../../../Admin/constants/books';
import all_categories from '../../../Admin/constants/categories';
import {calculateRange, sliceData} from '../../../Admin/utils/table-pagination';
import './books.css';

const Books = () => {

    const [search, setSearch] = useState('');
    const [books, setBooks] = useState(all_books);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [categories, setCategories] = useState(all_categories);

    useEffect(() => {
        setPagination(calculateRange(all_books, 5));
        setBooks(sliceData(all_books, page, 12));
        setCategories(sliceData(all_categories, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = all_books.filter((item) =>
                item.book_name.toLowerCase().includes(search.toLowerCase()) ||
                item.category.toLowerCase().includes(search.toLowerCase()) ||
                item.author.toLowerCase().includes(search.toLowerCase())
            );
            setBooks(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setBooks(sliceData(all_books, new_page, 12));
    }

    return(
        <div className='book-content'>
            <div className='book-content-container'>
                <div className='book-content-nav'>
                    <div className='nav-categories'>
                        {categories.length !== 0 ? 
                        <ul>
                            {categories.map((categories, index) => (
                                <li><button>{categories.category_name}</button></li>
                            ))}
                        </ul>
                        : null}
                    </div>
                    <div className='search-input'>
                        <h5><i className="bi bi-search"></i></h5>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>    
                <div className='book-card-container'>
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

              <Routes>
                    
                </Routes>
              </div>
            </div>
            {books.length !== 0 ?
                    <div className='book-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='book-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
        </div>
    )
}
 export default Books;