import React from 'react';
import { connect } from 'react-redux';

import { addModule } from '../../../../store/actions';
import { Module, AddModule, ApplicationState } from '../../../../store/types';

import './Flex.scss';

type Props = {
    selectedModules: Array<string>;
    addModule: (module: Module) => AddModule;
}

const Flex: React.FC<Props> = props => {
    const renderIncludeButton = () => {
        let className: Array<string> = ['include-button', 'd-f', 'jc-sb', 'ai-c'];

        if(props.selectedModules.indexOf('displayFlex') !== -1){
            className.push('active');
        }

        return <div onClick={() => props.addModule({name: 'displayFlex'})} className={className.join(' ')}>Include</div>
    }

    return (
        <div className="module">
            <div className="heading d-f jc-sb">
                <h1>Display/Flex <span>(.d-f)</span></h1>
                {renderIncludeButton() }
            </div>

            <div className="classes">
                <h2 className="mb-2">Justify Content</h2>
                <h3 className="mb-1">Flex start <span>(.jc-fs)</span></h3>
                <div className="container mb-3 d-f jc-fs">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h3 className="mb-1">Flex end <span>(.jc-fe)</span></h3>
                <div className="container mb-3 d-f jc-fe">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h3 className="mb-1">Center <span>(.jc-c)</span></h3>
                <div className="container mb-3 d-f jc-c">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h3 className="mb-1">Space around <span>(.jc-sa)</span></h3>
                <div className="container mb-3 d-f jc-sa">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h3 className="mb-1">Space between <span>(.jc-sb)</span></h3>
                <div className="container mb-3 d-f jc-sb">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h2 className="mb-2">Align Items</h2>
                <h3 className="mb-1">Stretch <span>(.ai-s)</span></h3>
                <div className="container height-2 mb-3 d-f ai-s">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h3 className="mb-1">Center <span>(.ai-c)</span></h3>
                <div className="container height-2 mb-3 d-f ai-c">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h3 className="mb-1">Flex start <span>(.ai-fs)</span></h3>
                <div className="container height-2 mb-3 d-f ai-fs">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h3 className="mb-1">Flex end <span>(.ai-fe)</span></h3>
                <div className="container height-2 mb-3 d-f ai-fe">
                    <div className="item">Box 1</div>
                    <div className="item">Box 2</div>
                    <div className="item">Box 3</div>
                </div>

                <h3 className="mb-1">Baseline <span>(.ai-b)</span></h3>
                <div className="container height-2 mb-3 d-f ai-b">
                    <div className="item fs-1">Box 1</div>
                    <div className="item fs-2">Box 2</div>
                    <div className="item fs-3">Box 3</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        selectedModules: state.selectedModules
    }
}

export default connect(mapStateToProps, { addModule })(Flex);
