import NAVBAR from "../modules/Admin_navbar";
import { CContainer } from "../modules/Card_container";
import { TABLE } from "../modules/table_design";
import data from '../../extraTest/tabledata.json';

export function ADMIN_HOME() {
    return (
        <>
            <NAVBAR />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <CContainer title="favorite channel" channelname="name" subs="100"/>
                <CContainer title="trending" channelname="nam2" subs="550"/>
            </div>

            <TABLE heading="TAble Heading" data={data}/>
            <a href="/nav">nav</a>
            <br />
            <a href='/table'>view Table</a>
        </>
    )
}

export default ADMIN_HOME;