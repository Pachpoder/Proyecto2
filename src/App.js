import { Container, Row, Col } from 'react-bootstrap';
import CustomNavbar from './components/Navbar/Navbar';
import { CustomCard } from './components/Cards/CustomCard';
import AddGoalForm from './components/Forms/AddGoalForm';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './redux/taskSlice';

function App() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addTask(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="App">
      <CustomNavbar />
      <Container className="mt-4">
        <Row>
          <Col md={4}>
            <AddGoalForm onAddGoal={handleAddItem} />
          </Col>
          <Col md={8}>
            {tasks.map((item) => (
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
