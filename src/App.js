import logo from "./logo.svg";
import "./App.css";
import camera from "../src/assets/camera.png";
import base from "../src/assets/base.png";
import image from "../src/assets/image.png";

function App() {
  return (
    <>
      <section className="background">
        <div className="bannerContainer">
          <div className="bannerContainerDetails">
            <p>100% QUALITY, 100% SATISFACTION</p>
            <h1>Where the world comes to shop.</h1>
            <h4>
              Life is hard enough already. Let us make it a little easier,
              Vision of Snipshopfor a better outlook.
            </h4>
            <div className="bannerContainerButton">
              <button onClick={() => {}}>SHOP NOW</button>
              <div className="bannerContainerMoney">
                <p>Start from</p>
                <h3>110.00$</h3>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="bannerImage">
              <img className="cameraImage" src={camera} alt="" />
            </div>
            <div className="display">
              <p>PREV</p>
              <div className="box"></div>
              <div className="box" style={{ backgroundColor: "#0f3a96" }}></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <p>NEXT</p>
            </div>
          </div>
          <div className="cameraDetails">
            <div>
              <img className="cameraDetailsImage" src={camera} alt="" />
            </div>
            <p>
              Fuji 14mm <br /> Lens
            </p>
            <div>
              <img className="cameraDetailsImage" src={camera} alt="" />
            </div>
            <p>
              Camera <br /> Stand
            </p>
            <div>X</div>
          </div>
        </div>

        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,96L60,128C120,160,240,224,360,245.3C480,267,600,245,720,245.3C840,245,960,267,1080,282.7C1200,299,1320,309,1380,314.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <img className="base" src={base} />
      </section>

      <div  className="featureProduct">
        <div className="featureProductDetails">
          <h1>
            Featured Product For <br /> Pre-Order 
          </h1>
          <span className="discoverProduct"><p>Discover Our Products    <i style={{paddingLeft: '5px'}} class="fa-solid fa-arrow-right"></i></p></span>
        </div>
        <div style={{display: 'flex', }}>
          <div style={{fontSize: '37.5px', marginTop: '150px', marginLeft: '80px'}}>
          <i style={{marginRight: '33.33px'}} class="fa-solid fa-circle-chevron-left"></i>
          <i style={{color : '#7e8085'}} class="fa-solid fa-circle-chevron-right"></i>
          </div>
          <div style={{ marginLeft: 100, marginBottom: 100, width: 290 }}>
            <div style={{ textAlign: "center" }} className="featureProductCard">
              <img className="featureProductImage" src={image} />
              <div>VERCACE</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>EROS - W</p>
                <p style={{ fontSize: 13, color: "#8D8D8D" }}> - Women</p>
              </div>
              <div>$285.00 USD</div>
            </div>
            <div
              style={{
                width: 200,
                margin: "auto",
                textAlign: "center",
                backgroundColor: "#001439",
                paddingTop: 20,
                paddingBottom: 20,
                color: "white",
                fontWeight: 600,
                borderRadius: 50,
                marginTop: 40,
              }}
            >
              ORDER NOW
            </div>
          </div>
          <div style={{ marginLeft: 100, marginBottom: 100, width: 290 }}>
            <div style={{ textAlign: "center" }} className="featureProductCard">
              <img className="featureProductImage" src={image} />
              <div>VERCACE</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>EROS - W</p>
                <p style={{ fontSize: 13, color: "#8D8D8D" }}> - Women</p>
              </div>
              <div>$285.00 USD</div>
            </div>
            <div
              style={{
                width: 200,
                margin: "auto",
                textAlign: "center",
                backgroundColor: "#001439",
                paddingTop: 20,
                paddingBottom: 20,
                color: "white",
                fontWeight: 600,
                borderRadius: 50,
                marginTop: 40,
              }}
            >
              ORDER NOW
            </div>
          </div>
          <div style={{ marginLeft: 100, marginBottom: 100, width: 290 }}>
            <div style={{ textAlign: "center" }} className="featureProductCard">
              <img className="featureProductImage" src={image} />
              <div>VERCACE</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p>EROS - W</p>
                <p style={{ fontSize: 13, color: "#8D8D8D" }}> - Women</p>
              </div>
              <div>$285.00 USD</div>
            </div>
            <div
              style={{
                width: 200,
                margin: "auto",
                textAlign: "center",
                backgroundColor: "#001439",
                paddingTop: 20,
                paddingBottom: 20,
                color: "white",
                fontWeight: 600,
                borderRadius: 50,
                marginTop: 40,
              }}
            >
              ORDER NOW
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
