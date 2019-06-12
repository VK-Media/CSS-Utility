import React from 'react';
import { connect } from 'react-redux';

import { addModule } from '../store/actions';
import { ApplicationState, Module, AddModule } from '../store/types';

interface Props {
    selectedModules: Array<string>;
    addModule: (module: Module) => AddModule;
    cssKey: string;
    title: string;
    selector: string;
}

const CssModule: React.FC<Props> = props => {
    const renderIncludeButton = () => {
        let className: Array<string> = ['include-button', 'd-f', 'jc-sb', 'ai-c'];

        if (props.selectedModules.indexOf(props.cssKey) !== -1) {
            className.push('active');
        }

        return <div onClick={() => props.addModule({ name: props.cssKey })} className={className.join(' ')}>Include</div>
    }

    return (
        <div className="module">
            <div className="heading d-f jc-sb">
                <h1>{props.title} <span>({props.selector})</span></h1>
                {renderIncludeButton()}
            </div>

            <div className="classes">
                { props.children }
            </div>
        </div>
    )
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        selectedModules: state.selectedModules
    }
}

export default connect(mapStateToProps, { addModule })(CssModule);