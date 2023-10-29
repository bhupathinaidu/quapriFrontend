import React, { useRef, useState } from "react";
import { fabric } from "fabric";
import "./canvas.component.css";
import uploadIcon from "../../assets/upload-icon.jpeg"
import ConfirmationPage from "../../pages/confirmation/confirmation";


const DesignTool = ({ board, saveAndProceed }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [textStyle, setTextStyle] = useState({
    fontSize: 24,
    fontFamily: "Arial",
    fill: "#000000",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none"
  });
  const [bgColor, setBgColor] = useState("#ffffff");
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [shapeDetails, setShapeDetails] = useState({
    shapeVal: "Select",
    shapeBorder: "#000000",
    shapeBackground: "#ffffff"
  });

  // Initialize the canvas when the component mounts
  React.useEffect(() => {
    if (!canvas) {
      const newCanvas = new fabric.Canvas(canvasRef.current, {
        width: 850,
        height: 450,
        selectionBorderColor: "red",
        backgroundColor: bgColor
      });
      setCanvas(newCanvas);
    }
  }, [canvas]);

  const editSavedCanvas = () => {
    // don't remove
    const savedCanvasData = sessionStorage.getItem("savedCanvas");

    if (savedCanvasData) {
      if (canvas) {
        canvas.clear();
        canvas.loadFromJSON(savedCanvasData, () => {
          canvas.renderAll();
        });
      }
    }
  };

  const handleChangeTextProps = (prop, style) => {
    setTextStyle({
      ...textStyle,
      [prop]: style,
    });

    if (canvas) {
      const activeObject = canvas.getActiveObject();

      if (activeObject && activeObject.type === 'i-text') {
        activeObject.set({ [prop]: style });
        canvas.renderAll();
      }
    }

  };

  // Function to add text to the canvas
  const addTextToCanvas = () => {
    if (canvas) {
      const text = new fabric.IText("Your Text Here", {
        left: 100,
        top: 100,
        fontSize: textStyle.fontSize,
        fontFamily: textStyle.fontFamily,
        fill: textStyle.fill,
        fontWeight: textStyle.fontWeight, // set fontWeight
        fontStyle: textStyle.fontStyle, // set fontStyle
      });
      canvas.add(text);
      canvas.renderAll();
    }
  };

  const addShapeToCanvas = (shape) => {
    if (canvas) {
      const rect = new fabric.Rect({
        left: 200,
        top: 200,
        width: 150,
        height: 100,
        fill: shapeDetails.shapeBackground,
        border: `1px solid ${shapeDetails.shapeBackground}`,
      });

      const circle = new fabric.Circle({
        left: 200,
        top: 200,
        radius: 50,
        fill: shapeDetails.shapeBackground,
        border: `1px solid ${shapeDetails.shapeBackground}`,
        opacity: 0.8
      });
      if (shapeDetails.shapeVal === "rect") canvas.add(rect);
      if (shapeDetails.shapeVal === "circle") canvas.add(circle);
      canvas.renderAll();
    }
  };

  const removeSelectedObject = () => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();

      if (activeObject) {
        canvas.remove(activeObject);
        canvas.discardActiveObject();
        canvas.renderAll();
      }
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function () {
          const fabricImg = new fabric.Image(img, {
            opacity: 0.8
          });
          canvas.add(fabricImg);
          canvas.renderAll();
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const convertCanvasToJPEG = () => {
    if (canvas) {
      const jpegDataURL = canvas.toDataURL({
        format: 'jpeg',
        quality: 0.8, // Adjust the quality as needed (0.0 - 1.0)
      });

      return jpegDataURL
    }
  };

  const saveCanvasToSessionStorage = () => {
    if (canvas) {
      const canvasData = JSON.stringify(canvas.toJSON());
      sessionStorage.setItem("savedCanvas", canvasData);
      sessionStorage.setItem("savedJpeg", convertCanvasToJPEG());
      saveAndProceed(convertCanvasToJPEG());
      setShowConfirmModal(true);
    }
  };

  return (
    <div className="canvas-container">
      <div className="canvasWrapper">
        {showConfirmModal && <div>
          <div className="overlay">
          </div>
          <div className="overLayContainer">
            <div className="overlayWrapper">
              <ConfirmationPage setShowConfirmModal={() => setShowConfirmModal(false)} />
            </div>
          </div>
        </div>}
        <div className="canvas-wrapper">
          {board !== "upload" ? (<>
            <div className="bgColor">
              <p>Background Color</p>
              {bgColor !== "#ffffff" ? <button className="removeButton" onClick={() => {

                canvas.setBackgroundColor("#ffffff", () => {
                  // This function is called after the background color is set
                  canvas.renderAll();
                })
                setBgColor("#ffffff")

              }}>Reset Background</button> : null}
              <input
                type="color"
                id="colorPicker"
                onChange={(e) => {
                  canvas.setBackgroundColor(e.target.value, () => {
                    // This function is called after the background color is set
                    canvas.renderAll();
                  })
                  setBgColor(e.target.value)
                }}
                value={bgColor}
              />
              <label htmlFor="colorPicker">Pick Background Color</label>
            </div>
            <div className="add">
              <p>Add</p>
              <div className="uploadImage">
                <label for="uploadImage">Upload Image <img src={uploadIcon} alt="upload" /></label>
                <input
                  type="file"
                  accept="image/*"
                  id="uploadImage"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="addText">
                <button onClick={addTextToCanvas}>Add Text</button>
                <div className="addTextFeatures">
                  <i onClick={() => {
                    if (textStyle.fontWeight === "normal") {
                      handleChangeTextProps('fontWeight', "bold")
                    } else {
                      handleChangeTextProps('fontWeight', "normal")
                    }
                  }} className={`fa ${textStyle.fontWeight === "normal" ? "" : "active"}`}>&#xf032;</i>
                  <i onClick={() => {
                    if (textStyle.fontStyle === "normal") {
                      handleChangeTextProps('fontStyle', "italic")
                    } else {
                      handleChangeTextProps('fontStyle', "normal")
                    }
                  }} className={`fa ${textStyle.fontStyle === "normal" ? "" : "active"}`}>&#xf033;</i>
                  <i onClick={() => {
                    if (textStyle.textDecoration === "none") {
                      handleChangeTextProps('textDecoration', "underline")
                    } else {
                      handleChangeTextProps('textDecoration', "none")
                    }
                  }} className={`fa ${textStyle.textDecoration === "none" ? "" : "active"}`}>&#xf0cd;</i>
                  <input
                    type="color"
                    id="textColorPicker"
                    onChange={(e) => {
                      handleChangeTextProps('fill', e.target.value)
                    }}
                    value={textStyle.fill}
                  />
                </div>
              </div>
              <div className="addShape">
                <button onClick={addShapeToCanvas}>Add Shape</button>
                <div className="addShapeFeatures">
                  <select onChange={(e) => {
                    if (e.target.value === "○") {
                      setShapeDetails({ ...shapeDetails, shapeVal: "circle" })
                    } else if (e.target.value === "▭") {
                      setShapeDetails({ ...shapeDetails, shapeVal: "rect" })
                    } else {
                      setShapeDetails({ ...shapeDetails, shapeVal: "select" })
                    }
                  }
                  }>
                    <option>Select</option>
                    <option>&#9645;</option>
                    <option>&#9675;</option>
                  </select>
                  <div className="shapeBorderColor">
                    <label htmlFor="shapeColorPicker">Border: </label>
                    <input
                      type="color"
                      id="shapeBorderColorPicker"
                      onChange={(e) => {
                        setShapeDetails({ ...shapeDetails, shapeBorder: e.target.value })
                      }}
                      value={shapeDetails.shapeBorder}
                    />
                  </div>
                  <div className="shapeBackgroundColor">
                    <label htmlFor="shapeColorPicker">Background Color: </label>
                    <input
                      type="color"
                      id="shapeColorPicker"
                      onChange={(e) => {
                        setShapeDetails({ ...shapeDetails, shapeBackground: e.target.value })
                      }}
                      value={shapeDetails.shapeBackground}
                    />
                  </div>
                </div>
              </div>
              <div className="removeSelected">
                <button onClick={removeSelectedObject}>Remove Selected</button>
              </div>
            </div>

          </>) : <div className="add">
            <p>Add</p>
            <div className="uploadImage">
              <label for="uploadImage">Upload Image <img src={uploadIcon} alt="upload" /></label>
              <input
                type="file"
                accept="image/*"
                id="uploadImage"
                onChange={handleImageUpload}
              />
            </div>
            <div className="removeSelected">
              <button onClick={removeSelectedObject}>Remove Selected</button>
            </div></div>}
          <div className="save">
            <button onClick={saveCanvasToSessionStorage}>Save Design and Proceed</button>
          </div>

          {/* don't remove <button onClick={editSavedCanvas}>Edit Saved Canvas</button>*/}
        </div>
      </div>

      <div className="canvasContainer">
        <canvas ref={canvasRef} width={850} height={450}></canvas>
      </div>

    </div>
  );
};

export default DesignTool;
