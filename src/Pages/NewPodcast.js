import Header from "../Components/Header";
import CreatePodcast from "../Components/StartAPodcast/CreatePodcast";

function NewPodcast() {
  return (
    <>
      <Header />
      <div className="signup">
        <h2
          className="title"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Create A Podcast
        </h2>
        <CreatePodcast />
      </div>
    </>
  );
}

export default NewPodcast;
