import React from "react";

function Home() {
  React.useEffect(() => {
    console.log("The Home Page has mounted");
  }, []);
  return (
    <section className="hero is-fullheight has-background-primary-dark ">
      <div className="hero-body has-text-centered">
        <div className="container has-background-primary-light is-max-desktop py-6">
          <h1 className="title is-1">Discover all things Disney</h1>
          <h2 className="subtitle is-3">
            Why did Mickey Mouse get hit by a snowball??
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
