import React, { useEffect, useRef } from 'react';

const ClickAwayEventListener = ({ children, onClickAway }) => {
    const childrenRef = useRef(null);

    // add ref to children element
    const childrenWithRef = React.cloneElement(children, { ref: childrenRef });

    useEffect(() => {  
        const handleClickAway = (event) => {
            if (childrenRef.current && !childrenRef.current.contains(event.target)) {
                onClickAway();
            }
        }

        document.addEventListener('click', handleClickAway);
        return () => document.removeEventListener('click', handleClickAway);
    },[])

    return (
        <>
            {childrenWithRef}
        </>
    );
};

export default ClickAwayEventListener;
