import React from 'react';

import CssModule from '../../../../utils/CssModule';

const Margin: React.FC = () => {
    const renderMargin = (heading: string, count: number, classPrefix: string, additionalClasses?: Array<string>) => {
        let margin: Array<JSX.Element> = [];

        for (let index = 1; index <= count; index++) {
            const marginClass: string = classPrefix + index;
            let className: Array<string> = [marginClass, 'p-1', 'item'];

            if(additionalClasses){
                className.push(...additionalClasses);
            }

            margin.push(<div key={index} className={className.join(' ')}>(.{marginClass})</div>);
        }

        return (
            <>
                <h2 className="mb-2">{heading}</h2>
                <div className="container mb-3">
                    {margin}
                </div>
            </>
        );
    }

    return (
        <CssModule cssKey="spacingMargin" title="Spacing/Margin">
            {renderMargin('Margin', 10, 'm-')}
            {renderMargin('Margin Top', 10, 'mt-')}
            {renderMargin('Margin Right', 10, 'mr-', ['mb-1'])}
            {renderMargin('Margin Bottom', 10, 'mb-')}
            {renderMargin('Margin Left', 10, 'ml-', ['mb-1'])}
        </CssModule>
    );
}

export default Margin;
