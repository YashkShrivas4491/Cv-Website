import './Cont.css';
import message from '../assets/message.png'
import { useForm } from "@formcarry/react";
  import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {

  
  const { submit } = useForm({
    id: "H4XHBEZxTQ",
  });

  const notify = () => {
      toast("⚡ Wow thanks for your Response 🚀!");
  }

    return (
      <div className="fm">
        <div className="left">
          <h1
            style={{
              color: "white",
            }}
          >
            Contact me ⚡
          </h1>
          <img src={message} alt="img" />
        </div>
        <div className="right">
          <form className="form" onSubmit={submit}>
            <label htmlFor="text">Name</label>
            <input id="text" type="text"/>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />

            <button type="submit" onClick={notify}><FontAwesomeIcon icon={faRocketchat}
              style={{marginLeft:"1em"}}
            />Send
            </button>
           
          </form>
        </div>
      </div>
    );
}

export default Contact
