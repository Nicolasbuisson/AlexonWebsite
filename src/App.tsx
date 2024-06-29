import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Work } from "./pages/work/work";
import { WorkItem } from "./pages/workItem/workItem";
import { Story } from "./pages/story/story";
import { Contact } from "./pages/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home></Home>}></Route>
          <Route path="work" element={<Work></Work>}></Route>
          <Route
            path="work/item"
            element={
              <WorkItem
                title=""
                client=""
                description=""
                videoUrl=""
                stills={[""]}
              ></WorkItem>
            }
          ></Route>
          <Route path="story" element={<Story></Story>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
