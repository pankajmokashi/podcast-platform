import Header from "../Components/Header";
import CreatePodcast from "../Components/StartAPodcast/CreatePodcast";


function NewPodcast() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <h2>Create A Podcast</h2>
        <CreatePodcast />
      </div>
    </>
  );
}

export default NewPodcast;
