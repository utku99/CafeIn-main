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
                d="M36 42H12a6 6 0 01-6-6V12a6 6 0 016-6h24a6 6 0 016 6v24a6 6 0 01-6 6z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#c8e6c9"
                fillRule="nonzero"
                opacity={1}
            />
            <Path
                transform="matrix(.42 0 0 .42 12 12) translate(1 .21) translate(-25 -24.21)"
                d="M34.585 14.586L21.014 28.172l-5.601-5.588-2.826 2.832 8.432 8.412 16.396-16.414z"
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
        </Svg>
    )
}

export default SvgComponent
