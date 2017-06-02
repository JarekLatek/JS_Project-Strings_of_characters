var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var dinosaurTriceratops = text.replace('Velociraptor', dinosaurUpperCased);
var partOfNewText = dinosaurTriceratops.slice(0, (dinosaurTriceratops.length/2) );

console.log(partOfNewText);