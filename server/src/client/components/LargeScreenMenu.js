import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class LargeScreenMenu extends Component{
  constructor(props){
    super(props);
  }
  static propTypes = {
    userCategories: PropTypes.array
}

static defaultProps = {
    userCategories: []
}
  render(){
    return(
      <Fragment>
          <div className="imageRow">
            {
                this.props.menuItems.map((imageData)=>{
                  return(
                    <div key={imageData.href} className="imageColumn">
                        <div className="imageContainer" onClick={() => { this.props.history.push(imageData.href) }}>
                          <img src={require("../images/" + imageData.imageName)} alt="Avatar" className="image" style={{width:"100%"}}/>
                          <div className="middle">
                            <div className="imageTextContainer">
                              <div className="imageText">{imageData.imageText}</div>
                            </div>
                          </div>
                        </div>
                    </div>
                  );
                })
            }
          </div>
      </Fragment>
    );
  }
}

export default LargeScreenMenu;
