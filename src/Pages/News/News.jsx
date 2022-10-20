import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const newsId=useLoaderData();

    return (
        <div>
           {
            // newsId?.map(news => )
           }
        </div>
    );
};

export default News;