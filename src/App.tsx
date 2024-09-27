import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Work } from "./pages/work/work";
import { WorkItem } from "./pages/workItem/workItem";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { projects } from "./resources/projects.json";
import { customerExperiences } from "./resources/customerExperiences.json";
import { faqs } from "./resources/faq.json";

function App() {
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
              ></Home>
            }
          ></Route>
          <Route
            path="work"
            element={<Work projects={projects}></Work>}
          ></Route>
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
          <Route path="about" element={<About></About>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
