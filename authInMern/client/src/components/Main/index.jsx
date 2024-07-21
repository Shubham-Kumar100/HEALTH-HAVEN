// Import necessary libraries
import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from "./styles.module.css"; // Import styles from the module

// Main component
const Main = () => { 

  const handleSubmit = () => {
    // Get values from input fields
    const caloriesValue = document.getElementById("caloriesValue").value;
    const sleepValue = document.getElementById("sleepValue").value;
    const stepsValue = document.getElementById("stepsValue").value;
    const waterValue = document.getElementById("waterValue").value;
    const weightValue = document.getElementById("weightValue").value;
    const workoutValue = document.getElementById("workoutValue").value;
  
    // Get the present day date
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  
    // Create an object with the values and the present day date
    const data = {
      caloriesValue: caloriesValue,
      sleepValue: sleepValue,
      stepsValue: stepsValue,
      waterValue: waterValue,
      weightValue: weightValue,
      workoutValue: workoutValue,
      formattedDate: formattedDate,
    };
    
  
    // Log values to the console
    console.log("Data to be sent:", data);
  
    // Assuming your backend endpoint is 'https://example.com/api/saveData'
    const backendEndpoint = 'http://localhost:8080/save';
  
    // Use Axios to send a POST request to the backend
    axios.post(backendEndpoint, data)
      .then(response => {
        console.log("Response from the backend:", response.data);
        // Handle success if needed
      })
      .catch(error => {
        console.error("Error sending data to the backend:", error);
        // Handle error if needed
      });
  };

  

  
  
  const scrollToTargets = () => {
    const targetsSection = document.getElementById(styles.targets);
  
    if (targetsSection) {
      targetsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById(styles.footer);
  
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // Redirect to the login page after logout
  };


  // JSX structure
  return (
    <div className={styles.main_container}>
      <section id={styles['nav-bar']}>
  <nav className={`${styles.navbar} ${styles['navbar-expand-lg']} ${styles['navbar-light']}`}>
    <div className={styles['container-fluid']}>
      <div className={styles['navbar-header']}>
        <a className={styles['navbar-brand']} href="#"><img src="icons/logo.png" alt="Logo" /></a>
      </div>
      
      {/* Navigation links on the right */}
      <div className={`${styles['navbar-links']} ${styles['navbar-right']}`}>
        <ul className={styles['navbar_nav']}>
          <li className={styles['nav-item']}>
            <a className={styles['nav-link']} href="#">HOME</a>
          </li>
          <li className={styles['nav-item']}>
            <a className={styles['nav-link']} href="#" onClick={scrollToTargets}>TARGETS</a>
          </li>
          <li className={styles['nav-item']}>
            <a className={styles['nav-link']} href="#">EXERCISES</a>
          </li>
          <li className={styles['nav-item']}>
            <a className={styles['nav-link']} href="#">GO TO CART</a>
          </li>
          <li className={styles['nav-item']}>
            <a className={styles['nav-link']} href="#" onClick={scrollToContact}>CONTACT</a>
          </li>
        </ul>
      </div>

      {/* Logout button on the right */}
      <div className={styles['navbar-logout']}>
        <button className={styles['white_btn']} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  </nav>
</section>




      {/* Banner section */}
      <section id={styles.banner}>
        <div className={styles.container_fluid}>
          <div className={styles.row}>
            <div className={styles.col_md_6}>
              
              <p className={styles.promo_title}>Health and Fitness goes hand in hand</p>
              <p>Experience the overall development of your health with us</p>
            </div>
            <div className={styles.col_md_6}>
              <img src="./icons/ex.png" className={styles.img_fluid} alt="Example Image"></img>
            </div>
          </div>
        </div>
      </section>

      {/* Targets section */}
      <section id={styles.targets}>
        <div className={styles.container}>
          <div className={styles.flex_container}>
            <h2 className={styles.title}>TARGETS</h2>
          </div>
          <div className={styles.row}>
            {/* Calories intake */}
            <div className={`${styles.col_md_4} ${styles.target_col}`}>
              <h4 className={styles.h4_container}>Calories intake</h4>
              <div className={styles.input_container}>
                <img src="./icons/calories.png" className={styles.target_icon} alt="Calories"></img>
              </div>
              <div className={styles.input_container}>
                <input
                  type="number"
                  id="caloriesValue"
                  placeholder="Enter value"
                ></input>
              </div>
            </div>

            {/* Sleep */}
            <div className={`${styles.col_md_4} ${styles.target_col}`}>
              <h4 className={styles.h4_container}>Sleep</h4>
              <div className={styles.input_container}>
                <img src="./icons/sleep.png" className={styles.target_icon} alt="Sleep"></img>
              </div>
              <div className={styles.input_container}>
                <input
                  type="number"
                  id="sleepValue"
                  placeholder="Enter value"
                ></input>
              </div>
            </div>

            {/* Steps */}
            <div className={`${styles.col_md_4} ${styles.target_col}`}>
              <h4 className={styles.h4_container}>Steps</h4>
              <div className={styles.input_container}>
                <img src="./icons/steps.png" className={styles.target_icon} alt="Steps"></img>
              </div>
              <div className={styles.input_container}>
                <input
                  type="number"
                  id="stepsValue"
                  placeholder="Enter value"
                ></input>
              </div>
            </div>
          </div>

          {/* Water intake */}
          <div className={styles.row}>
            <div className={`${styles.col_md_4} ${styles.target_col}`}>
              <h4 className={styles.h4_container}>Water intake</h4>
              <div className={styles.input_container}>
                <img src="./icons/water.png" className={styles.target_icon} alt="Water"></img>
              </div>
              <div className={styles.input_container}>
              <input
                  type="number"
                  id="waterValue"
                  placeholder="Enter value"
                ></input>
              </div>
            </div>

            {/* Weight */}
            <div className={`${styles.col_md_4} ${styles.target_col}`}>
              <h4 className={styles.h4_container}>Weight</h4>
              <div className={styles.input_container}>
                <img src="./icons/weight.png" className={styles.target_icon} alt="Weight"></img>
              </div>
              <div className={styles.input_container}>
              <input
                  type="number"
                  id="weightValue"
                  placeholder="Enter value"
                ></input>
              </div>
            </div>

            {/* Workout */}
            <div className={`${styles.col_md_4} ${styles.target_col}`}>
              <h4 className={styles.h4_container}>Workout</h4>
              <div className={styles.input_container}>
                <img src="./icons/workout.png" className={styles.target_icon} alt="Workout"></img>
              </div>
              <div className={styles.input_container}>
                <input
                  type="number"
                  id="workoutValue"
                  placeholder="Enter value"
                ></input>
              </div>
            </div>
          </div>
          {/* Submit button */}
          <div className={styles.row}>
            <div className={styles.col_md_12}>
              <button className={styles['white_btn']}  onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer section */}
      <section id={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={`${styles.col_md_4} ${styles.footer_box}`}>
              <h3 style={{ color: 'black' }}>About Us </h3>
              <img className={styles.footer_img} src="./icons/logo.png" alt="Logo"></img>
              <p>We are dedicated to promoting health and fitness through personalized monitoring.</p>
            </div>
            <div className={`${styles.col_md_4} ${styles.footer_box}`}>
              <h3 style={{ color: 'black' }}>Contact Us</h3>
              <ul className={styles.contact_list}>
                <li><i className="fas fa-map-marker"></i> Hyderabad, 500075</li>
                <li><i className="fas fa-phone"></i> +91 7896537733</li>
                <li><i className="fas fa-envelope"></i> hey@gmail.com</li>
              </ul>
            </div>
            <div className={`${styles.col_md_4} ${styles.footer_box}`}>
              <h3 style={{ color: 'black' }}>For further updates through mail:</h3>
              <input type="email" className={styles.form_control} placeholder="Your Email"></input>
              <button type="button" className={styles.btn_primary}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
