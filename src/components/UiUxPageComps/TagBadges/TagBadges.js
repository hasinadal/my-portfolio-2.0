import React from "react";
import { Badge } from "react-bootstrap";

const TagBadges = ({ pageContentProps }) => {
  return (
    <div>
      <h6 className="mb-2">Tags</h6>
      <div className="d-flex gap-2 flex-wrap">
        {pageContentProps?.tags.map((item) => (
          <Badge bg="secondary" key={item.tag}>
            {item.tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TagBadges;
