// get all svg files in the icons folder
const fs = require('fs');

const path = require('path');

const svgDir = path.join(__dirname, 'svg');

const files = fs.readdirSync(svgDir);

const svgFiles = files.filter(file => file.endsWith('.svg'));

const tsxFiles = svgFiles.map(file => {
    //delete any line that have "Generator" or xml in the text
    let svg = fs.readFileSync(path.join(svgDir, file), 'utf8').replace(/(Generator|(<\?xml version="1.0")).*/g, '').replace('\n'," ");
    let name = file.replace('.svg', '')

    // remove all style properties
    svg = svg.replace(/style=".*?"/g, '');
    //insert a class property in the main svg tag with the name of the component in kebabcase 
    svg = svg.replace('<svg', `<svg className="icon-${name}"`);
    //replace existing class properties with className
    svg = svg.replace(/class="/g, 'className="');
    //remove xlmns properties
    svg = svg.replace(/xml(ns)?(:.*)?=".*?"/g, '');

    name = name.replace(/[-_]([a-z])/g, function (g) { return g[1].toUpperCase(); });
    name = name.charAt(0).toUpperCase() + name.slice(1);


    //insert svg textInto a tsx template with the same name but in CamelCase
    const tsx = `import * as React from 'react';

const ${name} = (props) => (${svg})

export default ${name};
`;

    return {
        name,
        tsx
    };
});

//write the tsx files
tsxFiles.forEach(file => {
    fs.writeFileSync(path.join(__dirname, "/../../Resources/Icons", file.name + '.tsx'), file.tsx);
});

//write the index.ts file
const index = tsxFiles.map(file => `export { default as ${file.name} } from './${file.name}';`).join(' \n');
fs.writeFileSync(path.join(__dirname, '/../../Resources/Icons/index.ts'), index);
