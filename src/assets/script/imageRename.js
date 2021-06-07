const fs = require('fs');
var path = './public/assets/projects'
var projects = fs.readdirSync(path);

function getImages(project) {
    var images = fs.readdirSync(path + '/' + project);
    return (images)
}

function copyintmp(project, images)
{
    var id = 0
    for (const image of images){
        var name = project + '-' + id
        console.log(name)
        fs.copyFileSync(path + '/' + project + '/' + image, '/tmp/' + project + '/' + name + '.jpg'); 
        id++
    }
}

function deleteall(project, toDelPath)
{
    fs.rmSync(toDelPath, { recursive: true }); 
}


function moveback(project, images)
{
    var id = 0
    for (const image of images){
        console.log("moving " + image)
        var name = project + '-' + id
        fs.renameSync('/tmp/' + project + '/' + name + '.jpg', path + '/' + project + '/' + name + '.jpg'); 
        id++
    }
}

function renameall(projects) {
    for (const project of projects)
    {
        var images = getImages(project)
        fs.mkdirSync('/tmp/' + project)
        console.log(project + 'copying..')
        copyintmp(project, images)
        console.log(project + 'deleting project..')
        deleteall(project, path + '/' + project)
        console.log(project + 'moving things back..')
        fs.mkdirSync(path + '/' + project)
        console.log(project + 'Creating newdir')
        moveback(project, images)
        console.log(project + 'deleting tmp files..')
        deleteall(project, '/tmp/' + project)
        console.log(project + 'done..')
    }
}

renameall(projects); 
console.log('All projects renamed')

