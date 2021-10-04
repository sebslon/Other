import { Modal } from "./components/Modal";

export const ModalVisualization = () => {
  return (
    <Modal>
      <Modal.Header title={"MODAL TITLE"} />
      <Modal.Content>
        <h1>Modal Content Title</h1>
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
