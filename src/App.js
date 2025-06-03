import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/Navbar/Navbar';
import AddGoalForm from './components/Forms/AddGoalForm';
import { CustomCard } from './components/Cards/CustomCard';
import { CustomGoalCard } from './components/Cards/CustomGoalCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from './redux/taskSlice';
import { fetchGoals } from './redux/goalSlice';

function App() {
  const [currentSection, setCurrentSection] = useState('tasks');
  const tasks = useSelector((state) => state.tasks);
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="App">
      <CustomNavbar onSelectSection={setCurrentSection} />
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <AddGoalForm />
          </Col>
          <Col md={8}>
            {currentSection === 'tasks'
              ? tasks.map((item) => <CustomCard key={item.id} {...item} />)
              : goals.map((item) => <CustomGoalCard key={item.id} {...item} />)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
