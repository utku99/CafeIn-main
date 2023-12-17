import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                transform="matrix(.91 0 0 .91 12 12) translate(-12 -12)"
                d="M14.5 4.707V1h-13v22h13v-3.293M6.5 12h16m-6-6l6 6-6 6"
                strokeLinecap="butt"
                stroke="#000"
                strokeWidth={2}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="round"
                strokeMiterlimit={4}
                fill="none"
                fillRule="nonzero"
                opacity={1}
            />
        </Svg>
    )
}

export default SvgComponent
