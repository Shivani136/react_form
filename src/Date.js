import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

function Dates() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker
      class="form-control"
      placeholder="Enter DOB"
      // value={this.state.dob}
      // onChange={this.onChangeName}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Dates;