import { Component } from "react";

import { CTAButton, FooterContainer } from "./Footer.styles";

import { CloseButton } from "../../atoms/CloseButton";

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
      <FooterContainer>
        <CloseButton onClick={this.closeModal}>Cancel</CloseButton>
        <CTAButton onClick={this.handleCallToAction}>
          {this.props.callToActionLabel}
        </CTAButton>
      </FooterContainer>
    );
  }
}
