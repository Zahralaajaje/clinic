import React, { useState } from "react";
import "./modal.css";
import { IconHeartPlus, IconX, IconTrashX } from "@tabler/icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeService } from "../../redux/serviceSystem";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const services = useSelector((state) => state.serviceSystem.services);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const dispatch = useDispatch();

  return (
    <>
      <IconHeartPlus cursor={"pointer"} onClick={toggleModal} />

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Services</h2>
            <div className="modal-services">
              {services.map((service) => (
                <div className="modal-service">
                  <img src={service.src} alt="drug pill" />
                  <p>{service.text}</p>
                  <IconTrashX
                    onClick={() => dispatch(removeService(service))}
                    cursor={"pointer"}
                  />
                </div>
              ))}
            </div>
            <IconX
              className="close-modal"
              onClick={toggleModal}
              size={40}
              cursor={"pointer"}
            />
          </div>
        </div>
      )}
    </>
  );
}
