import "./serviceitems.css";
import { IconHeartPlus } from "@tabler/icons";
import { useDispatch } from "react-redux";
import { addService } from "../../redux/serviceSystem";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function ServiceItems(props) {
  const dispatch = useDispatch();

  const services = useSelector((state) => state.serviceSystem.services);

  const handleClick = () => {
    dispatch(addService(props));
    //check if the service is already in the list
    const isServiceInList = services.find(
      (service) => service.text === props.text
    );
    if (isServiceInList) {
      toast.error("Service already in list");
    } else {
      toast.success("Service added to list");
    }
  };
  return (
    <div className="service_image-text">
      <div className="service_image">
        <img src={props.src} alt="drug pill" />
      </div>
      <div className="service_text">
        <p>{props.text}</p>
      </div>
      <IconHeartPlus color="#8E3129" cursor={"pointer"} onClick={handleClick} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  );
}

export default ServiceItems;
