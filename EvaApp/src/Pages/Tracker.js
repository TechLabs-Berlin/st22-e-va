import FlowType from "../Component/TrackerComponent/FlowType";
import Exercise from "../Component/TrackerComponent/Exercise";
import { Stack } from "@mui/material";

const Track = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <FlowType />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Exercise />
      </Stack>
    </div>
  );
};

export default Track;
