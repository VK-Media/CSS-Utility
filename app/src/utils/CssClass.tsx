import React from 'react';

interface Props {
    title: string;
    selector: string;
    dummies: number;
    className: string;
    dummyClasses?: Array<string>;
}

const CssClass: React.FC<Props> = props => {
    const renderDummyBoxes = (count: number, classes?: Array<string>) => {
        let dummyBoxes: Array<JSX.Element> = [];
        let itemClasses: Array<string>;

        if (classes) {
            itemClasses = ['item', ...classes];
        } else {
            itemClasses = ['item'];
        }

        for (let index = 1; index < count + 1; index++) {
            dummyBoxes.push(<div className={itemClasses.join(' ')}>Box {index}</div>);
        }

        return dummyBoxes;
    }

    return (
        <>
            <h3 className="mb-1">{props.title} <span>({props.selector})</span></h3>
            <div className={props.className}>
                {renderDummyBoxes(props.dummies, props.dummyClasses)}
            </div>
        </>
    )
}

export default CssClass;