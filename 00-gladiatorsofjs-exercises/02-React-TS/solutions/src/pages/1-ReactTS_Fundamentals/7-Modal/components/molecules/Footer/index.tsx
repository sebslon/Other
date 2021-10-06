import { Component } from "react";

interface ModalFooterProps {
  callToActionLabel: string;
  toggle?: () => void;
}
export class ModalFooter extends Component<ModalFooterProps> {
  closeModal = () => {
    const { toggle } = this.props;
    if (toggle) toggle();
  };

  handleCallToAction = () => {
    alert("OK");
    this.closeModal();
  };

  render() {
    return (
      <div>
        <button onClick={this.closeModal}>Cancel</button>
        <button onClick={this.handleCallToAction}>
          {this.props.callToActionLabel}
        </button>
      </div>
    );
  }
}
