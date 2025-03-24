import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: this.props.defaultOption || "Select an option",
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleOptionClick = (option) => {
    this.setState({
      selectedOption: option,
      isOpen: false,
    });

    if (this.props.onSelect) {
      this.props.onSelect(option);
    }
  };

  render() {
    const { options } = this.props;
    const { isOpen, selectedOption } = this.state;

    return (
      <div className="dropdown-container" style={styles.container}>
        <div
          className="dropdown-selected"
          onClick={this.toggleDropdown}
          style={styles.selected}
        >
          {selectedOption}
          <i
            className={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
            style={styles.icon}
          ></i>
        </div>
        {isOpen && (
          <ul className="dropdown-options" style={styles.optionsList}>
            {options.map((option, index) => (
              <li
                key={index}
                className="dropdown-option"
                onClick={() => this.handleOptionClick(option)}
                style={styles.option}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    position: "relative",
    width: "200px",
    margin: "20px",
  },
  selected: {
    padding: "10px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginLeft: "10px",
  },
  optionsList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    borderTop: "none",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  option: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #ccc",
  },
};

export default Dropdown;
