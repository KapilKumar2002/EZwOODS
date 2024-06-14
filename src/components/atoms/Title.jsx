import React from "react";

const Title = (props) => {
  const { title } = props;
  return (
    <div className="flex items-center gap-4">
      <div className="h-10 w-4 bg-primaryColor rounded-md"></div>
      <h1 className="text-xl font-semibold font-headingFont">{title}</h1>
    </div>
  );
};

export default Title;
