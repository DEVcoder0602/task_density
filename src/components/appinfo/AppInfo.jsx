import Image from "next/image";
import flower from "../../../public/flower.png";
import smiley from "../../../public/smiling.png";
import number_1 from "../../../public/number-one.png";

const AppInfo = () => {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="bg-orange-50 rounded-2xl w-5/6 m-7 p-7">
        <div className="logo relative" style={{ left: "92%", bottom: "6%" }}>
          <Image
            src={flower}
            width={40}
            height={10}
            // className="relative"
            // style={{ left: "92%", bottom: "28%" }}
            alt=""
          />
          <div className="relative" style={{ top: "1.2rem", right: "4%" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              width="40"
              height="50"
            >
              <g
                data-name="&amp;lt;Group&amp;gt;"
                fill="#000000"
                class="color000 svgShape"
              >
                <path
                  fill="#00efd1"
                  d="M487.2,372H24.8a231.2,231.2,0,0,1,462.4,0Z"
                  data-name="&amp;lt;Path&amp;gt;"
                  class="color00efd1 svgShape"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="card flex flex-row">
          <div className="card-heading flex-1">
            <div className="header-text">
              Built out of frustration
              <h2 className="text-4xl font-bold mt-2">Meet the ahead app</h2>
            </div>
            <div className="icons flex justify-center my-16">
              <div className="relative bottom-5 left-28">
                <Image src={number_1} alt="" width={40} height={40} />
              </div>
              <div className="bg-white rounded-full p-10 border-8 border-slate-100 self-start ">
                <Image src={smiley} alt="" width={100} height={100} />
              </div>
            <div
              className="bg-orange-300 rounded-full"
              style={{ width: "300px", height: "300px" }}
            ></div>
            </div>
          </div>
          <div className="card-text flex-1 self-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              possimus aperiam ut sint reiciendis odio sed saepe dolore velit
              pariatur
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
