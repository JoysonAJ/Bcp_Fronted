export function CContainer(data) {
    return (
        //  call inside <div className="row row-cols-1 row-cols-md-2 g-4"></div>
        <>
                <div className="col">
                    <div className="card text-center">
                        <div className="card-header">
                            {data.title}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{data.channelname}</h5>
                            <p className="card-text">{data.subs} users are currently subscribed to {data.channelname}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            
        </>
    );
}