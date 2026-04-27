"use client";

import React, { useEffect } from 'react';

const NotFound = () => {



    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    }, []);


    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>Redirecting to home page...</p>
        </div>
    );
};

export default NotFound;