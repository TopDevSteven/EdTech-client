import React from "react";
import "./GptSlideBox.css"

const GptSlideBox = ({item}) => {
    return (
        <div className="gptslidebox-wrapper">
            {
                item.map((element, idx) => (
                    <div className="gptslidebox" key={idx}>
                        <h1>
                        Title:
                        </h1>
                        <p>
                            {element.header}
                        </p>
                        <div className="slidebox-line"></div>
                        <h1>
                            Content:
                        </h1>
                        {
                            element.content.map((item, idx) => <p key={idx}>{item}</p>)
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default GptSlideBox;