import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import all_books from '../../constants/books';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';

function Books () {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState(all_books);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_books, 5));
        setBooks(sliceData(all_books, page, 5));
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
        setBooks(sliceData(all_books, new_page, 5));
    }

    return(
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="New Product" />

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Books List</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>ISBN</th>
                        <th>NAME</th>
                        <th>AUTHOR</th>
                        <th>CATEGORY</th>
                        <th>IMAGE</th>
                        <th>LANGUAGE</th>
                        <th>REVENUE</th>
                        <th>DESCRIPTION</th>
                        <th>OPTIONS</th>

                    </thead>

                    {books.length !== 0 ?
                        <tbody>
                            {books.map((books, index) => (
                                <tr key={index}>
                                    <td><span>{books.id}</span></td>
                                    <td><span>{books.isbn}</span></td>
                                    <td><span>{books.book_name}</span></td>
                                    <td><span>{books.author}</span></td>
                                    <td><span>{books.category}</span></td>
                                    <td>
                                        <div>
                                            <img 
                                                src={books.image}
                                                className='dashboard-content-avatar'
                                                alt={books.book_name} />
                                        </div>
                                    </td>
                                    <td><span>{books.language}</span></td>
                                    <td><span>${books.price}</span></td>
                                    <td><span>{books.description}</span></td>
                                    <td><span><button className='delete-btn'>Delete</button>
                                    <button className='edit-btn'>Edit</button></span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {books.length !== 0 ?
                    <div className='dashboard-content-footer'>
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
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Books;