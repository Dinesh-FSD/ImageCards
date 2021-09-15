import React from 'react';
import "./imageCards.css";
import Subimagecard from './subimagecard';

function ImageCards() {

  return (
    <div>
      
      <section class="our-webcoderskull padding-lg">
        <div class="container">
          <div class="row heading heading-icon">
            <h2>Our Team</h2>
          </div>

          <Subimagecard />

        </div>
      </section>
    </div>
  );
}

export default ImageCards;
