import { useState } from 'react';

export const usePagination = (items, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return {
        currentPage,
        currentItems,
        handlePageChange,
        totalPages: Math.ceil(items.length / itemsPerPage),
    };
};