import { Component } from "react";

import { ModalContent } from "./Content";
import { ModalFooter } from "./Footer";
import { ModalHeader } from "./Header";

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

  toggle() {
    this.setState((state) => ({ isOpen: !this.state.isOpen }));
  }

  render() {
    return <div></div>;
  }
}
