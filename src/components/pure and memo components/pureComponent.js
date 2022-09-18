import React, { PureComponent } from 'react'

class pureComponent extends PureComponent {
    render() {
        console.log('pure')
        return (
            <div>
                {this.props.name}
                <p>
                    {this.props.sr}
                </p>
            </div>
        )
    }
}

export default pureComponent

