import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 ">
        {
          "This Magic Brain Will Detect Faces  From your Picture.Just Give It A Try"
        }
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-3">
          <input className="f4 pa2 w-70 " type="text" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
