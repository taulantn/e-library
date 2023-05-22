import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import all_categories from '../../constants/categories';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';

function Categories () {
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState(all_categories);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_categories, 5));
        setCategories(sliceData(all_categories, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = all_categories.filter((item) =>
                item.category_name.toLowerCase().includes(search.toLowerCase()) 
            );
            setCategories(sliceData(search_results, page, 5));
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setCategories(sliceData(all_categories, new_page, 5));
    }

    return(
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="New Category" />

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Categories List</h2>
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
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>NUMBER OF BOOKS</th>
                        <th>OPTIONS</th>
                    </thead>

                    {categories.length !== 0 ?
                        <tbody>
                            {categories.map((categories, index) => (
                                <tr key={index}>
                                    <td><span>{categories.id}</span></td>
                                    <td><span>{categories.category_name}</span></td>
                                    <td><span>{categories.category_description}</span></td>
                                    <td><span>{categories.books_num}</span></td>
                                    <td><span><button className='delete-btn'>Delete</button>
                                    <button className='edit-btn'>Edit</button></span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {categories.length !== 0 ?
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

export default Categories;