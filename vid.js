console.log("page loaded...");


document.addEventListener('mouseover', hoverVideo, false);
var vid= documet.getElementByTagName("video");
[].forEach.call(vid, function(item){
    item.addEventListener('mouseover', hoverVideo, false);
    itemm.addEventListener('mouseout', hideVideo, false);
});
function hoverVideo(e)
{
    this.play();
}
function hidevideo(e)
{
    this.pause();
}
