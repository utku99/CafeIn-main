import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={35}
            height={35}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                transform="matrix(.31 0 0 .31 12 12) translate(-7 9.5) translate(-25 -41.5)"
                d="M25 52h4l-9 9-9-9h4V24a2 2 0 012-2h22v10H25v20z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#72caaf"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.31 0 0 .31 12 12) translate(7 -9.5) translate(-39 -22.5)"
                d="M39 12h-4l9-9 9 9h-4v28a2 2 0 01-2 2H25V32h14V12z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#72caaf"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.31 0 0 .31 12 12) translate(7 -9.5) translate(-39 -22.5)"
                d="M44.5 38H29a4 4 0 00-4 4h22a2 2 0 002-2V12h4l-9-9-3 3 3.414 3.414A2 2 0 0145 10.828V37.5a.5.5 0 01-.5.5z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#5dbc9d"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.31 0 0 .31 12 12) translate(-7 9.5) translate(-25 -41.5)"
                d="M19.5 26H35a4 4 0 004-4H17a2 2 0 00-2 2v28h-4l9 9 3-3-3.414-3.414A2 2 0 0119 53.172V26.5a.5.5 0 01.5-.5z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#97e0bb"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.31 0 0 .31 12 12) translate(7 -9.5) translate(-39 -22.5)"
                d="M39 25.016V12h-4l9-9 9 9h-4v28a2 2 0 01-2 2H25V32h14v-2.984"
                strokeLinecap="round"
                stroke="#8d6c9f"
                strokeWidth={2}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="round"
                strokeMiterlimit={10}
                fill="none"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.31 0 0 .31 12 12) translate(-7 9.5) translate(-25 -41.5)"
                d="M25 42v10h4l-9 9-9-9h4V24a2 2 0 012-2h22"
                strokeLinecap="butt"
                stroke="#8d6c9f"
                strokeWidth={2}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="round"
                strokeMiterlimit={10}
                fill="none"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.31 0 0 .31 12 12) translate(-32 -32)"
                d="M28 46v2a1 1 0 002 0v-2a1 1 0 00-2 0zm5 0v2a1 1 0 002 0v-2a1 1 0 00-2 0zm5 0v2a1 1 0 002 0v-2a1 1 0 00-2 0zm5 0v2a1 1 0 002 0v-2a1 1 0 00-2 0zm5 0v2a1 1 0 002 0v-2a1 1 0 00-2 0zM14 16v2a1 1 0 002 0v-2a1 1 0 00-2 0zm5 0v2a1 1 0 002 0v-2a1 1 0 00-2 0zm5 0v2a1 1 0 002 0v-2a1 1 0 00-2 0zm5 0v2a1 1 0 002 0v-2a1 1 0 00-2 0zm5 0v2a1 1 0 002 0v-2a1 1 0 00-2 0z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#8d6c9f"
                fillRule="nonzero"
                opacity={1}
            />
        </Svg>
    )
}

export default SvgComponent
