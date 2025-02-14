import SVGWrapper, { ExpandedSvgProps } from './SVGWrapper'

const Menu = ({ ...props }: ExpandedSvgProps) => {
    return (
        <SVGWrapper {...props}>
            <path d="M6 18L18 6M6 6L18 18" strokeLinecap="square" strokeLinejoin="bevel" />
        </SVGWrapper>
    )
}

export default Menu
