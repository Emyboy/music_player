import React from "react";
import PlayerRight from "@/components/player/PlayerRight";
import PlayerLeft from "@/components/player/PlayerLeft/PlayerLeft";

export const bg_img =
    "https://e-cdns-images.dzcdn.net/images/artist/3590cb6cac25b0b1ea6918eec878145e/250x250-000000-80-0-0.jpg";
// export const bg_img = 'https://e-cdns-images.dzcdn.net/images/cover/fad3f57dfab20d6ff79e7ee8713e5168/1000x1000-000000-80-0-0.jpg'
// export const bg_img = 'https://e-cdns-images.dzcdn.net/images/artist/23de8e5598fae2d1abb45b885a1924ce/1000x1000-000000-80-0-0.jpg'
// export const bg_img = 'https://e-cdns-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/1000x1000-000000-80-0-0.jpg'
// export const bg_img = 'https://e-cdns-images.dzcdn.net/images/artist/3366b1a63820dc2ea2b608ca7f86be76/1000x1000-000000-80-0-0.jpg'

export default function page() {
    return (
        <div className="">
            <div className="flex md:flex-row flex-col min-w-[1000px] min-h-[500px] md:absolute">
                <PlayerLeft />
                <PlayerRight />
            </div>
            <div className="md:min-w-[1000px] md:min-h-[500px]  bg-white opacity-20- border border-white rounded-xl flex z-50 p-5 opacity-20"></div>
        </div>
    );
}
