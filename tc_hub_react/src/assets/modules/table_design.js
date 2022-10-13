
export function TABLE(data1) {
        const DisplayData=(data1.data).map(
            (info)=>{
                return(
                    <tr>
                        <td>{info.name}</td>
                        <td>{info.gender}</td>
                        <td>{info.designation}</td>
                    </tr>
                )
            }
        )

    return (
        <>
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <h5 class="card-title">Table responsive</h5>
                    <div class="table-responsive">
                        <table class="mb-0 table">
                            <thead>
                                <tr>
                                    
                                    <th>name</th>
                                    <th>Gender</th>
                                    <th>designation</th>
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