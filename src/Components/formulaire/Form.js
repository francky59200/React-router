
import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

class Form extends React.Component {
  state = {
    inputValue: "",
    nouveauClient: []
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleClick = () => {
    const nouveauClient = [...this.state.nouveauClient];
    nouveauClient.push(this.state.inputValue);
    this.setState({ nouveauClient, inputValue: "" });
  };

  handleDelete = key => {
    const nouveauClient = [...this.state.nouveauClient];
    nouveauClient.splice(key, 1);
    this.setState({ nouveauClient });
  };

  handleEdit = (item, key) => {
    const nouveauClient = [...this.state.nouveauClient];
    nouveauClient.splice(item, 1, key);
    this.setState({ nouveauClient });
  };
  render() {
    return (
      <div className="form__router">
        <h3>Hello world</h3>
        <p>
          {this.state.nouveauClient.map((item, key) => (
            <li key={key}>
              <input
                className="input__item"
                value={item}
                onChange={e => this.handleEdit(key, e.target.value)}
              />
              <button onClick={this.handleDelete}>X</button>
            </li>
          ))}
        </p>
        <input
          value={this.state.inputValue}
          onChange={this.handleChange}
          placeholder="Please enter your name"
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

Form.propTypes = {
  inputValue: PropTypes.string,
  nouveauClient: PropTypes.array,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func
};

export default Form;
