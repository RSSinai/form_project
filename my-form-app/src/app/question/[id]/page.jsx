import FullTopicForm from "../../../../components/FullTopicForm";
import NavBar from "../../../../components/NavBar";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Question({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description, tags } = topic;

  return (
    <>
      <NavBar />
      <FullTopicForm
        id={id}
        title={title}
        description={description}
        topic={topic}
        tags={tags}
      />
    </>
  );
}
