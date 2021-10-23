import React, { Component, ReactElement } from "react";

import { Background, ModalContainer } from "./Modal.styles";

import { ModalContent } from "../../molecules/Content";
import { ModalFooter } from "../../molecules/Footer";
import { ModalHeader } from "../../molecules//Header";

interface ModalProps {
  isOpen?: boolean;
}

interface ModalState {
  isOpen: boolean;
}

export class Modal extends Component<ModalProps, ModalState> {
  static Content = ModalContent;
  static Footer = ModalFooter;
  static Header = ModalHeader;

  state: ModalState = {
    isOpen: this.props.isOpen || false,
  };

  toggle = () => {
    this.setState((state) => ({ isOpen: !this.state.isOpen }));
  };

  render() {
    const children = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child as ReactElement<any>, { toggle: this.toggle })
    );

    return (
      <>
        <button onClick={this.toggle}>Open modal</button>
        {this.state.isOpen ? (
          <>
            <Background onClick={this.toggle} />
            <ModalContainer>{children}</ModalContainer>
          </>
        ) : null}
      </>
    );
  }
}
