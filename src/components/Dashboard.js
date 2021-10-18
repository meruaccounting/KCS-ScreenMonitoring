import react from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-head">
          <h1 style={{ float: "left", display: "inline" }}>
            Employee Dashboard
          </h1>
          <h3 style={{ float: "right", display: "inline" }}>
            All times are UTC
          </h3>
        </div>

        <table>
          <tr>
            <th>Company</th>
            <th>Last active</th>
            <th>Today</th>
            <th>Yesterday</th>
            <th>This week</th>
            <th>This month</th>
          </tr>
          <tr>dynamically add data from db</tr>
          <tr>vai props. show from header only</tr>
          <tr>like from the restaurant page.</tr>
          <tr>(w3 schools)</tr>
        </table>
      </div>
    </div>
  
  );
};

export default Dashboard;
