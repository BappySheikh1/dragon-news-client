import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCards from '../../Shared/News-summary-card/NewsSummaryCards';

const Home = () => {
    const allNews=useLoaderData()
    return (
        <div>
            <h2>This is home component: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCards key={news._id} news={news}> </NewsSummaryCards>)
            }
        </div>
    );
};

export default Home;