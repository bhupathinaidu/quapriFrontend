import { Link } from "react-router-dom";
import "../masterProductList/masterProduct.component.css";

const MasterProductList = ({ masterList, category }) => {
  return (
    <div className="container mt-2">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">{category}</Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        {masterList.map((item) => (
          <>
            <div className="col-md-3 masterListProduct" key={item.label}>
              <Link to={item.src}>
                <div>
                  <img src={item.imgSrc} alt={item.label} />
                </div>
                <div>{item.label}</div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MasterProductList;
