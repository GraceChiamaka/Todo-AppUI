import { PageHeader } from "@components/Head";
import { TasksContent } from "@src/components";
import { withAuth } from "@components/HOC/withAuth";

const Tasks = () => {
  return (
    <>
      <PageHeader description="Tasks " />
      <TasksContent />
    </>
  );
};

export default withAuth(Tasks);
