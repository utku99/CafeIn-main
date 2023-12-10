import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={30}
            height={30}
            viewBox="0 0 50 50"
            {...props}
        >
            <Path d="M0 9v2h50V9zm0 15v2h50v-2zm0 15v2h50v-2z" />
        </Svg>
    )
}

export default SvgComponent
