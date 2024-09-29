function greet() {
    console.log('I am greet 1')
}
function greet() {
    console.log('I am greet 2')
}
// If we try to call greet() here, the second function replaced the first one
// So always the second one gets printed. So you can't create with same name
greet()