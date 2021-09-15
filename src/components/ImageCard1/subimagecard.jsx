import React, { useEffect, useState } from "react";
// import "./imageCards.css";
import axios from "axios";

function Subimagecard() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    handleAxios();
  }, []);

  const handleAxios = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then((res) => setValue(res.data))
      .catch((err) => console.error(err));
  };

  console.log(value);

  return (
    <div>
      <ul className="row">
        {value.map((item) => (
          <li className="col-xs-12 col-sm-6 col-md-4">
            <div className="cnt-block equal-hight" style={{ height: "349" }}>
              <figure>
                <img src={item.thumbnailUrl} class="img-responsive" alt="jasonimages" />
              </figure>
              <h3>
                <a href="#">New page link</a>
              </h3>
              <p>{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subimagecard;
