import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function PromotionCard() {
  const featureImage = require("../../images/clothe.png");
  const mobileDisplay = useMediaQuery({ query: "(max-width: 600px)" });
  const tabletDisplay = useMediaQuery({ query: "(max-width: 768px)" });
  const windowWidth: boolean = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <div
      className="d-flex justify-content-between rounded mt-5 py-3 px-5"
      style={{
        background: "rgba(139, 168, 142, 0.7)",
        flexDirection: windowWidth ? "column" : "row",
      }}>
        <div style={{ maxWidth: "300px", margin: windowWidth ? 'auto':''  }}>
          <img style={{ width:'100%'}} src={featureImage} alt="image" />
        </div>
      <div className="mt-auto mb-auto" style={{ margin: windowWidth? 'auto':'' }}>
        <div className="d-flex gap-2">
          <p className="fw-bold fs-2">Autum</p>
          <p className="fw-bold fs-2" style={{ color: "white" }}>
            Promo
          </p>
        </div>
        <div className="d-flex gap-3">
          <p className="display-2 fw-bold">25%</p>
          <p>
            discount on <br /> all products of <br /> Autumn category
          </p>
        </div>
      </div>
      <div className="mt-auto mb-2" style={{ minWidth: "150px", marginLeft: windowWidth ? 'auto': '' }}>
        <Button
          className="rounded-pill"
          style={{ background: "#8BA88E", borderColor: "#8BA88E",  }}>
          Start Shopping
        </Button>
      </div>
    </div>
  );
}
