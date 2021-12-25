import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider1 from "react-slick";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// next
import { useRouter } from "next/router";
// contexts
import { ClassesContext } from "../../contexts";
// component
import Breadcrumb from "../../components/Breadcrumb";
import CourseInfo from "../../components/_course-details/CourseInfo";
import Image from "next/image";
import { mainUrl } from "../../__apis__/axios";

const ClassDetails = () => {
  const router = useRouter();

  const classes = React.useContext(ClassesContext).classesState[0];
  const classesDescriptions =
    React.useContext(ClassesContext).classesDescriptionsState[0];
  const [classData, setClassData] = React.useState(null);
  const [classDescriptions, setClassDescriptions] = React.useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    const activityClassData = classes.find(
      (activityClass) => activityClass.id === parseInt(router.query.id)
    );
    setClassData(activityClassData);
  }, [classes]);

  React.useEffect(() => {
    if (classData) {
      const classDescriptionsData = classesDescriptions.filter(
        (classDescription) => classDescription.related_class === classData.id
      );
      setClassDescriptions(classDescriptionsData);
    }
  }, [classData]);

  console.log("hereere", classDescriptions);

  return (
    <>
      <Breadcrumb title={classData?.class_name} href={null} />
      <div className="eventsdetails__wrapper padding__top__botton">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="events__detils__left">
                <h3>{classData?.class_name}</h3>
                <div className="teacher__category">
                  <div className="teacher__category__single">
                    <Image
                      src={`${mainUrl}/${classData?.teacher_photo}`}
                      width={50}
                      height={50}
                      alt="teacher"
                    />
                    <div className="name__teacher">
                      <h6>Teacher</h6>
                      <span>{classData?.teacher_name}</span>
                    </div>
                  </div>
                  <div className="teacher__category__single">
                    <div className="class__cate__icon">
                      <FontAwesomeIcon icon={["fas", "object-group"]} />
                    </div>
                    <div className="name__teacher">
                      <h6>Category</h6>
                      <span>{classData?.class_category}</span>
                    </div>
                  </div>
                </div>

                <div className="slider__inne">
                  <Slider1 {...settings}>
                    <div className="single__slider">
                      <img
                        src={`${mainUrl}/${classData?.class_cover}`}
                        alt=""
                      />
                    </div>
                  </Slider1>
                </div>
                <div className="course__details">
                  <Tabs>
                    <TabList>
                      <Tab>Description</Tab>
                    </TabList>

                    <TabPanel>
                      {classDescriptions.map((classDescription) => (
                        <>
                          <p>{classDescription.body}</p>
                          <div className="course__details__mdlimg margin__top">
                            <Image
                              src={`${mainUrl}/${classDescription.image}`}
                              alt="img"
                              width={800}
                              height={400}
                              className="img-fluid"
                            />
                          </div>
                        </>
                      ))}
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="events__detils__right">
                <CourseInfo classData={classData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassDetails;
