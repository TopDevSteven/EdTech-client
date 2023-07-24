import "./ProgressBar.css"

const ProgressBar = ({ value }) => {
    return (
        <div className="progressbar-container">
            <div className="progressbar" style={{
                width: `${value}%`
            }}>

            </div>
        </div>
    )
}

export default ProgressBar