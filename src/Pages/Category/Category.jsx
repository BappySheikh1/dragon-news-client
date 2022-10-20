import React  from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCards from '../../Shared/News-summary-card/NewsSummaryCards';

const Category = () => {
    
    const categoryNews=useLoaderData()
    

    return (
        <div>
            <h4>All Category : {categoryNews.length}</h4>
            {
                categoryNews.map(news => <NewsSummaryCards key={news._id}
                news={news}></NewsSummaryCards>)
            }
        </div>
    );
};

export default Category;