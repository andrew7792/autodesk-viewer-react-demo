import { getForgeToken } from "../libs/tokenQueries";

const Autodesk = window.Autodesk;

let viewer;

function onDocumentLoadSuccess(doc) {
  const viewables = doc.getRoot().getDefaultGeometry();
  viewer.loadDocumentNode(doc, viewables).then(i => {
    // documented loaded, any action?
  });
}

function onDocumentLoadFailure(viewerErrorCode) {
  console.error("onDocumentLoadFailure() - errorCode:" + viewerErrorCode);
}

function launchViewer(urn) {
  const options = {
    env: "AutodeskProduction",
    getAccessToken: getForgeToken
  };

  Autodesk.Viewing.Initializer(options, () => {
    viewer = new Autodesk.Viewing.GuiViewer3D(
      document.getElementById("forgeViewer")
    );
    viewer.start();
    const documentId = "urn:" + urn;
    Autodesk.Viewing.Document.load(
      documentId,
      onDocumentLoadSuccess,
      onDocumentLoadFailure
    );
  });
}

const Helpers = {
  launchViewer
};

export default Helpers;
