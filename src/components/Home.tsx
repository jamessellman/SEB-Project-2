import React from "react";

function Home() {
  React.useEffect(() => {
    console.log("The Home Page has mounted");
  }, []);
  return (
    <section className="hero is-fullheight">
      <div className="hero-body has-text-centered">
        <div className="container mickey">
          <p className="title is-size-1 has-text-white">Discover Disney</p>
          <p className="subtitle is-size-4 has-text-white">Dive into the world of your favourite Disney Characters</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
