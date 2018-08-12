import React, {Component} from 'react';

class LargeScreenMenu extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
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
    );
  }
}

export default LargeScreenMenu;
