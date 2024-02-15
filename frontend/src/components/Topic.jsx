import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Topic = ({ response, setResponse }) => {
    const navigate = useNavigate();

    // Function to store selected product in the response state and navigate to the survey question page
    const store = (e) => {
        const updatedResponse = [...response];
        updatedResponse[0].product = e.target.innerHTML;
        setResponse(updatedResponse);
        navigate('/surveyquestion');
    }

    return (
        <>
            {/* Header */}
            <div className='header' style={{ margin: '0px' }}>
                <span style={{ color: "#bfc0c0" }}>Y</span>our<span style={{ color: "#bfc0c0" }}>Survey</span>
            </div>
            {/* Product selection buttons */}
            <div class="d-grid gap-2" style={{ width: "20%", margin: "0px 520px" }}>
                <button type="button" onClick={(e) => store(e)} class="btn btn-outline-light" style={{ margin: "30px" }}>Product 1</button>
                <button type="button" onClick={(e) => store(e)} class="btn btn-outline-light" style={{ margin: "30px" }}>Product 2</button>
                <button type="button" onClick={(e) => store(e)} class="btn btn-outline-light" style={{ margin: "30px" }}>Product 3</button>
                <button type="button" onClick={(e) => store(e)} class="btn btn-outline-light" style={{ margin: "30px" }}>Product 4</button>
            </div>
        </>
    );
}

export default Topic;
