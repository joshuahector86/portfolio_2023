import "./UnderConstructionDialog.scss";

function UnderConstructionDialog() {
  return (
    <div className="under-construction">
      <div className="dialog-container">
        <h6>Whoops!</h6>
        <p>This isn't built out yet.</p>
        <p>Please try again later :).</p>
        <p>Click anywhere to exit this dialog.</p>
      </div>
    </div>
  );
}

export default UnderConstructionDialog;
