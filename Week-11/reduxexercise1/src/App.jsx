import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux/action";

const StepCounter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: actions.INC_STEP });
  };
  const reset = () => {
    dispatch({ type: actions.RESET_STEP });
  };

  return (
    <div className="App">
      <h2>You've walked {count} steps today!</h2>
      <Grid container justifyContent="center" direction="column" spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={increment}
            sx={{
              borderRadius: 0,
              width: 300,
              height: 50,
              backgroundColor: "#5e5eb0",
            }}
          >
            Add a Step
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={reset}
            sx={{ borderRadius: 0, width: 300, height: 50, color: "black" }}
          >
            Reset Steps
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepCounter;
