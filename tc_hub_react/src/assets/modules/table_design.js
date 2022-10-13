
export function TABLE(data1) {
    var key = [];
    const Displaykey = (Object.keys(data1.data[1])).map(
        (info) => {
            key.push(info)
            return (
                <th key={info}>{info}</th>
            )
        }
    )
    const DisplayData = (data1.data).map(
        (info) => {
            return (
                <tr key={info[key[0]]}>
                    {
                        key.map(
                            (k) => {
                                return (
                                    <td key={info[k]}>{info[k]}</td>
                                );
                            }
                        )
                    }
                </tr>
            )
        }
    )

    return (

        <>
            <div className="main-card mb-3 card">
                <div className="card-body">
                    <h5 className="card-title">{data1.heading}</h5>
                    <div className="table-responsive">
                        <table className="mb-0 table">
                            <thead>
                                <tr>
                                    {Displaykey}
                                </tr>
                            </thead>
                            <tbody>
                                {DisplayData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}