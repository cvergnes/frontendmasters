import { useParams } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";

const Details = () => {
  const [state, setState] = useState({ showModal: false });

  const toggleModal = () => setState({ showModal: !state.showModal });

  const { id } = useParams();

  return (
    <>
      <h1>lorem ipsum id : {id}</h1>
      <button onClick={toggleModal}>Adopt {id}</button>
      {state.showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {id}?</h1>
            <div className="buttons">
              <a href="https://bit.ly/pet-adopt">Yes</a>
              <button onClick={toggleModal}>No</button>
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default Details;
