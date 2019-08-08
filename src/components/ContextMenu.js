import React from "react";

import "./ContextMenu.scss";

class ContextMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    document.addEventListener("contextmenu", this._handleContextMenu);
    document.addEventListener("click", this._handleClick);
    document.addEventListener("scroll", this._handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("contextmenu", this._handleContextMenu);
    document.removeEventListener("click", this._handleClick);
    document.removeEventListener("scroll", this._handleScroll);
  }

  _handleContextMenu = event => {
    event.preventDefault();

    const clickX = event.clientX;
    const clickY = event.clientY;

    const { id } = this.props;

    const bounds = document.getElementById(id).getBoundingClientRect();
    const isInElem =
      clickX >= bounds.left &&
      clickX <= bounds.right &&
      clickY <= bounds.bottom &&
      clickY >= bounds.top;

    if (!isInElem) {
      this.setState({ visible: false });
      return;
    }

    this.setState({ visible: true });

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = this.root.offsetWidth;
    const rootH = this.root.offsetHeight;

    const right = screenW - clickX > rootW;
    const left = !right;
    const top = screenH - clickY > rootH;
    const bottom = !top;

    if (right) {
      this.root.style.left = `${clickX + 5}px`;
    }

    if (left) {
      this.root.style.left = `${clickX - rootW - 5}px`;
    }

    if (top) {
      this.root.style.top = `${clickY + 5}px`;
    }

    if (bottom) {
      this.root.style.top = `${clickY - rootH - 5}px`;
    }
  };

  _handleClick = event => {
    const { visible } = this.state;
    const wasOutside = !(event.target.contains === this.root);

    if (wasOutside && visible) this.setState({ visible: false });
  };

  _handleScroll = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { buttons } = this.props;

    return (
      (visible || null) && (
        <div
          ref={ref => {
            this.root = ref;
          }}
          className="contextMenu"
        >
          {buttons.map(btn => (
            <div
              className="contextMenu--option"
              onClick={btn.action}
              key={btn.text}
            >
              {btn.text}
            </div>
          ))}
        </div>
      )
    );
  }
}

export default ContextMenu;
