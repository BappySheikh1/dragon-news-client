import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const News = () => {
    const newsId = useLoaderData();
    const {title,author,details,image_url,category_id}=newsId
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                      {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">All news in this category </Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;