import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Sidebar from './components/dashboard/Sidebar';
import GpthubArea from './components/dashboard/gpthub_area/GpthubArea';
import WorkingArea from './components/dashboard/lessonapp_area/LessonArea';
import DashboardPage from './pages/DashboardPage';
import GpthubCategorySection from './components/dashboard/gpthub_area/GpthubCategorySection';
import GpthubChatsSection from './components/dashboard/gpthub_area/GpthubChatsSection';
import PeraiArea from './components/dashboard/personalai_area/PeraiArea';
import TestLab from './components/dashboard/testlab_area/TestLab';
import ExamBook from './components/dashboard/exambook_area/ExamBook';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { createContext, useState } from 'react';
import { useContext } from 'react';

export const UserContext = createContext();
export const MessageContext = createContext();

function App() {
  const [gpthubcategory, setGpthubcategory] = useState(null)
  const handleGpthubcategory = (idx) => {
      setGpthubcategory(idx)
  }
  const [messageHistory, setMessageHistory] = useState({
    coding: [],
    presentation: [],
    blog: [],
    image: []
  })

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
      <div className='App'>
        <UserContext.Provider
          value={{
            firstname, setFirstname,
            lastname, setLastname
          }}
        >
          <MessageContext.Provider
            value={{
              messageHistory, setMessageHistory
            }}
          >
            <Routes>
              <Route index element={<Navigate to="/signin" />} />
              <Route path='/signin' element={<SignIn />}/>
              <Route path='/signup' element={<SignUp />}/>
              <Route path='/userdashboard/*' element={<DashboardPage />}>
                <Route index element={<Navigate to="lesson_app" />} />
                <Route path='lesson_app' element={<WorkingArea />} />
                <Route path='gpt_hub' element={<GpthubArea gpthubcategory={gpthubcategory} handleGpthubcategory={handleGpthubcategory}/>} >
                  <Route index element={<Navigate to="category" />} />
                  <Route path='category' element={<GpthubCategorySection  gpthubcategory={gpthubcategory} handleGpthubcategory={handleGpthubcategory}/>} />
                  <Route path='chats' element={<GpthubChatsSection idx={gpthubcategory}n handleGpthubcategory={handleGpthubcategory}/>} />
                </Route>
                <Route path='personal_ai' element={<PeraiArea />}>

                </Route>
                <Route path='exambook' element={<ExamBook />}>

                </Route>
                <Route path='testlab' element={<TestLab />}>

                </Route>
              </Route>
            </Routes>
          </MessageContext.Provider>
        </UserContext.Provider>
      </div>
  );
}

export default App;
