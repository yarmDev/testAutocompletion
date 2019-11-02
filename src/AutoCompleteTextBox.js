import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class AutoCompleteTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      suggestions: [],
      text: ""
    };
  }

  getSimpson = y => {
    if (y.length === 0) {
      return false;
    }
    axios
      .get(`/api/places?search=${y}`, {})
      .then(data => {
        console.log(data.data);
        this.setState({
          suggestions: data.data.places.map(x => x)
        });
      })
      .catch(err => console.error(err));
  };

  onTextChange = e => {
    const value = e.target.value;
    this.getSimpson(value);
    let suggestions = [];
    if (value.length > 0) {
      suggestions = this.state.items;
    }
    this.setState(() => ({
      suggestions,
      text: value
    }));
  };

  suggestionsSelected = x => {
    this.setState(() => ({
      text: x.name,
      suggestions: []
    }));
    this.props.newArrival(x);
  };

  renderSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return false;
    }
    return (
      <ul className="UlSuggestions">
        {suggestions.map(x => (
          <li
            className="LiSuggestions"
            key={x.id}
            onClick={() => this.suggestionsSelected(x)}
          >
            {x.name}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <input value={text} onChange={this.onTextChange} type="text" />

        {this.renderSuggestions()}
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    newArrival: x => {
      dispatch({ type: "ADD_ARRIVAL_NAME_1", arrival: x.name });
      dispatch({ type: "ADD_ARRIVAL_ID_1", id: x.id });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AutoCompleteTextBox);
