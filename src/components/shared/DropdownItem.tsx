import Link from "next/link";
import React, { Fragment } from "react";

type Props = {
    dropdownItem: any;
};

export default function DropdownItem({ dropdownItem }: Props) {
    return (
        <Fragment>
            <li className="xl:ml-6 xl:mt-3">
                <div>
                    <Link
                        href={dropdownItem.link}
                        className="text-lg text-white font-medium relative"
                    >
                        {dropdownItem.label}
                    </Link>
                </div>
            </li>
        </Fragment>
    );
}
