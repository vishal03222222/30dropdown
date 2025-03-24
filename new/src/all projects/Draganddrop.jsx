import React, { Component } from 'react';

class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftItems: ['list1', 'list2', 'list3', 'list4'],
      rightItems: []
    };
  }

  onDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  onDrop = (e, box) => {
    const item = e.dataTransfer.getData("text");
    this.setState((prevState) => {
      const leftItems = prevState.leftItems.filter(i => i !== item);
      const rightItems = prevState.rightItems.filter(i => i !== item);

      if (box === 'right') {
        return {
          leftItems,
          rightItems: [...rightItems, item]
        };
      } else {
        return {
          leftItems: [...leftItems, item],
          rightItems
        };
      }
    });
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2 style={styles.title}>29. Drag and Drop</h2>
        <div id="block" style={styles.block}>
          <div
            id="left"
            style={styles.leftRight}
            onDrop={(e) => this.onDrop(e, 'left')}
            onDragOver={this.onDragOver}
          >
            {this.state.leftItems.map((item, index) => (
              <div
                key={index}
                className="one"
                draggable="true"
                onDragStart={(e) => this.onDragStart(e, item)}
                style={styles.one}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            id="right"
            style={styles.leftRight}
            onDrop={(e) => this.onDrop(e, 'right')}
            onDragOver={this.onDragOver}
          >
            {this.state.rightItems.map((item, index) => (
              <div
                key={index}
                className="one"
                draggable="true"
                onDragStart={(e) => this.onDragStart(e, item)}
                style={styles.one}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    color: 'red',
    textAlign: 'center',
    textDecoration: 'underline',
    marginBottom: '20px'
  },
  block: {
    marginLeft: '400px',
    marginTop: '50px',
    width: '500px',
    display: 'flex'
  },
  leftRight: {
    border: '2px solid red',
    padding: '10px',
    margin: 'auto',
    height: '160px',
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  one: {
    width: '180px',
    margin: '10px',
    height: '30px',
    textAlign: 'center',
    color: 'aliceblue',
    backgroundColor: 'black',
    cursor: 'move'
  }
};

export default DragAndDrop;
