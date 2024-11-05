
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const GadgetDetails = ({ gadgets }) => {
    const { id } = useParams();
    const gadget = gadgets.find(g => g.product_id === Number(id));


    if (!gadget) {
        return (
            <div>
                <h1>Gadget Not Found</h1>
                <p>There is no data found for this gadget.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>{gadget.product_title}</h1>
            <img src={gadget.product_image} alt={gadget.product_title} />
            <p>{gadget.description}</p>
            <p>Price: ${gadget.price.toFixed(2)}</p>
            <p>Rating: {gadget.rating} stars</p>
            <p>Specifications:</p>
            <ul>
                {gadget.Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                ))}
            </ul>
        </div>
    );
};

export default GadgetDetails;
