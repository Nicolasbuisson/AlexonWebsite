import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Work } from "./pages/work/work";
import { WorkItem } from "./pages/workItem/workItem";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { projects } from "./resources/projects.json";
import { customerExperiences } from "./resources/customerExperiences.json";
import { faqs } from "./resources/faq.json";
import { ShortForm } from "./pages/services/shortForm";
import { LongForm } from "./pages/services/longForm";
import useScrollPercentage from "./hooks/useScrollPercentage";

function App() {
  useScrollPercentage(); // initiate css variable --scroll

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home
                projects={projects}
                customerExperiences={customerExperiences}
                faqs={faqs}
              />
            }
          ></Route>
          <Route path="work" element={<Work projects={projects} />}></Route>
          {projects.map((project) => {
            return (
              <Route
                key={`route-${project.stills}`}
                path={`work/${project.title.replaceAll(" ", "").toLowerCase()}`}
                // remove spaces from title and make all lowercase when creating URL
                element={
                  <WorkItem
                    title={project.title}
                    client={project.client}
                    description={project.description}
                    videoUrl={project.videoUrl}
                    gridImage={project.gridImage}
                    logoImage={project.logoImage}
                    services={project.services}
                    stills={project.stills}
                  ></WorkItem>
                }
              ></Route>
            );
          })}
          <Route path="about" element={<About />}></Route>
          <Route path="services/shortform" element={<ShortForm />}></Route>
          <Route path="services/longform" element={<LongForm />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
