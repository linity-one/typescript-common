import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Playlist = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props} viewBox="0 0 24 24">
            <path d="M1.79999 4.60734L3.63783 6.4789L8.23242 1.8" />
            <path d="M11.4486 4.32661H22.2" />
            <path d="M1.79999 12.4679L3.63783 14.3395L8.23242 9.66055" />
            <path d="M11.4486 12.1872H22.2" />
            <path d="M1.79999 20.3284L3.63783 22.2L8.23242 17.5211" />
            <path d="M11.4486 20.0477H22.2" />
        </SVGWrapper>
    )
}

export default Playlist
