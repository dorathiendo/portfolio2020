import React from 'react';
import './Content.scss';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';

export default function Content({ title, id, className = "" }) {
    return (
        <div className={`content ${className}`} id={id}>
            <h1 className="title">{title}</h1>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet vestibulum arcu. Phasellus nec scelerisque urna, sed sollicitudin mauris. Praesent a libero sed ligula hendrerit volutpat id condimentum dolor. Sed eros sem, ullamcorper sit amet faucibus quis, lobortis nec mi. Sed sed scelerisque sapien. Duis vitae semper quam. Pellentesque sit amet metus enim. Suspendisse condimentum metus in diam blandit, et pretium libero aliquet. Nulla bibendum metus ut felis pretium elementum.
            </p>
            <div className="images">
                <img src={Image1} alt=""/>
                <img src={Image2} alt=""/>
                <img src={Image1} alt=""/>
                <img src={Image2} alt=""/>
            </div>
        </div>
    );
}