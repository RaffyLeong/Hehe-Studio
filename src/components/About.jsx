const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-80 font-sans">
      {/* Section 1: Introduction */}
      <section className="mb-12">
        <h2 className="text-[20px] font-semibold  mb-4">About HeHe Studio</h2>
        <p className="text-[16px] opacity-60 leading-relaxed">
          At HeHe Studio, we reimagine spaces through the lens of generative design and computational innovation.
          Rooted in the belief that architecture should evolve with its context, we craft dynamic,
          data-driven solutions for buildings, interiors, and urban environments—always harmonizing creativity with precision.
        </p>
        <br/>
      </section>

      {/* Section 2: Beyond Traditional Design */}
      <section className="mb-12">
        <h2 className="text-[20px] font-semibold  mb-4">Beyond Traditional Design</h2>
        <p className="text-[16px] opacity-60 leading-relaxed">
          We harness algorithms, parametric modeling, and BIM workflows to explore thousands of design possibilities,
          ensuring every project is optimized for sustainability, functionality, and aesthetic impact.
          From adaptive furniture systems to large-scale developments, our process merges cutting-edge technology with human-centered storytelling.
        </p>
        <br/>
      </section>

      {/* Section 3: Our Work */}
      <section className="mb-12">
        <h2 className="text-[20px] font-semibold  mb-4">Our Work</h2>
        <div className="space-y-4">
          <p className="text-[16px] opacity-60 leading-relaxed">
            <span className="font-medium">Architecture & Urban Design:</span> Generative masterplans that respond to cultural, environmental, and social layers of place.
          </p>
          <p className="text-[16px] opacity-60 leading-relaxed">
            <span className="font-medium">BIM Integration:</span> Streamlined collaboration, from concept to construction, with intelligent 3D modeling.
          </p>
          <p className="text-[16px] opacity-60 leading-relaxed">
            <span className="font-medium">Interiors + Furniture:</span> Algorithm-crafted spaces and bespoke furnishings that adapt to evolving needs.
          </p>
          <br/>
        </div>
      </section>

      {/* Section 4: Why We're Different */}
      <section className="mb-12">
        <h2 className="text-[20px] font-semibold  mb-4">Why We`re Different</h2>
        <p className="text-[16px] opacity-60 leading-relaxed">
          We don`t just design for the future—we design with it. By embedding computational logic into every curve, grid,
          and material choice, we transform static spaces into living ecosystems that grow with their communities.
        </p>
        <br/>
      </section>

      {/* Section 5: Join Us */}
      <section>
        <h2 className="text-[20px] font-semibold  mb-4">Join Us</h2>
        <p className="text-[16px] opacity-60 leading-relaxed">
          Let`s collaborate to shape environments where innovation meets intuition.
        </p>
        <br/>
      </section>
    </div>
  );
};

export default About;