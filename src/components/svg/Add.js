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
                transform="matrix(.42 0 0 .42 12 12) translate(-24 -24)"
                d="M44 24c0 11.045-8.955 20-20 20S4 35.045 4 24 12.955 4 24 4s20 8.955 20 20z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#4caf50"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.42 0 0 .42 12 12) translate(-24 -24)"
                d="M21 14h6v20h-6V14z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#fff"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.42 0 0 .42 12 12) translate(-24 -24)"
                d="M14 21h20v6H14v-6z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#fff"
                fillRule="nonzero"
                opacity={1}
            />
        </Svg>
    )
}

export default SvgComponent
