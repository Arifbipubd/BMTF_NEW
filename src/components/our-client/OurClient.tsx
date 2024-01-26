import React from "react";

import ClientCard from "./ClientCard";
import clientData from "@src/utils/clientData.json";

type Props = {};

export default function OurClient({}: Props) {
    return (
        <section>
            {/* client card start */}
            <div className="container">
                <div className="clientDiv">
                    {clientData.map((client) => (
                        <ClientCard key={client.id} data={client} />
                    ))}
                </div>
            </div>
            {/* client card End */}
        </section>
    );
}
