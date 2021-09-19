import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./AboutUniversity.module.css";
import { motion } from "framer-motion";
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
    count: "1008格",
    description: (
      <>
        作为项目发源的高校，我们部署了曲阜师范大学的双校区，在高校实行悠悦易存预约模式解决方案，根据数据统计，自部署至{" "}
        <code>2021</code> 年度，我们共服务了 <strong>12000</strong>{" "}
        余名学生，开箱数达 <strong>60万</strong> 余次，使用率高达{" "}
        <strong>85%</strong>，我们坚持{" "}
        <strong>以服务创口碑，以合作促发展</strong>{" "}
        的准则，从根源解决高校图书馆学生物品安全问题。
      </>
    ),
  },
  {
    title: "浙江工商大学",
    Svg: require("../../static/img/university/zjsu.svg").default,
    position: ["浙江省杭州市"],
    date: "2019年10月8日",
    url: "business/case/zjsu",
    count: "1584格",
    description: (
      <>
        我们在此高校尝试了多场景多模式实现的可能性，我们在此高校同时部署了{" "}
        <strong>图书馆</strong> 场景与 <strong>体育</strong>{" "}
        场景，在图书馆场景中同时实行预约与付费长期占用模式，长期占用模式使用率高达{" "}
        <strong>100%</strong> ,好评率约为 <strong>92%</strong> ,通过 “
        <code>线上+线下</code>” 协同服务的模式，保证用户问题能在{" "}
        <strong>10</strong> 分钟之内得到解决，极大提高了用户的使用体验。
      </>
    ),
  },
  {
    title: "河海大学",
    Svg: require("../../static/img/university/hhu.svg").default,
    position: ["江苏省南京市"],
    date: "2021年3月3日",
    url: "business/case/hhu",
    count: "1032格",
    description: (
      <>
        我们在此图书馆部署智能共享存包柜，为图书馆的物品管理体系进行有效的硬件补充，在保证{" "}
        <strong>图书馆清洁</strong>
        的前提下极大程度的 <strong>保障了学生的使用需求</strong> ,一个注重{" "}
        <strong>人文主义</strong>{" "}
        的图书馆必定能得到学生的喜爱。图书馆所有的智能共享寄存柜均为{" "}
        <strong>悠悦免费提供</strong> ，由悠悦自主运营，对于长期使用用户{" "}
        <strong>收取少量费用</strong> 。
      </>
    ),
  },
  {
    title: "河南工业大学",
    Svg: require("../../static/img/university/haut.svg").default,
    position: ["河南省郑州市"],
    date: "2021年7月15日",
    url: "business/case/haut",
    count: "1368格",
    description: (
      <>
        <strong>一切为了学生，为了学生一切。</strong>
        我们本着为学生服务的方针，<strong>保障学生权益</strong>。 在{" "}
        <code>2021</code> 年 <code>7</code>{" "}
        月，河南出现极端恶劣的暴雨天气导致图书馆无法正常开放，我们第一时间{" "}
        <strong>免除了</strong>{" "}
        使用用户闭馆期间的使用费用，在这期间我们仍配设线下服务人员以保证不时之需，我们将致力成为一个{" "}
        <strong>有温度</strong> 、 <strong>有担当</strong> 企业。
      </>
    ),
  },
  {
    title: "广东医科大学",
    Svg: require("../../static/img/university/gdmu.svg").default,
    position: ["广东省湛江市"],
    date: "2021年9月11日",
    count: "36",
    url: "business/case/gdmu",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "安徽师范大学",
    Svg: require("../../static/img/university/ahnu.svg").default,
    position: ["安徽省芜湖市"],
    date: "2021年9月13日",
    url: "business/case/ahnu",
    count: "384格",
    description: (
      <>
        我们于 <code>2021</code> 年 <code>9</code>{" "}
        月 <code>12</code> 日凌晨完成悠悦智能共享存包柜的部署，我们不断{" "}
        <strong>优化产品工艺</strong> ，制定更为详细的{" "}
        <strong>宣传指引物料规范</strong>，
        <strong>升级并完善安装部署流程</strong>，目前可以保证每天部署{" "}
        <code>300</code> - <code>500</code> 格，馆方仅需提供{" "}
        <strong>基础电力与场地</strong> ，部署过程中 <strong>不影响</strong>{" "}
        在馆学生的正常学习。
      </>
    ),
  },
  {
    title: "江苏大学",
    Svg: require("../../static/img/university/ujs.svg").default,
    position: ["江苏省镇江市"],
    date: "计划中...",
    url: "business/case/ujs",
    count: "计划中...",
    description: (
      <>
        我们规范化了整体的安装部署流程，从 <code>勘测场地</code>{" "}
        <strong>→</strong> <code>制定方案</code> <strong>→</strong>{" "}
        <code>部署产品</code> <strong>→</strong> <code>使用汇报</code>{" "}
        <strong>→</strong> <code>产品售后</code>
        ，整个流程的每个环节均有 <strong>专人</strong>{" "}
        仔细核验监督，我们也会提供其他高校的部署案例与部分数据供馆方参考，我们会{" "}
        <strong>积极采纳</strong>{" "}
        馆方与同学们的合理化建议，在使用的过程中用户也可以随时提出意见。
      </>
    ),
  },
  {
    title: "同济大学",
    Svg: require("../../static/img/university/tongji.svg").default,
    position: ["上海市"],
    date: "计划中...",
    count: "计划中...",
    url: "business/case/tongji",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "杭州电子科技大学",
    Svg: require("../../static/img/university/hdu.svg").default,
    position: ["浙江省杭州市"],
    date: "计划中...",
    count: "计划中...",
    url: "business/case/hdu",
    description: (
      <>
        <strong>以品质求生存，以需求定方向。</strong>
        我们相信我们产品的质量，我们可以为意向高校 <strong>免费</strong>{" "}
        提供一组智能共享存包柜进行试用，试用过程中馆方可随时决定是否与我们合作。软件方面，产品出厂随赠{" "}
        <strong>悠悦易存基础使用系统</strong>
        ，基础系统完全可以满足馆方与同学们的管理使用需求，馆方也可以通过我们来{" "}
        <strong>深度集成定制</strong> 专属系统。
      </>
    ),
  },
];

function Position({ position }) {
  return (
    <b className={styles.tag}>
      <i className={"yespace yyweizhi"}></i>
      {position}
    </b>
  );
}

function University({ Svg, title, description, position, date, url, count }) {
  return (
    <Link to={url} className={clsx(styles.universitiyCardLink)}>
      <motion.div
        className={clsx(styles.universityCard)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1 }}
      >
        <div className="text--center">
          <Svg className={styles.universitySvg} alt={title} />
        </div>
        <div className={(clsx("text--left"), styles.content)}>
          <h3 className={styles.title}>{title}</h3>
          {position.map((props, idx) => (
            <Position key={idx} position={props} />
          ))}
          <p className={styles.description}>{description}</p>
          <p className={styles.info}>
            <i className={clsx("yespace yyriqi", styles.date)}></i>
            {date}
            <i className={clsx("yespace yyxianggeshu", styles.count)}></i>
            {count}
          </p>
          <div className="text--right">
            <a className={styles.url} href={url}>
              查看更多
            </a>
          </div>
        </div>
      </motion.div>
    </Link>
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
