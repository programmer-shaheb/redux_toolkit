import React, { useState } from "react";
import BlogGrid from "../components/grid/BlogGrid";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState("all");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <section className="wrapper">
        <Sidebar
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          setSelectedOption={setSelectedOption}
        />
        <BlogGrid
          selectedValue={selectedValue}
          selectedOption={selectedOption}
        />
      </section>
    </>
  );
};

export default Home;
