import React from "react";

const Accordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="mb-3 orderInfoAccordion">
        <div id="headingOne">
          <button
            style={{ height: `100px` }}
            className="btn collapsed w-100"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <img src="/images/checksimbol1.png" className="mr-4" alt="" />
            <span style={{ color: `#8a8328`, fontSize: `16px` }}>
              {" "}
              Контрола на квалитет
            </span>
            <i aria-hidden className="fa-solid fa-plus ml-4"></i>
          </button>
        </div>
        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            culpa ullam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nulla iste odit quasi dignissimos praesentium nesciunt
            excepturi, mollitia error aspernatur molestias explicabo veniam
            velit? Voluptate, asperiores. Numquam architecto cupiditate odit
            qui! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Officia veritatis placeat cupiditate suscipit quaerat non.
          </div>
        </div>
      </div>
      <div className="mb-3 orderInfoAccordion">
        <div id="headingTwo">
          <h5 className="mb-0">
            <button
              style={{ height: `100px` }}
              className="btn collapsed w-100"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <img src="/images/boxsimbol1.png" className="mr-4" alt="" />
              <span style={{ color: `#8a8328`, fontSize: `16px` }}>
                {" "}
                Политика на враќање
              </span>

              <i aria-hidden className="fa-solid fa-plus ml-4"></i>
            </button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            porro sunt impedit reiciendis rem magnam, dolorum recusandae
            quibusdam saepe cumque eveniet corporis dolores sapiente labore
            exercitationem fugit iure. Consectetur saepe, eos sequi reiciendis
            ad beatae eum earum quas optio deleniti nostrum vero soluta
            explicabo autem incidunt, ducimus perferendis. Natus, provident.
          </div>
        </div>
      </div>
      <div className="mb-3 orderInfoAccordion">
        <div className="" id="headingThree">
          <h5 className="mb-0">
            <button
              style={{ height: `100px` }}
              className="btn collapsed w-100"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <img src="/images/youehaveacar.png" className="mr-1" alt="" />
              <span style={{ color: `#8a8328`, fontSize: `16px` }}>
                Достава{" "}
              </span>

              <i aria-hidden className="fa-solid fa-plus ml-4"></i>
            </button>
          </h5>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iure
            nihil earum unde laudantium totam beatae nam laborum deleniti.
            Voluptatem, laudantium ea obcaecati natus neque eveniet enim unde
            asperiores iure quasi nobis molestias deserunt minus fugit. Maiores
            ullam eos fuga velit id a, consequuntur dolore iure ratione vero?
            Laudantium, voluptate?
          </div>
        </div>
      </div>
      <div className="orderInfoAccordion">
        <div className="" id="headingFour">
          <h5 className="mb-0">
            <button
              style={{ height: `100px` }}
              className="btn collapsed w-100"
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <img src="/images/help1.png" className="mr-4" alt="" />
              <span style={{ color: `#8a8328`, fontSize: `16px` }}>Помош</span>

              <i aria-hidden className="fa-solid fa-plus ml-4"></i>
            </button>
          </h5>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingFour"
          data-parent="#accordionExample"
        >
          <div className="card-body  small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, ad labore? Aspernatur ullam similique at. Ipsum aperiam,
            autem placeat ea natus pariatur nemo a cupiditate. Ullam doloremque
            sint saepe exercitationem. Possimus assumenda, quidem placeat sint
            blanditiis aspernatur voluptatum dolores odit. Cupiditate delectus,
            qui recusandae sapiente ducimus deleniti nostrum numquam aliquid!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
