import * as sass from 'node-sass';
import * as fs from 'fs';

import Files from './utility/Files';

const outputDirectory = './app/output';

if (!Files.directoryExists(outputDirectory)){
    Files.createOutputDirectory(outputDirectory);
}

Files.renderScss('./app/styles/styles.scss', './app/output/styles.css');