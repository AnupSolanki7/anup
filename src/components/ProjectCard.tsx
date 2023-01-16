import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, description, imgUrl, URL }: any) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link style={{color:'white'}} href={URL} target="_blank">
        <div className="proj-imgbx">
          {/* <img src={imgUrl} /> */}
          <Image src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default ProjectCard;
