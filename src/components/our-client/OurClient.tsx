import React from "react";

import ClientCard from "./ClientCard";

type Props = {
    clients: Array<any>
};

export default function OurClient({clients}: Props) {
    return (
        <section>
            {/* client card start */}
            <div className="container">
                <div className="clientDiv">
                    {clients.map((client) => (
                        <ClientCard key={client.id} data={client} />
                    ))}
                </div>
            </div>
            {/* client card End */}
        </section>
    );
}
