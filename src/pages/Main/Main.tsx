import "./Main.css";

export const Main = () => {
  return (
    <div className="main-container">
      <div className="main-container-left">
        <img
          className="main-container-my-image"
          src="https://nataliarakowska.pl/wp-content/uploads/2022/11/nrakowska-112.jpg"
          alt="my profile img"
        />
      </div>
      <div className="main-container-right">
        <p>Hi, I'm Filip</p>
        <h1>Front-End Developer</h1>
      </div>
    </div>
  );
};
