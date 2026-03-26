
function Education(props) {
    return (
        <div className="Education">
            <div className="educationDetails">
                <h2>{props.school}</h2>
                <p>{props.degree}</p>
                <p>{props.timeline}</p>
            </div>
        </div>
    );
}