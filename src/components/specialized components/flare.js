import { useWindowWidth } from "@/utils/hooks/ResponsiveHook";

const Flare = ({ top, right, bottom, left }) => {
    const width = useWindowWidth()

    const getTop = () => {
        if (width < 720) {
            return top.sm
        } else if (width > 719 && width < 1024) {
            return top.md

        } else if (width >= 1024 && width < 1440) {
            return top.lg

        } else if (width >= 1440) {
            return top.xl
        }
    }

    const getBottom = () => {

    }

    const getRight = () => {

    }

    const getLeft = () => {
        if (width < 720) {
            return left.sm
        } else if (width > 719 && width < 1024) {
            return left.md

        } else if (width >= 1024 && width < 1560) {
            return left.lg
        }else if (width >= 1560 && width < 1920) {
            return left.xl
        }else if (width >= 1920) {
            return left.xxl
        }
    

    }

    const divStyle = {
        position: 'absolute',
        top: getTop(),
        // right,
        zIndex: '0 !important',
        left: getLeft(),
        // bottom,
        mixBlendMode: 'hard-light',
        opacity: 0.95,
        width: '100vw',
        maxWidth: '950px',
    };


    return (
        <img src={'/images/flares/purple_flare_circle.png'}
            style={divStyle}

        />
    )
}

export default Flare