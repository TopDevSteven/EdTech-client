import React from "react";
import TestSelectTopbar from "./TestSelectTopbar";
import TestSelectArea from "./TestSelectArea";
import TestExamArea from "./TestExamArea";

const TestLab = () => {
    return (
        <div className="workarea-container">
            <div className="testlab-container">
                <TestSelectTopbar />
            </div>
            <div className="test-select-section">
                {/* <TestSelectArea /> */}
                <TestExamArea />
            </div>
        </div>
    )
}

export default TestLab;