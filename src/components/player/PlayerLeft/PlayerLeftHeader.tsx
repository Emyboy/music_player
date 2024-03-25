"use client";
import DefaultTooltip from "@/components/atom/DefaultTooltip";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdFavoriteBorder, MdOutlinePerson3 } from "react-icons/md";
import { DebounceInput } from "react-debounce-input";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export default function PlayerLeftHeader({}: Props) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [ready, setReady] = useState(false);

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }

        replace(`${pathname}?${params.toString()}`);
    };

    useEffect(() => {
        setReady(true);
    }, []);

    if (!ready) {
        return (
            <>
                <Skeleton className="w-[30px] h-[30px] rounded-full opacity-5" />
                <Skeleton className="w-[100px] h-[40px] rounded-full flex-1 opacity-5" />
                <Skeleton className="w-[30px] h-[30px] rounded-full opacity-5" />
            </>
        );
    }

    return (
        <>
            <button className="text-2xl opacity-40 hover:opacity-100">
                <MdOutlinePerson3 />
            </button>
            <div className="flex flex-1 bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-5 h-10">
                <DebounceInput
                    minLength={2}
                    debounceTimeout={300}
                    type="search"
                    placeholder="Search..."
                    className="bg-inherit w-full outline-none rounded-full px-3 h-full"
                    onChange={(event) => handleSearch(event.target.value)}
                    value={searchParams.get("query") || ""}
                    autoFocus
                />
            </div>
            <DefaultTooltip label="View favorite">
                <button className="text-2xl opacity-40 hover:opacity-100">
                    <MdFavoriteBorder />
                    {/* <EachActionBtn Icon={MdFavoriteBorder} /> */}
                </button>
            </DefaultTooltip>
        </>
    );
}
