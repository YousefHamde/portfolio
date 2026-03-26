import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--background)", 
      zIndex: 9999,
    }}
  >
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={400}
      speed={1}
      backgroundColor="transparent"
      {...props}
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  </div>
);

export default Loader;
