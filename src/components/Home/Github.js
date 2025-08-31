import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{paddingBottom: "10px" }}>
      <h1 className="project-heading">
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="allan8araujo"
        blockSize={15}
        blockMargin={5}
        color="#353535ff"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
