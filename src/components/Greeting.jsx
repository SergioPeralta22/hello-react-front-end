import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const message = greetings && greetings.greetings.message;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Greeting;
