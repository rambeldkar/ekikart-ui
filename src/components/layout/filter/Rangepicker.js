import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
const dateFormat = "YYYY-MM-DD";

const Rangepicker = () => {
  const onChange = (dates, dateStrings) => {
    console.log("From: ", dates[0], ", to: ", dates[1]);
    console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
  };
  return (
    <RangePicker
      format={dateFormat}
      ranges={{
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "This Week": [moment().startOf("week"), moment().endOf("week")],
        "Last Week": [
          moment().subtract(1, "week").startOf("week"),
          moment().subtract(1, "week").endOf("week"),
        ],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
        "This Year": [moment().startOf("year"), moment().endOf("year")],
        "Last Year": [
          moment().subtract(1, "year").startOf("year"),
          moment().subtract(1, "year").endOf("year"),
        ],
      }}
      onChange={onChange}
    />
  );
};
export default Rangepicker;
