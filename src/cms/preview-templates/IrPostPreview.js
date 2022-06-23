import React from "react";
import PropTypes from "prop-types";
import IrPost from "../../templates/ir-post";

const IrPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return <IrPost content={widgetFor("body")} description={entry.getIn(["data", "description"])} tags={tags && tags.toJS()} title={entry.getIn(["data", "title"])} />;
};

IrPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default IrPostPreview;
