import { ReactElement } from 'react'
import { WithHoverHOC } from './withHoverHOC';

interface Props {
    textColor?: string,
    textHover?: string
}

function MouseHoverComponent({ textColor, textHover, ...divProps }: Props): ReactElement {
    
    return (
        <div>
            <h2 {...divProps} style={{ color: textColor }}>Mouse { textHover ? 'Over' : 'Out'}</h2>
        </div>
    )
}

export default WithHoverHOC(MouseHoverComponent);