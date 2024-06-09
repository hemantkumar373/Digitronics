import React, { useState, useEffect } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {
    const [pop_collection, setPop_collection] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/popularinlaptop');
                const data = await response.json();
                setPop_collection(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='popular'>
            <h1>POPULAR IN Laptop</h1>
            <hr />
            <div className="popular-item">
                {pop_collection.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    );
};

export default Popular;