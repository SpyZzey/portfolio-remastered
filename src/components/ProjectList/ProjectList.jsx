import "./styles.css"
export default function ProjectList() {

    return (
        <div className={"page"}>
            <div className={"project-list "}>
                <a className={"project"}>
                    <h2>Project A</h2>
                </a>
                <a className={"project"}>
                    <h2>Project B</h2>
                </a>
                <a className={"project"}>
                    <h2>Project C</h2>
                </a>
            </div>
        </div>
    )
}