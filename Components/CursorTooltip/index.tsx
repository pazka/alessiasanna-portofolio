
import * as React from 'react'
import styled from 'styled-components';
import './../../Containers/App/style.scss'
import MouseTooltip from 'react-sticky-mouse-tooltip';

const Wrapper = styled.div`        
    #cursorModifier{
        cursor : crosshair
    }
    
    #tooltip{
        font-size : 0.7rem;
}
`;

class CursorTooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = { mouseX: 0, mouseY: 0 };
    }

    _onMouseMove(e) {
        this.setState({ mouseX: e.clientX, mouseY: e.clientY });
    }

    render() {
        return (
            <Wrapper>
                <div id={'cursorModifier'} onMouseMove={this._onMouseMove.bind(this)}>
                    {this.props.children} 
                    <MouseTooltip
                        visible={true}
                        offsetX={15}
                        offsetY={10}
                    >
                        <span id={'tooltip'}>{`${this.state.mouseX};${this.state.mouseY}`}</span>
                    </MouseTooltip>
                </div>
            </Wrapper>
        );
    }
}

export default CursorTooltip