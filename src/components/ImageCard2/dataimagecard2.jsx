import React, { useEffect, useState } from "react";
import axios from "axios";

function Dataimagecard2() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    handleAxios();
  }, []);

  const handleAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then((res) => setValue(res.data))
      .catch((err) => console.error(err));
  };

  console.log(value);

  return (
    <div>
     
        <ul  class="row">
          {/* <!-- Team member --> */}
          {value.map((item) => (
          <li class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip">
              <div class="mainflip flip-0">
                <div class="frontside">
                  <div class="card">
                    <div class="card-body text-center">
                      <p>
                        <img
                          class=" img-fluid"
                          src={item.thumbnailUrl}
                          alt="card image"
                        />
                      </p>
                      <h4 class="card-title">{item.title}</h4>
                      <p class="card-text">
                        This is basic card with image on top, title, description
                        and button.
                      </p>
                      <a
                        href="https://www.fiverr.com/share/qb8D02"
                        class="btn btn-primary btn-sm"
                      >
                        <i class="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="backside">
                  <div class="card">
                    <div class="card-body text-center mt-4">
                      <h4 class="card-title">{item.title}</h4>
                      <p class="card-text">
                        This is basic card with image on top, title, description
                        and button.This is basic card with image on top, title,
                        description and button.This is basic card with image on
                        top, title, description and button.
                      </p>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="#"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="#"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="#"
                          >
                            <i class="fa fa-skype"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a
                            class="social-icon text-xs-center"
                            target="_blank"
                            href="#"
                          >
                            <i class="fa fa-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
           ))}
          {/* <!-- ./Team member --> */}
        </ul>
     
    </div>
  );
}

export default Dataimagecard2;
