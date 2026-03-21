const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:px-80 font-sans">
      {/* Section 1: Introduction */}
      <section className="mb-12">
        <h2 className="text-[24px] font-semibold  mb-4">About Me</h2>
        <p className="text-[16px] opacity-60 leading-relaxed">
          I'm a computational designer and BIM professional dedicated to
          bridging the gap between architectural intent and highly coordinated
          construction data. Currently working as a Design & BIM Coordinator at
          Darwin Group, I specialise in integrating advanced parametric
          workflows with real-world building execution.
        </p>
      </section>

      {/* Section 2: My Computational Design Approach */}
      <section className="mb-12">
        <h2 className="text-[20px] font-semibold mb-4">
          My Computational Design Approach
        </h2>
        <p className="text-[16px] opacity-60 leading-relaxed">
          My passion lies in leveraging computational tools to solve complex
          geometric and data challenges in architecture.
        </p>
        <br />
        <ul className="space-y-4 list-disc pl-5">
          <li className="text-[16px] leading-relaxed">
            <span className="font-bold">Rhino.Inside.Revit: </span>
            <span className="opacity-60">bridging the gap between Rhino's advanced geometric modeling and Revit's BIM environment, 
              allowing for dynamic data exchange and automated modeling tasks.</span>
          </li>
          <li className="text-[16px] leading-relaxed">
            <span className="font-bold">Grasshopper & Ladybug: </span>
            <span className="opacity-60">building custom parametric scripts to solve site-specific problems, such as analysing the surface level of concrete floor slabs to assist with slab leveling. 
              I also assist designers by running environmental and thermal calculations for facades using Ladybug.</span>
          </li>
          <li className="text-[16px] leading-relaxed">
            <span className="font-bold">ShapeDiver: </span>
            <span className="opacity-60">I leverage ShapeDiver to take my parametric Grasshopper models to the web, enabling interactive, 
              cloud-based design configuration and democratising complex computational logic for clients and collaborators.</span>
          </li>
        </ul>
        <br />
      </section>

      {/* Section 3: Professional Experience & BIM Coordination */}
      <section className="mb-12">
        <h2 className="text-[20px] font-semibold mb-4">
          Professional Experience & BIM Coordination
        </h2>
        <p className="text-[16px] opacity-60 leading-relaxed">
          My computational skills are grounded in rigorous onsite and digital coordination experience. 
          In my current role managing the Revit digital twin for a £90m healthcare facility at the Royal Bournemouth Hospital, 
          I ensure seamless integration between the theoretical model and the as-built reality.
        </p>
        <br />
        <p className="text-[16px] opacity-60 leading-relaxed">
          Previously, as a Graduate Design Coordinator at Reds10, 
          I oversaw complex modular projects across the Education, Defence, and Justice sectors. My day-to-day expertise involves:
        </p>
        <br />
        <ul className="space-y-4 pl-5">
          <li className="text-[16px] leading-relaxed flex gap-2">
            <span className="text-black font-bold">•</span>
            <span className="opacity-60">Running advanced clash detection using Navisworks to identify and resolve potential issues early, 
            maintaining tight project programs.</span>
            
          </li>
          <li className="text-[16px] leading-relaxed flex gap-2">
            <span className="text-black font-bold">•</span>
            <span className="opacity-60">Managing COBie deliverables and assisting in the setup of BIM Execution Plans.</span>
            
          </li>
          <li className="text-[16px] leading-relaxed flex gap-2">
            <span className="text-black font-bold">•</span>
            <span className="opacity-60">Overseeing manufacturing and onsite activities to ensure strict adherence to design specifications.</span>
            
          </li>
        </ul>
        <br />
      </section>

      {/* Section 4: Background */}
      <section className="mb-12">
        <h2 className="text-[20px] font-semibold  mb-4">Background</h2>
        <p className="text-[16px] opacity-60 leading-relaxed">
          My foundation in design stems from a BSc (Hons) in Architecture from the University of the West of England , 
          alongside formative experiences at 3bd Architects and The Bartlett Summer School. 
          Whether it's crafting comprehensive drawing packages or script-building for environmental optimisation, 
          I am driven by the belief that better data leads to better built environments.
        </p>
        <br />
      </section>

      
    </div>
  );
};

export default About;
