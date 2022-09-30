import React, { useState } from 'react';
import { useDidMount, useDidUpdate, useEffectOnceWhen, useIntervalWhen, useIsomorphicEffect, useLifecycleLogger } from 'rooks';

const DummyComponent = () => {
    useIsomorphicEffect(() => {
        console.log("Rendered")
    }, []);
    return <div>Hi from dummy component</div>
};

const RooksConcepts = () => {

    const [userData, setUserData] = useState([]);
    const [flag, setflag] = useState(false);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);
    const [when, setWhen] = useState(false);
    const [shouldRender, setRender] = useState(true);


    useDidMount(() => {
        getUser();
    });

    useDidUpdate(() => {
        if (flag) {
            setUserData([...userData, {
                "name": "Mugesh",
                "age": 20,
                "college": "PSR",
                "id": 3
            }])
        }
    }, [flag]);

    useEffectOnceWhen(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Countdown for 3 sec
    }, loading);

    useIntervalWhen(
        () => {
            setValue(value + 1);
        },
        1000, // run callback every 1 second
        when // start the timer when it's true
    );

    useLifecycleLogger("Demo", value);

    const getUser = async () => {
        try {
            const response = await fetch('http://localhost:8000/user_details');
            const json = await response.json();
            setUserData(json);
        } catch (error) {
            console.log("error", error);
        }
    };
    return (
        <div>
            <h1>Rooks concepts</h1>
            <div>Result of useDidMount</div>
            <pre>{JSON.stringify(userData, null, 3)}</pre>

            <div>Result of useDidUpdate</div>
            <button onClick={() => setflag(true)}>Update</button>

            <div>
                <h2>useEffectOnceWhen Example</h2>
                <div>
                    {loading
                        ? "Loading Component (will be gone in 3 secs)...."
                        : "Counter Component"}
                </div>
            </div>

            <div>
                <h2>Rooks: useIntervalWhen example</h2>
                <h2>Value: {value}</h2>
                <button onClick={() => setWhen(true)}> Start interval </button>
            </div>

            <div>
                <h2>Rooks: useIsomorphicEffect example</h2>
                <button onClick={() => setRender(!shouldRender)}>Render</button>

                <div>Below is displayed from the child component</div>
                {shouldRender && <DummyComponent />}
            </div>
        </div>
    )
};

export default RooksConcepts;