import React from 'react';
import './Project3.scss';
import Image1 from './../images/project3/IMG_0572.jpg';
import Image2 from './../images/project3/IMG_0615.jpg';
import Image3 from '../images/project3/IMG_0661.jpg';

export default function Project3({ className = "" }) {
    return (
        <div className={`content project ${className}`}>
            <h1 className="title">Project 1</h1>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet vestibulum arcu. Phasellus nec scelerisque urna, sed sollicitudin mauris. Praesent a libero sed ligula hendrerit volutpat id condimentum dolor. Sed eros sem, ullamcorper sit amet faucibus quis, lobortis nec mi. Sed sed scelerisque sapien. Duis vitae semper quam. Pellentesque sit amet metus enim. Suspendisse condimentum metus in diam blandit, et pretium libero aliquet. Nulla bibendum metus ut felis pretium elementum.
            </p>
            <div className="images">
                <img src={Image3} alt=""/>
                <img src={Image2} alt=""/>
                <img src={Image1} alt=""/>
            </div>
        </div>
    );
}