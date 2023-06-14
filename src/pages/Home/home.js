import React from 'react';

const Home = () => {
    return (
        <div>
            <p>Trang chủ update{process.env.REACT_APP_BASE_URL}</p>
            <button
                onClick={() => {
                    console.log(123);
                }}
            >
                Click
            </button>
        </div>
    );
};

export default Home;
