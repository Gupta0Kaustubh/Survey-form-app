// Import necessary dependencies
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/topic.css"

// Functional component for selecting a product topic
const Topic = ({ response, setResponse }) => {
    const navigate = useNavigate();

    // Function to store the selected product in the state and navigate to the next page
    const store = (e) => {
        // Copy the current response state
        const val = response;

        // Log the selected product to the console
        console.log(e.target.innerHTML);

        // Update the response state with the selected product
        val[0].product = e.target.innerHTML;
        setResponse(val);

        // Log the updated response state to the console
        console.log(response);

        // Navigate to the next page ('/surveyquestion')
        navigate('/surveyquestion');
    };

    // JSX structure for the Topic component
    return (
        <div className='container-fluid' id="topic">
            {/* Header */}
            <div style={{ fontSize: '4rem' }}>
                <span style={{ color: "#bfc0c0" }}>Y</span>our<span style={{ color: "#bfc0c0" }}>Survey</span>
            </div>

            {/* Button container using an unordered list */}
            <div class="d-grid gap-2" style={{ width: "20%" }}>
                <button type="button" onClick={(e) => store(e)} class="btn btn-outline-light" style={{ margin: "30px" }}>Product 1</button>
                <button type="button" onClick={(e) => store(e)} class="btn btn-outline-light" style={{ margin: "30px" }}>Product 2</button>
                <button type="button" onClick={(e) => store(e)} class="btn btn-outline-light" style={{ margin: "30px" }}>Product 3</button>
                <button type="button" onClick={(e) => store(e)} class="btn btn-outline-light" style={{ margin: "30px" }}>Product 4</button>
            </div>
        </div>
    );
}

// Export the Topic component
export default Topic;
