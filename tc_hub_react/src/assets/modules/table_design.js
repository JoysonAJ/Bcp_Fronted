
export function TABLE(data1) {
    var key = [];
    const Displaykey = (Object.keys(data1.data[1])).map(
        (info) => {
            key.push(info)
            return (
                <th>{info}</th>
            )
        }
    )
    const DisplayData = (data1.data).map(
        (info) => {
            return (
                <tr>
                    {
                        key.map(
                            (k) => {
                                return (
                                    <td>{info[k]}</td>
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
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <h5 class="card-title">{data1.heading}</h5>
                    <div class="table-responsive">
                        <table class="mb-0 table">
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