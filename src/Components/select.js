import React, { useState } from "react";
import axios from "axios";
import { config } from "../App";

const SortSelect = ({ updateVids }) => {
    const [sortBy, setSortBy] = useState("releaseDate");

    const handleSelect = async (e) => {
      setSortBy(e.target.value);

      const url = `${config.endpoint}/videos?sortBy=${e.target.value}`;
      try {
        console.log(url);
        const res = await axios.get(url);
        updateVids(res.data.videos);
      } catch(err) {
        console.log(err);
      }
    };

    return (
        <select
          className="sort-select"
          defaultValue="releaseDate"
          value={sortBy}
          onChange={(e) => handleSelect(e)}
          sx={{ height: 35, width: 240, borderRadius: 6 }}
        >

          <option id="release-date-option" value="releaseDate">Sort By: Release Date</option>
          <option id="view-count-option" value="viewCount">View Count</option>
        </select>
    );
};

export default SortSelect;