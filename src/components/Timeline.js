import Chart from "react-google-charts";

function Timeline(props) {
  return (
    <Chart
      width={"100%"}
      height={"200px"}
      chartType="Timeline"
      loader={<div>Loading Chart</div>}
      data={[
        [
          { type: "string", id: "Room" },
          { type: "string", id: "Name" },
          { type: "date", id: "Start" },
          { type: "date", id: "End" },
        ],
        [
          "Time Spent",
          "Hours",
          new Date(0, 0, 0, 12, 30, 0),
          new Date(0, 0, 0, 15, 0, 0),
        ],
        [
          "Time Spent",
          "Hours",
          new Date(0, 0, 0, 16, 30, 0),
          new Date(0, 0, 0, 18, 0, 0),
        ],
      ]}
      options={{
        timeline: {
          singleColor: "#8d8",
        },
      }}
      rootProps={{ "data-testid": "6" }}
    />
  );
}

export default Timeline;
