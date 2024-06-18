import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function RatingReadOnly(props) {
  const { defaultValue } = props;
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read"
        defaultValue={defaultValue}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
}
