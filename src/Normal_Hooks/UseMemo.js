import React, { useMemo, useState } from 'react';

// function to square the value
const squareNum = (number) => {
    return Math.pow(number, 2);
}

const UseMemoExample = () => {
    const [number, setNumber] = useState(0)
    // Using useMemo, it'll call each time the value of number has changes
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number])

    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }

    return (
        <div>
            <h3>Square the given number</h3>
            <input type="number" placeholder="Enter a number"
                value={number} onChange={onChangeHandler}>
            </input>

            <div>OUTPUT: {squaredNum}</div>
        </div>
    );
}

export default UseMemoExample;
