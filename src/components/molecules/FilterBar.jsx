import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  CircleStackIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";

export function FilterBar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  //   h-[calc(100vh-2rem)]
  return (
    <div className=" w-full max-w-[20rem]">
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <Typography color="blue-gray" className="mr-auto font-normal">
                Color
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </ListItemPrefix>
                Green
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                </ListItemPrefix>
                Red
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </ListItemPrefix>
                Blue
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <Typography color="blue-gray" className="mr-auto font-normal">
                Price
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                500 - 1500
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Above 1500
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </div>
  );
}
