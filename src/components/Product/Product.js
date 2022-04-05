import React from "react";
import "./Product.css"

const Product = () => {
  return (
    <div className="flex flex-col justify-center mx-auto items-center p-6 m-6 md:flex-row">
      <div className="productDescripton w-5/12 mr-5 text-left">
        <h1 className="text-4xl">Alienware AW3423DW gaming monitor</h1>
        <h1 className="text-3xl">24 inc 144hz ips lcd panel</h1>
        <p className="product-text" title="OLED gaming
          panel to PC. For years, you've had to deal with IPS and LCD screens
          while televisions and phones started incorporating OLED technology
          into their construction. Now, we can finally recommend an outstanding OLED gaming monitor.The Alienware AW3423DW gaming monitor
          boasts Samsung's new QD-LED tech that combines an ideal RGB subpixel
          structure with quantum dot technology. This produces both excellent
          color saturation and brighter pixels without any loss in clarify for
          things like fonts. In other words: this monitor brings 99.3% coverage
          of DCI-P3 color space and 1,000 nits brightness for a portion of the
          panel. The HDR on this thing is unparalleled.">
          Alienware delivered the first legitimately impressive OLED gaming
          panel to PC. For years, you've had to deal with IPS and LCD screens
          while televisions and phones started incorporating OLED technology
          into their construction. Now, we can finally recommend an outstanding
          OLED gaming monitor. <br /> The Alienware AW3423DW gaming monitor
          boasts Samsung's new QD-LED tech that combines an ideal RGB subpixel
          structure with quantum dot technology. This produces both excellent
          color saturation and brighter pixels without any loss in clarify for
          things like fonts. In other words: this monitor brings 99.3% coverage
          of DCI-P3 color space and 1,000 nits brightness for a portion of the
          panel. The HDR on this thing is unparalleled.
          
        </p>
        <div className="details flex justify-around">
          <div className="">
            <p>
              <strong>Screen size:</strong> 34-inch
            </p>
            <p>
              <strong>Aspect ratio:</strong> 21:9
            </p>
            <p>
              <strong>Response time:</strong> 0.1ms
            </p>
            <p>
              <strong>Weight:</strong> 15.26lbs
            </p>
          </div>
          <div className="">
            <p>
              <strong>Refresh rate technology:</strong> G-Sync Ultimate
            </p>
            <p>
              <strong>Panel type:</strong> QD OLED
            </p>
            <p>
              <strong>Resolution:</strong> 3440 x 1440
            </p>
            <p>
              <strong>Refresh rate:</strong> 175Hz
            </p>
          </div>
        </div>
        <button className="bg-indigo-500 rounded-md text-white p-2 m-5">
          Order now
        </button>
      </div>
      <div className="productimage">
        <img
          src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/media-gallery/monitor-alienware-aw3423dw-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=656&qlt=100,0&resMode=sharp2&size=656,402"
          alt=""
        />
      </div>
    </div>
  );
};

export default Product;
