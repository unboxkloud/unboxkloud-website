import { useState } from "react";
import "./App.css";
import HomeLayout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import BasicLayout from "./components/basic-layout";
import AdvanceLayout from "./components/advance-layout";
import ExpertLayout from "./components/expert-layout";
import OurPolicy from "./components/our-policy";
import TermAndCondition from "./components/term-and-condition";
import RefundPolicy from "./components/refund-policy";
import Refer from "./components/refer";
import MoveToTop from "./components/move-top-top";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/basic" element={<BasicLayout />} />
          <Route path="/advance" element={<AdvanceLayout />} />
          <Route path="/expert" element={<ExpertLayout />} />
          <Route path="/our-policy" element={<OurPolicy />} />
          <Route path="/terms-and-conditions" element={<TermAndCondition />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/refer-and-earn" element={<Refer />} />
        </Routes>
        <MoveToTop />
      </>
    </div>
  );
}

export default App;
