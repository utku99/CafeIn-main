import React from "react";

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1-9h6V1M.333 7H11M7 3l4 4-4 4m-9 0l-9-2V-9l9-2v22z"
                transform="matrix(.83 0 0 .83 12 12)"
            ></path>
            <circle
                r="1.25"
                transform="matrix(.83 0 0 .83 12 12) translate(-5.75)"
            ></circle>
        </svg>
    );
}

export default Icon;