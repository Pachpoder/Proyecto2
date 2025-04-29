import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/Navbar/Navbar';
import { CustomCard } from './components/Cards/CustomCard';
import AddGoalForm from './components/Forms/AddGoalForm';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [goals, setGoals] = useState([]);
  const [currentSection, setCurrentSection] = useState('tasks'); // tasks o goals

  const handleAddItem = (item) => {
    if (currentSection === 'tasks') {
      setTasks([...tasks, item]);
    } else {
      setGoals([...goals, item]);
    }
  };

  const handleRemoveItem = (id) => {
    if (currentSection === 'tasks') {
      setTasks(tasks.filter((task) => task.id !== id));
    } else {
      setGoals(goals.filter((goal) => goal.id !== id));
    }
  };

  const handleSelectSection = (section) => {
    setCurrentSection(section);
  };

  const itemsToRender = currentSection === 'tasks' ? tasks : goals;

  return (
    <div className="App">
      <CustomNavbar onSelectSection={handleSelectSection} />
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <AddGoalForm onAddGoal={handleAddItem} sectionName={currentSection} />
          </Col>
          <Col md={8}>
            {itemsToRender.map((item) => (
              <CustomCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                dueDate={item.dueDate}
                onRemove={handleRemoveItem}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
