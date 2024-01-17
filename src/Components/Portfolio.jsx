/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/chill.webp";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Facemask Detection using Intel optimised Scikit-Learn Library(oneAPI)🎉",
    description:
      "Made a Facemask Detection using intel optimised sklearn package and Support Vector Machine Algorithm.",
    url: "https://medium.com/@ripanroy111/face-mask-detection-using-svm-intel-oneapi-optimised-scikit-learn-library-fdb80cc6687d",
  },
  {
    title: "Nivaaran - AI Analytics and Toolkit",
    description:
      "a technological solution based on live CCTV feeds that automatically detect incidents related to street crime, violence, burglary, theft, infiltration, unauthorized access, etc., and generate alerts to the nearest Police Station. The solution should also be able to create a report and maintain a database that includes the nature of the incident/crime, location, time, level of alert (i.e., low, medium, high-risk alert), etc.",
    url: "https://nivaaran.live/",
  },
  {
    title: "pdfGPT",
    description:
      "Created a Streamlit app using Python that assists users in extracting information from uploaded PDFs. Implemented Text chunking, Embedding Generation, and a Conversational Interface. Leveraged Hugging Face Trans-formers and FAISS for NLP tasks, showcasing proficiency in PDF handling, text processing,and UI design.",
    url: "https://pdfgptai.streamlit.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
