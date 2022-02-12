import React, { useEffect, useState } from 'react';

const PageScroll = () => {
    const [pageHight, setPageHight] = useState(0)
    const handleHight = () => setPageHight(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleHight)
    }, [])


    return {pageHight}
};

export default PageScroll;