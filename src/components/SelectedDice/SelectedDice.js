import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import './SelectedDice.scss';

import Dice from 'components/Dice/Dice';

export default class SelectedDice extends Component {
  constructor(){
    super();

    this.displayDice = this.displayDice.bind(this);
  }

  render(){
    const dice = this.displayDice();

    return (
      <div className="col-xs-12 col-sm-6 col-md-6">
        <div className="selected-dice-container">
          <p>Selected Dice</p>

          <div className="selected-dice">
            {dice}
          </div>
        </div>
      </div>
    )
  }

  displayDice(){
    const context = this;
    const output = [];

    $.each(this.props.Dice.selected, function(i, item){
      output.push(<Dice key={i} index={i} diceData={item} {...context.props}  />);
    });

    return output;
  }
}

SelectedDice.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(SelectedDice);