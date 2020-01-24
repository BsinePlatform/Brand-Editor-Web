import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const StoreDetails = ({ StoreDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={StoreDetails.avatar}
          alt={StoreDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{StoreDetails.name}</h4>
      <span className="text-muted d-block mb-2">{StoreDetails.jobTitle}</span>
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {StoreDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={StoreDetails.performanceReportValue}
          >
            <span className="progress-value">
              {StoreDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {StoreDetails.metaTitle}
        </strong>
        <span>{StoreDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

StoreDetails.propTypes = {
  /**
   * The user details object.
   */
  StoreDetails: PropTypes.object
};

StoreDetails.defaultProps = {
  StoreDetails: {
    name: "Sierra Brooks",
    avatar: require("./../../images/avatars/0.jpg"),
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default StoreDetails;
