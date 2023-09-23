import { useWindowWidth } from "@/utils/hooks/ResponsiveHook";
import styles from './star.module.scss'


const Star = ({ top, left, color, delay, size }) => {

    const starImage = () => {
        if (color == 'white') {
            return '/images/stars/white_star.png'
        }
        else if (color == 'grey') {
            return '/images/stars/grey_star.png'

        }
        else if (color == 'purple') {
            return '/images/stars/purple_star.png'
        }

    }

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
        zIndex: '0 !important',
        top: getTop(),
        left: getLeft(),
        width: '1vw  !important',
        maxWidth: size && size == 'small' ? '12px !important' : ' 20px !important',
        mixBlendMode: 'hard-light',
        opacity: color == 'grey' ? '0.5' : '0.95 !important',
        animationDelay: `${delay * 100}ms`
    };


    return (
        <img src={starImage()} style={style} aria-hidden="true" className={styles.star} />
    )
}

export default Star