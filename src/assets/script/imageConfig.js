const sharp = require('sharp');
const fs = require('fs');
const mkdirp = require('mkdirp');

var remoteDir = '';
var localDir = './public'
var projectDir = '/assets/projects'
var thumbnailsDir = '/assets/thumbnails'

var path = localDir + projectDir
var pathDeploy = remoteDir + projectDir // remove public slug because folder is being deplyed at root of site
var pathThumbs = localDir + thumbnailsDir
var pathThumbsDeploy = remoteDir + thumbnailsDir // remove public slug because folder is being deplyed at root of site

var thumbNailsDimension = 240

var projects = fs.readdirSync(path);

var finalObject = []
var previewObject = []


function getImages(project) {
    var images = fs.readdirSync(path + '/' + project);
    return (images)
}

function printJson(locationJson, jsonData){
    fs.writeFile(locationJson, jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function createThumbnail(newImage)
{
    var location = pathThumbs + '/' + newImage.project + '/' + newImage.name + '.jpg'
    console.log("Creating new image: " + location + ' from: ' + newImage.src)
    sharp(localDir  + newImage.src)
        .resize(thumbNailsDimension, thumbNailsDimension,{
            fit: 'inside',
        })
        .withMetadata()
        .toFile(location, (err, sharp) => {
            if (err) {
                console.error("input:" + localDir + newImage.src + "location: " + location + ": "+ err);
            }
            else {
                console.log(sharp);
            }
        });
}

function createPreview(newImage)
{
    if (newImage.id == 0)
    {
        previewObject.push(newImage.thumb)
    }
}

for (const project of projects)
{
    mkdirp(pathThumbs + '/' + project)
    var photoProject = {}
    photoProject.name = project

    var photos = []
    var images = getImages(project)
    var id = 0
    for (const image of images){
        console.log(image)
        var name = project + '-' + id
        var newImage = {
            id: id, 
            name: name,
            src: pathDeploy + '/' + project + '/' + name + '.jpg',
            thumb: pathThumbsDeploy + '/' + project + '/' + name  + '.jpg', // generate thumbnails
            project: project
        }
        createThumbnail(newImage)   // Create thumbnail image
        createPreview(newImage)     // Get first image of project as preview for Projects Page
        photos.push(newImage)       // add image to list
        id++
    }
    photoProject.photos = photos
    finalObject.push(photoProject)
}
console.log(photos)
console.log(previewObject)
printJson("src/data/photos.json", JSON.stringify(finalObject))
printJson("src/data/thumbs.json", JSON.stringify(previewObject))

