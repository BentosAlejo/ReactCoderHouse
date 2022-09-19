import React from 'react';

const Components = () => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="d-block user-select-none"
                width="100%"
                height={200}
                aria-label="Placeholder: imagen del producto"
                focusable="false"
                role="img"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 318 180"
                style={{ fontSize: "1.125rem", textAnchor: "middle" }}
                >
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                    Imagen del producto
                </text>
            </svg>
        </>
    );
}

export default Components;
