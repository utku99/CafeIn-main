import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                transform="matrix(.43 0 0 .43 12 12) translate(-24.99 -25)"
                d="M43.125 2a4.857 4.857 0 00-3.438 1.438l-.812.812 6.875 6.875.813-.813a4.858 4.858 0 000-6.874A4.864 4.864 0 0043.124 2zm-5.781 4.031a1.005 1.005 0 00-.594.313L4.312 38.812a1.02 1.02 0 00-.28.438l-2 7.5a.997.997 0 00.261.957c.25.25.613.352.957.262l7.5-2a1.02 1.02 0 00.438-.282L43.656 13.25a1.006 1.006 0 00-1.406-1.438L9.969 44.094 5.906 40.03 38.188 7.75a1 1 0 00-.75-1.719h-.094z"
                strokeLinecap="butt"
                stroke="none"
                strokeWidth={1}
                strokeDasharray="none"
                strokeDashoffset={0}
                strokeLinejoin="miter"
                strokeMiterlimit={4}
                fill="#000"
                fillRule="nonzero"
                opacity={1}
            />
        </Svg>
    )
}

export default SvgComponent
