// react
import React, { useState, useMemo } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
// application
import Decor from '~/components/shared/Decor';
import url from '~/services/url';
import VehicleSelect from '~/components/shared/VehicleSelect';
import { baseUrl } from '~/services/utils';
import { hrefToRouterArgs } from '~/services/router';
import { IVehicle } from '~/interfaces/vehicle';
import BlockSlides from '~/components/blocks/BlockSlides';

function BlockFinder() {
    const router = useRouter();
    const [vehicle, setVehicle] = useState<IVehicle | null>(null);

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!vehicle) {
            return;
        }

        router.push(
            ...hrefToRouterArgs(url.products({
                filters: {
                    filter_vehicle: vehicle.id.toString(),
                },
            })),
        ).then();
    };

    const slides = useMemo(
        () => [
            {
                desktopImage: "/images/finder/finder-1.jpeg",
                mobileImage: "/images/slides/slide-3-mobile.jpg",
                offer: "30% OFF",
            },
            {
                desktopImage: "/images/finder/finder-2.jpeg",
                mobileImage: "/images/slides/slide-2-mobile.jpg",
            },
            {
                desktopImage: "/images/finder/finder-3.jpeg",
                mobileImage: "/images/slides/slide-1-mobile.jpg",
            },
        ],
        []
    );

    return (
        <div className="block block-finder">

            <Decor className="block-finder__decor" type="bottom" />


            <div className='block-finder__image'>
            <BlockSlides  slides={slides}/>
            </div>

            <div className="block-finder__body container container--max--xl">
                <div className="block-finder__title">
                    <FormattedMessage id="TEXT_BLOCK_FINDER_TITLE" />
                </div>
                <div className="block-finder__subtitle">
                    <FormattedMessage id="TEXT_BLOCK_FINDER_SUBTITLE" />
                </div>
                <form className="block-finder__form" onSubmit={onSubmit}>
                    <VehicleSelect className="block-finder__select" onVehicleChange={setVehicle} />

                    <button className="block-finder__button" type="submit">
                        <FormattedMessage id="BUTTON_BLOCK_FINDER_SEARCH" />
                    </button>
                </form>
            </div>

        </div>



    );
}

export default React.memo(BlockFinder);
