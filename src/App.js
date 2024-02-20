import React, { useEffect } from "react";
import AOS from "aos";
import Nav from "./Component/layout/navbar/Nav";
import { useTranslation } from "react-i18next";
import Spinner from "./Component/utilites/spinner/Spinner";
import Hero from "./Component/Hero/Hero";
import About from "./Component/about/About";
import Marketing from "./Component/marketing/Marketing";
import Serv from "./Component/Services/Serv";
import Footer from "./Component/layout/footer/Footer";
import FixedBtn from "./Component/utilites/fixedBtn/FixedBtn";
import Meta from "./Component/utilites/meta/Meta";
import Portfolio from "./Component/portfolio/Portfolio";
import Statistics from "./Component/statistics/Statistics";
import Rev from "./Component/rev/Rev";
import { useQuery } from "react-query";
import { request } from "./Component/utilites/axios";
const App = () => {
  // handle animation
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1200,
    });
  }, []);
  // handle page direction
  const { i18n } = useTranslation();
  // handle language
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
    if (i18n.language === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [i18n.language]);

  const fetchData = () => {
    return request({ url: "/home" });
  };
  const { isLoading, data } = useQuery("home", fetchData);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Meta
            title={data?.data?.data?.site.title}
            desc={data?.data?.data?.site.description}
            icon={data?.data?.data?.site.favicon}
          />
          <FixedBtn whatsapp={data?.data?.data?.contact.whatsapp} />
          <Nav
            logo={data?.data?.data?.site.logo}
            social={data?.data?.data?.social}
            whatsapp={data?.data?.data?.contact.whatsapp}
            behance={data?.data?.data?.social.behance}
          />
          <Hero img={data?.data?.data.banners[0]} />
          <Marketing
            data={data?.data?.data?.about}
            aboutTexts={data?.data?.data?.aboutTexts}
          />
          <Serv />
          <Portfolio data={data?.data?.data?.work} />
          <About data={data?.data?.data?.services} />
          <Rev data={data?.data?.data?.reviews} />
          <Statistics data={data?.data?.data?.results} />
          <Footer
            selgon={data?.data?.data?.site.selgon}
            logo={data?.data?.data?.site.logo}
            contact={data?.data?.data?.contact}
            social={data?.data?.data?.social}
          />
        </div>
      )}
    </div>
  );
};

export default App;
