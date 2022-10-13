export function CContainer(data) {
    return (
        //  call inside <div class="row row-cols-1 row-cols-md-2 g-4"></div>
        <>
                <div class="col">
                    <div class="card text-center">
                        <div class="card-header">
                            {data.title}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{data.channelname}</h5>
                            <p class="card-text">{data.subs} users are currently subscribed to {data.channelname}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        <div class="card-footer text-muted">
                            2 days ago
                        </div>
                    </div>
                </div>
            
        </>
    );
}