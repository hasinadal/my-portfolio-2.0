import React from "react";
import UiUxPageButton from "../Button/UiUxPageButton";

const ButtonsGroup = ({ pageContentProps }) => {
  return (
    <div className="button-group d-flex flex-column gap-2 mb-4">
      {pageContentProps.buttonsGroup.View && (
        <UiUxPageButton url={pageContentProps.FigmaDesignLink} name="View" />
      )}
      {pageContentProps.buttonsGroup.Download && (
        <UiUxPageButton
          url={pageContentProps.FigmaDesignLink}
          name="Download"
        />
      )}
      {pageContentProps.buttonsGroup.Buy && (
        <UiUxPageButton
          url="https://tabrezdal.gumroad.com/l/hmxix"
          name="Buy"
        />
      )}
    </div>
  );
};

export default ButtonsGroup;
