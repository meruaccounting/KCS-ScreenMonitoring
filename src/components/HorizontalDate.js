import DatePicker from "react-horizontal-datepicker";

function HorizontalDate(props) {
  return (
    <div className="calender">
      <table className="calender-wrapper">
        <tbody>
          <tr>
            <td className="day1">
              <a href="">day-1</a>
            </td>
            <td className="day1">
              <a className="day" href="">
                day-2
              </a>
            </td>
            <td className="day1">
              <a className="day" href="">
                day-3
              </a>
            </td>
            <td className="day1">
              <a className="day" href="">
                day-4
              </a>
            </td>
            <td className="day1">
              <a className="day" href="">
                day-5
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HorizontalDate;
// <div className="horizontal-date">
//   <DatePicker endDate={6}></DatePicker>
// </div>
