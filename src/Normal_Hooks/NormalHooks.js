import React, { useCallback, useEffect, useState } from 'react';
import './style.css';
import UseContextExample from './UseContext';
import UseMemoExample from './UseMemo';

const styleData = {
    'dark': {
        backgroundColor: 'darkslategrey',
        color: 'greenyellow'
    },
    'light': {
        backgroundColor: '#ffffff',
        color: 'crimson'
    },
}

const NormalHooks = () => {

    const [userData, setUserData] = useState([]);
    const [theme, setTheme] = useState('dark');
    const [style, setStyle] = useState(styleData['dark']);
    const [reset, setReset] = useState(false);
    const [userCallBackData, setUseCallBackData] = useState([]);

    const getUser = async () => {
        try {
            const response = await fetch('http://localhost:8000/user_details');
            const json = await response.json();
            setUserData(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    const getUsecallBackUser = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:8000/user_details');
            const json = await response.json();
            setUseCallBackData(json);
        } catch (error) {
            console.log("error", error);
        }
    }, []);

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        setStyle(styleData[theme]);
        //if theme values changes then it called one time
    }, [theme]);

    useEffect(() => {
        if (reset) {
            return () => {
                setUserData([]);
            };
        } else {
            return () => {
                getUser();
            }
        }
    }, [reset]);

    useEffect(() => {
        getUsecallBackUser();
    }, [getUsecallBackUser]);

    return (
        <div className='normal_hooks_wrapper'>
            <h1 className='text-center'>Normal Hooks</h1>
            <div className='d-flex flex-wrap'>
                <div className='hooks'>
                    <h1>useEffect Example</h1>
                    <ul>
                        <li>
                            <div>useEffect (Acts like componentDidMount)</div>

                            <div>It called single time after enter into the page.</div>
                            <div>It displays the user details first time</div>
                            <pre>{JSON.stringify(userData, null, 3)}</pre>
                        </li>
                        <li>
                            <div>useEffect (Acts like componentDidUpdate)</div>

                            <div>It called each time based on the dependency value changes.</div>
                            <div style={style} className='theme_box'>Inner text</div>
                            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Change {theme === 'dark' ? 'light' : 'dark'} theme</button>
                        </li>
                        <li>
                            <div>useEffect (Acts like componentWillUnmount)</div>

                            <div>It used to reset all of the states.</div>
                            <button onClick={() => setReset(!reset)}>Reset</button>
                        </li>
                    </ul>
                </div>

                <div className='hooks'>
                    <h1>useMemo Example</h1>
                    <UseMemoExample />
                </div>

                <div className='hooks'>
                    <h1>useCallback Example</h1>

                    <div>It returns the JSON based on the useCallback hook</div>
                    <pre>{JSON.stringify(userCallBackData, null, 3)}</pre>
                </div>

                <div className='hooks'>
                    <h1>useContext Example</h1>
                    <UseContextExample />
                </div>
            </div>
        </div>
    )
};

export default NormalHooks;