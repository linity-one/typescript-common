import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Link = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props} viewBox="0 0 24 24">
            <path
                d="M13.3817 10.6935L12.1867 9.53226H8.9751L3 15.3387V18.3871L5.6888 21H8.3029L11.888 17.5161M10.6183 13.3065L11.8133 14.4677H15.0249L21 8.66129V5.6129L18.3112 3H15.6971L12.112 6.48387"
                stroke="currentColor"
            />
        </SVGWrapper>
    )
}

export default Link
