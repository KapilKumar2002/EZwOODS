import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function ProductTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }} >
      <Tabs value={value} onChange={handleChange} className="">
        <Tab label="Description" />
        <Tab label="Specification" />
        <Tab label="Reviews" />
      </Tabs>
    </Box>
  );
}
