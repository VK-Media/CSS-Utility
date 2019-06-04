import Files from './utility/Files';

const outputDirectory = './api/output';

if (!Files.directoryExists(outputDirectory)){
    Files.createOutputDirectory(outputDirectory);
}

Files.renderScss('./api/styles/styles.scss', './api/output/styles.css');