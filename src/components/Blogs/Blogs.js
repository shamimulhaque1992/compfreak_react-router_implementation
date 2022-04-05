import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <Accordion className="w-10/12 m-auto pt-56 acordion-container" defaultActiveKey={["0"]} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is context api and why it's used for?</Accordion.Header>
        <Accordion.Body>
          Context api is a solution for props drilling. In react application data flows top to bottom. That occars a problem of unwanted shearing of props. But for certain type of props that could be cumbersome. Context api gives us a solution to shear those props between two components without shearing those props through the components inbetween. It is mainly used when we have to produce global variables that need to be sheared to all available components but without the interface of the components inbetween.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is semantic tag?</Accordion.Header>
        <Accordion.Body>
          Symantic tags are those tags which name are self describing. That means this tags are written in a way by which human as well as machine cah understand those tags very easily. This tags clearly define the purpose of them. It also describe the type of content that the element should contain. <br></br>
          <strong>Example:</strong> header, nav, article, section, aside, footer, etc.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blogs;
