import React, { useRef, useState } from "react";
import { fabric } from "fabric";
import "./canvas.component.css";

const DesignTool = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [textStyle, setTextStyle] = useState({
    fontSize: 24,
    fontFamily: "Arial",
    fill: "#000000",
    fontWeight: "normal",
    fontStyle: "Normal",
  });

  // Initialize the canvas when the component mounts
  React.useEffect(() => {
    if (!canvas) {
      const newCanvas = new fabric.Canvas(canvasRef.current, {
        width: 850,
        height: 450,
        selectionBorderColor: "red",
      });
      setCanvas(newCanvas);
    }
  }, [canvas]);

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

  // Function to change the font style
  const changeFontStyle = (style) => {
    setTextStyle({
      ...textStyle,
      fontStyle: style,
    });
  };

  const handleFontWeightChange = (style) => {
    setTextStyle({
      ...textStyle,
      fontWeight: style,
    });

    if (canvas) {
      const activeObject = canvas.getActiveObject();

      if (activeObject && activeObject.type === "i-text") {
        activeObject.set({ fontWeight: style });
        canvas.renderAll();
      }
    }
  };

  // Function to change the font color
  const changeFontColor = (color) => {
    setTextStyle({
      ...textStyle,
      fill: color,
    });
  };

  const addShapeToCanvas = (shape) => {
    if (canvas) {
      const rect = new fabric.Rect({
        left: 200,
        top: 200,
        width: 100,
        height: 100,
        fill: "blue",
        borderColor: "black",
      });
      canvas.add(rect);
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
          const fabricImg = new fabric.Image(img);
          canvas.add(fabricImg);
          canvas.renderAll();
        };
      };

      reader.readAsDataURL(file);
    }
  };

  // Other functions for manipulating elements, layers, exporting, etc.

  // Function to save the canvas as an SVG file
  const saveAsSvg = () => {
    // if (canvas) {
    //   const svgData = canvas.toSVG();
    //   const blob = new Blob([svgData], { type: 'image/svg+xml' });
    //   const url = URL.createObjectURL(blob);

    //   // Create a download link and trigger a click to download the SVG file
    //   const a = document.createElement('a');
    //   a.href = url;
    //   a.download = 'design.svg';
    //   a.click();

    //   // Release the object URL when done
    //   URL.revokeObjectURL(url);
    // }
    if (canvas) {
      const svgString = canvas.toSVG();
      sessionStorage.setItem("savedSVG", svgString);
    }
  };

  return (
    <div className="canvas-container">
      <div className="canvasWrapper">
        <div className="canvas-wrapper">
          <button onClick={addTextToCanvas}>Add Text</button>
          <input
            type="text"
            placeholder="Font Style"
            onChange={(e) => changeFontStyle(e.target.value)}
            value={textStyle.fontStyle}
          />
          <input
            type="color"
            onChange={(e) => changeFontColor(e.target.value)}
            value={textStyle.fill}
          />
          <select
            onChange={(e) => handleFontWeightChange(e.target.value)}
            value={textStyle.fontWeight}>
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="bolder">Bolder</option>
            <option value="lighter">Lighter</option>
          </select>
          <label for="fileInput">Upload File</label>
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            onChange={handleImageUpload}
          />
          <button onClick={addShapeToCanvas}>Add Shape</button>
          <button onClick={removeSelectedObject}>Remove Selected</button>
          <button onClick={saveAsSvg}>Save as SVG</button>
        </div>
      </div>

      <div className="canvasContainer">
        <canvas ref={canvasRef} width={850} height={450}></canvas>
      </div>

      {/* Additional UI components for layer management, export, etc. */}
    </div>
  );
};

export default DesignTool;
