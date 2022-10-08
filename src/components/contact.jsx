import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Agende seu ensaio!</h2>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="social">
                    <ul>
                      <li>
                        <a
                          href="https://www.instagram.com/dianaomenafotografia/"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                           /dianaomenafotografia
                      </li>
                      <li>
                        <a
                          href="https://api.whatsapp.com/message/QRA5F4UDRDRFK1?autoload=1&app_absent=0"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <i class="fa fa-whatsapp" aria-hidden="true"></i>
                        </a>
                        {props.data ? props.data.phone : "loading"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2022 Landing Page criada por{" "}
            <a href="https://www.instagram.com/darlan_se/" rel="nofollow">
              Darlan Souza
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
