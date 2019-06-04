import Files from './utility/Files';

const outputDirectory = './output';

if (!Files.directoryExists(outputDirectory)){
    Files.createOutputDirectory(outputDirectory);
}

Files.renderScss('./styles/styles.scss', './output/styles.css');