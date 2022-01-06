import './App.css';
import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';
import { UploadScript } from './components/pages/UploadScript';
import { Stacks } from './components/pages/Stacks';
import { StackDetail } from './components/pages/StackDetail';
import { Server } from './components/pages/Server';
import { Tutorial } from './components/pages/Tutorial';
import { InstanceDetail } from './components/pages/InstanceDetail';
import { LoadBalancer } from './components/pages/LoadBalancer';
import { AutoScalingGroups } from './components/pages/AutoScalingGroups';
import { AutoScalingGroupDetails } from './components/pages/AutoScalingGroupDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div class="wrapper">
      <Router>
          <Routes>
            <Route exact path="/" element={ <Login/> }></Route>
            <Route path="/home" element={ <Home/> }></Route>
            <Route path="/tutorial" element={ <Tutorial/> }></Route>
            <Route path="/upload-script" element={ <UploadScript/> }></Route>
            <Route path="/stack" element={ <Stacks/> }></Route>
            <Route path="/stack/details/:stackname" element={ <StackDetail/> }></Route> 
            <Route path="/server" element={ <Server/> }></Route>
            <Route path="/server/details/:instanceid" element={ <InstanceDetail/> }></Route>
            <Route path="/loadbalancer" element={ <LoadBalancer/> }></Route>
            <Route path="/autoscalinggroups" element={ <AutoScalingGroups/> }></Route>
            <Route path="/autoscalinggroups/details/:asgname" element={ <AutoScalingGroupDetails/> }></Route> 
          </Routes>
      </Router>
    </div>
  );
}

export default App;
