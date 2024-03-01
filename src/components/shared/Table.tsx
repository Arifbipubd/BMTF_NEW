import React from "react";

type Props = {
    nocAndNotice: Array<any>
};

export default function Table({nocAndNotice}: Props) {
    console.log(nocAndNotice)
    return (
        <div className="bg-white  md:py-12 lg:py-[58px]">
            <div className="container mx-auto">
                <div className="nocAndNotice">
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-3">Name</div>
                            <div className="col col-4">Issued Authority</div>
                            <div className="col col-1">Upload Date</div>
                            <div className="col col-1">File</div>
                            <div className="col col-1">Action</div>
                        </li>
                        {nocAndNotice.map((data) => (
                            <li className="table-row" key={data.id}>
                                <div
                                    className="col col-3 text-whiteBg"
                                    data-label="Name :"
                                >
                                    {data.name}
                                </div>
                                <div
                                    className="col col-4 text-whiteBg"
                                    data-label="Issued Authority :"
                                >
                                    {data.authority}
                                </div>
                                <div
                                    className="col col-1 text-whiteBg"
                                    data-label="Upload Date :"
                                >
                                    {data.date}
                                </div>
                                <div className="col col-1 btn" data-label="File :">
                                    <a
                                        href={`${process.env.BASE_URL}${data.file}`}
                                        target="_blank"
                                        className="view"
                                    >
                                        View
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
