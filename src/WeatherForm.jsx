import React from "react";

const WeatherForm = props => {
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="exampleInputCity"
          aria-describedby="cityHelp"
          placeholder="Enter city"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default WeatherForm;
