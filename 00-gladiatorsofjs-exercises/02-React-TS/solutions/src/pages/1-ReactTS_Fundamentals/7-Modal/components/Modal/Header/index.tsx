import { Component } from "react";

interface ModalHeaderProps {
  title: string;
  toggle?: () => void;
}
export class ModalHeader extends Component<ModalHeaderProps> {
  closeModal = () => {
    const { toggle } = this.props;
    if (toggle) toggle();
  };

  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <button onClick={() => this.closeModal()}>Close Modal</button>
      </div>
    );
  }
}
