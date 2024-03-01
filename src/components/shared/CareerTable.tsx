import React from "react";

type Props = {
    careers: Array<any>
};

export default function CareerTable({careers}: Props) {
    return (
        <div className="bg-white md:py-12 lg:py-[58px]">
            <div className="container mx-auto">
                <div className="nocAndNotice">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-3">Job Post</div>
                            <div className="col col-3">Department</div>
                            <div className="col col-1">Posted on</div>
                            <div className="col col-1">Deadline</div>
                            <div className="col col-1">Capacity</div>
                            <div className="col col-1">Attachments</div>
                            <div className="col col-1">Action</div>
                        </li>
                        {careers.map((data) => (
                            <li className="table-row" key={data.id}>
                                <div
                                    className="col col-3 text-whiteBg"
                                    data-label="Job Post :"
                                >
                                    {data.title}
                                </div>
                                <div
                                    className="col col-3 text-whiteBg"
                                    data-label="Department :"
                                >
                                    {data.department}
                                </div>
                                <div
                                    className="col col-1 text-whiteBg"
                                    data-label="Posted on :"
                                >
                                    {data.upload_date}
                                </div>
                                <div
                                    className="col col-1 text-whiteBg"
                                    data-label="Deadline :"
                                >
                                    {data.application_deadline}
                                </div>
                                <div
                                    className="col col-1 text-whiteBg"
                                    data-label="Capacity :"
                                >
                                    {data.capacity}
                                </div>
                                <div
                                    className="col col-1"
                                    data-label="Attachments :"
                                >
                                    <a
                                        href={`${process.env.BASE_URL}${data.file}`}
                                        target="_blank"
                                        className="file"
                                    >
                                        {data.file.split('/').pop()}
                                    </a>
                                </div>
                                <div
                                    className="col col-1 btn"
                                    data-label="Action :"
                                >
                                    <a
                                        href={`${process.env.BASE_URL}${data.file}`}
                                        download
                                        className="download"
                                    >
                                        Download
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
