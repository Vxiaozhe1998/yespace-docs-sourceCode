import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./AboutUniversity.module.css";
import "./icon/iconfont.css";
import { Link } from "react-router-dom";

/*轮播图插件 */
import "./Swiper/pagination.min.css";
import "./Swiper/swiper.min.css";
import "./Swiper/swiper-main.css";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Pagination]);

const UniversityList = [
  {
    title: "曲阜师范大学",
    Svg: require("../../static/img/university/qfnu.svg").default,
    position: ["山东省日照市", "山东省济宁市"],
    date: "2019年5月21日",
    url: "business/case/qfnu",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "浙江工商大学",
    Svg: require("../../static/img/university/zjsu.svg").default,
    position: ["浙江省杭州市"],
    date: "2019年10月8日",
    url: "business/case/zjsu",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "河海大学",
    Svg: require("../../static/img/university/hhu.svg").default,
    position: ["江苏省南京市"],
    date: "2021年3月3日",
    url: "business/case/hhu",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "河南工业大学",
    Svg: require("../../static/img/university/haut.svg").default,
    position: ["河南省郑州市"],
    date: "2021年7月15日",
    url: "business/case/haut",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "安徽师范大学",
    Svg: require("../../static/img/university/ahnu.svg").default,
    position: ["安徽省芜湖市"],
    date: "计划中...",
    url: "business/case/ahnu",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "江苏大学",
    Svg: require("../../static/img/university/ujs.svg").default,
    position: ["江苏省镇江市"],
    date: "计划中...",
    url: "business/case/ujs",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "同济大学",
    Svg: require("../../static/img/university/tongji.svg").default,
    position: ["上海市"],
    date: "计划中...",
    url: "business/case/tongji",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Position({ position }) {
  return (
    <b className={styles.tag}>
      <i className={"yespace yyzb"}></i>
      {position}
    </b>
  );
}

function University({ Svg, title, description, position, date, url }) {
  return (
    // <a href={url} className={clsx(styles.cardUrl)}>
    <Link to={url} className={clsx(styles.universitiyCardLink)}>
      <div className={clsx(styles.universityCard)}>
        <div className="text--center">
          <Svg className={styles.universitySvg} alt={title} />
        </div>
        <div className={(clsx("text--left"), styles.content)}>
          <h3 className={styles.title}>{title}</h3>
          {position.map((props, idx) => (
            <Position key={idx} position={props} />
          ))}
          <p className={styles.description}>{description}</p>
          <p className={styles.date}>
            {/* <svg className={styles.iconfontSvg} aria-hidden="true">
            <use xlinkHref="#yyjiaofuriqi"></use>
          </svg> */}
            {/* <i className={(iconCss.iconfont, iconCss.yyjiaofuriqi)}></i> */}
            <i className={"yespace yyjiaofuriqi"}></i>
            {date}
          </p>
          <div className="text--right">
            <a className={styles.url} href={url}>
              查看更多
            </a>
          </div>
        </div>
      </div>
    </Link>

    // </a>
  );
}

export default class AboutUniversity extends React.Component {
  componentDidMount() {
    this.reSize(globalThis.innerWidth);
    this.screenChange();
  }

  screenChange() {
    window.addEventListener("resize", this.reSize);
  }
  constructor() {
    super();
    this.state = {
      size: 1,
    };
    this.reSize.bind(this);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.reSize);
  }
  reSize = (e) => {
    let ev;
    if (typeof e === "number") {
      ev = e;
    } else {
      ev = e.target.innerWidth;
    }
    var mediaSize = ev;
    var Size;
    if (mediaSize > 768) {
      Size = 3;
    } else if (mediaSize > 600) {
      Size = 2;
    } else {
      Size = 1;
    }
    this.setState({
      size: Size,
    });
  };

  render() {
    return (
      <section className={styles.universities}>
        <div className="container">
          <h1 className={styles.Headline}>合作高校</h1>
          <div className={clsx(styles.universityRow)}>
            <Swiper
              slidesPerView={this.state.size}
              spaceBetween={30}
              // centeredSlides={true}
              // centeredSlidesBounds={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              loopAdditionalSlides={2}
              className="mySwiper"
            >
              {UniversityList.map((props, idx) => (
                <SwiperSlide key={idx}>
                  <University key={idx} {...props} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
}
