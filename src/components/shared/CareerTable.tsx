import React from "react";
import CareerData from '@src/utils/career.json'

type Props = {};

export default function CareerTable({}: Props) {
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
                            <div className="col col-1">Attachments</div>
                            <div className="col col-1">Action</div>
                        </li>
                        {CareerData.map((data) => (
                            <li className="table-row" key={data.id}>
                                <div
                                    className="col col-3 text-whiteBg"
                                    data-label="Job Post :"
                                >
                                    {data.job}
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
                                    {data.postedDate}
                                </div>
                                <div
                                    className="col col-1 text-whiteBg"
                                    data-label="Deadline :"
                                >
                                    {data.deadline}
                                </div>
                                <div
                                    className="col col-1"
                                    data-label="Attachments :"
                                >
                                    <a
                                        href={data.action}
                                        target="_blank"
                                        className="file"
                                    >
                                        {data.file}
                                    </a>
                                </div>
                                <div
                                    className="col col-1 btn"
                                    data-label="Action :"
                                >
                                    <a
                                        href={data.action}
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
