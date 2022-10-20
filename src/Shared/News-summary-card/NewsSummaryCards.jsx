import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark,FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCards = ({news}) => {
    const {_id,title,author,details,image_url,total_view,rating}=news
    console.log(news);
    return (
        <Card className="mb-3">
        <Card.Header>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                 <Image 
                   roundedCircle
                   className='me-2'
                   src={author?.img}
                   style={{height:"60px"}}
                 ></Image>
                 <div>
                    <p>
                        name: {author?.name ? author?.name : "author name not found"}
                        <br />
                        Publish Date: {author?.published_date ? author?.published_date : 'No published date data'}
                    </p>
                    
                 </div>
                </div>
              <div>
                <FaRegBookmark className='me-2' />
                <FaShareAlt />
              </div>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {
            details?.length > 200 ?
            <p>{details?.slice(0,250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></p>
            :
            <p>{details}</p>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex  justify-content-between">
            <div>
              <FaStar className='text-warning me-2' />
              <span>{rating?.number}</span>
            </div>

            <div>
                <FaEye className='text-dark me-2'/>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCards;