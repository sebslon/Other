import { Component } from "react";

export class ModalContent extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
