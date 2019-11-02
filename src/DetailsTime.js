import React from "react";
import "./DetailsTime.css";
import clock from "./clock.png";
import Li from "./Li";
import { connect } from "react-redux";

class DetailsTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: false,
      lastSearchtTime: ""
    };
    this.myRef = React.createRef();
  }
  changeDisplay = () => {
    this.setState({
      isDisplay: !this.state.isDisplay
    });
    this.focusTextInput();
  };
  renderLi = () => {
    let array = [];
    for (let index = 0; index < 24; index++) {
      if (index < 10) {
        array.push(`0${index}:00`);
        array.push(`0${index}:15`);
        array.push(`0${index}:30`);
        array.push(`0${index}:45`);
      } else {
        array.push(`${index}:00`);
        array.push(`${index}:15`);
        array.push(`${index}:30`);
        array.push(`${index}:45`);
      }
    }
    return array;
  };

  compare = (a, b) => {
    if (a === b) {
      return "hoursLi selected";
    } else {
      return "hoursLi";
    }
  };
  redirection = (a, b) => {
    if (a === b) {
      window.location.href = `#${b}`;
    } else {
      window.location.href = `#${b.substring(0, 2)}:00`;
    }
  };

  selectedText = x => {
    this.setState({
      isDisplay: false
    });
    this.props.newTime(x);
  };
  onTextChange = e => {
    const value = e.target.value;
    this.props.newTime(value);
  };
  focusTextInput = () => {
    this.myRef.current.focus();
  };

  render() {
    const { time } = this.props;
    return (
      <>
        <div className="clock">
          <input
            className="input-text"
            type="text"
            value={time}
            onChange={this.onTextChange}
            ref={this.myRef}
          />
          <button className="hours-button" onClick={this.changeDisplay}>
            <img src={clock} alt="logo" />
          </button>
          {this.state.isDisplay && (
            <Li
              compare={this.compare}
              text={this.props.time}
              selectedText={this.selectedText}
            />
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.time
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newTime: x => {
      dispatch({ type: "ADD_TIME", time: x });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsTime);
