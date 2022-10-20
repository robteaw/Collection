import React, { useState } from "react";
import styled from "styled-components";

export default function Form() {
  // Form submit stays on same page
  const onSubmit = (e) => {
    e.preventDefault();
  };

  // Submit message
  const [message, setMessage] = useState(false);
  const showMessage = () => setMessage(!message);
  return (
    <Container>
      <form action="/contact" name="contact" method="POST" onSubmit={onSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            class="form-element"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-element"
            required
          />
        </div>
        {/* <Reason>
          <select name="reason" id="reason">
            <option disabled selected>
              Movie
            </option>
            <option value="1">#</option>
            <option value="2">#</option>
            <option value="3">#</option>
          </select>
        </Reason> */}
        <div class="form-text">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            class="form-element"
            required
          ></textarea>
        </div>
        <Submit>
          {message ? (
            <span className="message">
              <h2>Form Submitted!</h2>
            </span>
          ) : (
            <input type="submit" value="SEND" onClick={showMessage} />
          )}
        </Submit>
      </form>
    </Container>
  );
}

// styling
const Container = styled.div`
  form {
    max-width: 45rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .form-element {
      grid-column: 1 / -1;
      appearance: none;
      outline: none;
      border: none;
      display: block;
      width: 100%;
      border-radius: 8px;
      padding: 12px 16px;
      background-color: #f3f3f3;
      transition: 0.4s;
      &:focus {
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
      }
    }
    input,
    select {
      width: 100%;
      margin: 0.5rem 0;
      padding: 0.75rem;
      border-radius: 0.5rem;
    }
    input[type="text"]:focus {
      box-shadow: 0 0 0 2.5px rgb(9, 241, 86);
    }
    input[type="email"]:focus {
      box-shadow: 0 0 0 2.5px rgb(9, 241, 86);
    }
    textarea:focus {
      box-shadow: 0 0 0 2.5px rgb(9, 241, 86);
    }
    .form-text {
      grid-column: 1 / -1;
    }
    textarea {
      resize: vertical;
      min-height: 100px;
      padding: 0.75rem;
    }
  }
`;

// const Reason = styled.div`
//   select {
//     appearance: none;
//     border: 0;
//     font: inherit;
//     width: 100%;
//     border: 1px solid var(--selectColor);
//     background: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg)
//         no-repeat right 0.8em center / 1.4em,
//       linear-gradient(to left, var(--selectColor) 3em, var(--btnColor) 3em);
//     color: black;
//     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
//       0 4px 6px -2px rgba(0, 0, 0, 0.05);
//     cursor: pointer;
//     option {
//       color: (--textColor);
//       background-color: var(--textHover);
//     }
//     /* Remove focus outline */
//     &:focus {
//       outline: none;
//     }
//     /* Remove IE arrow */
//     &::-ms-expand {
//       display: none;
//     }
//   }
// `;

const Submit = styled.div`
  grid-column: 1 / -1;
  input[type="submit"] {
    color: var(--linkColor);
    background: transparent;
    font-size: 1rem;
    font-weight: 600;
    width: 10rem;
    padding: 0.7rem;
    margin-top: 1rem;
    border: 2px solid var(--linkColor);
    border-radius: 5rem;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: var(--btnColor2);
      background: var(--btnHover);
      border: 2px solid transparent;
    }
  }
  .message {
    color: var(--linkColor);
    font-weight: bold;
    transition: 0.4s;
  }
`;
