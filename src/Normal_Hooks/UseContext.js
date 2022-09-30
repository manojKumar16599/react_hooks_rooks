import React, { useContext } from "react";

// Create a Context
const NumberContext = React.createContext();

const UseContextExample = () => {
    return (
        <NumberContext.Provider value={42}>
            <div>
                <Component1 />
            </div>
        </NumberContext.Provider>
    );
}

const Component1 = () => {
    const number = useContext(NumberContext);
    return (
        <div>
            <div>This is the child component and the value is {number}</div>
            <div>
                <h3>Nested child</h3>
                <Component2 />
            </div>
        </div>
    );
}

const Component2 = () => {
    const number = useContext(NumberContext);
    return (
        <div>This is the Nested child component and the value is {number}</div>
    );
}

export default UseContextExample;
