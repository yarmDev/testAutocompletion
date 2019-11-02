import React from "react";

class Li extends React.Component {
  state = {};
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
  componentDidMount() {
    const minutes = ["45", "15", "30"];
    if (!minutes.includes(this.props.text.split(":").pop())) {
      window.location.href = `#${this.props.text.substring(0, 2)}:00`;
    } else {
      window.location.href = `#${this.props.text}`;
    }
  }
  render() {
    return (
      <ul className="hoursUl">
        {this.renderLi().map((time, index) => (
          <li
            className={this.props.compare(time, this.props.text)}
            onClick={() => this.props.selectedText(time)}
            key={index}
            id={`${time}`}
          >
            {time}
          </li>
        ))}
      </ul>
    );
  }
}

export default Li;
