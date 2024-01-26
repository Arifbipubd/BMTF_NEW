import React from "react";

type Props = {
    data: any;
};

export default function ClientCard({ data }: Props) {
    return (
        <div className="clientCard">
            <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={data.image} alt={data.name} />
            </div>
            <h3>{data.name}</h3>
        </div>
    );
}
