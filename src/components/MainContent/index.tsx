interface mainContentProp{
    data:string
}

const MainContent = ({data}:mainContentProp) => {
    return (
        <>
        <div className="container">
        <div className="mainContent">{data}</div>
        </div>
        </>
    )
}

export default MainContent