// react
import React from 'react';

function BlockMap() {
    return (
        <div className="block block-map">
            <div className="block-map__body">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.948324366911!2d100.63715871483343!3d13.818456713690397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d626170e2b817%3A0x1c55cae5b0710cf4!2sASAWAYONT%20PREMIUM%20AUTO%20SALE%20%26%20SERVICE!5e0!3m2!1sth!2sth!4v1713631403569!5m2!1sth!2sth"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                />
            </div>
        </div>
    );
}

export default BlockMap;
