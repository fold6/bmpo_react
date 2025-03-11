// 원본
 
// npm install react@18 react-dom@18
// yarn add react-bootstrap bootstrap
// yarn add react-icons
// yarn add styled-components
// yarn add react-calendar

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // 변경된 부분

import { BmpoProvider } from './BmpoContext';
import { BmpoProvider2 } from './BmpoContext2';

import Home from './Home';
import Introduce from './component/Introduce';
import Conductor from './component/Conductor';
import History from './component/History';
import Donation from './component/Donation';
import Concert from './component/Concert';
import ConcertDetail from './component/ConcertDetail';
import Gallery from './component/Gallery';
import ProjectInner from './component/ProjectInner';
import TextInner from './component/TextInner';
import Notice from './component/Notice';
import NoticeInner from './component/NoticeInner';
import Login from './component/Login';
import Header from './component/Header';
import MyBookmark from './component/MyBookmark';
import MyReservation from './component/MyReservation';
import Footer from './component/Footer';

function App() {
  return (
    <BmpoProvider>
      <BmpoProvider2>
        <Router> {/* BrowserRouter 대신 HashRouter 사용 */}
          <div className="App">
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Introduce" element={<Introduce />} />
              <Route path="/Conductor" element={<Conductor />} />
              <Route path="/History" element={<History />} />
              <Route path="/Donation" element={<Donation />} />
              <Route path="/Concert" element={<Concert />} />
              <Route path="/Concert/:id" element={<ConcertDetail />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/TextInner" element={<TextInner />} />
              <Route path="/ProjectInner" element={<ProjectInner />} />
              <Route path="/Notice" element={<Notice />} />
              <Route path="/NoticeInner" element={<NoticeInner />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/MyReservation" element={<MyReservation />} />
              <Route path="/MyBookmark" element={<MyBookmark />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </BmpoProvider2>
    </BmpoProvider>
  );
}

export default App;
