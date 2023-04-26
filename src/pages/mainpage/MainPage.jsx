import React, { useEffect, useState } from 'react';
import './MainPage.css';
import { useProductContext } from '../../context/ProductContext';
import { BASE_URL } from '../../utils/const';

function MainPage() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prevState) => !prevState);
  };

  const { products, getProducts, getOneProduct } = useProductContext();
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <main className="main-page">
      {products.map((item) => {
        return (
          <div className="card">
            <div className="up-card">
              <img
                className="img-card"
                src={`${BASE_URL}${item.main_image}`}
              ></img>
              <div onClick={handleClick} className="save">
                {isFavorite ? (
                  <svg
                    className="svg"
                    width="683"
                    height="683"
                    viewBox="0 0 683 683"
                    fill="white"
                  >
                    <g clip-path="url(#clip0_993_25)">
                      <mask
                        id="mask0_993_25"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="683"
                        height="683"
                      >
                        <path
                          d="M0 -0.00012207H682.667V682.667H0V-0.00012207Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_993_25)">
                        <path
                          d="M148.535 19.9999C137.179 19.9999 126.256 24.5092 118.223 32.5532C110.188 40.5866 105.689 51.4799 105.689 62.8439V633.382C105.689 649.556 118.757 662.667 134.931 662.667H135.039C143.715 662.667 151.961 659.218 158.067 653.09C186.451 624.728 270.212 540.966 304.809 506.434C314.449 496.741 327.623 491.289 341.335 491.289C355.045 491.289 368.22 496.741 377.859 506.434C412.563 541.074 496.752 625.242 524.816 653.348C530.813 659.314 538.845 662.667 547.308 662.667C563.697 662.667 576.979 649.395 576.979 633.019V62.8439C576.979 51.4799 572.48 40.5866 564.447 32.5532C556.412 24.5092 545.489 19.9999 534.133 19.9999H148.535Z"
                          stroke="#CED8DE"
                          stroke-width="40"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    className="svg"
                    width="683"
                    height="683"
                    viewBox="0 0 683 683"
                    fill="gray"
                  >
                    <g clip-path="url(#clip0_993_25)">
                      <mask
                        id="mask0_993_25"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="683"
                        height="683"
                      >
                        <path
                          d="M0 -0.00012207H682.667V682.667H0V-0.00012207Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_993_25)">
                        <path
                          d="M148.535 19.9999C137.179 19.9999 126.256 24.5092 118.223 32.5532C110.188 40.5866 105.689 51.4799 105.689 62.8439V633.382C105.689 649.556 118.757 662.667 134.931 662.667H135.039C143.715 662.667 151.961 659.218 158.067 653.09C186.451 624.728 270.212 540.966 304.809 506.434C314.449 496.741 327.623 491.289 341.335 491.289C355.045 491.289 368.22 496.741 377.859 506.434C412.563 541.074 496.752 625.242 524.816 653.348C530.813 659.314 538.845 662.667 547.308 662.667C563.697 662.667 576.979 649.395 576.979 633.019V62.8439C576.979 51.4799 572.48 40.5866 564.447 32.5532C556.412 24.5092 545.489 19.9999 534.133 19.9999H148.535Z"
                          stroke="#CED8DE"
                          stroke-width="40"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </g>
                  </svg>
                )}
              </div>
            </div>
            <div className="down-card">
              <p className="card-down-title-1"> {item.title}</p>
              <p className="card-down-title-2">${item.price}</p>
            </div>
            <div className="admin-btn">
              <button>Delet</button>
              <button>Edit</button>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default MainPage;
