import { Component } from "react";

import { CloseButton, HeaderContainer } from "./Header.styles";

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
    if(!this.props.toggle) return null;
    
    return (
      <HeaderContainer>
        <h3>{this.props.title}</h3>
        <CloseButton onClick={() => this.closeModal()}>Close</CloseButton>
      </HeaderContainer>
    );
  }
}
