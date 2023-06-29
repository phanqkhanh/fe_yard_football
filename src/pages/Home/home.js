import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { DataContext } from '../../ContextProvider/contextProvider';

const Home = () => {
    let { userLogin } = useSelector((state) => ({
        userLogin: state.auth.login.userLogin,
    }));
    const { loading, setLoading } = useContext(DataContext);

    return (
        <div>
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
