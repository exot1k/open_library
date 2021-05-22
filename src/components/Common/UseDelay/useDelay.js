import React, { useState, useEffect } from 'react';

export default function useDelay(value, delay) {

    const [delayValue, setDelayValue] = useState(value);

    useEffect(
        () => {

            const handler = setTimeout(() => {
                setDelayValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        },
        [value]
    );

    return delayValue;
}