import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/operations";
import { selectTasks, selectIsLoading } from "../redux/selectors";

export const TasksPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Görevlerim</h1>
      {isLoading && <p>Yükleniyor...</p>}
      <ul>
        {tasks.map(t => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
};

