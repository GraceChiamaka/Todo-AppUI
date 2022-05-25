import { PageHeader } from "@components/Head";
import { TasksContent } from "@src/components";

const Tasks = () => {
  return (
    <>
      <PageHeader description="Tasks " />
      <TasksContent />
    </>
  );
};

export default Tasks;
