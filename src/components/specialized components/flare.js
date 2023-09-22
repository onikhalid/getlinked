import { useWindowWidth } from "@/utils/hooks/ResponsiveHook";



const Flare = ({ top, right, bottom, left }) => {
    const width = useWindowWidth()

    const getTop = () => {
        if (width < 520) {
            return top.xs
        } else if (width >= 520 && width < 650) {
            return top.sm

        } else if (width >= 650 && width < 780) {
            return top.md

        } else if (width >= 780 && width < 1120) {
            return top.tab

        } else if (width >= 1120 && width < 1550) {
            return top.lg

        } else if (width >= 1550 && width < 2000) {
            return top.xl
        }
        else if (width >= 2000) {
            return top.xxl
        }
    }


    const getLeft = () => {
        if (width < 520) {
            return left.xs
        } else if (width >= 520 && width < 650) {
            return left.sm

        } else if (width >= 650 && width < 780) {
            return left.md

        } else if (width >= 780 && width < 1120) {
            return left.tab

        } else if (width >= 1120 && width < 1550) {
            return left.lg

        } else if (width >= 1550 && width < 2000) {
            return left.xl
        }
        else if (width >= 2000) {
            return left.xxl
        }
    }

    const style = {
        position: 'absolute',
        top: getTop(),
        zIndex: '0 !important',
        left: getLeft(),
        mixBlendMode: 'hard-light',
        opacity: '0.95 !important',
        width: '100vw',
        maxWidth: '700px !important',
    };


    return (
        <img src={'/images/flares/purple_flare_circle.png'} style={style} aria-hidden="true" />
    )
}

export default Flare