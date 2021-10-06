import { Modal } from "./components/organisms/Modal";

export const ModalVisualization = () => {
  return (
    <Modal isOpen>
      <Modal.Header title={"Modal Title"} />
      <Modal.Content>
        <h4>Modal Content Title</h4>
        <p>
          Modal content ... Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Eos ratione provident ea sunt earum quidem cupiditate velit
          laborum tempore ullam aliquid animi, consectetur sed voluptatibus,
          nostrum odio veritatis? Alias, incidunt!
        </p>
      </Modal.Content>
      <Modal.Footer callToActionLabel={"Got it!"} />
    </Modal>
  );
};
