const ProgressBar = ({ width }: {width : number}) => {
  return (
    <section className="progressbar_container">
      <div
        style={{
          width: `${width}%`,
          background: "orange",
          height: `100%`,
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {width}%
      </div>
    </section>
  );
};
export default ProgressBar; 