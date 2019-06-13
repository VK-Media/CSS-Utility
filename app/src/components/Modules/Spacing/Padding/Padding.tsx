import React from 'react';

import CssModule from '../../../../utils/CssModule';

const Padding: React.FC = () => {
    const renderPadding = (heading: string, count: number, classPrefix: string, additionalClasses?: Array<string>) => {
        let padding: Array<JSX.Element> = [];

        for (let index = 1; index <= count; index++) {
            const paddingClass: string = classPrefix + index;
            let className: Array<string> = [paddingClass, 'padding', 'item'];

            if (additionalClasses) {
                className.push(...additionalClasses);
            }

            padding.push(<div key={index} className={className.join(' ')}>(.{paddingClass})</div>);
        }

        return (
            <>
                <h3 className="mb-2">{heading}</h3>
                <div className="container mb-3">
                    {padding}
                </div>
            </>
        );
    }

    return (
        <CssModule cssKey="spacingPadding" title="Spacing/Padding">
            {renderPadding('Padding', 10, 'p-', ['m-1'])}
            {renderPadding('Padding Top', 10, 'pt-', ['m-1'])}
            {renderPadding('Padding Right', 10, 'pr-', ['m-1'])}
            {renderPadding('Padding Bottom', 10, 'pb-', ['m-1'])}
            {renderPadding('Padding Left', 10, 'pl-', ['m-1'])}
        </CssModule>
    );
}

export default Padding;
