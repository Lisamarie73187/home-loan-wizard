import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProp } from '../../ducks/reducer';

class WizardThree extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={this.props.updateProps}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={this.props.updateProps}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={this.props.updateProps}>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { prop } = state;

    return {
        prop
    }
}

export default connect (mapStateToProps, {updateProp} )(WizardThree);
