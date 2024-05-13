// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import AppSlick, { ISlickProps } from '~/components/shared/AppSlick';
import { baseUrl } from '~/services/utils';

export interface IBlockSlideshowSlide {

    desktopImage: string;
    mobileImage: string;

}

interface Props {
    slides: IBlockSlideshowSlide[];
}

const slickSettings: ISlickProps = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
};

export default function BlockSlides(props : Props) {
    const { slides } = props;

  return (
    <div className="block block-slideshow">
            <div className="">
                <div className="block-slideshow__carousel">
                    <AppSlick {...slickSettings}>
                        {slides.map((slide, slideIdx) => (
                            <AppLink key={slideIdx} className="block-slideshow__item">
                                <span
                                    className={classNames(
                                        'block-slideshow__item-image',
                                        'block-slideshow__item-image--desktop',
                                        'reflect-rtl',
                                    )}
                                    style={{ backgroundImage: `url(${baseUrl(slide.desktopImage)})` }}
                                />
                                <span
                                    className={classNames(
                                        'block-slideshow__item-image',
                                        'block-slideshow__item-image--mobile',
                                        'reflect-rtl',
                                    )}
                                    style={{ backgroundImage: `url(${baseUrl(slide.mobileImage)})` }}
                                />
                                 <span
                                    className={classNames(
                                        'block-slideshow__item-image',
                                        'block-slideshow__item-image--mobile',
                                        'reflect-rtl',
                                    )}
                                    style={{ backgroundImage: `url(${baseUrl(slide.mobileImage)})` }}
                                />

                            </AppLink>
                        ))}
                    </AppSlick>
                </div>
            </div>
        </div>
  )
}
