import React from 'react'

interface titleType{
  title: string
}

class BaseHeader extends React.Component<titleType> {
  constructor(props:titleType){
    super(props)
    this.state = {
      title: "BaseHeader"
    }
  }

  render() {
    return (
      <header className="base-header">
        <div className="header--body">
          <h3 className="header__title">
            { this.props.title }
          </h3>
        </div>
      </header>
    )
  }
}

export default BaseHeader
