import React from 'react';
import { Col } from "react-bootstrap";
import Image from 'next/image';

const ProjectCard = ({ title, description, imgUrl }:any) => {
    return (
        <Col size={12} sm={6} md={4}>
          <div className="proj-imgbx">
            {/* <img src={imgUrl} /> */}
            <Image src={imgUrl} alt=''/>
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </Col>
      )
}

export default ProjectCard